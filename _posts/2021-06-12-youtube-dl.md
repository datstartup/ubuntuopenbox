---
title: "How to use youtube-dl"
header:
categories:
  - tips
tags:
  - Debian  
  - youtube-dl
---

## 1. Install 

### youtube-dl 

```bash	
sudo curl https://yt-dl.org/latest/youtube-dl -o /usr/local/bin/youtube-dl
```
OR
```bash
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
```
After downloading the script, set the executable permission.
``` bash
sudo chmod a+rx /usr/local/bin/youtube-dl
```
Update YouTube-DL Youtube-dl itself can be updated to the latest version using the following command.
```
youtube-dl -U
```

*Note:* I have to install youtube-dl from source instead off from the repository (and update it as I wish) because it is **essential** to have the lastest version of the script. Youtube changes and the developer adapts.
{: .notice--info}

### ffmpeg
```bash
sudo apt install ffmpeg
```

### Download audio

To extract audio from a youtube video

```bash
youtube-dl -x https://www.youtube.com/watch?v=bllKLAiLo6g
```

### Download video (and/or audio too):
list all formats available
```bash
youtube-dl -F https://www.youtube.com/watch?v=bllKLAiLo6g
```
the result will be:

```bash
[youtube] bllKLAiLo6g: Downloading webpage
[info] Available formats for bllKLAiLo6g:
format code  extension  resolution note
249          webm       audio only tiny   61k , opus @ 50k (48000Hz), 2.08MiB
250          webm       audio only tiny   78k , opus @ 70k (48000Hz), 2.72MiB
140          m4a        audio only tiny  130k , m4a_dash container, mp4a.40.2@128k (44100Hz), 5.13MiB
251          webm       audio only tiny  148k , opus @160k (48000Hz), 5.20MiB
160          mp4        256x144    144p   32k , avc1.4d400c, 30fps, video only, 1.04MiB
133          mp4        426x240    240p   54k , avc1.4d4015, 30fps, video only, 1.72MiB
394          mp4        256x144    144p   69k , av01.0.00M.08, 30fps, video only, 2.33MiB
395          mp4        426x240    240p   81k , av01.0.00M.08, 30fps, video only, 2.63MiB
242          webm       426x240    240p   86k , vp9, 30fps, video only, 2.77MiB
278          webm       256x144    144p   89k , webm container, vp9, 30fps, video only, 3.11MiB
134          mp4        640x360    360p  126k , avc1.4d401e, 30fps, video only, 3.95MiB
396          mp4        640x360    360p  141k , av01.0.01M.08, 30fps, video only, 4.52MiB
243          webm       640x360    360p  161k , vp9, 30fps, video only, 5.14MiB
397          mp4        854x480    480p  236k , av01.0.04M.08, 30fps, video only, 7.55MiB
135          mp4        854x480    480p  243k , avc1.4d401f, 30fps, video only, 7.54MiB
244          webm       854x480    480p  260k , vp9, 30fps, video only, 8.35MiB
136          mp4        1280x720   720p  463k , avc1.4d401f, 30fps, video only, 14.40MiB
398          mp4        1280x720   720p  526k , av01.0.05M.08, 30fps, video only, 16.72MiB
247          webm       1280x720   720p  543k , vp9, 30fps, video only, 16.91MiB
137          mp4        1920x1080  1080p  866k , avc1.640028, 30fps, video only, 27.42MiB
248          webm       1920x1080  1080p  992k , vp9, 30fps, video only, 30.94MiB
18           mp4        640x360    360p  356k , avc1.42001E, mp4a.40.2@ 96k (44100Hz), 14.15MiB (best)
```

Notice that most of the format above either a video or audio only, I can create the **.mp4** video you want by combining the audio and video only format like this:

```bash
youtube-dl -f '137+140' --merge-output-format mp4 'https://www.youtube.com/watch?v=9OYYgJUAw-w'
```
###3. More
https://github.com/ytdl-org/youtube-dl/blob/master/README.md