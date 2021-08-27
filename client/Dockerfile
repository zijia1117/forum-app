FROM --platform=arm64 node:slim
WORKDIR /app/

# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /app/

# EXPOSE 3000
CMD [ "yarn", "start" ]
# CMD [ "executable" ]
