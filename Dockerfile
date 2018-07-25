FROM node:latest

MAINTAINER Byul <seyul3@gmail.com>

RUN mkdir -p /data/app
WORKDIR /data/app
ADD ./app /data/app
RUN npm install

ENV NODE_ENV development

EXPOSE 3000

CMD ["npm", "start"]
