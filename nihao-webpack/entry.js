var name = require("./name");
require("style-loader!css-loader!./style.css");

document.getElementById("app").textContent = "hello~"+name;