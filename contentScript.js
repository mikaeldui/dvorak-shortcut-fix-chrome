// Dvorak Shortcut Fix: a Chromium browser extension to fix broken
// keyboard shortcuts for Dvorak users
// ---------------------------------------------------------------------
// Project link: https://github.com/mikaeldui/dvorak-shortcut-fix-chrome
// ---------------------------------------------------------------------
// It's a keyboard event handler that makes hotkeys act like QWERTY
// for incorrect shortcut implementations (e.g. Evernote, GitHub.com, OpenStreetMap.org).

function keydownHandler(event) {
    const modifierPressed = e.metaKey || e.ctrlKey;

    if (modifierPressed) {
        // re-define event.key as the QWERTY equivalent.
        Object.defineProperty(event, "key", {value: String.fromCharCode(event.keyCode).toLowerCase()} );
    }
}

// using window and capture to make sure we're the first ones to handle the event.
window.addEventListener('keydown', keydownHandler, { capture: true });


// TODO: keypress handler (modifier-less shortcuts), but I suspect that it'll get messy.

// let keyboardMap = {};
// navigator.keyboard.getLayoutMap().then(map => keyboardMap = map);

// function getByValue(map, searchValue) {
//     for (let [key, value] of map.entries()) {
//         if (value === searchValue)
//           return key;
//     }
// }
//var qwertyKey = getByValue(keyboardMap, event.key);
//console.info(qwertyKey)