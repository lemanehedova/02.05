const ls = document.getElementById("list")
let students = [];
function Btn(){
        students.push(inp.value);
        list();
    }
    
    
    function list() {
        
            let res=students.reduce(
                    (result,value)=>result+=` <li>${ val }</li>` ,''
                )
               ls.innerHTML=res;
            }
            
            
