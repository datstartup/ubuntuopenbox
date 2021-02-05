---
layout: single
title: ICON THEME
description: ""
toc: true
toc_label: "Icon Theme"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module4
---

In the below screenshot I use the “AwOken” icon set (its name is really written like that, not a typo).

[![busyDesktop]({{site.baseurl}}/images/busyDesktop.png)]({{site.baseurl}}/images/busyDesktop.png){:target="_blank"}

To install a icon theme, either install via PPAs or copy (the extracted) icon folder directly to **/usr/share/icons or ~/.icons**

Adding a PPA is often frowned upon, but since I really like it, I am willing to take the risk!
{: notice--danger}

You need to install **software-properties-common** to be able to add PPA using command line, to install it:
```bash
sudo apt-get install software-properties-common
```
I have installed AwOken icon theme following the guide here:

[http://gnome-look.org/content/show.php/AwOken?content=126344](http://gnome-look.org/content/show.php/AwOken?content=126344)

```bash
sudo add-apt-repository ppa:alecive/antigone
```
```bash
sudo apt-get update
```
```bash
sudo apt-get install awoken-icon-theme
```

AwOken is a special theme that comes with a script to customize itself, here is the instruction given by the author, skim through it and you will see how awesome it is: [Installation and Instructions (PDF)]({{site.baseurl}}/assets/Installation_and_Instructions.pdf){:target="_blank"}

Or if you want to learn by doing, below is the command to trigger all the options.

```bash
awoken-icon-theme-customization
```
Apply the icon theme.

Open **Lxappearance** to change the icon-theme to AwOken.

Here is how it looks on my system:

![awaken folder]({{site.baseurl}}/images/awokenfolder.png)

![awaken apps]({{site.baseurl}}/images/awokenapplications.png)

**UPDATE 05 Feb 2021:**
Note that, there is some awesome icon theme already in the repository, like `numix-icon-theme` which just needs a `apt install numix-icon-theme`. I also recommend this theme if you are just getting started. 

What I show above still works fine though, the purpose of it is for you to install a package with PPA. AwOken is still a beautiful icon theme anyway.

