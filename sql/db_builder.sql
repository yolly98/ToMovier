create database if not exists toMovier_db;
use toMovier_db;

drop table if exists USER;
create table USER(
    user varchar(100) not null,
    passw varchar(100) not null,
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
    urlImage varchar(100) not null,
    primary key(user,id)
)engine=InnoDB default charset=latin1;

INSERT INTO USER
VALUES("Paolo","1234");
INSERT INTO FILM
VALUES("Harry Potter 1","Fantasy","8","Si","Pirata","Si","Film","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("Star Wars 1","Fantascienza","8","Si","DisneyPlus","Si","Film","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("Attack on Titan","Anime","9","Si","AnimeUnity","Si","Serie","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("Inception","Fantascienza","non visto","No","Netflix","Si","Film","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("zootropolis","Animazione","non visto","No","DisneyPlus","Si","Film","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("Scrubs","Commedia","8","Si","AmazonPrime","Si","Serie","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'),
      ("3ciento","Comico","2","No","Pirata","Si","Film","Paolo", 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg')
;

