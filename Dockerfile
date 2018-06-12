# build stage
FROM node AS build-env
ADD . /pgurl-fe
WORKDIR /pgurl-fe

# Get package
RUN yarn

# Build
RUN yarn build

# final stage
FROM nginx
COPY --from=build-env /pgurl-fe/build/ /usr/share/nginx/html
