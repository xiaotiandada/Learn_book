window.onload = initPage

function initPage(){
    var table = document.getElementById('puzzleGrid')
    var cells = table.getElementsByTagName('td')
    for(var i = 0;i<cells.length;i++){
        var cell = cells[i]
        cell.onclick = tileClick
    }
}


function tileClick(){
    if(cellIsEmpty(this)){
        //用户点击一个空单元格
        alert("请点击编号的瓷砖");
        return;
    }


    var currentRow = this.id.charAt(4)
    var currentCol = this.id.charAt(5)
    

    // check above 检查上面
    if(currentRow > 1){
        var testRow = Number(currentRow) - 1
        var testCellId = 'cell' + testRow + currentCol
        var testCell = document.getElementById(testCellId)
        if(cellIsEmpty(testCell)){
            swapTiles(this, testCell)
            return
        }
    }

    // check below 检查下面
    if(currentRow < 4 ){
        var testRow = Number(currentRow) + 1
        var testCellId = 'cell' + testRow + currentCol
        var testCell = document.getElementById(testCellId)
        if(cellIsEmpty(testCell)){
            swapTiles(this, testCell)
            return
        }
    }

    // Check to the left 检查左边
    if(currentCol > 1){
        var testCol = Number(currentCol) - 1
        var testCellId = 'cell' + currentRow + testCol
        var testCell = document.getElementById(testCellId)
        if(cellIsEmpty(testCell)){
            swapTiles(this, testCell)
            return
        }
    }

     // Check to the right 检查右边
     if(currentCol < 4){
        var testCol = Number(currentCol) + 1
        var testCellId = 'cell' + currentRow + testCol
        var testCell = document.getElementById(testCellId)
        if(cellIsEmpty(testCell)){
            swapTiles(this, testCell)
            return
        }
    }

    // The clicked-on cell is locked  点击的单元格被锁定
    // alert("Please click a tile next to an empty cell.");
    alert("请点击空单元格旁边的一个图块")
    
}

function swapTiles(selectedCell, destinationCell){
    selectedImage = selectedCell.firstChild
    while( selectedImage.nodeName == '#text'){
        selectedImage = selectedImage.nextSibling
    }
    destinationImage = destinationCell.firstChild
    while( destinationImage.nodeName == '#text'){
        destinationImage = destinationImage.nextSibling
    }

    selectedCell.appendChild(destinationImage)
    destinationCell.appendChild(selectedImage)

    if(puzzleIsComplete()){
        win()
    }
}

function puzzleIsComplete(){
    var tiles = document.getElementById('puzzleGrid').getElementsByTagName('img')
    var hash = '';
    for(var i = 0;i<tiles.length;i++){
        var num = tiles[i].src.substr(-6,2)
        if(num != 'ty'){
            hash += num
        }
    }
    if(hash == '010203040506070809101112131414'){
        return true
    } else{
        return false
    }
}

function win(){
    document.getElementById('puzzleGrid').className = 'win'
}

function cellIsEmpty(cell){
    var image = cell.firstChild
    while( image.nodeName == '#text'){
        image = image.nextSibling
    }

    if(image.alt == 'empty'){
        return true
    } else {
        return false
    }
}