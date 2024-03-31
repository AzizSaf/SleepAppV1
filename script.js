
// menu 
let MenuBtn =
  document.querySelector('.MenuBtn')
let CloseMenu =
  document.querySelector('.CloseMenu')
let MenuBox =
  document.querySelector('.MenuBox')

MenuBtn.addEventListener('click', openMenu)
function openMenu() {
  MenuBox.style.left = '0%'
}
CloseMenu.addEventListener('click', closeMenu)
function closeMenu() {
  MenuBox.style.left = '-100%'
}

// Menu Items
let Profile =
document.querySelector('.Profile')
let ProfileBox =
  document.querySelector('.ProfileBox')
  
Profile.addEventListener('click', openProfileBox)
function openProfileBox() {
  ProfileBox.style.display = 'flex'
  setTimeout(() => {
    ProfileBox.style.right = "0"
  }, 40)
  let ProfileNav =
     document.createElement('div')
  ProfileNav.className = 'ProfileNav'
  ProfileBox.append(ProfileNav)
  let Back =
    document.createElement('img')
  Back.src = "./Src/MusicList/back.png"
  Back.setAttribute('onclick', 'closeProfileBox()')
  ProfileNav.append(Back)
  let Title =
    document.createElement('h1')
  Title.textContent = "Profile"
  ProfileNav.append(Title)
  let UserImg = 
    document.createElement('div')
  UserImg.innerHTML = 
  `<img src="./Src/ProfileBox/user.png">`
  UserImg.className = 'UserImg'
  ProfileBox.append(UserImg)
  let getUserData = JSON.parse(localStorage.getItem('UserInfo'))
  let UserName =
    document.createElement('div')
  UserName.innerHTML =
    `<p>${getUserData.userName}</p>`
  UserName.className = 'UserName'
  ProfileBox.append(UserName)
  let UserInfo =
    document.createElement('div')
  UserInfo.innerHTML =
    `<label>Your Email:</label>
    <input type="text" readonly value=${getUserData.email}>
    <br>
    <label>Your Password:</label>
    <input class="userPassword" type="password" readonly value=${getUserData.password}>`
  UserInfo.className = 'UserInfo'
  ProfileBox.append(UserInfo)
  let Show =
    document.createElement('img')
  Show.src = "./Src/ProfileBox/show.png"
  Show.className = 'ShowPasword'
  Show.setAttribute('onclick', 'showPassword()')
  UserInfo.append(Show)
}
function showPassword() {
  let ShowImg =
    document.querySelector('.ShowPasword')
  let userPassword =
  document.querySelector('.userPassword')
  if (userPassword.type === 'text') {
    userPassword.type = 'password'
    ShowImg.src = "/Src/ProfileBox/show.png"
  } else {
    userPassword.type = 'text'
    ShowImg.src = "/Src/ProfileBox/hied.png"
  }
}
function closeProfileBox() {
  ProfileBox.style.right = "-100%"
  setTimeout(() => {
    ProfileBox.style.display = 'none'
    ProfileBox.innerHTML = ''
  }, 200)
}

let Update =
document.querySelector('.Update')
let UpdateBox =
  document.querySelector('.UpdateBox')
  
Update.addEventListener('click', openUpdateBox)
let Updates = 
[
  {
    version: '2.0',
    info: "* Change App UI (Text, Colors, Animations...) <br>* Fix some issues. <br>* Optimize Home Page UI.<br>* Optimize Login Page UI."
  },
  {
    version: '1.0',
    info: "* Add First Page.<br>* Add Login Page.<br>* Add the Main Content...<br>* This is first version of my app, I promise i well add some new things in future."
  }
]
function openUpdateBox() {
  UpdateBox.style.display = 'flex'
  setTimeout(() => {
    UpdateBox.style.right = "0"
  }, 40)
  let ProfileNav =
     document.createElement('div')
  ProfileNav.className = 'UpdateNav'
  UpdateBox.append(ProfileNav)
  let Back =
    document.createElement('img')
  Back.src = "./Src/MusicList/back.png"
  Back.setAttribute('onclick', 'closeUpdateBox()')
  ProfileNav.append(Back)
  let Title =
    document.createElement('h1')
  Title.textContent = "Updates"
  ProfileNav.append(Title)
  let UpdateDiv =
    document.createElement('div')
  UpdateDiv.className = 'UpdateDiv'
  UpdateBox.append(UpdateDiv)
  Updates.map(e => {
    let Card =
    document.createElement('div')
    Card.className = 'Card'
    Card.innerHTML =
    `<p>Update Version: ${e.version}</p>
    <p>Info:<br><span>${e.info}</span></p>`
    UpdateDiv.append(Card)
  
  })
}
function closeUpdateBox() {
  UpdateBox.style.right = "-100%"
  setTimeout(() => {
    UpdateBox.style.display = 'none'
    UpdateBox.innerHTML = ''
  }, 200)
}

