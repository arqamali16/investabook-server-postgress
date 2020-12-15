#!/bin/bash

echo 'configuring db..'

psql -U kmsvpqnghijxaf d2te5s9tkt5nm9 < ./bin/investment.sql

echo 'db configured!'