import React, {Component} from 'react';

import getData from '../service/getData';

import './filters.css';

export default class Filters extends Component{

    getData = new getData();

    state = {
        userList:[],
        filters: {
            gender: '',
            nat: '',
            allNat: ''
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

    componentDidMount(){
        this.getData.getRandomUsers()
        .then((userList) => {
            this.setState({
                userList:userList
            })
        })
    }

    selectFilters = (e) => {
        e.preventDefault();
        const gen = document.getElementById('gender__filter').value;
        const natt = document.getElementById('nat__filter');
        const selected = [...natt.options].filter(option => option.selected).map(option => option.value);
        const lll = this.state.filters.nat


        const updateNat = [...lll, ...selected]
        console.log(updateNat);
        
        this.setState({
            filters: {
                gender: gen,
                nat: updateNat
            }
        })
        // const { filters } = this.state;
        this.props.updateFilter(gen, updateNat);
    }

    natFilter = (userList) => {
        // const arrNat = [];
        const nat = userList.map(item =>  item.nat).filter((val, id, array) => {
            return array.indexOf(val) == id;
        })
        // nat.forEach(item => arrNat.push(item))
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
        const { userList } = this.state;
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
