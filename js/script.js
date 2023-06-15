let myDiv = document.getElementById(".container");



for (let index = 0; index < 100; index++) {
    let myLabel = document.createElement("h6    ");
    myDiv.append(myLabel);

    if(index % 5 == 0 && index % 3 == 0){
        myLabel.innerHTML = ("fizz");
    }
    else if(index % 5 == 0){
        myLabel.innerHTML = ("buzz");
    }
    else if(index % 3 == 0){
        myLabel.innerHTML = ("fizz-buzz");
    }
    else{
        console.log(index);
    }

}