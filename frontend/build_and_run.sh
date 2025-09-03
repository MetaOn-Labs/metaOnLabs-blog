#!/bin/bash

echo "=================================="
echo "🔧 Node.js & Yarn 설치"
echo "=================================="

# Node.js 설치 (LTS 최신 버전)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# yarn 설치 (선택)
corepack enable || true
corepack prepare yarn@stable --activate || true

echo "✅ Node: $(node -v)"
echo "✅ Yarn: $(yarn -v)"

echo "=================================="
echo "💡 프론트엔드 빌드"
echo "=================================="

cd "$(dirname "$0")"

rm -rf ./dist
rm -rf ./node_modules
npm install
npm run build || { echo "❌ 빌드 실패"; exit 1; }

echo "✅ 빌드 완료"

echo "=================================="
echo "📝 Nginx 설정(default.conf) 생성"
echo "=================================="

cat <<'CONF' > default.conf
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name metaonlab.co.kr www.metaonlab.co.kr;

    root /usr/share/nginx/html;
    index index.html;

    # ★ SPA history fallback: /team, /notice/... 도 index.html로 전달
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 정적 자산 캐시(선택)
    location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|map)$ {
        try_files $uri =404;
        access_log off;
        expires 7d;
    }
}
CONF

echo "✅ default.conf 생성됨"

echo "=================================="
echo "📦 Dockerfile 생성"
echo "=================================="

cat <<'EOF' > Dockerfile
FROM nginx:alpine

# 커스텀 nginx conf 적용 (SPA fallback 포함)
COPY default.conf /etc/nginx/conf.d/default.conf

# 정적 빌드 결과물 복사
COPY ./dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http:/165.194.29.154/ || exit 1
EOF

echo "✅ Dockerfile 생성됨"

echo "=================================="
echo "🐳 Docker 이미지 빌드 및 실행"
echo "=================================="

docker build -t metaon-frontend . || { echo "❌ Docker 이미지 빌드 실패"; exit 1; }

docker rm -f metaon-frontend-container 2>/dev/null
# 필요하면 -p 8080:80 로 바꾸세요 (호스트 80 충돌 회피)
docker run -d -p 80:80 --name metaon-frontend-container metaon-frontend || {
  echo "❌ Docker 컨테이너 실행 실패"; exit 1;
}

echo "🚀 서버 실행 완료! 접속: http://165.194.29.154"
