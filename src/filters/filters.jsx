import React, {Component} from 'react';

export default class Filters extends Component{

    // state = {
    //     filters: ''
    // }
    userList = this.props.userList;

    genderFilter = (e) => {
        const filters = e.target.value;
        // this.setState({filters})
        // console.log(this.state);
        // localStorage.setItem('featurelist',filters);
        this.props.updateFilter(filters);
    }

    // applyFilters = (e) => {
    //     e.prevent.default();
    // }

    render(){
        return(
            <div className="filter__wrapper">
                <form action="">
                    <div className="gender__filter">
                        <select name="gender" id="gender__filter" onChange={this.genderFilter}>
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="nationality__filter">

                    </div>
                    <button onClick={() => this.props.filteredGender(this.userList)}>Apply filters</button>
                </form>
            </div>
        )
    }
}
