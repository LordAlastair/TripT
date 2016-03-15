FROM node:slim
ADD . /server
WORKDIR /server

RUN npm install

RUN node migrations/sync.js
RUN npm run seed

EXPOSE 3000

RUN npm start
