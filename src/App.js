import React, {Component} from 'react';

import getData from './service/getData';
import UserList from './userList';
import Filters from './filters';

import './App.css';

export default class App extends Component{
    getData = new getData();

    state = {
        userList: [],
        filter: 'male'
    }

    // randomUsers(array){
    //   let i = array.length - 1;
    //   for (; i > 0; i--) {
    //       if(array.length === 15){
    //           return
    //       }
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    //   }
    //   return array;
    // }

    updateUserList = (userList) => {
      this.setState({
        userList: userList
      })
    }

    updateFilter = (filter) => {
      this.setState({
        filter: filter
      })
      console.log(this.state);
    }

    componentDidMount(){
      this.getData.getRandomUsers()
          .then((userList) => {
              // userList = this.randomUsers(userList);
              // this.filteredGender(userList);
              this.setState({
                userList:userList
              })
          })
    }

    filteredGender = (userList) => {
      const lowerCaseGender = userList.map(item => item.gender.toLowerCase());
      let filteredGender = this.state.userList.filter(user => 
        user.gender.toLowerCase().indexOf(lowerCaseGender) !== -1
      );
        this.updateUserList(filteredGender);
    }

    render(){
      const { userList } = this.state;
      return(
        <div>
          <h1>App</h1>
          <Filters updateFilter={this.updateFilter} filteredGender={this.filteredGender} state={this.state.userList}/>
          <UserList userList={ userList }/>
        </div>
      )
    }
}

