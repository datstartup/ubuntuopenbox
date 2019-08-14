---
layout: single
title: MULTIMEDIA APPLICATIONS
description: We will install a video player, a music player, a media converter, an image suite, an image viewer and a better screenshoter. We also install pavucontrol to easily select audio output.
toc: true
toc_label: "Multimedia Apps"
toc_icon: "cog"
author_profile: true
comments: true
---

Multimedia apps:
+ VLC - a audio and video player/ internet radio streamer
+ Audacious - a music player
+ Cmus - a text based music player
+ Pavucontrol - GUI of audio mixer
+ FFmpeg - a command-line movie/music converter
+ Gimp - an image suite
+ Viewnior - an image viewer
+ Shutter - a screen capture app

### 1. Play audio and video with VLC

[www.videolan.org](www.videolan.org)

Vlc have it own codec pack, so you do not need to install any others. It will play any media format out of the box.

```
apt-get install vlc
```

### 2. Play music and other audio with Audacious:

[http://audacious-media-player.org/](http://audacious-media-player.org/)

I love its lightweight feature and the ability to change sound card easily (I use a USB DAC/AMP).
```
apt-get install audacious
```
Here is where to get the **"grey"** theme:

[http://gnome-look.org/content/show.php/?content=135104](http://gnome-look.org/content/show.php/?content=135104)

My **Audacious** with the theme:

![audacious]({{site.baseurl}}/images/Music-With-Audacious-Bluetooth.jpg)

### 3. Cmus as text based music player

[https://cmus.github.io/](https://cmus.github.io/)

Though we have a lot other options for GUI music players, I still want to introduce you to this text base (console) music player **CMUS** for its ability to manage large music library.
```
apt-get install cmus
```

It runs directly from your terminal emulator. To initiate it, in a terminal enter **cmus** command.

It uses keyboard shortcut to control, please go here to know more about it: [https://wiki.archlinux.org/index.php/Cmus#Adding_Music](https://wiki.archlinux.org/index.php/Cmus#Adding_Music)

### 4. Pavucontrol to specify audio output

To install:
```
apt-get install pavucontrol
```
To select specific output for each programs:

![pavucontrol]({{site.baseurl}}/images/pavucontrol.png)

This feature is essential for me because I want to output to various ends - Usb soundcard, on board soundcard, HDMI... It had driven me crazy. Eventually I had to install **PulseAudio** and **Pavucontrol** to get me out of the nuisance.

### 5. FFmpeg as movie/music converter

[https://www.ffmpeg.org/](https://www.ffmpeg.org/)
```
apt-get install ffmpeg
```
Here is one example of convert .mp4 video to .mp3 audio:
```
ffmpeg -i video.mp4 -b:a 128K -vn music.mp3
```

### 6. Gimp as image suite

[https://www.gimp.org/](https://www.gimp.org/)
```
apt-get install gimp
```
With my primitive demand on an Image manipulating app, Gimp can replace Photoshop CS. It had take me some time to get familiar with the interface and tools though.

### 7. Viewnior as image viewer

[http://siyanpanayotov.com/project/viewnior/](http://siyanpanayotov.com/project/viewnior/)

Viewnior is a very fast and competent image viewer.
```
apt-get install viewnior
```

### 8. Shutter for screen capture

[http://shutter-project.org/](http://shutter-project.org/)

Shutter is powerful! It gives you a lot of options (which windows, which menu, which area of the screen..) to capture your screen and give you the tools to edit captured image. In fact, almost all images on this website are captured by Shutter.
```
apt-get install shutter
```
![shutter]({{site.baseurl}}/images/shutter.png)
