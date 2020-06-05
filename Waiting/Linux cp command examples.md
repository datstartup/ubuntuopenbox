Linux cp command examples
In this example copy /home/vivek/letters/ folder and all its files to /usb/backup/ directory:
```
cp -avr /home/vivek/letters /usb/backup
```
Where,

`-a` : Preserve the specified attributes such as directory an file mode, ownership, timestamps, if possible additional attributes: context, links, xattr, all.
`-v` : Verbose output.
`-r` : Copy directories recursively.