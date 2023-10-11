FROM archlinux:latest
ARG NGINX_PORT
ARG NGINX_PORT_SSL
RUN pacman-key --init
RUN pacman -Syu --noconfirm --needed nginx-mainline openssl
RUN mkdir -p /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/
COPY ./dev-server.conf /etc/nginx/conf.d
COPY ./self-cert.sh /tmp/self-cert.sh
RUN sed -i -e 's/\r$//' /tmp/self-cert.sh
RUN chmod +x /tmp/self-cert.sh
RUN /tmp/self-cert.sh
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
CMD ["nginx", "-g", "daemon off;"]
EXPOSE ${NGINX_PORT}
EXPOSE ${NGINX_PORT_SSL}
