const path = require("path");
const router = require("express").Router()
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res)=>{
    console.log("WE HIT /api/notes get route on the backend!!!")
    res.sendFile(path.join(__dirname, "../db/db.json"))
})

router.post('/notes', (req, res)=>{
    console.log("NOTE WE JUST WROTE", req.body)

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data)=>{
        if(err) throw err;

        const parsedNotes = JSON.parse(data)
        parsedNotes.push(newNote)
        console.log("PARSED notes with new NOTE", parsedNotes)

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err)=>{
            if(err) throw err;
            console.log("NOTE SAVED!!!")
        })
    })
    res.sendFile(path.join(__dirname, "../db/db.json"))
})



module.exports = router;

