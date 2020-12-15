#!/bin/bash

echo 'configuring db..'

dropdb -U arqamali d2te5s9tkt5nm9
createdb -U arqamali d2te5s9tkt5nm9

psql -U arqamali d2te5s9tkt5nm9 < ../bin/investment.sql

echo 'db configured!'