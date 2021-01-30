---
layout: single
title: "QUICK UBUNTU OPENBOX INSTALLION GUIDE"
header:
categories:
  - Guide
tags:
  - Ubuntu  
  - Openbox
  - NetInstall
---

# COURSE MATERIAL
# COMPLETE GUIDE TO INSTALL UBUNTU LINUX WITH OPENBOX

This material used to be for my course on Udemy.

# Section 3 – Install Ubuntu Operating System

## 1. Repositories:

A repository is a server storing packages that are suitable to be installed right away.

`/etc/apt/source.list` file will have a list of repository addresses.

PPA: A Personal Package Archives (PPA) is a repository maintained by an individual or an independent group; as oppose to the official repository maintained by Ubuntu.

## 2. Update apt information (from source.list file)
```
sudo apt-get update
```
It will go to the addresses listed in the `/apt/etc/source.list` file and update current information of which packages, what have been changed and what the current versions are.

You need to execute this command whenever you want to install or update any package.

## 3. Install packages
```
sudo apt-get install [packages' name]
```
For example:
```
sudo apt-get install firefox openbox
```
will install both firefox and openbox at the same time.

## 4. Remove packages
```
sudo apt-get remove firefox
```
* remove packages and all their configuration file.
```
sudo apt-get remove --purge firefox
```
## 5. Use nano to edit a text file
```
sudo nano /directory/to/text/file
```
Navigate through the text file using up/down/left/right keys.

Userful shortcut keys: “Ctrl + X” to exit nano, “Y” to save and “N” to abort the saving.

# Section 4 – Install Openbox And Configure It

## A. Install packages

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install xorg openbox firefox tint2 terminator geany gksu

Detail:

** Xorg, the foundation of GUI: xorg

If for any reason that “the startx command are not found”. Please install xinit package:

sudo apt-get install xinit

** Firefox browser: firefox

** Tint2 taskbar: tint2

** Geany text editor: geany

** Terminator terminal: terminator

** For using GUI application with root privilege: gksu

For example: `gksu geany /directory/to/text/file` or `gksu thunar`

** Install VboxGuestAdditions (For testing only. If you are installing on a real machine, this virtualbox guest additions package is not needed)

Mount VboxGuestAdditions.iso file in to virtual machine.
```
sudo apt-get install build-essential module-assistant

sudo m-a prepare

sudo blkid #To find where the iso file is in your system (often at /dev/sr0)

mkdir cdrom

sudo mount /dev/sr0 cdrom

cd cdrom

sudo ./VBoxLinuxAdditions.run
```

## B. Configure Openbox

Copy configuration files to user's home folder:
```
cp -R /etc/xdg/openbox ~/.config/
```
Note that because you are working on your home folder. You do not need to use sudo.

Edit configureation files:
```
geany ~/.config/openbox/rc.xml

geany ~/.config/openbox/autostart

geany ~/.config/openbox/menu.xml
```
Replace the content of these files with my Openbox configuration files:

