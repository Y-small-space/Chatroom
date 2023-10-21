"use strict";
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
// const admins = db.filterUsers(function (this: User) {
//     return this.admin
// })
// 箭头函数不可以指定this
// const admins = db.filterUsers((this:User)=>{
//     return this.admin
// })
// console.log(admins)
