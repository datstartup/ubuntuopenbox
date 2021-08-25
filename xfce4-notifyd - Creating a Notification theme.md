


#Installing your theme

In order for Xfce4-notifyd to find your theme and show it in the Preferences Dialog, you have to save it as gtk.css in either /usr/share/themes/$yourtheme/xfce-notify-4.0 (for global installation) or ~/.themes/$yourtheme/xfce-notify-4.0 (for local, single-user installation). 

```
#XfceNotifyWindow {
    background-color: #ffffff;
    border-radius: 1px;
    border: 2px solid #282828;
    padding: 10px;
}

#XfceNotifyWindow:hover {
    background-color: shade(#f0f0f0, 1.0);
    border: 4px solid #458588;
}

#XfceNotifyWindow label,
#XfceNotifyWindow image {
    color: #282828;
}

#XfceNotifyWindow label#summary {
    font-weight: Bold;
}

#XfceNotifyWindow button {
    font-weight: Bold;
    border: 1px solid shade(#292d31, .80);
    box-shadow: none;
    background-image: none;
    background-color: shade(#f0f0f0, 1.2);
    color: #f0f0f0;
}

#XfceNotifyWindow button:hover {
    box-shadow: none;
    background-image: none;
    background-color: shade(#f0f0f0, 1.0);
    color: #f0f0f0;
}

#XfceNotifyWindow progressbar {
    border: 0px solid shade(#458588, 1.0);
    border-radius: 0px;
}

#XfceNotifyWindow progressbar progress {
    background-image: none;
    background-color: #4b8bad;
    border: 0px solid shade(#4b8bad, 1.0);
    border-radius: 0px;
}

#XfceNotifyWindow progressbar trough {
    background-image: linear-gradient(to bottom,
                                      shade(#292d31, 1.0),
                                      shade(#292d31, 1.0)
                                      );
    border: 0px solid shade(#ffff00, 1.0);
    border-radius: 0px;
}

```
