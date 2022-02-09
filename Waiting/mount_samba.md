sudo mount -t cifs -o rw,credentials=/home/dat/Custom/.sambaCredsMount,uid=dat //192.168.1.6/pishared /media/dat/cifs

The user in user=user is the user name you pass to the server as credentials. The user in uid=user is the user name on the client that is mounting the share.

CIFS is a virtual filesystem. When you mount a share on the client it creates a "view" of the remote share on the client and by default sets the owner to root since he is the one mounting it. uid=user replaces root as the owner of the mounted share with "user".

EDIT: BTW, how do I enable access to everyone?

sudo mount -t cifs -o rw,credentials=/home/dat/Custom/.sambaCredsMount,uid=dat,nounix,dir_mode=0777,file_mode=0777 

```
//ServerIP/share
```