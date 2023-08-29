import express, { Request, Response } from 'express';
import { tasks } from './data/tasks';

const app = express();
app.use(express.json());

const port = 3000;

app.get('/api', (_, res: Response) => {
    res.send('Hello World!');
});


app.get('/api/tasks', (req, res) => {
    try {
        res.send(tasks)
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

app.get('/api/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const task = tasks.find(task => task.id === id)
        res.send(task)
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

app.post('/api/tasks', (req, res) => {
    try {
        const data = req.body
        const task ={
            id: tasks.length + 1,
            ...data
        }
        
        tasks.push(task)
        res.send(task)
    } catch (error) {
        
    }
})

app.put('/api/tasks/:id', (req, res) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const index = tasks.findIndex(task => task.id === id)

        delete data.id

        if (index === -1) {
            return res.status(404).send({
                message: "not found"
            })
        }

        tasks[index] = {
            ...tasks[index],
            ...data,
        }

        res.send(tasks[index])
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

app.delete('/api/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const index = tasks.findIndex(task => task.id === id)

        if (index === -1) {
            return res.status(404).send({
                message: "not found"
            })
        }

        tasks.splice(index, 1)
        res.send({
            message: "delete"
        })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})


app.listen(port, () => {
    console.log(`Server Running Up on port ${port}`);
});
