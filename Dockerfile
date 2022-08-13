FROM nginx:stable-alpine

COPY dist/ /usr/share/nginx/html
COPY ngnix.conf.template /etc/nginx/conf.d/default.conf.template
WORKDIR /root
COPY run_nginx.sh .
RUN chmod +x run_nginx.sh

CMD ["/root/run_nginx.sh"]
