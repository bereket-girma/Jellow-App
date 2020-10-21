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
// -- INSERTS FOR PROJECTS_USERS --
// INSERT INTO projects_users (project_id, user_id)
// VALUES (1, 1);





