'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
