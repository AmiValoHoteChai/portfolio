# Dockerfile
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy website files
COPY . /usr/share/nginx/html

# Remove Docker files from served content
RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose.yml \
    /usr/share/nginx/html/nginx.conf \
    /usr/share/nginx/html/DEPLOYMENT.md

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
