#! /bin/bash

#ethIP="$(ifconfig eth0 | grep "inet addr")"
#wlanIP="$(ifconfig wlan0 | grep "inet addr")"

sleep 10
#More accurate
#ethIP="$(/sbin/ifconfig eth0 | grep "inet addr" | cut -d ':' -f 2 | cut -d ' ' -f 1)"
#wlanIP="$(/sbin/ifconfig wlan0 | grep "inet addr" | cut -d ':' -f 2 | cut -d ' ' -f 1)"
#_IP=$ethIP$wlanIP
#echo "$ip"

_IP=$(hostname -I) || true
if [ "$_IP" ]; then
 sudo -u pi /usr/bin/mutt -s "IP: $_IP" -- dat.startup@gmail.com << EOT
EOT
fi

