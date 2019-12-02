---
title: "Make life easier with Thunar custom commands"
header:
categories:
  - Apps
tags:
  - Thunar
  - Custom-Action
---

Thunar custom action is the feature that allow you to add more item of actions into the right click menu of Thunar file manager.



In my day to day, I often need to convert video file into mp3 audio file and .epub book to .mobi book.

I have showed how to integrate Catfish (file searching app) to custom action of Thunar []().

I have copied it here: 

**USE CATFISH TO SEARCH FILE AND INTEGRATE IT TO THUNAR RIGHT-CLICK MENU**

**catfish** is a searching files application, easy to use and does the job gracefully, which can integrate into **Thunar** using its ***"custom action"*** feature.

_**To install:**_
```bash
sudo apt-get install catfish
```

_**To integrate it into Thunar**_

In **Thunar** > **Edit** > **Configure custom action** > **Edit action** to edit both of the tabs as showing bellow:

```bash
catfish --path=%f
```
### My own schema.pl file:

[![My Openbox menu]({{site.baseurl}}/images/obmenu-generator.png)]({{site.baseurl}}/images/obmenu-generator.png){:target="_blank"}

{: .notice--info}