//丂卂Ҝㄩ尺卂 匚卂ㄥ匚ㄩㄥ卂ㄒㄖ尺"

function insert(x){
  let num = document.getElementById('calc-screen').innerHTML;
  document.getElementById('calc-screen').innerHTML = num + x;
}

function clean(){
  document.getElementById('calc-screen').innerHTML = "";
}

function del(){
  let result = document.getElementById('calc-screen').innerHTML;
  document.getElementById('calc-screen').innerHTML = result.substring(0, result.length - 1);
}

function calc(){
  let result = document.getElementById('calc-screen').innerHTML;
  if (result) {
    document.getElementById('calc-screen').innerHTML = eval(result);
  }
  else{
    document.getElementById('calc-screen').innerHTML = "";
  }

}
