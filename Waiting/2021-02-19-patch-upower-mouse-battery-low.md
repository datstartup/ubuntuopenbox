---
title: 'Patch upower to remove battery low message'
header:
categories:
  - tips
tags:
  - debian
  - patch-upower  
  - mouse-battery-low
---

In the past I was annoyed by the system notification about "mouse battery low" to the point that I just changed a still-good battery to get over it.

This time I decided to tackle it once and for all.

I found this post [https://wrgms.com/disable-mouse-battery-low-spam-notification/](https://wrgms.com/disable-mouse-battery-low-spam-notification/). **All the credit go to the author**

Please go there for more detail, this is just my self note.
## 1. Download and patch upowerd
```
# Download and patch upowerd
#
git clone https://gitlab.freedesktop.org/upower/upower  
cd upower/src  
wget https://gist.githubusercontent.com/guiambros/f2bf07f1cc085f8f0b0a9e04c0a767b4/raw/ef90dfcfa2489bab577bd984a6082abacdf8b0b1/up-device.patch  
patch < up-device.patch  
cd ..  
./autogen.sh
./configure
make
```
Ater the `make` command, you will have these two new file
```
# cd src/.libs
upowerd
```
and 
```
# cd tools/.libs  
upower  
```
Next we will back up the originals and replace them with these instead.
You need to know the path to upower
`upowerd` path
```
/usr/lib/upower
```

`upower` path
```
/usr/bin
```
## 3. Replace the originals with new patched file

### 3.1 Replace upowerd
```
# Install upowerd
# From the original folder
PATH_UPOWERD=”/usr/lib/upower”
cd src/.libs  
strip upowerd  
sudo chown root.root upowerd  
sudo cp upowerd ${PATH_UPOWERD}/upowerd-silent  
cd ${PATH_UPOWERD}  
sudo mv upowerd upowerd-original  
sudo ln -s upowerd-silent upowerd 
```

# Install upower
# From the original folder
PATH_UPOWERD=”/usr/lib/upower”  
cd tools/.libs  
strip upower  
sudo chown root.root upower  
sudo mv upower ${PATH_UPOWER}/upower-silent  
cd ${PATH_UPOWER}  
sudo cp upower upower-original  
sudo ln -s upower-silent upower  

```
# Restart upowerd
#
sudo systemctl restart upower
```
