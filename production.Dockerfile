FROM node:18.14.2-alpine3.17

WORKDIR /app

COPY [".", "."]

RUN npm install --only=production

EXPOSE 8080

CMD ["npm", "run", "preview"]
