---
title: "Wallpaper Slideshow With Nitrogen"
header:
categories:
  - tips
tags:
  - Nitrogen
  - Wallpaper Slideshow
---

To automatically change wallpapers after a period of time.

### 1. Nitrogen Command:
```bash
/usr/bin/nitrogen --set-zoom-fill --random /wallpaper/folder --save
```
where:

* `--save`: create a saved `/home/user/.config/nitrogen/bg-saved.cfg` file for nitrogen to `--restore` when the system is rebooted.

* `--set-zoom-fill`: the style to which the wallpaper is set.

* `--random`: pick randomly from a specific folder. Please note that it picks recursively (even wallpapers in sub-folder). I have tried to add the `--no-recurse`but it has no effect when using the `--random` flag.

Please go to the man page for more detail: `man nitrogen`

## 2. Add a cron task

Use `crontab -e` to edit the user account crontab file.

Add this line to the bottom of the file:
```bash
*/20 * * * * (export DISPLAY=:0.0 && /bin/date && /usr/bin/nitrogen --set-zoom-fill --random /wallpapers/folder/ --save) > /tmp/myNitrogen.log 2>&1
```

* Note: Please change `/wallpapers/folder/` to your wallpaper directory.
{: .notice--info}

This cron task will change wallpaper to one picked randomly in a folder every 20 minutes.

The `export DISPLAY=:0.0` is to specify the command to run in which display.

The log of this cron task will be found at `/tmp/myNitrogen.log` in case something goes wrong.

## 3. Reload cron service after edit
```bash
sudo service cron restart
```
Check for its status:
```bash
sudo service cron restart
```
