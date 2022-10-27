const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const sidebarData = require("./data/sidebar.json");
const courses = require("./data/courseCard.json");
const courseDetails = require("./data/courseDetail.json");
app.use(cors);
app.get("/", (req, res) => {
  res.send("app is runinng");
});

app.get("/sidebar", (req, res) => {
  res.send(sidebarData);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  const singleCourse = courseDetails.filter((course) => course.id === id);
  res.send(singleCourse);
  console.log(singleCourse);
});

app.listen(port, () => {
  console.log("app is running on", port);
});
