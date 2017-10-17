import Vue from 'vue'
import Router from 'vue-router'
import TableauDeBord from '@/components/TableauDeBord'
import Connexion from '@/components/Connexion'
import ProfilUtilisateur from '@/components/ProfilUtilisateur'
import Administration from '@/components/Administration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/tableauDeBord',
      name: 'TableauDeBord',
      component: TableauDeBord
    },
    {
      path: '/profil',
      name: 'ProfilUtilisateur',
      component: ProfilUtilisateur
    },
    {
      path: '/admin',
      name: 'Administration',
      component: Administration
    }
  ]
})
