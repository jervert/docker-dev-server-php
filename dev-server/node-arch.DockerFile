FROM archlinux:latest
RUN pacman-key --init
RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node
RUN pacman -Syu --noconfirm --needed nodejs-lts-hydrogen npm
CMD ["node"]
