FROM centos
RUN yum install -y httpd
ADD ./index.html /var/www/html/
EXPOSE 80
CMD ["/sbin/httpd","-D","FOREGROUND"]
# CMD /sbin/httpd
