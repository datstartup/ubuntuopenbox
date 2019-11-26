---
title: "Use Mutt As Email Manager"
header:
categories:
  - Raspberry-Pi
  - Debian
  - Ubuntu
  - Command-line
tags:
  - Raspbian
  - Raspberry-Pi
  - Mutt
---

### I only use the Raspberry Pi for headless server, so I need a email client that send email. 

* Raspbian OS and 
* Gmail

#### Install and configure Mutt

##### Install
It is in Raspbian repositories, so the installation is simple.
```bash
sudo apt-get install mutt
```

##### Configure Mutt to manage a Gmail
Edit its configuration file at **/home/pi/.muttrc**
```bash
nano /home/pi/.muttrc
```
Change the content of the file as following:

```bash
# $HOME/.muttrc
set realname = "Last_name First_name"
set from = "your_gmail_account@gmail.com"
set use_from = yes
set envelope_from = yes

set smtp_url = "smtps://your_gmail_account@gmail.com@smtp.gmail.com:465/"
set smtp_pass = "your_gmail_password"
set imap_user = "your_gmail_account@gmail.com"
set imap_pass = "your_gmail_password"
set folder = "imaps://imap.gmail.com:993"
set spoolfile = "+INBOX"
set ssl_force_tls = yes
# G to get mail
bind index G imap-fetch-mail
set editor = "nano"
set charset = "utf-8"
set record = ''
```
**Note:** Change these line accordingly to your Gmail preferences:
* set realname = "Last_name First_name"
* set from = "your_gmail_account@gmail.com"
* set smtp_url = "smtps://your_gmail_account@gmail.com@smtp.gmail.com:465/"
* set smtp_pass = "your_gmail_password"
* set imap_user = "your_gmail_account@gmail.com"
* set imap_pass = "your_gmail_password"
{: .notice--info}

##### To test your new setting:
```bash
mutt -s "Test from mutt" your_name@your_email.com < /home/pi/text
```
Note: Change the email to the one you want to receive the test email. You also need a text file name 'text' with the body (message) of the email in it.
{: .notice--info}

#### Send email content IP at startup - A simple script to employ Mutt in Raspbian.
I often drag my Rasberry Pi around so it has to get different assigned IP.
The script will tell me which IP it currently has.
```bash
#! /bin/bash
sleep 10

_IP=$(hostname -I) || true
if [ "$_IP" ]; then
 sudo -u pi /usr/bin/mutt -s "IP: $_IP" -- your_name@your_email.com << EOT
EOT
fi
```
Save it at **home/pi/emailIP.sh**

**Note:** Change the email to the one you want to receive the IP and change the username of the command **sudo -u pi /usr/bin/mutt...** if you using another (it is "pi" here as current sending user).
{: .notice--info}

To run the script at boot, on your Pi edit the file /etc/rc.local (need root power):
```bash
sudo nano /etc/rc.local
```
Add commands **/home/pi/emailIP.sh** below the comments, then save the file and exit.

**Note:** you must leave the line **exit 0** at the end.
{: .notice--info}