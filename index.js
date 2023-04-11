const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/test/:title", (req, res) => {
  const title = req.params.title;
  res.json({
    message: "Got a response: " + title
  });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});