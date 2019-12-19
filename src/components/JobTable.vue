<template>
  <div>
    <!-- Add Header -->
    <JobTableItem v-for="job in jobs" v-bind:key="job.title" v-bind:job="job" />
    <!-- Add Footer -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Job from '../model/Job';
import JobTableItem from './JobTableItem.vue';

type JobTablePropos = { jobs: Job[] };

export default Vue.extend({
  name: 'JobTable',
  components: {
    JobTableItem,
  },

  data() {
    return {
      jobs: [
        {
          title: 'Software Engineer',
          company_name: 'Google Inc.',
          location: 'USA',
          description: 'default description',
          img_src: 'https://avatars0.githubusercontent.com/u/1342004?s=400&v=4',
          salary: ' 210k',
          salary_period: 'Yearly',
        },
        {
          title: 'Software Engineer2',
          company_name: 'Google Inc.',
          location: 'USA',
          description: 'default description',
          img_src: 'https://avatars0.githubusercontent.com/u/1342004?s=400&v=4',
          salary: ' 210k',
          salary_period: 'Yearly',
        },
      ],
    } as JobTablePropos;
  },
});
</script>
