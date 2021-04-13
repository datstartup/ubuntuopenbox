# Check device name
```
sudo lshw -class network -short
```
# Check hardware information
```
lshw -C network
```
# Change card LAN
## Edit interface
```shell
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
 
source /etc/network/interfaces.d/*
 
# The loopback network interface
auto lo
iface lo inet loopback
 
# The primary network interface
allow-hotplug eth0
iface eth0 inet dhcp
```
* replace `eth0` with the interface found with `sudo lshw -class network -short`.
 
## To disconnect a network
```
sudo ifconfig eth0 down
```
## To connect a network
```
sudo ifconfig eth0 up
```
# Script to keep raspberry Pi network alive:
```shell
#!/bin/bash
 
LOGFILE=/home/pi/network-monitor.log
 
if ifconfig eth0 | grep -q "inet"
then
       :
       #echo "$(date "+%m %d %Y %T") : Ethernet OK" >> $LOGFILE
else
       echo "$(date "+%m %d %Y %T") : Ethernet connection down! Attempting reconnection." >> $LOGFILE
       ifconfig eth0 up
       OUT=$? #save exit status of last command to decide what to do next
       if [ $OUT -eq 0 ] ; then
               STATE=$(ifconfig eth0 | grep "inet")
               echo "$(date "+%m %d %Y %T") : Network connection reset. Current state is" $STATE >> $LOGFILE
       else
               echo "$(date "+%m %d %Y %T") : Failed to reset ethernet connection" >> $LOGFILE
       fi
fi
```
## Add the script to cron
```
sudo nano /etc/crontab
```
Add this line to the end
```
*/3 * * * * root bash /home/pi/bin/network-monitor.sh
```
* Run every 3 minutes
 
## Check the cron service status
```
service cron status
```
## Turn on the cron service
```
sudo service cron restart
```
* If your OS disables cron service by default, you need to run the command `sudo service cron start` at boot.
* To test if the script runs properly, turn down the network and wait for 3 minutes. After that, if you can connect to the Raspberry Pi via SSH, then it runs okay. You can check the log to see more.
 
## Turn the network down
```
sudo ifconfig eth0 down
```
## Check its log
```
less /home/pi/network-monitor.log
```

