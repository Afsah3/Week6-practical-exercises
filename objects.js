const book = {
    title: "More than a crown",
    author: "Naomie Nishimwe",
    year: 2024,
    genres: ["Novel", "Comedy"],

    summary() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

book.rating = 4.8;
book.year = 2025;

console.log(book.summary());

for (const [key, value] of Object.entries(book)) {
    console.log(key, ":", value);
}