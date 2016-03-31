FROM alpine:3.3
RUN apk add --update --no-cache nodejs python make g++
RUN npm config set registry http://registry.npmjs.org/
RUN mkdir /server
WORKDIR /server
COPY . /server
RUN npm install
