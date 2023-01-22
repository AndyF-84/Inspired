import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { womanMainPage } from './modules/mainPage/womanMainPage';
import { manMainPage } from './modules/mainPage/manMainPage';


router.on('*', () => {  //если в адресной строке любой адрес( означает *)
    renderHeader();
    renderFooter();
});

router.on('/', () => {  //если адресная строка сайта начинается с /
    mainPage ();
});

router.on('woman', () => {  //если находимся на стронице woman
    womanMainPage();
});

router.on('man', () => {  //если находимся на стронице man
    manMainPage();
});

// setTimeout ( () => {
//     router.navigate('man');
// }, 3000)

// setTimeout ( () => {
//     router.navigate('woman');
// }, 6000)

router.resolve();


// import code from './img/code.png'
// import { mult, sum } from './modules/calc';

// const imgWrap = document.querySelector('.img');
// const img = new Image();
// img.src = code;
// img.width = 700;
// imgWrap.append(img);

// console.log(mult(3, 4));
// console.log(sum(3, 4));