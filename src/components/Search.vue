<template>
  <div class="searchMovie">
    <input placeholder="Movie" v-model="searchMovie" />
    <br />
    <button @click="getMovie">Search Movie</button><br /><br />
    <div v-if="otpBtnClicked">
      <table>
        <tr>
          <th>Movie Title</th>
          <th>Movie Year</th>
          <th>Movie Poster</th>
          <th>Add Favorite</th>
          <th>Rate</th>
        </tr>

        <tr
          v-for="(i, index) in this.$store.state.searchRes.results"
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
          <td>{{ i.popularity }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchMovie: "",
      photoUrl: "https://www.themoviedb.org/t/p/original",
      otpBtnClicked: false,
    };
  },
  methods: {
    getMovie() {
      this.$http
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${this.searchMovie}&api_key=357dfccdaa11998484b251acb8f8ffe9&page=2`
        )
        .then((res) => {
          console.log(res);
          this.$store.commit("setSearchRes", res.data);
          this.otpBtnClicked = true;
        });
    },
    setFavorite(i) {
      //console.log(i);
      this.$store.commit("setFavoriteMovie", i);
    },
    goFav() {
      this.$router.push("/favorite");
    },
  },
};
</script>
<style scopred>
.imgPoster {
  width: 120px;
  height: auto;
}

.searchMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>