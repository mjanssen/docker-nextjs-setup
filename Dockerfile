FROM alpine:3.8

# Install packages
RUN apk add --no-cache nodejs npm

WORKDIR /opt/app

COPY . .

RUN npm i && npm run build

EXPOSE 3000

CMD ["npm", "run",  "next:start"]
