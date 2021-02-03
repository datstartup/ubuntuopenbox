---
layout: single
title: INTERNET APPLICATIONS
description: We will install a web browser, an email client, a torrent client and a download manager.
toc: true
toc_sticky: true
toc_label: "Internet Applications"
toc_icon: "cog"
author_profile: false
comments: true
sidebar:
  title: "Ubuntu Openbox"
  nav: sidebar-module5
---
Internet apps:
+ Firefox as web browser
+ Thunderbird as email client
+ Transmission for torrent
+ Uget as download manager
+ Dropbox for cloud storage

### 1. Firefox as web browser

[https://www.mozilla.org/en-US/firefox/](https://www.mozilla.org/en-US/firefox/)

```bash
sudo apt-get install firefox
```

Firefox has the ability to extend features by adding add-on. Here are some cool ones I always use:

* **Adblock plus**: block advertising on the websites you are visiting [https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/](https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/)   


* **Flashgot**: integrate downloads in Firefox with favourite download manager (more on this later with Uget) [https://addons.mozilla.org/en-US/firefox/addon/flashgot/](https://addons.mozilla.org/en-US/firefox/addon/flashgot/)


* **Print Edit**: "Allows editing of web page content while in Print Preview mode, prior to printing or saving as HTML or PDF. Compacts the layout and removes unwanted content such as adverts, sidebars and blank pages. Any element can be formatted, hidden or deleted."   [https://addons.mozilla.org/en-US/firefox/addon/print-edit/](https://addons.mozilla.org/en-US/firefox/addon/print-edit/)

### 2. Thunderbird as email client

[https://www.mozilla.org/en-US/thunderbird/](https://www.mozilla.org/en-US/thunderbird/)

Email client help you to effectively manage your emails. If you are familiar with Microsoft Outlook, there is a very competent alternative, Thunderbird.
```bash
sudo apt-get install thunderbird
```
Just add your email address and you are all set.

### 3. Transmission for torrent

[http://www.transmissionbt.com/](http://www.transmissionbt.com/)

Transmission gives you the ability to download from both torrent files and magnet links. 
To install:
```
sudo apt-get install transmission
```

### 4. Uget as download manager

[http://ugetdm.com/](http://ugetdm.com/)

**Uget** is a java based app with a modern looking interface and does the job nicely.
```bash
apt-get install uget
```
![Uget]({{site.baseurl}}/images/uget.jpg)

### 5. Dropbox for cloud storage

[https://www.dropbox.com/](https://www.dropbox.com/)

In my own experience, of all cloud storage suppliers, **Dropbox** is the nicest regarding its fluent synchronization between multiple platforms. 

Out of the box, it gives you 2 Gb of free space. With my usage of mainly documents, it is plenty enough.
```bash
sudo apt-get install dropbox
```
After installing, **Dropbox** will ask you to enter your credential information.
