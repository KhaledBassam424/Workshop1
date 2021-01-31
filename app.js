//console.log('khaled')
function greetings(){
var userInput = prompt('what is your name') ;
alert('HI ' + userInput);

var yourWeight = prompt('what is your weight');
if(yourWeight>70){document.write('reduce your weight');} else{alert('you are healthy');}

var x = 5
var y = 10
var z = prompt('pick a number') ;
if(z>(x+y)){alert('you won');}
else if(z<(x+y)){alert('you lost');} else{alert('nothing');} 




//Seafood resturants
// two meals, Fish and Carb

var userOrder = prompt('what kind of sea food do you want fish or carb','place your order');
while(userOrder !=='fish' && userOrder !=='carb'){userOrder=prompt('we do not have this dish, order again');}
 
var dishes= prompt('how many dishes you want','write down the number')
 
var image='';
for(var i = 0; i<dishes; i++){if(userOrder=='fish'){
    image='<img src="https://tse3.mm.bing.net/th?id=OIP.1BPnUopOKz-2Z3pix58mUgHaFc&pid=Api&P=0&w=208&h=154">'
    document.write(image);}
else if(userOrder =='carb'){image='<img src="https://tse2.mm.bing.net/th?id=OIP.QoTUW_5C6HRp7qf87KY_NgHaE7&pid=Api&P=0&w=263&h=176">'
document.write(image);}

}
}

greetings();

