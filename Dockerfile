FROM node:12-slim as BUILDER
LABEL maintainer="Miguel Miranda"

WORKDIR  /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:12-alpine

ARG NODE_ENV

WORKDIR  /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 9999

CMD ["npm", "start"]