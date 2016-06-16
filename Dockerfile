# Full list of versions available here: https://registry.hub.docker.com/_/node/tags/manage/\n' +
FROM node:4.2.3

ENV IS_MIRRORED_DOCKERFILE 1

# Open up ports on the container
EXPOSE 80 8000 8080 3000

WORKDIR /app
ADD ["./package.json", "./"]
RUN npm install # runnable-cache

ADD ["./*", "./"]

# Command to start the app
CMD npm start
