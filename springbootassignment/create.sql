create sequence hibernate_sequence start with 1 increment by 1
create table role (role_id integer not null, role varchar(255), primary key (role_id))
create table user (user_id integer not null, active integer, email varchar(255), last_name varchar(255), name varchar(255), password varchar(255), primary key (user_id))
create table user_role (user_id integer not null, role_id integer not null, primary key (user_id, role_id))
alter table user_role add constraint FKa68196081fvovjhkek5m97n3y foreign key (role_id) references role
alter table user_role add constraint FK859n2jvi8ivhui0rl0esws6o foreign key (user_id) references user
create sequence hibernate_sequence start with 1 increment by 1
create table role (role_id integer not null, role varchar(255), primary key (role_id))
create table user (user_id integer not null, active integer, email varchar(255), last_name varchar(255), name varchar(255), password varchar(255), primary key (user_id))
create table user_role (user_id integer not null, role_id integer not null, primary key (user_id, role_id))
alter table user_role add constraint FKa68196081fvovjhkek5m97n3y foreign key (role_id) references role
alter table user_role add constraint FK859n2jvi8ivhui0rl0esws6o foreign key (user_id) references user
