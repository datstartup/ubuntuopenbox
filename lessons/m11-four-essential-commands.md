---
layout: single
title: FOUR ESSENTIAL COMMANDS
description: learn about APT and apt-get.
toc: true
toc_label: "Four essential commands"
toc_sticky: true
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module1
---

Objective: To be familiar with following four commands:

```
$ apt-get update #to update repositories
$ apt-get install/remove package_name #to install/ remove packages
$ nano text_file #to open and edit text files
```
They will be used frequently in this guide as well as your day to day usages.
This may be the most boring chapter of this series, but arguably the most important one.

### What is Command-line?
Command-line is an environment acting as the mediator between you human and your operating system.

A command is text written in a specific syntax (to assure the computer can understand what users want).

After entering a command into a terminal, the shell of your OS passes it to the OS to execute.

Some commands only available for power user. You will need to be the **root** user or to use **sudo**.

REMEMBER: **sudo** means to borrow the omnipotent power of the root user. <span style="color:red">It does not mean "try harder"!</span>
{: .notice--danger}

Why do we use command-line a lot in this tutorial? Because if you are building an operating system from the ground up, most of the time you do not have the luxury of GUI.

As a plus, command-line is actually a powerful tool on every aspect of Linux.

### Apt and the source.list file

>Apt (short for Advanced Package Tool) is a set of core tools inside Debian. Apt makes it possible to:

>* Install applications
>* Remove applications
>* Keep your applications up to date
>* And much more...

>Apt, which basically resolves dependency problems and retrieves the requested packages.

*(from Debian wiki)*

**/etc/apt/source.list**

This file is listing the sources where packages are being stored, so that apt can know where to obtain them. These sources are called **repositories**.

### The four commands

#### 1. Update repositories
```bash
sudo apt-get update
```
This is arguably the most essential command of apt-get.

What it does is to go to the addresses listed in the **/apt/etc/source.list** and update what have been changed (which packages are on there now and which versions of them are the latest).

After that **apt** will have the newest information and be able to ask for the right version of packages.

#### 2. Install or update a specific package
```bash
sudo apt-get install firefox # install the firefox package
```
This command will also update the **firefox** package if it has been already installed.
{.notice--info}

#### 3. Remove a package
```
sudo apt-get remove firefox # remove the firefox package
```
To also remove all of firefox's configuration files on your system:
```
sudo apt-get remove --purge firefox
```

#### 4. Edit text file using Nano editor
**Nano** helps you edit text files directly from the terminal. It is very handy because you can say all Linux configuration files are text.
To edit a text:
```
sudo nano /directory/configuration_file
```
The direction keys (up/ down/ left/ right arrows) will help you to navigate through the file and edit it.

After making changes, **Ctrl + S** to save, and **Ctrl + X** to exit.

