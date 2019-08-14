---
layout: single
title: ESSENTIAL OPERATING SYSTEM APPLICATIONS
description: install terminal emulator, text editor, GUI package manager, task manager.
toc: true
toc_label: "System applications"
toc_icon: "cog"
author_profile: true
---

Essential operating system applications:
  + Terminal emulator
  + Text editor
  + Synaptic (GUI package manager)
  + Gdebi
  + Task manager (System monitor)

### 1.Terminator - Terminal emulator

Using Linux you will need a terminal emulator (you can live without but much easier if you know how to use one). It acts as a mediator to pass your command to the operating system.

Terminator is a good terminal emulator with tabs support and it can be split into some terminal portions from the original, both horizontally and vertically.
```
sudo apt-get install terminator
```
Some useful keyboard shortcut:
* **F11**: Toggle fullscreen
* **Ctrl + Shift+ O**: Split terminals horizontally
* **Ctrl + Shift+ E**: Split terminals vertically
* **Ctrl + Shift+ T**: Open new tab

![terminator]({{site.baseurl}}/images/Terminal_split.jpg)

### 2. Geany - Text editor

All configuration files of Linux are in text form.

I was familiar with Geany because it came as default with Crunchbang, my beloved distro. Geany is a very good text editor which is very powerful with its variation of plugins.

```
sudo apt-get install geany
```

We often combine **geany** with **gksudo** command to edit system files, like in the example below to edit **fstab** file. <span style="color:red">**Do not combine it with sudo**</span> (it will mess up Geany configuration file and deem it unusable). <span style="color:blue">**Using GUI applications with gksu instead of sudo is a rule of thumb.**</span>
{: .notice--danger}

```
gksudo geany /etc/fstab
```

Just remember this rule: **sudo** are for application in terminal, for Graphical one, you need to use **gksudo** instead. Otherwise, you will mess them up.
{: .notice--success}

![geany]({{site.baseurl}}/images/Geany.png)

### 3. Synaptic - GUI package manager

Up until now, you have installed software mainly by **apt-get** via terminal, there is another good way to install them via a GUI package: Synaptic is extremely useful when you need to find a recommended packages for a specific need.

```
sudo apt-get install synaptic
```

Here is how the status of Firefox and its recommends are showing in Synaptic:

![synaptic]({{site.baseurl}}/images/Synaptic-package-manager.jpg)

I do not use Synaptic much. **apt-get** is enough for managing package because now I really familiar with all applications I am using (know them by name and which of their recommended packages I need).

### 4. Gdebi - installer of .deb package

Gdebi is also a nice program to handle .deb files, the standard package type in Debian. After having Gdebi installed, whenever you want to install a .deb file, just choose to open that file with Gdebi.

Installing a .deb package from any other source rather than the official repositories is a frown upon practice. You should ***REALLY*** know what you are doing.
{: .notice--danger}

```
sudo apt-get install gdebi
```
![gdebi]({{site.baseurl}}/images/gdebi.png)

Another alternative if you do not want to use **gdebi**: **dpkg** command. It is available with any Debian/ Ubuntu system.
```
sudo dpkg -i deb_package #(to remove: sudo dpkg -r deb_package)
```

### 5. htop - Task manager (System monitor)

Htop is a lightweight program and do the job just fine.
```
sudo apt-get install htop
```
In your terminal emulator, type **htop**, it will display all the running processes and the resources being used in real time.

![htop]({{site.baseurl}}/images/htop.png)

As you can see here, with an Ubuntu 64bit the amount of RAM it took on start up of my system was just 390MB. That’s actually great comparing with other desktop environment, and if you go this way with 32bit, it's easier to get to just slightly over 200MB of RAM.

Here is how to bind the "old" combination keys **Ctrl + Alt + Del** to **htop** in your Openbox **rc.xml** configuration file:
```
<keybind key="C-A-Delete">
  <action name="Execute">
    <startupnotify>
      <enabled>true</enabled>
      <name>htop</name>
    </startupnotify>
    <command>terminator -e htop</command>
  </action>
</keybind>
```
