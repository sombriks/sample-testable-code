create table books(
  id serial not null,
  title text not null,
  author text not null,
  constraint books_pk primary key(id)
);

insert into books (title, author) values ('American Gods', 'Neil Gaiman');
insert into books (title, author) values ('Sandman', 'Neil Gaiman');
insert into books (title, author) values ('Watchmen', 'Alan Moore');