let About =
  document.querySelector('.About')
let AboutBox =
  document.querySelector('.AboutBox')

About.addEventListener('click', openAboutBox)
function openAboutBox() {
  AboutBox.style.display = 'flex'
  setTimeout(() => {
    AboutBox.style.right = "0"
  }, 40)
  let ProfileNav =
     document.createElement('div')
  ProfileNav.className = 'AboutNav'
  AboutBox.append(ProfileNav)
  let Back =
    document.createElement('img')
  Back.src = "./Src/MusicList/back.png"
  Back.setAttribute('onclick', 'closeAboutBox()')
  ProfileNav.append(Back)
  let Title =
    document.createElement('h1')
  Title.textContent = "About"
  ProfileNav.append(Title)
  let AboutDiv =
    document.createElement('div')
  AboutDiv.className = 'AboutDiv'
  AboutBox.append(AboutDiv)
  let AppInfo = 
    document.createElement('div')
  AppInfo.className = 'AppInfo'
  AppInfo.innerHTML = "<p><strong>Sleep</strong> Is relaxation app is a digital tool designed to help users reduce stress, improve mental well-being, and promote relaxation through various features such as guided meditation, breathing exercises, soothing music, nature sounds, mindfulness activities, and sleep aids.</p><p>These apps often offer customizable experiences tailored to individual preferences and goals, providing a convenient way to incorporate relaxation techniques into daily routines.</p><p>Popular relaxation apps include Calm, Headspace, Insight Timer, and Relax Melodies, among others.</p>"
  AboutDiv.append(AppInfo)
  let Media =
    document.createElement('div')
  Media.className = 'Media'
  Media.innerHTML = 
  `<p>Follow Us</p>
  <a target="_blanc" href=""><img src="./Src/AboutBox/facebook.png"></a>
  <a target="_blanc" href=""><img src="./Src/AboutBox/instagram.png"></a>
  <a target="_blanc" href=""><img src="./Src/AboutBox/twitter.png"></a>`
  AboutDiv.append(Media)
}
function closeAboutBox() {
  AboutBox.style.right = "-100%"
  setTimeout(() => {
    AboutBox.style.display = 'none'
    AboutBox.innerHTML = ''
  }, 200)
}


// Wellcome Page 
let WellcomePage =
  document.querySelector('.WellcomePage')
let GetStartedBtn =
  document.querySelector('.GetStartedBtn')

GetStartedBtn.onclick = () => {
  localStorage.setItem('getStarted', 'true')
  WellcomePage.style.display = 'none'
}

let isFirstTime = localStorage.getItem('getStarted')
if (isFirstTime === 'true') {
  WellcomePage.style.display = 'none'
} else {
  WellcomePage.style.display = 'flex'
}
  
  
// Login Page 
let LoginPage =
  document.querySelector('.LoginPage')
let LoginBtn =
  document.querySelector('.LoginBtn')
let UserName =
  document.querySelector('.UserName')
let Email =
  document.querySelector('.Email')
let Password =
  document.querySelector('.Password')

UserName.onblur = function() {
  if (UserName.value === "") {
    UserName.classList.add('error')
  }
}
UserName.onfocus = function() {
  if (UserName.classList.contains('error')) {
    UserName.classList.remove('error')
  }
}
Email.onblur = function() {
  if (!Email.value.includes('@')) {
    Email.classList.add('error')
  }
}
Email.onfocus = function() {
  if (Email.classList.contains('error')) {
    Email.classList.remove('error')
  }
}
Password.onblur = function() {
  if (Password.value === "") {
    Password.classList.add('error')
  }
}
Password.onfocus = function() {
  if (Password.classList.contains('error')) {
    Password.classList.remove('error')
  }
}
  
LoginBtn.addEventListener('click', () => {
  let name = UserName.value
  let email = Email.value
  let pass = Password.value
  let user = {
    userName: name,
    email: email,
    password: pass
  }
  if (
    email !== '' &&
    pass !== '') {
    let UserData = localStorage.setItem('UserInfo', JSON.stringify(user)) | []
    LoginPage.style.display = 'none'
    location.reload()
  }
})

let getUserData = JSON.parse(localStorage.getItem('UserInfo'))

