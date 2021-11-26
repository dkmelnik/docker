# docker
***
1) Создаем файл docker-compose.yml

**Dockerfile** - отвечает за процессы билда образа
Образ - образ линукса, с которого создем контейнер

**docker-compose** - инструмент, который позволяет
нам запустить множество контейнеров докера.

**docker-compose.yml** - файл в котором мы 
пишем нашу конфигурацию

**Dockerhub** - hub.docker.com - можно скачать или запушить существующие образы

**docker-alpine** - минимизирует образ, выризает все лишнее из линукса 

https://docs.docker.com/compose/compose-file/compose-file-v3/#restart - ссылка на описание полей docker-compose 

## Docker-compose.yml

```docker-compose.yml
version: '3' # версия docker-compose

#описываем все сервисы, которые docker-compose
#должен сбилдить и запустить 

services:
  api:
    build: ./api # ищем тут dockerfile
    command: npm run start # запускаем после того как сбилдился образ
    restart: unless-stopped # если контейнер упал, docker-compose пробует заново его запустить
    ports:
      - "3000:3000" # "порт нашей машины:порт конейнера"
```