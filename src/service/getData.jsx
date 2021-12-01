export default class  getData {
    constructor(){
        this._apiBase = 'https://randomuser.me/api/?results=100';
    }
    async getResource(){
        const res = await fetch(`${this._apiBase}`);

        if(!res.ok){
            throw new Error((`Could not fetch ${this._apiBase}, answer - ${res.status}`));
        }

        return await res.json();
    }

    async getRandomUsers(){
        const users = await this.getResource();
        // console.log(users.results.map(this._transformUsers));
        return users.results.map(this._transformUsers);
    }

    _transformUsers(user){
        return {
            gender: user.gender,
            name: user.name,
            email: user.email,
            date: user.dob,
            picture: user.picture,
            nat: user.nat
        }
    }
}