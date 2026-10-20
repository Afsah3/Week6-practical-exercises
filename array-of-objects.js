const products = [
    { name: "Shoes", price: 18000, stock: 10 },
    { name: "Bag", price: 25000, stock: 8 },
    { name: "Sandals", price: 15000, stock: 15 },
    { name: "Shirt", price: 12000, stock: 20 }
];

const cheapProducts = products.filter(product => product.price < 20000).map(product => product.name);

const highestStock = products.reduce((max, product) =>
    product.stock > max.stock ? product : max
);


const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;

console.log(cheapProducts);
console.log(highestStock);
console.log(averagePrice);