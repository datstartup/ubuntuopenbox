---
layout: single
title: MAINTAIN YOUR UBUNTU/ DEBIAN SYSTEM
description: introduce some "house keeping" tasks for a Debian system.
toc: true
toc_label: "MAINTAIN UBUNTU/ DEBIAN SYSTEM"
toc_icon: "cog"
author_profile: true
comments: true
---

### 1. Update your system frequently
Familiarize yourself with two below commands and you will be good to go:
```
sudo apt-get update
```
To update the information **apt** is having from all repositories - the ones which their addresses are stated in **/etc/apt/source.list** file.

This command does not install package, just update information.

The following command will actually install newest version of any package that has been **already** installed in your system.
```
sudo apt-get upgrade
```
You should always remember to do it one in a while (I prefer once a week) to keep your system up to date.
{: .notice--warning}

Or just:
```
sudo apt-get update && sudo apt-get upgrade
```
The **“&&”** part is for telling the terminal only run the **upgrade** command ***if only*** the **update** command has been finished.

**TO SUM UP:**
    **update**: get information about what is the newest version of any package on the repository.
    **upgrade**: compare the version of each package installed on your computer and download the newest version of them if any.
{: .notice--success}

### 2. Keep your system clean

Cleaning up the cache of **apt**:

**apt** is keeping all the downloaded binary files (.deb) after any of your installation/update. It does so to keep these **.debs** file available in case you want to reinstall or repair.

That means if you clear this cache and when the need arises later, you have to re-download.

To see how much apt has been cached **.deb** files:

First, go to the apt cache directory by:
```
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
```
sudo apt-get clean
```

OR only ***downsizing*** the apt cache:
```
sudo apt-get autoclean
```

The **autoclean** is a more compromising way if you want to keep the cache locally in a reasonable size. It only deletes the packages that are deemed useless (partial packages).

To clean up of any unused dependencies left behind after you remove a package:
```
sudo apt-get autoremove
```

### 3. Analyze the usage of your disk

We will use a very good program call **Baobab** (Disk Usage Analyzer) to track how disk space has been allocated.
```
apt-get install baobab
```
You should start it with root privilege to get the most information possible.
```
gksu baobab
```
Disk Usage Analyzer

![baobab]({{site.baseurl}}/images/Disk-Usage-Analyzer.jpg)

### 4. Monitor your system

If suddenly your fan run fast, your computer was slow down…

Problem like this often happens when there is a program which requires resources beyond the capability of your system or there is a not configured correctly. For the former case, you have to find another lightweight alternative. For the later, I used to encounter a similar problem with my Chrome configuration. The video playback of Chrome did not use GPU but used CPU instead causing extremely high CPU usage. After tracking the problem down, I then reconfigured Chrome to use GPU and everything was fine.

These are typical cases that you should using a system monitor program like **htop** to detect which is the culprit (a program hogging your system resources - by using a lot of CPU power or RAM or Disk).

You may need to **kill** that process (to terminate it) for further step can be taken.

To ***kill*** a running program the hard way (force it to close) by using command:

```
killall [program_name]
```
