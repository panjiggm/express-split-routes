# Simple API of Fruits

## How to Use

Install dependencies:

```sh
yarn
```

Start server with `node`:

```sh
node app.js
```

Start with `nodemon`:

```sh
nodemon app.js
```

Access the endpoints via browser, httpie, or Postman.

## API Endpoints

Fruits:

| Route                           | HTTP Verb | Description                   |
| ------------------------------- | --------- | ----------------------------- |
| `/api/fruits`                   | `GET`     | Get all the fruits            |
| `/api/fruits/:id`               | `GET`     | Get a single fruit            |
| `/api/fruits`                   | `POST`    | Save a new fruit              |
| `/api/fruits/search?name=:name` | `GET`     | Search fruit by name          |
| `/api/fruits`                   | `DELETE`  | Clear all the fruits          |
| `/api/fruits/:id`               | `DELETE`  | Remove a fruit                |
| `/api/fruits/:id`               | `PUT`     | Update an fruit with new info |
