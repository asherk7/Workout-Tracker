#!/bin/bash

env/Scripts/activate

cd C:/Users/mashe/.jenkins/workspace/Django-CICD/DjangoAPI

python3 manage.py makemigrations
python3 manage.py migrate

echo "Migrations done"

cd C:/Users/mashe/.jenkins/workspace/Django-CICD

cp -rf gunicorn.socket /etc/systemd/system/
cp -rf gunicorn.service /etc/systemd/system/

echo "$USER"
echo "$PWD"

systemctl daemon-reload
systemctl start gunicorn.socket
systemctl enable gunicorn

echo "Gunicorn has started"

systemctl restart gunicorn
systemctl status gunicorn
