---
title: "Add a custom folder to PATH"
header:
categories:
  - Guide
tags:
  - Linux  
  - PATH
---


The most common directories that hold executable programs are /bin, /sbin, /usr/sbin, /usr/local/bin and /usr/local/sbin. These directories are specified in the $PATH variable.

```
echo $PATH
```

# Add a directory to $PATH

```
export PATH=/home/dat/Custom/script:$PATH
```
However, this change is only temporary and valid only in the current shell session, close the terminal, it will be gone.


# Make it permanently

To make it loaded at boot, you need to add it to the shell configuration files, either:

* Global: `/etc/profile`, or
* Local: `~/.bashrc`

The principle is, any command added in these files will be run at boot. We add the command to at a directory to $PATH so that it will be run every time we boot our system.

In my case, I want to add a local $PATH directory, so 

```
nano ~/.bashrc
```
Add the directory `/home/dat/Custom/scripts` to the $PATH variable by add this line at the end of the file.

```
export PATH=/home/dat/Custom/scripts:$PATH
```
To make the change effective immediately.
```
source ~/.bashrc
```

* Note
Optionally, you can check if the directory existed before adding at boot:
```
if [ -d "/home/dat/Custom/scripts" ] ; then
  PATH=/home/dat/Custom/scripts:$PATH
fi
```
It just a little different than `export` command.