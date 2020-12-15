#!/bin/bash

echo 'configuring db..'

dropdb -U kmsvpqnghijxaf d2te5s9tkt5nm9
createdb -U kmsvpqnghijxaf d2te5s9tkt5nm9

psql -U kmsvpqnghijxaf d2te5s9tkt5nm9 < ../bin/investment.sql

echo 'db configured!'