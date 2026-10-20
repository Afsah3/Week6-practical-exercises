const book = {
    title: "The Lion King",
    author: "Jon Favreau",
    year: 2019,
    genres: ["Animation", "Adventure"],

    summary() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

book.rating = 4.8;
book.year = 2022;

console.log(book.summary());

for (const [key, value] of Object.entries(book)) {
    console.log(key, ":", value);
}