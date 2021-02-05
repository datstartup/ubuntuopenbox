---
title: "Add Bash Aliases"
header:
categories:
  - tips
tags:
  - bash
---

Instead of having to type a frequently used command, I can specify a "short word" (shortcut) to represent it. The "short word" is an alias.

For example, to update my Debian system there are two commands to be typed, `sudo apt update`, then `sudo apt upgrade`. I can turn it into an alias of `aptuu`.

```bash
alias aptuu='sudo apt update && sudo apt upgrade'
```

The next time I need to update the system, I only have to type the command 'aptuu'.

Please read further for more specific steps.

## 1. How to add a alias

* Step 1: Create a `~/.bash_aliases` file with `touch ~/.bash_aliases`.

You can actually add an alias directly to the bottom of the `.bashrc` but using a separate `.bash_aliases` file is recommended.

* Step 2: Add a alias

Add a line with this syntax to `~/.bash_aliases` file:

```bash
alias command_shortcut_word='Bash command go here'
```

A very simple rule is that the shortcut word needs to be "weird" and “meaningful”. It has to be "weird" so that there has not been any command with that word in the system (at the moment and in the future) and it has to be meaningful for easier to remember.

* Step 3: Update Bash environment by the command `source ~/.bashrc`.

## 2. Several alias examples

Update Debian system

```bash
alias aptuu='sudo apt update && apt list --upgradable && sudo apt upgrade'
```

Update Pi-hole on my Raspberry Pi:

```bash
alias upihole='sudo apt-get update -y && sudo apt-get upgrade -y && pihole -up'
```

Sort file/ folder in a folder by size check sizes:

```bash
alias lss='du -sh * | sort -h'
```

Copy with rsync:

```bash
alias cpr='rsync -ah --info=progress2'
```
