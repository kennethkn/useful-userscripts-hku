// ==UserScript==
// @name        Moodle Hide Courses
// @description Allows you to hide inactive courses from the homepage and sidebar.
// @author      https://github.com/kennethkn
// @match       https://moodle.hku.hk/*
// ==/UserScript==

// EDIT HERE: Courses you WANT to display.
// If unsure, please follow the instructions on https://github.com/kennethkn/useful-userscripts-for-hku-students
const whitelist = [
  'ECON1210',
  'ECON1280',
  'ACCT1101',
  'COMP2396',
  'COMP2119',
  'CCST9013',
  'CAES_CSS',
]

if (window.location.pathname === '/') {
  const courses = document.querySelector('.courses')
  courses.removeChild(courses.lastChild)
  Array.from(courses.children)
    .filter(
      c =>
        !whitelist.includes(c.querySelector('a').innerText.split(' ')[0]) &&
        !whitelist.includes(c.querySelector('a').innerText.split('_')[0])
    )
    .forEach(c => {
      courses.removeChild(c)
    })
}

const sideBarCourses = document.querySelector('.unlist')
Array.from(sideBarCourses.children)
  .filter(
    c =>
      !whitelist.includes(c.querySelector('a').innerText.split(' ')[0]) &&
      !whitelist.includes(c.querySelector('a').innerText.split('_')[0])
  )
  .forEach(c => {
    sideBarCourses.removeChild(c)
  })
