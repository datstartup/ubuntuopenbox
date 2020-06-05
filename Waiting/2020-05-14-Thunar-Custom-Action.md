---
title: "Thunnar Custom Action"
header:
categories:
  - tips
tags:
  - Thunar
---

### 1. move file to a specific folder

A folder is monitored by watchdog python script. Any file send to the folder will be further processed by another python script. 

```bash
mv %N /home/dat/Custom/ebookConverAndSend/Epubs/
```
## 2. Convert file to mp3


I love listening to TV show while I am cycling.
Individually
```bash
ffmpeg -i %f %f.mp3
```

Batch
```bash
parallel ffmpeg -i '{}' '{}.mp3' ::: %F
```
Note: need `parallel` package installed.

## 3. Select a file and open terminal at current directory

Sometimes a folder will have so much file that there is no black space to click and open terminal here.

This command allow me to select a file and open terminal at current directory.

```bash
cd %d && terminator
```

## 4. Open terminal at current directoy

Select a blank space and open terminal here.

```bash
exo-open --working-directory %f --launch TerminalEmulator
```

## 5. Open catfish in current directory

```bash
catfish --path=%d
```