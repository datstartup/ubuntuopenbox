---
layout: single
title: GTK THEME
description: ""
toc: true
toc_label: "GTK Theme"
toc_icon: "cog"
author_profile: true
---

GTK themes will define the appearance of applications on your system: the general interface, the color of the taskbar, the backgrounds for windows and tabs, the looks of GTK applications.

As oppose to Openbox theme which defines the **border** of a window, the title and the border, an GTK theme defines the look of what are **inside** that window border.

## Normal GTK+ apps (Firefox, Transmission, Geany...)

One of the things you should consider are which theme engines are needed. The creator of the theme will tell you which.

**Install a GTK theme:**

Once you have downloaded a theme, place it into either of these directories: **~/.themes** or **/usr/share/themes**.

We will install **FlatStudioGray** theme and you can download it here:

[http://gnome-look.org/content/show.php/FlatStudio?content=154296](http://gnome-look.org/content/show.php/FlatStudio?content=154296)

Extract the downloaded package.

Then, move extracted **Flatstudio** theme folder into **~/.theme** folder.

 >In Linux, every file/folder with its name begin with a period (.) is >hidden.The **"~/.theme"** folder is often hidden and we need to unhide it: Using Thunar > View > Check “Show Hidden File”.

Now you can see **~/.theme** folder and move Flatstudio folder to it.

You need theme engines to render the theme as it supposed to. As with this theme, the author have instructed us to install **unico-engine** & **gtk2-engines-murrine**.

```
sudo apt-get install unico-engine gtk2-engines-murrine
````
Open **Lxappearance** (by the command **lxappearance**) > Under the **Widget** tab, choose **Flatstudio**.

![flatstudio]({{site.baseurl}}/images/flatstudio.jpg)

And Voila! All should look good now.
