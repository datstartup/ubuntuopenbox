---
title: "Parse Gmail for attachments"
header:
categories:
  - Raspberry-Pi
tags:
  - Raspbian
  - Raspberry-Pi
  - Gmail
  - fetchmail
  - procmail
  - parse email
---

## My only focus is to parse my Gmail for .epub files (for my ebook converter server) and sort them to a folder. You can use it for any other file format.

I needs:

* *fetchmail*: to retrieve emails and their attachments.
* *procmail*: for filtering, sorting and storing email.
* *uudeview*: for decoding attachments.

To install all of them:

```bash
sudo apt-get install fetchmail procmail uudeview
```

### uudeview
It is a command, I will use it like any other in Linux.

### procmail

Configure procmail to forward to uudeview and unpack attachments to $HOME/epub_attachments (I need the directory /home/username/epub_attachements available).

Edit its configuration file in my home directory.
```bash
nano /home/username/.procmailrc
```

Its content should be as below.
``` bash
:0
*^content-Type:
{
  $HOME/.procmailrc
   # backup the complete mail first..
   # you can leave out this part if you don't want a backup of the complete mail
  # :0c:
  # $HOME/mail_backup

   # Now the actual unpacking part
   # forward to uudeview and unpack attachments to $HOME/epub_attachments
   :0fw
   | uudeview -p $HOME/epub_attachments -
}
```

Learn more about *procmail*: [https://wiki.archlinux.org/index.php/Procmail](https://wiki.archlinux.org/index.php/Procmail).

### Configure fetchmail

Edit its configuration file in my home directory. I should have already had *procmail* configure properly because *fetchmail* will feed the emails to *procmail* for sorting.
```bash
nano /home/username/.fetchmailrc
```
Change its content to:
```bash
# $HOME/.fetchmailrc
# chmod 700 /home/username/.fetchmailrc
# fetchmail -d0 -vk pop.gmail.com
# set username to use fetch mail on your Linux (pi)
set postmaster "username"
# set polling time (6 minutes)
set daemon 660

poll pop.gmail.com with proto POP3
   user 'email_to_fetch' there with password 'password_of_the_email' is pi here options ssl
mda '/usr/bin/procmail -d %T'
```

NOTE: **postmaster "username"** is the current user, mine is "pi". **'email_to_fetch'** is the username of the Gmail as in username@gmail.com. **'password_of_the_email'** is the one of the Gmail {: .notice--info}

To test fetchmail, have emails with .epubs attachments sent to Gmail. The command below should run smoothly and .epubs files are properly downloaded, decoded and sorted to the $HOME/epub_attachments directory.
```bash
fetchmail -d0 -vk pop.gmail.com
```
