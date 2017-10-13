FROM ubuntu:16.04

RUN apt-get update && apt-get -y install wget git && git clone https://github.com/elmsln/elmsln.git /var/www/elmsln && cd /var/www/elmsln && git checkout master && bash /var/www/elmsln/scripts/install/handsfree/ubuntu16/ubuntu16-install.sh elmsln ln elmsln.dev http mgp140@gmail.com yes
