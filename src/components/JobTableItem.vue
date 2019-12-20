<template>
  <v-card class="pa-1 mb-4">
    <v-container>
      <v-row class="text-left">
        <v-col md="1" sm="3" cols="3" class="d-flex align-center justify-center">
          <v-avatar size="50" color="#EBEBEB" tile>
            <img :src="job.img_src" alt="avatar" />
          </v-avatar>
        </v-col>
        <v-col md="5" sm="9" cols="9" class="pa-4">
          <div class="subtitle-1 font-weight-bold">{{ job.title }}</div>
          <div class="subtitle-2 grey--text font-weight-regular">{{ job.company_name }}</div>
        </v-col>
        <v-col md="4" sm="6" cols="12" class="pa-4">
          <div class="subtitle-1 font-weight-bold">{{ job.location }}</div>
          <div class="subtitle-2 grey--text font-weight-regular">Location</div>
        </v-col>
        <v-col md="2" sm="6" cols="12" class="pa-4">
          <div class="subtitle-1 font-weight-bold">{{ job.salary }}</div>
          <div class="subtitle-2 grey--text font-weight-regular">{{ job.salary_period }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Job from '../model/Job';

@Component
export default class JobTableItem extends Vue {
  @Prop({
    default: {
      company_name: 'Default Company Name',
    } as Job,
  })
  job!: Job;

  @Prop({
    default: 'Default Title',
  })
  title!: String;
}
</script>
