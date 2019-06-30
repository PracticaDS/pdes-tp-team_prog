FROM node:8

# Directory
ARG APP_DIR=app/front

RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install; \
    yarn global add serve

# For production 
# RUN npm install --production

# Copy project files
COPY . .
RUN yarn build

ENV NODE_ENV=production

# Expose running port
EXPOSE 3000

# Run the project
CMD serve -p 3000 -s build