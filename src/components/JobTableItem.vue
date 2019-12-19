<template>
  <v-card class="pa-1 mb-4">
    <v-container>
      <v-row class="text-left">
        <v-col cols="1" class="d-flex align-center justify-center">
          <v-avatar size="50" color="#EBEBEB" tile>
            <img :src="job.img_src" alt="avatar" />
          </v-avatar>
        </v-col>
        <v-col cols="5">
          <div class="subtitle-1 font-weight-bold">{{ job.title }}</div>
          <div class="subtitle-2 grey--text">{{ job.company_name }}</div>
        </v-col>
        <v-col cols="4">
          <div class="subtitle-1 font-weight-bold">{{ job.location }}</div>
          <div class="subtitle-2 grey--text">Location</div>
        </v-col>
        <v-col cols="2">
          <div class="subtitle-1 font-weight-bold">{{ job.salary }}</div>
          <div class="subtitle-2 grey--text">{{ job.salary_period }}</div>
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
