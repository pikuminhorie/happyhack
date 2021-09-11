//bgslider試し サイト↓
//https://www.progstudy-trace.com/entry/jquerybgswitcher/
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
    images: ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/background4.jpg','images/background5.jpg'], // 切り替える背景画像
    interval: 5000, // 背景画像を切り替える間隔 1000=1秒
    loop: true, // 切り替えを繰り返すか true=繰り返す　false=繰り返さない
    shuffle: true, // 背景画像の順番をシャッフルするか true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間 1000=1秒
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
    });

$('.slider').slick();