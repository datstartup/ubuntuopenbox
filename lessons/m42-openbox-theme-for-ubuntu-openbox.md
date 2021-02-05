---
layout: single
title: OPENBOX THEME
description: ""
toc: true
toc_label: "Openbox Theme"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module4
---

An openbox theme will define the look of the window (the border, the title bar) and the right click menu.

To install a theme, copy it to a specific theme folder, then use **obconf** to apply.

I will illustrate with an Openbox theme called Mistral.

## Mistral Theme

![Openboxtheme]({{site.baseurl}}/images/Mistral-Theme.jpg)

The author has posted it here:

[https://www.box-look.org/p/1169127/](https://www.box-look.org/p/1169127/)

In this case, the theme is packed in a folder. Openbox themes also come with **.obt** extension and can be installed using Obconf (You can extract that **.obt** package to a folder using any compression tool).

After having the theme folder, move it into one of theme directories below:

* System-wide themes are installed in: **/usr/share/themes**.
* User-specific themes are in: **~/.local/share/themes** or in **~/.themes**.

The theme will be instantly registered into **Obconf**.

Open **Obconf**:
```bash
obconf
```

Select Mistral theme.

![obconf]({{site.baseurl}}/images/obconf.png)
