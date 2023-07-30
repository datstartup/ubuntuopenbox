---
title: "Intel graphic - Xorg config for screen tearing"
header:
categories:
  - tips
tags:
  - screen-tearing
  - information
---

>If your graphic card was manufactured in 2007 and newer, try uninstalling the [xserver-xorg-video-intel](https://packages.debian.org/xserver-xorg-video-intel "DebianPkg") package and use the builtin `modesetting` driver ([xserver-xorg-core](https://packages.debian.org/xserver-xorg-core "DebianPkg")) instead.
>
>     _this quote is from Debian graphics document_

There are two kinds of drivers that you tell Xorg to use for Intel graphic (integrated one - iGPU):  `intel` and `modesetting`.

## intel
The driver comes with the `xserver-xorg-video-intel` package of Debian.

With my old PC using Haswell 4th gen Intel CPU, all I have to do is add  this file `/etc/X11/xorg.conf.d/20-intel.conf` with the content:

```
Section "Device"
  Identifier "Intel Graphics"
  Driver "intel"
  Option "TearFree" "true"
EndSection
```
and the screen tearing has gone.

This method is applicable  because the driver `x86-video-intel` supports the "TearFree'' function and the driver also works well. 

However, this driver is really buggy with the iGPU that comes with my Intel 12th. The videos appear severely stuttering in one app, flickering in another app. Unusable I must say!

## modesetting

The `modesetting` driver that comes with the `xserver-xorg-core` package is now the recommended one if you are using a newer version of Intel graphics.

You either remove the `xserver-xorg-video-intel` package to make the system fall back to the `modesetting` or explicitly tell it to use `modesetting` by adding `/etc/X11/xorg.conf.d/20-intel.conf` with the content:

```
Section "Device"
  Identifier "Intel Graphics"
  Driver "modesetting"
EndSection
```

You can use `inxi -G` to check which driver are loaded.
```
 Display: x11 server: X.Org v: 1.21.1.7 driver: X:
    loaded: modesetting
```

Everything runs smooth with this driver for me, however, it does not come with the "TearFree" option. (Actually the newer version of `monosetting` will have "TearFree"; as I use Debian, I have to use what it has.)

A way to overcome screen tearing is using a compositor like `picom` which I use with my Openbox setup.

Add these lines to your `picom` config file at `$HOME\.config\picom\picom.conf`

```
opengl-swc = true;
vsync = true
backend = "glx";
```

## Conclusion

So, for screen tearing, you either use `intel` driver with "TearFree '' option or use `modesetting` driver with a compositor.

Which way to recommend? I really do not know, I read extensively on topics discussing these and found mixed result, some leaned toward one some leaned toward the other.

Just try it for yourself like I did, `intel` for me was very buggy and `modesetting` fortunately works wonder (I use Intel 12400 with Intel UHD  Graphics 730  for your reference).


