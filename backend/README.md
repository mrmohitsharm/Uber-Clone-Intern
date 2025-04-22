# User API Documentation

## Base URL
```
http://localhost:3000/api/users
```

## Authentication Endpoints

### 1. Register User
```http
POST /register
```

Creates a new user account and returns an authentication token.

#### Request Body Schema
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| fullname.firstname | String | Yes | Minimum 3 characters |
| fullname.lastname | String | Yes | User's last name |
| email | String | Yes | Valid email format |
| password | String | Yes | Minimum 6 characters |

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response Codes
| Status | Description |
|--------|-------------|
| 201 | User created successfully |
| 422 | Validation error |
| 500 | Server error |

#### Success Response (201)
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "user_id",
    "createdAt": "2025-04-19T10:00:00.000Z",
    "updatedAt": "2025-04-19T10:00:00.000Z"
  }
}
```

### 2. Login User
```http
POST /login
```

Authenticates a user and returns a token.

#### Request Body Schema
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | String | Yes | Registered email |
| password | String | Yes | User's password |

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response Codes
| Status | Description |
|--------|-------------|
| 200 | Login successful |
| 401 | Invalid credentials |
| 500 | Server error |

#### Success Response (200)
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "user_id"
  }
}
```

### 3. Get User Profile
```http
GET /profile
```

Retrieves the authenticated user's profile information.

#### Authentication
Required in one of:
- Cookie: `token=<jwt_token>`
- Header: `Authorization: Bearer <jwt_token>`

#### Response Codes
| Status | Description |
|--------|-------------|
| 200 | Profile retrieved successfully |
| 401 | Unauthorized/Invalid token |
| 500 | Server error |

#### Success Response (200)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "user_id",
  "createdAt": "2025-04-19T10:00:00.000Z",
  "updatedAt": "2025-04-19T10:00:00.000Z"
}
```

### 4. Logout User
```http
GET /logout
```

Invalidates the current user's token and clears the cookie.

#### Authentication
Required in one of:
- Cookie: `token=<jwt_token>`
- Header: `Authorization: Bearer <jwt_token>`

#### Response Codes
| Status | Description |
|--------|-------------|
| 200 | Logout successful |
| 401 | Unauthorized/Invalid token |
| 500 | Server error |

#### Success Response (200)
```json
{
  "message": "Logout successfully"
}
```

## Security Notes
- All tokens are JWT format
- Tokens expire after 24 hours
- Blacklisted tokens cannot be reused
- Passwords are hashed before storage
- All authenticated routes require valid JWT token
- Failed authentication returns 401 Unauthorized