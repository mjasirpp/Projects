// display btn content in calc
function display(content){
    result.value += content
}

// ac button
function ac(){
    result.value=""
}

// show answer
function ans(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "Error"
    }
}

// remove last value
function remove(){
    result.value = result.value.slice(0,-1)
}