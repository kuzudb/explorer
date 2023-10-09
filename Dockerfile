FROM ubuntu:22.04

# Install dependencies
RUN apt-get update
RUN apt-get install -y openjdk-17-jdk ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update
RUN apt-get install -y nodejs

# Create app user
RUN useradd --create-home appuser

# Copy app
COPY . /home/appuser/app
RUN chown -R appuser:appuser /home/appuser/app

# Make data and database directories
RUN mkdir -p /database
RUN mkdir -p /data
RUN chown -R appuser:appuser /database
RUN chown -R appuser:appuser /data

# Switch to app user
USER appuser

# Set working directory
WORKDIR /home/appuser/app

# Install dependencies
RUN npm install

# Generate grammar
RUN npm run generate-grammar-prod

# Build app
RUN npm run build

# Expose port
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8000
ENV KUZU_PATH=/database

# Run app
ENTRYPOINT ["node", "src/server/index.js"]
