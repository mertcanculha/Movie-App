<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <div
          class="
            bg-white
            mt-5
            rounded
            shadow-sm
            d-flex
            justify-content-between
            bar
            p-3
            align-items-center
          "
          style="width: 700px; height: 60px"
        >
          <h4>Populer Movies</h4>
          <button
            @click="getFav"
            class="btn text-light"
            style="margin-left: 15px; background: #000"
          >
            Click for populer movies
          </button>
        </div>
      </div>
    </div>

    <div class="trendMovies">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div
          class="col"
          v-for="(i, index) in this.$store.state.trendMovies.results"
          :key="index"
        >
          <div class="card">
            <img
              :src="photoUrl + i.poster_path"
              alt="Movie Poster"
              class="card-img-top"
              style="width: auto; height: 420px"
            />
            <div class="card-body" style="text-align: center">
              <h5 class="card-title" style="font-size: 21px">{{ i.title }}</h5>
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
                    @click="setFavorite(i)"
                  >
                    Add Favorite
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="detail(i.id)"
                  >
                    Detail
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div><Search /></div>
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
        });
    },
    setFavorite(i) {
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
.trendMovies {
  padding: 5%;
}
.container {
  margin-block-start: 5%;
}
</style>