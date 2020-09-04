
function checkScope(){
    if(1==1){
        var vr = "var has function scope and value can change";
        let lt = "let scope only inside block and value can change";
        // cnt = "you can't reasign the value to constant"; //error constant can't be reasign 
        const cnt = "const scope only inside a block but its value can't be change";
    }

    // console.log(cnt); // it also give error because it's outside of block
    // console.log(lt); // it give error because use outside of block ({})
    // console.log(vr); // no error because it scope is function
}

checkScope();