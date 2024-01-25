# Builder image
FROM node:18-alpine as builder

# Enable usage of pnpm
RUN corepack enable

# Set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY --chown=node:node ./package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# Copy app and build the app
COPY --chown=node:node . ./

# All the above run as root, change their permissions to another user
RUN chown -R node:node /app 

# Update the user to use in following steps
USER node 

CMD ["pnpm", "start"]
