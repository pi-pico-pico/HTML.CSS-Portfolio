FROM centos
MAINTAINER pico <pico.pco.code@gmail.com>
# RUN echo "Now Building………"
# CMD ["echo", "Now Running………"]
RUN yum install -y httpd
ADD ./index.html /var/www/html/
EXPOSE 80
CMD ["/sbin/httpd","-D","FOREGROUND"]
# CMD /sbin/httpd
