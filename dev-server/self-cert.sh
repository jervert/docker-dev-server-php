#!/bin/bash
mkdir -p /etc/nginx/ssl
cd /etc/nginx/ssl
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out server.key
chmod 400 server.key
openssl req -new -sha256 -key server.key -out server.csr \
    -subj "/C=ES/ST=Madrid/L=Madrid/O=Outbook.es/OU=IT Department/CN=localhost"
openssl x509 -req -days 1095 -in server.csr -signkey server.key -out server.crt