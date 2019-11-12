#!/bin/bash
IP=$(hostname -I) || true
if [ "$IP" ]; then
 echo $IP
 mutt -s $IP -- dat.startup@gmail.com < ~/text

  #python /home/pi/code/startup_mailer.py
fi
