


ssh-keygen -t rsa 
ssh-copy-id -i .ssh/id_rsa pi@host

* without passphrase if you do not want it to ask you everytime

which .ssh/id_rsa is the default key, other wise you have to specify the key everytime you login, like this:

ssh -i .ssh/id_rsa_not_default_key pi@192.168.1.6