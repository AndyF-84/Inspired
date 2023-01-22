import { renderHero } from '../render/renderHero'
import { renderNavigation } from '../render/renderNavigation'
import { renderGoods } from '../render/renderGoods'

export const mainPage = (gender = 'woman') => {
    console.log('gender: ', gender);
    renderNavigation(gender)
    renderHero(gender)
    renderGoods(gender)
}
