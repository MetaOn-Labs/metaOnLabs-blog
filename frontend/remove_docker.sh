#!/bin/bash

echo
echo "========================="
echo "docker를 정지합니다."
echo "========================="
docker stop $(docker ps -a -q)

echo
echo "========================="
echo "docker Container를 제거합니다."
echo "========================="
docker rm $(docker ps -a -q)

echo
echo "========================="
echo "docker image를 삭제합니다."
echo "========================="
docker rmi $(docker images -q)

echo
echo "========================="
echo "docker 네트워크를 삭제합니다."
echo "========================="
# 커스텀 네트워크를 제거 (기본 네트워크는 삭제되지 않음)
docker network rm $(docker network ls -q)

echo
echo "========================="
echo "docker 볼륨을 삭제합니다."
echo "========================="
# 사용되지 않는 모든 볼륨을 삭제
docker volume rm $(docker volume ls -q)

echo
echo "========================="
echo "Docker 시스템을 정리합니다."
echo "========================="
# 남은 리소스 및 캐시 데이터 정리
docker system prune -a --volumes -f
