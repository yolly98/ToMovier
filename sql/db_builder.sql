create database if not exists toMovier_db;
use toMovier_db;

drop table if exists USER;
create table USER(
    user varchar(100) not null,
    passw varchar(500) not null,
    primary key(user)
)engine=InnoDB default charset=latin1;

drop table if exists FILM;
create table FILM(
    id int not null auto_increment,
    name varchar(100) not null,
    genre varchar(100),
    rating varchar(100) not null,
    favorite varchar(100) not null,
    platform varchar(100),
    watched varchar(100) not null,
    isFilm varchar(100) not null,
    user varchar(100) not null,
    urlImage varchar(500) not null,
    unique(user, name),
    primary key(id)
)engine=InnoDB default charset=latin1;

