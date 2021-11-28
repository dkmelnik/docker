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

[ ссылка на описание полей docker-compose ](https://docs.docker.com/compose/compose-file/compose-file-v3/#restart "docker-compose restart")

[ Тома - это предпочтительный механизм для хранения данных, созданных и используемых контейнерами Docker")](https://docs.docker.com/storage/volumes/ "docker volume")

``docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build``

берем docker-compose.yml и переписываем смежными полями из docker-compose.development.yml

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
    environment: # переменные окружения, которые будут видны нашему приложению
      - PORT=3000
      - HOST=http://docker-test.com
      - MONGO_URL=mongodb://api_db:27017/api
    depends_on: # указываем какой сервис должен собраться перед данным
      - api_db
  
   api_db:
    image: mongo:latest # образ который берется с hub.docker.com, под копотом тот же dockerfile который конфигурирует сервис
    volumes: #   Тома - это предпочтительный механизм для хранения данных, созданных и используемых контейнерами Docker
      - mongodb_api:/data/db # обычно данные на линукс из mongo, хранятся по этому пути, мы будем брать их оттуда и прокидывать в контейнер

volumes:
  mongodb_api:

```