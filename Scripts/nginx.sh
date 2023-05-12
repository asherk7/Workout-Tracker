#!/bin/bash

sudo cp -rf DjangoAPI.conf /etc/nginx/sites-available/DjangoAPI
chmod 710 /var/lib/jenkins/workspace/Django-CICD
sudo ln -s /etc/nginx/sites-available/DjangoAPI /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl start nginx
sudo systemctl enable nginx

echo "Nginx is running"

sudo systemctl status nginx