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
    <form style="display: inline;margin:0;border:0;padding:0;" action="/logout" method="POST">
      <input class="btn" type="submit" value="Log out"/>
    </form>
  </nav>
  <router-view />
</template>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  background: red;
  color: aliceblue;
  padding: 12px 20px;
  text-align: center;
  cursor: pointer;
  width : 100px;
  margin-bottom: 0;
  opacity: 0.8;
  font-size: 18px;
  border: 0;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
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
