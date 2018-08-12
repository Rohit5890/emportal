import React, {Component} from 'react';

import { Dropdown, DefaultButton,Image} from 'office-ui-fabric-react';

import makeApiCall_actionCreator from '../actionCreators/actionCreators_makeApiCallActionCreator';

class EmployeePortal extends Component {
    constructor(props){
        super(props);
        this.state = {
            _hr:[{ key: '1', text: 1, stateKey:'empKey' },{ key: '2', text: 2, stateKey:'empKey' },{ key: '3', text: 3, stateKey:'empKey' },{ key: '4', text: 4, stateKey:'empKey' },{ key: '5', text: 5, stateKey:'empKey' }],
            _eng:[{ key: '6', text: 6, stateKey:'empKey' },{ key: '7', text: 7, stateKey:'empKey' },{ key: '8', text: 8, stateKey:'empKey' },{ key: '9', text: 9, stateKey:'empKey' },{ key: '10', text: 10, stateKey:'empKey' }],
            deptKey:'',
            empKey:'',
            key:'',
            loading: false
        }      
    }

    handleSubmit(e){
        e.preventDefault();
        let URL =  `https://reqres.in/api/users/${this.state.empKey}`;
        this.props.dispatch(makeApiCall_actionCreator(URL));
        this.setState({
            loading: true
        })
    }
    handleChange(e){
        this.setState((prevState)=>{
        return {
            [e.stateKey]: e.key,
            key: Number.isNaN(parseInt(e.key,10)) ? e.key : prevState.key
        }});
    }
    resetData(e){
        this.src = this.id = this.fullName ='';

        this.setState({
              deptKey:"",
              empKey:"",
              key:"",
        });
    }

    componentWillReceiveProps(nextProps){
        this.src = nextProps.empData.avatar;
        this.id =  nextProps.empData.id;
        this.fullName = `${nextProps.empData.first_name} ${nextProps.empData.last_name}`
        this.setState({
            loading: false,  
        })
    }
    render(){
        return (
            <div className="wrapper">
                <div className="flex-row">
                    <form onSubmit={(e)=>{this.handleSubmit(e)}} onReset={(e)=>{this.resetData(e)}}>
                    <Dropdown
                        label="Departments:"
                        selectedKey={this.state.deptKey}
                        onChanged={(e)=>{this.handleChange(e)}}
                        placeHolder="Select an Department"
                        options={[
                            { key: '_hr', text: 'HR', stateKey:'deptKey' },
                            { key: '_eng', text: 'Engineering', stateKey:'deptKey' }
                        ]}
                    />
                    <Dropdown
                        label="Employee Id:"
                        selectedKey={this.state.empKey}
                        onChanged={(e)=>{this.handleChange(e)}}
                        onFocus=""
                        onBlur=""
                        placeHolder="Select an Department"
                        options={this.state[this.state.key]}
                    />
                    <DefaultButton
                        className='submit'
                        type="submit"
                        primary={true}
                        data-automation-id="test"
                        allowDisabledFocus={true}
                        checked={`checked`}
                        text="Get Details"
                    />
                    <DefaultButton
                        className='reset'
                        type="reset"
                        primary={true}
                        data-automation-id="test_one"
                        allowDisabledFocus={true}
                        checked={`checked`}
                        text="Clear"
                    />
                    </form>
                    <div className="details-wrap">
                        {this.state.loading &&
                        <div className='spinner-wrap'>Loading............
                        <p className="spinner"></p>
                        </div>
                        }
                        { this.id && 
                        <div className="emp-wrap">
                            <Image
                                src={this.src}
                                alt="Example implementation of the property image fit using the center value on an image smaller than the frame."
                            />
                            <span>ID:{this.id}</span>
                            <span>Name:{this.fullName}</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeePortal;