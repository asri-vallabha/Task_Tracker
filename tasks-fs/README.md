# Backend API for tasks app 

## Installation 
* goto https://github.com/dctacademy/tasks-fs
* run the command `git clone https://github.com/dctacademy/tasks-fs.git`
* go inside the tasks-fs folder 
* install the packages with `npm install` 
* run the backend server with `node app.js` 


## API Documentation
**BASE URL - http://localhost:3033** 
### Tasks Resource 

| # | action | method | url | request | response | authentication |
| ----- |-----|-------|--------|---------|------| ------|
| 1. | lists all tasks | GET | /api/tasks | - | empty array or array of objects <br/> | no auth | 
| 2. | create a task | POST | /api/tasks  | <ul><li>id</li> <li>title</li> <li> status </li></ul> | <ul><li>id</li> <li>title</li> <li> status </li></ul> | no auth | 
| 3. | get a task | GET | /api/tasks/:id  | - | <ul><li>id</li> <li>title</li> <li> status </li></ul>  | no auth | 
| 4. | update a task | PUT | /api/tasks/:id  | <ul><li>id</li> <li>title</li> <li> status </li></ul>  | <ul><li>id</li> <li>title</li> <li> status </li></ul> | no auth | 
| 5. | delete a task | DELETE | /api/tasks/:id  | - | <ul><li>id</li> <li>title</li> <li> status </li></ul>  | no auth | 