rc.xml file: [http://pastebin.com/ajfTFaay](http://pastebin.com/ajfTFaay)

autostart file: [http://pastebin.com/EmY8gx9c](http://pastebin.com/EmY8gx9c)

menu.xml file: [http://pastebin.com/5Cixsqpa](http://pastebin.com/5Cixsqpa)

## Section 5 – Essential Features Of A Operating System

The commands to install all of the packages for this section.
```
sudo apt-get install thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gnome-icon-theme-full gvfs gvfs-backends file-roller rar unrar p7zip zip unzip p7zip-full p7zip-rar wicd htop scrot i3lock libnotify-bin xfce4-notifyd software-properties-common nitrogen lightdm
```
Detail:

** File manager: thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gnome-icon-theme-full gvfs gvfs-backends 

** Archieve manager: file-roller rar unrar p7zip zip unzip p7zip-full p7zip-rar

** Network manager: wicd

** System mornitor: htop

** Screen capture (Print Scrn): scrot

** Screen locker (Supper + L): i3lock

** Notification: libnotify-bin & xfce4-notifyd

** For adding PPA: software-properties-common
** Wallpaper manager: nitrogen

** Login manager: lightdm

You can use `--no-install-recommends` flag to prevent unnecessary packages to be installed.
```
sudo apt-get install lightdm lightdm-gtk-greeter --no-install-recommends
```
For more information and instruction [https://wiki.archlinux.org/index.php/LightDM](https://wiki.archlinux.org/index.php/LightDM)


* If you do not want to use login manager. Just plainly entering username and password.
Add some lines into ~/.profile file in your home folder:
```
geany ~/.profile
```
add these line to the end of that file:
```
# startx after login
if [[ -z $DISPLAY ]] && [[ $(tty) = /dev/tty1 ]]; then
exec startx
fi
```
From now on, the GUI will autostart (without the need of `startx` command) as soon as you enter your username and password.

## Section 6 – Install Internet Applications

Add PPA for Uget (this is the official PPA from the developer of Uget)
```
sudo add-apt-repository ppa:plushuang-tw/uget-stable

sudo apt-get update
```

The commands to install all of the packages for this section.
```
sudo apt-get install thunderbird pidgin uget
```
Detail:

** Firefox for internet browser: firefox (already installed)

** Thunderbird for email client: thunderbird

** Pidgin for multi-platform chat client: pidgin

** Uget for download manager (from a PPA): uget

** Dropbox for cloud storage (proprietary software)

Go to: [https://www.dropbox.com/install?os=lnx](https://www.dropbox.com/install?os=lnx)

Download the `.deb` package and install it with this command:
```
sudo dpkg -i [.deb package]
```

# Section 7 – Install Multimedia Applications


The commands to install all of the packages for this section.
```
sudo apt-get install alsa-base alsa-utils pavucontrol pulseaudio vlc audacious gimp shutter viewnior 
```
** Alsa sound cards driver: alsa-base alsa-utils

** Audio center control: pavucontrol

** Video player: vlc

** Music player: audacious

** Image suite (like Photoshop): gimp

** Screenshot app: shutter

** Image viewer: viewnior

## Section 8 – Install Office Applications


Add PPA for LibreOffice (from the developer of LibreOffice)
```
sudo add-apt-repository ppa:libreoffice/ppa

sudo apt-get update
```
The commands to install all of the packages for this section.
```
sudo apt-get install fbreader libreoffice-calc libreoffice-writer libreoffice-gtk
```
Detail:

LibreOffice Writer (word processor): `libreoffice-writer`

LibreOffice Calc (spreadsheet): `libreoffice-calc`

* OPTIONAL: for other applications of LibreOffice Suite:

LibreOffice Base (database): `libreoffice-base`

LibreOffice Draw (drawing): `libreoffice-draw`

LibreOffice Impress (presentation): `libreoffice-impress`

LibreOffice Math (equation editor): `libreoffice-math`

Theme for LibreOffice: `libreoffice-gtk libreoffice-style-sifr`

** FB Reader for reading ebook: fbreader

** Foxit as Pdf reader (proprietary software)

https://www.foxitsoftware.com/downloads/

go to the link to download the .run package for Linux 64 bit platform. Open it and follow the instruction.

Note that by open it, I mean using terminal like this:

```
# In its folder
$sh ./FoxitReader_version_Setup.run
```

Why I tell you to use Foxit while there is some others in the repository? I want to show you a lot of abnormal way to install app.

These day I use Zathura because its flexibility color scheme (chose your own color scheme to view file) and the shortcut key. You will have to research a bit to know how to config it the way you like.

## Section 9 – Customize The Look


The commands to install all of the packages for this section.
```
sudo apt-get install conky obconf lxappearance obconf
```
Detail:

## 1.Change the look of tint2 
Tint2 config file:
```
geany ./.config/tint2/tint2rc
```
My tint2 config: [http://pastebin.com/hxYLwYjw](http://pastebin.com/hxYLwYjw)

## 2.Change Openbox theme and more: 

Openbox Theme: Mistral

Download at: [http://phobi4n.deviantart.com/art/Mistral-Openbox-543910044](http://phobi4n.deviantart.com/art/Mistral-Openbox-543910044)

User-specific themes can be installed in `~/.local/share/themes` or in `~/.themes`. So, Openbox theme, Gtk theme, and cursor theme will go there.

Use the command `obconf` to open obconf, then change the theme.

## 3. Chang Gtk theme, cursor theme


Again, User-specific themes can be installed in `~/.local/share/themes` or in `~/.themes`. So, Openbox theme, Gtk theme, and cursor theme will go there.

Gtk theme: Breeze-gtk

Download at: [https://github.com/dirruk1/gnome-breeze](https://github.com/dirruk1/gnome-breeze)

Cursor theme: Breeze

Download at: [http://gnome-look.org/content/show.php/Breeze+Serie?content=169316](http://gnome-look.org/content/show.php/Breeze+Serie?content=169316)

Use the command `lxappearance` to open lxappearance, then change the theme.

# 4. Change Icon theme

Icon themes are either install via PPAs or copy (the extracted) icon folder directly to `/usr/share/icons` or `~/.icons`

Icon Theme: Vivacious-colors

Information at: http://www.ravefinity.com/p/vivacious-colors-gtk-icon-theme.html

By PPA:
```
sudo add-apt-repository ppa:ravefinity-project/ppa
sudo apt-get update
sudo apt-get install vivacious-colors
```
Use the command `lxappearance` to open lxappearance, then change the theme.

