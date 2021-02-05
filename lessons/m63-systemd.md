---
layout: single
title: SYSTEMD
description: Manage and create your own services.
toc: true
toc_label: "Maintaining System"
toc_sticky: true
toc_icon: "cog"
author_profile: false
---

Systemd is a suite that manages to do many tasks in Debian/ Ubuntu OS. In this lesson, I only focus on its service management aspect.

The command used to manage systemd is `systemctl`.

### 1. Systemd units

A unit in systemd can be services (.service), mount points (.mount), devices (.device) or sockets (.socket).

To specify a unit, you have to use its complete name, including its suffix. For example `mpd.socket` or `mpd.service`. If you omit the suffix, `systemctl` will assume that you are addressing a `.service`.

To list all current loaded units:

```bash
systemctl list-units
```
Service units only:

```bash
systemctl list-units | grep .service
```
To list failed units:
```bash
systemctl --failed
```

### 2. Check services status

{: notice--info}
If a `systemctl` command is just for checking information, it does not need root power (sudo).

Check the status of a service:
```bash
systemctl status mpd.service
```
```bash
● mpd.service - Music Player Daemon
   Loaded: loaded (/lib/systemd/system/mpd.service; enabled; vendor preset: enab
   Active: active (running) since Wed 2020-03-11 13:07:20 +07; 1h 9min ago
     Docs: man:mpd(1)
           man:mpd.conf(5)
           file:///usr/share/doc/mpd/user-manual.html
 Main PID: 890 (mpd)
    Tasks: 3 (limit: 4915)
   Memory: 51.6M
   CGroup: /system.slice/mpd.service
           └─890 /usr/bin/mpd --no-daemon
```

There is several info listed here but please notice the `Loaded` and `Active` ones.
* Loaded: the loaded status above is `enabled` that means it will auto start if there is a reboot. If it is `disable`, it will not autostart at the next reboot.
* Active: `active` means it is running. Otherwises (inactive/ failed...), you have to look further into it.

### 2. Enable and disable a service

{: notice--info}
If a `systemctl` command changes service state, it needs root power (sudo).

This status is shown in the `Loaded` line as above.

Enable a service:
```bash
sudo systemctl enable mpd.service
```
Disable a service
```bash
sudo systemctl disable mpd.service
```

### 3. Stop, start and restart a service
This status is shown in the `Active` line as above.
```bash
sudo systemctl start mpd.service # or stop/ restart
```

### 4. reboot/ poweroff and suspend

> `polkit` is necessary for power management as an unprivileged user. If you are in a local systemd-logind user session and no other session is active, the following commands will work without root privileges. If not (for example, because another user is logged into a tty), systemd will automatically ask you for the root password.
> From Arch wiki

This means if only you are using the desktop, you can use these commands without sudo.

```bash
systemctl reboot # or power off/ suspend
```

### 5. Create your own systemd service

The reason why I create a systemd service is I need a way for a script to survive a reboot (autostart when boot).

I have used this service for my `python-telegram` bot script running on my Raspberry Pi.

```bash
nano /etc/systemd/system/python-telegram.service
```

```bash
[Unit]
Description=My telegram bot
After=syslog.target
[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/home/pi/telegrambot/
ExecStart=/home/pi/telegrambot/myPiBot.py
StandardOutput=syslog
StandardError=syslog
[Install]
WantedBy=multi-user.target
```

After you add a service file, you need to start it:

```bash
sudo systemctl start python-telegram.service
```

**Explanation:**

#### A. Where to put the service file:
Unit files are loaded from multiple locations (to see the full list, run `systemctl show --property=UnitPath`), but the main ones are (listed from lowest to highest precedence):

    /usr/lib/systemd/system/: units provided by installed packages
    /etc/systemd/system/: units installed by the system administrator


#### B.

The most typical case is that unit A requires the unit B to be running before A is started. In that case add Requires=B and After=B to the [Unit] section of A. If the dependency is optional, add Wants=B and After=B instead. Note that Wants= and Requires= do not imply After=, meaning that if After= is not specified, the two units will be started in parallel.


You can specify the directives User= and Group= in the [Service] section of the unit file.

Type=simple : systemd considers the service to be started up immediately. The process must not fork. Do not use this type if other services need to be ordered on this service, unless it is socket activated.    

WorkingDirectory: defines which directory the service will be launched, same as when you use cd to change a directory when you're working in the shell.

[Install]
WantedBy=multi-user.target

normally defines a system state where all network services are started up and the system will accept logins, but a local GUI is not started.

if you omit the WantedBy=multi-user.target line and no other enabled service includes a Requires=your.service or Wants=your.service in its service definition, your service will not be started automatically

systemd works on dependencies, and at boot time, if nothing Requires or Wants your service, it won't be started even if the service is enabled.

sudo journalctl -u [unit] to view the log of a unit





