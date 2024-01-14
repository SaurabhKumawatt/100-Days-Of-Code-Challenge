const requestUrl = "https://api.github.com/users/saurabhkumawatt"
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.name);
        const Name = data.name
        console.log(data.bio);
        const Bio = data.bio
        const AvtarURL = data.avatar_url
        const fullName = document.querySelector(".name")
        const userBio = document.querySelector('.bio')
        const userAvtar = document.querySelector('.avtar')
        userAvtar.setAttribute('src', AvtarURL)
        fullName.innerHTML = `<span id="name">${Name}</span>`
        userBio.innerHTML = `<span id="bio">${Bio}</span>`
    }
}
xhr.send()