if (getUserData == undefined) {
  LoginPage.style.display = 'flex'
} else {
  LoginPage.style.display = 'none'
}


// Home page 
// Say Hi To User 
let UserBox =
  document.querySelector('.UserBox')
  
let Name = getUserData.userName
let date = new Date()
let H = date.getHours()
let M = date.getMinutes()
let Time = H + ':' + M

if (Time >= '06:00' && Time < '12:00') {
  let user = Name === "" ? "Guest" : Name
  let message = "Good Mornin 💫"
  UserBox.innerHTML = 
  `<p class="Message">${message}<br> Ms. <strong class="User"> ${user}</strong></p>`
}
else if (Time >= '12:00' && Time < '18:00') {
  let user = Name === "" ? "Guest" : Name
  let message = "Good Afternoon 💫"
  UserBox.innerHTML =
    `<p class="Message">${message}<br> Ms. <strong class="User"> ${user}</strong></p>`
}
else if (Time >= '18:00' && Time < '22:00') {
  let user = Name === "" ? "Guest" : Name
  let message = "Good Evening 🙃"
  UserBox.innerHTML =
    `<p class="Message">${message}<br> Ms. <strong class="User"> ${user}</strong></p>`
}
else {
  let user = Name === "" ? "Guest" : Name
  let message = "Good Night 🌛"
  UserBox.innerHTML =
    `<p class="Message">${message}<br> Ms. <strong class="User"> ${user}</strong></p>`
}
  

// set & get All Alboms types 
let AlbomsByType =
  document.querySelector('.AlbomsByType')

let AllType = 
[
 {
  id: 1,
  name: "Water",
  cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711129761/Sleep%20App/Data/Water/Cover/Cover1.jpg",
  sound: "12 Sound"
 },
 {
   id: 2,
   name: "Storms",
   cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711130080/Sleep%20App/Data/Thunder/Cover/Cover1.jpg",
   sound: "14 Sound"
 },
 {
   id: 3,
   name: "Nature",
   cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711129908/Sleep%20App/Data/Nature/Cover/Cover1.jpg",
   sound: "4 Sound"
 },
 {
   id: 4,
   name: "Piano",
   cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711130193/Sleep%20App/Data/Piano/Cover/Cover1.jpg",
   sound: "4 Sound"
 }
]

AllType.map(e => {
  let Albom =
    document.createElement('div')
  Albom.className = "AlbomBox"
  Albom.id = e.name 
  Albom.cover = e.cover
  Albom.setAttribute("onclick", "openAlbum(this)")
  Albom.innerHTML = 
  `<img src=${e.cover}>
    <div class="AlbomInfo">
      <p>${e.name}</p>
      <small>${e.sound}</small>
    </div>`
  AlbomsByType.append(Albom)
})


