# REST API - Recipe Management

A Node.js REST API for user authentication and recipe management built with Express.js and MongoDB.

## Features

- User authentication with JWT tokens
- Recipe CRUD operations
- Password hashing with bcryptjs
- Role-based access control
- MongoDB integration
- Environment variable configuration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Management**: dotenv

## Project Structure

```
├── config/
│   └── db.js                 # Database connection configuration
├── controllers/
│   ├── authController.js     # Authentication logic (register, login)
│   └── recipeController.js   # Recipe operations
├── middleware/
│   └── authMiddleware.js     # Authentication middleware
├── models/
│   ├── User.js              # User schema and methods
│   └── Recipe.js            # Recipe schema
├── routes/
│   ├── authRoutes.js        # Authentication endpoints
│   └── recipeRoutes.js      # Recipe endpoints
├── server.js                # Main application file
├── package.json             # Project dependencies
└── README.md                # This file
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Rest-Api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/recipe-api
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
PORT=5000
```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

- **POST** `/register` - Register a new user
  - Body: `{ name, email, password }`
  - Response: User data with JWT token

- **POST** `/login` - Login user
  - Body: `{ email, password }`
  - Response: User data with JWT token

### Recipes

- **GET** `/recipes` - Get all recipes
- **GET** `/recipes/:id` - Get a specific recipe
- **POST** `/recipes` - Create a new recipe (requires authentication)
- **PUT** `/recipes/:id` - Update a recipe (requires authentication)
- **DELETE** `/recipes/:id` - Delete a recipe (requires authentication)

## Authentication

The API uses JWT for authentication. Include the token in the request header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

| Variable         | Description                | Example                                |
| ---------------- | -------------------------- | -------------------------------------- |
| `MONGODB_URI`    | MongoDB connection string  | `mongodb://localhost:27017/recipe-api` |
| `JWT_SECRET`     | Secret key for JWT signing | `your_secret_key`                      |
| `JWT_EXPIRES_IN` | JWT token expiration time  | `7d`                                   |
| `PORT`           | Server port                | `5000`                                 |

## Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv

## Development Dependencies

- eslint
- nodemon (optional, for auto-restart)

## Scripts

Add to `package.json` for convenience:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "lint": "eslint ."
  }
}
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT

## Support

For issues and questions, please create an issue in the repository.
