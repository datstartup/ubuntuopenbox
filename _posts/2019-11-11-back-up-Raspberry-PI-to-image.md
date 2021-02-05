---
title: "Back Up Raspberry Pi OS To Image"
header:
categories:
  - Raspberry-Pi
tags:
  - Raspbian
  - Raspberry-Pi
  - Backup
---
### After installing and configuring many things on my Raspberry Pi, it will be too much if I have to do it again. Backing it up is really a good idea.

#### I need A SD card reader and a computer with Linux on it. Insert the card into the card reader, plug it into the computer. Find out where the id of the SD card using this command:
```bash
df -h
```
Mine is **/dev/sdb**.

#### Backup it


Navigate to where you want to save the image, then:
```bash
sudo dd bs=4M if=/dev/sdb | gzip > rasbian.img.gz
```

Note: **gzip** is for compressing the image to a manageable size.
{: .notice--info}
