# Views and Routes

## Index Router
Methods:
- Get -> render view
### `/`
Home page
- List of all books + their author and genre
- View books in a genre by clicking on the genre: `<list of genres with link to /genre/:genre_id>`
- Same for authors: /author/author_id
- Link to add book/author/genre form: /add/[book/author/genre]
- Link to update book/author/genre form: /update/[book/author/genre]
- Delete book/author/genre: /delete/[book/author/genre]

### `/genre/:genre_id`
- List books within genre

### `/author/:author_id`
- List books by author


## Add Router
Methods:
- Get -> render view
- Post -> add new book/genre/author, then redirect to home (all books) / all genres / all authors

### `/add/book`
- Form for adding a new book.
- Choose genre and author from drop-down menu
- Input new author / genre if not in de db yet

### `/add/genre`
- Very simple form for adding new genre

### `/add/author`
- Very simple form for adding new author

## Update Router
Methods:
- Get -> render view
- Patch -> update book/author/genre, then redirect to home (all books) / all genres / all authors

### `/update/book`
- Choose book from dropdown
- Render form for updating book
- All fields are prepopulated from db and can be edited by user

### `/update/genre`
- Choose genre from dropdown
- Render form for updating genre
- All fields are prepopulated from db and can be edited by user

### `/update/author`
- Choose author from dropdown
- Render form for updating author
- All fields are prepopulated from db and can be edited by user

## Delete Router
Methods:
- Get -> render view
- Delete -> delete book/author/genre, then redirect to home (all books) / all genres / all authors

### `/delete/book`
- Choose book from dropdown
- Button for deleting book

### `/delete/author`
- Choose author from dropdown
- Button for deleting author

### `/delete/genre`
- Choose genre from dropdown
- Button for deleting genre