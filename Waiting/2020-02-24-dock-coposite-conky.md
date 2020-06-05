---
title: "Autostart Commands or Apps"
header:
categories:
  - tips
tags:
  - eye-candy 
  - run-command-at-boot
---

sudo apt install adapta-gtk-theme --no-install-recommends
sudo apt install papirus-icon-theme

### 1. Plank

if there is a low resolution icon, edit/ create a desktop file here and choose a appropriate better icon for the app. It will reappear better in Plank.

~/. local/share/applications/

### 2. Conky
I had never been able to make my conky work with conposite.

I used to think that my laptop GPU card is not playing nice with composite.
Until I bring that conky to my PCs, both different name card and still I cannot make it work.

Investigate further it come to my bad conky configuration (or my config is not playing nice with composite).

Below is my current one.

### Composite

compton

compton.conf

backend = "xr_glx_hybrid";
vsync = "opengl-swc";
#glx-no-stencil = true;
#glx-no-rebind-pixmap = true;
vsync-use-glfinish = true;
focus-exclude = ["n:a:Conky"];
paint-on-overlay = true;


