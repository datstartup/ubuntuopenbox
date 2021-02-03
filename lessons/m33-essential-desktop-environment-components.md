---
layout: single
title: ESSENTIAL DESKTOP ENVIRONMENT COMPONENTS
description: install taskbar, file manager, wallpaper manager, network manager and power manager.
toc: true
toc_label: "Desktop components"
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module3
---

Essential desktop environment components will be:
  + Taskbar
  + File manager (with achieve manager)
  + App for setting wallpaper
  + Network manager
  + Power manager

### 1. Taskbar

I had been using **tint2** for several years, but while installing my Laptop with Debian Jessie I remembered that a good person had recommended **lxpanel**. I gave **lxpanel** a try and have been using ever since.

Although I understand the completeness and quick set-up of **lxpalnel**, **tint2** is still awesome in its own way.

**Please try both and decide for yourself!**

#### **LXPANEL**:
Lxpanel is a lightweight yet fully equipped with all the necessary plugins (system tray, menu...)

[![lxpanel]({{site.baseurl}}/images/lxpanel.png)]({{site.baseurl}}/images/lxpanel.png){:target="blank"}

```bash
sudo apt-get install lxpanel
```

Here are some configurations to make **lxpanel** look nicer:

* Make it use the system theme:
**right-click** > **Panel settings** to access panel references > **Appearance** tab > tick **System theme** in the **Background** section.

[![lxpanelSystemtheme]({{site.baseurl}}/images/Panel Preferences_Systemtheme.png)]({{site.baseurl}}/images/Panel Preferences_Systemtheme.png){:target="blank"}

