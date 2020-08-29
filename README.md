# tasks-api

Start the server
~~~
// start postgres
docker run --name postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=tasks -p 5432:5432  -d postgres

// start the api
npm start
~~~

Deal with postgres in a docker
~~~
docker logs postgres

docker container stop postgres

docker container rm postgres
~~~
