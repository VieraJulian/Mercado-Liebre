const {Router} = require("express");
const router = Router();
const {home} = require("../controllers/main");
router.get("/", home);
module.exports = router;

