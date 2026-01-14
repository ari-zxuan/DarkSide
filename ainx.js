function home() {
    location.hash = "#home";
    document.title = "Beranda | TheDarkSide";
    $("#opbr").hide();
    $("#tlonsea").hide();
    $("#tlonglobal").hide();
    $("#mlbb").hide();
    $("#lupinus").hide();
    $("#avaonline").hide();
    $("#home").fadeIn();
}
function opbr() {
    location.hash = "#opbr";
    document.title = "OP Bounty Rush | TheDarkSide";
    $("#home").hide();
    $("#tlonsea").hide();
    $("#tlonglobal").hide();
    $("#mlbb").hide();
    $("#lupinus").hide();
    $("#avaonline").hide();
    $("#opbr").fadeIn();
}

function tlonsea(){
    location.hash = "#tlonsea";
    document.title = "Neverland (Sea) | TheDarkSide";
    $("#home").hide();
    $("#opbr").hide();
    $("#tlonglobal").hide();
    $("#mlbb").hide();
    $("#lupinus").hide();
    $("#avaonline").hide();
    $("#tlonsea").fadeIn();
}
function tlonglobal(){
    location.hash = "#tlonglobal";
    document.title = "Neverland (Global) | TheDarkSide";
    $("#home").hide();
    $("#opbr").hide();
    $("#tlonsea").hide();
    $("#mlbb").hide();
    $("#lupinus").hide();
    $("#avaonline").hide();
    $("#tlonglobal").fadeIn();
}

function mlbb(){
    location.hash = "#mlbb";
    document.title = "Mobile Legends | TheDarkSide";
    $("#home").hide();
    $("#opbr").hide();
    $("#tlonsea").hide();
    $("#tlonglobal").hide();
    $("#lupinus").hide();
    $("#avaonline").hide();
    $("#mlbb").fadeIn();
}

function lupinus(){
    location.hash = "#avabel-lupinus";
    document.title = "Avabel Lupinus | TheDarkSide";
    $("#home").hide();
    $("#opbr").hide();
    $("#tlonsea").hide();
    $("#tlonglobal").hide();
    $("#mlbb").hide();
    $("#avaonline").hide();
    $("#lupinus").fadeIn();
}

function avaonline(){
    location.hash = "#avabel-online";
    document.title = "Avabel Online | TheDarkSide";
    $("#home").hide();
    $("#opbr").hide();
    $("#tlonsea").hide();
    $("#tlonglobal").hide();
    $("#mlbb").hide();
    $("#lupinus").hide();
    $("#avaonline").fadeIn();
}

function handleHash() {
    var hash = location.hash.replace('#', '');
    if (hash === 'opbr') {
        opbr();
    } 
    else if (hash === 'mlbb') {
        mlbb();
    } 
    else if (hash === 'tlonglobal') {
        tlonglobal();
    } else if (hash === 'tlonsea'){
        tlonsea();
    } else if (hash === 'avabel-lupinus'){
        lupinus();
    } else if (hash === 'avabel-online'){
        avaonline();
    }
    else {
        home();
    }
}

window.addEventListener("load", handleHash);
window.addEventListener("hashchange", handleHash);

var musicPlaying = false;

function toggleMusic() {
    var audio = document.getElementById('musicPlayer');
    var icon = document.getElementById('musicIcon');
    var btn = document.getElementById('musicToggleBtn');

    if (!musicPlaying) {
        audio.play();
        icon.classList.replace('bi-music-note-beamed', 'bi-music-note');
        btn.classList.add('active');
        musicPlaying = true;
    } else {
        audio.pause();
        icon.classList.replace('bi-music-note', 'bi-music-note-beamed');
        btn.classList.remove('active');
        musicPlaying = false;
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById('mySidebar');
    sidebar.classList.toggle('show');
}

function toggleSubmenu(el) {
    const parent = el.parentElement;
    parent.classList.toggle("open");
}