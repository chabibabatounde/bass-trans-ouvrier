git pull
pm2 stop basstrans_9002
pm2 start app.js -n basstrans_9002 -l log.json --log-type json -- --port 9002
pm2 reload basstrans_9002
pm2 restart basstrans_9002