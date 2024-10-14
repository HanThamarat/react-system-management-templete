# In this project is a System Management Templete and Content Management System Templete

Feature
- authenticate using passport
- UX/UI

Front-End

```
📦 framwork
 ┗ vite + react
📦 lib
 ┣ state management in react
 ┃  ┣ redux 
 ┃  ┣ react-redux 
 ┃  ┗ redux-thunk
 ┣ axios -> http and https req
 ┗ react-router-dom -> manage route in project
📦 css framwork and lib style
 ┣ tailwindcss
 ┣ material tailwindcss
 ┗ mui
    ┣ material UI
    ┗ Data Grid

``` 

Back-End

```
📦 runtime
 ┗ nodejs
📦 lib
 ┣ nodemon -> automatic restarting
 ┣ express -> api server
 ┣ passport.js -> auth
 ┣ cors -> http and https middleware
 ┣ prisma -> database orm
 ┣ jwt -> jsonwebtoken
 ┣ redis -> client cache in memory
 ┣ pgsql -> pg database
 ┗ mssql -> connect database on promise
``` 

# Quick start

When Clone this project after give your cd to path of project and used
```
docker compose up

or

using container run is a background on os
docker compose up -d --build
```

When container run used ssh to container also migrate database
```
is a using ssh connect to container
docker exec -it <container name or container id> sh
```

When connect to container success and used
```
npx prisma migrate dev --name <migrate name>
```

endpoint of all services in docker compose
```
fontend -> 127.0.0.1:4000
backend -> 127.0.0.1:3000
redis gui -> 127.0.0.1:8001
redis cli -> 127.0.0.1:6379
pg database -> 127.0.0.1:5432
```



