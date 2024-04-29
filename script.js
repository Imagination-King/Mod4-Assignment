//source: https://www.boxofficemojo.com/chart/top_lifetime_gross_adjusted/?adjust_gross_to=2020
let movieList = {
  movies: [
    { movieName: "Gone with the Wind", director: "Victor Fleming", year: 1939, grossLife: 200882193, grossAdjust: 1895421694 },
    { movieName: "Star Wars", director: "George Lucas", year: 1977, grossLife: 460998507, grossAdjust: 1668979715 },
    { movieName: "The Sound of Music", director: "Robert Wise", year: 1965, grossLife: 159287539, grossAdjust: 1335086324 },
    { movieName: "E.T. The Extra Terrestrial", director: "Stephen Spielberg", year: 1982, grossLife: 437345144, grossAdjust: 1329174791 },
    { movieName: "Titanic", director: "James Cameron", year: 1997,grossLife: 674292608, grossAdjust: 1270101626 },
  ]
};
let jsonString = JSON.stringify(movieList);
// console.log(jsonString);
movieList = JSON.parse(jsonString);
// console.log(movies);

const table = document.getElementById("rankings");

for(m in movieList.movies) {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cell4 = document.createElement("td");
  const cell5 = document.createElement("td");

  cell1.textContent = movieList.movies[m].movieName;
  cell2.textContent = movieList.movies[m].director;
  cell3.textContent = movieList.movies[m].year;
  cell4.textContent = "$" + movieList.movies[m].grossLife.toLocaleString("en-US");
  cell4.classList.add("center");
  cell5.textContent = "$" + movieList.movies[m].grossAdjust.toLocaleString("en-US");
  cell5.classList.add("center");

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);

  table.appendChild(row);
}