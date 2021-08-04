FROM node as build-stage
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx as production
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
