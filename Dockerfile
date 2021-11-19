FROM 322926992319.dkr.ecr.us-east-1.amazonaws.com/docker/nodejs:10.15-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8080

CMD ["npm", "run", "build"]