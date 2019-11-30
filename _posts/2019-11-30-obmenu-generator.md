---
title: "How I install and use Obmenu Generator"
header:
categories:
  - Apps
tags:
  - Obmenu-Generator
  - apps
---

Since I always find any auto-generated menu is too busy, I need **obmenu-generator** to generate a menu with only items I need and display their associated icons.

**obmenu-generator** Github: [https://github.com/trizen/obmenu-generator](https://github.com/trizen/obmenu-generator).

### To install:

Although its not in the official repositories, it is so useful that I have to install it.

As instructed here for Debian: [https://github.com/trizen/obmenu-generator/blob/master/INSTALL.md](https://github.com/trizen/obmenu-generator/blob/master/INSTALL.md)

```bash
# For Debian 10 run the following as root/ using sudo:
echo 'deb http://download.opensuse.org/repositories/home:/Head_on_a_Stick:/obmenu-generator/Debian_10/ /' > /etc/apt/sources.list.d/home:Head_on_a_Stick:obmenu-generator.list
wget -nv https://download.opensuse.org/repositories/home:Head_on_a_Stick:obmenu-generator/Debian_10/Release.key -O Release.key
apt-key add - < Release.key
apt-get update
apt-get install obmenu-generator
```

The installation will:

  *  place the obmenu-generator file inside your PATH
  *  place the schema.pl file inside **~/.config/obmenu-generator/**

Note: if you are new to Linux, PATH "are" the *default* places where the *shell* will search for any executable file in your system.
{: notice-info}

To find where all PATH are:

```bash
echo $PATH
# mine are: /usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/home/dat/.rvm/bin
```
You can find where any executable file is locating using the **which** command:

```bash
which obmenu-generator
```

Mine is at **/usr/bin/**:

```bash
dat@debian:~$ which obmenu-generator 
/usr/bin/obmenu-generator
```
### How to use:

Step 1: edit the schema.pl file, it determines how the menu is generated (items, labels, and icons).
```bash
sudo nano /home/user/.config/obmenu-generator/schema.pl
```
Step 2: run this command to generate the menu:
```bash
obmenu-generator -i -s -c
# Generate menu include icon (-i), static (-s) and reconfigure openbox automatically (-c)
```

### My own schema.pl file:

[![My Openbox menu]({{site.baseurl}}/images/obmenu-generator.png)]({{site.baseurl}}/images/obmenu-generator.png){:target="_blank"}

Here is the content of my schema.pl file at **/home/user/.config/obmenu-generator/schema.pl**:
```bash
#!/usr/bin/perl

# obmenu-generator - schema file

=for comment

    item:      add an item inside the menu               {item => ["command", "label", "icon"]},
    cat:       add a category inside the menu             {cat => ["name", "label", "icon"]},
    sep:       horizontal line separator                  {sep => undef}, {sep => "label"},
    pipe:      a pipe menu entry                         {pipe => ["command", "label", "icon"]},
    file:      include the content of an XML file        {file => "/path/to/file.xml"},
    raw:       any XML data supported by Openbox          {raw => q(...)},
    beg:       begin of a category                        {beg => ["name", "icon"]},
    end:       end of a category                          {end => undef},
    obgenmenu: generic menu settings                {obgenmenu => ["label", "icon"]},
    exit:      default "Exit" action                     {exit => ["label", "icon"]},

=cut

# NOTE:
#    * Keys and values are case sensitive. Keep all keys lowercase.
#    * ICON can be a either a direct path to an icon or a valid icon name
#    * Category names are case insensitive. (X-XFCE and x_xfce are equivalent)

require "$ENV{HOME}/.config/obmenu-generator/config.pl";

## Text editor
my $editor = $CONFIG->{editor};

our $SCHEMA = [

    #          COMMAND                 LABEL              ICON
    {item => ['xdg-open .',       'File Manager', 'system-file-manager']},
    {item => ['terminator',            'Terminal',     'utilities-terminal']},
    {item => ['xdg-open http://', 'Web Browser',  'web-browser']},
    {item => ["transmission-gtk",              'Transmission',    'transmission']},
    {item => ["nitrogen ~/Wallpapers",              'Change Wallpaper',    'nitrogen']},
    
    ## Custom advanced settings
    {sep => undef},
    {beg => ['Advanced Settings', 'applications-engineering']},

      # Configuration files
      {item => ["lxpanelctl restart",              'Restart Lxpanel',    'text-x-generic']},
      {item => ["$editor ~/.conkyrc",              'Conky RC',    'text-x-generic']},
      {item => ["$editor ~/.config/tint2/tint2rc", 'Tint2 Panel', 'text-x-generic']},
        
      # obmenu-generator category
      {beg => ['Obmenu-Generator', 'accessories-text-editor']},
        {item => ["$editor ~/.config/obmenu-generator/schema.pl", 'Menu Schema', 'text-x-generic']},
        {item => ["$editor ~/.config/obmenu-generator/config.pl", 'Menu Config', 'text-x-generic']},
        
        {sep  => undef},
        {item => ['obmenu-generator -s -c',    'Generate a static menu',             'accessories-text-editor']},
        {item => ['obmenu-generator -s -i -c', 'Generate a static menu with icons',  'accessories-text-editor']},
        {sep  => undef},
        {item => ['obmenu-generator -p',       'Generate a dynamic menu',            'accessories-text-editor']},
        {item => ['obmenu-generator -p -i',    'Generate a dynamic menu with icons', 'accessories-text-editor']},
        {sep  => undef},

        {item => ['obmenu-generator -d', 'Refresh cache', 'view-refresh']},
      {end => undef},

      # Openbox category
      {beg => ['Openbox', 'openbox']},
        {item => ["$editor ~/.config/openbox/autostart", 'Openbox Autostart',   'text-x-generic']},
        {item => ["$editor ~/.config/openbox/rc.xml",    'Openbox RC',          'text-x-generic']},
        {item => ["$editor ~/.config/openbox/menu.xml",  'Openbox Menu',        'text-x-generic']},
        {item => ['openbox --reconfigure',               'Reconfigure Openbox', 'openbox']},
      {end => undef},
    {end => undef},

    {sep => undef},

    ## The xscreensaver lock command
    {item => ['light-locker-command -l', 'Lock', 'system-lock-screen']},

    ## This option uses the default Openbox's "Exit" action
    {item => ['systemctl poweroff','Shutdown','application-exit']},

]

```

To change any item, notice the syntax of this line:
```bash
{item => ["nitrogen ~/Wallpapers",'Change Wallpaper','nitrogen']},
```
In the square brackets of each line, it has ['command', 'LABEL:the name appeared on the menu', 'ICON:the icon name']. 

**Play with it to your heart's content!**

