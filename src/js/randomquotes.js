const text = document.getElementById("quote");
const author = document.getElementById("author");

const getRandomQuote = async () => {
  const url ="https://type.fit/api/quotes";    
  const response = await fetch(url);
  console.log(typeof response);
  const allQuotes = await response.json();

  // Generating random number between 0 and the length of the quotes array
  const indx = Math.floor(Math.random()*allQuotes.length);

  //Storing quote and author at randomly generated index
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }

  //function displays the quote and the author
  text.innerHTML = "\"" + quote + "\"";
  author.innerHTML = "- " + auth;
}

  const myInterval = setInterval(getRandomQuote, 4000);
  getRandomQuote();