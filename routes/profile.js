const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/profile.json');

function readProfile() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function writeProfile(profile) {
  fs.writeFileSync(dataPath, JSON.stringify(profile, null, 2));
}

// TODO: Implement GET /api/profile
// - Read the profile from the data file using readProfile()
// - Respond with the profile object as JSON
router.get('/', (req, res) => {
  const profiles = readProfile();
  res.json(profiles);

});

// TODO: Implement PUT /api/profile
// - Read the current profile from the data file
// - Merge the request body into the current profile
//   (hint: use the spread operator { ...current, ...req.body })
// - Write the updated profile back to the file using writeProfile()
// - Respond with the updated profile as JSON
router.put('/', (req, res) => {
  const profiles = readProfile();
  const newProfile = {...profiles, ...req.body};
  writeProfile(newProfile);
  res.json(newProfile);
});

module.exports = router;
