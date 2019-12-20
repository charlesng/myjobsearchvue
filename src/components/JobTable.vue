<template>
  <div>
    <!-- Add Header -->
    <JobTableItem v-for="job in jobs" v-bind:key="job.title" v-bind:job="job" />
    <!-- Add Footer -->
    {{ info }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Job from '../model/Job';
import JobTableItem from './JobTableItem.vue';
import JobService from '../service/JobService';
import AxiosJobService from '../service/AxiosJobService';

type JobTablePropos = { jobs: Job[] };

@Component({
  components: { JobTableItem },
})
export default class JobTable extends Vue {
  @Prop({ default: [] as Job[] })
  private jobs!: Job[];

  @Prop({ default: '' as String })
  private info!: Object;

  private apiService: JobService = new AxiosJobService();

  async mounted() {
    this.jobs = await this.apiService.getAllJobs();
  }
}
</script>
