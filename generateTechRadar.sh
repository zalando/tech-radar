#!/bin/bash

MONTH=`date +%m`
YEAR=`date +%Y`
FILE="data/${YEAR}_${MONTH}.tsv"

curl "https://docs.google.com/spreadsheets/d/1HvsbibsBTBvZXDaJZWYyHwTxuA7a4eEbgcIKaPhuoxs/export?gid=0&format=tsv" -o "$FILE"

#remove first row
tail -n +2 "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"

ruby transform.rb