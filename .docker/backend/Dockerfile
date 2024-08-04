FROM python:3

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3-dev default-libmysqlclient-dev build-essential libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY backend /usr/src/app

RUN pip3 install --upgrade pip
RUN pip3 install mysql-connector-python python-dotenv Django django-rest-framework requests drf-yasg mysqlclient

RUN mkdir -p "/usr/src/app/static"
RUN mkdir -p "/usr/src/app/media"
RUN mkdir -p "/usr/src/app/var/log"

COPY .docker/backend/entrypoint.sh /usr/src/app/entrypoint.sh

RUN chmod 775 /usr/src/app/entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]