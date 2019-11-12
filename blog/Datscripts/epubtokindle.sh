#!/bin/bash
#this cript will convert and send epub to my kindle on the spot
#copy the script to /usr/bin to make it global
s=$1
raw_file=${s%.epub}
#current_file=${s%.*}
current_file=$(echo $raw_file | tr ' ' '_')

#remove spaces
#mv $raw_file".epub" `echo $current_file".epub" | tr ' ' '_'` 
mv "$raw_file".epub"" "$current_file".epub""

#convert all epub file and send it to kindle
ebook-convert $current_file".epub" $current_file".mobi" && mutt -s "all mobi" -a $current_file".mobi" -- huynhdat.space@kindle.com < ~/text

#rm  .epub files - must; remove .mobi files - optional
rm $current_file".mobi"


