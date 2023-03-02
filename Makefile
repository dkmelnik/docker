start:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build -d
logs.api:
	docker-compose logs -f api
logs.auth:
	docker-compose logs -f auth
logs.frontend:
	docker-compose logs -f frontend

exec.api:
	docker-compose exec api sh