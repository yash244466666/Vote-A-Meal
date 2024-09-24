# Vote-A-Meal
To check Swagger api documentation please goto 
http://127.0.0.1:3000/api
or
http://localhost:3000/api
or
http://your-domain:your-port/api
AFTER STARTING the backend

## Quick Video Guide of the project


[<img src="https://github.com/yashSikdar/vote-a-meal/blob/master/project_home_page.png" width="50%">](https://drive.google.com/file/d/1KkOr8J6GkHNaKh7uaf_R3SUSr5wG_RkR/view?usp=sharing "Now in Android: 55")

https://drive.google.com/file/d/1KkOr8J6GkHNaKh7uaf_R3SUSr5wG_RkR/view?usp=sharing

## Setup your .env file
```bash
## Please ensure 
Please ensure that you have a postgres running on postgres default port 5432
you can you use docker for it or you can have run postgres directly into your mechine.
Please ensure that you are on a linux computer, windows have different file structure
so in case you are on windows, you have to either edit the Dockerfile according to your system
or you can run backend outside docker.
by default admin username: 'yash' and the password:'1234' 
you can edit the seed file located backend/prisma/seed.ts to add or update admin, and make sure you did it before seed.

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

## Please ensure 
Please ensure that you have a postgres running on postgres default port 5432
you can you use docker for it or you can have run postgres directly into your mechine.
Please ensure that you are on a linux computer, windows have different file structure
so in case you are on windows, you have to either edit the Dockerfile according to your system
or you can run backend outside docker.


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

## 👥 Author <a name="author"></a>

👨‍🚀 **Yash**

- GitHub: [Yash](https://github.com/yash244466666) (no longer have access)
- LinkedIn: [Yash](https://www.linkedin.com/in/yash-solo) (no longer have access)
- Twitter: [Yash](https://twitter.com/yash_solo000)(no longer have access)
- Email: info@yashcodes.com (no longer have access)
- Email: yashsikdar81@gmail.com
- Website: https://www.yashcodes.com (no longer have access)
- Phone Number: +8801710008502
- feel free to reach me for any clarification or about any future projects.

## License

Nest is [MIT licensed](https://github.com/yash244466666/vote-a-meal/blob/master/LICENSE).
