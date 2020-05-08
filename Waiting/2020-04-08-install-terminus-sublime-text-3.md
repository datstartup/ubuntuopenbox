---
title: "Backup using rsync"
header:
categories:
  - tips
tags:
  - Debian  
  - rsync
---

`rsync` provides fast incremental file transfer (obvious reason not to use only `cp` for backup)

### 1. With out encoding

Command Palette

    Open the command palette
    Win/Linux: ctrl+shift+p, Mac: cmd+shift+p
    Type Install Package Control, press enter

Menu

    Open the Tools menu
    Select Install Package Control…



## 2. Key binding
```bash
[
    { 
        "keys": ["alt+t"], "command": "terminus_open", "args": {
            "cwd": "${file_path:${folder}}"
        }
    }, #<= please note that each keybind is separated using comma
    { 
        "keys": ["alt+`"], "command": "toggle_terminus_panel", "args": {
            "cwd": "${file_path:${folder}}"
        }
    }
]
```