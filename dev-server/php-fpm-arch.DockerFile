FROM archlinux:latest
RUN pacman-key --init
RUN pacman -Syu --noconfirm --needed php-fpm
RUN sed -i 's,;daemonize = yes,daemonize = no,g' /etc/php/php-fpm.conf
RUN sed -i 's,display_errors = Off,display_errors = On,g' /etc/php/php.ini
RUN sed -i 's,;extension=pdo_mysql,extension=pdo_mysql,g' /etc/php/php.ini
RUN sed -i 's,listen = /run/php-fpm/php-fpm.sock,listen = 9000,g' /etc/php/php-fpm.d/www.conf
COPY ./php-custom.sh /tmp/php-custom.sh
RUN sed -i -e 's/\r$//' /tmp/php-custom.sh
RUN chmod +x /tmp/php-custom.sh
RUN /tmp/php-custom.sh
CMD ["php-fpm","--nodaemonize"]
EXPOSE 9000