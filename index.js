var welcomeTitle = document.getElementById('welcome-title')
welcomeTitle.innerText = document.getElementById('welcome-title').innerText.replace('$host$', window.location.hostname)