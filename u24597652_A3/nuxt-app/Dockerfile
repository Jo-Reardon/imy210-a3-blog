# nuxt-app/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy all files
COPY . .

# Build and run
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]