---
title: "Setup Multiple Monitors in Linux with Arandr"
header:
categories:
  - tips
tags:
  - Debian
  - Multiple-Monitors
  - Arandr
---

# 1. Arandr for arranging multiple monitors

Install Arandr

```bash
sudo apt install arandr
```

Open it using command `arandr`

[![arandr]({{site.baseurl}}/images/arandr.png)]({{site.baseurl}}/images/arandr.png){:target="_blank"}

Usually all plugged monitors appear here. In case any of them is not, I have to go to the `Outputs` menu and `Active` it.

The best thing about Arandr is that it gives me the ability to drag around the display to choose the best layout I want (which goes left - right/ above - under...). Then press apply.

After I get the layout I want, I can save the layout as a bash script to easily activate it later. The script will be saved in `$HOME/.screenlayout`.

# 2. How to set random separate wallpaper for each monitor using Nitrogen.

The `--head=X` option tells nitrogen to set wallpaper to which monitor.

```bash
(nitrogen --head=0 --set-zoom-fill --random $HOME/Wallpapers)
```

# 3. A script to toggle between one monitor and multiple one.

This was not my original idea, I remembered seeing someone's script elsewhere online and developed my own version. The credit goes to that person.

```bash
#!/bin/bash
#Check if HDMI 1 is connect
#If connect, active twoMonitors mode
#If disconnect, active oneMonitor mode

function HDMIConnected {
    ! xrandr | grep "HDMI1" | grep disconnected
}

function twoMonitors {
  xrandr --auto &&
  (xrandr --output HDMI1 --mode 1920x1080 --pos 1366x0 --rotate normal --output DP1 --off --output eDP1 --primary --mode 1366x768 --pos 0x0 --rotate normal --output VIRTUAL1 --off) &&
  (sleep 1s)&&
  # Set random wallpapers for separate monitor
  (nitrogen --head=0 --set-zoom-fill --random $HOME/Wallpapers) &&
  (nitrogen --head=1 --set-zoom-fill --random $HOME/Wallpapers) &&
  # Set polybar for only one monitor
  ($HOME/.config/polybar/launch.sh)
}

function oneMonitor {
  xrandr --output HDMI1 --off --output DP1 --off --output eDP1 --primary --mode 1366x768 --pos 0x0 --rotate normal --output VIRTUAL1 --off
}

if ! HDMIConnected
then
    oneMonitor
fi

if HDMIConnected
then
    twoMonitors
fi
}

```

I use `polybar` and only want to add it to just my laptop's monitor (I use another one for just pure display for my web dev task). I got the monitor name from Arandr.

```bash
[bar/example]
monitor = ${env:eDP1:}
```

# 4. Bind it to a desktop file to go with rofi

I add a desktop file at `$HOME/.local/share/applications/`

```
[Desktop Entry]
Exec=/home/dat/.screenlayout/extendedMonitor.sh
Icon=/home/dat/Custom/twoScreen.png
Name=Two Screen Xrandr
Terminal=False
Type=Application
Version=1.0
```

