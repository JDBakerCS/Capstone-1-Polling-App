const express = require("express")
const pollsRouter = express.Router()
const {Poll, Option, Vote} = require("../models")

pollsRouter.get("/", async (req, res,next)=>{
    try{
    const allPolls= await Poll.findAll()

    return res.json(allPolls)
    }
    catch(err){
        next(err)
    }
})
pollsRouter.get("/polls/:id", async (req, res,next)=>{
    try{
    const poll= await Poll.findByPk(req.params.id)
    if (!poll) {
     return res.sendStatus(404)
    }
    res.json(poll);
    }
    catch(err){
        next(err)
    }
})

pollsRouter.post("/polls/create", async (req,res, next)=>{
    try{
        const {title, description,options}= req.body
        const newPoll= await Poll.create({title,description,options})
        options.map( (item)=>{
           let text= item.text
            Option.create({text, pollId: newPoll.id})
        })

    return res.status(201).json(newPoll)
    }catch(err){
        next(err)
    }
})





pollsRouter.delete("/polls/:id", async (req,res, next)=>{
    try{
    const deletePoll = await Poll.findByPk(req.params.id)

    if(!deletePoll){
        return await res.status(404).json()
    }
    deletePoll.destroy()
    res.sendStatus(204)
}catch(err){
    next(err)
}
})
pollsRouter.use((err,req,res,next)=>{
    console.error(err)
    res.sendStatus(500)
})
module.exports = pollsRouter