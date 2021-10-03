import customVideoPlayer from './video.js';
import slider from './slider.js'
import comparisons from './comparisons.js';
import modal from './modal.js';
import changeItemGallery from './gallery.js';
import changeIframe from './changeIframe.js';
import showSidepanel from './hamburger.js';

comparisons();
slider();
customVideoPlayer();
modal();
changeItemGallery();
changeIframe();
showSidepanel();

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGlsdWtzIiwiYSI6ImNrdTFxc3ZmODBuazAyb28xcTdtYTZmMGUifQ.oH3L-MEDH588UW1NMgorKg';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/diluks/cku5sv2ux2ws417o5hnw2bhu7'
// });

console.log(`
Ваша оценка - 140 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,  элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом. 
2) слайдера в секции Welcome
3) слайдера сравнения изображений в секции Explore 
4) кастомного видеоплеера в секции Video 
5) слайдера в секции Video 
6) YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого 
7) галереи изображений и изображений в ней 
8) карты 
Выполненные пункты:
1) Блок header 
2) Секция Welcome 
3) Секция Visiting 
4) Секция Explore 
5) Секция Video 
6) Секция Gallery 
7) Секция Tickets 
8) Форма покупки билетов 
9) Секция Contacts 
10) Блок footer  
11) Блок header 
12) Секция Welcome 
13) Секция Visiting 
14) Секция Explore 
15) Секция Video 
16) Секция Gallery 
17) Секция Tickets 
18) Форма покупки билетов 
19) Секция Contacts 
20) Блок footer  
21) Блок header 
22) Секция Welcome 
23) Секция Visiting 
24) Секция Explore 
25) Секция Video 
26) Секция Gallery 
27) Секция Tickets 
28) Форма покупки билетов 
29) Секция Contacts 
30) Блок footer  
31) при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку 
32) ссылки в меню работают, обеспечивая плавную прокрутку по якорям 
33) при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается 
34) вёрстка меню соответствует макету на всех проверяемых разрешениях 
35) Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов 
`)