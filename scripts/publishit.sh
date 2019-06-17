#!/bin/bash

$(awk -f awkconversion.awk $1 > replacement.json)
REPLACESTR="THISISAREALLYLONGWEIRDSTRINGTHATSEDCANMATCH"
# replace it yo

sed -e "/$REPLACESTR/r replacement.json" -e "/$REPLACESTR/d" ../docs/index.template > ../docs/index.html
rm replacement.json
