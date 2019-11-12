---
title: "Convert and send ebook to kindle"
header:
categories:
  - Raspberry Pi
  - Debian
  - Ubuntu
  - Command-line
tags:
  - Raspbian
  - Raspberry Pi
  - Mutt
---

### I have been using kindle for several years and have been use the GUI version of Calibre to convert ebook then using Thunderbird email client to send the converted file to my kindle email account. 

After using mutt on Raspberry Pi, I write a script on my Debian Laptop to convert and send ebook to my kindle on the spot, using just one line of command.

* Debian 
* Mutt with Gmail
* Calibre

#### Install and configure Mutt

Please see this post: [Use Mutt As Email Manager](https://www.ubuntuopenbox.com/raspberry%20pi/debian/ubuntu/command-line/use-mutt-email-manager/ "Install and configure Mutt with Gmail")

#### Install Calibre
It is in Raspbian repositories, so the installation is simple.
```bash
sudo apt-get install calibre
```

The command to convert an ".epub" ebook to ".mobi":

```bash
ebook-convert myebook.epub myebook.mobi"
```
#### Bash sript that can convert and send epub to my kindle on the spot

```bash
nano /home/pi/convertAndSend
```
Change the content of the file as following:

```bash
#!/bin/bash
#this cript will convert and send epub to my kindle on the spot
#copy the script to /usr/bin to make it global
s=$1
raw_file=${s%.epub}
#current_file=${s%.*}
current_file=$(echo $raw_file | tr ' ' '_')

#remove spaces
#mv $raw_file".epub" `echo $current_file".epub" | tr ' ' '_'` 
mv "$raw_file".epub"" "$current_file".epub""

#convert all epub file and send it to kindle
ebook-convert $current_file".epub" $current_file".mobi" && mutt -s "all mobi" -a $current_file".mobi" -- your_kindle_account@kindle.com < /home/pi/text

#rm  .epub files - must; remove .mobi files - optional
rm $current_file".mobi"
```

**Note:** change "your_kindle_account@kindle.com" to your account accordingly.
{: .notice--info}

Copy the script to /usr/bin to make it global.
{: .notice--info}

```bash
sudo cp /home/pi/convertAndSend /usr/bin
```

#### To use it:

Suppose I have an ebook name myebook.epub on my /home/username/. To convert and send it to my kindle:

```bash
convertAndSend home/username/myebook.epub
```