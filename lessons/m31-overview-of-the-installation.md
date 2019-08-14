---
layout: single
title: OVERVIEW OF THE INSTALLATION
description: Go through the steps you will take and the packages you will install.
toc: true
toc_label: "Overview"
toc_icon: "cog"
author_profile: true
---

Objective: It will give you the full picture of how Openbox and other components are put together to form a complete Ubuntu Openbox system.

## Core concepts:
### Window Manager Vs. Desktop Environment
To understand what Openbox actually is, it's important to know the differences between a window manager and a desktop environment.

>A window manager is the program which draws on your screen the "box" in which the program is run. A window manager controls how your program window works, looks and acts. It decides what window decorations to use and gives you a way to move the windows, hide them, resize them, minimize them and close them. It controls what buttons you push to do those things, and what keys you press to make those things happen.

>On the other hand, a desktop environment minds the entire desktop. It provides a taskbar, a system tray, a login manager, additional menus or perhaps screensavers and desktop icons. It might include a file manager, a text editor or some other accessory programs, too.”

from: [Debian wiki](https://wiki.debian.org/Openbox/ "Openbox documentation on Debian's wiki")

In short, what Openbox give you are just the "boxes" in which the programs are run. This is modest, but this modesty is also the reason why people love Openbox specifically or Window manager in general. You will have the freedom to deeply configure the system and to choose the only specific apps/ features you actually need.

## Overview of the installation

### 1. Core steps

1. Step 1: Install the base Ubuntu OS without any GUI.

	This step only install Ubuntu to the point of having a functional OS (a headless server), on top of this base, we will build our Openbox and other desktop components.

2. Step 2: Install Xorg, the foundation of GUI.

	Xorg will install graphic driver and other requisites for the GUI.

3. Step 3: Install Openbox and other component of a desktop environment (file manager, network manager, notification, taskbar...).  	

	After this step, we will have a complete desktop and you can consider it has done and you can completely skip step 4 and go straight to step 5 to polish your system with icon and theme.

 	If you want to know more about *my* chosen and recommended applications, please read on to step 4.

4. Step 4: Install necessary applications for day to day use.

	I group these applications into some major ones based on their general usage: Internet applications (web browser, email client, torrent client), Office applications (Libre office suite), Multimedia applications (VLC, SMplayer...)...

	The main point of this step is to show you **my** choice as just a humble reference. Please feel free to choose any alternative suited you.

5. Step 5: Customize the look and feel of your new OS.
  Their will come to the time that your computer is just like a tool for your work and the look and feel of it will have no longer matter. But at this moment, I can assure you that customize your own Openbox is a fun and exciting experience.

### 2. Core packages:

Here is the command to install all necessary packages for a competent Ubuntu operating system using Openbox (other non-openbox packages are intentionally left out of the list):

```
sudo apt-get install xorg openbox openbox-themes openbox-xdgmenu suckless-tools obmenu lxappearance terminator lxpanel thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gvfs gvfs-backends nitrogen alsa-base alsa-utils vlc numlockx light-locker lightdm wicd lxpolkit xfce4-notifyd
```

**What each of these packages actually does?**

With the above command, you have installed a series of packages which you can install one by one as explaining here:

1. Xorg as the requisite of GUI.
:	Packages: **`xorg`**

2. Openbox.
: Package: **`openbox openbox-themes openbox-xdgmenu suckless-tools obmenu lxappearance`**

3. Terminator as terminal emulator.
: Package: **`terminator`**

4. Geany as text manager.
: Package: **`geany gksudo`**

5. Lxpanel for taskbar.
: Package: **`lxpanel`**

6. Thunar and its plug-ins for your file manager.
: Packages: **`thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin gvfs gvfs-backends`**

7. An icon set for displaying your file and folder in a file manager.
: Package: **`humanity-icon-theme`**

8. Nitrogen for setting wallpapers.
: Package: **`nitrogen`**

9. Alsa for sound driver.
: Packages: **`alsa-base alsa-utils`**

10. Additional utilities.
: Package: **`numlockx light-locker lxpolkit`**  

	* **`numlockx`** is for enable the numlock at start up.
	* **`light-locker`** is for locking screen  
	* **`lxpolkit`** is an policykit authentication agent, help you with permission to access hard drive...
	* **`xfce4-notifyd`** is for notification mechanism (new email received, download completed or battery fully charged )

11. Network manager.
: Package: **`wicd`**

12. Login manager.
: Package: **`lightdm`**
