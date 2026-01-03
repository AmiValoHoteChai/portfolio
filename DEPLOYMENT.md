# Portfolio Deployment Guide

Deploy your portfolio to Ubuntu server using Docker + Portainer + Nginx Proxy Manager.

---

## Prerequisites

- ✅ Ubuntu server with Docker installed
- ✅ Portainer WebUI accessible
- ✅ Nginx Proxy Manager (NPM) configured
- ✅ Domain name pointing to your server

---

## Step 1: Prepare Project Files

Ensure your project has these Docker files:

```
personal-site/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── (all your HTML/CSS/JS files)
```

---

## Step 2: Create Dockerfile

```dockerfile
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
```

---

## Step 3: Create nginx.conf

```nginx
# nginx.conf
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1000;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Cache static assets
        location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Handle SPA routing - serve index.html for unknown routes
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Custom 404 page
        error_page 404 /404.html;
        location = /404.html {
            internal;
        }
    }
}
```

---

## Step 4: Create docker-compose.yml

```yaml
# docker-compose.yml
version: '3.8'

services:
  portfolio:
    build: .
    container_name: zunait-portfolio
    restart: unless-stopped
    ports:
      - "8080:80"  # Change 8080 if needed
    networks:
      - web

networks:
  web:
    external: true  # Use your existing network
```

> [!NOTE]
> Change `8080` to any available port on your server.
> The `web` network should match your NPM network name.

---

## Step 5: Upload to Server

### Option A: Using Git (Recommended)

```bash
# On your local machine
cd personal-site
git init
git add .
git commit -m "Portfolio ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

```bash
# On your server
cd /opt/stacks  # or your preferred directory
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### Option B: Using SCP

```bash
# On your local machine (PowerShell)
scp -r "C:\Users\Hy\Desktop\pet project\personal-site\*" user@your-server:/opt/stacks/portfolio/
```

---

## Step 6: Deploy via Portainer

### 6.1 Open Portainer
Navigate to your Portainer WebUI (e.g., `https://portainer.yourdomain.com`)

### 6.2 Create Stack
1. Go to **Stacks** → **Add Stack**
2. Name: `zunait-portfolio`
3. Build method: **Upload** or **Repository**

### If using Repository:
- Repository URL: `https://github.com/YOUR_USERNAME/portfolio`
- Compose path: `docker-compose.yml`

### If using Upload:
- Upload your `docker-compose.yml`
- Make sure all files are in the stack directory

### 6.3 Deploy
Click **Deploy the stack**

### 6.4 Verify Container
- Go to **Containers**
- Find `zunait-portfolio`
- Status should be **running**
- Click to see logs if needed

---

## Step 7: Configure Nginx Proxy Manager

### 7.1 Open NPM Dashboard
Navigate to your NPM admin panel

### 7.2 Add Proxy Host
1. Click **Proxy Hosts** → **Add Proxy Host**

2. **Details Tab:**
   | Field | Value |
   |-------|-------|
   | Domain Names | `yourdomain.com`, `www.yourdomain.com` |
   | Scheme | `http` |
   | Forward Hostname/IP | `zunait-portfolio` (container name) |
   | Forward Port | `80` |
   | Block Common Exploits | ✅ |
   | Websockets Support | ❌ |

3. **SSL Tab:**
   | Field | Value |
   |-------|-------|
   | SSL Certificate | Request a new SSL Certificate |
   | Force SSL | ✅ |
   | HTTP/2 Support | ✅ |
   | HSTS Enabled | ✅ |
   | Email | your-email@example.com |
   | Agree to TOS | ✅ |

4. Click **Save**

---

## Step 8: Verify Deployment

### Check in Browser
```
https://yourdomain.com
```

### Expected Results
- ✅ Portfolio loads with HTTPS
- ✅ All sections visible
- ✅ Theme switching works
- ✅ Project links work
- ✅ 404 page shows for invalid URLs

---

## Updating Your Portfolio

### After making changes:

```bash
# On your server
cd /opt/stacks/portfolio
git pull origin main

# Rebuild container
docker-compose down
docker-compose up -d --build
```

### Or via Portainer:
1. Go to your stack
2. Click **Pull and redeploy**

---

## Troubleshooting

### Container won't start
```bash
docker logs zunait-portfolio
```

### 502 Bad Gateway in NPM
- Check container is running: `docker ps`
- Verify network: container and NPM must share a network
- Check container name matches NPM hostname

### CSS/JS not loading
- Clear browser cache
- Check nginx.conf mime types
- Verify file paths in HTML

### SSL Certificate fails
- Ensure domain DNS points to server
- Port 80 must be accessible for ACME challenge
- Check NPM logs for errors

---

## Quick Commands Reference

```bash
# View running containers
docker ps

# View container logs
docker logs zunait-portfolio

# Restart container
docker restart zunait-portfolio

# Rebuild and restart
docker-compose up -d --build

# Stop and remove
docker-compose down

# Check disk usage
docker system df
```

---

## Network Configuration

If you need to create the `web` network:

```bash
docker network create web
```

Then connect NPM to it:
```bash
docker network connect web nginx-proxy-manager
```

---

## Security Checklist

- [x] HTTPS enabled via Let's Encrypt
- [x] HTTP redirects to HTTPS
- [x] HSTS enabled
- [x] Gzip compression on
- [x] Static asset caching
- [x] No sensitive files exposed
- [x] Container runs as non-root (nginx:alpine default)

---

**Your portfolio is now live! 🎉**
