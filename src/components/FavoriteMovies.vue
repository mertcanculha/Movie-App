<template>
  <div class="favoritemovies">
    <h3>My Favorite Movie</h3>
    <table>
      <tr>
        <th>Movie Title</th>
        <th>Movie Year</th>
        <th>Movie Poster</th>
        <th>Rate</th>
        <th>Delete</th>
        <th>Detail</th>
      </tr>

      <tr v-for="(i, index) in this.$store.state.favoriteMovies" :key="index">
        <td>{{ i.title }}</td>
        <td>{{ i.release_date }}</td>
        <td>
          <img
            :src="photoUrl + i.poster_path"
            alt="Movie Poster"
            class="imgPoster"
          />
        </td>
        <td>{{ i.vote_average }}</td>
        <td>
          <button @click="deleteFav(index)">-</button>
        </td>
        <td>
          <button @click="detail(i.id)">Detail</button>
        </td>
      </tr>
    </table>
    <br />
    <button @click="goSearch">Go Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoUrl: "https://www.themoviedb.org/t/p/original",
    };
  },
  methods: {
    deleteFav(index) {
      this.$store.commit("deleteFavoriteMovie", index);
    },
    goSearch() {
      this.$router.push("./search");
    },
    detail(id) {
      this.$store.commit("setImdbID", id);
      this.$router.push("/detail");
    },
  },
};
</script>
<style scopred>
.imgPoster {
  width: 50px;
  height: auto;
}
table,
th,
td {
  border: 2px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
}
.favoritemovies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>