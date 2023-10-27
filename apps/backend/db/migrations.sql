create table
  users (
    id serial primary key,
    username text not null,
    email text not null,
    password text not null,
    salt text not null,
    session_token text not null
)