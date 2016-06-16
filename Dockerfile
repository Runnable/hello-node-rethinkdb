# Full list of versions available here: https://registry.hub.docker.com/_/node/tags/manage/\n' +
FROM node:4.2.3

WORKDIR /app
COPY ["./package.json", "./"]
RUN npm install # runnable-cache

COPY ["./", "./"]

ENV IS_MIRRORED_DOCKERFILE 1

# Open up ports on the container
EXPOSE 80 8000 8080 3000

# Command to start the app
CMD npm start
