FROM node:11-alpine

# Directory
ARG APP_DIR=app/front

RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install;

# Copy project files
COPY . .
RUN yarn build

ENV NODE_ENV=production

# Expose running port
EXPOSE 3000

# Run the project
CMD npm run serve
