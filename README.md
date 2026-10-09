# Aggie Advise

Aggie Advise is a web application that helps students and academic advisors get started with advising. It brings student and advisor tools together with direct messaging and academic planning calculators.

## Features

- Sign in as a student or advisor, with pages and API routes protected by role.
- Student profile and class selection; view selected and unselected classes.
- Advisor tools to view, search, and open profiles for assigned students.
- Real-time messaging between students and advisors.
- GPA and course-grade calculators.

## Technology

- **Backend:** Node.js, Express, MongoDB with Mongoose, and Socket.IO
- **Frontend:** HTML, CSS, and browser JavaScript
- **Tests:** Jest

## Project layout

```text
senior-project/
├── backend/
│   ├── controllers/   # Authentication, student, advisor, and chat logic
│   ├── middleware/    # Authentication, authorization, and input validation
│   ├── models/        # MongoDB/Mongoose data models
│   ├── routes/        # HTTP API routes
│   ├── scripts/       # Data prepopulation scripts
│   ├── test/          # Jest tests
│   ├── index.js       # Express and Socket.IO application entry point
│   └── package.json
└── frontend/
    ├── index.html     # Login page
    ├── *.html         # Application pages
    ├── css/           # Page styles
    ├── javascript/    # Browser-side behavior
    └── img/           # Images
```

## Prerequisites

- Node.js and npm
- Access to a MongoDB database

## Configure and run

1. Open `senior-project/backend/index.js` and configure the MongoDB connection URI and session secret for your environment. The current implementation defines both directly in this file. Use your own credentials and do not commit secrets.
2. Install dependencies and start the server:

   ```bash
   cd senior-project/backend
   npm install
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. The server uses port `3000` by default and supports the `PORT` environment variable.

The application expects student, advisor, and class records to be present in MongoDB. Sign-in is for existing accounts; there is no account-registration page in the current frontend.

## Run tests

From `senior-project/backend`, run:

```bash
npm test
```
