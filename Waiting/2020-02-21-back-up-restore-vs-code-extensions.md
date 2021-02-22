---
title: "back up my VS Code settings and list of installed extensions"
header:
categories:
  - Guide
tags:
  - backup-VScode  
  - extension
---



So as treehead's edit or MarkP's answer showed you can now list all extensions installed so the way to install that list of extensions would be to:

code --list-extensions >> vs_code_extensions_list.txt

Transfer the newly created file to the machine that you want to install those extensions to. On that machine you would:

cat vs_code_extensions_list.txt | xargs -n 1 code --install-extension

Which will then go through each extension in that file and install the extension.

If you want a clean install (AKA remove all existing extensions on that machine) you could run this before you install the new extensions (otherwise you will remove those new extensions too). BE CAREFUL as this will remove all extensions in VS Code:

code --list-extensions | xargs -n 1 code --uninstall-extension
That's for Linux. 
On windows: get-content c:\exportedlist.txt | % { code --install-extension $_ } 


Linux `$HOME/.config/Code/User/settings.json` for all the setting
mine
```JSON
{
  "window.zoomLevel": 3,
  "workbench.colorTheme": "Snazzy Plus - Darker",
  "editor.fontFamily": "'Operator Mono Lig','Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'",
  "editor.fontLigatures": true,
  "editor.fontWeight": "300",
  "workbench.iconTheme": "vscode-icons",
  "terminal.integrated.fontSize": 12,
  "editor.multiCursorModifier": "ctrlCmd",
  "terminal.integrated.fontFamily": "Hack",
  "terminal.integrated.drawBoldTextInBrightColors": false,
  "terminal.integrated.env.linux": {},
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```