# DBSDesign

Data Base Schema Design

# Migrations

Migrations record changes to the Data base overtime

# Commonly used migration commands:

\****dont need npx if globaly installed***\*

-npx knex migrate:make "Name" <--- creates a new migration file
-npx knex migrate:latest <---- run pending migrations to update the database
-npx knex migrate:rollback <-- reverses the lates migration

# Track Foods

-- Menu_Items table
-id: primary key, unsigned (non negative numbers)
-name: string (required,unique,make serching by name fast )
-price: (Dloating point, not required )
-availability : boolean, default to false.

# clients table

-id: pk, uuid, string,
-email: string , unique, indexed
-name: string, indexed

> EVERY CHANGE TO THE DATABASE SCHEMA (STRUCTURE) SHOULD BE DONE WITH A NEW MIGRATION
