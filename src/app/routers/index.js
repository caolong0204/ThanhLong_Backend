const course = require(__path_routers + "/course");
const person = require(__path_routers + "/person");
 const music = require(__path_routers + "/music");
function route(app) {
  app.use("/course", course);
  app.use("/music", music);
  app.use("/person", person);
  app.get("/", (req, res) => {
    res.send("Home Page");
  });
}

module.exports = route;
