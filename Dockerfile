FROM node:latest AS build
WORKDIR /portfolio-noan
ENV PUBLIC_URL="/containers/noanrandon-portfolio/"

ADD . .
RUN npm i && npm run build

FROM nginx:latest AS server

COPY --from=build /portfolio-noan/build /usr/share/nginx/html