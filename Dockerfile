FROM node:10
# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3000
CMD npm start