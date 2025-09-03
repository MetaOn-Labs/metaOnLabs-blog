FROM nginx:alpine

# 커스텀 nginx conf 적용 (SPA fallback 포함)
COPY default.conf /etc/nginx/conf.d/default.conf

# 정적 빌드 결과물 복사
COPY ./dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http:/165.194.29.154/ || exit 1
