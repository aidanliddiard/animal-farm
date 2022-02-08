import { animals } from "../data.js";
import { findById } from "../utils.js";


const params = new URLSearchParams(window.location.search);

const animal = findById(params.get('id'), animals);

const name = document.getElementById('name');
name.textContent = animal.name;

const img = document.getElementById('image');
img.src = `../assets/${animal.type}.svg`;

const says = document.getElementById('says');
says.textContent = animal.says;


