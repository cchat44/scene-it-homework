const container = document.getElementsByClassName('results');
const containerWithId = document.getElementById('results');

function renderMovies() {
  console.log("button is working");

  // DO THE FETCH!!!!
  console.log(movieData);
  console.log(container);
  console.log(containerWithId);

  movieData.map((item) => {
    console.log(item);

    containerWithId.innerHTML += `
        <div>
              <h2> ${item.Title}</h2>
              <h2> ${item.Year}</h2>
              <img src=${item.Poster}/>
        </div>`;
  });
}
