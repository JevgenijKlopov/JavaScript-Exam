/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, directror, budget) {
        this.title = title,
        this.directror = directror,
        this.budget = budget
    }
    wasExpensive(){return this.budget > 100000000}
    }

    const movieOne = new Movie("Abra Kadabra", "As", 500000);
    const movieTwo = new Movie("Abra Kadabra 2", "As", 5000000000);
    console.log(movieOne.wasExpensive())
    console.log(movieTwo.wasExpensive())
