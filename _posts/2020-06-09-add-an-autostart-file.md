---
title: "Add an autostart file Openbox style for Raspberry Pi"
header:
categories:
  - tips
tags:
  - raspbian
  - Raspberry-pi  
  - run-command-at-boot
  - Autostart file
---

When using Raspberry as a headless server, eventually I will need to run some commands or apps at start up.

Although there are various ways to get the task done (one is My crontab guide here: [Crontab post](https://www.ubuntuopenbox.com/tips/crontab-basic/)), I have found a way that I think very flexible and robust.

The method is to create an **autostart.sh** script storing commands, then run the script at boot by adding it to **/etc/rc.local** file.

This way you can add as many commands as you want to the **autostart.sh** script and only focus to maintain this file. It also can run commands that need `sudo`  at startup without a password.

### 1. Add an **autostart.sh** script

Create a autostart file **/home/pi/autostart.sh** with the similar content below (please adapt it to your need):

```bash
nano ~/autostart.sh
```

Add content:

```bash
#!/bin/sh
(sleep 3s && sudo motion)
cd /
cd /home/pi/tflite1/
sudo -u pi /usr/bin/python3 TFLite_detection_webcam_person.py --modeldir=Sample_TFLite_model/
cd /
```

* `cd` commands are for navigating to the directory containing the script. This is particularly useful when running python module.

* `sudo -u pi` are for instructing that a specific user should run the command.

You can add many commands at you want and if you want to delay their running, put the **sleep 3s** (as many seconds as you want, I just use 3 here) above it.

### 2. Edit rc.local file

*Note:* Please keep in mind that all commands put in this file are run with root power at startup. So it can run the `sudo` command without a password.
{: .notice--info}


```bash
#!/bin/sh
sudo nano /etc/rc.local
```

Add this line to the end of the file but **above** the **exit 0** line. At the end because you do not want to interfere with the default starting programs sequence.

```bash
/home/pi/autostart.sh
```
