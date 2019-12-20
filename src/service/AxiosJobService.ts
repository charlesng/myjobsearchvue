import axios from 'axios';
import ApiService from './JobService';
import Job from '../model/Job';

export default class AxiosJobService implements ApiService {
  private HOST = '/api';

  async getJobs(id: number): Promise<Job> {
    const res = await axios.get(`${this.HOST}/jobs/${id}`);
    return res.data.data;
  }

  async createJob(job: Job): Promise<Job> {
    const res = await axios.post(`${this.HOST}/jobs`, job);
    return res.data.data;
  }

  async updateJob(job: Job): Promise<Job> {
    const res = await axios.put(`${this.HOST}/jobs/${job.id}`);
    return res.data.data;
  }

  async deleteJob(id: number): Promise<Job> {
    const res = await axios.delete(`${this.HOST}/jobs/${id}`);
    return res.data.data;
  }

  async getAllJobs(): Promise<Job[]> {
    const res = await axios.get(`${this.HOST}/jobs`);
    return res.data.data;
  }
}
