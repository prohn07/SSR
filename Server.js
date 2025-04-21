require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
import express from "express";
const app = express();
import { fileURLToPath } from "url";
import path from "path";
import ejs from "ejs";
import App from "./src/App";
import { renderToString } from "react-dom/server";
import React from "react";

const _filepath = fileURLToPath(import.meta.url);

const _dirname = path.dirname(_filepath);
app.set(`view engine`, ejs);
app.set(`views`, path.join(_dirname, `views`));

app.get("/", (req, res) => {
  const reactApp = renderToString(<App />);
  res.render(`index`, { reactApp });
});

app.listen("8888", () => {
  console.log("started");
});

//http://localhost:8888
