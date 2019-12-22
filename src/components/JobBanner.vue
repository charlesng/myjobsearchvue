<template>
  <v-card>
    <v-img
      class="black--text align-end"
      src="../assets/city.jpg"
      height="300"
      contain
      position="bottom left"
    >
      <div class="display-1 font-weight-bold">
        My Job Search
      </div>
      <div class="subtitle-2 font-weight-light">
        14000 jobs posted in 2019
      </div>
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="9" sm="8"
            ><v-text-field
              prepend-inner-icon="mdi-magnify"
              label="Search"
              placeholder="Search your dream job"
              hide-details
              solo
          /></v-col>
          <v-col cols="12" md="3" sm="4" class="text-left text-sm-center"
            ><v-btn color="primary">Advance Filter</v-btn></v-col
          >
        </v-row>
      </v-container>
    </v-img>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class JobBanner extends Vue {}
</script>
