FROM archlinux:latest
RUN pacman-key --init
RUN pacman -Syu --noconfirm --needed composer
WORKDIR /app
CMD ["composer", "update"]
