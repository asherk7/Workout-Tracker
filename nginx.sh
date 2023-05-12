#!/bin/bash

sudo cp -rf DjangoAPI.conf /etc/nginx/conf.d
chmod 710 /var/lib/jenkins/workspace/Django-CICD

sudo nginx -t

sudo systemctl start nginx
sudo systemctl enable nginx

echo "Nginx is running"

sudo systemctl status nginx