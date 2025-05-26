# nginx 베이스 이미지 사용
FROM nginx:alpine

# dist 폴더를 nginx 기본 경로로 복사
COPY ./dist /usr/share/nginx/html

# 포트 노출 (기본 80)
EXPOSE 80

# nginx 실행 (기본 entrypoint 사용)
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
