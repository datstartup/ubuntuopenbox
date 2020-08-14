---
title: "Add Bash Aliases"
header:
categories:
  - tips
tags:
  - bash
---

In stead of having to type a frequenly used command, I can specify a "short word" (shortcut) to represent it. The "short word" is an alias.

For example, to update my Debian system there is two commands to be typed, `sudo apt update`, then `sudo apt upgrade`. I can turn it into an alias of `aptuu`.

```
alias aptuu='sudo apt update && sudo apt upgrade'
```

The next time I need to update the system, I only have to type the command 'aptuu'.

Please read further for more specific step.

## 1. How to add a alias

    1. Create a `~/.bash_aliases` file with `touch ~/.bash_aliases`.

You can actually add an alias directly to the bottom of the `.bashrc` but using a separate `.bash_aliases` file is recommended.

    2. Add a alias

Add a line with this syntax to `~/.bash_aliases` file:

```
alias command_shortcut_word='Bash command go here'
```

A very simple rule is that the shortcut word need to be "weird" and meaningful (to be easier to remmeber). It has to be "weird" so that there has not been any command with that word in the system (at the momemnt and in the future).

    3. Update Bash environment by the command `source ~/.bashrc`.

## 2. Several alias examples

Update Debian system

```
alias aptuu='sudo apt update && apt list --upgradable && sudo apt upgrade'
```

Update Pi-hole on my Raspberry Pi:

```
alias upihole='sudo apt-get update -y && sudo apt-get upgrade -y && pihole -up'
```

Sort file/ folder in a folder by size check sizes:

```
alias lss='du -sh * | sort -h'
```

Copy with rsync:

```
alias cpr='rsync -ah --info=progress2'
```
