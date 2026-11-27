
type User={
    readonly id:number,
    username:string,
    settings?:{
        notifications?:boolean
    }
};
const userWithNotificationsOn:User= {id:1,username:'John_Doe', settings:{notifications:true}};
const userWithNoSettings:User={id:2,username:'John'};
const userWithEmptySettings:User={id:3, username: 'Jane_Doe',settings:{}};
const userOptedOut: User = { id: 4, username: 'Opted_Out', settings: { notifications: false } };
function hasNotificationsEnabled(user:User):boolean{
return user.settings?.notifications?? false;
}
console.log(userWithNotificationsOn.username, hasNotificationsEnabled(userWithNotificationsOn));
console.log(userWithNoSettings.username, hasNotificationsEnabled(userWithNoSettings));
console.log(userWithEmptySettings.username, hasNotificationsEnabled(userWithEmptySettings));
console.log(userOptedOut.username, hasNotificationsEnabled(userOptedOut));