const switcher = document.querySelector('#switcher'), // добавляем переключатель темы сайта в DOM
      btnAdd = document.querySelector('.btn-add'); // добавляем кнопку "Загрузить ещё" в DOM

function switchMode() { // Функция ночного режима
    if(night === false) { // эта переменная создана чтобы фиксировать переключение 
        night = true; // когда переменная изменилась, то запускается цикл изменения темы сайта

        // Окрасить весь фон в черный цвет
        document.body.classList.add('night');

        // Текст h1 в шапке

        document.querySelector('.header > h1').style.color = '#fff'; 

        // Текст h2 в шапке
        document.querySelector('.header-text').style.color = '#fff';

        // Обводка белая для шапки
        document.querySelector('.header').classList.add('header-night__mode');

        // Обводка белая для блоков
        document.querySelectorAll('.wrap-block').forEach(item => {
            item.classList.add('wrap-block__night');
        });

        // Обводка кнопок с цветом и изменение её фона и цвет текста
        document.querySelectorAll('.btn-size').forEach(item => {
            item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)';
            item.style.color = '#fff';
            item.classList.add('btn-size__night-mode');
        });

        // Окрашивание span с ценой
        document.querySelectorAll('.price').forEach(item => {
            item.style.color = '#fff';
        });

        // Окрасить все слова в блоках в белый
        document.querySelectorAll('.wrap-block').forEach(item => {
            item.style.color = '#fff';
        });
        
        // Окрасить фон для кнопок с цветом, чтобы было видно их
        document.querySelectorAll('.btn-block').forEach(item => {
            item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)';
        });

        // Изменение кнопки доавбить
        document.querySelector('.btn-add').classList.add('btn-add__night');
    }else { // во всех остальных случаях изменения состояни переключателя
        night = false; // фиксирует повторное изменение перекючателя

        // Окрасить весь фон в черный цвет
        document.body.classList.remove('night');

        // Текст h1 в шапке

        document.querySelector('.header > h1').style.color = '#000';

        // Текст h2 в шапке
        document.querySelector('.header-text').style.color = '#000';

        // Обводка белая для шапки
        document.querySelector('.header').classList.remove('header-night__mode');

        // Обводка белая для блоков
        document.querySelectorAll('.wrap-block').forEach(item => {
            item.classList.remove('wrap-block__night');
        });

        // Обводка кнопок с цветом и изменение её фона и цвет текста
        document.querySelectorAll('.btn-size').forEach(item => {
            item.style.backgroundColor = '#fff';
            item.style.color = '#000';
            item.classList.remove('btn-size__night-mode');
        });

        // Окрашивание span с ценой
        document.querySelectorAll('.price').forEach(item => {
            item.style.color = '#000';
        });

        // Окрасить все слова в блоках в белый
        document.querySelectorAll('.wrap-block').forEach(item => {
            item.style.color = '#000';
        });
        
        // Окрасить фон для кнопок с цветом, чтобы было видно их
        document.querySelectorAll('.btn-block').forEach(item => {
            item.style.backgroundColor = 'rgb(0,0,0, 0.07)';
        });

        // Изменение кнопки доавбить
        document.querySelector('.btn-add').classList.remove('btn-add__night');
    }
 }

 let night = false; // переменная, которая фиксирует состояние переключателя

switcher.addEventListener('change', () => { // При клике на переключатель фиксируется его изменение с помощью "change"
    switchMode(); // включается ночная тема
})
 
