const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/skills.json');

function readSkills() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function writeSkills(skills) {
  fs.writeFileSync(dataPath, JSON.stringify(skills, null, 2));
}

// TODO: Implement POST /api/skills
// - Read the current skills from the data file using readSkills()
// - Create a new skill object from req.body (it will have a name and level)
// - Generate a new id by finding the highest existing id and adding 1
// - Add the new skill to the array
// - Write the updated array back to the file using writeSkills()
// - Respond with 201 and the newly created skill as JSON
router.post('/', (req, res) => {
  const currentSkills = readSkills();
  const newSkill = {"id": currentSkills.length + 1, "name": req.body.name, "level": req.body.level};
  const newSkills = currentSkills.Append(newSkill);
  writeSkills(newSkills);
  res.status(201).json(newSkill);
});

// TODO: Implement DELETE /api/skills/:id
// - Read the current skills from the data file
// - Find the skill whose id matches req.params.id
//   (hint: the ids in the file are numbers, req.params.id is a string)
// - If not found, respond with 404 and { error: 'Skill not found' }
// - Remove the skill from the array
// - Write the updated array back to the file using writeSkills()
// - Respond with 200 and the deleted skill as JSON
router.delete('/:id', (req, res) => {
  const currentSkills = readSkills();
  const foundSkill = currentSkills[parseInt(req.params.id)];
  if (!foundSkill)
  {
    res.status(404).json({ "error": 'Skill not found'})
  }
  currentSkills.splice(parseInt(foundSkill.id), 1)
  writeSkills(currentSkills)
  res.status(200).json(foundSkill)
});

module.exports = router;
