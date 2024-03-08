// Sheikh Jibran Ahmed    20204 / march / 08
//object is a collection of variables & method(function)
var books = {
    name: 'Chemistry',
    auther: 'prof. Wasi Askari',
    isBookOfScience: true,
    publishedNo: 'F' + 4431019,
    bookTitlePage: function () {
        //use lexical for refrence of an object
        return "\n\n        Name : ".concat(this.name, "\n        Auther : ").concat(this.auther, "\n        Published No : ").concat(this.publishedNo);
    }
};
//get and print the value of object
console.log(books.bookTitlePage());