// get Album Data 
function openAlbum(e) {
  let cover = e.cover
  let num = 0;
  let user = `${e.id}`
  fetch('./Src/Data.json')
    .then(res => res.json())
    .then(data => {
      let results = data.filter(e => e.type === user)
      let MusicList =
        document.querySelector('.MusicList')
      MusicList.style.display = 'flex'
      let MusicListBar =
        document.createElement('div')
      MusicListBar.className = "MusicListBar"
      MusicList.append(MusicListBar)
      let Back =
        document.createElement('img')
      Back.src = "./Src/MusicList/back.png"
      Back.setAttribute('onclick', 'closeMusicList()')
      MusicListBar.append(Back)
      let Title =
        document.createElement('h1')
      Title.textContent = "Sounds List"
      MusicListBar.append(Title)
      let MusicDiv =
        document.createElement('div')
      MusicDiv.className = "MusicDiv"
      MusicList.append(MusicDiv)
      results.map(e => {
        let Music =
          document.createElement('div')
        Music.className = "Music"
        Music.cover = cover
        Music.url = e.url
        Music.user = user
        Music.setAttribute('onclick', 'openMusicPalyer(this)')
        MusicDiv.append(Music)
        let MusicImg =
          document.createElement('img')
        MusicImg.src = cover
        Music.append(MusicImg)
        let MusicName =
          document.createElement('p')
        MusicName.innerHTML = `${user} sound ${num = num + 1}<br><small>${user} Album</small>`
        Music.append(MusicName)
        let Play =
          document.createElement('img')
        Play.src = './Src/MusicList/play.png'
        Music.append(Play)
        let Musichr =
          document.createElement('hr')
        Musichr.className = "Musichr"
        //MusicDiv.append(Musichr)
      })
    })
    .catch(error => console.log(error))
}
function closeMusicList() {
  let MusicList =
    document.querySelector('.MusicList')
  MusicList.innerHTML = ''
  MusicList.style.display = 'none'
}
function openMusicPalyer(e) {
  let num = 0;
  let MusicPlayer =
    document.querySelector('.MusicPlayer')
  setTimeout(() => {
    MusicPlayer.style.right = '0' 
  }, 40)
  MusicPlayer.style.display = 'flex'
  let MusicPlayeBar = 
  document.createElement('div')
  MusicPlayeBar.className = 'MusicPlayeBar'
  MusicPlayer.append(MusicPlayeBar)
  let Back =
    document.createElement('img')
  Back.src = "./Src/MusicList/back.png"
  Back.setAttribute('onclick', 'closeMusicPlayer()')
  MusicPlayeBar.append(Back)
  let Title =
    document.createElement('h1')
  Title.textContent = "Sound Player"
  MusicPlayeBar.append(Title)
  let MPlayerItems =
    document.createElement('div')
  MPlayerItems.className = 'MPlayerItems'
  MusicPlayer.append(MPlayerItems)
  let MusicCover =
    document.createElement('div')
  MusicCover.className = 'MusicCover'
  MusicCover.innerHTML =
  `<img src=${e.cover}>`
  MPlayerItems.append(MusicCover)
  let MusicName =
    document.createElement('div')
  MusicName.className = 'MusicName'
  MusicName.innerHTML =
    `<p>${e.user} Sound</p>`
  MPlayerItems.append(MusicName)
  let TimeLineBox =
    document.createElement('div')
  TimeLineBox.className = "TimeLineBox"
  TimeLineBox.innerHTML =
  `<div class="TimeLine"></div>
   <div class="TimeBox">
      <span class="StartTime">0:00</span>
      <span class="EndTime">0:00</span>
    </div>`
  MPlayerItems.append(TimeLineBox)
  let AudioContol =
    document.createElement('div')
  AudioContol.className = 'AudioContol'
  AudioContol.innerHTML =
    `<img src="./Src/MusicPlayer/left.png" class="BackBtn">
      <label class="container">
        <input type="checkbox">
        <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="play"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>
        <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="pause"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path></svg>
      </label>
    <img src="./Src/MusicPlayer/right.png" class="MoveBtn">`
  MPlayerItems.append(AudioContol)
  let MusicAudio =
    document.createElement('div')
  MusicAudio.className = 'MusicAudio'
  MPlayerItems.append(MusicAudio)
  let Audio =
    document.createElement('audio')
  Audio.className = 'audio'
  Audio.src = e.url
  Audio.controls= true
  Audio.loop = true
  MusicAudio.append(Audio)
  
  // logic 
  
  let TheAudio =
    document.querySelector('.audio')
  let PlayBtn =
   document.querySelector('.container input')
  
  PlayBtn.addEventListener('click', () => {
    if (PlayBtn.checked) {
      TheAudio.play()
    } else {
      TheAudio.pause()
    }
  })
   
  let BackBtn =
    document.querySelector('.BackBtn')
  let MoveBtn =
    document.querySelector('.MoveBtn')
    
  BackBtn.addEventListener('click', () => {
    TheAudio.currentTime -= 10;
    BackBtn.style.transform = 'scale(0.7, 1.5)'
    setTimeout(() => {
      BackBtn.style.transform = ''
    }, 200)
  })
  MoveBtn.addEventListener('click', () => {
    TheAudio.currentTime += 10;
    MoveBtn.style.transform = 'scale(0.9, 1.5)'
    setTimeout(() => {
      MoveBtn.style.transform = ''
    }, 200)
  })
  let StartTime =
    document.querySelector('.StartTime')
  let EndTime =
    document.querySelector('.EndTime')
  let LineTime =
    document.querySelector('.TimeLine')
  let Progress =
    document.createElement('div')
  Progress.className = 'progress'
  LineTime.appendChild(Progress)
  
  TheAudio.addEventListener('timeupdate', () => {
    let duration = TheAudio.duration;
    let currentTime = TheAudio.currentTime;
    let progressWidth = (currentTime / duration) * 100;
    Progress.style.width = progressWidth + '%'
    
    StartTime.innerHTML = formatTime(currentTime)
    EndTime.textContent = formatTime(duration)
  })
  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;
    return minutes + ":" + remainingSeconds;
  }
  
}
function closeMusicPlayer() {
  let MusicPlayer =
    document.querySelector('.MusicPlayer')
  MusicPlayer.style.right = "-100%"
  setTimeout(() => {
    MusicPlayer.style.display = 'none'
    MusicPlayer.innerHTML = ''
  }, 200)
}