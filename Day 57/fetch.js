const apiUrl = "https://randomuser.me/api"
fetch(apiUrl)
.then((userData)=>{
    return userData.json()
})
.then((userData)=>{
    console.log(userData);
})
.catch((error)=>{
    console.log(error);
})

// github users
const gitApiUrl = "https://api.github.com/users"
fetch(gitApiUrl)
.then((GitUsers)=>{
    return GitUsers.json()
})
.then((GitUsers)=>{
    console.log(GitUsers[0]);
})
.catch((error)=>{
    console.log(error);
})

// get username, name, bio, avtar url
const user = "https://api.github.com/users/saurabhkumawatt"
fetch(user)
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(`Name: ${response.name}`);
    console.log(`Username: ${response.login}`);
    console.log(`Bio: ${response.bio}`);
    console.log(`Avatar url: ${response.avatar_url}`);
})
.catch((error)=>{
    console.log(error);
})