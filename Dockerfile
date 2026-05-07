FROM node:25
WORKDIR /calculator
COPY index.html .
COPY style.css .
COPY script.js .
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]