#!/usr/bin/python
import csv
import simplejson
import pprint
pp = pprint.PrettyPrinter(indent=4)

def read_csv(filename):
    with open(filename) as f:
        rows = [row for row in csv.DictReader(f)]
    return rows

def parse_row(row):
    return {
        'quadrant': int(row['Quadrant_Number']),
        'ring': int(row['Ring_Number']),
        'label': row['Name'],
        'active': bool(row['Active']),
        'link': row['Link'],
        'moved': int(row['Moved_Number'])
    }

def convert(filename):
    return [parse_row(r) for r in read_csv(filename)]


if __name__ == '__main__':
    print(simplejson.dumps(convert("KTech Tech Radar - 2020-01.csv"), indent=2))
