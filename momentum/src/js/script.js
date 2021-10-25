import { showTime, showDate } from './getTime.js';
import { getHours, getTimeOfDay, setLocalStorage, getLocalStorage } from './getGreeting.js';
import { getLinkToImage } from './createSlider.js';
import { getWeather } from './vidjetWether.js';
import { getQuotes } from './getQuotes.js';
import { playAudio, pauseAudio } from './player.js';
import { SETTING_BTN, getTranslate } from './setting.js';
import { TODO_BTN } from './todo.js';
import { updateClock } from './pomodoro.js'

showTime();
showDate();
getHours();
getTimeOfDay();
getLinkToImage();
getWeather();
getQuotes();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', () => {
  getLocalStorage();
  getTranslate();
});

document.addEventListener('DOMContentLoaded', getWeather);

console.log(`

Ваша оценка - 149 балла 
Отзыв по пунктам ТЗ:

Обратите внимание:
1. в цитатах отображается цитата и автор. Автора скрыл :hover эффектом (копировал из оригинального приложения)
2. стилистически я задумал так, чтобы сразу был доступен маленький плеер с ограниченным функционалом (чтобы ничего не отвлекало и не было ничего лишнего), нажав на "Audioplayer | Аудиоплеер | Аудэёплэер" вы сможете раскрыть ПРОДВИНУТУЮ версию плеера
3. если треки еще не вопроизводились то над прогресс-баром фраза "Music Song" (не переводил).
4. регулятор громкость скрыт, появляется от :hover эффекта при наведении на иконку звука
5. из дополнительного функционала:
 * реализован TODO лист, доступен сразу при загрузке страницы
 * релизован pomodoro таймер, доступен при переключении в настройках
6. можно менять цвет используемый в приложении (данная настройка не сохраняется)
7. есть задержка в 4-5 секунды при использовании API Flickr

Пока не выполненные/не засчитанные пункты:
3) можно запустить и остановить проигрывание трека кликом по кнопке Play/Pause рядом с ним в плейлисте  
4) Беларусская мова плохо поддерживывается, реализован не весь перевод
5) Если источником получения фото указан API, в настройках приложения можно указать тег, для которого API будет присылает фото 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00
2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 
3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 
4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 
5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется
6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 
7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 
8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 
9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 
10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 
11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 
12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов)
13) при загрузке страницы приложения отображается рандомная цитата и её автор 
14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 
15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 
16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 
17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 
18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 
19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 
20) добавлен прогресс-бар в котором отображается прогресс проигрывания 
21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 
22) над прогресс-баром отображается название трека 
23) отображается текущее и общее время воспроизведения трека 
24) есть кнопка звука при клике по которой можно включить/отключить звук 
25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 
 
27) переводится язык и меняется формат отображения даты 
28) переводится приветствие 
29) переводится прогноз погоды в т.ч описание погоды 
30) переводится цитата дня  
31) в качестве источника изображений может использоваться Unsplash API 
32) в качестве источника изображений может использоваться Flickr API 
33) в настройках приложения можно указать язык приложения (en/ru или en/be)
34) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 
35) настройки приложения сохраняются при перезагрузке страницы
36) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 
37) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 
38) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 
`);