
var flipped1=0;
var flipped2=0;
var flipped3=0;
var flipped4=0;

function togglesCard(i) {
    switch(i){
        case 1:
            if(document.getElementById("card1").className == "flipcard"){
                document.getElementById("card1").className = "flipcard rotated";
                flipped1 = 1;
            }
            else {
                document.getElementById("card1").className = "flipcard";
                flipped1 = 0;
            }
            break;
            
        case 2:
            if(document.getElementById("card2").className == "flipcard"){
                document.getElementById("card2").className = "flipcard rotated";
                flipped2 = 1;
            }
            else {
                document.getElementById("card2").className = "flipcard";
                flipped2 = 0;
            }
            break;
        case 3:
            if(document.getElementById("card3").className == "flipcard"){
                document.getElementById("card3").className = "flipcard rotated";
                flipped3 = 1;
            }
            else {
                document.getElementById("card3").className = "flipcard";
                flipped3 = 0;
            }
            break;
        case 4:
            if(document.getElementById("card4").className == "flipcard"){
                document.getElementById("card4").className = "flipcard rotated";
                flipped4 = 1;
            }
            else {
                document.getElementById("card4").className = "flipcard";
                flipped4 = 0;
            }
            break;
        default:
            break;
    
    }
    
    return true;
}