const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

let rawblog = fs.readFileSync('./content/blog.json');
let blog = JSON.parse(rawblog);

let rawprojects = fs.readFileSync('./content/projects.json');
let projects = JSON.parse(rawprojects);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/blog", (req, res) => {
  res.json({ data: blog.blogs });
});

app.get("/blog/:title", (req, res) => {
  const title = req.params.title;
  const data = blog.blogs.filter(
    function(data){ return data.title.replace(/ /g,'') == title }
  );
  res.json(data[0]);
});

app.get("/projects", (req, res) => {
  res.json({ data: projects.projects });
});

app.get("/projects/:title", (req, res) => {
  const title = req.params.title;
  const data = projects.projects.filter(
    function(data){ return data.title.replace(/ /g,'') == title }
  );
  res.json(data[0]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});