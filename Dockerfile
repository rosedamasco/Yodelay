FROM node:10.16.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]