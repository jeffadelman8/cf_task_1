//Library Constructor
var Library = function(n) {
	this.name = n;
	this.numOfShelves = 0;
	this.books = [];
	this.reportBooks = function(){
		console.log("Here are all the books contained in " + this.name + ": ");
		for(i=0; i<this.books.length; i++){
			console.log(this.books[i]);
		};
	};
	console.log("A new library called " + this.name + " has been created.");
}

//Shelf Constructor
var Shelf = function(n, l){
	this.name = n;
	this.numOfBooks = 0;
	this.booksOnShelf = [];
	l.numOfShelves++;
	console.log("A new shelf called " + n + " has been added to " + l.name + ". " + l.name + " now contains " + l.numOfShelves + " shelf/shelves.");
}

//Book Constructor
var Book = function(n, l){
	this.name = n;
	//Enshelf Method
	this.enShelf = function(s){
		var shelf = s.name;
		s.numOfBooks++;
		s.booksOnShelf.push(this.name);
		console.log(this.name + " has been added to " + shelf + ". " + shelf + "now contains " + s.numberOfBooks + " book(s).")
	};
	//Unshelf Method
	this.unShelf = function(s){
		var shelf = s.name;
		var location = s.booksOnShelf.indexOf(this.name);
		s.numOfBooks--;
		s.booksOnShelf.splice(location, 1);
		console.log(this.name + " has been removed from " + shelf + ". " + shelf + " now contains " + s.numOfBooks + " book(s).");
	};
	l.books.push(n);
	console.log("A new book called " + n + " has been added to " + l.name + ".");
}


//Creating a library
var libraryOfCongress = new Library('Library of Congress');

//Adding a shelf
var shelf1 = new Shelf('shelf1', libraryOfCongress);
var shelf2 = new Shelf('shelf2', libraryOfCongress);

//Putting a book in the library
var book1 = new Book('A Tale of Two Cities', libraryOfCongress);
var book2 = new Book('Treasure Island', libraryOfCongress);
var book3 = new Book('Hound of the Baskervilles', libraryOfCongress);

//Adding the book to a specific shelf
book1.enShelf(shelf1);
book2.enShelf(shelf2);
book3.enShelf(shelf1);

//Taking a book off the shelf
book3.unShelf(shelf1);

//Reporting all the books in the Library!
libraryOfCongress.reportBooks();






















