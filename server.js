const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const projectsRouter = require('./routes/projects');
const profileRouter = require('./routes/profile');
const skillsRouter = require('./routes/skills');

app.use('/api/projects', projectsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/skills', skillsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