function imgChange() { // Функция изменения фотографий при клике по кнопкам цветов

    // Каждая кнопка соотвествуют названию товара, в котором находится. 
    //Следующие комментарии имеют ту же концепцию как и последующие 11 элементов, за исключением цветов товаров к ним

    // iPhone XR colors
    document.querySelector('#btn-black__XR').addEventListener('click', () => { // При клике на чёрную кнопку товара
        document.querySelector('#iphoneXR').src = '/img/1.png'; // меняется фото товара на чёрный экземпляр с помощью пути к файлу через src
    });
    document.querySelector('#btn-red__XR').addEventListener('click', () => { // При клике на красную кнопку товара
        document.querySelector('#iphoneXR').src = '/img/2.png'; // меняется фото товара на чёрный экземпляр с помощью пути к файлу через src
    });
    document.querySelector('#btn-yellow__XR').addEventListener('click', () => { // При клике на желтую кнопку товара
        document.querySelector('#iphoneXR').src = '/img/3.png'; // меняется фото товара на чёрный экземпляр с помощью пути к файлу через src
    });


    // iphone X colors
    document.querySelector('#btn-white__X').addEventListener('click', () => {
        document.querySelector('#iphoneX').src = '/img/4.png';
    });
    document.querySelector('#btn-black__X').addEventListener('click', () => {
        document.querySelector('#iphoneX').src = '/img/5.png';
    });

    // iPhone 8 colors
    document.querySelector('#btn-white__8').addEventListener('click', () => {
        document.querySelector('#iphone8').src = '/img/8.png';
    });
    document.querySelector('#btn-black__8').addEventListener('click', () => {
        document.querySelector('#iphone8').src = '/img/6.png';
    });
    document.querySelector('#btn-gold__8').addEventListener('click', () => {
        document.querySelector('#iphone8').src = '/img/7.png';
    });

    // iPhone Xs colors
    document.querySelector('#btn-white__XS').addEventListener('click', () => {
        document.querySelector('#iphoneXS').src = '/img/11.png';
    });
    document.querySelector('#btn-black__XS').addEventListener('click', () => {
        document.querySelector('#iphoneXS').src = '/img/9.png';
    });
    document.querySelector('#btn-gold__XS').addEventListener('click', () => {
        document.querySelector('#iphoneXS').src = '/img/10.png';
    });
    
    // iPhone SE colors
    document.querySelector('#btn-white__SE').addEventListener('click', () => {
        document.querySelector('#iphoneSE').src = '/img/12.png';
    });
    document.querySelector('#btn-black__SE').addEventListener('click', () => {
        document.querySelector('#iphoneSE').src = '/img/14.png';
    });
    document.querySelector('#btn-pink__SE').addEventListener('click', () => {
        document.querySelector('#iphoneSE').src = '/img/13.png';
    });
 }

 const pricesXR = ['799$', '899$', '999$'], // массив с ценами iphone XR
       pricesX = ['499$', '599$', '699$'], // массив с ценами iphone X
       prices8 = ['400$', '429$', '529$'], // массив с ценами iphone 8
       pricesXS = ['1000$', '1100$', '1200$'], // массив с ценами iphone XS
       pricesSE = ['150$', '200$', '259$']; // массив с ценами iphone SE


 function btnSize(btn64, btn128, btn256, text_block, pricesBlock) { 

    // Функция принимает 5 значений: кнопка 64гб, кнопка 128гб, кнопка 256гб, блок с ценой, текс цены

    document.querySelector(btn64).addEventListener('click', () => { // При клике на кнопку с gb
        document.querySelector(text_block).innerHTML = pricesBlock[0]; // Меняется текст в блоке с ценой
    });
    document.querySelector(btn128).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = pricesBlock[1];
    });
    document.querySelector(btn256).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = pricesBlock[2];
    });
    
  }


 function priceChange() {

    // Функция включает в работу все кнопки товаров с gb на основе функции выше

    btnSize('#btn64XR', '#btn128XR', '#btn256XR', '#iphoneXR-text', pricesXR); 
    btnSize('#btn64X', '#btn128X', '#btn256X', '#iphoneX-text', pricesX);
    btnSize('#btn64__8', '#btn128__8', '#btn256__8', '#iphone8-text', prices8);
    btnSize('#btn64__XS', '#btn128__XS', '#btn256__XS', '#iphoneXS-text', pricesXS);
    btnSize('#btn64__SE', '#btn128__SE', '#btn256__SE', '#iphoneSE-text', pricesSE);

  }

  function addItems() {  // функция дбавления блоков с товаром  
      btnAdd.addEventListener('click', () => { // при клике на кнопку "Загрузить ещё"
        document.querySelectorAll('#newIphone').forEach(item => { // получение всех элементов с id="newIphone" (те блоки, что не видны на странице)
            item.classList.remove('display-none') // убирает класс с display:none у скрытых блоков с товарами
        });
        btnAdd.remove(); // удаляет кнопку "Загруить ещё", так как товары добавлены
      });
   }




imgChange();
priceChange();
addItems();