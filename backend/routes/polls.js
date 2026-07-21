const express = require("express")
const pollsRouter = express.Router()
const {Poll} = require("../models/Poll")

pollsRouter.get("/", async (req, res)=>{
    const allPolls= await Poll.findAll()

    return res.json(allPolls)
})

pollsRouter.post("/", async (req,res)=>{
    const newPoll= await Poll.create(req.body)

    return res.status(201).json(newPoll)
})


// pollsRouter.patch("/:id", async (req,res)=>{
//     const fixPoll= await Poll.findByPk(req.params.id)
//     if(!fixPoll){
//         return res.status(404)
//     }await fixPoll.update(req.body)

//     res.status.json(fixPoll)
// })

pollsRouter.delete("/:id", async (req,res)=>{
    const deletePool = await Poll.findByPk(req.params.id)

    if(!deletePool){
        return res.status(404).json
    }
    deletePool.destroy()
    res.sendStatus(204)
})
module.exports = pollsRouter