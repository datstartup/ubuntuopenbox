
autostart.sh
```
#modprobe btusb
systemctl start hciuart 
pulseaudio --start 
service bluetooth restart &
```
The `modprobe btusb` have to run only once.

# pulse audio
list all sink
```
pacmd list-sinks|egrep -i 'index:|name:'
```
set default out put base on the name above

In "/etc/pulse/default.pa", add

```
set-default-sink alsa_output.usb-GeneralPlus_USB_Audio_Device-00 output:analog-stereo
```

# Trouble shooting
## 1. 

`bluetoothctl` with
```
No default controller available
```
Try "systemctl start hciuart" and the interface should appear.

## Bluetooth service not running
```
sudo modprobe btusb  # add the btusb module to the kernel
sudo systemctl start bluetooth.service
systemctl status bluetooth.service
```

# Guide
(https://circuitdigest.com/microcontroller-projects/diy-raspberry-pi-bluetooth-speaker)[https://circuitdigest.com/microcontroller-projects/diy-raspberry-pi-bluetooth-speaker]

# Headless pairing:

Create a file called `pair_bluetooth_device.expect`
```
set timeout 30
spawn bluetoothctl
expect "# "
send "agent off\r"
expect "?gistered"
send "\r"

expect "# "
send "agent NoInputNoOutput\r"
expect "Agent registered"
send "\r"

expect "# "
send "default-agent\r"
expect "Default agent request successful"
send "\r"

expect "# "
send "discoverable on\r"

expect "Authorize "
send "yes\r"
send "exit\r"
```

Create a file named `trust_and_connect.expect`
```shell
set timeout 30
spawn bluetoothctl
expect "# "
send "agent off\r"
expect "?egistered"
send "\r"

expect "# "
send "agent on\r"
expect "Agent registered"
send "\r"

expect "# "
send "default-agent\r"
expect "Default agent request successful"
send "\r"

expect "# "
send "trust [lindex $argv 0]\r"

expect "Changing" 
send "connect [lindex $argv 0]\r"

expect "Connection successful"
send "exit\r"
```
Copy the above code into that file. It does the trusting and connecting part automatically.

create a file `pair_and_trust_bluetooth_device.sh`
```shell
cd $(dirname $0)
echo "Pairing..."
expect pair_bluetooth_device.expect > expect_script.log
chmod 777 expect_script.log
sleep 2

echo "Trusting and connecting.."
device_mac_address=$(cat expect_script.log | grep -Pom 1 "(?<=Device ).*(?= Connected)")
echo mac address is $device_mac_address
if [[ ! -z $device_mac_address ]] ; then
            expect trust_and_connect.expect $device_mac_address
else
            echo "No device connected"
fi
rm expect_script.log
```
The bash script:
    Calls an expect script (whose output will be printed to a file named expect_script.log) which,
        Initiates the NoInputNoOutput agent
        Makes it the default-agent
        Turns on the discoverability of pi
        Waits for someone to connect and exits when someone does or timeouts
    Sleep for 2 seconds
    Grab the expect_script.log file for the device mac address
    Trusts and connects the device if the mac_address is null
    Removes the residue file expect_script.log
