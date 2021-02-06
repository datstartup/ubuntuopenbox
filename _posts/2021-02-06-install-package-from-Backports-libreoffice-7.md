---
title: "Install packages from backports Debian - Libreoffice 7 on Buster"
header:
categories:
  - tips
tags:
  - Libreoffice
  - Debian-Update
  - Backports
---
Backports are repositories that have packages from newer sources (Testing and Sid) compiled so that it can work on older Debian versions.

Using backports is actually quite risky since the packages are just not going through enough tests and it might break a Debian stable.
 
I was eager to try out the Libreoffice 7 on my Debian and I know that the sort of “newest" apps will be in the backports repository.

I use Libreoffice as a demonstration, you could apply these steps for any app.

## 1. Add Buster Backport source

Add this line to my Debian `sources.list` file
```shell
deb http://deb.debian.org/debian buster-backports main
```
Then
```shell
sudo apt update
```
## 2. Install Libreoffice on Debian

I have show how to install Libreoffice here on this website: [Libre Office as office suite](https://www.ubuntuopenbox.com/lessons/m53-office-apps-for-ubuntu-openbox/#1-libreoffice-as-office-suite)

The process is the same.
```shell
sudo apt -t buster-backports install libreoffice-calc libreoffice-writer libreoffice-gtk3 libreoffice-style-sifr
```
It will update my libreoffice packages on my system. 
