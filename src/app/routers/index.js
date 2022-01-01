const course = require(__path_routers + "/course");
const person = require(__path_routers + "/person");
 const music = require(__path_routers + "/music");
function route(app) {
  app.use("/course", course);
  app.use("/music", music);
  app.use("/person", person);
  app.get(
    "/middleware",
    (req, res, next) => {
      if (req.query.id == 100) {
        req.result = "mot tram";
        return next();
      }
      if (req.query.id == 200) {
        return next();
      }
      res.status(403).send("Middleware failll!!!");
    },
    (req, res, next) => {
      res.json({
        result: req.result,
        message: "success",
      });
    }
  );

  app.get("/", (req, res) => {
    res.send("Home Page");
  });
}

module.exports = route;
