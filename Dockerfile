FROM node:13.0.1
# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3000
CMD npm start