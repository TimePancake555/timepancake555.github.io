

function disableLoop() { 
    x.loop = false;
    x.load();
} 

function checkLoop() { 
    alert(x.loop);
} 

function pageLoad() {
    alert('This page uses cookies. By continuing, you concent to the use of cookies. No advertisment cookies are used and all cookies are for websit function purposes only. ')
    // alert('headphone warning');
    console.log("body loaded");
    displayCookies();
    loadCookies();
}

function changeColorMode() {
    const styleElement = document.getElementById('st');
    const absoluteURL = new URL('assets/code/dark.css', window.location.href).href;

    console.log(styleElement.href)
    if (styleElement.href == absoluteURL) {
        styleElement.href = 'assets/code/light.css';
        console.log('color changed to light');
    } else {
        styleElement.href = 'assets/code/dark.css';
        console.log('color changed to dark');
    }
    writeCookies();
    console.log('color mode changed')
}

function writeCookies() {
    const styleElement = document.getElementById('st');
    displayCookies();
    if (styleElement.href.includes('light.css')) {
        document.cookie = 'color=light; path=/';
        console.log('wrote light to cookie color');
    }
    else if (styleElement.href.includes('dark.css')) {
        document.cookie = 'color=dark; path=/';
        console.log('wrote dark to cookie color');
    }
    displayCookies();
}

function loadCookies() {
    const styleElement = document.getElementById('st');
    const absoluteURL = new URL('assets/code/dark.css', window.location.href).href;

    let cookieJar = String(document.cookie).split('=');

    if (document.cookie.includes("dark")) {
        styleElement.href = 'assets/code/dark.css';
        console.log('darks mode loaded');
    } else {
        styleElement.href= 'assets/code/light.css';
        console.log('light mode loaded');
    }
}

function clearCookies() {
    let cookieJar = String(document.cookie);
    let splitCookieJar = cookieJar.split('=');
    for (let i = 0; i < splitCookieJar.length; i++) {
        splitCookieJar[i] = splitCookieJar[i].replaceAll(';', '').trim();
        if (i % 2 == 0) {
            let currentCookie = splitCookieJar[i];
            document.cookie = currentCookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        }
    }
    console.log(splitCookieJar);
    displayCookies();
}

function displayCookies() {
    let x = document.cookie;
    console.log('current cookies: ' + x);
}

// function useSearch(element,val) {
//    changeVisibility(element,element.textContent.toLowerCase().includes(val));
// }

// solver=document.getElementById("solver");
// bot=document.getElementById("bot");
// paint=document.getElementById("paint");
// eg=document.getElementById("eg");
// smellEL=document.getElementById("smell");
// const elements=[solver,bot,paint,eg,smellEL]
// searchForm=document.getElementById("search-form")
// searchBar=document.getElementById("search-bar");
// searchForm.addEventListener("submit",(e)=>{
 
// e.preventDefault();
// searchValue=searchBar.value.toLowerCase();
// for(let element of elements) {
//     useSearch(element,searchValue)
// }

// })