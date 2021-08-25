---
title: "How to choose a Linux distro"
header:
categories:
  - tips
tags:
  - firewall
---

# Enable the use of userChrome.css

Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` in `about:config`. Below is how to do it.

Go to `about:config` in the address bar.
Find `toolkit.legacyUserProfileCustomizations.stylesheets`.
Switch its parameter to `true`.

# Create userChrome.css file

1. Open `about:support` in the the address bar.

2. Click on "Profile Folder" -> "Open Folder"

3. Create a sub-folder named "chrome"

4. Change into the new folder

5. Create a file named "userChrome.css"

# Add css config

```css
/* this set the color of the active tab */
.tab-background[selected="true"] {
    background-color: #458588 !important;
    background-image: none !important;
}

/* this set the color of the text of the title of the active tab */ 
   
.tab-label[selected="true"] {
    color:#ffffff !important;
}

/* this sets the color of the line above the active tab */
.tab-line[selected="true"] {
    background-color : red !important;
}
 
```