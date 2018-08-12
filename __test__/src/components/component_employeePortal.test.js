import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import EmployeePortal from '../../../src/components/component_employeePortal';

import { Dropdown, DefaultButton} from 'office-ui-fabric-react';
import { setTimeout } from 'timers';

configure({ adapter: new Adapter() });

let data  =  {"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"};

const component =  shallow(<EmployeePortal  empData={data}/>);

test('EmployeePortal', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EmployeePortal/>, div);
    });
}),

test('EmployeePortal snapshot rendering',()=>{
    expect(component).toMatchSnapshot()
}),

test('Form element is present ', ()=>{
    expect(component.find('.flex-row > form').length).toEqual(1)
});

test('All Input elemnets are rendered', ()=>{
    expect(component.find(Dropdown).length).toEqual(2)
});


test('Component expects empData prop',()=>{
    expect(component.instance().props.empData.id).toBe(1);
})