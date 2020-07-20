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
    x.item(i).children[0].addEventListener("click", (firstEvent) => {
      let xCord, yCord, type;
      firstEvent.target.parentNode.parentNode.classList.forEach((value) => {
        if (value[1] == "-") {
          yCord = value[0];
          xCord = value[2];
        }
      });

      var array = [];
      if (firstEvent.target.parentNode.classList.contains("black-pawn")) {
        let availSpace = firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
          String.fromCharCode(yCord.charCodeAt(0) + 1) + "-" + xCord
        );
        array = [availSpace[0]];

        if (yCord === "B") {
          array.push(
            firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              String.fromCharCode(yCord.charCodeAt(0) + 2) + "-" + xCord
            )[0]
          );
        }
        if (
          document.querySelector(
            "." +
              (String.fromCharCode(yCord.charCodeAt(0) + 1) +
                "-" +
                (JSON.parse(xCord) + 1)) +
              ""
          ).children.length != 0
        ) {
          array = [];
        }
        if (
          document.querySelector(
            "." +
              (String.fromCharCode(yCord.charCodeAt(0) + 1) +
                "-" +
                (JSON.parse(xCord) + 1)) +
              ""
          ).children.length != 0
        ) {
          array.push(
            firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              String.fromCharCode(yCord.charCodeAt(0) + 1) +
                "-" +
                (JSON.parse(xCord) + 1)
            )[0]
          );
        }
        if (
          document.querySelector(
            "." +
              (String.fromCharCode(yCord.charCodeAt(0) + 1) +
                "-" +
                (JSON.parse(xCord) - 1)) +
              ""
          ).children.length != 0
        ) {
          array.push(
            firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              String.fromCharCode(yCord.charCodeAt(0) + 1) +
                "-" +
                (JSON.parse(xCord) - 1)
            )[0]
          );
        }
      } else {
        let availSpace = firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
          String.fromCharCode(yCord.charCodeAt(0) - 1) + "-" + xCord
        );
        array = [availSpace[0]];

        if (yCord === "G") {
          array.push(
            firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              String.fromCharCode(yCord.charCodeAt(0) - 2) + "-" + xCord
            )[0]
          );
        }

        console.log(
          "hi",
          document.querySelector(
            "." +
              (String.fromCharCode(yCord.charCodeAt(0) - 1) +
                "-" +
                (JSON.parse(xCord) + 1))
          ) + ""
        );
        console.log(
          "hi",
          "." +
            (String.fromCharCode(yCord.charCodeAt(0) - 1) +
              "-" +
              (JSON.parse(xCord) + 1)) +
            ""
        );
      }

      addSelectedTilesListener(array, firstEvent.target.parentNode);
    });
  }
}

function addSelectedTilesListener(selectedTiles, piece) {
  const anon = (select) => {
    addPieceToTile(select, piece, anon);
  };
  for (let j = 0; j < selectedTiles.length; j++) {
    selectedTiles[j].classList.add("selectedTile");
    selectedTiles[j].addEventListener('click', anon);
  }
}

function addPieceToTile(select, piece, anon) {
  if (select.srcElement.parentNode.classList.contains('black') || select.srcElement.parentNode.classList.contains('white')) {
    select.srcElement.parentNode.parentNode.appendChild(piece);
    select.srcElement.parentNode.parentNode.removeChild(select.srcElement.parentNode);
    // if (select.srcElement.parentNode.parentNode.classList.indexOf('H-') > -1) {
    //   pawnPopUpModal(select, piece);
    // }
  } else {
    if (select.srcElement.children[0]) {
      select.srcElement.removeChild(select.srcElement.children[0]);
    }
    select.srcElement.appendChild(piece);
  }
  removeSelectedTiles(anon);
}
// function pawnPopUpModal(selectedTile, piece) {
//   selectedTile.appendChild(
//     `<div class="pawnUpgradeContainer">
//       <div class="pawnUpgradeItem" onclick="changePawnToPiece">Q</div>
//       <div class="pawnUpgradeItem" onclick="changePawnToPiece">R</div>
//       <div class="pawnUpgradeItem" onclick="changePawnToPiece">B</div>
//       <div class="pawnUpgradeItem" onclick="changePawnToPiece">K</div>
//     </div>`
//   );

//     function changePawnToPiece(e) {
//       console.log('e', e);
//     }
// }
function init() {
  setUpPawn();
}

function removeSelectedTiles(anon) {
  var tiles = document.querySelectorAll('.selectedTile');
  for (let k = 0; k < tiles.length; k++) {
    tiles[k].removeEventListener("click", anon);
    tiles[k].classList.remove('selectedTile');
  }
}
init();
