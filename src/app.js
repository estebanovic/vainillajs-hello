/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronounList = ["the", "our", "this", "that"];
let adjList = ["great", "big", "small", "rougue"];
let nounList = ["jogger", "racoon", "dog", "grandpa", "spaceship"];
let extensions = [".com", ".cl", ".es", ".org"];

pronounList.forEach(pronoun => {
  adjList.forEach(adj => {
    nounList.forEach(noun => {
      extensions.forEach(extension => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(
          pronoun + adj + noun + extension
        );
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
      });
    });
  });
});

window.onload = function() {};
