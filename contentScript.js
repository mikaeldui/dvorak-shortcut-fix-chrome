// Dvorak Shortcut Fix: a Chromium browser extension to fix broken
// keyboard shortcuts for Dvorak users
// ---------------------------------------------------------------------
// Project link: https://github.com/mikaeldui/dvorak-shortcut-fix-chrome
// ---------------------------------------------------------------------
// It's a keyboard event handler that makes hotkeys act like QWERTY
// for incorrect shortcut implementations (e.g. Evernote, GitHub.com, OpenStreetMap.org).

let keyboardMap = {};
navigator.keyboard.getLayoutMap().then(map => keyboardMap = map);

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
          return key;
    }
}

function keydownHandler(event) {
    // Check if the user is on a Mac or Windows/Linux
    const isMac = navigator.userAgent.toLowerCase().includes('mac');
    const modifierPressed = isMac ? event.metaKey : event.ctrlKey;

    if (modifierPressed) {
        Object.defineProperty(event, "key", {value: String.fromCharCode(event.keyCode).toLowerCase()} );
        //var qwertyKey = getByValue(keyboardMap, event.key);
        //console.info(qwertyKey)
    }
}

// window and capture to make sure we're the first ones to handle the event.
window.addEventListener('keydown', keydownHandler, { capture: true });
