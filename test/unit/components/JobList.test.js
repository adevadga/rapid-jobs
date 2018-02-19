import React from 'react';
import {mount, shallow} from 'enzyme';

import JobList from '../../../client/src/components/JobList';
import SimpleList from '../../../client/src/components/grid/SimpleList';
import jobsData from '../mockData/jobs.json';
//TODO: Needed since SimpleList uses Link. So its in need of context.
import { MemoryRouter } from 'react-router-dom';

import ConnectedJobList from '../../../client/src/containers/JobList';
import configureStore from 'redux-mock-store';

describe('Component - JobList',()=>{
    let wrapper;
    const jobs = jobsData.jobs,
        mockViewJob = jest.fn(),
        mockFetchJobs = jest.fn();
        
    beforeEach(() => {
        wrapper = mount(<MemoryRouter><JobList jobs={jobs} viewJob={mockViewJob} fetchJobs={mockFetchJobs}/></MemoryRouter>)
    })
    
    afterEach(() => {
       wrapper.unmount();
    })
    
    it('Should render the JobList component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('Should render a SimpleList upon render', () => {
       expect(wrapper.find(SimpleList)).toHaveLength(1);
    });
    
    it('Should invoke FetchJobs API upon mount', () => {
       expect(mockFetchJobs).toHaveBeenCalled();
    });
});

describe('Component - JobList - Connected components',()=>{
    const initialState = jobsData;
    const mockStore = configureStore();
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ConnectedJobList store={store} /> );
    })

    it('Should render the connected component', () => {
       expect(container.length).toEqual(1);
    });

    it('Check Prop matches with initialState', () => {
       expect(container.props().jobs).toEqual(initialState.jobs);
    });

});
