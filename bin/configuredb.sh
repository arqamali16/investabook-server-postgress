#!/bin/bash

echo 'configuring db..'

dropdb -U arqamali investmentdb
createdb -U arqamali investmentdb

psql -U arqamali investmentdb < ./bin/investment.sql

echo 'db configured!'