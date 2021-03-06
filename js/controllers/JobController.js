/**
 * @class JobController - Controller for jobs
 */
class JobController {
    /**
   * @constructor Constructor of JobController
   */
    constructor() {
        
        this.fetcher = fetcherObject;
        this.jobsEndPoint = "jobs";
    }

    /**
   * List all jobs
   * @returns {Array} Job
   */
    async all() {
        const data = await this.fetcher.fetch(this.jobsEndPoint);
        const objs = data.map(d => new Job(d));
        return objs;
    }
    
    /* create job */
    async create(job) {
        delete job.props.id;
        const data = job.props;
        const r = await this.fetcher.post(this.jobsEndPoint, data);
        return r;
    }

    /*delete job*/
    async delete(jobId) { // expecting the job id (String or int)
        const r = await this.fetcher.delete(this.jobsEndPoint, jobId);
        return r;
    }

    /**
   * Filter by Title
   */
    async filterByTitle(title){
        let data = await this.fetcher.fetch(this.jobsEndPoint);
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.title === title));
        return objs;
    }

    /**
   * Filter by Salary
   */
    async filterBySalary(salary){   
        let data = await this.fetcher.fetch(this.jobsEndPoint);
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.salary === salary));
        return objs;
    }

    /**
   * Filter by StartDate
   */
    async filterByStartDate(startDate){   
        let data = await this.fetcher.fetch(this.jobsEndPoint);
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.startDate === startDate));
        return objs;
    }
}
