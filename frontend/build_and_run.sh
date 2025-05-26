#!/bin/bash

echo "=================================="
echo "🔧 Node.js & Yarn 설치"
echo "=================================="

# Node.js 설치 (LTS 최신 버전)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# yarn 설치
corepack enable
corepack prepare yarn@stable --activate

echo "✅ Node: $(node -v)"
echo "✅ Yarn: $(yarn -v)"

echo "=================================="
echo "💡 프론트엔드 빌드"
echo "=================================="

cd "$(dirname "$0")"

rm -rf dist
yarn install
yarn build || { echo "❌ 빌드 실패"; exit 1; }

echo "✅ 빌드 완료"

echo "=================================="
echo "📦 Dockerfile 생성"
echo "=================================="

cat <<EOF > Dockerfile
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
EOF

echo "✅ Dockerfile 생성됨"

echo "=================================="
echo "🐳 Docker 이미지 빌드 및 실행"
echo "=================================="

docker build -t gastro-frontend . || { echo "❌ Docker 이미지 빌드 실패"; exit 1; }

docker rm -f gastro-frontend-container 2>/dev/null
docker run -d -p 80:80 --name gastro-frontend-container gastro-frontend || {
  echo "❌ Docker 컨테이너 실행 실패"; exit 1;
}

echo "🚀 서버 실행 완료! 접속: http://<서버IP 또는 localhost>"
