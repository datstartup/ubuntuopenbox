---
title: "Remove Firefox title bar"
header:
categories:
  - tips
tags:
  - Openbox  
  - Firefox-titlebar
---

Remove the title bar to get more screen space (like in Chrome).

[![firefox-chrome-titlebar]({{site.baseurl}}/images/firefox-chrome-titlebar.png)]({{site.baseurl}}/images/firefox-chrome-titlebar.png){:target="_blank"}

# 1. Remove the title bar

At the very end of `rc.xml`file, above the line `</openbox_config>`, add these three lines in `application` category:

```bash
    <application class="Firefox">
      <decor>no</decor>
    </application>
```

# 2. Deal with the lack of Minimize/ Maximize and Close

After remove the title bar drawn by Openbox, the `Minimize/ Maximize and Close` button will also be lost. Following is my two solutions:

## 2.1 Three add-on: Minimize/ Maximize and Close

Install these three add-on to have these functional buttons:

* [Minimize](https://addons.mozilla.org/en-US/firefox/addon/minimize-the-window/ "Minimize")
* [Resize/ Maximize](https://addons.mozilla.org/firefox/addon/maximize-the-window/ "Resize/ Maximize")
* [Close](https://addons.mozilla.org/firefox/addon/close-the-window/ "Close")

The look is awesome.

The feel when use the main windows is not differrent than Chrome. However, other windows such as "Download", "History", "Bookmark"... still do not have minimize/ maximize or close button at the conner of the window, I have to use Ctrl + F4 to close them off.

Also, I lost the ability to double click to the title bar (of course) to minimize or restore window. I have to mention this because in Chrome I still can do the action.

## 2.2 Toggle decoration
Sometimes not having a title bar is very inconvenient so I have added a shortcut key of `Window + B`to make it appear whenever I want - by adding these line to my `rc.xml` file:

```bash
    <keybind key="W-b">
        <action name="ToggleDecorations"/>
    </keybind>
```

# Update
https://unix.stackexchange.com/questions/107264/launch-iceweasel-firefox-window-undecorated

You can use xprop to find a suitable way to refer to windows. Open a terminal and the window of interest so that both are visible. In the terminal, run

xprop | grep "^_OB_APP"

Your mouse cursor changes appearance into crosshairs. Move the cursor over to the window of interest and click within that window. The cursor reverts to its regular appearance and output appears in the terminal window. For example, suppose you clicked on a Firefox browser window, you'd see:

_OB_APP_TYPE(UTF8_STRING) = "normal"
_OB_APP_TITLE(UTF8_STRING) = "Mozilla Firefox"
_OB_APP_GROUP_CLASS(UTF8_STRING) = "Firefox"
_OB_APP_GROUP_NAME(UTF8_STRING) = "firefox"
_OB_APP_CLASS(UTF8_STRING) = "Firefox"
_OB_APP_NAME(UTF8_STRING) = "Navigator"
_OB_APP_ROLE(UTF8_STRING) = "browser"

You then use the appropriate string in your application rule. (Note that you can use xprop to also identify dialog windows to ensure that rules do or don't apply to them.)

I use:

<application role="browser">
  <maximized>true</maximized>
  <decor>no</decor>
</application>

to have all browsers open maximized and without decoration.

The other precaution to take is that the code is located appropriately. In other words, these lines should be in the "applications" section of rc.xml and should be within <applications> and </applications> and above the final line which should contain just </openbox_config>.

The other important thing is to run openbox --reconfigure to get the changes to be effected immediately. Running openbox --reconfigure also does a scan for xml errors and so is worth running after any edits to rc.xml.

