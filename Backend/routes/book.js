const express=require("express");
const Bookrouter= express.Router();
const {getbooks,getbooksbyId,AddbookById,}=require("../controllers/book");
Bookrouter.route("/:id")
.get(getbooksbyId);
Bookrouter.route("/")
.get(getbooks)
.post(AddbookById);

module.exports=Bookrouter;