FROM node:argon
RUN mkdir /server
WORKDIR /server
COPY . /server
RUN npm install
ENV NODE_ENV production
EXPOSE 3000
RUN npm
