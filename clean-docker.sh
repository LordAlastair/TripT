docker stop $(docker ps --all -q)
docker rm $(docker ps --all -q)
docker rmi vagalivrebackend_webservice
