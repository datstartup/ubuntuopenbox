---
title: "Add a custom folder to PATH"
header:
categories:
  - Guide
tags:
  - Linux  
  - PATH
---
```
sudo apt install stow
```

Lay out of stow

A folder tree of stow have the exact same structure with the one in your .config folder

For example, for polybar

```
mkdir -p ./polybar/.config/polybar
cd ./polybar/.config/polybar
touch config 
touch launch.sh
```
Note that `config` and `lauch.sh` are empty files.

# stow

Stow is the command to create sym link that reflect the 
```
stow -nvt ~ *

#OR

stow -nvt ~
```
flac
* n: "no" - show what would happen/ stimulation.
* v: verbal
* S: DEFAULT, stow
* D: "delete", unstow
* t: "target directory", you should always use this flag for safe. If the flag is ommitted, the target is the parent of the current directory. 
* *: stow everything

```
stow --adopt -vt ~ htop
```
* --adopt: swap the empty files with the current config ones, then create sym-links to those config files. This is used for the first time/ IN THE BEGINNING when you create the stow folder.

```
#Unlink the folder
stow -vDt ~ bash

```

# Restore the stow/ replica the system with the dotfiles
