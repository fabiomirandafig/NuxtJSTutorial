<template>
  <div>
    <h1>Países</h1>
    <ul>
      <li v-for="pais in paises" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
        <v-btn depressed color="primary" @click="adicionarFavorito(pais)">
          Add favorito
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      paises: [{ id: 1, nome: 'Angola' }, { id: 2, nome: 'Brasil' },
        { id: 3, nome: 'Cabo Verde' }, { id: 4, nome: 'Portugal' }]
    }
  },
  methods: {
    ...mapActions('paises', ['adicionarFavorito'])
    // ...mapActions({ adicionarFavorito: 'paises/adicionarFavorito' })
  }
}
</script>
