create database if not exists toMovier_db;
use toMovier_db;

drop table if exists USER;
create table USER(
    user varchar(100) not null,
    passw varchar not null,
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
    urlImage varchar not null,
    unique(user, name),
    primary key(id)
)engine=InnoDB default charset=latin1;


INSERT INTO FILM
VALUES(0, "Harry Potter 1","Fantasy","8","true","Pirata","watching","true","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "Star Wars 1","Fantascienza","8","true","DisneyPlus","watched","true","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "Attack on Titan","Anime","9","true","AnimeUnity","watched","false","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "Inception","Fantascienza","non visto","false","Netflix","towatch","true","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "zootropolis","Animazione","non visto","false","DisneyPlus","towatch","true","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "Scrubs","Commedia","8","true","AmazonPrime","watched","false","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      (0, "3ciento","Comico","2","false","Pirata","watching","true","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg')
;

