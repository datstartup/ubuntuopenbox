#!/bin/bash

#fetchmail &&
fetchmail -d0 -vk pop.gmail.com &&

current_directory='/home/pi/epub_attachments/'

#remove spaces
for i in $current_directory*.epub; do mv "$i" `echo $i | tr ' ' '_'`; done
for i in $current_directory*.txt; do mv "$i" `echo $i | tr ' ' '_'`; done
for i in $current_directory*.torrent; do mv "$i" `echo $i | tr ' ' '_'`; done
#remove uppercase
#for i in *.[Ww][Mm][Aa]; do mv "$i" `echo $i | tr '[A-Z]' '[a-z]'`; done

#Rip with Mplayer / encode with LAME
for i in  $current_directory*.epub ; do ebook-convert $i $i".mobi" && mutt -s "all mobi" -a $i".mobi" -- huynhdat.space@kindle.com < ~/text; done

#convert file names
#for i in *.wma; do mv "$i" "`basename "$i" .wma`.mp3"; done

#add .torrent files to transsmission
for i in $current_directory*.torrent ; do transmission-remote -n 'transmission:hoanglong?88' -a $i; done

#parse .txt file and add torrents from magnet link
for i in  $current_directory*.txt ; do
     cat $i | grep -o "magnet:?xt[^']*" | while read -r line ; do
                transmission-remote -n 'transmission:hoanglong?88' --add "$line"
                # your code goes here
        done
done

#rm  .epub files - must; remove .mobi files - optional
for i in  $current_directory*.mobi ; do rm $i; done
for i in  $current_directory*.epub ; do rm $i; done 

#must delete .txt listed magnetlink files
for i in $current_directory*.txt ; do rm $i; done

#must delete .torrent files
for i in $current_directory*.torrent ; do rm $i; done

