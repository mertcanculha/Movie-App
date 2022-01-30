<template>
  <div class="detailPage">
    <div class="imgRow">
      <img :src="photoUrl + detailMovie.data.poster_path" class="imgPoster" />
    </div>
    <div class="infoRow">
      <h2>{{ detailMovie.data.title }}</h2>
      <span> <b>Release Date:</b> {{ detailMovie.data.release_date }}</span
      ><br />
      <span> <b> Popularity: </b> {{ detailMovie.data.popularity }}</span
      ><br />
      <span> <b> Overview: </b>{{ detailMovie.data.overview }}</span
      ><br />
      <span> <b>RunTime: </b>{{ detailMovie.data.runtime }}</span
      ><br />
      <span><b> Status: </b>{{ detailMovie.data.status }}</span
      ><br />
      <span>
        <b>Original Language:</b> {{ detailMovie.data.original_language }}</span
      ><br />
      <span> <b>Tagline</b> {{ detailMovie.data.tagline }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",

  data() {
    return {
      detailMovie: null,
      photoUrl: "https://www.themoviedb.org/t/p/original",
    };
  },
  created: function () {
    this.$http
      .get(
        `https://api.themoviedb.org/3/movie/${this.$store.state.imdbID}?api_key=357dfccdaa11998484b251acb8f8ffe9`
      )
      .then((res) => {
        console.log(res);
        this.detailMovie = res;
      });
  },
};
</script>

<style scoped>
.imgPoster {
  width: 250px;
  height: auto;
}
.detailPage {
  display: flex;
  flex-direction: row;
}
.imgRow {
  display: flex;
  justify-content: center;
  width: 20%;
  padding-top: 20px;
}
.infoRow {
  width: 60%;
  padding-top: 50px;
}
</style>