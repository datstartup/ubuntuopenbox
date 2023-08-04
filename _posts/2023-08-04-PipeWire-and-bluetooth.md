---
title: "PipeWire and bluetooth"
header:
categories:
  - tips
tags:
  - bluetooth
  - audio
  - pipewire
  - information
---

In the past I always avoided `pulseaudio` in favor of `alsa` (with `apulse` to use with Firefox).

Today I decided to try `pipewire` with my Debian 12 to take advantage of my bluetooth hardware.

## references
https://wiki.debian.org/PipeWire
https://wiki.archlinux.org/title/PipeWire#Bluetooth_devices

## pipewire as media server
*a media server means it will handle audio for any app that need audio.

install
```
sudo apt install pipewire pipewire-alsa pipewire-audio pipewire-pulse libspa-0.2-bluetooth wireplumber
```

- `pipewire-pulse`: to replace `pulseaudio`
- `pipewire-audio`: I find that it is essential for `bluetooth`
- `wireplumber`: recommended by pipewire's developers as session manager.

## other packages

`blueman`: bluetooth manager GUI.
`pavucontrol`: to select audio outputs.

## some troubleshooting

I think if you just install these packages everything should just work (I use `blueman` for bluetooth management).

For me, I encountered this problem:

```
br-connection-profile-unavailable
```

I got reminded by Arch wiki to install `pipewire-audio` and the problem had gone. (because "PipeWire handles Bluetooth audio devices if the `pipewire-audio` package is installed").

You should check with `systemctl --user status pipewire-pulse.service` and `systemctl --user status pipewire.service` first to see if these services are running, if not:

```bash
sudo apt reinstall pipewire pipewire-pulse

systemctl --user --now enable pipewire pipewire-pulse
```

As recommended here: https://www.reddit.com/r/pop_os/comments/100zf76/comment/j2oswyk/?utm_source=share&utm_medium=web2x&context=3

Until now, installing bluetooth with `pipewire` has been a very pleasant process. Everything just works.
