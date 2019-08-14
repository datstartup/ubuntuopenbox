---
layout: single
title: FOUR ESSENTIAL COMMANDS
description: learn about APT and apt-get.
toc: true
toc_label: "Four essential commands"
toc_icon: "cog"
author_profile: true
comments: true
---

Objective: To be familiar with the four below commands:

```
$ apt-get update #to update repositories
$ apt-get install package_name # or remove package_name: to install/ remove packages
$ nano text_file #to open and edit text files
```
At the beginning of the installation process, you will mostly work with command-line, and only equipped with only these commands to navigate through.This may be the most boring chapter of this series, but arguably the most important one.

### What is Command-line?
Command-line is a environment acting as the mediator between you human and your operating system.

A command is text written in a specific syntax. After entering a command into a terminal, the shell of your OS interprets and passes it to the OS to execute.

Some commands only available for power user. You will need to be the **root** user or to use **sudo**.

REMEMBER: **sudo** mean borrowing the omnipotent power of the root user. <span style="color:red">It does not mean "try harder"!</span>
{: .notice--danger}

Why do we use command-line a lot in this tutorial? Because building operating system from the ground up, most of the time we will not have the luxury of GUI.

Moreover, as a plus, command-line is actually a powerful tool that will help you on every aspect of Linux.

### Apt and the source.list file

>Apt (short for Advanced Package Tool) is a set of core tools inside Debian. Apt makes it possible to:

>* Install applications
>* Remove applications
>* Keep your applications up to date
>* And much more...

>Apt, which basically resolves dependency problems and retrieves the requested packages.

*(from Debian wiki)*

Apt frees you from the madness of specifying each of dependencies when installing an application.

Knowing more about a Linux system, you will realize that this is a tremendous feat. Let's image that an app will have many dependencies (requisites for its execution), each dependencies have many versions. An app will depends on a certain version of its dependencies while another app will depend on another version. In your system, there will be various apps. All of these complex will be orchestrated by a package manager.

In an Linux OS, various applications may simultaneously need the same dependencies. Apt will keep the appropriate versions of them working in harmony.

**/etc/apt/source.list**

This file is listing the sources where packages are being stored so that apt can know where to obtained them. These sources are called **repositories**.

### The four commands

#### 1. Update repositories
```
sudo apt-get update
```
This is the most essential command of apt-get.
What it does is to go to the addresses listed in the **/apt/etc/source.list** file and update what have been changed from the last time (which packages are on there now and which are the latest versions of them).

After that **apt** will have the newest information and be able to ask for the right version of packages. Otherwise, error will occur because the asking version of them are not matching with the ones currently on repositories (old information).

#### 2. Install or update a specific package
```
sudo apt-get install firefox # install the firefox package
```
This command will also update the **firefox** package if it has been already installed.

#### 3. Remove a package
```
sudo apt-get remove firefox # remove the firefox package
```
To also remove all of firefox's configuration files on your system if it has the flag **--purge**, like this:
```
sudo apt-get remove --purge firefox
```

#### 4. Edit text file using Nano editor
**Nano** lets you edit text file directly from the terminal. It is very handy because all configuration files are text ones.
To edit a text:
```
sudo nano /directory/configuration_file
```
The navigation keys (up/ down/ left/ right arrows) will help you to navigate through the file.
After making the changes, **Ctrl + X** to close **nano**, it will ask you to save, type **“Y”** to confirm, or type **"N"** to abort.
