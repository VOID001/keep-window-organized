#########################################################################
# File Name: release.sh
# Author: VOID_133
# QQ: #########
# mail: ####@gmail.com
# Created Time: Sun 15 Dec 2019 11:42:42 PM PST
#########################################################################
#!/bin/bash

cp -r code/ pkg/contents/
cp metadata.desktop pkg/
7z a -tzip keep-window-organized.kwinscript pkg
