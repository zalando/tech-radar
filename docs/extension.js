var entries = [];

function getPathPrefix() {
  let pathPrefix = "../";
  let urlPaths = location.pathname.split('/');
  if (urlPaths.length >= 1 && urlPaths[1] === "tech-radar") {
    pathPrefix = "/tech-radar"
  }
  return pathPrefix;
}


function getTechnologies() {

  let pathPrefix = getPathPrefix();

  fetch(pathPrefix + "/technologies.txt")
    .then(response => response.text())
    .then(data => {
      var promises = [];
      var lines = data.split("\n").filter(function (el) {
        return el != null && el !== "";
      });
      const md = window.markdownit();

      for (let fileName of lines) {
        var request = new Promise((resolve, reject) => {
          fetch(getPathPrefix() + "/technologies/" + fileName)
            .then(response => response.text())
            .then(mdData => {
              try {
                const parts = extractMarkdownParts(mdData);
                let json = jsyaml.load(parts.metadata);
                json["fileName"] = fileName;
                json["html"] = md.render(parts.content);
                entries.push(json);
                resolve();
              } catch (e) {
                reject(e);
              }
            })
            .catch(error => {
              reject(error);
            });
        });
        promises.push(request);
      }

      Promise.all(promises)
        .then(() => {
          console.table(entries);
          radar_visualization({
            repo_url: "https://github.com/zalando/tech-radar",
            title: "RIG Tech Radar",
            date: data.date,
            quadrants: [
              {name: "Languages"},
              {name: "Infrastructure"},
              {name: "Datastores"},
              {name: "Data Management"},
            ],
            rings: [
              {name: "ADOPT", color: "#5ba300"},
              {name: "TRIAL", color: "#009eb0"},
              {name: "ASSESS", color: "#c7ba00"},
              {name: "HOLD", color: "#e09b96"}
            ],
            entries: entries
          });
        })
        .catch(error => {
          console.error("Error in Promise.all: " + error);
        });
    })
    .catch(error => {
      console.error("Error fetching technologies list: " + error);
    });
}

getTechnologies();

function extractMarkdownParts(markdownContent) {
  const result = {
    metadata: null,
    content: markdownContent
  };

  if (markdownContent.trimStart().startsWith('---')) {
    const firstMarker = markdownContent.indexOf('---');
    const secondMarker = markdownContent.indexOf('---', firstMarker + 3);

    if (secondMarker !== -1) {
      const metadataStr = markdownContent.substring(firstMarker + 3, secondMarker).trim();
      const content = markdownContent.substring(secondMarker + 3).trimStart();
      result.metadata = metadataStr;
      result.content = content;
    }
  }

  return result;
}

function showDialog(htmlContent) {
  const dialog = document.getElementById('myDialog');
 document.getElementById('content').innerHTML = htmlContent;
  const overlay = document.querySelector('.dialog-overlay');
  if (overlay) {
    overlay.style.display = 'block';
  }
  dialog.setAttribute('open', '');
}

function hideDialog() {
  const dialog = document.getElementById('myDialog');
  const overlay = document.querySelector('.dialog-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
  dialog.removeAttribute('open');
}