#!/bin/bash
pkill -f chromium; sleep 1
until ping -c1 -W2 desk.wapulse.com.tr >/dev/null 2>&1; do sleep 2; done
exec /usr/bin/chromium --kiosk --noerrdialogs --disable-infobars --disable-session-crashed-bubble \
  --touch-events=enabled --load-extension=/home/pi/kiosk-switcher \
  "https://desk.wapulse.com.tr/tablet"