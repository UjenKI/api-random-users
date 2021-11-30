import React, {Component} from 'react';

// import UserListItem from './userListItem';
import getData from '../service/getData';

import './userList.css';

export default class UserList extends Component{
    getData = new getData();

    state = {
        userList: []
    }

    randomUsers(array){
        let i = array.length - 1;
        for (; i > 0; i--) {
            if(array.length === 15){
                return
            }
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        console.log(array);
        return array;
    }

    componentDidMount(){
        this.getData.getRandomUsers()
            .then((userList) => {
                userList = this.randomUsers(userList)
                this.setState({userList})
            })
    }

    renderItems(users){
        return users.map((user, i) => {
            return (
                <li 
                    key={i}
                    className='userCard'>
                <div className="userPhoto">
                    <img src={user.picture.large} alt="img"/>
                </div>   
                <div className="description">
                    <p className="name">
                        {user.name.title}{user.name.first}{user.name.last}
                    </p>
                    <p>
                        {user.gender}
                    </p>
                    <p>
                        {user.email}
                    </p>
                    <p>
                        {user.nat}
                    </p>
                    <p>
                        birthday: {user.date.date}, age: {user.date.age}
                    </p>
                </div> 
           </li>
            )
        })
    }

    render(){
        const {userList} = this.state;
        let limit = userList.slice(0, 15);
        const item = this.renderItems(limit);
        // console.log(userList);
        return(
            <div>
                <h1>userList</h1>
                <ul className="userList">
                    {item}
                     {/* <UserListItem userList={userList}/> */}
                </ul>
            </div>
        )
    }
}