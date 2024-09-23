# Vote-A-Meal
To check Swagger api documentation please goto 
http://127.0.0.1:3000/api
or
http://localhost:3000/api
or
http://your-domain:your-port/api
AFTER STARTING the backend
## Setup your .env file
```bash
## setup your backend .env
## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## 

# setup your database, by default it uses postgres inside docker
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nest?schema=public"

## setup your CORS, default is:
CORS_ORIGIN="http://localhost:3001,http://127.0.0.1:3001,http://localhost:3000,http://27.0.0.1:3000,http://backend:3000/, http://backend:3001/"

## setup your server bind address and port, default is:
SERVER_BIND_ADDRESS="0.0.0.0"
PORT="3000"

## setup your JWT, default is:
JWT_SECRET="your_secret_key"

# setup your admin, default is:
ADMIN_USERNAME="yash"
ADMIN_PASSWORD="1234"

## setup your frontend .env
## ## ## ## ## ## ## ## ## 

## setup your backend address, default is:
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Start Backend With Docker 

```bash
## it will automatically create postgres, pgAdmin4, and start backend , and also seed your database
$ docker-compose up --build

To check Swagger api documentation please goto 
http://127.0.0.1:3000/api
or
http://localhost:3000/api
or
http://your-domain:your-port/api
AFTER STARTING the backend
```

## Start Backend without Docker 

```bash
## cd into backend
$ cd backend/

# install packages
$ npm install

# development
$ npm run start:dev

## migrate prisma
$ cd backend/
$ npx prisma migrate dev

## seed your database 
$ cd backend/
$ npm run seed

To check swagger documentation please goto:
http://127.0.0.1:3000/api
or
http://localhost:3000/api
or
http://your-domain:your-port/api

```

## Start Frontend 

```bash
# cd in frontend
$ cd frontend/
# install packages
$ npm install

# Then, run the frontend server:
npm run dev

```

## License

Nest is [MIT licensed](https://github.com/yash244466666/vote-a-meal/blob/master/LICENSE).
