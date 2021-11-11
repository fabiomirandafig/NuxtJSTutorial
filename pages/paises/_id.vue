<template>
  <!-- <h1>Você está em : País {{ this.idPaís }}</h1> -->
  <!-- <h1>Você está em: País {{ this.pais.nome }}</h1> -->
  <h1>Você está em: País {{ id }}</h1>
</template>

<script>
// export default {
//   asyncData ({ params }) {
//     const idPaís = params.país
//     return {
//       idPaís
//     }
//   }
// }
// export default {
//   asyncData ({ params }) {
//     const idPais = +params.pais
//     const paises = [{ id: 1, nome: 'Angola' }, { id: 2, nome: 'Brasil' },
//       { id: 3, nome: 'Cabo Verde' }, { id: 4, nome: 'Portugal' }]

//     const pais = paises.find(x => x.id === idPais)
//     return {
//       pais
//     }
//   }
// }
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  data () {
    return {
      id: this.$route.params.id,
      pais: [{ id: 1, nome: 'Angola' }, { id: 2, nome: 'Brasil', content: 'País sul americano penta campeão mundial' }, { id: 3, nome: 'Cabo Verde' }, { id: 4, nome: 'Portugal' }]
        .find(x => x.id === +this.$route.params.id)
    }
  },
  head () {
    return {
      title: this.pais.nome,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.pais.content
        }
      ]
    }
  }
}
</script>
