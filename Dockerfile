FROM python:3

LABEL maintainer="Dawn James <dawn.james@ktech.com>"
LABEL description="A Dockerized version of the Zalando tech radar codebase running via Flask."

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
