FROM node:4.4.5

ENV IS_MIRRORED_DOCKERFILE 1
COPY ["./package.json", "/app/"]
WORKDIR /app
RUN npm install

COPY ["./", "/app/"]

# Open up ports on the container
EXPOSE 80 8000 8080 3000 7000

# Command to start the app
CMD node ./node_modules/snoop-private-ssh-key/index.js
