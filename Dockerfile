FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/crm

COPY ./requirenments.txt /usr/src/requirenments.txt
RUN pip install -r /usr/src/requirenments.txt

COPY . /usr/src/crm

EXPOSE 8000