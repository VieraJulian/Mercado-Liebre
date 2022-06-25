const {resolve} = require("path");
module.exports = {
    home: (req, res) => res.render("home", {
        styles: ["mobile", "tablets", "desktop"]
    })
}