---
title: "Change vga from AMD to Nvidia"
header:
categories:
  - tips
tags:
  - VGA
---


I only use open source drivers.

# Install AMD driver (radeon)

```
sudo apt-get install xserver-xorg-video-radeon
```
Tell source to load readeo driver, create the file `/etc/X11/xorg.conf.d/20-radeon.conf` with the following content:

```
Section "Device"
    Identifier "Radeon"
    Driver "radeon"
    Option "TearFree" "on"
EndSection

```

# Install Nvidia driver (nouveau)
```
sudo apt-get install xserver-xorg-video-nouveau
```

To tell Xorg to load nouveau, create the file `/etc/X11/xorg.conf.d/20-nouveau.conf` with the following content:
```
Section "Device"
    Identifier "Nvidia card"
    Driver "nouveau"
EndSection

```

# To change VGA card

Uninstall the respective driver and install the other, the Xorg config file is the key here. Otherwise, Xorg cannot know which driver to load.