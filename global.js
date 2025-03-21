// This code is executed on EVERY PAGES

function replaceDivsSrc() {
    var divs = document.querySelectorAll('*')
    divs.forEach(async e => {
        if (e.hasAttribute('psrc')) {
            var res = await fetch(e.getAttribute('psrc'))
            if (res.ok) {
                var text = await res.text()
                e.innerHTML = text
            } else {
                e.innerHTML = `<p>Could'nt load the page : ${res.status} ${res.statusText}</p>`
            }
        }
    })
}
replaceDivsSrc()