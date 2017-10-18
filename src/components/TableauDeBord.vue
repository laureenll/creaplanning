<template>
  <div class="container-fluid">
    <h1>{{ titreTableauDeBord }}</h1>
    <div class="divBoutonNouveauRdv">
      <button class="btn btn-primary">
        <span class="iconPlusRdv glyphicon glyphicon-plus"></span>{{createRdv}}
      </button>
    </div>
    <div id="planningGlobal">
      <calendar
        :first-day="1"
        :all-events="events"
      ></calendar>
    </div>
  </div>
</template>

<script>
  import Calendar from 'vue-bootstrap-calendar'
  export default {
    name: 'TableauDeBord',
    data () {
      return {
        events: [],
        titreTableauDeBord: 'Planning général',
        createRdv: 'Nouveau rendez-vous client'
      }
    },
    components: {
      Calendar
    },
    mounted () {
      setTimeout(function () {
        this.events = [ // you can make ajax call here
          {
            id: 1,
            title: 'Event 1',
            color: 'panel-danger',
            date: new Date()
          }
        ]
      }, 1000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iconPlusRdv {
    color: white;
    font-size:1.2em;
    margin-right:0.2em;
  }

  .divBoutonNouveauRdv {
    float: right;
    margin-right:5em;
  }
</style>
