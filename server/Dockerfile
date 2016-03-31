FROM alpine:3.3
RUN apk add --update --no-cache nodejs python make gcc
RUN mkdir /server
WORKDIR /server
COPY . /server
RUN npm install
