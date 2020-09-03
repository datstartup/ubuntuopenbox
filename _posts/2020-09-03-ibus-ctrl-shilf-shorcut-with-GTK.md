---
title: "Make the Ctrl+Shift shortcut for iBus to switch input"
header:
categories:
  - tips
tags:
  - ibus
---

I always familiar with using `Ctrl + Shift` to switch between input mode (switch typing language).

The setting in `ibus-setup` cannot let me chose this setting (or this very likely is my fault).

After reading this thread: [https://forum.kde.org/viewtopic.php?f=17&t=162008](https://forum.kde.org/viewtopic.php?f=17&t=162008 "How can I make the Ctrl+Shift shortcut for iBus to use?").

All I have to do is run this command as my normal user and everything is fine now:

```bash
gsettings set org.freedesktop.ibus.general.hotkey triggers "['<Control>Shift_L']"
```

I personally thank **FireHeadMan** for his/her answer above.