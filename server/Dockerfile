FROM node:slim

RUN mkdir /server
ADD . /server

WORKDIR /server

RUN npm install

RUN node migrations/sync.js
RUN npm run seed

EXPOSE 3000
