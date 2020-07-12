function queen() {

}
function king() {

}
function bishop() {

}
function knight() {

}
function rook(element) {
  element;

}
function setUpPawn() {
  var x = document.querySelectorAll("[class$='pawn']");
  for (let i = 0; i < x.length; i++) {
    x.item(i).addEventListener('click', (firstEvent) => {
      let xCord, yCord, type;
      firstEvent.target.parentNode.classList.forEach((value) => {
        if (value[1] == '-') {
          yCord = value[0];
          xCord = value[2];
        }
      });

      var array = [];
      if (firstEvent.target.classList.contains('black-pawn')) {
        let availSpace = firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + xCord));
        array = [availSpace[0]];

        if (yCord === "B") {
          array.push(firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) + 2) + "-" + xCord))[0]);
        }
        if (document.querySelector('.' + (String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + (JSON.parse(xCord) + 1)) + "").children.length != 0 ) {
          array = [];
        }
        if (document.querySelector('.' + (String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + (JSON.parse(xCord) + 1)) + "").children.length != 0) {
          array.push(firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + (JSON.parse(xCord) + 1)))[0]);
        }
        if (document.querySelector('.' + (String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + (JSON.parse(xCord) - 1)) + "").children.length != 0) {
          array.push(firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + (JSON.parse(xCord) - 1)))[0]);
        }
      } else {
        let availSpace = firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) - 1) + "-" + xCord));
        array = [availSpace[0]];

        if (yCord === "G") {
          array.push(firstEvent.target.parentNode.parentNode.parentNode.getElementsByClassName((String.fromCharCode(yCord.charCodeAt(0) - 2) + "-" + xCord))[0]);
        }

        console.log('hi', document.querySelector("." + (String.fromCharCode(yCord.charCodeAt(0) - 1) + "-" + (JSON.parse(xCord) + 1))) + "");
        console.log('hi', "." + (String.fromCharCode(yCord.charCodeAt(0) - 1) + "-" + (JSON.parse(xCord) + 1)) + "");
      }

      addSelectedTilesListener( array, firstEvent.target );

    })
  }
}

function addSelectedTilesListener(selectedTiles, piece) {
  console.log('selected', selectedTiles);
  console.log('piece', piece);
  for (let j = 0; j < selectedTiles.length; j++) {
    selectedTiles[j].classList.add("selectedTile");
    selectedTiles[j].addEventListener('click', (select) => {
      addtiles(select, piece);
    });
  }
}

function addtiles(select, piece) {
  console.log('selected', select.srcElement);
  if (select.srcElement.classList.contains('.black') || select.srcElement.classList.contains('.white')) {
    select.srcElement.parentNode.appendChild(piece);
    select.srcElement.parentNode.removeChild(select.srcElement);
  } else {
    if (select.srcElement.children[0]) {
      select.srcElement.removeChild(select.srcElement.children[0]);
    }
    select.srcElement.appendChild(piece);
  }
  removeSelectedTiles();
}

function init() {
  setUpPawn();
}

function removeSelectedTiles() {
  var tiles = document.querySelectorAll('.selectedTile');
  for (let k = 0; k < tiles.length; k++) {
    tiles[k].removeEventListener('click', addtiles);
    tiles[k].classList.remove('selectedTile');
  }
}
init();
