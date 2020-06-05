

As always in Linux, there's more than one way to get the job done. However, if you need to do it from CLI, this is my preferred method:

I start by running this as root or with sudo:

```
du -cha --max-depth=1 / | grep -E "M|G"
```

The grep is to limit the returning lines to those which return with values in the Megabyte or Gigabyte range. If your disks are big enough, you could add |T as well to include Terabyte amounts. You may get some errors on /proc, /sys, and/or /dev since they are not real files on disk. However, it should still provide valid output for the rest of the directories in root. After you find the biggest ones you can then run the command inside of that directory in order to narrow your way down the culprit. So for example, if /var was the biggest you could do it like this next:

du -cha --max-depth=1 /var | grep -E "M|G"

That should lead you to the problem children!

Additional Considerations

While the above command will certainly do the trick, I had some constructive criticism in the comments below that pointed out some things you could also include.

    The grep I provided could result in the occasional "K" value being returned if the name of the directory or file has a capital G or M. If you absolutely don't want any of the K valued directories showing up you'd want to up your regex game to be more creative and complex. e.g. grep -E "^[0-9\.]*[MG]"

    If you know which drive is the issue and it has other mounted drives on top of it that you don't want to waste time including in your search, you could add the -x flag to your du command. Man page description of that flag:

      -x, --one-file-system
          skip directories on different file systems

    You can sort the output of the du command so that the highest value is at the bottom. Just append this to the end of the command: | sort -h

