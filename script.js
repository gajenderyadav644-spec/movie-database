document.getElementById("searchBtn").addEventListener("click", searchMovies);

function searchMovies() {
  const movieName = document.getElementById("movieInput").value;
  const apiKey = "bfa450d4"; // Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (data.Search) {
        data.Search.forEach(movie => {
          const card = `
            <div class="movie-card">
              <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}" alt="${movie.Title}">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
          `;
          resultsDiv.innerHTML += card;
        });
      } else {
        resultsDiv.innerHTML = "<p>No movies found!</p>";
      }
    })
    .catch(error => console.error("Error fetching movie data:", error));
}
