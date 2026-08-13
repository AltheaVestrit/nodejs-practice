# NoSQL Databases
NoSQL databases have collections, which have only one type of documents stored in them per collection.

Example: MongoDB. We'll be using this during the rest of this project.

A document could just hold a JSON-like object for example

## Mongoose
Mongoose is an ODM (Object Document Mapping) library.
Basically a wrapper for interactions with mongodb, that provides easy methods.

## Schemas & Models
**Schema**: defines the structure of a type of data / document

Examples:
```
User Schema:
- name (string), required
- age (number)
- bio (string), required

Blog Schema:
- title (string), required
- snippet (string), required
- body (string), required
```

**Model**: allow us to communicate with database collections. A model is specific for a schema. For example, the blog model will have get, add, delete, etc.. to manage the blog entries in the database.