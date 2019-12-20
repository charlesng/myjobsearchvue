import Job from '../model/Job';
export default interface JobService {
  getAllJobs(): Promise<Job[]>;
  getJobs(id: number): Promise<Job>;
  createJob(job: Job): Promise<Job>;
  updateJob(job: Job): Promise<Job>;
  deleteJob(id: number): Promise<Job>;
}
