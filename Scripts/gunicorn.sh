#!/bin/bash

source env/bin/activate

cd /var/lib/jenkins/workspace/Django-CICD/DjangoAPI

python3 manage.py makemigrations
python3 manage.py migrate

echo "Migrations done"

cd /var/lib/jenkins/workspace/Django-CICD

sudo cp -rf gunicorn.socket /etc/systemd/system/
sudo cp -rf gunicorn.service /etc/systemd/system/

echo "$USER"
echo "$PWD"

sudo systemctl daemon-reload
sudo systemctl start gunicorn.socket

echo "Gunicorn has started"

sudo systemctl enable gunicorn

echo "Gunicorn has been enabled"

sudo systemctl restart gunicorn
sudo systemctl status gunicorn
