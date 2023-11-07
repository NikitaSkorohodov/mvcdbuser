module.exports = (app) => {
const express = require("express");
const books = require("../controllers/booksController");
const router = express.Router();
const checkRole = require('../middleware/checkRole');

router.post("/", checkRole.checkAdminRole, books.create);


router.get("/", books.findAll);

router.put('/:id', checkRole.checkAdminRole, books.update);

router.delete("/:id",checkRole.checkAdminRole, books.delete);

router.get("/search", books.searchByTitle);


router.get("/author/name/:name", books.findByAuthorName);

router.get("/category/name/:name", books.findByCategory);


  app.use("/api/books", router);
};
