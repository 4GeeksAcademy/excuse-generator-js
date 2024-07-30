/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let first = Math.floor(Math.random() * who.length);
  let second = Math.floor(Math.random() * action.length);
  let third = Math.floor(Math.random() * what.length);
  let fourth = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[first] + " " + action[second] + " " + what[third] + " " + when[fourth];
};
