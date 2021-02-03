---
layout: single
title: CONFIGURE OPENBOX
description: "configure three most important configuration files of Openbox: menu.xml, rc.xml and autostart."
toc: true
toc_label: "Configure Openbox"
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module3
---

Objective: Install the core packages & Configure Openbox

### 1. Install the core packages:

```bash
sudo apt-get install xorg openbox suckless-tools terminator lxpanel thunar lightdm wicd firefox geany
```
I will have a bare frame of a operating system with:
 * Xorg as the prerequisite of GUI and video driver, 
 * Lightdm as the login manager, 
 * Openbox as the windows manager, 
 * Thunar as the file manager, Lxpanel as taskbar, 
 * Wicd as the network manager, 
 * Terminator as the the terminal emulator, 
 * Geany as the text editor, and
 * Firefox as the web browser.

From this frame, we will develop them into a fully functional OS.

### 2. Configure Openbox:

Let's reboot and login for the first time. 
```bash
sudo reboot
```

A grayish screen should be there to greet (with a mouse point). The Openbox system is ready for further configuration.

![freshopenbox]({{site.baseurl}}/images/freshopenbox.jpg)

Note: You might expect that you can click a shortcut (icon) on your desktop to call an application. There will be no such thing in this Openbox system.

The feature is redundant and unnecessary with Openbox. I find right-click menu and the shortcut keys to call apps/ tasks are superior over finding an icon on your desktop.

(I can have desktop icon with Openbox though. The job of creating icon on your desktop is called ***"managing desktop"*** and it is the service providing by a file manager (for example: PCManFM can!)).

* ***Right-click menu:***

By right clicking your mouse, there is a menu. Click a entry to call a program. At the moment, I can call Terminator (the terminal entry) or Firefox browser (the Web browser entry).

* ***Shortcut keys:***

Pressing the Windows key (the key that have “Microsoft Icon” on it) and the key T: **Windows + T**, the Terminator terminal is called.

Openbox let you choose shortcut keys freely. In later part of this guide I will create my own shortcut keys.

The current GUI has no taskbar, no wallpaper, no volume control, no terminal emulation, no file manager, no power manager, no network manager… Even worse, a fully functional operation system should not worry us user about some basic tasks such as: shutdown/restart, system monitor, etc. The system is now lacking all of that!


**2.1. Open this guide on Firefox browser:**

The reason for installing Firefox at the very beginning is for me to access this guide while installing my system (and also save me time typing commands, I just copy them directly from the website).

Right-click, then choose “Web Browser” to start Firefox browser, go to [https://www.ubuntuopenbox.com/lessons/](https://www.ubuntuopenbox.com/lessons/){:target="_blank"}.

**2.2. Creating the seed configuration files:**

The configuration of Openbox is defined within three files: **rc.xml**, **menu.xml**, **autostart**.

At default, there are no configuration files for normal user, and Openbox is using the global configuration files stored at **/etc/xdg/openbox**. 

Type below command as normal user (without **sudo**) to copy global files over home folder:
```bash
cp -R /etc/xdg/openbox ~/.config/
```
Go to the directory **~/.config/openbox** by:
```bash
cd ~/.config/openbox
```
and see what are in it by:
```bash
ls -lh
```
These are the seed files for my Openbox configuration.

**2.3. Configure Openbox:**

I will replace the content of the seed files one by one:

_**menu.xml**_:

I will show you how to manually manage it in this part of the guide. I recommend Obmenu-generator for auto create the menu later.

We will use my current configuration here: [https://pastebin.com/5Cixsqpa](https://pastebin.com/5Cixsqpa){:target="_blank"}.
Then replace the current content of **menu.xml** with mine:
```bash
geany ~/.config/openbox/menu.xml
```
![geanymenu]({{site.baseurl}}/images/geanymenu.png)

then Save

_**autostart**_

Programs or commands in Openbox **need** to be instructed specifically to auto-run at the startup.

You can set timing to start those programs chronologically. 

Fortunately, the job is fairly easy. All you need to do is put a line of command in the **autostart** file.

For instance, the command to start **lxpanel**:
```bash
(sleep 3s && lxpanel) &
# delay 3 second before starting lxpanel
```

My **autostart** file: [https://pastebin.com/EmY8gx9c](https://pastebin.com/EmY8gx9c){:target="_blank"}.

``` bash
geany ~/.config/openbox/autostart
```

_**rc.xml**_

This file holds the configuration for all the shortcut-keys and define how an application will appear on the screen. Below is a typical entry:

```bash
<keybind key="W-t">
  <action name="Execute">
    <startupnotify>
      <enabled>true</enabled>
      <name>Terminal</name>
    </startupnotify>
    <command>terminator</command>
  </action>
</keybind>
```
Just change the combination keys **"W-t"** and the command **"terminator"** respectively and you will have a new shortcut-key.

Somethings need to be noted:

+ The capital W: the Windows key which have this icon:  ![windowskey]({{site.baseurl}}/images/windowsicon.png)
+ The capital A: the Alt key
+ The capital S: the Shift key
+ The capital C: the Control key

Go to my **rc.xml** file here: [https://pastebin.com/ajfTFaay](https://pastebin.com/ajfTFaay){:target="_blank"}. Copy the content and replace the current content of **rc.xml** file. **Mind you**, the content is really long!

To open the **rc.xml** file with Geany:
```
geany ~/.config/openbox/rc.xml
```

Restart Openbox for all the change to take effect.

```bash
openbox --restart
```

### 3. Using **Obmenu** to edit menu:

Although edit the **menu.xml** text file directly is easy, I can also use a program called **Obmenu** to edit the file using GUI. The program is intuitively to use, hope you can manage on your own.

To install:
```
sudo apt-get install obmenu
```
To call it:
```
obmenu
```
![obmenu]({{site.baseurl}}/images/obmenu.png)

### 4. Using **obmenu-generator** to generate menu:

To assist you in the task of generating a menu with icon, there is an app called obmenu-generator.

I have written a post about it here here: [https://www.ubuntuopenbox.com/apps/obmenu-generator/](https://www.ubuntuopenbox.com/apps/obmenu-generator/).
