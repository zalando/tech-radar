![ZalandoTechRadar icon](ZalandoTechRadar-Logo-medium.jpg)   

.

# Zalando Tech Radar

The **Zalando Tech Radar** is a tool to inspire and support teams to pick the best technologies for new projects. Based on ideas of [ThoughtWorks](https://www.thoughtworks.com/radar), our Tech Radar sets out the changes in technologies that are interesting in software development; changes that we think our engineering teams should pay attention to and consider using in their projects.

Here, we share both, the...

* *visualization* of the **[latest Zalando Tech Radar release](http://zalando.github.io/tech-radar/)** - including a short summary of what it is and how we are using it, and the..

* *code* for generating the Tech Radar visualization from a simple tabular representation (tsv). The visualization code is based on [Protovis JavaScript visualization library](http://mbostock.github.io/protovis/) and a fork of [Brett Dargan's Tech Radar visualization tool](https://github.com/bdargan/techradar). The layout has been optimized to make the chart and explanations fit on an A4 sheet (double-sided).


## Cool, how can I create my own?

Create a google doc with the following columns:

* **Technology** (e.g. "Hystrix")
* **Quadrant** (e.g. "Platforms & Infrastructure")
* *[optional] Comments (e.g. "lib for fault tolerance")* 
* **Score** as a float between 2.0 and -2.0 (e.g. "1.8")
* *[optional] Number of votes, for internal bookkeeping*
* *[optional] Consensus score, for internal bookkeeping*
* **Skip** &mdash; set to true if entry should not be visualized on chart

Then, follow the instructions below.

Note: the score-to-ring mapping we use is not linear:

		score    2 ----- 1.5 --------------- 0 ---------- -1 ---------- -2
	  	 ring      ADOPT          TRIAL          ASSESS         HOLD

## How to generate a new chart

1. run `gem install liquid` if necessary
1. on master google doc, select `File > Download as > Tab-separated values` and store as `data/year_month.tsv`
1. open `data/year_month.tsv` and delete the first line (which contains the headers)
1. run `./transform.rb` to generate a new `radar_data.js`
1. open `index.html` in browser to inspect the result
1. repeat the last two steps until you're happy with the arrangement :)
1. check everything in
1. merge `master` branch into `gh-pages`
1. push `gh-pages` to publish the new radar 

Note: the last `.tsv` file (by lexical order) in `data/` is visualized. The next-to-last `.tsv` file (if it exists) is used to find out which blips have moved, relative to the previous radar.

## License
Apache 2.0 &mdash; same as [bdargan/techradar](https://github.com/bdargan/techradar)





