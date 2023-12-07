import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import './popular-products.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.popular-products__slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: true,
    spaceBetween: 10,
    slidesPerView: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});