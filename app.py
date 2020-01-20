import simplejson
from generate_entries import convert
from flask import Flask, render_template

app = Flask(__name__, static_folder='docs')

CSV_FILENAME="KTech Tech Radar - 2020-01.csv"

@app.route('/radar.js')
def radar_js():
    return app.send_static_file('radar.js')

@app.route('/radar.css')
def radar_css():
    return app.send_static_file('radar.css')

@app.route('/fav1.png')
def favicon():
    return app.send_static_file('fav1.png')

@app.route('/')
def template_test():
    with open('entries.json') as f:
        entries = f.read()
    title  = 'KTech Tech Radar'
    h1 = f"{title} — 2020.01"
    return render_template('index.html', title=title, h1=h1, entries=entries)


if __name__ == '__main__':
    print("Downloading data from Google Sheet...")
    entries = convert(CSV_FILENAME)
    with open('entries.json', 'w') as f:
        f.write(simplejson.dumps(entries, indent=2))
    print("Data written to entries.json")
    app.run(debug=True, host='0.0.0.0', port=8080)
