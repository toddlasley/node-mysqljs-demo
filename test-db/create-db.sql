drop database if exists test_db;
create database test_db character set utf8 collate utf8_bin;
drop user if exists 'testuser'@'localhost';
create user 'testuser'@'localhost' identified by 'test';

GRANT ALL PRIVILEGES ON *.* TO 'testuser'@'localhost' WITH GRANT OPTION;

create table test_db.foo(foo_id tinyint(40) unsigned primary key not null,
    foo_name varchar(25));

insert into test_db.foo values (1, 'abc');
insert into test_db.foo values (2, 'def');
insert into test_db.foo values (3, 'ghi');