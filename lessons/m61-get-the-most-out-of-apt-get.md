---
layout: single
title: GET THE MOST OUT OF APT-GET
description: introduce some other apt-get commands.
toc: true
toc_label: "Apt command"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module6
---

Debian uses **Apt (Advanced Package Tool)** as its package manager (a tool that assists you on resolving dependencies when you need to install, upgrade, configure, and remove packages).

Throughout this guide, we had used the command **apt-get install**. In this lesson, I will show you how to get the most out of **Apt** package manager.

### It all starts with update repositories
```bash
apt-get update
```
### To update entire of system
```bash
apt-get upgrade
```
Although named **"upgrade"**, the command is only for update packages that are already installed in your system.
{: .notice--danger}

### To install and update a package
```bash
apt-get install [package name]
```
The command also updates that package if it has already been installed.

### To install a package without its recommends
This is often the case of installing a minimal Ubuntu/Debian desktop.

To do that you need to specify this flag: <span style="color:blue">--no-install-recommends</span>

```bash
apt-get install --no-install-recommends [package name]
```

### To remove a package
```bash
apt-get remove [package name]
```
To remove a package along with all of its configuration file:
```bash
apt-get --purge remove [package name]
```

### To find information about installed or can be installed packages
```bash
apt-cache search [package name/ related word]
```
For instance, you can search for the key word “image viewer” to find all  the info about image viewer in repositories.
```bash
apt-cache search “image viewer”
```
The output should be the list of packages that are related to the image viewer.

### To list dependencies and recommends of a packages

It's very useful when you are trying to install a minimal Ubuntu system (mostly by using the **"--no-install-recommends"** flag). Sometimes you will get yourself into a difficult situation where an application lacks the features you need. The solution is you need to install some more of its dependencies.
```bash
apt-cache depends [package name]
```
### To show the version of a package and which repository it is come from
```bash
apt-cache policy [package-name]
```
### To find out about information about a package
```bash
apt-cache show [package-name]
```
### dpkg
I find the **dpkg** is an essential command to supplement apt features.
```bash
dpkg -s [package name]
```
The command is equivalent to apt-cache show/policy.
### To find if a package is installed on your system
```bash
dpkg -l [package-name]
```

