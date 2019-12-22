<template>
  <div>
    <!-- Add Header -->
    <JobTableItem v-for="job in jobs" :key="job.title" :job="job" />
    <!-- Add Footer -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Job from '../model/Job';
import JobTableItem from './JobTableItem.vue';
import JobService from '../service/JobService';
import AxiosJobService from '../service/AxiosJobService';

@Component({
  components: { JobTableItem },
})
export default class JobTable extends Vue {
  private jobs: Job[] = [];

  private apiService: JobService = new AxiosJobService();

  async mounted() {
    this.jobs = await this.apiService.getAllJobs();
  }
}
</script>
