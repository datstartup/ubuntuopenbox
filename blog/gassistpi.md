https://raspberrypi.stackexchange.com/questions/82772/how-do-i-set-up-wireless-connections-to-raspbian-stretch

Home Network Connection
Easiest way:

sudo raspi-config 

Select Network Options → Wi-fi then follow on screen instructions.
Manual way:

Edit wpa_suplicant.conf

sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

Add the following:

network={
    ssid="NETWORK_NAME"
    psk="password"
}

Create a credential

https://developers.google.com/assistant/sdk/guides/library/python/embed/config-dev-project-and-account


model id assistant-a45be-raspberrypi-xinpxc
assistant-a45be 

sudo apt-get install git  
git clone https://github.com/shivasiddharth/GassistPi    



With card 1 usb Fio E10k soundcard, and card 2 Blue yeti, /home/pi/.asoundrc:

pcm.!default {
    type asym
    playback.pcm "plughw:0"
    capture.pcm  "plughw:1"
}

ctl.!default {
    type hw
    card 1
}

device_model_id: gassistpi-213707-raspberrypi3-ovsq6f
device_id: B326A0E2B55544C8500DFD8B2AAA76C1

