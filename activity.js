class library {
    constructor(name, creator) {
      this.name = name;
      this.creator = creator;
      this.playlists = [];
    }
  
    addPlaylist(playlist) {
      this.playlists.push(playlist);
    }
  }
  
  class playlist {
    constructor(name) {
      this.name = name;
      this.tracks = [];
      this.totalDuration = 0;
      this.overallRating = 0;
    }
  
    setOverallRating() {
      let totalRating = 0;
      this.tracks.forEach(e => {
        totalRating += e.rating;
      });
      this.overallRating = (totalRating / this.tracks.length).toFixed(1 );
    }
  
    setTotalDuration(length) {
      this.totalDuration += length;
    }
  
    addToPlayList(track) {
      this.tracks.push(track);
    }
  }
  
  class track {
    constructor(title, rating, length) {
      this.title = title;
      this.rating = rating;
      this.length = length;
    }
  }
  
  var track01 = new track('hello01', 5, 300);
  var track02 = new track('hello02', 4, 340);
  var track03 = new track('hello03', 2, 670);
  
  var playList01 = new playlist('play01');
  
  playList01.addToPlayList(track01);
  playList01.setTotalDuration(track01.length);
  
  playList01.addToPlayList(track02);
  playList01.setTotalDuration(track02.length);
  
  playList01.addToPlayList(track03);
  playList01.setTotalDuration(track03.length);
  
  playList01.setOverallRating();
  
  
  var bobLibrary = new library('bobmusic', 'bob');
  
  bobLibrary.addPlaylist(playList01);
  
  console.log(bobLibrary);