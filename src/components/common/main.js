export function setWindowHeight() {
  return document.body.style.height = window.innerHeight.toString() + "px"
}

export function resetWindowHeight() {
  return document.body.style.removeProperty('height')
}



export function setBackgroundImage(imageUrl) {
  document.body.style.backgroundImage = "url('" + imageUrl + "')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
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
