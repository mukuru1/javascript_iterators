// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(songs) {
  songs.forEach(song => console.log(song.name));
}
console.log(listNames(songs));


// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

function listSongDetails(songs) {
  songs.forEach(song => {
    console.log(`${song.name}, by ${song.artist} (${song.duration})`);
  });
}

listSongDetails(songs);

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(songs) {
  return songs.filter(song => ["June", "July", "August"].includes(song.month)).length;
}

console.log(summerJamCount(songs));


// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(songs) {
  return songs.map(song => song.duration);
}

console.log(getDurations(songs));


// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

function getDurationInSeconds(songs) {
  return songs.map(song => {
    const [min, sec] = song.duration.split(":").map(Number);
    return min * 60 + sec;
  });
}

console.log(getDurationInSeconds(songs));



// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

function getMainArtists(songs) {
  return songs.map(song => song.artist.split(" featuring")[0].trim());
}

console.log(getMainArtists(songs));



// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.

function getBigHits(songs) {
  return songs.filter(song => song.numberOneWeeks >= 10);
}

console.log(getBigHits(songs));


// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.

function getShortSongs(songs) {
  return songs.filter(song => {
    const [min, sec] = song.duration.split(":").map(Number);
    return (min * 60 + sec) < 180;
  });
}

console.log(getShortSongs(songs));



// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.

function getSongsByArtist(songs, artistName) {
  return songs.filter(song => song.artist.split(" featuring")[0].trim() === artistName);
}

console.log(getSongsByArtist(songs, "Lorde"));



// Refactor summerJamCount to use reduce!

function summerJamCountReduce(songs) {
  return songs.reduce((count, song) => {
    return ["June", "July", "August"].includes(song.month) ? count + 1 : count;
  }, 0);
}

console.log(summerJamCountReduce(songs));



// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

function getTotalDurationInSeconds(songs) {
  return songs.reduce((total, song) => {
    const [min, sec] = song.duration.split(":").map(Number);
    return total + min * 60 + sec;
  }, 0);
}

console.log(getTotalDurationInSeconds(songs));



// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

function getSongCountByArtist(songs) {
  return songs.reduce((acc, song) => {
    const artist = song.artist.split(" featuring")[0].trim();
    acc[artist] = (acc[artist] || 0) + 1;
    return acc;
  }, {});
}

console.log(getSongCountByArtist(songs));



// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

function averageWeeksAtNumberOne(songs) {
  const totalWeeks = songs.reduce((sum, song) => sum + song.numberOneWeeks, 0);
  return songs.length === 0 ? 0 : totalWeeks / songs.length;
}

console.log(averageWeeksAtNumberOne(songs));
































