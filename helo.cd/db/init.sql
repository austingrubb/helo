drop table if exists  users cascade;
drop table if exists post;



create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

create table post (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    auther_id integer references users(id)
);

-- select * from users;