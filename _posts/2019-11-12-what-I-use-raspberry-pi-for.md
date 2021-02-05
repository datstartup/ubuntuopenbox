---
title: "What I use Raspberry Pi for and my own opinions about it"
header:
categories:
  - Raspberry-Pi
  - Debian
  - Ubuntu
tags:
  - Raspbian
  - Raspberry-Pi
---

### I have been using Raspberry Pi from the model B, 1st to the 3rd version of the board and have some interesting things to share in case someone is wondering whether or not they should buy one.

What I had and have been using it for:

* Media center: Kodi (previously known as XBMC) - Only this project is a "had been".
* Music player: Volumio + Using a fiio E10k USB sound card as output + a Raspberry Pi official display.
* Torrent server: Transmission server.
* Ads filter DNS server: Pi-hole.
* File sharing server: Samba.
* API requesting server: Asking product price from API of E-commerce site (using Python).
* Product price tracking server: combining the API requesting server above with Google Apps Script (Google Sheet) and Bash script.
* Ebook converting and sent to my kindle server: Using Raspberry Pi at the mediator/ ebook converter by combining Calibre, Gmail (~~Mutt with fetchmail w. procmail w. Uudeview~~ Now with a simple Python script), Google Apps Script (Google Drive) and Bash script.
* Using its GPIO and a 433.92 Mhz radio module to control some 433.92 Mhz radio electric switches (Python).

### My own opinions about Raspberry Pi.

* Desktop experience: Never use it as a normal PC, so I do not have anything to say.

* Audio experience: The 3.5 jack came with it is terrible (cracking noise, while noise). I have to use it with a USB audio card, any cheap one will do (because Raspbian uses relatively new kernel, almost all USB sound card can be recognized).

* GUI experience: I have used it (using a 25 inch HDMI monitor/ Raspberry 7 inch LCD) as Kodi media center and Volumio music player.
 
  * Kodi: it can connect to my file server (on another Raspberry Pi), play full HD videos with ease and occasionally play some music. However, if I load a movie database like I use Kodi on my PC, the Raspberry Pi becomes painfully slow. So it is okay, but you cannot have the full experience, just is a fine device to play movies and music.
 
  * Volumio: the official display is good, use it to control music for my coffee shop, have been running it for several months without any issues.

* Server experience: This is the most I use it with, as always on a headless server (without a monitor connected to it and using SSH to communicate). It can be used as a standalone server (Pi-hole, Transmission...) or as a mediator server (have it check a Gmail every 5 minutes, if there is new email, do something with it and send the result again to another Gmail which is handled by a Google Apps Script to do the next something for me).

* GPIO programming: I am a novice in this area, but my experience is really good. I learn from this kit off Amazon: [Freenove](https://www.amazon.com/Freenove-Electronics-Programming-Solderless-Breadboard/dp/B06W54L7B5/ref=cm_cr_arp_d_product_top?ie=UTF8). Please note that it is not an affiliate link, just recommend something good for you to begin with. After learning it, I felt comfortable tackling several projects involved GPIO and Python programming.

* The SD cards are sometimes corrupted, just keep proper backups and reload the OS and they are back shortly. Here is how I back up the OSs for my Raspberry Pis: [Back up Raspberry Pi OS](https://www.ubuntuopenbox.com/raspberry%20pi/back-up-Raspberry-PI-to-image/ "How to Back up Raspberry Pi OS").

**Hope my inputs help you!**
