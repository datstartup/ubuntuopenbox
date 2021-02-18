---
title: "Move /home directory to another partition or drive"
header:
categories:
  - tips
tags:
  - linux
---

I always manage to fill up my `/home` folder with all kinds of unknown things and the act will make the whole system starved of space. Moving `home` to another partition is a rational solution for me.

The task is fairly simple. Essentially it is in two tasks:

* Task 1: Copy old data from `/home` directory to the new partition.
* Task 2: Edit `fstab` to mount the new partition to `/home` directory at boot.

### 1. Copy data to new partition

Two steps:

* 1.1 Mount the new partition at a temporary mount point, "/media/newhome/"
* 1.2 Copy data from "old" home to the new partition.


#### 1.1 Mount the new partition partition

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
├─sda4 ext4          49.9G      #<==  Now I know its name (sda5)
├─sda5 ext4          28.3G /              
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
/dev/sda4: UUID="9c1dcc82-c8f5-4038-8198-81c99e73e3f6" TYPE="ext4" PARTUUID="67174a59-04" # <==
/dev/sda5: UUID="79894d91-4dd0-4e4f-a5ec-12b95efb0b82" TYPE="ext4" PARTUUID="67174a59-05"
/dev/sda6: UUID="72cb4892-2ada-4ae2-ba2c-8df7531bf617" TYPE="swap" PARTUUID="67174a59-06"

```
Create a mount point - a mount point is simply just a directory:
```
mkdir /media/newhome/
```
Finally, mount it:
```
sudo mount /dev/sda4 /media/newhome/
```

#### 1.2 Copy data from old home to new home

I choose `rsync` because I am more proficient with it than `cp` as I want to preserve file parameters (I know that `cp` can do it though, just do not know how).

```
sudo rsync -av -A -X /home/* /media/newhome/
```
* `-av -A -X`: to preserve everything (permission, time, owner...)

#### 1.3 Delete or move the old home

You have two choices here, delete or move the old home. Either way will work.

* Option 1 - Delete the old home.

```
rm -rf /home/*
```

* Option 2 - Move the old home. 
A backup at hand is always nice, so you could make a copy of it.

```
sudo mv /home /home.bk
```

And recreate the `/home` mount point.
```
sudo mkdir /home
```

### 2. Mount the new home

#### 2.1 Manually mount for test
I find this step is unnecessary but I show it here anyways in case you are curious.

You can test the new home by manually mounting it after you delete/ move the old home.

Remember that we have mounted the `/dev/sdb4` to the `newhome` folder to copy data in `step 1`, so we have to unmount it first. 
```
sudo umount /dev/sdb4
```
Then, `mount` it to `/home` directory.
```
sudo mount /dev/sdb4 /home/ 
```

#### 2.2 Make the mount permanent in fstab

Open `fstab` using `nano`.
```
sudo nano /etc/fstab
```
add this entry:

```
UUID=9c1dcc82-c8f5-4038-8198-81c99e73e3f6   /home   ext4   defaults   0   2
```

Reboot and the new partition will be in use as `/home`.

### 3. Move home folder/partition to another drive

It is the same procedure. Just copy data and mount the new drive to `/home`.
