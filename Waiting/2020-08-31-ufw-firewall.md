---
title: "ufw Firewall"
header:
categories:
  - tips
tags:
  - firewall
---

A firewall allows or denys access to a particular networking port on server.

I want my specific IP address to be able to access to SSH on the sever and nobody else. So, even within a network, only my admin IP can SSH to the server.

uncomplicate firewar


## 1. General

status:
```
sudo ufw status verbose
```

enable
```
sudo ufw enable
```

Deny all incoming connection by default

## Add rule
sudo ufw allow 21

sudo ufw status verbose

Allow a ip to access a port
sudo ufw allow from 192.168.1.4 to any port 22
sudo ufw status verbose

Allow for a whole subnetwork access to aport
sudo ufw allow from 10.0.1.0/24 to any port 22

Allow a service
sudo ufw allow ftp

## Remove rule

sudo ufw status numbered

sudo ufw delete 2

Delete all the rule and disable ufw
sudo ufw reset

