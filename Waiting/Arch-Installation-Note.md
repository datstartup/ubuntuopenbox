
# 1 Overview
Arch Linux: latest stable versions of most software by following a rolling-release model. The default installation is a minimal base system, configured by the user to only add what is purposely required.

## Pacman
Arch's package manager pacman can install, update, and remove those packages. Using packages instead of compiling and installing programs yourself has various benefits:

* easily updatable: pacman will update existing packages as soon as updates are available
* dependency checks: pacman handles dependencies for you, you only need to specify the program and pacman installs it together with every other program it needs
* clean removal: pacman has a list of every file in a package; this way, no files are unintentionally left behind when you decide to remove a package.

When installing packages in Arch, avoid refreshing the package list without upgrading the system (for example, when a package is no longer found in the official repositories). In practice, do not run `pacman -Sy package_name` instead of `pacman -Syu package_name`, as this could lead to dependency issues.

To install a single package or list of packages, including dependencies:

```
pacman -S package_name1 package_name2 ...
```
Sometimes there are multiple versions of a package in different repositories (e.g. extra and testing). To install the version from the extra repository in this example, the repository needs to be defined in front of the package name:
```
pacman -S extra/package_name
```

To remove a package and its dependencies which are not required by any other installed package:

```
pacman -Rs package_name
```
# Upgrading package

The following command synchronizes the repository databases and updates the system's packages, excluding "local" packages that are not in the configured repositories:
```
pacman -Syu
```

#  Arch User Repository (AUR) vs Community repository (directly accessible by pacman)

New package often enter AUR before ship into the official repositories.


# Install the linux-lts package

The linux-lts package is an alternative Arch kernel package, and is available in the core repository. This particular kernel version has long-term support (LTS) from upstream, including security fixes and some feature backports. It is useful if you prefer the stability of less-frequent kernel updates or if you want a fallback kernel in case a new kernel version causes problems. 

# Upgrading the system

It is recommended to perform full system upgrades regularly via Pacman, to enjoy both the latest bug fixes and security updates, and also to avoid having to deal with too many package upgrades that require manual intervention at once. When requesting support from the community, it will usually be assumed that the system is up to date.

Make sure to have the Arch install media or another Linux "live" CD/USB available so you can easily rescue your system if there is a problem after updating. 

# Read before upgrading the system

