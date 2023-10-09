// ==UserScript==
// @name        HKUL Auth Autofill Fix
// @description Works around a Safari browser issue on the HKUL Login Page where login fields are misidentified as registration fields, disrupting the password autofill feature.
// @author      https://github.com/kennethkn
// @match       https://lib.hku.hk/hkulauth/*
// ==/UserScript==

document
  .querySelector('input[name="userid"]')
  .setAttribute('autocomplete', 'username')
document
  .querySelector('input[type="password"]')
  .setAttribute('autocomplete', 'current-password')
