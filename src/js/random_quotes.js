const randomQuote = async () => {
  const url ="https://type.fit/api/quotes";    
  const response = await fetch(url);
  console.log(typeof response);
  const allQuotes = await response.json();

  const text = document.getElementById("quote");
  const author = document.getElementById("author");

  //random number between 0 and the length of the quotes array
  const indx = Math.floor(Math.random()*allQuotes.length);

  //storing at randomly generated index
  let quote = allQuotes[indx].text;
  let auth = allQuotes[indx].author;

  if (auth == null) {
    auth = "Anonymous author";
  }

  //displaying
  text.innerHTML = "\"" + quote + "\"";
  author.innerHTML = "- " + auth;
}

const myInterval = setInterval(randomQuote, 5000);
randomQuote();