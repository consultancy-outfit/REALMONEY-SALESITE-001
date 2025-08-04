FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm i -f 
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
