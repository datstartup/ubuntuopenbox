---
title: "Python Virtual Environment with VS Code"
header:
categories:
  - Guide
tags:
  - VScode  
  - Python
  - Virtual-Environment
---

These are notes for my own use. If it helps you in any way it is great!

# Create virtual environment with python 3
Go to the project folder, create a virtual environment with the folder name `.venv` (leading with "dot" as a hidden folder)
```
python3 -m venv ./.venv
```
# Activate virtual environment
```
source project_env/bin/activate
```
# Deactivate the environment
```
deactivate
```
# Check which python is in use
```
which python
```
# pip or pip3

In a virtual environment, `pip` will automatically point to `pip3` because the virtual environment is created from a specific version of Python. So just `pip` is enough.

# List all packages installed
In the virtual environment.
```
pip list
```
Note: It is the command to check which packages installed in python in general.

# Create requirements file
```
pip freeze > requirements.txt
```
# Install requirement packages from file
```
pip install -r requirements.txt
```
# Delete the virtual project folder
```
rm -rf .venv
```
# My real-life practice
```
python3 -m venv ./.venv
source .venv/venv/bin/activate
pip install wheel # need this package to install others
pip install -r requirements.txt
pip list
```