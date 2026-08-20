# Inventory app for a bookstore

## Entity types
- book
- author
- genre

### Relations
1 book -> 1 genre
1 book -> 1 author
1 author -> many books
1 author -> many genres
1 genre -> many books
1 genre -> many authors

## Tables
### books
Columns:
- id
- title
- authorid
- genreid

### authors
Columns:
- id
- name

### genres
Columns:
- id
- name