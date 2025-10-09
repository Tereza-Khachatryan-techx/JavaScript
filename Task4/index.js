const clearBtn = document.querySelector('.clearAll')
const message = document.querySelector('.message')

clearBtn.addEventListener('click', () => {
    localStorage.clear()
    sessionStorage.clear()
      document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  console.log('All Storage Cleared!')
  clearBtn.style.display = 'none'
  message.textContent = 'All Storage Cleared!'
})