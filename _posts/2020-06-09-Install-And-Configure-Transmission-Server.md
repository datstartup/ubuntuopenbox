---
title: "Install a transmission server (on Raspberry Pi)"
header:
categories:
  - tips
tags:
  - Transmission
  - Raspberry Pi
---

Why another Transmission guide:
1. This is my seft-note.
2. This guide focuses on giving more comprehensive information about permission.

### Installation

Run `sudo apt install transmission-daemon`.

### Objectives

1. The configuration will give the permission to the `pi` user because I use this transmission configuration for my Raspberry Pi. You can customize it for any user.

2. The principle of this configuration is that all the right to access downloading folders and start `transmission` will be given to the user `pi` and the group `debian-transmission`.

3. Add a log.

### Prerequisites
Need these two folder availables:

* In-progress files storage: `/home/pi/torrent/incomplete`
* Complete files storage: `/home/pi/torrent/complete`

### Change the user running service

1. Change the user running the transmission-daemon service

* Edit user in `init` file  
Run `sudo nano /etc/init.d/transmission-daemon`

edit the “USER=” line, so that the Transmission daemon will be run by the “pi” user and not the “debian-transmission” (default).
```bash
USER=pi
```
* Create a user's config folder

Start the transmission-daemon

```sudo service transmission-daemon start```


The transmission folder should be also created for user `pi` at `/home/pi/.config/transmission-daemon/`. You can manually create one if the task is not done automatically.

* Add log

Run `sudo nano /lib/systemd/system/transmission-daemon.service`.

Change these two lines:
```bash
User=pi
```
```bash
ExecStart=/usr/bin/transmission-daemon -f --log-debug --logfile /home/pi/.config/transmission-daemon
```

Note: the line `ExecStart=/usr/bin/transmission-daemon -f --log-debug --logfile /home/pi/.config/transmission-daemon` will instruct transmisison server to add a log file to wherever you want.

Reload the systemd daemon:

```sudo systemctl daemon-reload```

### Configuration

**Stop the service to prevent the settings file from being replaced by a running transmission service.**

Run `sudo service transmission-daemon stop`.  

* Change the setting

The user setting file will be stored at `/home/pi/.config/transmission-daemon/settings.json`

Change these lines:

```bash
{
    "download-dir": "/home/pi/torrent/complete",
    "incomplete-dir": "/home/pi/torrent/incomplete",
    "incomplete-dir-enabled": true,
    "rpc-password": "password",
    "rpc-port": 9091,
    "rpc-url": "/transmission/",
    "rpc-username": "transmission",
    "rpc-whitelist": "192.168.*.*",
    "rpc-whitelist-enabled": false,
    "umask": 2,
}
```

**Note**
* `"rpc-whitelist": "127.0.0.1,192.168.*.*"` I have removed the local host "127.0.0.1" because I only use it remotely.
* `"umask": 2` translates to permissions of `774`, or `rwxrwxr--`, which means full access for the owner and group. Everyone else, not in the user's group, can only read.

