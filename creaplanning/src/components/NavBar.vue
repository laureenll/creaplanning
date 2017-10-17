<template>
  <nav id="navBarTemplate" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <span class="titreApp">{{logo}}</span>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            {{prenomUtilisateur}} {{nomUtilisateur}}
          </li>
          <li>
            <router-link to="/">
              <span class="bootstrapIconTest glyphicon glyphicon-off" aria-hidden="true"></span>
            </router-link>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      projectName: 'Test application VueJs',
      prenomUtilisateur: 'Nadine',
      nomUtilisateur: 'LOISON',
      logo: 'Créa\'planning'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bootstrapIconTest {
    color: white;
    font-size: 1.5em;
  }
  .titreApp {
    font-size:2em;
    color:white;
  }
</style>
