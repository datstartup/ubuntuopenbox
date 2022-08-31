
# 1. Find the size of subfolder in current directory include hidden folder

find -type d -name '[!.]*' -exec du -sh {} +

with sort

$ find -type d -name '[!.]*' -exec du -sh {} + | sort -h
4.0K    ./folder1
4.0K    ./folder2
8.0K    ./xyz

To reverse the sorting order:

$ find -type d -name '[!.]*' -exec du -sh {} + | sort -hr
8.0K    ./xyz
4.0K    ./folder2
4.0K    ./folder1
