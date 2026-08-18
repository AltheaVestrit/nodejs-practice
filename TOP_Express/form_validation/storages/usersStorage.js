// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
        this.storage = {
            0: {
                id: 0,
                firstName: "Danielle",
                lastName: "Niestadt",
                email: "d.niestadt@hotmail.com",
                age: "31",
                bio: "Some info..."
            },
            1: {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "jdoe@example.com",
                age: "",
                bio: ""
            }
        };
        this.id = 2;
    }

    addUser({ firstName, lastName, email, age, bio }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    findUser(name, email) {
        return Object.values(this.storage).find((value) => {
            const fullName = `${value.firstName} ${value.lastName}`;
            const nameFound = fullName.includes(name) && name != "";
            const mailFound = value.email.includes(email) && email != "";
            return (nameFound || mailFound)
        })
    }

    updateUser(id, { firstName, lastName, email, age, bio }) {
        this.storage[id] = { id, firstName, lastName, email, age, bio };
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
