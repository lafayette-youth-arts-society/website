function addDigits() {
    var all = document.getElementsByTagName("*");
    var total = 0;
    for (var i=0; i<all.length; i++) {
        // iterate through all the HTML elements and check their IDs
        console.log(all[i].className)
        if (all[i].className == "yes") {
            console.log(all[i].innerHTML);
            total += parseInt(all[i].innerHTML);
        }
        
        
    
    }
    console.log(total);
    document.getElementById("ans").innerHTML = total;

}