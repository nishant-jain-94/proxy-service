FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/proxy-service
WORKDIR /usr/src/proxy-service

# Install app dependencies
COPY package.json /usr/src/proxy-service
RUN npm install

# Bundle app source
COPY . /usr/src/proxy-service

CMD [ "node", "app.js" ]
		
