FROM node:16

COPY . .

RUN ls -a

RUN npm install

RUN npm run build

COPY . .

RUN ls -a

RUN pwd

EXPOSE 3000

CMD [ "node", "dist/main.js" ]