---
title: "How to convert FLAC files from 24/48 bit to 16 bit on Ubuntu Linux"
header:
categories:
  - tips
tags:
  - eye-candy 
  - run-command-at-boot
---

If you don’t already have sox installed, do this to install it:
```
$ sudo apt-get install sox
```
Then run this to do the conversion, in the folder with music in:
```
$ mkdir resampled
$ for flac in *.flac; do sox -S "${flac}" -r 44100 -b 16 ./resampled/"${flac}"; done
```
And that’s it - it will convert all the .flac files in that folder to 16 bit at 44100 kHz and put the result into the ./resampled subfolder, preserving the metadata.

