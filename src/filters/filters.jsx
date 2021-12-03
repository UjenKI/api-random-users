import React, {Component} from 'react';

import './filters.css';

export default class Filters extends Component{

    state = {
        filters: {
            gender: '',
            nat: ''
        }
    }
    // userList = this.props.userList;

    // genderFilter = (e) => {
    //     const ganderFilters = e.target.value;
    //     this.setState({
    //         filters: {
    //             gender: ganderFilters
    //         }
    //     });
    // }

    selectFilters = (e) => {
        e.preventDefault();
        const gen = document.getElementById('gender__filter').value;
        const natt = document.getElementById('nat__filter');
        const selected = [...natt.options].filter(option => option.selected).map(option => option.value);
        // this.setState({
        //     filters: {
        //         gender: gen,
        //         nat: selected
        //     }
        // })
        // const { filters } = this.state;
        this.props.updateFilter(gen, selected);
    }

    // nationalFilter = () => {
    //     const natt = document.getElementById('nat__filter');
    //     const selected = [...natt.options].filter(option => option.selected).map(option => option.value);
    //     this.setState({
    //         filters:{
    //             nat:selected
    //         }
    //     })
    // }

    natFilter = (userList) => {
        const nat = userList.map(item =>  item.nat).filter((val, id, array) => {
            return array.indexOf(val) == id;
        })
        return nat;
    }

    optionBuilder = (arrayFilter) => {
        return arrayFilter.map((item, i) => {
            return(
                <option value={item} key={i}>{item}</option>
            )
        })
    }

    render(){
        // const { filters } = this.state;
        // console.log(filters);
        const { userList } = this.props.state;
        // console.log(userList);
        const natValue = this.natFilter(userList);
        // console.log(natValue);
        const optionNat = this.optionBuilder(natValue);
        // console.log(optionNat);
        return(
            <div className="filter__wrapper">
                <form action="">
                    <div className="gender__filter">
                        <select name="gender" id="gender__filter">
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="nationality__filter">
                        <select name="nat" id="nat__filter" multiple="multiple">
                        <option value="all">All</option>
                         { optionNat }
                        </select>
                    </div>
                    {/* <button onClick={(e) => this.props.updateFilter(filters, e)}>Apply filters</button> */}
                    <button onClick={this.selectFilters}>Apply filters</button>
                </form>
            </div>
        )
    }
}
