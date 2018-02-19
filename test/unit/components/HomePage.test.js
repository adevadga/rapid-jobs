import React from 'react';
import {shallow} from 'enzyme';

import HomePage from '../../../client/src/components/HomePage';
import JobList from '../../../client/src/containers/JobList';

describe('Component - HomePage',()=>{
    let wrapper;
        
    beforeEach(() => {
        wrapper = shallow(<HomePage/>);
    })
    
    afterEach(() => {
       wrapper.unmount();
    })
    
    it('Should render the HomePage component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('Should render a JobList upon render', () => {
       expect(wrapper.find(JobList)).toHaveLength(1);
    });
});
