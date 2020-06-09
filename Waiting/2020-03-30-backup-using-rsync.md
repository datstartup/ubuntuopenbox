---
title: "Backup using rsync"
header:
categories:
  - tips
tags:
  - Debian  
  - rsync
---

`rsync` provides fast incremental file transfer (obvious reason not to use only `cp` for backup).

### 1. Installing 

```bash	
sudo apt install rsync
```

### 2. Trailing slash (rsync follows the convention of BSD `cp`, not GNU `cp`)

When using "/" at the end of source, rsync will copy the content of the last folder.
When not using "/" at the end of source, rsync will copy the last folder and the content of the folder.

When using "/" at the end of destination, rsync will paste the data inside the last folder.
When not using "/" at the end of destination, rsync will create a folder with the last destination folder name and paste the data inside that folder. 

Sound confusing, you'd better make some test to see more clearly.

### 3. My rsync backup commands:

sudo - to execute the command as a superuser. Mandatory use.

rsync - is the program itself to use.

-a - archive mode.

-A - preserve Access Control List.

-X - preserve extended attributes.

Basically, these three options mean to preserve all the attributes of your files. Owner attributes or permissions will not be modified during the backup process.

-v - It will show the progress of the backup.

--delete - this option allows you to make an incremental backup. That means, if it is not your first backup, it will backup only the difference between your source and the destination. So, it will backup only new files and modified files and it will also delete all the files in the backup which were deleted on your system. Be careful with this option.

The point of rsync is not copying, it is archiving. This is an important distinction. Processing deleted/changed files is critical, and in many cases nuanced.

The --delete flag in particular is one I've seen screwed up many times. A lot of people use rsync to move files to low priority storage, and in this case you want the files you're moving to still EXIST in the destination directory. That's not what delete does: --delete makes sure that, when you delete a file from the source directory, it is ALSO deleted from your destination directory, so your destination doesn't get full of junk... Once saw a guy wipe out his backup by putting in a new drive, and not turning off his nightly rsync script. Script saw that the source dir was now empty, and it deleted every file in the destination dir, so they'd match.

Most of the other options are space or performance related. When you delete the files is important if you want to make sure the transfer is successful before you do anything, but if your device is too small to handle 2 copies of all the information, you need to delete as you go, etc. It's a little wacky because of its long history across multiple platforms: some options have been added so that people who were used to certain behaviour wouldn't be confused.

--dry-run - This option simulates the backup. Useful to test its execution.

--exclude - Excludes folders and files from backup. I typed exclude as a separate option for every directory. You can also use it this way --exclude={/dev/*,/proc/*,/sys/*,/tmp/*,/run/*,/mnt/*,/media/*,/home/*,/lost+found}. But make sure you change your working directory to root (cd /) before you run rsync, otherwise the joint exclude option may not work.

Here is what the "-arv" option does:
a = archive - means it preserves permissions (owners, groups), times, symbolic links, and devices.

v = verbose - means that it prints on the screen what is being copied

The human-readable option (h) directs rsync to produce slightly more readable output.

**Note:** 
`r` (= recursive - means it copies directories and sub directories) is implied if using the flag `-a` (equivalent to `-rlptgoD` )

### 4. Special use case

#### 4.1 Only copy a file from a file list
```bash
rsync -av --files-from=file-list source/ -r target/
```
The filenames that are read from the FILE are all relative to the source dir.
Sorting the list of files in the `--files-from` input helps rsync to be more efficient.
Note the `-r` flag:

>    `-a, --archive`

>    This is equivalent to `-rlptgoD`. It is a quick way of saying you want recursion and want to preserve almost everything (with -H being a notable omission). The only exception to the above equivalence is when --files-from is specified, in which case -r is not implied.


#### 4.2 Exclude

```
rsync -avh --exclude="*.iso" /home/user/bin/ /media/diskid/user_backup/
```
this command directs rsync to ignore files that end with `.iso`.

#### 4.3 Selective

https://unix.stackexchange.com/questions/368210/how-to-rsync-multiple-source-folders

### 5. Remote backup

You can run unattended backups by setting up an SSH key at the remote host. You can also SSH into a remote host without needing to type the password each time too. If you haven’t set this up previously, it’s very easy. Open a terminal and run:
```bash
ssh-keygen -t dsa
```
This will create a public and private SSH key for you. You’ll be prompted twice for a passphrase. Just hit Enter each time. Now you need to get the public key to the remote host. For this you want to use ssh-copy-id:
```bash
ssh-copy-id -i ~/.ssh/id_dsa.pub user@host
```
**Note:** Delete known hosts in `/home/user/.ssh/known_hosts` if the remote computer were changed (after reflashing a Raspberry image...).

This is a script that will copy your public key to a remote host. It may not work on systems that have the remote shell disabled. For instance, I’ve had no success getting it to work with rsync.net. In those cases, you need to copy your public key to `~/.ssh/authorized_keys` on the remote system.

Note that this does mean if your local system is compromised, anyone with local access can also shell into remote machines without a password.

Now it’s time to tell rsync to use SSH, and point it at a remote host. To do this, use the -e SSH option, like so:
```bash
rsync -avze ssh /home/user/directory/ user@remote.host.net:home/user/directory/
```
Here I tacked on the remote shell (-e) option to -avz and told rsync that it should use SSH. Note that rsync can also use other methods like rsh, but in practice I’ve never seen rsync used with anything but SSH.

When specifying the directories, be clear on whether you include the trailing slash. In the above example, /home/user/directory would not be the same as /home/user/directory/. The additional slash tells rsync to copy the contents but not the directory itself. Without it, rsync will also create the directory.

What’s the z option do? It tells rsync to compress the data sent.

Note that you can do this the other way too. If you want to back up a remote system to the local system, just swap the remote and local host targets, like so:
```bash
rsync -avze ssh user@remote.host.net:home/user/directory/ /home/user/directory/
```

### 6. Backup and restore

https://averagelinuxuser.com/backup-and-restore-your-linux-system-with-rsync/