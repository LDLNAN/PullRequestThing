const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/projects.json');

function readProjects() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function writeProjects(projects) {
  fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));
}

// TODO: Implement GET /api/projects
// - Read all projects from the data file using readProjects()
// - Respond with the full array as JSON
router.get('/', (req, res) => {

});

// TODO: Implement PUT /api/projects/:id
// - Read all projects from the data file
// - Find the project whose id matches req.params.id
//   (hint: the ids in the file are numbers, req.params.id is a string)
// - If not found, respond with 404 and { error: 'Project not found' }
// - Merge the request body into the existing project
//   (hint: use the spread operator { ...existing, ...req.body })
// - Write the updated array back to the file using writeProjects()
// - Respond with the updated project as JSON
router.put('/:id', (req, res) => {

});

module.exports = router;
