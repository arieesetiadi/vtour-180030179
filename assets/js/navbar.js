const navbar = document.getElementById('navbar-menu')
const hMenu = document.getElementById('humberger-menu')
const hMenuIcon = document.getElementById('humberger-menu-icon')

const beranda = document.getElementById('beranda')
const informasi = document.getElementById('informasi')
const vtour = document.getElementById('vtour')
const galeri = document.getElementById('galeri')
const keunikan = document.getElementById('keunikan')
const tentang = document.getElementById('tentang')

assignActive('link-beranda')

$('.navbar-link').on('click', function () {
    navbar.classList.remove('show')
    hMenu.classList.add('collapsed')
    hMenuIcon.classList.replace('fa-times', 'fa-bars')

    clearActive()
})

window.addEventListener('scroll', function () {
    let y = this.window.scrollY;

    const isBeranda = (y - getPosition(beranda)[1]) >= -10;
    const isInformasi = (y - getPosition(informasi)[1]) >= -10;
    const isVtour = (y - getPosition(vtour)[1]) >= -10;
    const isGaleri = (y - getPosition(galeri)[1]) >= -10;
    const isKeunikan = (y - getPosition(keunikan)[1]) >= -10;
    const isTentang = (y - getPosition(tentang)[1]) >= -10;

    if (isBeranda) {
        clearActive()
        assignActive('link-beranda')
    }

    if (isInformasi) {
        clearActive()
        assignActive('link-informasi')
    }

    if (isVtour) {
        clearActive()
        assignActive('link-vtour')
    }

    if (isGaleri) {
        clearActive()
        assignActive('link-galeri')
    }

    if (isKeunikan) {
        clearActive()
        assignActive('link-keunikan')
    }

    if (isTentang) {
        clearActive()
        assignActive('link-tentang')
    }
})

function getPosition(el) {
    var x = 0;
    var y = 0;
    while (true) {
        x += el.offsetLeft;
        y += el.offsetTop;
        if (el.offsetParent === null) {
            break;
        }
        el = el.offsetParent;
    }
    return [x, y];
}

function clearActive() {
    const links = document.getElementsByClassName('link-topbar')

    // // Remove all active class
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
    }
}

function assignActive(id) {
    const link = document.getElementById(id)
    link.classList.add('active')
} 