FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
COPY ./package-lock.json ./
# RUN npm install -g npm@8.3.1
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

