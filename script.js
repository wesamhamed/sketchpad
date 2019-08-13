
function randomColor() {

    return 'rgb(' +
        (Math.floor(Math.random() * 256))
        + ',' + (Math.floor(Math.random() * 256))
        + ',' + (Math.floor(Math.random() * 256))
        + ')';;
}
function createElementOfGrid(number){
    let parent = document.getElementById('grid');
    let count = 1;
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            let div = document.createElement('div');
            div.setAttribute('id', `item-${count}`);
            div.setAttribute('class', 'item');
            div.textContent = `item-${count}`;
            parent.appendChild(div);
            count++;
        }
    }
    return count;
}
function removeAllElements(){
    let grid =document.getElementById('grid');
    let number =grid.children.length;
    for(let i=1;i<=number;i++){
        grid.removeChild(document.getElementById(`item-${i}`));
    }
    
}
function adjustDimensions(numberOfElements){
    let grid = document.getElementById('grid');
    let item =document.getElementsByClassName('item');
    grid.style.gridTemplateColumns = ` repeat(${numberOfElements},` + ((1280/numberOfElements))+`px)`;
    grid.style.gridTemplateRows = ` repeat(${numberOfElements},` + ((580 / numberOfElements)) + `px)`;
    for(let i=0;i<item.length;i++){
        item[i].style.width = '' + ((1280 / numberOfElements) - 10) + 'px';
        item[i].style.height = '' + ((580 / numberOfElements) - 10) + 'px';
    }
        
    console.log("adjust");
}
function addHover(number){
    for (let item = 1; item <= number; item++) {
        document.getElementById(`item-${item}`).addEventListener('mouseenter', function () {
            this.classList.add("hover");
            this.style.backgroundColor = randomColor();
            console.log("hover");
        });
        document.getElementById(`item-${item}`).addEventListener('mouseleave', function () {
            this.classList.remove("hover");
            this.style.backgroundColor = 'rgb(69,234,173)';
        });
    }
}


document.getElementById('add').addEventListener('click',function(){
        removeAllElements();
        let message = prompt("How many squares per side?");
        while(!Number.isInteger(parseInt(message))){
            message = prompt("Please,How many squares per side?");
        }
        let numberOfElements = parseInt(message);
        createElementOfGrid(numberOfElements);
        addHover(numberOfElements * numberOfElements );
        adjustDimensions(numberOfElements);
        console.log("hello");
        

    
});