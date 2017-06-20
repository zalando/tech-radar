#!/bin/bash

DAY=`date +%d`
MONTH=`date +%m`
YEAR=`date +%Y`
FILE="data/${YEAR}_${MONTH}_${DAY}.tsv"

curl "https://docs.google.com/spreadsheets/d/1gDTLuWCVcv0xIPddNWVPXI6pRh39i1LdLiRtqMZiFN0/export?gid=0&format=tsv" -o "$FILE"

#remove first row
tail -n +2 "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
