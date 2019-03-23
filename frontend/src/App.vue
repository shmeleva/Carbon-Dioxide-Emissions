<template>
  <div id="app">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12">
          <nav id="nav" class="navbar navbar-expand-md px-0">
            <div class="navbar-nav mr-auto">
              <router-link to="/">
                <font-awesome-icon class="mr-2" :icon="['fas', 'smog']" size="lg"/>
                <span class="page-title text-uppercase">
                  <span class="mr-0">CO</span>
                  <span class="sub">2</span>
                  <span class="mx-2">emissions</span>
                </span>
              </router-link>
            </div>
            <div class="navbar-nav ml-auto">
              <router-link to="/lifetime">
                <font-awesome-icon :icon="['fas', 'user-astronaut']" size="lg"/>
              </router-link>
            </div>
          </nav>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./scss/bootstrap.config.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css?family=Raleway");

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: theme-color("primary");
    }
    text-decoration: none;
    text-decoration-line: none;
  }
}

.page-title {
  font-size: 1rem;
}

.sub {
  vertical-align: sub;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
