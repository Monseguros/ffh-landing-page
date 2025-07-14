# Etapa 1: Build do app com Vite
FROM node:20.19.1-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Etapa 2: Servindo com NGINX
FROM nginx:stable-alpine

# Usa pasta correta para Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Substitui configuração padrão do NGINX
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]