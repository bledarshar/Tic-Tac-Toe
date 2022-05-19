let cell = document.querySelectorAll(".cells") 
console.log(cell) ;

let xValue = "x"
let oValue = "O"
let xTurn
let oTurn
 startGame();
 function startGame () {
     xTurn = true
 
cell.forEach((cells) => {
    cells.addEventListener("click", handleClick , {once:true})
});}
function handleClick (e){
let cell = e.target
let player = xTurn

?(cell.innerText = xValue)
:(cell.innerText = oValue)

 change()
 theWinner(player)
draw(array)
//theWinner2(player2)
}
  function change(){ xTurn= !xTurn }

function theWinner(player){
    if (player=== xValue) {
        if (cell[0].innerText === xValue 
            && cell[1].innerText===xValue
            && cell[2].innerText===xValue){
        alert("Player x wins")}
                if (cell[3].innerText === xValue 
                && cell[4].innerText===xValue
                && cell[5].innerText===xValue)
                {
            alert("Player x wins")}
                    if
                    (cell[6].innerText === xValue 
                        && cell[7].innerText===xValue
                        && cell[8].innerText===xValue)
                        {
                    alert("Player x wins")}
                    if (cell[0].innerText === xValue 
                        && cell[3].innerText===xValue
                        && cell[6].innerText===xValue)
                        {
                            alert("Player x wins")}
                            if (player=== xValue) {
                                if (cell[1].innerText === xValue 
                                    && cell[4].innerText===xValue
                                    && cell[7].innerText===xValue){
                                alert("Player x wins")}
                                if (player=== xValue) {
                                    if (cell[2].innerText === xValue 
                                        && cell[5].innerText===xValue
                                        && cell[8].innerText===xValue){
                                    alert("Player x wins")}
                                    if (player=== xValue) {
                                        if (cell[0].innerText === xValue 
                                            && cell[4].innerText===xValue
                                            && cell[8].innerText===xValue){
                                        alert("Player x wins")}
                                        if (player=== xValue) {
                                            if (cell[2].innerText === xValue 
                                                && cell[4].innerText===xValue
                                                && cell[6].innerText===xValue){
                                            alert("Player x wins")}
            }
        }
    }
}
}
if (player=== oValue) {
    if (cell[0].innerText === oValue 
        && cell[1].innerText===oValue
        && cell[2].innerText===oValue){
    alert("Player o wins")}
    if (cell[3].innerText === oValue
        && cell[4].innerText===oValue
        && cell[5].innerText===oValue)
        {
    alert("Player o wins")}
            if
            (cell[6].innerText === oValue
                && cell[7].innerText===oValue
                && cell[8].innerText===oValue)
                {
            alert("Player o wins")}
            if (cell[0].innerText === oValue
                && cell[3].innerText===oValue
                && cell[6].innerText===oValue)
                {
                    alert("Player o wins")}
                    if (player=== oValue) {
                        if (cell[1].innerText === oValue
                            && cell[4].innerText===oValue
                            && cell[7].innerText===oValue){
                        alert("Player o wins")}
                        if (player=== oValue) {
                            if (cell[2].innerText === oValue
                                && cell[5].innerText===oValue
                                && cell[8].innerText===oValue){
                            alert("Player o wins")}
                            if (player=== oValue) {
                                if (cell[0].innerText === oValue 
                                    && cell[4].innerText===oValue
                                    && cell[8].innerText===oValue){
                                alert("Player o wins")}
                                if (player=== oValue) {
                                    if (cell[2].innerText === oValue
                                        && cell[4].innerText===oValue
                                        && cell[6].innerText===oValue){
                                    alert("Player o wins")}
                                        }
}
}  
}
}
}
 function draw(array){
     
     if (cells([[0],[1],[2],[3],[4],[5],[6],[7],[8]])!="" )
     alert ("draw")
     console.log (cells)
 }
