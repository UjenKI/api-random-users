import React, { Component } from 'react';
import './userList.css';

export default class UserList extends Component {
    renderItems(users) {
        return users.map((user, i) => {
            return (
                <li
                    key={i}
                    className='userCard'>
                    <div className="userPhoto">
                        <img src={user.picture.large} alt="img" />
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

    render() {
        const { userList } = this.props;
        const limit = userList.slice(0, 15);
        const item = this.renderItems(limit);
        return (
            <div>
                <h1>userList</h1>
                <ul className="userList">
                    {item}
                </ul>
            </div>
        )
    }
}