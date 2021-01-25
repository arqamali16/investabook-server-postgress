#!/bin/bash

echo 'configuring db..'
PGPASSWORD=bec95e5246bf7cff092fb2d623f6aadddccce2c22539cb13bfbe19ea24b8e529 psql --host=ec2-35-169-184-61.compute-1.amazonaws.com --user=kmsvpqnghijxaf  d2te5s9tkt5nm9 < ./bin/tables.sql
echo 'db configured!'