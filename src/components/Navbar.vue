<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/homepage">VUEFLIX</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link nav-item tag="li" to="/homepage">
            <li class="nav-item">
              <a class="nav-link">Home Page</a>
            </li>
          </router-link>
          <router-link nav-item tag="li" to="/moviedetail">
            <li class="nav-item">
              <a class="nav-link">Movie Detail</a>
            </li>
          </router-link>
          <router-link nav-item tag="li" to="/favorite">
            <li class="nav-item">
              <a class="nav-link">Favorites</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
