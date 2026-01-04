# Use official Nginx image as the base
FROM nginx:alpine

# Copy the public directory contents to the Nginx html folder
COPY public/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
