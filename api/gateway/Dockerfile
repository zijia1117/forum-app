FROM  node:slim
WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

CMD [ "yarn", "start" ]
# CMD [ "ls", "/app" ]
