---
title: "Quick guide to install Debian Buster with Openbox"
header:
categories:
  - Guide
tags:
  - Debian  
  - Openbox
  - NetInstall
---


This is a general guide to install Openbox on the latest Debian 10 Buster. 

The finish operating system will have several hightlights:

* Minimalist style 
* Quick to be installed and configured
* Use a dock as launcher and taskbar
* Use conky as system information shower
* Only Google Chrome counted as an end-user app
* If you want to extend this more please go to the Lessons page of this website.

### 1. Install a base system from netinstall CD

Note that you only need "..." to select when you are installing the base system:





Change source list
```bash
nano ~/autostart.sh
```

Update and upgrade system

```bash
#!/bin/sh
cd /
cd /home/pi/tflite1/
sleep 3s &&
sudo motion	
sudo -u pi /usr/bin/python3 TFLite_detection_webcam_person.py --modeldir=Sample_TFLite_model/ 
cd /
```

### 2. Install packages

xorg openbox 

*Note:* Install Google Chrome first thing to easy copy and paste from this guide.
{: .notice--info}

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt install ./google-chrome-stable_current_amd64.deb 



General list: What and Why

apt install terminator plank thunar thunar-volman thunar-archive-plugin thunar-media-tags-plugin gvfs gvfs-backends nitrogen alsa-utils vlc numlockx light-locker lightdm wicd lxpolkit xfce4-notifyd pulseaudio pavucontrol breeze-cursor-theme obconf lxappearance numix-gtk-theme numix-icon-theme compton conky conky-all

* **xorg**: X window server, deal direcly with hardware to provide a GUI.
* **openbox**: Openbox Window manager, manage the "box" for programs to run on.
* **terminator**: termnal emulator
* **plank**: lightweigh but powerful dock
* **thunar**: file manager
* **thunar-volman**: thunar plugin
* **thunar-archive-plugin**: thunar plugin
* **thunar-media-tags-plugin**: thunar plugin
* **gvfs**: for thunar can access remote file (sftp)
* **gvfs-backends**: for thunar can access remote file (sftp)
* **nitrogen**: manage and change wallpaper
* **alsa-utils**: tools for configure Advanced Linux Sound Architecture
* **vlc**: video/ audio player
* **numlockx**: turn on numlock at boot
* **light-locker**: to lock desktop
* **lightdm**: login manager
* **wicd**: network manager
* **lxpolkit**: handle priviledge (right to access)
* **xfce4-notifyd**: notification service
* **pulseaudio**: audio server
* **pavucontrol**: audio device manager
* **breeze-cursor-theme**: theme for cursor
* **obconf**: openbox configuration tool
* **lxappearance**: manage and change GTK theme/ icon
* **numix-gtk-theme**: gtk3 theme
* **numix-icon-theme**: icon theme
* **compton**: composite
* **conky**: system monitor (more about quick stats)
* **conky-all**: with conky
* **htop**: system monitor (more about details of processes)




```bash
/home/pi/autostart.sh
```

### 3. Configure Openbox

Use my preconfigured Openbox config file

Use my menu Generator scheme

### 4. Configure composite and Conky

### 5. More

Use bl-exit script from Bunsen Labs

Install sublime text

Install

auto login with lightdm

sudo nano /etc/lightdm/lightdm.conf

autologin-guest=false
autologin-user=dat #my user
autologin-user-timeout=0

### 6. Trouble shooting
 43  sudo apt install compton htop
 firmware-amd-graphics




Slow to start
apt-get install haveged


Create (if not already existing) or edit your ~/.Xdefaults file and add these lines:

Xcursor.theme: name
Xcursor.size:  32

In /usr/share/X11/xorg.conf.d/ directory, edit (or create) a file called 20-radeon.conf (look for amdgpu.conf for users with the amdgpu drivers) with the following contents:

    Section "Device"
        Identifier "Radeon"
        Driver "radeon"
        Option "TearFree" "on"
    EndSection

dat@debian:/etc/X11/xorg.conf.d$ cat 20-intel.conf 
Section "Device"
   Identifier  "Intel Graphics"
   Driver      "intel"
   Option "AccelMethod" "sna"
   Option "TearFree" "true"
EndSection

###7. Check and configure time

timedatectl

timedatectl status

timedatectl list-timezones

timedatectl set-timezone Europe/Paris