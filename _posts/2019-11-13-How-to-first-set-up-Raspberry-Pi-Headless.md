---
title: "How to set up Raspberry Pis as headless servers"
header:
categories:
  - Raspberry-Pi
tags:
  - Raspbian
  - Raspberry-Pi
  - Headless-server
---

## The steps laying out here are distilled from my own trial and error. Hope it will help you!
### Download Raspbian image
Because I run servers headless, there is no need to use a full Desktop version of Raspbian. I download its lite version image here: [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/).

### Load Raspbian image to a SD card
I find a program called *etcher* is extremely reliable and runs on multiplatform (Linux, Windows, and Mac OS) without the need to install. Download the proper version for your desired OS at:
[https://www.balena.io/etcher/](https://www.balena.io/etcher/).
[![Etcher]({{site.baseurl}}/images/etcher.png)]({{site.baseurl}}/images/etcher.png){:target="blank"}

### Set up wifi

The purpose of this setup is for your Raspberry Pi to connect to a wifi network on its very first boot, saving you time to connect it to a LAN cable and edit the wifi interface file.

Add a *wpa_supplicant.conf* file to the /boot directory (the directory is in *fat32* format so it is easy to show up on Windows too).

The content of the file:
```bash
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_PASSWORD"
    key_mgmt=WPA-PSK
}
```

Raspbian will move it to the proper place at /etc/wpa_supplicant/ at the first boot and automatically connect to the wifi specified in the file.

*Note:* It is not me who found the method, I read it somewhere on stackexchange when my HDMI cable broke and could not access a LAN port. Have been using it successfully ever since from Stretch to Buster.
{: .notice--info}

### Enable SSH

Create a empty file name *ssh*, without any extension, in the /boot directory.
Raspbian will detect it during the first boot and enable SSH.

*Note:* I found it here: [Raspberry Pi's documentation on SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/ "Raspberry Pi's documentation on SSH").
{: .notice--info}

### Scan for Raspberry Pi's IP on your network

I have setup fix IPs for every of my Raspberry Pi depending on their Mac addresses or have them send me their IP to my email every time they connected to a new network as in this post:[Use mutt email manager/](https://www.ubuntuopenbox.com/raspberry-pi/debian/ubuntu/command-line/use-mutt-email-manager/). So this is only for the first time.

I am using **nmap** to scan the IPs in my network with this command:

```bash
sudo nmap -sP 192.168.1.0/24
```

Where 192.168.1.0/24 will be your all network gateways (the IPs of devices that grant IPs).

*Note:* Credit to the answer here: [Find Raspberry PI address on local network](https://raspberrypi.stackexchange.com/questions/13936/find-raspberry-pi-address-on-local-network).
{: .notice--info}

My Raspberry Pi show up like this:
```bash
MAC Address: X8:XX7:XB:6X:X1:XX (Raspberry Pi Foundation)
Nmap scan report for 192.168.1.XXX
```
Its IP will be 192.168.1.XXX.

If your Debian/ Ubuntu system do not come with *nmap* line mine, install it using below command:
```bash
sudo apt-get install nmap
```
