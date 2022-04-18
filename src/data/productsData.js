import p1 from '../img/Products/1.jpg'
import p2 from '../img/Products/2.jpg'
import p3 from '../img/Products/3.jpg'
import p4 from '../img/Products/4.jpg'
import p5 from '../img/Products/5.jpg'
import p6 from '../img/Products/6.webp'
import p7 from '../img/Products/7.jpg'
import p8 from '../img/Products/8.jpg'
import p9 from '../img/Products/9.jpg'
import p10 from '../img/Products/10.jpg'
import p11 from '../img/Products/11.jpg'
const des = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iste?'


const products = [
    { name: 'Watch', price: 12, description: des, img: p1 },
    { name: 'iPhone', price: 200, description: des, img: p2 },
    { name: 'Alarm ', price: 10, description: des, img: p3 },
    { name: 'Car', price: 1500, description: des, img: p4 },
    { name: 'Guitar', price: 30, description: des, img: p5 },
    { name: 'Phone', price: 125, description: des, img: p6 },
    { name: 'The Elder Wand', price: '?', description: des, img: p7 },
    { name: 'Shoes', price: 15, description: des, img: p8 },
    { name: 'T-shirt', price: 25, description: des, img: p9 },
    { name: 'Lamp', price: 3, description: des, img: p10 },
    { name: 'R-Madrid Medal', price: 2, description: des, img: p11 },
];

const getProducts = () => products;

export default getProducts;