* I have borrow the awesome and mature **logout** script from [**bunsenlabs**](https://www.bunsenlabs.org/){:target="_blank"} distro [**here**](https://github.com/BunsenLabs/bunsen-exit){:target="_blank"}

(I do not know if borrowing it this way is okay or not, but I hope the developer will understand my pure purpose here and give me his/ her approval.)

Download it and then put it somewhere convenience, say: **/home/user/Custom/bunsen-exit**

*I always think it is a good practice to save all your special scripts in one "Custom" folder for it is easier to make backup and transfer in the future.*

**right-click** > **Panel settings** to access panel references > **Advanced** tab > type below command in the **Logout Command** box in the **Set preferred applications** section.
```bash
python /home/dat/Custom/bunsen-exit
```

[![lxpanellogout]({{site.baseurl}}/images/Panel Preferences_Logout.png)]({{site.baseurl}}/images/Panel Preferences_Logout.png){:target="_blank"}

Now you have a very nice logout interface with various choices:

[![bl-exit]({{site.baseurl}}/images/blexit.png)]({{site.baseurl}}/images/blexit.png){:target="_blank"}

#### **TINT2**:

To install **tint2:**
```
sudo apt-get install tint2
```
Tint2 is a full feature, customizable yet lightweight enough even for a minimal enthusiast.

With its default settings, tint2 will look extremely ugly. So again I will use my configuration file. The new tint2 will look like this:

[![tint2taskbar]({{site.baseurl}}/images/tint2.png)]({{site.baseurl}}/images/tint2.png){:target="_blank"}

Here is configuration on pastebin, [**click here!**](https://pastebin.com/hxYLwYjw){:target="_blank"}

Copy the content to replace the current one.

```bash
geany ~/.config/tint2/tint2rc
```

I have borrowed this configuration from someone on Crunchbang forum and do not remember specifically whom. It has been my favorite Tint2 ever since, and I sincerely want to give the author my grateful respect.

Besides its aesthetic look, a more special feature of this config is to give **tint2** a transparency without using any compositor.

With this **tint2**, you will need these two packages:
* **gsimplecal** for a Calendar
* **volti** for volume adjustment

```bash
sudo apt-get install gsimplecal volti
```

**BATTERY ICON ON SYSTEM TRAY**

The battery icon on your system tray will come from a power manager application. My current one is from **mate-power-manager**. *Please go to the [Power Manager](https://www.ubuntuopenbox.com/lessons/m33-essential-desktop-environment-components/#6-power-manager) section of this page to know more about it.*

There are also some scripts that can monitor your battery and place an icon on system tray (to name a few: cbatticon, tidybattery...), but they often need to be compiled from source. I want to recommend a safe and easy to be installed system, so a power manager is an obvious choice.

### 2. File manager (with achieve manager)

**Thunar** is just easy to use with a short and intuitive learning curve.

```bash
sudo apt-get install thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin humanity-icon-theme gvfs gvfs-backends
```

You have to install some more packages along with **thunar** for it can have enough features (the additional features: add thumbnails, add achieve entries to Thunar menu, add sharing file accessibility...)

[![thunar]({{site.baseurl}}/images/Panel Preferences_Systemtheme.png)]({{site.baseurl}}/images/Panel Preferences_Systemtheme.png){:target="_blank"}

**USE CATFISH TO SEARCH FILE AND INTEGRATE IT TO THUNAR RIGHT-CLICK MENU**

**catfish** is a searching files application, easy to use and does the job gracefully, which can integrate into **Thunar** using its ***"custom action"*** feature.

_**To install:**_
```bash
sudo apt-get install catfish
```

_**To integrate it into Thunar**_

In **Thunar** > **Edit** > **Configure custom action** > **Edit action** to edit both of the tabs as showing bellow:

```bash
catfish --path=%f
```

[![editactionCommand]({{site.baseurl}}/images/Edit Action_c.png)]({{site.baseurl}}/images/Edit Action_c.png){:target="_blank"}

[![editactionFiletype]({{site.baseurl}}Edit Action_t.png)]({{site.baseurl}}Edit Action_t.png){:target="_blank"}

Now you have an entry on **Thunar** right-click menu for searching files & folders.

![SearchThunar]({{site.baseurl}}/images/RMenuThunar.png)

### 3. Archive manager

Install an archive and compression utility:

```bash
sudo apt-get install file-roller rar unrar p7zip zip unzip p7zip-full p7zip-rar
```

After installing these packages, you will have full compressing/decompressing power in your right click menu (when you are in Thunar).

[![fileroller]({{site.baseurl}}/images/File_Roller.png)]({{site.baseurl}}/images/File_Roller.png){:target="_blank"}

### 4. App for setting wallpaper

I chose Nitrogen for wallpaper manager because of its simple and straightforward manner of manage wallpapers.

```bash
sudo apt-get install nitrogen
```

If you are using the my config for your openbox, the entry of “Choose Wallpaper” (under the “Settings” entry) in the right-click menu has set to point to a folder name “Wallpapers” in **/home/user** directory, you have to create that folder and copy your favorite wallpapers into it.

To create a Wallpapers folder:
```bash
mkdir ~/Wallpapers
```

In my **menu.xml** the entry for **Nitrogen**:
```bash
<item label="Choose Wallpaper">
  <action name="Execute">
    <command>nitrogen ~/Wallpapers/</command>
	</action>
</item>
```

Now testing it by **Right-click** > **Settings** > **Choose Wallpaper** and **Apply**!

[![nitrogen]({{site.baseurl}}/images/nitrogen.jpg)]({{site.baseurl}}/images/nitrogen.jpg){:target="_blank"}

### 5. Network manager

**wicd** is a standalone application - not depending on any desktop environment, so it is ideally suited for Openbox. Furthermore, it is popular as a robust and full feature network manager:

To install:
```bash
sudo apt-get install wicd
```

How to use it is pretty straight forward, please tinker with it.

[![wicd]({{site.baseurl}}/images/wicd.png)]({{site.baseurl}}/images/wicd.png){:target="_blank"}

Wicd oftions:

[![wicdoption]({{site.baseurl}}/images/wicdoption.png)]({{site.baseurl}}/images/wicdoption.png){:target="_blank"}

You can see how I configure my network to use Google DNS.

### 6. Power manager

Over the course of using Linux I have to change power manager applications from time to time. Currently I find that the one form Mate desktop environment is the most suitable for my Openbox.

Besides controlling the power references, the power manager also gives **lxpanel/ tint2** a nice battery icon (Laptop only)

```bash
sudo apt-get install mate-power-manager
```
[![Mate Power Manager]({{site.baseurl}}/images/Power Management Preferences.png)]({{site.baseurl}}/images/Power Management Preferences.png){:target="_blank"}