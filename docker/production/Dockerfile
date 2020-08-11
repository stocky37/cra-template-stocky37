FROM registry.access.redhat.com/ubi8/nodejs-12 as build
COPY package.json package-lock.json ./
RUN npm clean-install --production
COPY . ./
RUN npm run build
RUN ls -la

FROM nginx:alpine
COPY --from=build /opt/app-root/src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
