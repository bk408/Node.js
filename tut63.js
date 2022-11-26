// console.log("Hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Cat Photo</title>
      </head>
      <body>
          <h1>Catphoto App</h1>
          <h2>CatPhotos</h2>
          <p>Click here to view more <a target="blank" href="https://freecatphotoapp.com">catphotos</a></p>
  
     <a href="https://freecatphotoapp.com" ><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
     <section>
      <h2>Cat Lists</h2>
      <h3>Things cats love:</h3>
      <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
      </ul>
      <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>
      </figure>
   </section>
  
  <section>
  <h3>Top 3 things cats hate:</h3>
  <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
  </ol>
  <figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
  <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
  </figure>
  </section>
  
  <section>
      <h2>Cat Form</h2>
      <form action="https://freecatphotoapp.com/submit-cat-photo"></form>
      <fieldset>
          <legend>Is your cat an indoor or outdoor cat?</legend>
      <label>Indoor</label>
      <input type="radio" id="indoor" name="indoor-outdoor" value="indoor" checked >
      <label>Outdoor</label>
      <input type="radio" id="outdoor" name="indoor-outdoor" value="outoor" >
   </fieldset>
   <fieldset>
      <legend>What's your cat's personality?</legend>
      <input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>
      <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
      <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
    </fieldset>
  </section>
      </body>
  </html>`)

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});