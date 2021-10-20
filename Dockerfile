FROM fusuf/whatsasena:latest

RUN git clone https://github.com/antrucybersoull/sudumon- /root/sudumon-
WORKDIR /root/sudumon/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
