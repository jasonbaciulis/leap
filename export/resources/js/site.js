import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import Cookies from 'js-cookie'

window.Cookies = Cookies
window.Alpine = Alpine

Alpine.plugin([collapse, focus, persist, intersect])
Alpine.start()
