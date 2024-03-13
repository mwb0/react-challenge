FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install

ARG ENVFILE_DEPLOYMENT=local
COPY . .
COPY ${ENVFILE_DEPLOYMENT} ./.env
EXPOSE 3000

CMD ["npm", "start"]