

# Goals:

It should be nice to have:

1. A mpd server can stream BBC 4 internet radio, can play its local store music and stream music over wifi via updn.
2. A transmission-daemon server that can download some torrent while the music server not in use.

# Prerequisites:

1. I had a raspberry Pi model B lying around with a spare 1Gb sd card.
2. A Creative Go pro USB audio card
3. Old laptop HDD from my previous SSD replacement
4. A wireless USB adapter. I couldnot remember the brand, but with in my experience with Linux so far, any brand should work.
5. A Belkin 4 port mini hub - http://www.belkin.com/in/p/P-F5U407/

# My Google-around research:
I found the USB wireless adapter name: https://www.amazon.com/TP-Link-N150-Wireless-Adapter-TL-WN725N/dp/B008IFXQFU/ref=sr_1_4?ie=UTF8&qid=1499571218&sr=8-4&keywords=tp+link+wifi

I needed a cable to convert Sata to USB for my old HDD: https://www.amazon.com/StarTech-SATA-Drive-Adapter-Cable/dp/B00HJZJI84

I found that 1GB SD card is pretty primitive for a official Raspbian image. I then found this image: Minibian https://minibianpi.wordpress.com/features/

It had SSH enable by default, fit to my small size card and compatible with the my old version Raspberry Pi model B. Perfect!

I needed some tool to flash the image to the card but did not want to read the manual of the dd command. I then found Etcher https://etcher.io/. It was a portable tool and run well on my Debian Jessie.

Found this well written guide for mdp: https://www.lesbonscomptes.com/pages/raspmpd.html.
and this for transmission-daemon:
http://www.techjawab.com/2014/08/how-to-install-transmission-on.html

After reading itThe packages I should use were: mpd for music server, upmpdcli for an UPnP interface; transmission-daemon for torrent downloader.

The upmpdcli package was not in the official repositories, so it had to be installed from
a PPA.

# The installation:


First, flash the image into the card.
Second, plug USB hub, HDD, wifi adapter in the Raspberry then plud  to a power source.
Third:
Install sudo, add pi user and give it the sudo power

```
adduser pi
```
```
adduser <username> sudo
```

```
ssh root@yourRPiIP
```
the default password is **raspberry**. You should change it immediately. Next:

Add upmpdcli PPA: **/etc/apt/sources.list.d/upmpdcli.list**

```
touch /etc/apt/sources.list.d/upmpdcli.list
```
```
nano /etc/apt/sources.list.d/upmpdcli.list
```
```
echo "deb http://www.lesbonscomptes.com/upmpdcli/downloads/raspbian-jessie/ unstable main" >> /etc/apt/sources.list.d/upmpdcli.list
```
```
apt-get update
apt-get upgrade
```
Then:
```
apt-get install mdp transmission-daemon --no-install-recommends
```
```
apt-get install alsa-utils
```
```
apt-get install upmpdcli
```
```
apt-get install nano --no-install-recommends
```
```
apt-get install ntfs-3g
```
```
UUID=ACEC6EA8EC6E6D10   /media/course  ntfs    defaults    0   0
```
These took quite a long time to complete.
After these upgrade and installations, my Raspberry only had 175MB remaining. It was fine, as nothing more would be added. Please noted that it was the space remaining after a:
```
apt-get clean
```

# Configuration:

## 1. MDP:
Essential things that I should know:
1. the configuration file of the mdp located here:
``
sudo cp /etc/mpd.conf /home/pi/mpd/mpd.conf
```
change the owner of the config file, otherwise the user pi cannot initiate the server.
```
chown pi:audio /home/pi/mpd/mpd.conf
```
2. how to restart the service:
```
systemctl restart mpd
```
3. need to create a user for security reason:
```

```
4. only root user has audio card
```
sudo usermod -a -G groupname username
```
replace the groupname with **audio**.
Initilizing if there is no sound cards found"
```
alsactl init
```
add user to audio group
```
usermod -a -G audio pi
```

# Further feature:

1. mdp client on my Blackbery Passport phone and laptop:

2. transmission client on on my Blackbery Passport phone and laptop:

3. stream music from my Debian laptop:
I have been strem via UPnP to my Kodi server
using pulseaudio-dlna package:
It was not in the official repositories of Debian Jessie, so I had to install it from source:

First, instal its dependencies:

```
sudo apt-get install libxml2-dev
sudo apt-get install libxslt1-dev
sudo apt-get install python-lxml
```
```
git clone https://github.com/masmu/pulseaudio-dlna.git
```
```
sudo python setup.py install
```
To be able to stream via UPnP, you have to start it first in terminal or you can at it to your autostart file for the availability.

```
pulseaudio-dlna
```
