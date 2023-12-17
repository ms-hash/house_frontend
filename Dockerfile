FROM node:20.10.0

RUN yarn install
COPY . /frontend
WORKDIR /frontend
EXPOSE 5173

CMD [ "yarn", "dev" ]
