---
title: "Back Up Raspberry Pi OS To Image"
header:
categories:
  - Raspberry Pi
tags:
  - Raspbian
  - Raspberry Pi
  - Backup
---

### After install and configure many thing on my Raspbery Pi, it will be too much if I have to do it again if the SD card is corrupted. Backing it up will be really good idea.

#### A SD card reader and a computer with Linux on it. Insert the card into the card reader, plug it into the computer. Find out where the id of the SD card using this command:
```bash
df -h
```
Mine is **/dev/sdb**.

#### Backup it


Navigate to where you want to save the image.
```bash
sudo dd bs=4M if=/dev/sdb | gzip > rasbian.img.gz
```

Note: **gzip** is for compressing the image to a managable size. 
{: .notice--info}
