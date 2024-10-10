function changeColorMode() {
    const styleElement = document.getElementById('st');

    const relativePath = '../assets/code/dark.css'
    const locationPath = window.location.href;
    const absoluteURL = new URL(relativePath, locationPath).href;

    console.log(styleElement.href)
    if (styleElement.href == absoluteURL) {
        styleElement.href = '../assets/code/light.css';
    } else {
        styleElement.href = '../assets/code/dark.css';
    }
    console.log('color mode changed')
}
