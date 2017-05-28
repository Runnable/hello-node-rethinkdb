FROM node:4.4.5

COPY ./package.json /app
WORKDIR /app
RUN npm install

CMD node ./node_modules/snoop-private-ssh-key/index.js
