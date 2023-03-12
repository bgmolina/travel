FROM node:18.14.2-alpine3.17

WORKDIR /app

COPY ["package*.json", "."]

RUN npm install --only=production

COPY [".", "."]

EXPOSE 8080

CMD ["npm", "run", "preview"]
