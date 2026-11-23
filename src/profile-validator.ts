
type User={
    readonly id:number,
    username:string,
    settings?:{
        notifications?:boolean
    }
};
let user1:User= {id:1,username:'John_Doe', settings:{notifications:true}};
let user2:User={id:2,username:'John'};
let user3:User={id:3, username: 'Jane_Doe',settings:{}};
function isNotified(user:User):boolean{
return user.settings?.notifications?? false;
}
console.log(user1.username, isNotified(user1));
console.log(user2.username, isNotified(user2));
console.log(user3.username, isNotified(user3));