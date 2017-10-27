export function setWindowHeight() {
  // return document.getElementById('root').style.height = window.innerHeight.toString() + "px"
  return document.body.style.height = window.innerHeight.toString() + "px"
  // return document.body.style.height = document.documentElement.scrollHeight.toString() + "px"
}

export function resetWindowHeight() {
  return document.body.style.removeProperty('height')
}



export function setBackgroundImage(imageUrl, repeat = 'repeat-y', backgroundSize = 'cover') {
  document.body.style.backgroundImage = "url('" + imageUrl + "')";
  document.body.style.backgroundRepeat = repeat;
  document.body.style.backgroundSize = backgroundSize;
}

export function removeBackgroundImage() {
  return document.body.style.removeProperty('background-image')
}

export function setDarkColorScheme() {
  return document.body.classList.add('bg-dark')
}

export function removeDarkColorScheme() {
  return document.body.classList.remove('bg-dark')
}
