const quoteArray = [
    {
        text: "First solve the problem, then write the code",
        author: "John Johnson"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "Experience is the name everyone gives to their mistakes",
        author: "Oscar Wilde"
    },
    {
        text: "Everyone should learn to program because it teaches you how to think.",
        author: "Steve Jobs"
    },
    {
        text: "There is always one more bug to fix.",
        author: "Ellen Ulman"
    }
];

// we'll use this variable to make sure we don't get the same quote twice.
let lastQuote = null;


function getQuote() {
    // get a random quote from the quote array
    let quote = Math.floor(Math.random() * quoteArray.length);
    // check to see if newQuote is the same as the last quote. If so, get a new value
    while (quote === lastQuote) {
        quote = Math.floor(Math.random() * quoteArray.length);
    }
    // update lastQuote so we don't get the current one next time.
    lastQuote = quote;

    return quoteArray[quote];
}



function newQuote() {
    // calls getQuote and changes display to show it



}

// call newQuote on app launch
newQuote();



