create table books(
  id serial not null,
  title text not null,
  author text not null,
  constraint books_pk primary key(id)
);

insert into books (title, author) values ('American Gods', 'Neil Gaiman');
insert into books (title, author) values ('American Gods', 'Sandman');
insert into books (title, author) values ('Alan Moore', 'Watchmen');
