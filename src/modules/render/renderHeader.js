import { createElement } from "../createElement";
import logo from '../../img/logo.svg'

export const searchButton = createElement('button', {
    className: 'header__link',
    innerHTML: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4431 16.4438L20.9994 21.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    
    `
});

export const cartLink = createElement('a', {
    className: 'header__link',
    innerHTML: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    href: 'cart'
});

export const favoriteLink = createElement('a', {
    className: 'header__link',
    innerHTML: `
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>    
    `,
    href: 'favorite'
});

export const container = createElement('div', {
    className: 'container header__container',
    innerHTML: `
    <a class="header__phone header__link" href="tel:89304902620">8 930 490 26 20</a>

    <img class="header__logo" src="${logo}" alt="Логотип Inspired">
    `
});

const nav = createElement('div', {
        className: 'header__navigation',
    }, {
        parent: container,
    }
);

createElement('ul',
    {
        className: 'header__nav-list', 
    }, {
        parent: nav,
        appends: [
    createElement('li',
        {
            className: 'header__nav-list',
        },
        {
                append: searchButton,
        }),
        createElement('li',
        {
            className: 'header__nav-list',
        },
        {
                append: cartLink,
        }),
        createElement('li',
        {
            className: 'header__nav-list',
        },
        {
                append: favoriteLink,
        }),
    ]},
);


export const renderHeader = () => {
    const header = document.querySelector('.header');

    header.append(container);
}

