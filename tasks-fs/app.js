const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express() 
const port = 3033

app.use(cors())
app.use(express.json())

app.get('/api/tasks', (req, res) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err) {
            res.json(err) 
        } else {
            const tasks = JSON.parse(data) 
            res.json(tasks)
        }
    })
})
app.post('/api/tasks', (req, res) => {
    const body = req.body 
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err) {
            res.json(err) 
        } else {
            const tasks = JSON.parse(data) 
            tasks.push(body) 
            fs.writeFile('./data.json', JSON.stringify(tasks), () => {
                res.json(body)
            })
        }
    })
})

app.get('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err) {
            res.json(err) 
        } else {
            const tasks = JSON.parse(data) 
            const task = tasks.find(task => task.id == id) 
            if(task) {
                res.json(task) 
            } else { 
                res.json({})
            }
        }
    })
})

app.put('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    const body = req.body 
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err) {
            res.json(err) 
        } else {
            const tasks = JSON.parse(data) 
            const task = tasks.find(task => task.id == id)
            if(task) {
                Object.assign(task, body)
                fs.writeFile('./data.json', JSON.stringify(tasks), () => {
                    res.json(task) 
                })
            } else {
                res.json({})
            }
        }
    })
})

app.delete('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err) {
            res.json(err) 
        } else {
            let tasks = JSON.parse(data) 
            const task = tasks.find(task => task.id == id) 
            tasks = tasks.filter(task => task.id != id) 
            fs.writeFile('./data.json', JSON.stringify(tasks), () => {
                res.json(task)
            })
        }
    })
})


app.listen(port, () => {
    console.log('listening on port', port)
})
