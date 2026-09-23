# Book Inventory
## Initial setup
To initialize the application, create a `.env` file in the root folder of the application with the following content:
```
# .env

DATABASE_URL=<connection string>
```
Replace `<connection string>` with the NeonDB connection string for your database.

Then, run `npm run init` to install all dependencies, populate the database and start the application.