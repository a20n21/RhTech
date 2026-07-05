FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .


FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js ./

RUN npm install --only=production

USER node

EXPOSE 3000
CMD ["node", "server.js"]