Before upgrading, users are expected to visit the Arch Linux home page (https://www.archlinux.org/) to check the latest news, or alternatively subscribe to the RSS feed or the arch-announce mailing list. When updates require out-of-the-ordinary user intervention (more than what can be handled simply by following the instructions given by pacman), an appropriate news post will be made.

Before upgrading fundamental software (such as the kernel, xorg, systemd, or glibc) to a new version, look over the appropriate forum (https://bbs.archlinux.org/) to see if there have been any reported problems.

Users must equally be aware that upgrading packages can raise unexpected problems that could need immediate intervention; therefore, it is discouraged to upgrade a stable system shortly before it is required for carrying out an important task. It is wise to wait instead to have enough time in order to be able to deal with possible post-upgrade issues. 

# Cleaning the package cache

Pacman stores its downloaded packages in /var/cache/pacman/pkg/ and does not remove the old or uninstalled versions automatically. This has some advantages:

    It allows to downgrade a package without the need to retrieve the previous version through other means, such as the Arch Linux Archive.
    A package that has been uninstalled can easily be reinstalled directly from the cache folder, not requiring a new download from the repository.

However, it is necessary to deliberately clean up the cache periodically to prevent the folder to grow indefinitely in size.

The paccache(8) script, provided within the pacman-contrib package, deletes all cached versions of installed and uninstalled packages, except for the most recent 3, by default:

# paccache -r

Enable and start paccache.timer to discard unused packages weekly. 


#2 Installation Steps
## 2.1 Download latest Arch linux ISO
```
https://www.archlinux.org/download/
```

Verify signature:
```
gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig
```

Write the image to an usb using Etcher

2.2 Internet connection

Check if there is an Internet connection (if on wired)

 ip addr show

For WiFi, you can use wifi-menu

 wifi-menu

Ping
 ping archlinux.org
If you do have a network connection but no IP address use:

 dhcpcd

2.5 Edit the mirrorlist (optional)

  nano /etc/pacman.d/mirrorlist

Re: mirrorlists. It's kinda cheating, but you can install package "reflector" right after you confirm connectivity and run it for a really, really fast generation of the fastest mirrors to a mirrorlist. And you'll be guaranteed to have the absolutely fastest mirrors. It will copy it to your new root when you run pacstrap. Alternatively, you can use sed or grep to filter the existing list by country or whatever. Here's a sample reflector use:

$ reflector --verbose --latest 10 --country "United States" --protocol https --sort rate --save /etc/pacman.d/mirrorlist
BONUS: you can create a pacman hook to run reflector automatically every time pacnew gets a new mirrorlist. (see the archwiki for "reflector")

2.6 Update repository index
 pacman -Syyy

## 2.5 Update the system clock

Use timedatectl(1) to ensure the system clock is accurate:

 timedatectl set-ntp true

2.7 See partitions/drives on the system (find the name of your hard drive)

fdisk -l

2.8 Start the partitioner (fdisk)

 fdisk /dev/<DEVICE> (substitute <DEVICE> for your device name, example: /dev/sda or /dev/nvme0n1)

2.9 Show current partitions
 p
2.10 Create partition
o at the prompt for a MBR partition table or g for a GUID Partition Table (GPT).

Create a new partition with the n command. You enter a partition type, partition number, starting sector, and an ending sector.

When prompted, specify the partition type, type p to create a primary partition or e to create an extended one. There may be up to four primary partitions. 


BIOS with MBR (all of my machine is on this)
| Mount point   |partition   |  Type        | Suggested size|
|---------------|:----------:|-------------:|--------------:|
| /mnt          |  /dev/sdX1 | Linux (Ext4) | +30G          |
| /mnt/home     |  /dev/sdX2 | Linux (Ext4) | remainder     | 

* / need boot flag 

UEFI with GPT
| Mount point   |partition   |  Type        | Suggested size|
|---------------|:----------:|-------------:|--------------:|
| /mnt/boot/EFI |  /dev/sdX1 | EFI (-F32)   | +500M         |
| /mnt          |  /dev/sdX2 | Linux (Ext4) | +30G          |
| /mnt/home     |  /dev/sdX3 | Linux (Ext4) | remainder     |

* Note: UEFI booting does not involve any "boot" flag, booting relies solely on the boot entries in NVRAM. Parted and its front-ends use a "boot" flag on GPT to indicate that a partition is an EFI system partition.

* more on: [Here](https://wiki.archlinux.org/index.php/Partitioning#Example_layouts)

2.10a Create partition with fdisk

When partitioning it is always a good idea to follow the default values for first and last partition sectors. Additionally, specify partition sizes with the +<size>{M,G,...} notation. Such partitions are always aligned according to the device properties.

On a disk with a MBR partition table leave at least 33 512-byte sectors (16.5 KiB) of free unpartitioned space at the end of the disk to allow converting between MBR and GPT.

Create a new partition with the n command. You enter a partition type, partition number, starting sector, and an ending sector.

When prompted, specify the partition type, type p to create a primary partition or e to create an extended one. There may be up to four primary partitions.

The first sector must be specified in absolute terms using sector numbers. The last sector can be specified using the absolute position in sectors or using the + symbol to specify a position relative to the start sector measured in sectors, kibibytes (K), mebibytes (M), gibibytes (G), tebibytes (T), or pebibytes (P); for instance, setting +2G as the last sector will specify a point 2GiB after the start sector. Pressing the Enter key with no input specifies the default value, which is the start of the largest available block for the start sector and the end of the same block for the end sector. 

 The default, Linux filesystem, should be fine for most use. Press l to show the codes list.

 EFI system partition requires type EFI System.

2.10 Create EFI partition
 g (to create an empty GPT partition table)
 n
 enter
 enter
 +500M
 t
 1 (For EFI)

2.11 Create rootfs partition

 n
 enter
 enter
 +30G

* You can make the partition bootable by typing a. (boot flag a partition?)
2.12 Create home partition

 n
 enter
 enter
 enter


2.13 Show current partitions again
 p
2.14 Finalize partition changes
 w
2.15 Format the EFI partition
 mkfs.fat -F32 /dev/<DEVICE PARTITION 1> (for example: /dev/sda1)

2.16 Format the rootfs partition
mkfs.ext4 /dev/sdX1
2.17 Format the home partition
mkfs.ext4 /dev/sdX2

2.17b. Initialize swap partition
If you created a partition for swap, initialize it with mkswap(8):

 mkswap /dev/sdX2
 swapon /dev/sdX2

2.18 Mount the root partition
 mount /dev/<PARTITION 2> /mnt
2.19 Create the home partition mount point
 mkdir /mnt/home
2.20 Mount the home volume
 mount /dev/<PARTITION 3> /mnt/home
2.21 Create the /etc dirctory
 mkdir /mnt/etc
2.22 Create the /etc/fstab file
The fstab(5) file can be used to define how disk partitions, various other block devices, or remote filesystems should be mounted into the filesystem.

 genfstab -U -p /mnt >> /mnt/etc/fstab
2.23 Check the /etc/fstab file
2.24 Install Arch Linux base packages
Install essential packages

Use the pacstrap script to install the base package, Linux kernel and firmware for common hardware:

# pacstrap /mnt base linux-firmware

2.25 Access the in-progress Arch installation
Change root into the new system: 
arch-chroot /mnt

2.26 Install a kernel and headers
pacman -S linux linux-lts linux-headers linux-lts-headers
2.27 Install a text editor
 pacman -S nano
2.28 Install optional packages
2.29 Enable OpenSSH if you've installed it
2.30 Install packages for networking
 pacman -S networkmanager wpa_supplicant wireless_tools netctl
2.31 Install dialog (required for wifi-menu)
 pacman -S dialog

2.32 Enable networkmanager
 systemctl enable NetworkManager
2.33 Create the initial ramdisk for the main kernel
Creating a new initramfs is usually not required, because mkinitcpio was run on installation of the kernel package with pacstrap. 
mkinitcpio -p linux
2.34 Create the initial ramdisk for the LTS kernel (if you've installed it)
mkinitcpio -p linux-lts

2.35 Uncomment the line from the /etc/locale.gen file that corresponds to your locale
 nano /etc/locale.gen (uncomment en_US.UTF-8)
2.36 Generate the locale
 locale-gen
2.37 Set the root password
 passwd
2.38 Create a user for yourself
 useradd -m -g users -G wheel <username> # also add user to the group 'wheel'
2.39 Set your password
 passwd <username>
2.40 Install sudo (may already be installed)
 pacman -S sudo
2.41 Allow users in the 'wheel' group to use sudo
 EDITOR=nano visudo

 %wheel ALL=(ALL) ALL
2.42 Install packages for GRUB

 pacman -S grub 

 (efibootmgr dosfstools os-prober mtools)
2.43 Create the directory for EFI boot
 mkdir -p /boot/EFI
2.44 Mount the EFI partition
 mount /dev/<DEVICE PARTITION 1> /boot/EFI
2.45 Install GRUB
 grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck
2.46 Create the locale directory for GRUB
 mkdir /boot/grub/locale
2.47 Copy the locale file to locale directory
  cp /usr/share/locale/en\@quot/LC_MESSAGES/grub.mo /boot/grub/locale/en.mo
2.48 Generate GRUB's config file
 grub-mkconfig -o /boot/grub/grub.cfg
2.49 Create swap file
 fallocate -l 2G /swapfile
 chmod 600 /swapfile
 mkswap /swapfile
2.50 Back up the /etc/fstab file
 cp /etc/fstab /etc/fstab.bak
2.51 Add the swap file to the /etc/fstab file
 echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
2.52 Check the /etc/fstab file to make sure it includes all the right partitions
 cat /etc/fstab
2.53 Wrapping Up, Optional Considerations
    2.53.1 Install CPU Microde files (AMD CPU)
     pacman -S amd-ucode
    2.53.2 Install CPU Microde files (Intel CPU)
     pacman -S intel-ucode
    2.53.3 Install Xorg if you plan on having a GUI
     pacman -S xorg-server
    2.53.4 Install 3D support for Intel or AMD graphics
     pacman -S mesa
    2.53.5 Install Nvidia Driver packages if you have an Nvidia GPU
     pacman -S nvidia nvidia-utils nvidia-lts
    2.53.6 Install Virtualbox guest packages
     pacman -S virtualbox-guest-utils xf86-video-vmware

     * this is for Arch in a VirtualBox virtual machine
2.54 Moment of truth: Reboot your machine
    2.54.1 Exit the chroot environment
     exit
    2.54.2 Unmount everything (some errors are okay here)
     umount -a
    2.54.3 Reboot the machine
     reboot

Openbox: pacman -S compton lxappearance nitrogen obconf openbox thunar scrot plank conky xarchiver xorg-xbacklight