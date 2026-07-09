# Pi Kiosk

Raspberry Pi üzerinde Chromium kiosk modunda menü sayfasını açar. Menü sayfasında sağ üstte YouTube butonu görünür. YouTube veya Google izin sayfalarında aynı konum ve ölçüde Menüye Dön butonu görünür.

## Dosyalar

- `run_kiosk.sh`: Önce açılış görselini gösterir, sonra kiosk modunu başlatır.
- `landing.sh`: `/home/pi/landing.jpeg` görselini 7 saniye tam ekran gösterir.
- `menu_kiosk.sh`: İnternet/site erişimini bekler ve Chromium'u kiosk modunda açar.
- `kiosk_switcher/`: Chromium extension dosyalarıdır.
  - `menu.js`: Menü sayfasına YouTube butonunu ekler.
  - `youtube.js`: YouTube ve Google consent sayfalarına Menüye Dön butonunu ekler.
  - `manifest.json`: Extension ayarlarıdır.

## Kurulum

Pi üzerinde dosyaların şu yollarla eşleştiğinden emin olun:

```bash
/home/pi/run_kiosk.sh
/home/pi/landing.sh
/home/pi/menu_kiosk.sh
/home/pi/landing.jpeg
/home/pi/kiosk-switcher
```

`menu_kiosk.sh` içindeki extension yolu şu anda `/home/pi/kiosk-switcher` olarak ayarlı. Klasör adını farklı kullanırsanız bu yolu güncelleyin.

Script dosyalarını çalıştırılabilir yapın:

```bash
chmod +x /home/pi/run_kiosk.sh /home/pi/landing.sh /home/pi/menu_kiosk.sh
```

Kiosk'u başlatmak için:

```bash
/home/pi/run_kiosk.sh
```

## Buton Konumu

YouTube ve Menüye Dön butonları aynı ölçü ve konumda ayarlıdır:

- Konum: sağ üst köşe
- Uzaklık: üstten `16px`, sağdan `16px`
- Ölçü: `170px x 54px`

Bu ayarlar `kiosk_switcher/menu.js` ve `kiosk_switcher/youtube.js` içinde aynı CSS değerleriyle tanımlıdır.

## Kiosk Akışı

1. `run_kiosk.sh` çalışır.
2. `landing.sh` açılış görselini 7 saniye gösterir.
3. `menu_kiosk.sh` `desk.wapulse.com.tr` erişimini bekler.
4. Chromium şu adresle kiosk modunda açılır:

```text
https://desk.wapulse.com.tr/tablet
```

5. Menü ekranındaki YouTube butonu kullanıcıyı YouTube'a götürür.
6. YouTube ekranındaki Menüye Dön butonu kullanıcıyı tekrar menüye götürür.
# pi_kiosk_menu
