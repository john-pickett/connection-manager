<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{appTitle}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
        <div class="nav-links">
            <router-link to="/">Dashboard</router-link> |
            <router-link to="/list">Contacts List</router-link>
        </div>
        <v-container fluid>
            <router-view />
        </v-container>  
        <v-footer height="50px" color="">
                
        </v-footer>
    </v-content>
  </v-app>
</template>

<script>

export default {
    name: 'App',
    data () {
        return {
            appTitle: process.env.VUE_APP_TITLE
        }
    },
    created () {
        this.$store.dispatch('LOAD_CONTACT_DATA').then(() => {
            console.log('initial data loaded')
        })
    }
}
</script>

<style lang="scss">
    .nav-links{
        padding-top: 10px;
        text-align: center;
        font-size: 18px;
    }
</style>
