echo "cdck: clean docker"
echo
echo "cdck ~ stopping containers"
docker stop $(docker ps --all -q)
echo "cdck ~ removing containers"
docker rm $(docker ps --all -q)
echo "cdck ~ removing image 'valibackend_webservice'"
echo "cdck ~ finished"
