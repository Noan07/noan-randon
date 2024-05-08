FROM node:latest AS build
WORKDIR /portfolio

COPY . ./
RUN npm i && npm run build -- --base=/containers/noanrandon-portfolio-noan/

FROM nginx:latest AS server

COPY --from=build /portfolio/build /usr/share/nginx/html