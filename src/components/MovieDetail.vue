<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-9 bg-white shadow-sm mt-3 mb-5 p-4">
        <h3>{{ detailMovie.data.original_title }}</h3>
        <br />
        <div class="d-flex">
          <img
            :src="photoUrl + detailMovie.data.poster_path"
            style="width: 350px"
          />
          <div style="margin-left: 30px; width: 100%">
            <ul style="width: 100%" class="list-group mt-1 rounded-0">
              <li class="list-group-item text-light" style="background: #000">
                Informations
              </li>
              <li class="list-group-item">
                <strong>Title: </strong>{{ detailMovie.data.title }}
              </li>
              <li class="list-group-item">
                <strong>Year: </strong> {{ detailMovie.data.release_date }}
              </li>
              <li class="list-group-item">
                <strong>Runtime: </strong>{{ detailMovie.data.runtime }} min
              </li>
              <li class="list-group-item">
                <strong>Status: </strong>{{ detailMovie.data.status }}
              </li>
              <li class="list-group-item">
                <strong>Popularity: </strong>{{ detailMovie.data.popularity }}
              </li>
              <li class="list-group-item">
                <strong>Vote Average: </strong
                >{{ detailMovie.data.vote_average }}
              </li>
              <li class="list-group-item">
                <strong>Vote Count: </strong>{{ detailMovie.data.vote_count }}
              </li>
              <li class="list-group-item">
                <strong>Original Language: </strong
                >{{ detailMovie.data.original_language }}
              </li>
              <li class="list-group-item">
                <strong>İmdb ID: </strong>{{ detailMovie.data.imdb_id }}
              </li>
              <li class="list-group-item">
                <strong>Budget: </strong>{{ detailMovie.data.budget }}$
              </li>
              <li class="list-group-item">
                <strong>Revenue: </strong>{{ detailMovie.data.revenue }}$
              </li>
              <li class="list-group-item">
                <strong>Home Page: </strong> {{ detailMovie.data.homepage }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5">
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light" style="background: #000">
              Overview
            </li>
            <li class="list-group-item">
              {{ detailMovie.data.overview }}
            </li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light" style="background: #000">
              Tagline
            </li>
            <li class="list-group-item">
              {{ detailMovie.data.tagline }}
            </li>
          </ul>
        </div>
      </div>
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
</style>