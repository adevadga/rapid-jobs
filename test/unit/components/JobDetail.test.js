import React from 'react';
import {mount, shallow} from 'enzyme';

import JobDetailView from '../../../client/src/components/JobDetailView';
//import SimpleList from '../../../client/src/components/grid/SimpleList';
import jobsData from '../mockData/jobs.json';
//TODO: Needed since SimpleList uses Link. So its in need of context.
//import { MemoryRouter } from 'react-router-dom';

import ConnectedJobDetailView from '../../../client/src/containers/JobDetailView';
import configureStore from 'redux-mock-store';

describe('Component - JobDetailView',()=>{
    let wrapper;
    const jobDetail = {"jobDetail": jobsData.jobs[0]},
        mockClearJobDetail = jest.fn(),
        mockHandleBackClick = jest.fn(),
        mockFetchJob = jest.fn();
        
    beforeEach(() => {
        wrapper = mount(<JobDetailView jobDetail={jobDetail} fetchJob={mockFetchJob} clearJobDetail={mockClearJobDetail} handleBackClick={mockHandleBackClick}/>);
    })
    
    afterEach(() => {
       wrapper.unmount();
    })
    
    it('Should render the JobDetailView component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('Should render job detail view', () => {
       expect(wrapper.find('.job-detail')).toHaveLength(1);
       expect(wrapper.find('.backBtn')).toHaveLength(1);
    });
    
    it('Should invoke fetchJob API upon mount', () => {
       expect(mockFetchJob).toHaveBeenCalled();
    });
    
    it('Should invoke handleBackClick method when Back button is clicked.', () => {
       const backButton = wrapper.find('.backBtn');
       backButton.simulate('click');
       expect(mockClearJobDetail).toHaveBeenCalled();
       expect(mockHandleBackClick).toHaveBeenCalled();
    });
});

describe('Component - JobDetailView - Connected components',()=>{
    const initialState = {"jobDetail": jobsData.jobs[0]};
    const mockStore = configureStore();
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ConnectedJobDetailView store={store} /> );
    })

    it('Should render the connected component', () => {
       expect(container.length).toEqual(1);
    });

    it('Check Prop matches with initialState', () => {
       expect(container.prop('jobs')).toEqual(initialState.jobs);
    });
});
