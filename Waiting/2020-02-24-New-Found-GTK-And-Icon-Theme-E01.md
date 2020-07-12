---
title: "Autostart Commands or Apps"
header:
categories:
  - tips
tags:
  - eye-candy 
  - run-command-at-boot
---

sudo apt install adapta-gtk-theme --no-install-recommends
sudo apt install papirus-icon-theme
luv


### 1. Add an **autostart.sh** script

Create a autostart file **/home/pi/autostart.sh** with the similar content below (please adapt it to your need):

```bash
nano ~/autostart.sh
```

Add content:

```bash
#!/bin/sh
cd /
cd /home/pi/tflite1/
sleep 3s &&
sudo motion	
sudo -u pi /usr/bin/python3 TFLite_detection_webcam_person.py --modeldir=Sample_TFLite_model/ 
cd /
```

* **cd** command are for navigate to the directory containing script. This is particular useful when running python module. 

* **sudo -u pi** are for instructing that a specific user should run the command. 

You can add many commands at you want and if you want to delay their running, put the **sleep 3s** (as many seconds as you want, I just use 3 here) above it.

### 2. Edit rc.local file


*Note:* Please keep in mind that all commands put in this file are run with root power at startup.
{: .notice--info}


```bash
#!/bin/sh
sudo nano /etc/rc.local
```

Add this line to the end of the file but **above** the **exit 0** line. At the end because you do not want to intefere with the default starting programs sequence.

```bash
/home/pi/autostart.sh
```
