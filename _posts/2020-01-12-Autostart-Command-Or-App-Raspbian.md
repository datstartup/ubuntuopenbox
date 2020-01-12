---
title: "Autostart Commands or Apps"
header:
categories:
  - tips
tags:
  - raspbian  
  - run-command-at-boot
---


When using Raspberry as headless server, eventually I will need to run some commands or apps at start up.

Although there are various ways to get the task done, I have found a way that I think very flexible and robust.
 
The method is to create an **autostart.sh** script storing commands, then run the script at boot by adding it to **/etc/rc.local** file.

This way you can add as many commands as you want to the **autostart.sh** script and only focus to maintain this file.

### 1. Add an **autostart.sh** script

Create a autostart file **/home/pi/autostart.sh** with the similar content below (please adapt it to your need):

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
