---
layout: single
title: CONFIGURE OPENBOX
description: "configure three most important configuration files of Openbox: menu.xml, rc.xml and autostart."
toc: true
toc_label: "My Table of Contents"
toc_icon: "cog"
author_profile: true
---

Objective: Install the core packages & Configure Openbox

### 1. Install the core packages:

```
sudo apt-get install xorg openbox suckless-tools terminator lxpanel thunar lightdm wicd firefox geany
```
After they have been installed, you will have a bare frame of a operating system with Xorg as the prerequisite of GUI and video driver, Lightdm as the login manager, Openbox as the windows manager, Thunar as the file manager, Lxpanel as taskbar, Wicd as the network manager, Terminator as the the terminal emulator, Geany as the text editor, Firefox as the web browser.

From this frame, we will develop them into a fully functional OS.

### 2. Configure Openbox:

After Step 1, let's reboot and login for the first time. If a grayish screen are there greeting you (with a mouse point). Your Openbox system is ready for further configuration.

![freshopenbox]({{site.baseurl}}/images/freshopenbox.jpg)

If you come from a Windows world, you might expect that you can click a shortcut (icon) on your desktop to call an application. There will be no such thing in our system.

In my opinion, the feature is redundant and unnecessary with Openbox. With its right-click menu and especially the shortcut keys to call apps/ tasks, you will feel the superior of these methods is far over finding an icon on your desktop.

(The job of creating icon on your desktop is called ***"managing desktop"*** and it is the service providing by a file manager (and unfortunately not all file manager can do the task - especially my choice of Thunar)).

* ***Right-click menu:***

By right clicking your mouse, there is a menu of applications/ tasks. Click to one to call. At the moment, you only can call Terminator (the terminal entry) or Firefox browser (the Web browser entry).

* ***Shortcut keys:***

Pressing the Windows key (the key that have “Microsoft Icon” on it) and the key T: **Windows + T**, the Terminator terminal should be started.

The shortcut key will vastly improve your productivity after you have familiar with it. Openbox let you choose shortcut keys freely. In later part of this chapter will show you how to create your own shortcut keys.

Although in Linux world some of us really do not care much about the look, we will polish it later.

I have seen some minimalists using only tiling window manager with just wallpaper on the screen (They even go as far as not using any mouse at all).

Our Ubuntu Openbox has no taskbar, no wallpaper, no volume control, no terminal emulation, no file manager, no power manager, no network manager… Even worse, a fully functional operation system should not worry us user about some basic automating tasks such as: shutdown/restart, system monitor, etc. Our system is lacking all of that! 😀

From now on we will add more features to our Openbox:

**2.1. Open this guide on Firefox browser:**

The reason for telling you to install Firefox at the very beginning is for you to access this guide while installing your system (and also saving you some time by copying/ pasting commands directly from my website).

Right-click, then choose “Web Browser” to start Firefox browser, go to [UbuntuOpenbox.com/lessons/lessons.html](UbuntuOpenbox.com/lessons/lessons.html){:target="_blank"}.

**2.2. Creating the seed configuration files:**

The configuration of Openbox is defined within three files: **rc.xml**, **menu.xml**, **autostart**.

At default, after you have installed Openbox, there are no configuration files for normal user, and your Openbox is using the global configuration files stored at **/etc/xdg/openbox**. We will use these file as the seed for our further configuration.

Type below command as normal to copy global files over home folder:
```
cp -R /etc/xdg/openbox ~/.config/
```
Now if we go to the directory **~/.config/openbox** by:
```
cd ~/.config/openbox
```
and see what are in it by:
```
ls -lh
```
These are the seed files for our Openbox configuration.

**2.3. Configure Openbox:**

We will configure the above seed files one by one:

_**menu.xml**_:

We have some programs for auto generating right click menu, but I always find the auto generated menu too hard to configure for a new Openbox user (It is more awesome though with all the icon. Will show you how if I can).

I will show you how to manually manage it in this part of the guide.

We will use my current configuration here: [https://pastebin.com/5Cixsqpa](https://pastebin.com/5Cixsqpa){:target="_blank"}.
Then replace the current content of **menu.xml** with mine:
```
geany ~/.config/openbox/menu.xml
```
then Save

![geanymenu]({{site.baseurl}}/images/geanymenu.png)

_**autostart**_

Some programs or commands in Openbox **need** to be instructed specifically to auto-run at the startup. You can also set timing to start those programs chronologically. Fortunately, the job is fairly easy. All you need to do is put a line of command in the **autostart** file.

For instance, the command to start **lxpanel**:
```
(sleep 3s && lxpanel) &
```
The command mean: delay 3 second before starting **lxpanel**.

We are also using mine **autostart** file. Here is its link: [https://pastebin.com/EmY8gx9c](https://pastebin.com/EmY8gx9c){:target="_blank"}.

```
geany ~/.config/openbox/autostart
```

_**rc.xml**_

This file holds the configuration for all the shortcut-keys and define how an application will appear on the screen. How to modifying the file is really easy. Below is the typical entry:

```
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

Somethings you need to be noted:

+ The capital W: the Windows key which have this icon:  ![windowskey]({{site.baseurl}}/images/windowsicon.png)
+ The capital A: the Alt key
+ The capital S: the Shift key
+ The capital C: the Control key

Go to my **rc.xml** file here: [https://pastebin.com/ajfTFaay](https://pastebin.com/ajfTFaay){:target="_blank"}. Copy the content and replace the current content of **rc.xml** file. **Mind you**, the content is really long!

To open the **rc.xml** file with Geany:
```
geany ~/.config/openbox/rc.xml
```

Restart your computer for all the change to take effect.

### 3. Using **Obmenu** to edit menu:

Although edit the **menu.xml** text file directly is easy, you can also use a program called **Obmenu** to edit the file using GUI. The program is intuitively to use, hope you can manage on your own.

To install:
```
sudo apt-get install obmenu
```
To call it:
```
obmenu
```
![obmenu]({{site.baseurl}}/images/obmenu.png)
