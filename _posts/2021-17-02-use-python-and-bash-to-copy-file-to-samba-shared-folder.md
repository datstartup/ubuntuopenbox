---
title: "Use python and bash to copy file to samba shared folder"
header:
categories:
  - tips
tags:
  - python
  - copy-file-to-samba
---
## How to mount a samba share folder using command line
`mount` in Linux is the act of associating a file system (a disk, partition, folder...) to a location in the directory tree (a folder) for that file system can be accessible. 

Create a folder for mount point
``` shell
mkdir /home/<user>/mnt
```
Install `cifs-utils` package to be able to mount a `smb` share.
```shell
sudo apt install cifs-utils
```
The mount command with `-t` and `-o` will require `sudo` power. 
```shell
sudo mount -t cifs -o username=<username>,password=<username>,vers=1.0 //<ip_adress>/samba_shared_folder/ /home/<user>/mnt
```
If all the above is a success, it means you can mount a samba shared folder manually using the command line.

## Add a `fstab` entry

To make the mount command not require `sudo` power, we have to add this entry to `fstab`.
```shell
//192.168.1.242/removable_sdcard/ /home/dat/mnt  cifs username=<username>,password=<username>,noauto,user,vers=1.0 0 0
```
Reboot the system and test it with
```
mount /home/<user>/mnt
```
The shared folder should be mounted.

## Use python script
I tend to use a python script mixed with bash commands these days instead of pure bash script as I find it is easier.

The python script needs `os` and `shutil` modules. You should install it if you have not had.
Here is mine script:
```python
#!/usr/bin/python3

import os
from shutil import copy

if not os.path.ismount("/home/dat/mnt"):
    print("not yet, mounting...")
    os.system("mount /home/dat/mnt")

else:
    print("mounted")

print("copying...")
copy('/home/dat/Downloads/readThis.md', "/home/dat/mnt/")
print("done!")
```

