Disable onboard WiFi and Bluetooth on Raspberry Pi 3 device.

Disable onboard WiFi on boot.

$ echo "dtoverlay=pi3-disable-wifi" | sudo tee -a /boot/config.txt

Disable Bluetooth boot.

$ echo "dtoverlay=pi3-disable-bt" | sudo tee -a /boot/config.txt

Disable systemd service that initializes Bluetooth Modems connected by UART.

$ sudo systemctl disable hciuart

Reboot Raspberry Pi device.

$ sudo reboot

You can directly edit config.txt file located on the boot partition before inserting SD card into the Raspberry Pi 3 device, but remember to create ssh file on the same partition. It will execute sshswitch service to start OpenBSD Secure Shell server then remove created file, so you can connect and enable ssh service persistently.