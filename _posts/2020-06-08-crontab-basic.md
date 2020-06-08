---
title: "Crontab Basic"
header:
categories:
  - tips
tags:
  - crontab
---

Cron is for schedule tasks.

### 1. Basic terms

`crontab -e` - (commands) maintains crontab files for individual users, with flag`-e` to edit a crontab file of current user)
`crontab` - files used to schedule the execution of programs

## 2. How to add/ edit a cron task

Although there are a system wide cron file `/etc/crontab`. You can take a look by using `cat /etc/crontab`. I instinctively left it alone after seeing its content (mostly because I was scare). 

Either using `sudo crontab -e` to edit root account crontab file or 

`crontab -e` to edit user account crontab file. 

I have intensively used Debian for a long time and find that `crontab -e` for normal user is enough for me.

## 3. A task pattern in crontab file
For system wide task in `/etc/crontab`. Notice the `user-name` argument.
```bash
*  *  *  *  * user-name  command to be executed
```
User's one:
```bash
*  *  *  *  * command to be executed
```
* Note: I get this guide from the file `/etc/crontab`
{: .notice--info}
```bash
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
```
Because I rarely write one myself, I cannot affort to re-learn it every time I need one - I often just Google it.

## 4. Reload/ restart service after edit
```bash
sudo service cron restart
```
NOTE
{: .notice--info}

* First: `sudo service cron reload` also work. It is always safer to use `restart` because `reload` sometime do not exist for a service.

* Second:
`restart = stop + start`
`reload = remain running + re-read configuration file`
So if `reload` does exist, it is preferable to `restart` because it will be no down time.

* Third: if you want a thoroughly read here: [The Debian Policy Manual](https://www.debian.org/doc/debian-policy/ch-opersys.html#s-writing-init)


## 5. Check the service status

```bash
sudo service cron status
```

## 6. System log
A cron task is often need trouble-shooting, especially right after being set up.

Cron logs its actions via syslog, which (depending on your Linux distro) often go to `/var/log/cron` or `/var/log/syslog`.

```bash
sudo grep CRON /var/log/syslog 
```
## 7.Create your own logs
I find the system log messy (the system-wide cron tasks also logged here) and not give enough information for a specific command, I like to log it myself.

```bash
1 2 * * * /path/to/your/command >/tmp/mycommand.log 2>&1
```
Mine (with date added): The task is for changing my wallpaper every 20 minutes.
```bash
*/20 * * * * (/bin/date && /home/dat/Custom/nitrogenSlideShow.py) > /tmp/mycommand.log 2>&1
```

* Note: `>>` is appended; `>` is overriten.
{: .notice--info}

## 8.Check if cron is running in system:
```bash
ps -ef | grep cron
```
* Note: `ps` (processes status) is a command to view a selection of running processes. It get the info from `/proc`
{: .notice--info}

Mine here:

```bash
root      5254     1  0 14:52 ?        00:00:00 /usr/sbin/cron -f
dat      25396 25201  0 18:18 pts/4    00:00:00 grep cron
```