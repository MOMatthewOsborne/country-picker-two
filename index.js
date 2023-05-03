const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(alphabet);
printBtn = () => {
  for (i = 0; i < alphabet.length; i++) {
    var btn = document.createElement("button");
    var l = document.createTextNode(alphabet[i]);
    btn.appendChild(l);
    document.body.appendChild(btn);
  }
};
