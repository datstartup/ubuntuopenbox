---
title: "Upgrade Debian from 9 to 10 (Stretch to Buster)"
header:
categories:
  - Debian 10
  - Uncategorized
tags:
  - Debian 10
  - upgrade
  - obmenu-generator
---

### First, change the content of the **sources.list** file.

#### Backup it
```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
#### Change it
Edit it using **nano** editor:
```bash
sudo nano /etc/apt/sources.list
```
Modify its content as following:
```bash
deb http://ftp.tw.debian.org/debian/ buster main contrib non-free #Taiwan
deb http://security.debian.org/ buster/updates main
deb http://ftp.tw.debian.org/debian/ buster-updates main #Taiwan
```
(STRL + X and "Y" to save the file).

Because mine uses Taiwan server, it is not necessary that you have to, please choose a nearest mirror for the best downloading speed{: .notice--info}

### Upgrade by running these commands in sequence:

1. First, update the local source lists:
```bash
sudo apt-get update
```
2. Next, install the newest versions of all packages currently installed on the system:
```bash
sudo apt-get upgrade

3. Finally, run upgrade the distribution:
```bash
sudo apt-get dist-upgrade
```
Check the version of Debian:

```bash
lsb_release -a
```
My output:

```
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 10 (buster)
Release:	10
Codename:	buster
```

**ISSUE:** On my notebook, the upgrade had only one glitch. The obmenu-generator said it needed a Perl module, called "Linux::DesktopFiles". Install the module and everything when smoothly.

```bash
sudo perl -MCPAN -e 'CPAN::Shell->install(q{Linux::DesktopFiles})'
```
