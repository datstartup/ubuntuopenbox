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

Add a directory to $PATH

```
export PATH=/home/dat/Custom/script:$PATH
```
However, this change is only temporary and valid only in the current shell session, close the terminal, it will be gone.

To make it loaded at boot, you need to add it to the shell configuration files, which is:

Global: `/etc/profile`
Local: `~/.bashrc`

At the line to the bottom of either of these files.

In my case, I want to add a local $PATH directory, so 

```
nano ~/.bashrc
```
Add the line, then:
```
source ~/.bashrc
```
To check if the directory existed before adding at boot:
```
if [ -d "$HOME/bin" ] ; then
  PATH=$PATH:$HOME/bin
fi
```
