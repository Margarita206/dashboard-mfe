#!/bin/sh
echo "Используемый IP : ${VITE_MFE_SOURCES_IP}"

# Замена placeholder в JavaScript файлах
if [ -n "${VITE_MFE_SOURCES_IP}" ]; then
  find /usr/share/nginx/html -type f \( -name "*.js" -o -name "*.html" \) -exec sed -i "s|__VITE_MFE_SOURCES_IP__|${VITE_MFE_SOURCES_IP}|g" {} \;
fi

# Запускаем Nginx
exec "$@"