Entire config file of mine, just copy-paste if you want.
```bash
{
    "alt-speed-down": 50,
    "alt-speed-enabled": false,
    "alt-speed-time-begin": 540,
    "alt-speed-time-day": 127,
    "alt-speed-time-enabled": false,
    "alt-speed-time-end": 1020,
    "alt-speed-up": 50,
    "bind-address-ipv4": "0.0.0.0",
    "bind-address-ipv6": "::",
    "blocklist-enabled": false,
    "blocklist-url": "http://www.example.com/blocklist",
    "cache-size-mb": 4,
    "dht-enabled": true,
    "download-dir": "/home/pi/torrent/complete",
    "download-limit": 100,
    "download-limit-enabled": 0,
    "download-queue-enabled": true,
    "download-queue-size": 5,
    "encryption": 1,
    "idle-seeding-limit": 30,
    "idle-seeding-limit-enabled": false,
    "incomplete-dir": "/home/pi/torrent/incomplete",
    "incomplete-dir-enabled": true,
    "lpd-enabled": false,
    "max-peers-global": 200,
    "message-level": 3,
    "peer-congestion-algorithm": "",
    "peer-id-ttl-hours": 6,
    "peer-limit-global": 200,
    "peer-limit-per-torrent": 50,
    "peer-port": 51413,
    "peer-port-random-high": 65535,
    "peer-port-random-low": 49152,
    "peer-port-random-on-start": false,
    "peer-socket-tos": "default",
    "pex-enabled": true,
    "port-forwarding-enabled": false,
    "preallocation": 1,
    "prefetch-enabled": true,
    "queue-stalled-enabled": true,
    "queue-stalled-minutes": 30,
    "ratio-limit": 2,
    "ratio-limit-enabled": false,
    "rename-partial-files": true,
    "rpc-authentication-required": true,
    "rpc-bind-address": "0.0.0.0",
    "rpc-enabled": true,
    "rpc-host-whitelist": "",
    "rpc-host-whitelist-enabled": true,
    "rpc-password": "password",
    "rpc-port": 9091,
    "rpc-url": "/transmission/",
    "rpc-username": "transmission",
    "rpc-whitelist": "192.168.*.*",
    "rpc-whitelist-enabled": false,
    "scrape-paused-torrents-enabled": true,
    "script-torrent-done-enabled": false,
    "script-torrent-done-filename": "",
    "seed-queue-enabled": false,
    "seed-queue-size": 10,
    "speed-limit-down": 100,
    "speed-limit-down-enabled": false,
    "speed-limit-up": 100,
    "speed-limit-up-enabled": false,
    "start-added-torrents": true,
    "trash-original-torrent-files": false,
    "umask": 2,
    "upload-limit": 100,
    "upload-limit-enabled": 0,
    "upload-slots-per-torrent": 14,
    "utp-enabled": true
}
```
### Modify the default permission

Add the user `pi` to the `debian-transmission` group:

```sudo usermod -a -G debian-transmission pi```

Change the ownership of the torrent folders to "owned both by the pi user and the debian-transmission group":

```sudo chown -R pi:debian-transmission /home/pi/torrent/complete/```
```sudo chown -R pi:debian-transmission /home/pi/torrent/incomplete/```

Grand the write access to the group `debian-transmission`
```
sudo chmod 770 /home/pi/torrent/complete/
sudo chmod 770 /home/pi/torrent/incomplete/
```
Check the result using `ls -la`:

```bash
pi@raspberrypi:~/torrent $ ls -la
total 16
drwxr-xr-x  4 pi pi                  4096 Feb  7 17:25 .
drwxr-xr-x 13 pi pi                  4096 Feb  7 17:25 ..
drwxrwx---  2 pi debian-transmission 4096 Feb  7 17:25 complete
drwxrwx---  2 pi debian-transmission 4096 Feb  7 17:25 incomplete
```

* Note: Chmod `770` (chmod a+rwx,o-rwx) sets permissions so that: User / owner can read, can write and can execute. Group can read, can write and can execute. Others can't read, can't write and can't execute. Or more detail below.

* `drwxrwx---` means, from left to right:

`d`: directory.
`rwx`: user can read, write and execute.
`rwx`: group can read, write and execute.
`---`: others can't read, can't write and can't execute

### Finalization
Start transmission service.

`sudo service transmission-daemon start`
 
Check the status.

`sudo service transmission-daemon status`

### Send complete torrent notification

* 1. Via Email
To be updating...

* 2. Via Telegram
To be updating...

### Reference on permission

With an `ls -la` command:
```bash
     +-permissions that apply to the owner
      |
      |     +-permissions that apply to all other users
      |     |
      |     |  +-number of hard links
      |     |  |
      |     |  |             +-size      +-last modification date and time
     _|_   _|_ |            _|__ ________|_______
    drwxr-xr-x 2  pi   root 4096 2008-11-04 16:58 /home/pi/torrent
    _    ___      _____ ____                       _____
    |    |         |    |                           |
   file  |         |    |                           +-name of file or directory
   type  |         |    |
         |         |    +-the group that the group permissions applies to
         |         |
         |         +-owner
         |
         +-permissions that apply to users who are members of the group
```

* Credit: the diagram is from this answer: [https://superuser.com/questions/171858/how-do-i-interpret-the-results-of-the-ls-l-command/171860](https://superuser.com/questions/171858/how-do-i-interpret-the-results-of-the-ls-l-command/171860).