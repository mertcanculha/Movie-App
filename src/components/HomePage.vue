<template>
  <div class="searchMovie">
    <h3>TREND MOVİES</h3>
    <br /><br /><br />
    <button @click="getFav">Show Trending Movies</button><br /><br />
    <div v-if="otpBtnClicked">
      <table>
        <tr>
          <th>Movie Title</th>
          <th>Movie Year</th>
          <th>Movie Poster</th>
          <th>Add Favorite</th>
          <th>Rate</th>
          <th>Detail</th>
        </tr>
        <tr
          v-for="(i, index) in this.$store.state.trendMovies.results"
          :key="index"
        >
          <td>{{ i.title }}</td>
          <td>{{ i.release_date }}</td>
          <td>
            <img
              :src="photoUrl + i.poster_path"
              alt="Movie Poster"
              class="imgPoster"
            />
          </td>
          <td>
            <button @click="setFavorite(i)">+</button>
          </td>
          <td>{{ i.vote_average }}</td>
          <td>
            <button @click="detail(i.id)">Detail</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="searchMovie">
      <Search />
    </div>
  </div>
</template>
<script>
import Search from "./Search.vue";
export default {
  name: "MovieDetail",
  components: { Search },
  data() {
    return {
      //trendMovie: null,
      otpBtnClicked: false,
      photoUrl: "https://www.themoviedb.org/t/p/original",
    };
  },
  methods: {
    getFav() {
      this.$http
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=357dfccdaa11998484b251acb8f8ffe9`
        )
        .then((res) => {
          console.log(res);
          this.$store.commit("setTrendMovies", res.data);
          this.otpBtnClicked = true;
          //this.trendMovie = res;
        });
    },
    setFavorite(i) {
      //console.log(i);
      this.$store.commit("setFavoriteMovie", i);
    },
    detail(id) {
      this.$store.commit("setImdbID", id);
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
.imgPoster {
  width: 120px;
  height: auto;
}
.searchMovie {
  padding: 30px;
}
</style>