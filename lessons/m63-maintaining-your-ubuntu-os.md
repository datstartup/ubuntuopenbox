---
layout: single
title: MAINTAIN YOUR UBUNTU/ DEBIAN SYSTEM
description: introduce some "house keeping" tasks for a Debian system.
toc: true
toc_label: "Maintaining System"
toc_icon: "cog"
author_profile: false
---

### 1. Update your system frequently
Familiarize yourself with two below commands and you will be good to go:
```bash
sudo apt-get update
```
To update the information **apt** is having from all repositories - the ones which their addresses are stated in **/etc/apt/source.list** file.

This command does not install package, just update information.
{: notice--info}
The following command will actually install newest version of any package that has been **already** installed in your system.
```bash
sudo apt-get upgrade
```
You should always remember to do it one in a while (I prefer once a week) to keep your system up to date.
{: .notice--warning}

Or just:
```bash
sudo apt-get update && sudo apt-get upgrade
```
The **“&&”** part is for telling the terminal only run the **upgrade** command ***if only*** the **update** command has been finished.

**TO SUM UP:**
    **update**: get information about what is the newest version of any package on the repository.
    **upgrade**: compare the version of each package installed on your computer and download the newest version of them if any.
{: .notice--success}

### 2. Keep your system clean

Cleaning up the cache of **apt**:

**apt** is keeping all the downloaded binary files (.deb) after any of your installation/update. It does so to keep these **.deb** files available in case you want to reinstall or repair.

That means if you clear this cache and when the need arises later, you have to re-download them.

To see how much apt has been cached **.deb** files:

First, go to the apt cache directory by:
```bash
cd /var/cache/apt/archives
```
then:
```
du -ch
```
**du -ch** mean:

 * **du**: disk usage command - return the size of a directory
 * **c**: for returning the total
 * **h**: human - easier for us to read the output (the size will be in Megabyte measurement unit)

The command **apt-get clean** will ***clear all*** of the cache.
```bash
sudo apt-get clean
```

OR only ***downsizing*** the apt cache:
```bash
sudo apt-get autoclean
```

The **autoclean** is a more compromising way if you want to keep the cache locally in a reasonable size. It only deletes packages that are deemed useless (partial packages).

To clean up of any unused dependencies left behind after you remove a package:
```bash
sudo apt-get autoremove
```

### 3. Analyze the usage of your disk

I use a very good program call **Baobab** (Disk Usage Analyzer) to track how disk space has been allocated.
```bash
apt-get install baobab
```
Start it with root privilege to get the most information possible.
```bash
gksu baobab
```
Disk Usage Analyzer

![baobab]({{site.baseurl}}/images/Disk-Usage-Analyzer.jpg)

### 4. Monitor your system

If suddenly your fan run fast, your computer was slow down…

A problem like this often happens if there is a program requiring resources beyond the capability of the system or there is something not configured correctly.

A system monitor program, like **htop**, is needed to track the culprit.

You may need to **kill** that process (to terminate it) for further step can be taken.

To ***kill*** a running program (to force it to close):

```bash
killall [program_name]
```
