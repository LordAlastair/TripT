FROM alpine:3.3
RUN apk add --update --no-cache nodejs
RUN npm config set registry http://registry.npmjs.org/
VOLUME /server
WORKDIR /server
