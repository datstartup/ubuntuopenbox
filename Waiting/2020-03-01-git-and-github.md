---
title: "Add a custom folder to PATH"
header:
categories:
  - Guide
tags:
  - Linux  
  - PATH
---

This is just my note, you had better go here for up-to-date information.
https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line

Step 1: Create a new GitHub Repo

Step 2: Initialize Git in the project folder
```shell
  git init
  git add -A
  git commit -m 'Added my project'
  git remote add origin git@github.com:sammy/my-new-project.git
  git push -u -f origin main
```
