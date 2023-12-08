import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import './popular-products.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.popular-products__slider', {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    loop: true,
    // slidesPerView: 3,
    autoplay: true,
    speed: 1500,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletActiveClass: 'qwekjdshfkjdsh',
        // bulletClass: 'asdkjhaskdjh'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // breakpoints: {
    //     768: {
    //         slidesPerView: 2,
    //         autoplay: {
    //             delay: 2000,
    //             pauseOnMouseEnter: true,
    //         },
    //     }
    // }
});