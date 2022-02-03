<template>
  <div class="container">
    <h3 class="favoriteTitle" style="padding:5%">My Favorite Movies</h3>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div
        class="col"
        v-for="(i, index) in this.$store.state.favoriteMovies"
        :key="index"
      >
        <div class="card">
          <img
            :src="photoUrl + i.poster_path"
            alt="Movie Poster"
            class="card-img-top"
            style=" width: auto; height: 420px;  !important;"
          />
          <div class="card-body" style="text-align: center">
            <h5 class="card-title">{{ i.title }}</h5>
            <hr />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <b>Release Date: </b>{{ i.release_date }}
              </li>
              <li class="list-group-item">
                <b>Vote Average: </b>{{ i.vote_average }}
              </li>

              <li class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="detail(i.id)"
                >
                  Detail
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="deleteFav(index)"
                >
                  Delete Favorite
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<div style="margin: auto; padding:5%;">  <button
      @click="goSearch"
      class="btn text-light"
      style="margin-left: 15px;  background: #000"
    >
      Go Search
    </button></div>
  
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
.favoriteMovies {
  padding: 50px;
}
.favoriteTitle {
  text-align-last: center;
  margin-bottom: 3%;
}
</style>