---
title: "Remove Firefox title bar"
header:
categories:
  - tips
tags:
  - Openbox  
  - firefox
---

Remove the title bar to get more screen space (like in Chrome).

### 1. Remove the title bar

In `rc.xml`file, add these three lines in application category:

```bash
    <application class="Firefox">
      <decor>no</decor>
    </application>
```

### 2. Deal with the lack of Minimize/ Maximize and Close

After remove the title bar drawn by Openbox, the `Minimize/ Maximize and Close` button will also be lost. Following is my two solutions:

#### 2.1 Three add-on: Minimize/ Maximize and Close

Install these three add-on to have these functional buttons:

* [Minimize](https://addons.mozilla.org/en-US/firefox/addon/minimize-the-window/ "Minimize")
* [Resize/ Maximize](https://addons.mozilla.org/firefox/addon/maximize-the-window/ "Resize/ Maximize")
* [Close](https://addons.mozilla.org/firefox/addon/close-the-window/ "Close")

The look is awesome.

The feel when use the main windows is not differrent than Chrome. However, other windows such as "Download", "History", "Bookmark"... still do not have minimize/ maximize or close button at the conner of the window, you have to use Ctrl + F4 to close them off.

#### 2.2 Toggle decoration
Sometimes not having a title bar is very inconvenient so I have added a shortcut key of `Window + B`to make it appear whenever I want.

I have added these line to my `rc.xml` file:

```bash
    <keybind key="W-b">
        <action name="ToggleDecorations"/>
    </keybind>
```

