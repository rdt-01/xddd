<template>
  <section>
    <Navbar />
    <v-layout wrap mt-6 justify-center>
      <v-flex sm4>
        <v-card class="mx-auto">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text>Click</v-btn>
            <v-btn outlined>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <HelloWorld />
    </v-layout>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import HelloWorld from "../components/HelloWorld.vue" 
export default {
components: { Navbar, HelloWorld } }
</script>