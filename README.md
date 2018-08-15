# Would You Rather App Project

This is the submission for the Would You Rather App project for Udacity's React and Redux course. 

## TL;DR

The submission is through the provided workspace. To run the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Files submitted
```bash
├── README.md # This file
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico # from create-react-app template
│   └── index.html # from create-react-app template
│   └── manifest.json # from create-react-app template
└── src
    ├── index.css # CSS for the entire project
    ├── index.js # modified from create-react-app template to create and provide the redux store
    ├── actions
    │   ├── authedUser.js # for authedUser actions to the redux store
    │   ├── questions.js # for question actions to the redux store
    │   ├── shared.js # for shared actions to the redux store
    │   └── users.js # for users action to the redux store
    ├── reducers
    │   ├── authedUser.js # authedUser reducer for the redux store
    │   ├── index.js # combined reducer for the redux store
    │   ├── questions.js # questions reducer for the redux store
    │   └── users.js # users reducer for the redux store
    ├── middleware
    │   ├── index.js # combined middleware for the redux store
    │   └── logger.js # logging middleware to monitor actions and redux store states
    ├── utils
    │   ├── _DATA.js # starter code with modified avatarURL for users
    │   ├── api.js # mock api to an asynchronized store
    │   └── common.js # common functions for the project
    └── components
        ├── App.js # Main app component
        ├── Home.js # Home component page
        ├── Leaderboard.js # Leaderboard component page
        ├── Login.js # Login component to set authenticated user
        ├── Logout.js # Logout component within the navigation bar to clear authenticated user
        ├── Nav.js # Nav component for the navigation bar
        ├── NavUser.js # NavUser component to display authedUser at the navigation bar
        ├── NewQuestion.js # New question component page
        ├── PageNotFound.js # Generic page not found component page
        ├── QnSummary.js # Question summary component within Question list
        ├── Question.js # Question component that decides which question detail page to show
        ├── QuestionList.js # Queston list component showing list of Question summaries
        ├── ResultPage.js # Question result component page shown if question is answered
        ├── User.js # User component showing user scores at Leaderboard page
        ├── ViewSelection.js # View selection component that allows user to select view at home page
        └── VotePage.js # Voting component page shown if question is unanswered
```