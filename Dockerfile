FROM mhart/alpine-node:8.0.0

RUN apk add --no-cache make gcc g++ python bash bzr git subversion openssh-client ca-certificates
ARG APP_DIR
ENV APP_DIR=/vue-frontend


# Install dependecies
COPY package.json /vue-frontend/package.json
WORKDIR /vue-frontend


RUN npm install
RUN npm rebuild node-sass

ADD . /vue-frontend/

EXPOSE 8080
