---
title: "Flameshot as screenshot app"
header:
categories:
  - Apps
tags:
  - flameshot
  - apps
---

Several days ago, I needed a screenshot of a small part of my screen. As usual I tried to open Shutter and found that the command shutter "is not found".

Later when I had time, a quick search turned out that Shutter was removed from Debian Buster: [https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=914183](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=914183).

My mindset after using Linux for a while is that there are two solutions for such a problem:

* Try to install it myself.
* Find another alternative as the Linux world is flooded with awesome alternatives.

I chose the latter and found Flameshot.

I used Windows 10 for my day job and really loved the Snipping tool - the app for quickly selecting which part of the screen to save as a screenshot tool. Flameshot has the ability too!

## Flameshot

### To install:
```bash
sudo apt-get install flameshot
```

### How to use:

You can find the in depth about how to use Flameshot here: [https://github.com/lupoDharkael/flameshot](https://github.com/lupoDharkael/flameshot)

### How I integrated Flameshot to my Openbox shortcut key (W + Print Screen):

```bash
<keybind key="W-Print">
      <action name="Execute">
        <startupnotify>
          <enabled>true</enabled>
          <name>snipping</name>
        </startupnotify>
        <command>flameshot gui -p /home/dat/Pictures/Screenshots/</command>
      </action>
</keybind>
```

**Note**: **"-p /home/dat/Pictures/Screenshots/"** - this part is for saving the snipped screenshots into my preferred folder.
{: notice--info}

[![Flameshot in action]({{site.baseurl}}/images/flameshot.png)]({{site.baseurl}}/images/flameshot.png){:target="_blank"}

Notice that it has various kinds of tools to edit the screenshot on the fly!
