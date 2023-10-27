const express = require('express')  
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// insérer code pour relier à la BDD:
// 
//

//Initialisation de mon tableau d'objet de tâches (gestion de paies) qui sera par la suite en BDD:
let listTasks = [
    {nom:"Saisie des paies", date: "20/10/2023", done: true},
    {nom: "Contrôle", date: "24/10/2023", done :true}, 
    {nom: "Virements", date: "27/10/2023", done :true}, 
    {nom: "STC", date:"31/10/2023", done: false},
    {nom: "Déclarations Sociales", date: "10/11/2023", done: false}
] 

//1.récupérer la liste de toutes les tâches
app.get('/listtasks', (req, res) => {
    res.send(listTasks)
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
  res.send(newTask)  
 
})


//4.Marquer une tâche à done

//5.Modifier une tâche existante

//6.supprimer une tâche (bonus)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})        
