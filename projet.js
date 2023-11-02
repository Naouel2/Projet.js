const express = require('express')  
const bodyParser = require('body-parser').json(); // permet de lire le Json du body de la requête
const app = express()
const port = 3000
app.use(bodyParser);

// 1er test avec Hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// insérer code pour relier à la BDD:
// 
//

//Initialisation de mon tableau d'objet de tâches (gestion de paies) qui sera par la suite en BDD:
let listTasks = [
    {id: 1, nom:"Saisie des paies", date: "20/10/2023", done: true},
    {id: 2, nom: "Contrôle", date: "24/10/2023", done :true}, 
    {id: 3, nom: "Virements", date: "27/10/2023", done :true}, 
    {id: 4, nom: "STC", date:"31/10/2023", done: false},
    {id: 5, nom: "Déclarations Sociales", date: "10/11/2023", done: false}
] 

//1.récupérer la liste de toutes les tâches
app.get('/listtasks', (req, res) => {
    res.send(listTasks);
  })

//2.récupérer la liste de toutes les tâches non faites
app.get('/listundone', (req, res) => {
    let listTasksNotDone = []

    for (i = 0; i < listTasks.length; i++) {
      if (listTasks[i].done == false){
        listTasksNotDone.push(listTasks[i])
       }
    }
     res.send(listTasksNotDone)
  })

//3.Ajouter une nouvelle tâche

app.post('/addnewtask', (req, res) => {
  let newTask = []
  newTask.push(req.body)
  res.json(newTask)  
 
})

//4.Marquer une tâche à done

app.put('/markTask/:id', (req, res) => {
  let markTask = listTasks.find(task => task.id == req.params.id) 
  markTask.done = true
  res.json(markTask)
})

//5.Modifier une tâche existante

app.put('/existingTask/:id', (req, res) => {
  let existingTask = listTasks.find(task => task.id == req.params.id) 
  existingTask.nom = req.body.nom
  existingTask.date = req.body.date
  existingTask.done = req.body.done
  res.json(existingTask)
})

//6.supprimer une tâche (bonus)

app.delete('/deleteTask/:id', (req, res) => {
  let deleteTask = listTasks.findIndex(task => task.id == req.params.id);
  listTasks.splice(deleteTask, 1);
  res.json(listTasks);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})        
