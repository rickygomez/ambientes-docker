# Use an official PHP Apache runtime
ARG NODEJS_VERSION=20

FROM node:${NODEJS_VERSION}-slim

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]