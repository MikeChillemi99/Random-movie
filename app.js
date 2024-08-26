// Liste des films
const moviesList = [
	{
		id: 1,
		"name": "Seven",
		"actors": "Brad Pitt, Morgan Freeman",
		"genre": "Thriller psychologique",
		"duration": 127,
		"released": 1995,
		"cover": "assets/seven.jpg",
	},
	{
		id: 2,
		"name": "Wanted : Choisis ton destin",
		"actors": "Morgan Freeman, James McAvoy",
		"genre": "Action",
		"duration": 110,
		"released": 2008,
		"cover": "assets/wanted.jpg",
	},

	{
		id: 3,
		"name": "Les Évadés",
		"actors": "Tim Robbins, Morgan Freeman",
		"genre": "Drame carcéral",
		"duration": 142,
		"released": 1994,
		"cover": "assets/lesevades.jpg",
	},
	{
		id: 4,
		"name": "Une nuit en enfer",
		"actors": "George Clooney, Quentin Tarantino",
		"genre": "Horreur Fantastique",
		"duration": 108,
		"released": 1996,
		"cover": "assets/unenuitenenfer.jpg",
	},
	{
		id: 5,
		"name": "Momento",
		"actors": "Guy Pearce, Carrie-Anne Moss",
		"genre": "Thriller",
		"duration": 113,
		"released": 2000,
		"cover": "assets/momento.jpg",
	},

	{
		id: 6,
		"name": "Requiem for a dream",
		"actors": "Ellen Burstyn, Jared Leto",
		"genre": "Drame",
		"duration": 102,
		"released": 1996,
		"cover": "assets/requiemforadream.jpg",
	},
	{
		id: 7,
		"name": "La Cité de Dieu",
		"actors": "Alexandre Rodrigues, Leandro Firmino",
		"genre": "Drame Action",
		"duration": 130,
		"released": 2002,
		"cover": "assets/lacitededieu.jpg",
	},
	{
		id: 8,
		"name": "Le Prestige",
		"actors": "Hugh Jackman, Christian Bale",
		"genre": "Thriller Fantastique",
		"duration": 130,
		"released": 2006,
		"cover": "assets/prestige.jpg",
	},
	{
		id: 9,
		"name": "Le Pianiste",
		"actors": "Adrien Brody, Thomas Kretschmann",
		"genre": "Drame Historique",
		"duration": 144,
		"released": 2002,
		"cover": "assets/lepianiste.jpg",
	},
	{
		id: 10,
		"name": "Arrête-moi si tu peux",
		"actors": "Leonardo DiCaprio, Tom Hanks",
		"genre": "Comédie dramatique",
		"duration": 141,
		"released": 2002,
		"cover": "assets/arretemoisitupeux.jpg",
	},
	{
		id: 11,
		"name": "Mystic River",
		"actors": "Sean Penn, Tim Robbins",
		"genre": "Thriller",
		"duration": 137,
		"released": 2003,
		"cover": "assets/mysticriver.jpg",
	},
	{
		id: 12,
		"name": "Casino Royale",
		"actors": "Daniel Craig, Eva Green",
		"genre": "Espionnage",
		"duration": 144,
		"released": 2006,
		"cover": "assets/casinoroyale.jpg",
	},
	{
		id: 13,
		"name": "Astérix et Obélix : Mission Cléopâtre",
		"actors": "Monica Bellucci, Gérard Depardieu",
		"genre": "Comédie, Aventures",
		"duration": 107,
		"released": 2002,
		"cover": "assets/missioncleopatre.jpg",
	},
	{
		id: 14,
		"name": "Astérix et Obélix : Aux Jeux Olympiques",
		"actors": "Clovis Cornillac, Gérard Depardieu",
		"genre": "Comédie, Aventures",
		"duration": 117,
		"released": 2008,
		"cover": "assets/jeuxolympiques.jpg",
	},
	{
		id: 15,
		"name": "Monster House",
		"actors": "Animation",
		"genre": "Comédie, Animation, Horreur",
		"duration": 91,
		"released": 2006,
		"cover": "assets/monsterhouse.jpg",
	}
]

// Variables
const movieImg = document.getElementById('movie-img');
const movieTitle = document.getElementById('movie-title');
const movieStyle = document.getElementById('movie-style');
const movieActors = document.getElementById('movie-actors');
const movieReleased = document.getElementById('movie-released');
const movieDuration = document.getElementById('movie-duration');
const randomBtn = document.querySelector('.random-btn');

let currentItem = Math.floor(Math.random() * moviesList.length);

// Appel lors du chargement
window.addEventListener('DOMContentLoaded', function() {
    showMovie(currentItem);
});

function showMovie(movie) {
    const item = moviesList[movie];
    movieImg.src = item.cover;
    movieTitle.textContent = item.name;
    movieStyle.textContent = item.genre;
    movieActors.textContent = item.actors;
    movieReleased.textContent = item.released;
    movieDuration.textContent = item.duration;
}

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * moviesList.length);
    showMovie(currentItem);
})
