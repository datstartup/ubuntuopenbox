---
title: "ufw Firewall"
header:
categories:
  - tips
tags:
  - firewall
---

fail2ban is an intrusion prevention framework written in Python that protects Linux systems and servers from brute-force attacks.

monitor the strength and frequency of attacks.

can be setup to block IP addresses automatically based on specific paramenters.


## 1. Install

sudo apt install fail2ban



## 2. enable
sudo systemctl enable fail2ban-service

## 3. config
ls -al /etc/fail2ban

jail.conf file
* a jail is a argument to protect the server

should create a local jail: /etc/fail2ban/jail.local (not overwritten if fail2ban is updated)

```
sudo cp jail.conf jail.local
```

```bash
[sshd]
enabled = false # change to true and restart service
port = ssh
#make fail2ban look after the sshd service
filter = sshd
#log
logpath = /var/log/auth.log
#security option
#number of attempts allowed
maxretry = 3
bantime = 3600
#while list ip address (be cafeful not to look yourself out)
ignoreip = 127.0.0.1 192.168.1.0/24 192.168.1.100/32
```
```bash
cat /var/log/auth.log
```
log all the authentication attempts.

restart fail2ban everytime changing the jail files.

```
systemctl restart fail2ban.service
```
check if the service is active

```
systemctl status fail2ban.service
```

fail2ban-client status

fail2ban-client status sshd


## 1. Genera
Check which service on which port
sudo netstat -tulpn

## Ban an IP

sudo fail2ban-client set sshd banip 192.16.249.189

## unban
sudo fail2ban-client set sshd unbanip 192.16.249.189
