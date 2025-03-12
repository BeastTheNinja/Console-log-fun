// write cool JS here!!
console.time()
const myInfo = 'en variabel';
const myBooks = ["The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Hobbit",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "The Da Vinci Code",
    "The Hunger Games"]

console.clear()     
console.group('Konsol opgave')    
console.log('Jeg er en almindelig konsol log');
console.info('Jeg er en konsol info:', myInfo)
console.warn('jeg er en advarsel!')
console.error('jeg er en fejl!!')
console.table(myBooks)
console.groupEnd()
console.timeEnd()
