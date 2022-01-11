import express from 'express';
import fetch from 'node-fetch'

const app = express();

const port = 3000;

// const params = {
//     tags: "",
//     sortBy: "",
//     direction: ""
// }

const apiUrl = `https://api.hatchways.io/assessment/blog/posts?tag=`

app.set('json spaces', 40);


//route 1
app.get('/api/ping/', (req,res) => {
    res.status(200).json({ success: true});
})
//route 2
app.get('/api/posts/:tag', (req,res) => {
    fetch(apiUrl + req.params.tag) 
    .then(res => res.json())
    .then(data => res.json(data))
    // res.send('POSTS');
})

app.get('/api/posts/:tag/:sortBy', (req,res) => {
    fetch(apiUrl + req.params.tag + `&sortBy=` + req.params.sortBy) 
    .then(res => res.json())
    .then(data => res.json(data))
    res.send(req.params.sortBy);
})


app.listen(port, () => console.log(`${port} is live!`))


