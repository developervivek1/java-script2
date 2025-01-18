let currentPlayer = "X";
let arr = [null,null,null,null,null,null,null,null,null,null]
console.log(arr);

function checkWinner(){
    if(
        (arr[1] !==null && arr[1] == arr[2] && arr[2] == arr[3]) ||
        (arr[4] !==null && arr[4] == arr[5] && arr[5] == arr[6]) ||
        (arr[7] !==null && arr[7] == arr[8] && arr[8] == arr[9]) ||
        (arr[1] !==null && arr[1] == arr[5] && arr[5] == arr[9]) ||
        (arr[3] !==null && arr[3] == arr[5] && arr[5] == arr[7]) ||
        (arr[1] !==null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !==null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[3] !==null && arr[3] == arr[6] && arr[6] == arr[9]) 
    ){
        console.log(currentPlayer);
        document.write(`winner is ${currentPlayer}`)
        return;
    }
    else if (!arr.slice(1).some(e => e === null)) {
        document.write(`Draw!!`);
        return;
    }
}

const handleClick=(el)=>{
    const id = Number(el.id);
    if(arr[id] !==null) return;
    
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    
}