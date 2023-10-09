// ==UserScript==
// @name        Moodle Stay as Current User
// @description Automatically clicks "Cancel" when Moodle displays the "you need to log out before logging in as a different user" prompt.
// @author      https://github.com/kennethkn
// @match       https://moodle.hku.hk/login/index.php
// ==/UserScript==

const firstBtn = document.querySelector('button[type="submit"]')
if (firstBtn.innerHTML === 'Cancel') firstBtn.click()
