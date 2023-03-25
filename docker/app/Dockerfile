# We use alpine for a lightweight (less memory) image
FROM node:latest

# Create app directory
WORKDIR /app

# Copy the files that declares the dependencies (in this case using yarn)
COPY package.json ./

# Check if all the files are correct when building
RUN ls -a

# Install the dependencies
RUN yarn install

# Copy all the files into the container to run the app
COPY . .

# Run command to start the process runing a shell command using node
ENTRYPOINT [ "./start.sh" ]

# This is for documentation only, the port muyst be exposed manually or in compose definition.
EXPOSE 3000
