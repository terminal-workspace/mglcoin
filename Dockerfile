

# build frontend
FROM node:16.16.0 as frontend
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# build backend
FROM node:16.16.0 as backend
WORKDIR /app/backend
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend .

RUN apt update && apt install -y nginx 
RUN apt install -y systemd
RUN systemctl enable nginx

EXPOSE 80

CMD ["npm","start", "&&", "systemctl", "start", "nginx"]

