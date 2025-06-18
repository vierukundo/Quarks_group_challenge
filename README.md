# Quarks_group_Internship_challenge

This is a simple REST API built with **Node.js**, **Express**, and **TypeScript**. It fulfills the technical assessment for the Quarks Group LTD backend development internship.

---

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/vierukundo/Quarks_group_challenge.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> This runs the server using `ts-node` for development.

### 4. Build the project for production

```bash
npm run build
```

### 5. Start the production server

```bash
npm start
```

The API will run at: `http://localhost:3000`

---

## 📬 API Endpoints

### ✅ Create a User

- **URL**: `POST /users`
- **Description**: Creates a new user.
- **Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

- **Example cURL**:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@gmail.com"}'
```

- **Success Response**:

```json
{
  "id": "187bb850-622b-4e3b-bfd3-26fccf28b084",
  "name": "John Doe",
  "email": "john@gmail.com"
}
```

---

### ✅ Get a User by ID

- **URL**: `GET /users/:id`
- **Description**: Retrieves a user by their ID.

- **Example cURL**:

```bash
curl http://localhost:3000/users/<user-id>
```

- **Success Response**:

```json
{
  "id": "187bb850-622b-4e3b-bfd3-26fccf28b084",
  "name": "John Doe",
  "email": "john@gmail.com"
}
```

- **Error Response (User Not Found)**:

```json
{
  "message": "User not found."
}
```

---

## ⚠️ Error Handling

| Status Code | Description                      |
| ----------- | -------------------------------- |
| `400`       | Missing name or email in request |
| `404`       | User not found by given ID       |

---

## 📝 Notes

- Data is stored in memory (no database).
- User IDs are generated using UUID v4.
- This API is meant for demonstration/testing purposes only.

---

## 👨‍💻 Author

Built for the Quarks Group LTD Backend Internship Assessment – 2025
