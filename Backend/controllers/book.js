const { model } = require("mongoose");
const Books=require("../models/book");
async function getbooks(req,res)
{
    const allbooks= await Books.find({});
    if(!allbooks || allbooks.length==0)
    {
        return res.status(400).json({msg :"Books not found"});
    }
    return res.status(200).json(allbooks);
}
async function getbooksbyId(req,res)
{
    const findbook= await Books.findById(req.params.id);
    if(!findbook)
        {
            return res.status(400).json({msg :" Book of this id do not exists"});
        } 
    return res.status(200).json(findbook);
}

async function AddbookById(req,res){
    const body=req.body;
    if(!body ||!body.Title || !body.Author ||!body.publishedDate ||!body.CopiesAvailable )
    {
        return res.status(400).json({msg : "All fields are required"});
    }
    const result = await Books.create({
        Title: body.Title,
        Author: body.Author,
        publishedDate : body.publishedDate,
        CopiesAvailable: body.CopiesAvailable,
    });
    console.log("Result",result);

    return res.status(200).json({msg : "success"});
  
}
module.exports={getbooks,getbooksbyId,AddbookById};