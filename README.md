# TaskManagerApi

Description:
A simple RESTful API built with Node.js, Express, and MongoDB for managing tasks. Supports creating, reading, updating, and deleting tasks.

## Features
- Create new tasks
- Retrieve all tasks or a single task by ID
- Update task fields (e.g. title, status)
- Delete tasks

## Tech Stack
- Node.js
- Express
- MongoDB (via Mongoose)
- dotenv for environment configuration


## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas cluster)

### Installation
```bash
git clone https://github.com/Divyjai/TaskManagerApi.git
cd TaskManagerApi
npm install
cp .env.example .env


Configuration
In .env, update:
MONGODB_URI=your_connection_string
PORT=5000


### 6. **API Endpoints**
Document endpoint routes and usage—tools like `curl` examples are especially helpful :contentReference[oaicite:0]{index=0}:
```markdown
## API Endpoints

### GET /api/tasks
Fetch all tasks.

### POST /api/tasks
Create a task.
**Body:**
```json
{
  "title": "Do laundry",
  "status": "pending"
}


#### 7. **Error Format**
Outline unified error responses:
```markdown
## Error Response Format
```json
{
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}


## 8. **Examples**
Add `curl` or HTTP client examples for real usage:
```markdown
# Examples

### Create a Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Read a book","status":"pending"}'

#Update a Task
curl -X PUT http://localhost:5000/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

#Delete a Task
curl -X DELETE http://localhost:5000/api/tasks/<task-id>"


#### 9. **Future Improvements**
Show your roadmap or possible next steps:
```markdown
## Future Improvements
- Add user authentication
- Swagger-based API documentation
- Deploy to platforms like Heroku, Railway, or AWS
  

## License
MIT © 2025 Divy
