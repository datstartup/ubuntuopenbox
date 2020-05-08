---
title: "Backup using rsync"
header:
categories:
  - tips
tags:
  - Debian  
  - rsync
---

`rsync` provides fast incremental file transfer (obvious reason not to use only `cp` for backup)

### 1. With out encoding
ffmpeg -ss [start] -i in.mp4 -t [duration] -c copy out.mp4

Here, the options mean the following:

    -ss specifies the start time, e.g. 00:01:23.000 or 83 (in seconds)
    -t specifies the duration of the clip (same format).
    Instead of -t you can also supply the end time with -to.
    -c copy copies the first video, audio, and subtitle bitstream from the input to the output file without re-encoding them. This won't harm th

