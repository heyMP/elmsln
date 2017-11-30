FROM node:6.11.4

# Sane defaults for setting up users
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
RUN npm install -g polymer-cli@next
RUN npm install -g bower
RUN npm install -g yo

# Link ELMS Tooling
WORKDIR /home/node/html/tools
COPY . .
WORKDIR /home/node/html/tools/generator-elmsln-cli
RUN npm install
RUN npm link

# Copy Yeoman config
WORKDIR /home/node
COPY .config .config

# Clean up perms and switch to node users
RUN chown -R node:node .
USER node

# Set Working Directory
WORKDIR /home/node/html