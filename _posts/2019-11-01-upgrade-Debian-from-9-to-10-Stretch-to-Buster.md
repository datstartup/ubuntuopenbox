---
title: "Upgrade Debian from 9 to 10 (Stretch to Buster)"
header:
categories:
  - Debian-10
  - Operating-system
tags:
  - Debian-10  
  - upgrade
  - obmenu-generator
---

### First, change the content of the **sources.list** file.

#### Backup
```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
#### Change the content
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
(CTRL + X and "Y" to save the file).

Because mine uses Taiwan server, it is not necessary that you have to, please choose a nearest mirror for the best downloading speed.
{: .notice--info}

### Upgrade by running these commands in sequence:

#### 1. First, update the local source lists:
```bash
sudo apt-get update
```
#### 2. Next, install the newest versions of all packages currently installed on the system:
```bash
sudo apt-get upgrade
```
#### 3. Finally, run upgrade the distribution:
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

**ISSUE:** On my notebook, the upgrade had only one glitch. The obmenu-generator said it needed a Perl module, called "Linux::DesktopFiles". Installed the module and everything went smoothly.

```bash
sudo perl -MCPAN -e 'CPAN::Shell->install(q{Linux::DesktopFiles})'
```

**UPDATE 15 Nov 2019:** I found another bug when trying to "open terminal here" in Thunar: "Failed to launch preferred application for category TerminalEmulator. Failed to execute child process /usr/lib/x86_64-linux-gnu/xfce4/exo-1/exo-helper-1 (No such file or directory).) Directory exo-1 does not exist."

Have to install the package name **"libexo-1-0"**:
```bash
sudo apt-get install libexo-1-0
```

as found here [on askubuntu.com](https://askubuntu.com/questions/1136194/xfce-can-not-start-preferred-applications-under-ubuntu-19-04).