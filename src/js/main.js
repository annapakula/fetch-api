"use strict";

const list = document.querySelector('.list--js');

fetch ("https://api.github.com/users/annapakula/repos?sort=created&direction=desc")
  .then (resp => resp.json())
  .then (resp => {
    const repositories = resp;
    for (const {name, html_url} of repositories){
      list.innerHTML += `<li class="list__item"><a class="list__link" href="${html_url}">${name}</a></li>`;
    
    }
  })
  .catch(err => {
    console.log(err);
  })
