---
title: "Change default terminal in Ubuntu/Debian with Openbox"
header:
categories:
  - tips
tags:
  - terminator, alacrity
---

I want to experiment a bit with other terminal emulator as I have always used Terminator.

I choose Alacrity and find that there are some obstacles to change system default terminal.

Here are those troubles and how I have solved them.

## 1. It is not in system terminal list

Because I install it manually, I have to add it to the list myself.

```sh
sudo update-alternatives --install /usr/bin/x-terminal-emulator x-terminal-emulator /usr/bin/alacritty 50
``` 

Then switch default termianl to Alacrity.

```sh
sudo update-alternatives --config x-terminal-emulator
```

Often, just this command will work globally, but some reasons below, there is still more thing need to do.

I find Thunar need manual change xfce4 helper.rc file; Obmenu generator as I use other terminal as default, I need to hard code it to the schema, same reason for Openbox shortcut key.


## 2. Thunar

I use Thunar without the Xfce DE, so I have to change xfce4 config file manually, so that I have Alacrity to open in 'Open terminal here' context menu.

Open `~/.config/xfce4/helpers.rc` and change "TerminalEmulator=terminator" to "TerminalEmulator=alacrity".

## 3. Obmenu generator

Change the terminal entry in the schema (`~/.config/obmenu-generator/schema.pl`).

```sh
{item => ['alacritty',            'Terminal',     'utilities-terminal']},
```

## 4. Openbox rc.xml

Change this binding.

```html
    <keybind key="W-t">
      <action name="Execute">
        <startupnotify>
          <enabled>true</enabled>
          <name>Terminal</name>
        </startupnotify>
        <command>alacritty</command>
      </action>
```
