---
layout: single
title: GTK THEME
description: ""
toc: true
toc_label: "GTK Theme"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module4
---

GTK themes will determine the appearance of applications: the general interface, the color of the taskbar, the backgrounds for windows and tabs, and the looks of GTK applications.

As oppose to an Openbox theme which defines the **outer parts** of a window, a GTK theme defines the **inner parts**.

## Normal GTK+ apps (Firefox, Transmission, Geany...)

One of the things you should know about the GTK theme is which theme engines it needs. The creator of the theme should tell you in its document.

**Install a GTK theme:**

Once you have downloaded a theme, place it into either of these directories: **~/.themes** or **/usr/share/themes**.

We will install **FlatStudioGray** theme and you can download it here:

[http://gnome-look.org/content/show.php/FlatStudio?content=154296](http://gnome-look.org/content/show.php/FlatStudio?content=154296)

Extract the downloaded package.

Then, move extracted **Flatstudio** theme folder into **~/.theme** folder.

In Linux, every file/folder with its name begin with a period (.) is >hidden.The **"~/.theme"** folder is often hidden and we need to unhide it: Using Thunar > View > Check “Show Hidden File”.
{: notice--info}

Now **~/.theme** folder is visible and you can move the Flatstudio folder to it.

You need theme engines to render the theme as it is supposed to. As with this theme, the author have instructed us to install **unico-engine** & **gtk2-engines-murrine**.

```bash
sudo apt-get install unico-engine gtk2-engines-murrine
````
Open **Lxappearance** (by the command **lxappearance**) > Under the **Widget** tab, choose **Flatstudio**.

![flatstudio]({{site.baseurl}}/images/flatstudio.jpg)

And Voilà! All should look good now.

**UPDATE 05 Feb 2021:**
Note that, there is some awesome gtk theme already in the repository, like `numix-gtk-theme` which just needs a `apt install numix-gtk-theme`. I also recommend this theme if you are just getting started. 

What I show above still works fine though, the purpose of it is for you to install a package with PPA.
