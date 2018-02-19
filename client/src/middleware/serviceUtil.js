export function fetchJobsData() {
  return fetch(`/jobs`)
    .then(response => {
      return response.json();
    }).then( data => {
      if (data) {
        return data.jobs;
      }
      throw "No data found";
    })
    .catch( error => {
      return error;
    });
}

export function getJob(jobId) {
  return fetch(`/job/${jobId}`)
    .then(response => {
      return response.json();
    }).then( data => {
      return data;
    })
    .catch( error => {
      return error;
    });
}