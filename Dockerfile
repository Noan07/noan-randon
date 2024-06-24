FROM node:latest AS build
WORKDIR /portfolio-noan

ADD . .
RUN npm i && npm run build -- --base=/containers/noanrandon-portfolio-noan/

FROM nginx:latest AS server

COPY --from=build /portfolio-noan/build /usr/share/nginx/html