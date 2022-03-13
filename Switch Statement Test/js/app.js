document.getElementById(`submit`).disabled = true;
document.getElementById(`reset`).disabled = true;

function myFunction(num){
let answer = ``;
    switch (num){
        case 1:
        case 2: 
            answer = `Less than three`;
            document.getElementById(`output`).innerHTML = answer;
            break;
        case 3: 
            answer = `Equal to three`;
            document.getElementById(`output`).innerHTML = answer;
            break;
        case 4:
        case 5:
            answer = `Greater than three`;
            document.getElementById(`output`).innerHTML = answer;
            break;
        default:
            answer = `No input`
            document.getElementById(`output`).innerHTML = answer;
            break;
}
}

document.getElementById(`number`).addEventListener(`click`, function(){
    document.getElementById(`submit`).disabled = false;
});

document.getElementById(`submit`).addEventListener(`click`, function(){
    let number = parseInt(document.getElementById(`number`).value);
    myFunction(number);
    document.getElementById(`number`).disabled = true;
    document.getElementById(`submit`).disabled = true;
    document.getElementById(`reset`).disabled = false;
});

document.getElementById(`reset`).addEventListener(`click`, function(){
    location.reload();
});