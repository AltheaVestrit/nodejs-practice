# Middleware

Any code or function that runs on the server between the request coming in and the response going out.

Example:

```js
app.use(func);
app.get('/', func); // This one gets executed, and a response is sent...
app.use(func); // ... this line is never executed.
```

Middleware runs from top to bottom, until process is exited or a reponse is sent.

Middleware examples:
- Logger middleware to log details of every request
- Authentication check middleware for protected routes
- Middleware to parse JSON data from requests
- Return 404 pages

## 3rd Party Middleware
- Morgan: logger

## Express Middleware
There's some middleware already included by default with Express.
- `express.static('public')` makes all files in the `public` folder accessible to the clients browser.