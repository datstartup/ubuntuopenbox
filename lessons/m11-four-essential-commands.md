---
layout: single
title: FOUR ESSENTIAL COMMANDS
description: learn about APT and apt-get.
toc: true
toc_label: "Four essential commands"
toc_icon: "cog"
author_profile: false
comments: true
---

Objective: To be familiar with four commands. They will be used frequently in this guide as well as your day to day usages.

```
$ apt-get update #to update repositories
$ apt-get install/remove package_name #to install/ remove packages
$ nano text_file #to open and edit text files
```
This may be the most boring chapter of this series, but arguably the most important one.

### What is Command-line?
Command-line is a environment acting as the mediator between you human and your operating system.

A command is text written in a specific syntax. After entering a command into a terminal, the shell of your OS interprets and passes it to the OS to execute.

Some commands only available for power user. You will need to be the **root** user or to use **sudo**.

REMEMBER: **sudo** means to borrow the omnipotent power of the root user. <span style="color:red">It does not mean "try harder"!</span>
{: .notice--danger}

Why do we use command-line a lot in this tutorial? Because if you are going to build a operating system from the ground up, most of the time we will not have the luxury of GUI.

Moreover, as a plus, command-line is actually a powerful tool that will help you on every aspect of Linux.

### Apt and the source.list file

>Apt (short for Advanced Package Tool) is a set of core tools inside Debian. Apt makes it possible to:

>* Install applications
>* Remove applications
>* Keep your applications up to date
>* And much more...

>Apt, which basically resolves dependency problems and retrieves the requested packages.

*(from Debian wiki)*

Apt frees you from the madness of specifying dependencies(requisites for its execution) when installing an application.

In other words, in an Linux OS various applications may simultaneously need the same dependencies. Apt will keep the appropriate versions of them working in harmony.

**/etc/apt/source.list**

This file is listing the sources where packages are being stored, so that apt can know where to obtain them. These sources are called **repositories**.

### The four commands

#### 1. Update repositories
```
sudo apt-get update
```
This is the most essential command of apt-get.
What it does is to go to the addresses listed in the **/apt/etc/source.list** and update what have been changed from the last time (which packages are on there now and which are the latest versions of them).

After that **apt** will have the newest information and be able to ask for the right version of packages. Otherwise, error will occur because the asking version of them are not matching with the ones currently on repositories.

#### 2. Install or update a specific package
```
sudo apt-get install firefox # install the firefox package
```
This command will also update the **firefox** package if it has been already installed.
{.notice--info}

#### 3. Remove a package
```
sudo apt-get remove firefox # remove the firefox package
```
To also remove all of firefox's configuration files on your system if it has the flag **--purge**, like this:
```
sudo apt-get remove --purge firefox
```

#### 4. Edit text file using Nano editor
**Nano** helps you edit text file directly from the terminal. It is very handy because you can say all Linux files are text.
To edit a text:
```
sudo nano /directory/configuration_file
```
The direction keys (up/ down/ left/ right arrows) will help you to navigate through the file.
After making the changes, **Ctrl + X** to close **nano**, it will ask you to save, type **“Y”** to confirm, or type **"N"** to abort.
