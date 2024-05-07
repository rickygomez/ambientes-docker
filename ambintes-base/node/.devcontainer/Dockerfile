# Use an official PHP Apache runtime
ARG NODEJS_VERSION=20

FROM node:${NODEJS_VERSION}-slim

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]