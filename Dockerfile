FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY output .
EXPOSE 4200
CMD npm run start
