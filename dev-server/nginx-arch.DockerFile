FROM archlinux:latest
ARG NGINX_PORT
RUN pacman -Syu --noconfirm --needed nginx-mainline
RUN mkdir -p /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/
COPY ./dev-server.conf /etc/nginx/conf.d
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
CMD ["nginx", "-g", "daemon off;"]
EXPOSE ${NGINX_PORT}
