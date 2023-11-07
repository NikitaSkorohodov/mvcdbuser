

module.exports = (app) => {
  const express = require("express");
    const authors = require("../controllers/authorsControllers.js");
    const router = express.Router();
    const checkRole = require('../middleware/checkRole');
  
   
    router.post("/", checkRole.checkAdminRole, authors.create);
  
   
    router.get("/", authors.findAll);
  
    router.put("/:id", checkRole.checkAdminRole, authors.update);
  
    router.delete("/:id", checkRole.checkAdminRole, authors.delete);
  
    app.use("/api/authors", router);
  };
  