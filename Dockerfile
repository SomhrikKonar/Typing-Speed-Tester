# Base image, using alpine version to reduce the image size
FROM node:20-alpine as base
# Setting up work directory inside the image
WORKDIR /usr/src/app
# copy the package.json and package-lock.json folder form source to our WORKDIR
COPY  package* .
# intall all the packages
RUN npm install
# copy the other files
COPY . .
# exposing the port 3000
EXPOSE 3000
# command to start the container (React App)
CMD ["npm", "run", "start"]