FROM node:16

# Setting up the work directory
WORKDIR /frontend

# Installing dependencies
COPY ./package.json /frontend
RUN npm install --force

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start