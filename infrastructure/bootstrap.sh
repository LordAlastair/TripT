#!/usr/bin/env bash

# add EPEL repository
rpm -Uvh https://mirror.webtatic.com/yum/el6/latest.rpm

# update and upgrade yum
yum update -y
yum upgrade -y

# update kernel
yum install kernel.x86_64 kernel-devel.x86_64 -y

curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -

yum install nodejs -y
