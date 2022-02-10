install:
	npm install
docker:
	docker-compose up -d --build
npx:
	npm install -g npx
migrate:
	npx sequelize-cli db:migrate
	