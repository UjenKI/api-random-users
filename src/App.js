import React, {Component} from 'react';

import getData from './service/getData';
import UserList from './userList';
import Filters from './filters';

import './App.css';

export default class App extends Component{
    getData = new getData();

    state = {
        userList: [],
        filters: {
          gender: 'all',
          nat: 'all'
      }
    }

    updateUserList = () => {
        this.getData.getRandomUsers()
        .then((userList) => {
          this.setState({
            userList: userList
          })
        })
    }

    updateFilter = (gen, nat) => {
      this.setState({
        userList:[],
        filters: {
          gender: gen,
          nat: nat 
        }
      }, () => console.log(this.state.filters))
      this.updateUserList();
    }
    
    componentDidMount(){
      this.updateUserList()
    }

    filteredGender = (userList, filter) => {
      if(filter.nat === '') filter.nat = 'all';
      if(filter.gender == 'all') return userList;
      let filteredGender = userList.filter((item) => item.gender == filter.gender ).filter((item) => item.nat == filter.nat);

      return filteredGender;
    }

    render(){
      const { userList, filters} = this.state;
      const filteredUsers = this.filteredGender(userList, filters);
      return(
        <div>
          <h1>App</h1>
          <Filters updateFilter={this.updateFilter} state={this.state}/>
          <UserList userList={ filteredUsers } />
        </div>
      )
    }
}

