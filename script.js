
// menu 
let MenuBtn =
  document.querySelector('.MenuBtn')
let CloseMenu =
  document.querySelector('.CloseMenu')
let MenuBox =
  document.querySelector('.MenuBox')

MenuBtn.addEventListener('click', () => {
  MenuBox.style.left = '0%'
})
CloseMenu.addEventListener('click', () => {
  MenuBox.style.left = '-100%'
})

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
  if (name !== ''
      && email !== ''
      && pass !== '' ) {
    let UserData = localStorage.setItem('UserInfo', JSON.stringify(user)) | []
    LoginPage.style.display = 'none'
  }
})

let getUserData = JSON.parse(localStorage.getItem('UserInfo'))

if (getUserData == undefined) {
  LoginPage.style.display = 'flex'
} else {
  LoginPage.style.display = 'none'
}
 
// Search 
/*let SearchText =
  document.querySelector('.searchText')
let SearchBtn =
  document.querySelector('.SearchBtn')
let SearchResults =
  document.querySelector('.SearchResults')

SearchBtn.addEventListener('click', () => {
  SearchResults.classList.add('SearchResultsOn')
  SearchResults.innerHTML = ''
  let user = SearchText.value
 
  fetch('./Src/Data.json')
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      let result =  data.filter(e => e.keyWord.includes(user))
      console.log(result)
    })
    .catch(error => console.log(error)) 
})*/

// set & get All sound types 
let SoundsByType =
  document.querySelector('.SoundsByType')
let AllType = 
[
 {
  id: 1,
  name: "Water",
  cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711129761/Sleep%20App/Data/Water/Cover/Cover1.jpg",
  sound: "4 Sound"
 },
 {
   id: 2,
   name: "Thunder",
   cover: "https://res.cloudinary.com/dpgrn48l4/image/upload/v1711130080/Sleep%20App/Data/Thunder/Cover/Cover1.jpg",
   sound: "4 Sound"
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
  let Sound =
    document.createElement('div')
  Sound.className = "SoundBox"
  Sound.id = e.name 
  Sound.cover = e.cover
  Sound.setAttribute("onclick", "openAlbum(this)")
  Sound.innerHTML = 
  `<img src=${e.cover}>
    <div class="SoundInfo">
      <p>${e.name}</p>
      <small>${e.sound}</small>
    </div>`
  SoundsByType.append(Sound)
})

// get Album Data 

function openAlbum(e) {
  let cover = e.cover
  let user = `${e.id}`
  fetch('./Src/Data.json')
    .then(res => res.json())
    .then(data => {
      let results = data.filter(e => e.type === user)
      let MusicList =
        document.querySelector('.MusicList')
      setTimeout(() => {
        MusicList.style.right = "0"
      }, 60)
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
      Title.textContent = "Music List"
      MusicListBar.append(Title)
      let MusicDiv =
        document.createElement('div')
      MusicDiv.className = "MusicDiv"
      MusicList.append(MusicDiv)
      results.map(e => {
        let Music =
          document.createElement('div')
        Music.className = "Music"
        Music.id = e.name
        Music.cover = cover
        Music.url = e.url
        Music.setAttribute('onclick', 'openMusicPalyer(this)')
        MusicDiv.append(Music)
        let MusicImg =
          document.createElement('img')
        MusicImg.src = cover
        Music.append(MusicImg)
        let MusicName =
          document.createElement('p')
        MusicName.textContent = e.name
        Music.append(MusicName)
        let Play =
          document.createElement('img')
        Play.src = './Src/MusicList/play.png'
        Music.append(Play)
        let Musichr =
          document.createElement('hr')
        Musichr.className = "Musichr"
        MusicDiv.append(Musichr)
      })
    })
    .catch(error => console.log(error))
}

function closeMusicList() {
  let MusicList =
    document.querySelector('.MusicList')
  MusicList.style.right = "-100%"
  setTimeout(() => {
    MusicList.style.display = 'none'
    MusicList.innerHTML = ''
  }, 200)
}

function openMusicPalyer(e) {

  let MusicPlayer =
    document.querySelector('.MusicPlayer')
  
  setTimeout(() => {
    MusicPlayer.style.right = '0' 
  }, 60)
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
  Title.textContent = "Music Player"
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
    `<p>${e.id}</p>`
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
  BackBtn.addEventListener('click', () => {
    TheAudio.currentTime -= 10;
  })
  let MoveBtn =
    document.querySelector('.MoveBtn')
  MoveBtn.addEventListener('click', () => {
    TheAudio.currentTime += 10;
  })
 
  let LineTime = 
    document.querySelector('.TimeLine')
  let StartTime =
    document.querySelector('.StartTime')
  let EndTime = 
    document.querySelector('.EndTime')
  let Progress =
    document.createElement('div')
  Progress.className = 'progress'
  LineTime.appendChild(Progress)
  
  TheAudio.addEventListener('timeupdate',function() {
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

