import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
import { JOB_ACTIONS } from '../../client/src/consts/actionTypes';
import jobsData from '../data/jobs.json';
import App from '../../client/src/app';

const router = express.Router();

router.get('/jobs', (req, res) => {
    res.send(jobsData);
    //res.end();
});

router.get('/job/:jobId', (req, res) => {
    const jobId = parseInt(req.params.jobId); 
    const jobs = jobsData.jobs;
    for (let job of jobs) {
        if (jobId === job.jobId) {
            return res.send(job);
            //res.end();
        }
    }
    
    res.send("Invalid job id");
    //res.end();
});

router.get('/', (req, res) => {
  
  const store = createStore(reducers);

  //dispatch action from server side to inject some initial data. Add a sample job here.
  store.dispatch({
    type: JOB_ACTIONS.ADD_JOB,
    job: {
      jobId: 1,
      jobTitle: 'Software Engineer',
      companyName: 'Windmill Inc.',
      jobDescription: `Some random description`,
      avatar: 'http://materializecss.com/images/yuna.jpg'
    },
  });

  const context = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  const finalState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
    });
  }
});

export default router;
