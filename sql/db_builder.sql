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
    urlImage varchar(1000) not null,
    unique(user, name),
    primary key(id)
)engine=InnoDB default charset=latin1;

drop table if exists PLATFORM;
create table PLATFORM(
    name varchar(100) not null,
    path varchar(500) not null,
    primary key(name)
)engine=InnoDB default charset=latin1; 

INSERT INTO PLATFORM
VALUES ("Amazon Prime", "./images/platforms/amazonPrime.png"),
    ("Anime Unity", "./images/platforms/animeUnity.png"),
    ("Apple TV", "./images/platforms/appleTv.png"),
    ("Chili", "./images/platforms/chili.png"),
    ("Crunchyroll", "./images/platforms/crunchyroll.png"),
    ("Discovery+", "./images/platforms/discovery+.png"),
    ("Disney+", "./images/platforms/disney+.png"),
    ("Infinity", "./images/platforms/infinity.png"),
    ("Netflix", "./images/platforms/netflix.png"),
    ("Unknown", "./images/platforms/noPlat.png"),
    ("Now TV", "./images/platforms/nowTv.png"),
    ("Pluto TV", "./images/platforms/plutoTv.png"),
    ("Rai PLay", "./images/platforms/raiPlay.png"),
    ("Sky", "./images/platforms/sky.png"),
    ("Tim Vision", "./images/platforms/timVision.png"),
    ("VVVVID", "./images/platforms/vvvvid.png");
