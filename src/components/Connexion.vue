<template>
  <div class="container-fluid">
    <div class="container">
      <div class="alert alert-danger" v-if="hasErrors">
        <ul>
          <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
        </ul>
      </div>
    </div>

    <div id="connexion" class="container-fluid">
      <div class="row">
        <h2>Connexion</h2>
        <form name="connexionForm" @submit.prevent="submitFormConnexion" class="formConnexionStyle col-sm-4 col-sm-offset-4">
          <div class="form-group row">
            <label class="formLabelStyle col-sm-3 col-form-label">Identifiant : </label>
            <input class="formInputStyleConnexion form-control col-sm-7" placeholder="Email" v-model='login'/>
          </div>
          <div class="form-group row">
            <label class="formLabelStyle col-sm-3 col-form-label">Mot de passe : </label>
            <input class="formInputStyleConnexion form-control col-sm-7" placeholder="Mot de passe" type="password" v-model='password'/>
          </div>
          <div class="form-group row">
            <div>
              <button class="boutonSubmitConnexion btn btn-primary">Connexion</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableauDeBord',
  data () {
    return {
      login: '',
      password: '',
      authentificationOK: false,
      token: null,
      errors: [],
      response: []
    }
  },
  methods: {
    submitFormConnexion () {
      this.$router.push('TableauDeBord')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .formInputStyleConnexion {
    width: 70%;
    display: inline-block;
  }

  .formLabelStyle {
    vertical-align: middle;
    text-align: right;
  }

  .formConnexionStyle {
    margin-top: 1em;
  }

  .boutonSubmitConnexion {
    float: right;
    margin-right: 2em;
  }
</style>
