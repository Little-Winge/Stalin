const app = require("express")();
const { Timers } = require("../variable");
module.exports = async (bot) => {
  app.get("/api/timers", async (req, res) => {
    let Arr = [];
    Timers.forEach((timer) => {
      Arr.push({
        GUILD: timer.Guild,
        Author: { ID: timer.Author.ID, TAG: timer.Author.Tag },
        TIME_IN_MS: timer.Time + "MS",
      });
    });
    res.send(Arr);
  });
  app.listen(8080);
};