---
title: "Move /home directory to another partition"
header:
categories:
  - tips
tags:
  - debian
---

The task is fairly simple. Essentially it is in two steps:

* Step 1: Copy old data from `\home` directory to the new partition.
* Step 2: Edit `fstab` to mount the new partition to `\home` directory at boot.

### 1. Copy data to new partition

* 1.1 Mount partition

Find the name of partition you want to mount:

```
lsblk -o NAME,FSTYPE,LABEL,SIZE,MOUNTPOINT
```

Mine:

```
NAME   FSTYPE LABEL   SIZE MOUNTPOINT
sda                 232.9G 
├─sda1 ntfs   OS      132G 
├─sda2 ntfs           852M 
├─sda3                  1K 
├─sda4 ext4          49.9G 
├─sda5 ext4          28.3G /         <==  Now I know its name (sda5)     
└─sda6 swap           1.5G [SWAP]

```

Find the UUID
```
sudo blkid
```

Mine:
```
/dev/sda1: LABEL="OS" UUID="E8787A43787A1114" TYPE="ntfs" PARTUUID="67174a59-01"
/dev/sda2: UUID="F4448D05448CCBB4" TYPE="ntfs" PARTUUID="67174a59-02"
/dev/sda4: UUID="9c1dcc82-c8f5-4038-8198-81c99e73e3f6" TYPE="ext4" PARTUUID="67174a59-04" <==
/dev/sda5: UUID="79894d91-4dd0-4e4f-a5ec-12b95efb0b82" TYPE="ext4" PARTUUID="67174a59-05"
/dev/sda6: UUID="72cb4892-2ada-4ae2-ba2c-8df7531bf617" TYPE="swap" PARTUUID="67174a59-06"

```
Create a mount point:

mkdir /media/newhome/

Finnally, mount it:

sudo mount /dev/sda4 /media/newhome/

Copy data from old home to new home:

sudo rsync -av -A -X /home/* /media/newhome/

* `-av -A -X`: to preserve everything (permission, time, owner...)

### 1.1 Delete the old home

I often back up mine frequenly, so I just delete it.

```
rm -rf /home/*
```

You only have this chance to delete the old home. After that, it will be used as the mount point for the new home partition.

If you miss this step or decide to rename it to backup, you will no longer have access to it using current system. The only way to access/ delete it later is to use a live usb.

### 2. Mount the new home

sudo nano /etc/fstab

add this entry:

```
UUID=9c1dcc82-c8f5-4038-8198-81c99e73e3f6   /home   ext4   defaults   0   2
```

Reboot and the new partion is in use as /home.

### 3. Move home partition to another partition

This is the task that I think rarely happen but it is the same procedure. Copy data and mount the new partition to `/home`.