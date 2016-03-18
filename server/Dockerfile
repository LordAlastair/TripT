FROM alpine:3.3

RUN apk add --update --no-cache nodejs

ADD . /server
WORKDIR /server

RUN npm install

