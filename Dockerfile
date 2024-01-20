FROM node:18-alpine as builder
# Define working dir
WORKDIR /usr/src/app
# Copy package.json
COPY package*.json ./
RUN npm ci
# Copy the rest
COPY ./src tsconfig.json ./
RUN npm run build

# TODO need to include PulseAudio Dependencies?
FROM node:18-alpine as target

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

CMD [ "npm", "run", "start" ]
