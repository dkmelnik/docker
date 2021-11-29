FROM node:16.13.0-alpine

WORKDIR /usr/src/app/src

COPY package*.json ./

RUN npm install

COPY . .
