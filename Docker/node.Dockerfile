FROM node:latest
WORKDIR /usr/src/app
COPY build package* ./
RUN npm ci --only=production
ENTRYPOINT ["node", "index.js"]