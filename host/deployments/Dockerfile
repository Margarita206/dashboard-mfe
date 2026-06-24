# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./

COPY . .

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    yarn install
RUN yarn build

# Stage 2: Nginx
FROM nginx:1.27.2-alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./deployments/nginx-https.conf /etc/nginx/nginx.conf
COPY ./deployments/entrypoint.sh /docker-entrypoint.d/40-entrypoint.sh
# COPY ./deployments/certs/* /etc/nginx/certs/  # Для локального развертывания

RUN chmod +x /docker-entrypoint.d/40-entrypoint.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]