
To fetch .epub files attached and put it to a proper folder
fetchmail
procmail
uudeview

To convert .epub files to .mobi files
calibre


To email the converted file to your kindle
mutt

To install all of them:
```
sudo apt-get install fetchmail procmail uudeview calibre mutt
```
Configure mutt to manage your Gmail:
```
# $HOME/.muttrc
set realname = "Last_name First_name"
set from = "your_gmail_account@gmail.com"
set use_from = yes
set envelope_from = yes

set smtp_url = "smtps://your_gmail_account@gmail.com@smtp.gmail.com:465/"
set smtp_pass = "your_gmail_password"
set imap_user = "your_gmail_account@gmail.com"
set imap_pass = "your_gmail_password"
set folder = "imaps://imap.gmail.com:993"
set spoolfile = "+INBOX"
set ssl_force_tls = yes
# G to get mail
bind index G imap-fetch-mail
set editor = "nano"
set charset = "utf-8"
set record = ''
```
To test your new setting:
mutt -s "Test from mutt" dat.startup@gmail.com < ~/text
Configure fetchmail
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

To test fetchmail:
fetchmail -d0 -vk pop.gmail.com

Configure procmail to forward to uudeview and unpack attachments to $HOME/epub_attachments
```
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
Script to putting all thing together:
```
#!/bin/bash
#$HOME/epubConvertSend.sh
#fetchmail &&
fetchmail -d0 -vk pop.gmail.com &&

#the directory that you fetch the .epub attachement to
current_directory='/home/pi/epub_attachments/'

#remove spaces in file name
for i in $current_directory*.epub; do mv "$i" `echo $i | tr ' ' '_'`; done

#remove uppercase
#for i in *.[Ee][Pp][Uu][Bb]; do mv "$i" `echo $i | tr '[A-Z]' '[a-z]'`; done

#convert all .epub files to mobi then send them to your kindle one by one
for i in  $current_directory*.epub ; do ebook-convert $i $i".mobi" && mutt -s "all mobi" -a $i".mobi" -- your_kindle_email@kindle.com < ~/text; done

#rm: remove .epub files - MUST; remove .mobi files - OPTIONAL
for i in  $current_directory*.mobi ; do rm $i; done
for i in  $current_directory*.epub ; do rm $i; done
```

Crontab line to run the script every 5
minutes
```
crontab -e
```

```
*/5 * * * * /home/pi/epubConvertSend.sh
```

```
transmission-remote -n 'transmission_user:password' -a ./xxx.torre
````
```
transmission-remote -n 'transmission_user:password' --add 'magnet:xxx'
```
* with magnet:xxx is a torrent magnet link
* with transmission user and password is the one that you have entered into the Transmission

```
cat * | grep -o "magnet:?xt[^']*" or grep -oh "magnet:?xt[^']*" *
```
