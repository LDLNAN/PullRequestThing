# Lesson 12 Starter — Code Review Activity

This is the starter project for the Lesson 12 code review activity. You will implement a small REST API, open a pull request, and review your collaborator's code.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The server runs at `http://localhost:3000`

## Assignments

Each person is assigned one route file. Open your file, read the TODO comments, and implement the functions.

| | File | Endpoints to Implement |
| ------- | ---- | ---------------------- |
| A | `routes/projects.js` | `GET /api/projects` and `PUT /api/projects/:id` |
| B | `routes/profile.js` | `GET /api/profile` and `PUT /api/profile` |
| C | `routes/skills.js` | `POST /api/skills` and `DELETE /api/skills/:id` |

Do not modify `server.js` or the data files.

## Testing Your Endpoints

Use Postman to test your endpoints as you work. The data files in `data/` are pre-populated with seed data to test against.

## Activity Steps

1. One person creates the repository and invites the others as collaborators
2. Everyone clones the repository
3. Add this starter code to the repository and push to the main branch
4. Copy `templates/pull_request_template.md` to `.github/pull_request_template.md` in your repository so it auto-populates when you open a PR
5. Each person creates a feature branch using the naming convention:
   ```
   feature/[section]
   ```
   For example: `feature/add-profile-endpoints`

   > **Note:** Since you are sharing a repository, make sure your branch name clearly describes your section of the work so it does not conflict with your collaborator's branch.
6. Each person implements their assigned route file
7. Each person pushes their branch and opens a PR against main using the PR template
8. Each person reviews their collaborator's PR using `templates/review_template.md` and submits a formal review decision
