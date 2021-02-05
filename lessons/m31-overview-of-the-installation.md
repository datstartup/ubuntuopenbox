---
layout: single
title: OVERVIEW OF THE INSTALLATION
description: Go through the steps you will take and the packages you will install.
toc: true
toc_label: "Overview"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module3
---

Objective: It will give you the full picture of how Openbox and other components are put together to form a complete Ubuntu Openbox system.

## Core concepts:
### Window Manager Vs. Desktop Environment

It's important to know the differences between a window manager and a desktop environment.

>A window manager is the program which draws on your screen the "box" in which the program is run. A window manager controls how your program window works, looks and acts. It decides what window decorations to use and gives you a way to move the windows, hide them, resize them, minimize them and close them. It controls what buttons you push to do those things, and what keys you press to make those things happen.

>On the other hand, a desktop environment minds the entire desktop. It provides a taskbar, a system tray, a login manager, additional menus or perhaps screensavers and desktop icons. It might include a file manager, a text editor or some other accessory programs, too.”

from: [Debian wiki](https://wiki.debian.org/Openbox/ "Openbox documentation on Debian's wiki")

In short, what Openbox gives you are just the "boxes" in which the programs are run.

This modesty is the reason why people love Openbox. You will have the freedom to deeply configure the GUI.

## Core steps

1. Step 1: Install the base Ubuntu OS without any GUI.

    This step only installs Ubuntu to the point of having a functional OS (as a headless server), on top of this base, I will build my Openbox and other desktop components.

2. Step 2: Install Xorg, the foundation of GUI.

    Xorg will install a graphic driver and other requisites for the GUI.

3. Step 3: Install Openbox and other components of a desktop environment (file manager, network manager, notification, taskbar...).      

    After this step, I will have a complete desktop.

4. Step 4: Install necessary applications for day to day use.

    I group these applications into some major ones based on their general usage: Internet applications (web browser, email client, torrent client), Office applications (Libre office suite), Multimedia applications (VLC, SMplayer...)...

    The main point of this step is to show you **my** choice as a reference. Please feel free to choose any alternative suited to you.

5. Step 5: Customize the look and feel of your new OS.
  Customizing my own Openbox is a fun and exciting experience.

## Core packages:

Here is the command to install all necessary packages for a competent Ubuntu operating system using Openbox:

```
sudo apt-get install xorg openbox openbox-themes openbox-xdgmenu suckless-tools obmenu lxappearance terminator lxpanel thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gvfs gvfs-backends nitrogen alsa-base alsa-utils vlc numlockx light-locker lightdm wicd lxpolkit xfce4-notifyd
```

**What each of these packages actually does?**

I can install one by one as explaining here:

1. Xorg as the requisite of GUI.
:    Packages: **`xorg`**

2. Openbox.
: Package: **`openbox openbox-themes openbox-xdgmenu suckless-tools obmenu lxappearance`**

3. Terminator as terminal emulator.
: Package: **`terminator`**

4. Geany as text manager.
: Package: **`geany gksudo`**

5. Lxpanel for taskbar.
: Package: **`lxpanel`**

6. Thunar and its plug-ins for file managers.
: Packages: **`thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin gvfs gvfs-backends`**

7. An icon set:
: Package: **`humanity-icon-theme`**

8. Nitrogen for setting wallpapers.
: Package: **`nitrogen`**

9. Alsa for sound drivers.
: Packages: **`alsa-base alsa-utils`**

10. Additional utilities.
: Package: **`numlockx light-locker lxpolkit`**  

    * **`numlockx`** is to enable the numlock at startup.
    * **`light-locker`** is for locking the screen.  
    * **`lxpolkit`** is a policykit authentication agent, help with permissions.
    * **`xfce4-notifyd`** is for notification mechanism for other programs (new email received, download completed or battery fully charged...)

11. Network manager.
: Package: **`wicd`**

12. Login manager.
: Package: **`lightdm`**

