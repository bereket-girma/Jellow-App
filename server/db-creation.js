// -- CREATING TABLES --
// CREATE TABLE users (
//   id serial primary key,
//   username varchar(45) not null,
//   password varchar(128) not null,
//   salt varchar(20) not null
// );
// CREATE TABLE projects (
//   id serial primary key,
//   title varchar(45) not null
// );
// CREATE TABLE columns (
//   id serial primary key,
//   title varchar(20) not null,
//   project_id integer REFERENCES projects(id)
// );
// CREATE TABLE cards (
//   id serial primary key,
//   column_id integer REFERENCES columns(id),
//   description varchar(20)
// );
// CREATE TABLE cards_users (
//   card_id integer REFERENCES cards(id),
//   user_id integer REFERENCES users(id)
// );
// CREATE TABLE projects_users (
//   project_id integer REFERENCES projects(id),
//   user_id integer REFERENCES users(id)
// );
// -- INSERTS FOR USER TABLE --
// INSERT INTO users (username, password, salt)
// VALUES ('derrique_baluyut', 'password1', 'password2');
// INSERT INTO users (username, password, salt)
// VALUES ('bereket_girma', 'password3', 'password4');
// INSERT INTO users (username, password, salt)
// VALUES ('will_stoddard', 'password5', 'password6');
// -- INSERTS FOR PROJECTS--
// insert into projects (id, title) 
//values (1, 'test projects');

//-- INSERTS FOR columns --
//insert into columns (id, title, project_id)
//values (1, 'test column', 1)

// inserts for cards

//alter table
//insert into cards (id, column_id, description, title)
//values (4, 1, 'test card', 'test card title');

//insert into cards (id, column_id, description, title)
//values (4, 1, 'test card', 'test card title');


//INSERTS FOR PROJECTS_Users--
// INSERT INTO projects_users (project_id, user_id)
// VALUES (1, 1);




//GET requests

// SELECT * FROM projects
//   INNER JOIN columns ON projects.id=columns.project_id
//   LEFT JOIN cards ON columns.id=cards.column_id
//     WHERE projects.id=1;
