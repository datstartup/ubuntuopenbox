---
title: "Better font for LibreOffice and Linux"
header:
categories:
  - tips
tags:
  - fonts  
  - libre-office
---

Please understand that I am no expert on font rederring, and this post is just a note for my future self in case I have to reinstall the whole system.

Today I had to open one .docx file in calibri font with LibreOffice Writer and notice that some charaters of the text are blurry, espcially at smaller size. It looked weird too; some of the characters are not spacing correctly, some are too far from each other, some just stick together. So I checked if I have the font calibri and it is there in the folder **~/.fonts**.

I did two things and the result was unexpectedly-mind-blowing good, not only my document was displayed better in LibreOffice but also the font of the whole system was improved (Firefox, text in windows...):

(And I still did not know which has which effect!).

### 1. Add a font config file:

Create a fontconfig file in **~/.config** folder with the content below:

```bash
#~/.config/fontconfig
<match target="font" >
    <edit name="embeddedbitmap" mode="assign">
        <bool>false</bool>
    </edit>
</match>

```

### 2. Install Mac fonts:

I found an article here: ["Calibri and Cambria fonts for Mac"](https://www.rmtweb.co.uk/calibri-and-cambria-fonts-for-mac) 

I download the fonts to replace the ones I copied from Windows.

I appriciate the author and the article so much! 