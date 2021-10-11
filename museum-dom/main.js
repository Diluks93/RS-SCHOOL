(()=>{"use strict";!function(){const e=document.getElementById("submit");let t;e.addEventListener("click",(n=>{const o=n.clientX-n.target.getBoundingClientRect().left,c=n.clientY-n.target.getBoundingClientRect().top;t=document.createElement("div"),t.classList.add("ripple"),t.style.left=`${o}px`,t.style.top=`${c}px`,e.prepend(t)}))}(),function(){const e=document.querySelector(".explore__block.slider"),t=e.querySelector(".explore__block_before"),n=t.querySelector(".explore__img"),o=e.querySelector(".explore__block_change"),c=document.getElementById("explore");let s=!1;document.addEventListener("DOMContentLoaded",(()=>{let t=e.offsetWidth;n.getElementsByClassName.width=`${t}px`}));const l=n=>{let c=Math.max(0,Math.min(n,e.offsetWidth));t.style.width=`${c}px`,o.style.left=`${c}px`};c.addEventListener("mousedown",(()=>{s=!0})),c.addEventListener("mouseup",(()=>{s=!1})),c.addEventListener("mouseleave",(()=>{s=!1})),c.addEventListener("mousemove",(t=>{if(!s)return;let n=t.pageX;n-=e.getBoundingClientRect().left,l(n)})),c.addEventListener("touchstart",(()=>{s=!0})),c.addEventListener("touchend",(()=>{s=!1})),c.addEventListener("touchcancel",(()=>{s=!1})),c.addEventListener("touchmove",(t=>{if(!s)return;let n,o;for(o=0;t<t.length;o++)n=t.changeTouches[o].pageX;n-=e.getBoundingClientRect().left,l(n),(e=>{e.stopPropagation(),e.preventDefault()})(t)}))}(),function(){const e=document.getElementById("slider"),t=document.getElementById("slides"),n=document.getElementById("prev"),o=document.getElementById("next"),c=document.querySelectorAll(".cub"),s=document.getElementById("current");!function(e,t,n,o){let l,i,a=0,r=0,u=t.getElementsByClassName("slide"),d=u.length,m=t.getElementsByClassName("slide")[0].offsetWidth,g=u[0],y=u[d-1],v=g.cloneNode(!0),f=y.cloneNode(!0),p=0,h=!0;function L(e){(e=e||window.event).preventDefault(),l=t.offsetLeft,"touchstart"==e.type?a=e.touches[0].clientX:(a=e.clientX,document.onmouseup=S,document.onmousemove=E)}function E(e){"touchmove"==(e=e||window.event).type?(r=a-e.touches[0].clientX,a=e.touches[0].clientX):(r=a-e.clientX,a=e.clientX),t.style.left=t.offsetLeft-r+"px"}function S(e){i=t.offsetLeft,i-l<-300?b(1,"drag"):i-l>300?b(-1,"drag"):t.style.left=l+"px",document.onmouseup=null,document.onmousemove=null}function b(e,n){t.classList.add("active"),h&&(n||(l=t.offsetLeft),1==e?(t.style.left=l-m+"px",p++):-1==e&&(t.style.left=l+m+"px",p--)),h=!1}t.appendChild(v),t.insertBefore(f,g),e.classList.add("loaded"),t.onmousedown=L,t.addEventListener("touchstart",L),t.addEventListener("touchend",S),t.addEventListener("touchmove",E),n.addEventListener("click",(function(){b(-1)})),o.addEventListener("click",(function(){b(1)})),t.addEventListener("transitionend",(function(){t.classList.remove("active"),-1==p&&(t.style.left=-d*m+"px",p=d-1),p==d&&(t.style.left=-1*m+"px",p=0),k(p),s.innerHTML=`0${p+1}`,h=!0}));const k=e=>{for(let e of c)e.classList.remove("active");c[e].classList.add("active")};c.forEach(((e,n)=>{e.addEventListener("click",(()=>{switch(p=n,s.innerHTML=`0${p+1}`,k(p),p){case 0:t.style.left="-1000px";break;case 1:t.style.left="-2000px";break;case 2:t.style.left="-3000px";break;case 3:t.style.left="-4000px";break;case 4:t.style.left="-5000px"}}))}))}(e,t,n,o)}(),function(){const e=document.querySelector(".video__player"),t=document.querySelector(".video__video"),n=document.querySelectorAll(".video__video"),o=document.getElementById("button"),c=document.querySelector(".toggle-play"),s=document.getElementById("progress"),l=document.getElementById("progress-filled"),i=document.getElementById("volume"),a=document.getElementById("mute"),r=document.getElementById("fullscreen"),u=document.querySelectorAll(".video__dot"),d=document.querySelectorAll(".video__player .video__video");let m=0,g=!0;function y(){const e=n[m].paused?"play":"pause";n[m][e]()}function v(){const e=document.querySelector(".toggle-play");this.paused?(e.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#playSmall"></use></svg>',o.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#play"></use></svg>'):(e.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#pause"></use></svg>',o.innerHTML="")}function f(e){const t=e.offsetX/s.offsetWidth*n[m].duration;n[m].currentTime=t}function p(){if(0===n[m].volume){n[m].volume=i.value/100,a.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#sound"></use></svg>';const e=i.value;i.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}else{n[m].volume=0,a.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#mute"></use></svg>';const e=n[m].volume;i.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}}function h(){const e=n[m].currentTime/n[m].duration*100;s.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`,l.style.left=`${e}%`}function L(){const t=document.querySelector(".toggle-fullscreen");document.fullscreenElement?(document.exitFullscreen(),t.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#fullscreen"></use></svg>'):(e.requestFullscreen(),t.innerHTML='<svg class="icon"><use xlink:href="assets/svg/sprite.svg#fullscreenExit"></use></svg>')}function E(e){let o=t.playbackRate+e;o>=.25&&o<=2&&(n[m].playbackRate=o)}r.addEventListener("click",L),o.addEventListener("click",y),n.forEach((e=>e.addEventListener("click",y))),n.forEach((e=>e.addEventListener("play",v))),n.forEach((e=>e.addEventListener("pause",v))),n.forEach((e=>e.addEventListener("timeupdate",h))),s.addEventListener("click",f);let S=!1;function b(e){m=(e+d.length)%d.length}function k(e){g=!1,d[m].classList.add(e),d[m].addEventListener("animationend",(function(){this.classList.remove("play",e)}))}function x(e){d[m].classList.add("next",e),d[m].addEventListener("animationend",(function(){this.classList.remove("next",e),this.classList.add("play"),g=!0}))}s.addEventListener("mousemove",(e=>S&&f(e))),s.addEventListener("mousedown",(()=>S=!0)),s.addEventListener("mouseup",(()=>S=!1)),i.addEventListener("change",(function(){let e=i.value/100;n[m].volume=e})),a.addEventListener("click",p),c.addEventListener("click",y),document.addEventListener("keyup",(function(e){switch(e.code){case"Space":y();break;case"KeyM":p();break;case"KeyF":L();break;case"KeyJ":n[m].currentTime-=10;break;case"KeyL":n[m].currentTime+=10;break;case"Comma":e.shiftKey&&E(-.25);break;case"Period":e.shiftKey&&E(.25);break;case"Digit0":case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":case"Numpad0":case"Numpad1":case"Numpad2":case"Numpad3":case"Numpad4":case"Numpad5":case"Numpad6":case"Numpad7":case"Numpad8":case"Numpad9":if(isNaN(+e.key))break;n[m].currentTime=n[m].duration/10*+e.key}})),i.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`})),u.forEach((e=>e.addEventListener("click",(function(){u.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),m=e})))),document.querySelector(".control.left").addEventListener("click",(function(){var e;g&&(e=m,k("to-right"),b(e-1),x("from-left"))})),document.querySelector(".control.right").addEventListener("click",(function(){var e;g&&(e=m,k("to-left"),b(e+1),x("from-right"))}))}(),function(){const e=document.getElementById("btn"),t=document.querySelector(".modal"),n=document.getElementById("close");e.addEventListener("click",(function(){t.classList.toggle("open")})),n.addEventListener("click",(function(){t.classList.toggle("open")})),window.onclick=function(e){e.target==t&&t.classList.toggle("open")}}(),function(){const e=Array.from(document.querySelector(".gallery__wrapper").children);var t;document.querySelector(".gallery__wrapper").replaceChildren(...(t=e,t.sort((e=>Math.random()-.5))))}(),function(){const e=document.querySelectorAll(".gallery__img");window.addEventListener("scroll",function(e,t=20,n=!0){let o;return function(){let c=this,s=arguments,l=function(){o=null,n||e.apply(c,s)},i=n&&!o;clearTimeout(o),o=setTimeout(l,t),i&&e.apply(c,s)}}((function(t){e.forEach((e=>{const t=window.scrollY+window.innerHeight-+/\d+/.exec(e.height)/2,n=e.offsetTop+ +/\d+/.exec(e.height)+3900,o=t>e.offsetTop,c=window.scrollY<n;o&&c?e.classList.remove("active"):e.classList.add("active")}))})),100)}(),function(){function e(e){let t=e.querySelector(".video__link"),n=e.querySelector(".video__media"),o=e.querySelector(".video__item_button"),c=e.querySelector(".video__item_descr"),s=function(e){return e.src.match(/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/mqdefault\.jpg/i)[1]}(n);e.addEventListener("click",(()=>{let n=function(e){let t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",function(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}(e)),t.classList.add("video__media"),t}(s);t.remove(),o.remove(),c.remove(),e.appendChild(n)})),t.removeAttribute("href"),e.classList.add("show")}!function(){let t=document.querySelectorAll(".video__item");for(let n=0;n<t.length;n++)e(t[n])}()}(),function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".sidepanel"),n=document.querySelector(".welcome__wrapper"),o=document.querySelector(".welcome");e.addEventListener("click",(()=>{e.classList.toggle("hamburger_active"),t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show"),n.classList.contains("hide")?(n.classList.remove("hide"),n.classList.add("visible")):(n.classList.add("hide"),n.classList.remove("visible"))})),o.onclick=function(c){c.target!==o&&(t.classList.remove("show"),e.classList.remove("hamburger_active"),n.classList.remove("hide"))}}(),function(){mapboxgl.accessToken="pk.eyJ1IjoiZGlsdWtzIiwiYSI6ImNrdTFxc3ZmODBuazAyb28xcTdtYTZmMGUifQ.oH3L-MEDH588UW1NMgorKg";let e=new mapboxgl.Map({container:"map",style:"mapbox://styles/diluks/ckuiiuxe1d31p19nsc7tc6xsp",center:[2.336263,48.860929],zoom:15.71}),t=new mapboxgl.NavigationControl({showCompass:!0,showZoom:!0});e.addControl(t,"top-right"),new mapboxgl.Marker({color:"black"}).setLngLat([2.3364,48.86091]).addTo(e),new mapboxgl.Marker({color:"grey"}).setLngLat([2.3333,48.8602]).addTo(e),new mapboxgl.Marker({color:"grey"}).setLngLat([2.3397,48.8607]).addTo(e),new mapboxgl.Marker({color:"grey"}).setLngLat([2.333,48.8619]).addTo(e),new mapboxgl.Marker({color:"grey"}).setLngLat([2.3365,48.8625]).addTo(e)}(),function(){const e=document.querySelectorAll(".minus"),t=document.querySelectorAll(".plus"),n=document.querySelectorAll(".radio"),o=document.querySelector(".tickets__box_total");let c=0;const s=()=>{n.forEach((e=>{e.checked&&(c=+e.value)})),(()=>{let e=+document.getElementById("basic").value,t=+document.getElementById("senior").value;localStorage.setItem("amountBasicValue",document.getElementById("basic").value),localStorage.setItem("amountSeniorValue",document.getElementById("senior").value);let n=c*e+c/2*t;o.innerText=`Total € ${n}`,localStorage.setItem("totalPrice",n.toString())})()};if(n.forEach((e=>e.addEventListener("click",(function(){localStorage.setItem("ticketType",this.value),s()})))),e.forEach((e=>e.addEventListener("click",s))),t.forEach((e=>e.addEventListener("click",s))),localStorage.getItem("ticketType")&&localStorage.getItem("amountBasicValue")&&localStorage.getItem("amountSeniorValue")&&localStorage.getItem("totalPrice")){let e=localStorage.getItem("ticketType");document.querySelector('input[name="radio"][value="'+e+'"]').setAttribute("checked","checked");let t=localStorage.getItem("amountBasicValue");document.getElementById("basic").setAttribute("value",`${t}`),document.querySelector(".basic").setAttribute("value",`${t}`);let n=localStorage.getItem("amountSeniorValue");document.getElementById("senior").setAttribute("value",`${n}`),document.querySelector(".senior").setAttribute("value",`${n}`);let c=localStorage.getItem("totalPrice");o.innerText=`Total € ${c}`,document.querySelector(".form__offer").innerHTML=`\n      <div>\n        <p class="text"><span class="number" id="numBasic">${t}</span>Basic (${e} &#8364;)</p>\n        <span class="price" id="priceBasic">${e*t} &#8364;</span>\n      </div>\n      <div>\n        <p class="text"><span class="number" id="numSenior">${n}</span>Senior (${e/2} &#8364;)</p>\n        <span class="price" id="priceSenior">${e/2*n} &#8364;</span>\n      </div>\n      <hr>\n      <div class="form__offer">\n        <span class="totalText">Total:</span><span class="total">${c} &#8364;</span>\n      </div>`}n.forEach((e=>e.addEventListener("click",(function(){let e=document.getElementById("output-type-tickets");switch(this.value){case"20":return e.innerText="Permanent exhibition";case"25":return e.innerText="Temporary exhibition";case"40":return e.innerText="Combined admission"}}))))}(),function(){let e=(new Date).toISOString().split("T")[0];document.getElementsByName("date")[0].setAttribute("min",e)}(),function(){const e=document.querySelector(".time-inp"),t=document.querySelector(".date-inp"),n=document.getElementById("ticket"),o=document.getElementById("basicform"),c=document.getElementById("seniorform"),s=document.querySelector(".basic"),l=document.querySelector(".senior"),i=document.querySelectorAll(".minus"),a=document.querySelectorAll(".plus"),r=document.getElementById("priceBasic"),u=document.getElementById("priceSenior"),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=["January","february","March","April","May","June","July","August","September","October","November","December"];function g(e,t){for(let n=0;n<t.length;n++)if(e==n)return t[n]}e.addEventListener("change",(e=>{document.getElementById("output-time").textContent=`${e.target.value}`})),t.addEventListener("change",(e=>{const t=document.getElementById("output-date"),n=new Date(e.target.value),o=n.getDay(),c=n.getMonth(),s=n.getDate();let l=g(o,d),i=g(c,m);t.textContent=`${l}, ${i}, ${s}`}));let y=0;function v(){document.getElementById("numBasic").innerText=`${s.value}`,document.getElementById("numSenior").innerText=`${l.value}`,r.innerText=s.value*y+" €",u.innerText=l.value*y/2+" €",document.querySelector(".total").innerText=s.value*y+l.value*y/2+" €"}n.addEventListener("change",(e=>{document.getElementById("output-type-tickets").textContent=`${e.target.value}`,function(e){switch(e.value){case"Permanent exhibition":y=20;break;case"Temporary exhibition":y=25;break;case"Combined admission":y=40}}(e.target),o.innerHTML=`Basic 18+ (${y} &#8364;)`,c.innerHTML=`Senior 65+ (${y/2} &#8364;)`,document.getElementById("numBasic").nextSibling.textContent=`Basic (${y} €)`,document.getElementById("numSenior").nextSibling.textContent=`Senior (${y/2} €)`})),i.forEach((e=>e.addEventListener("click",v))),a.forEach((e=>e.addEventListener("click",v)))}(),document.querySelector(".date-inp").setAttribute("placeholder","Date"),document.querySelector(".time-inp").setAttribute("placeholder","Time"),function(){const e=[document.querySelector(".visiting"),document.querySelector(".explore"),document.querySelector(".video"),document.querySelector(".gallery"),document.querySelector(".tickets"),document.querySelector(".contacts"),document.querySelector(".footer")];window.addEventListener("scroll",function(e,t=20,n=!0){let o;return function(){let c=this,s=arguments,l=function(){o=null,n||e.apply(c,s)},i=n&&!o;clearTimeout(o),o=setTimeout(l,t),i&&e.apply(c,s)}}((function(t){e.forEach((e=>{const t=window.scrollY+window.innerHeight,n=e.offsetTop+e.offsetHeight,o=t>e.offsetTop,c=window.scrollY<n;o&&c&&e.classList.add("active")}))})),100)}(),alert("\n1. Добавлена плавная анимация сайта, при скролле вниз, секции плавно появляются и фиксируются. Повторная анимация работает, только после перезагрузки страницы.\n2. Добавлен слайдер в секции tickets возможностями css без использования js.\n3. Слайды в секции tickets имеют подписи с названием картин, появляются при наведении\n4. Валидация выполнена средствами html5 и css3, поэтому невалидные значения видны будут сразу, однако если нажать на кнопку BOOK появится невалидное значение куда симпотичнее с подробным описанием.\n5. На текущий момент секцию video не допилил. Если успею, то этого сообщения вы не увидите"),console.log('\nВаша оценка - 141 баллов \nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно \n2) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео \n3) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео \n4) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется) \n5) перелистывание слайдов бесконечное (зацикленное) \n6) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) \n7) если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные \n8) даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда \n\nЧастично выполненные пункты:\n1) есть возможность перелистывания слайдов с видео влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео \n2) если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой \n3) если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой \n\nВыполненные пункты:\n1) есть возможность перелистывания слайдов влево и вправо кликами по стрелкам \n2) есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки \n3) есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера) \n4) слайды перелистываются плавно с анимацией смещения вправо или влево \n5) перелистывание слайдов бесконечное (зацикленное) \n6) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) \n7) при перелистывании слайдов кликами или свайпами меняется номер активного слайда \n8) даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда \n9) при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят \n10) при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается \n11) при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается \n12) прогресс-бар отображает прогресс проигрывания видео \n13) перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео \n14) если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play" \n15) при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка) \n16) при перемещении ползунка громкости звука изменяется громкость видео \n17) при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем \n18) панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними \n19) клавиша Пробел — пауза, при повторном нажатии - play \n20) Клавиша M (англ) — отключение/включение звука \n21) Клавиша F — включение/выключение полноэкранного режима \n22) Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика \n23) Клавиши SHIFT+. (англ) — замедление воспроизведения ролика \n24) ползунок можно перетягивать мышкой по горизонтали \n25) ползунок никогда не выходит за границы картины \n26) при перемещении ползунка справа налево плавно появляется нижняя картина \n27) при перемещении ползунка слева направо плавно появляется верхняя картина \n28) при обновлении страницы ползунок возвращается в исходное положение \n29) при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/ \n30) если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется \n31) при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется \n32) при изменении количества билетов Basic и Senior пересчитывается общая цена за них \n33) у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них \n34) при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них \n35) когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них \n36) когда пользователь выбирает дату в форме слева, она отображается в билете справа \n37) нельзя выбрать дату в прошлом \n38) когда пользователь выбирает время в форме слева, оно отображается в билете справа \n39) время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут \n40) можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа \n41) можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа \n42) валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы \n43) валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв \n44) валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр \n45) при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры" \n46) в секции Contacts добавлена интерактивная карта \n47) на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету \n48) стиль карты соответствует макету \n49) Любой собственный дополнительный функционал, улучшающий качество проекта. Например, ночная тема, плавная смена изображений в блоке Tickets, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса. Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера \n\n')})();