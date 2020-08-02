function queen() {

}
function king() {

}
function bishop() {

}
function knight() {

}
function setUpRook() {
  var r = document.querySelectorAll("[class$='rook']");
  for (let i = 0; i < r.length; i++) {
    r.item(i).children[0].addEventListener("click", (firstEvent) => {
      let xCord, yCord, type;
      firstEvent.target.parentNode.parentNode.classList.forEach((value) => {
        if (value[1] == "-") {
          yCord = value[0];
          xCord = value[2];
        }
      });

      var array = [];
      var gameBoard = document.querySelector(".gameContainer");
      if (firstEvent.target.parentNode.classList.contains("black-rook")) {
        for (let j = 1; j < 9; ++j) {
          console.log(yCord + '-' + j);
          var tile = firstEvent.target.parentNode.parentNode.parentNode.parentNode.querySelector('.' + yCord + '-' + j);
          if (tile.length > 0 && tile.classList.contains(yCord + '-' + xCord)) {
            tile = null;
          }
          if (tile) {
            array.push(tile);
          }
        }
        console.log(firstEvent.target.parentNode.parentNode.getElementsByClassName(yCord + '-8'));
        console.log(gameBoard.querySelectorAll('*[class^="C-"]'));
        let availSpace = firstEvent.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll('[class$="' + xCord + '"]');
        array = availSpace.map( space => {
          console.log('space rook',space);
          if (space.children.length) {
            console.log('space rook has children');
          }
          return space;
        })
        availSpace = firstEvent.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(`[class^="${yCord}"]`);
        availSpace.map( space => {
          array.push(space);
          return null;
        })

        // if (yCord === "B") {
        //   array.push(
        //     firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
        //       String.fromCharCode(yCord.charCodeAt(0) + 2) + "-" + xCord
        //     )[0]
        //   );
        // }
      //   if (
      //     document.querySelector(
      //       "." +
      //         (String.fromCharCode(yCord.charCodeAt(0) + 1) +
      //           "-" +
      //           (JSON.parse(xCord) + 1)) +
      //         ""
      //     ).children.length != 0
      //   ) {
      //     array.push(
      //       firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
      //         String.fromCharCode(yCord.charCodeAt(0) + 1) +
      //           "-" +
      //           (JSON.parse(xCord) + 1)
      //       )[0]
      //     );
      //   }
      //   if (
      //     document.querySelector(
      //       "." +
      //         (String.fromCharCode(yCord.charCodeAt(0) + 1) +
      //           "-" +
      //           (JSON.parse(xCord) - 1)) +
      //         ""
      //     ).children.length != 0
      //   ) {
      //     array.push(
      //       firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
      //         String.fromCharCode(yCord.charCodeAt(0) + 1) +
      //           "-" +
      //           (JSON.parse(xCord) - 1)
      //       )[0]
      //     );
      //   }
      // } else {
      //   let availSpace = firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
      //     String.fromCharCode(yCord.charCodeAt(0) - 1) + "-" + xCord
      //   );
      //   array = [availSpace[0]];

      //   if (yCord === "G") {
      //     array.push(
      //       firstEvent.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
      //         String.fromCharCode(yCord.charCodeAt(0) - 2) + "-" + xCord
      //       )[0]
      //     );
      //   }

      //   console.log(
      //     "hi",
      //     document.querySelector(
      //       "." +
      //         (String.fromCharCode(yCord.charCodeAt(0) - 1) +
      //           "-" +
      //           (JSON.parse(xCord) + 1))
      //     ) + ""
      //   );
      //   console.log(
      //     "hi",
      //     "." +
      //       (String.fromCharCode(yCord.charCodeAt(0) - 1) +
      //         "-" +
      //         (JSON.parse(xCord) + 1)) +
      //       ""
      //   );
      }

      addSelectedTilesListener(array, firstEvent.target.parentNode);
    });
  }
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
  setUpRook();
}

function removeSelectedTiles(anon) {
  var tiles = document.querySelectorAll('.selectedTile');
  for (let k = 0; k < tiles.length; k++) {
    tiles[k].removeEventListener("click", anon);
    tiles[k].classList.remove('selectedTile');
  }
}
init();
