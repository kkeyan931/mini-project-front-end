<template>
  <nav>
    <router-link to="/"
      ><span style="font-size: 25px">Students</span></router-link
    >
    |
    <router-link to="/subject"
      ><span style="font-size: 25px">Subjects</span></router-link
    >
    |
    <router-link to="/marks"
      ><span style="font-size: 25px">Marks</span></router-link
    >
    |
    <router-link to="/average"
      ><span style="font-size: 25px">Average</span></router-link
    >
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
