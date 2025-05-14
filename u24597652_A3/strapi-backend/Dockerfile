# strapi-app/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy all other files
COPY . .

# Open port and run
EXPOSE 1337
CMD ["npm", "run", "develop"]