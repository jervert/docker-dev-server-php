FROM photon:latest
RUN tdnf -y install shadow
RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node
RUN tdnf -y install nodejs
CMD ["node"]
