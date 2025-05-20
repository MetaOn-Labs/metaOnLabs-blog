#!/bin/bash

echo "=================================="
echo "💡 1. 프론트엔드 빌드 시작"
echo "=================================="
cd "$(dirname "$0")"

# dist 제거 후 빌드
rm -rf dist
yarn install
yarn build || { echo "❌ 빌드 실패"; exit 1; }

echo "✅ 빌드 완료"

echo "=================================="
echo "📦 2. Dockerfile 생성"
echo "=================================="

cat <<EOF > Dockerfile
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
EOF

echo "✅ Dockerfile 생성됨"

echo "=================================="
echo "🐳 3. Docker 이미지 빌드 및 실행"
echo "=================================="

docker build -t gastro-frontend . || { echo "❌ Docker 이미지 빌드 실패"; exit 1; }

# 기존 컨테이너 중지 및 제거
docker rm -f gastro-frontend-container 2>/dev/null

docker run -d -p 80:80 --name gastro-frontend-container gastro-frontend || {
  echo "❌ Docker 컨테이너 실행 실패"; exit 1;
}

echo "🚀 서버 실행 완료! 접속: http://<서버IP>"
