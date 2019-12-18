---
layout: single
title: OFFICE APPLICATIONS
description: We will install a word processor, a spreedsheet, a pdf reader and an e-book reader.
toc: true
toc_label: "Office Apps"
toc_icon: "cog"
author_profile: false
comments: true
---

Office applications:

+ LibreOffice/ Google suite as office suite
+ Qpdfview as Pdf reader
+ Fbreader as ebook reader

### 1. LibreOffice as office suite:

For normal use of office work, LibreOffice is competent enough:

[https://www.libreoffice.org/](https://www.libreoffice.org/)

You can either install entire of this office suite or pick out only what you need. I only use two of the modules:
  * Calc: spreadsheet application.
  * Writer: word processing application.

```bash
apt-get install libreoffice-calc libreoffice-writer libreoffice-gtk
```

The **libreoffice-gtk** package is for **Libreoffice** can integrate nicely with the system gtk theme (other wise it will look urgly).

You can choose one from several icon sets. In the screenshot below I am using the **“sifr”** icon sets:
```bash
apt-get install libreoffice-style-sifr
```

Then apply it by changing the **“Icon size and styles”** (User Interface) to **“sifr”**, go to **Tool** > **Options** > **View**.

To enable the ability to remember the last working place in your document, you need to fill out your **“User Data”**. Go to **Tool** > **Options** > **User Data**.

If there is no user identified, every time you open a document, LibreOffice will assume it is a new user and direct you to the beginning.

As a die hard user of spreadsheets, I only use Calc for "lite" spreadsheet work only. I am intensively depending on VBA/ GAS scripts (Visual Basic for Applications come with MS office & Google Apps Script come Google Apps). Only Microsoft Excel or Google Sheet can meet my requirement.

**LibreOffice Calc**

![libreoffice-calc]({{site.baseurl}}/images/LibreOffice-Calc.jpg)

**LibreOffice Writer**

![libreoffice-writer]({{site.baseurl}}/images/LibreOffice-Writer.jpg)

**UPDATE 26 Nov 2019:** I have been using Google Docs, Spreadsheet, Mail, Calendar, Drive, Form... as my productivity tools for over two full years. In fact, the contact form of this website is a Google form. I cannot express how awesome they are enough. Please give them a try!
{: notice--info}

**UPDATE 26 Nov 2019:** Today I used Calc the fist time since updating to Debian 10 Buster and I noticed that the display is not compatiple with the gtk3 theme (small font...). I need to installed **libreoffice-gtk3** package to fix the problem.
{: notice--info}

```bash
sudo apt-get install libreoffice-gtk3
```

### 2. Qpdfview as Pdf reader

I have found **qpdfview**, quickly open any PDF file and render images nicely:
```bash
sudo apt-get install qpdfview
```
In the old version of this website, I recommended Foxit reader (very good indeed!), but is was not a native of Linux, and needed a PPA so I switched to **qpdfview**.

### 3. Fbreader as ebook reader

[https://fbreader.org/](https://fbreader.org/)
```bash
apt-get install Fbreader
```
"Supports popular ebook formats: ePub, fb2, mobi, rtf, html, plain text, and a lot of other formats" (From its website!). 

![fbreader]({{site.baseurl}}/images/fbreader.png)

**Above is the awesome Quo Vadis novel by Henryk Sienkiewicz, translated by Jeremiah Curtin.**
{: notice--info}