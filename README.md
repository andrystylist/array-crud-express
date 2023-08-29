# TS Mock server
## A singular CRUD with Mock Data - Express - TS Server


### Run the Project
Once you pull this project in your local
- As precondition, must have node v18.
- Install dependencies: `npm i` or `npm install`
- Run the Project: `npm run dev`
- Terminal should show that `Server Running Up on port [PORT_NUMBER]`

### Check & Develop
- The server URL is `http://localhost:[PORT_NUMBER]`.
- Check server is running adding the url param: `/api`.
- Create the api endpoints for CRUD operations with task mock data only on file `app.ts` \
Task Entity is using base URL: `/api/tasks` and the following params and http requests for CRUD are:
  | Route | HTTP Verb | Description | Request Body | Request Params |
  | --- | --- | --- | --- | --- |
  | `/` | POST | Creates a new task | Task data | Not Necessary  |
  | `/` | GET | Retrieves all tasks | Not Necessary | Not Necessary |
  | `/:id` | GET | Retrieves a single task by ID | Not Necessary  |  Id parameter |
  | `/:id` | PUT | Updates an existing task | Task data | Id parameter | Not Necessary  |
  | `/:id` | DELETE | Deletes a task by ID | Not Necessary | Id parameter |


For example:
POST: Creates a new task \
Request Body:
```json
{
	"id": 4,
	"todo": "task4"
}
```

Response:
```json
[
	{
		"id": 1,
		"todo": "task1"
	},
	{
		"id": 2,
		"todo": "task2"
	},
	{
		"id": 3,
		"todo": "task3"
	},
	{
	        "id": 4,
	        "todo": "task4"
	}
]
```

PUT: Edits a task
URL path: `http://localhost:[PORT_NUMBER]/api/tasks/4` \
Request Body:
```json
{
	"todo": "task4_test"
}
```

Response:
```json
[
	{
		"id": 1,
		"todo": "task1"
	},
	{
		"id": 2,
		"todo": "task2"
	},
	{
		"id": 3,
		"todo": "task3"
	},
    	{
        	"id": 4,
        	"todo": "task4_test"
        }
]
```
- As suggestion, manage error operations, i.e. any task not found or deletion error.

Create all endpoints as you can, just have fun and keep practice. \
Good Luck!
