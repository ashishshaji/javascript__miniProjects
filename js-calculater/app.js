function buttonClick(val){
    document.getElementById("calc-screen").value+=val

}
function calcClear(){
    document.getElementById("calc-screen").value=""

}

function equalClick(){
    var text=document.getElementById("calc-screen").value
    var res=eval(text)
    document.getElementById("calc-screen").value=res
    
}