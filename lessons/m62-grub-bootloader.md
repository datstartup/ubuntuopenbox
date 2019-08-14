---
layout: single
title: GRUB BOOTLOADER
description: ""
toc: true
toc_label: "Grub Configuration"
toc_icon: "cog"
author_profile: true
comments: true
---

>“A bootloader is the first program that runs when a computer starts. It is responsible for loading and transferring control to the Linux kernel. The kernel, in turn, initializes the rest of the operating system.”

***- From Arch wiki***

We have installed the Grub bootloader while installing Ubuntu in Module 2. Now we can configure it to fit out need.

The file **/etc/default/grub** store the settings of Grub.

Please remember: Grub bootloader is a very important component of your system, editing it is a dangerous task.
{: .notice--danger}

After editing it, run bellow command for the change to be applied.

```
sudo update-grub
```

This file **/etc/default/grub** is rather short and does not have too much space for you to customize, as you can see mine here:
```
GRUB_DEFAULT=0

#GRUB_HIDDEN_TIMEOUT=0

GRUB_HIDDEN_TIMEOUT_QUIET=true

GRUB_TIMEOUT=1

GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`

GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi_osi=Linux acpi_backlight=vendor pcie_aspm=force drm.vblankoffdelay=1 i915.semaphores=1"

GRUB_CMDLINE_LINUX=""
GRUB_BACKGROUND="/home/dat/GrubBackground.png"
```

_***The main options you can change in this file are:***_

### 1. The default OS which Grub will always chose to boot first.

When you see your Grub boot menu, from the top down will all the entries. The order will start with 0 for the first entry, 1 for the second and so on..

To specify the default boot entry change the line below:
```
GRUB_DEFAULT=0
```
This mean I am choosing the first entry as default.

### 2. Hide Grub menu (only if you mainly use one OS on your boot menu)

To hide the Grub menu when boot, uncomment this line:
```
#GRUB_HIDDEN_TIMEOUT=0
```

### 3. Change time which Grub menu will be waiting you to select entry:
```
GRUB_TIMEOUT=1
```

* GRUB_TIMEOUT=**-1** : It will not auto boot but waiting for user to select an entry.
* GRUB_TIMEOUT=**10**: this will wait for 10 second, change the number for how long it will wait.

### 4. Change kernel parameters:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi_osi=Linux acpi_backlight=vendor pcie_aspm=force drm.vblankoffdelay=1 i915.semaphores=1"
```

In various cases, especially when you are using a Laptop, for some functions can work as expected, you have to specify the kernel parameters. You can do it with Grub by edit the line “GRUB_CMDLINE_LINUX_DEFAULT=...”.

Mine is the illustrating line above; it is for the LCD display of my desktop can work out right.

Each laptop/ PC might need specific kernel parameters. So please do research it yourself. I show it here because editing kernel parameters using Grub is such a important feature.

### 5. Change Grub background:

This is the most exciting thing with this boring configuration section. Changing the background of the Grub booting menu.

```
GRUB_BACKGROUND="/home/dat/GrubBackground.png" #Just specific the path where your background image is stored.
```

If this line is not available, just add it yourself.

_***FINAL WORDS:***_

With all of of these edits, please note that there are no spaces on any lines (except when in double quotes).
{: .notice--danger}
<span style="color:green font-weight:bold">And remember to update your Grub with **sudo update-grub** for the change can take effect.</span>
{: .notice--success}
