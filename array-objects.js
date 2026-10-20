const products = [{ name: "Laptop", price: 450000, stock: 7 },
    { name: "Keyboard", price: 25000, stock: 20 },
    { name: "Mouse", price: 15000, stock: 35 },
    { name: "Headphones", price: 60000, stock: 12 }]

const cheapProducts = products.filter(product => product.price < 20000).map(product => product.name);

const highestStock = products.reduce((max, product) =>
    product.stock > max.stock ? product : max
);


const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;

console.log(cheapProducts);
console.log(highestStock);
console.log(averagePrice);