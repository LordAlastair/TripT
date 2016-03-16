FROM node:slim

ADD . /server
WORKDIR /server

RUN npm install
RUN npm run migrate
RUN npm run seed
