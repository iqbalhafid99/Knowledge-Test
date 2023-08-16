# Authentication REST API

<div align="center">
 <p>Welcome to Authentication REST API!

Authentication REST API is a robust and feature-rich Node.js and Express-based API designed to handle user registration, login, and profile management seamlessly. Leveraging the power of MongoDB as its database, this API ensures data integrity and security while providing an exceptional user experience.</p>

</div>

## Installation

Install Authentication API with npm :

- Clone the Repo

```
  git clone https://github.com/iqbalhafid99/Knowledge-Test
```

- Go To Folder Repo

```
  cd auth
```

- Install Module

```
  npm install
```

- Setup .env

```
  MONGO_URL =
  PORT =
  JWT_SECRET =
```

## Running

To run this porject, run the following command

```bash
  npm run start
```

## API Reference

#### Login

```
  POST /api/login
```

#### Register

```
  POST /api/register
```

#### Get user by id

```
  GET /api/users/${id}
```

#### Get profile with token JWT

```
  GET /api/profile
```

## Features

- **User Registration** : Seamlessly register new users with encrypted password storage, safeguarding sensitive information.
- **Login Authentication** : Utilize strong authentication mechanisms to ensure secure user access, preventing unauthorized entry.
- **Enhanced Validation** : Benefit from advanced validation techniques to ensure data accuracy and maintain high data quality.
- **JWT Token-Based Profile Access** : Users can easily search for jobs based on specific criteria such as location, job title, experience level, and more.
- **Effortless Integration** :Easily integrate SecureUserAPI into your applications, thanks to its well-documented and developer-friendly design.
- **Scalable and Performance-Driven** : Built to handle scalability with optimal performance, ensuring a smooth experience even under high loads.

## Tech Stack

![AGPL License](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![AGPL License](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![AGPL License](https://img.shields.io/badge/mongodb-008000?style=for-the-badge&logo=mongodb&logoColor=white)

**Server:** Node, Express, MongoDB

## Authors

- Github : [@iqbalhafid99](https://www.github.com/iqbalhafid99)
- Instagram : [@iqbalhafid\_](https://www.instagram.com/iqbalhafid_/)
- Linkedin : [in/mohiqbalhafid](https://www.linkedin.com/in/mohiqbalhafid/)
