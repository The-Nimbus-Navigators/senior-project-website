FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build

FROM docker.io/galenguyer/nginx
WORKDIR /host
COPY --from=build /app/src .
COPY nginx.conf /etc/nginx/nginx.conf