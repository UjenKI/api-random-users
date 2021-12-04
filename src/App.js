import React, { Component } from 'react';

import getData from './service/getData';
import UserList from './userList';
import Filters from './filters';

import './App.css';

export default class App extends Component {
  getData = new getData();

  state = {
    userList: [],
    filters: {
      gender: 'all',
      nat: ''
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
      userList: [],
      filters: {
        gender: gen,
        nat: nat
      }
    }, () => console.log(this.state.filters))
    this.updateUserList();
  }

  componentDidMount() {
    this.updateUserList()
  }

  filteredNationality = (userList, filter) => {
    if (filter.nat === '') return userList;
    return userList.filter((item) => {
      for (let i = 0; i < filter.nat.length; i++) {
        if (item.nat == filter.nat[i]) {
          return item;
        }
      }
    })
  }

  filteredGender = (userList, filter) => {
    const users = this.filteredNationality(userList, filter);
    console.log(users)
    if (filter.gender == 'all') return users;
    const filteredGender = users.filter((item) => item.gender == filter.gender);
    console.log(filteredGender);
    return filteredGender;
  }

  render() {
    const { userList, filters } = this.state;
    const filteredUsers = this.filteredGender(userList, filters);
    return (
      <div>
        <h1>App</h1>
        <Filters updateFilter={this.updateFilter} state={this.state} />
        <UserList userList={filteredUsers} />
      </div>
    )
  }
}

