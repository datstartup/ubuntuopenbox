---
layout: default
title: QUICK UBUNTU OPENBOX INSTALLION GUIDE
description: learn about APT and apt-get.
---

#COURSE MATERIAL
#COMPLETE GUIDE TO INSTALL UBUNTU LINUX WITH OPENBOX

Here is configuration on pastebin, [**http://UbuntuOpenbox.com/lessons/course/**](UbuntuOpenbox.com/lessons/course){:target="_blank"}


Click pdf-icon for the PDF version of this page.

[spacer height="20px"]

[spacer height="20px"]
Section 3 – Install Ubuntu Operating System

[spacer height="20px"]

1. Repositories:

A repository is a server storing packages that are suitable to be installed right away (packages as well as all of their dependencies)

/etc/apt/source.list file will have a list of repository addresses.

PPA: A Personal Package Archives (PPA) is a repository maintained by an individual or an independent group; as oppose to the official repository maintained by Ubuntu.

2. Update apt information (from source.list file)

sudo apt-get update

It will go to the addresses listed in the /apt/etc/source.list file and update the information about what are on there (which packages are on there) and what have been changed (what the current packages’ versions are).

You need to execute this command whenever you want to install any package.

3. Install packages

sudo apt-get install [packages' name]

For example:

sudo apt-get install firefox openbox

will install both firefox and openbox at the same time.

4. Remove packages

sudo apt-get remove firefox

* remove packages and all their configuration file.

sudo apt-get remove --purge firefox

5. nano to edit text file

sudo nano /directory/to/text/file

Navigate through the text file using up/down/left/right keys.

* shortcut keys:

“Ctrl + X” to exit nano, “Y” to save and “N” to abort the saving.

[spacer height="20px"]
Section 4 – Install Openbox And Configure It

[spacer height="20px"]
A. Install packages

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install xorg openbox firefox tint2 terminator geany gksu

Detail:

Xorg, the foundation of GUI: xorg

If for any reason that “the startx command are not found”. Please install xinit package:

sudo apt-get install xinit

Firefox browser: firefox

Tint2 taskbar: tint2

Geany text editor: geany

Terminator terminal: terminator

For using GUI application with root privilege: gksu

For example: gksu geany /directory/to/text/file or gksu thunar

*Install VboxGuestAdditions (For testing only. If you are installing on a real machine, this virtualbox guest additions package is not needed)

Mount VboxGuestAdditions.iso file in to virtual machine.

sudo apt-get install build-essential module-assistant

sudo m-a prepare

sudo blkid #To find where the iso file is in your system (often at /dev/sr0)

mkdir cdrom

sudo mount /dev/sr0 cdrom

cd cdrom

sudo ./VBoxLinuxAdditions.run
B. Configure Openbox

Copy configuration files to user's home folder:

cp -R /etc/xdg/openbox ~/.config/

*Notice that because you are working on your home folder. You do not need to use sudo.

Edit configureation files:

geany ~/.config/openbox/rc.xml

geany ~/.config/openbox/autostart

geany ~/.config/openbox/menu.xml

Replace the content of these file with ones below:

My recommended Openbox configuration files:

rc.xml file: http://pastebin.com/ajfTFaay

autostart file: http://pastebin.com/EmY8gx9c

menu.xml file: http://pastebin.com/5Cixsqpa

* We have to edit the /etc/sudoer file for the two last entry (for shutdown and restart) of right click menu could work:

Open sudo configuration file (sudoer) in nano text editor by this command:
sudo visudo
Add this line to the end of sudoer file:
user_name ALL=(ALL) NOPASSWD: /sbin/poweroff, /sbin/reboot

Ctrl + X and “Y” to confirm.

[spacer height="20px"]
Section 5 – Essential Features Of A Operating System

[spacer height="20px"]

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gnome-icon-theme-full gvfs gvfs-backends file-roller rar unrar p7zip zip unzip p7zip-full p7zip-rar wicd htop scrot i3lock libnotify-bin xfce4-notifyd software-properties-common

Detail:

File manager: thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gnome-icon-theme-full gvfs gvfs-backends

Archieve manager: file-roller rar unrar p7zip zip unzip p7zip-full p7zip-rar

The network manager: wicd

The system mornitor: htop

The screen capture (Print Scrn): scrot

The screen locker (Supper + L): i3lock

The notification: libnotify-bin & xfce4-notifyd

For adding PPA: software-properties-common

The login manager:

I have not used login manager anymore. Just plainly entering my username and password.
We will add some lines into ~/.profile file in your home folder:

geany ~/.profile

add these line to the end of that file:
# startx after login
if [[ -z $DISPLAY ]] && [[ $(tty) = /dev/tty1 ]]; then
exec startx
fi

From now on, the GUI will autostart (without the need of startx command) as soon as you enter your username and password.

(Optional – if you want to use Openbox with other Desktop Environments or Window Managers. You will need a good login manager)

Use --no-install-recommends flag to prevent unnecessary package to be installed.

*lxdm

sudo apt-get install lxdm --no-install-recommends

Please go here for more information and instruction:

https://wiki.archlinux.org/index.php/LXDM

OR

*lightdm

sudo apt-get install lightdm lightdm-gtk-greeter --no-install-recommends

For more information and instruction

https://wiki.archlinux.org/index.php/LightDM

[spacer height="20px"]
Section 6 – Install Internet Applications

[spacer height="20px"]

Add PPA for Uget (this is the official PPA from the developer of Uget)

sudo add-apt-repository ppa:plushuang-tw/uget-stable

sudo apt-get update

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install thunderbird pidgin uget

Detail:

Firefox for internet browser: firefox (already installed)

Thunderbird for email client: thunderbird

Pidgin for multi-platform chat client: pidgin

Uget for download manager (Official PPA from developer): uget

*Dropbox for cloud storage (proprietary software)

Go to: https://www.dropbox.com/install?os=lnx

to download the .deb package and install it with this command:

sudo dpkg -i [.deb package]

[spacer height="20px"]
Section 7 – Install Multimedia Applications

[spacer height="20px"]

Add PPA for Viewnior (for Ubuntu 14.04 only. If you are using newer version of Ubuntu, it has already been in repository)

sudo add-apt-repository ppa:skellat/flow1

Add PPA for Caffeine (for Ubuntu 15.04 and earlier. It has already been in the repository for Ubuntu 15.10)

sudo add-apt-repository ppa:caffeine-developers/ppa

sudo apt-get update

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install alsa-base alsa-utils volti vlc audacious gimp shutter viewnior

Detail:

Alsa sound cards driver: alsa-base alsa-utils

*If your sound card does not work right after installing the above packages, please do as following:

sudo alsactl init

and one more step to make alsa guess the audio card(s) on your system

sudo adduser [username] audio

to add your username to autio group

Then, reboot your computer for the change to take effect.

Volti for sound applet: volti

VLC for playing videos: vlc

Audacious for playing music: audacious

Gimp as image suite (like Photoshop): gimp

Shutter for screen capture: shutter

Viewnior as image viewer: viewnior

[spacer height="20px"]
Section 8 – Install Office Applications

[spacer height="20px"]

Add PPA for LibreOffice (from the developer of LibreOffice)

sudo add-apt-repository ppa:libreoffice/ppa

sudo apt-get update

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install fbreader libreoffice-calc libreoffice-writer libreoffice-gtk

Detail:

LibreOffice Writer (word processor): libreoffice-writer

LibreOffice Calc (spreadsheet): libreoffice-calc

* OPTIONAL: for other applications of LibreOffice Suite:

LibreOffice Base (database): libreoffice-base

LibreOffice Draw (drawing): libreoffice-draw

LibreOffice Impress (presentation): libreoffice-impress

LibreOffice Math (equation editor): libreoffice-math

Theme for LibreOffice: libreoffice-gtk libreoffice-style-sifr

FB Reader for reading ebook: fbreader

*Foxit as Pdf reader (proprietary software)

https://www.foxitsoftware.com/downloads/

go to the link to download the .run package for Linux 64 bit platform. Open it and follow the instruction.

[spacer height="20px"]
Section 9 – Customize The Look

[spacer height="20px"]

Copy paste: The commands to install all of the packages for this section.

sudo apt-get install nitrogen conky obconf lxappearance obconf

Detail:

Tint2 theme:

geany ./.config/tint2/tint2rc

My tint2 theme: http://pastebin.com/hxYLwYjw

Set wallpaper: nitrogen

Change Openbox theme and more: using obconf

User-specific themes can be installed in ~/.local/share/themes or in ~/.themes.

Theme: Mistral

Download at: http://phobi4n.deviantart.com/art/Mistral-Openbox-543910044

Change GTK theme: using lxappearance

User-specific themes can be installed in ~/.local/share/themes or in ~/.themes.

Theme: Breeze-gtk

Download at: https://github.com/dirruk1/gnome-breeze

Change Icon theme: using lxappearance

Either install via PPAs or copy (the extracted) icon folder directly to /usr/share/icons or ~/.icons

Theme: Vivacious-colors

Information at: http://www.ravefinity.com/p/vivacious-colors-gtk-icon-theme.html

By PPA:

sudo add-apt-repository ppa:ravefinity-project/ppa
sudo apt-get update
sudo apt-get install vivacious-colors

Change Cursor theme: using lxappearance

Copy the cursor theme folder directly to /usr/share/icons or ~/.icons

Theme: Breeze

Download at: http://gnome-look.org/content/show.php/Breeze+Serie?content=169316
