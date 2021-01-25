echo 'configuring db..'

createdb -U kmsvpqnghijxaf d2te5s9tkt5nm9

psql -U kmsvpqnghijxaf d2te5s9tkt5nm9 < ./bin/tables.sql

echo 'db configured!'