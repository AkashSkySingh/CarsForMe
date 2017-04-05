## Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
zip_code        | integer   |

## makes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
make        | string    | not null, unique

## models
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
model       | string    | not null, unique
make_id     | integer   | not null, foreign key (references users), indexed

## trims
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
trims       | string    | not null
model_id    | integer   | not null, foreign key (references users), indexed
year        | integer   | not null
body        | string    | not null
drive       | string    |
transmission| string    |
mpg_city    | integer   |
mpg_hwy     | integer   |
mpg_mixed   | integer   |
engine      | integer   |
cylinders   | integer   |
fuel        | string    |
