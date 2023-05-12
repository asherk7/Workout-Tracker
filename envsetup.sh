#!/bin/bash

if [ -d "env" ]
then
    echo "Python virtual env exists"
else
    pip install virtualenv
    virtualenv env
fi

env\Scripts\activate

pip3 install -r requirements.txt

if [ -d "logs" ]
then
    echo "Log folder exists"
else
    mkdir logs
    touch logs/error.log logs/access.log
fi

cacls logs /g everyone:f
echo "envsetup is finished"