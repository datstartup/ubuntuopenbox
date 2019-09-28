---
layout: single
title: OPENBOX THEME
description: ""
toc: true
toc_label: "Openbox Theme"
toc_icon: "cog"
author_profile: false
comments: true
---

An openbox theme will define the look of the window (the border, the title bar), the look of the right click menu...

To install a theme, often we just have to copy its folder to a specific theme folder. Then we will use **obconf** to apply it. I will illustrate it with a Openbox theme called Mistral.

## Mistral Theme

![Openboxtheme]({{site.baseurl}}/images/Mistral-Theme.jpg)

At the beginning of my Openbox experience, I used the default theme of Crunchbang and it still is pretty good. Now I am using a theme call **Mistral**.

The author has posted it here:

[http://phobi4n.deviantart.com/art/Mistral-Openbox-543910044](http://phobi4n.deviantart.com/art/Mistral-Openbox-543910044)

In this case of Mistral, the theme is contained in a folder, but Openbox themes also come with **.obt** extension and can be installed using Obconf. You also can extracted that **.obt** package to a folder using any of compression tool.

After having the theme, please move it into one of these directories below. In these Openbox will look for its themes:

* System-wide themes are installed in: **/usr/share/themes**.
* User-specific themes are in: **~/.local/share/themes** or in **~/.themes**.

Themes will be instantly registered into **Obconf**.

Open **Obconf** by typing the command **obconf** into terminal. Select Mistral theme.

![obconf]({{site.baseurl}}/images/obconf.png)
