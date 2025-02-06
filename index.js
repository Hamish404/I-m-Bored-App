import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import chalk from "chalk";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

  try {
    const response = await axios.get("http://bored.api.lewagon.com/api/activity/");
    const result = response.data;
    res.render("index.ejs", { data: result, error: null });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.post("/", async (req, res) => {

  const typeOfActivity = req.body.type;
  const participants = req.body.participants;
  
  try {
    const response = await axios.get(`http://bored.api.lewagon.com/api/activity?type=${typeOfActivity}&participants=${participants}`);
    const result = response.data;

    if (result.error) {
      console.error(chalk.red("API responded with an error:", result.error));
      return res.render("index.ejs", { error: result.error });
    }

    res.render('index.ejs', { data: result, error: result.error });

  } catch (error) {
    res.render("index.ejs", { error: error.message });
  }

});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});