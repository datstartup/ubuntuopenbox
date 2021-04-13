install kivy

sudo apt-get install libavcodec-dev libsdl2-dev libavformat-dev libavdevice-dev

# all python packages installed
pip3 list

# project_env is the virtual environment name
python3 -m venv project_env

# activate virtual environment
source project_env/bin/activate

# to see which python is using
which python

#NOTE: in virtual environment use pip instead of pip3

# all installed packages in the environment
pip list

"""
Here, you can completely and fearlessly use pip install without specifying a version. The virtual environment is created from a specific version of Python, and this version will be used further
"""

# create requirements file
pip freeze > requirements.txt

# deactivate the environment
deactivate

# delete the virtual project folder
rm -rf project_env

# Real life practive
python3 -m venv my_project/venv #./.venv
source my_project/venv/bin/activate
pip install wheel # what is wheel?
pip install -r requirements.txt
pip list




