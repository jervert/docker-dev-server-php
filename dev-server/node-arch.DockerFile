FROM archlinux:latest
RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node
RUN pacman -Syu --noconfirm --needed nodejs npm
CMD ["node"]
