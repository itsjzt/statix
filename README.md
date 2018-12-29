# statix

A static site generator made by me, for me

## Introduction

I made statix to build my own blog. 

This simple static site generator works with convensions

- posts are kept in `/src/posts`
- drafts are kept in `/src/posts/_drafts`
- pages and templates is made with [pug](https://pugjs.org) 
- pages are static html pages other than posts which doesn't follow the template syntax (write the landing pages here).
- assets are kept in `static/`
- that's it.

## Getting Started

- clone this repo `git clone https://github.com/itsjzt/statix`

- run `npm install`

- write posts in `src/posts`

- and run `npm start` to build
