//Javascript Here
// alert('Hello World!')


var serialNumber =1;
var sumTotal = 0;
document.getElementById('response').innerHTML =  sumTotal;
//  document.getElementById('firstcolumn').innerHTML;
function addMoreRows() {
    
     serialNumber=serialNumber+1; //I have made it global so that my second function(a for loop) will access it as part of the conditions
   
    document.getElementById('mainsection').innerHTML += 
    
        "<tr>"+
                "<td>"+serialNumber+"</td>"+
                "<td><input type='text' id = 'applianceName' name='applianceName' class='form-control text-center' onchange='totalConsumption()'></td>"+
                "<td><input type='text' id = 'quan"+serialNumber+"'name ='quantity' class='form-control text-center'  placeholder='Enter appliance quantity'      onchange='totalConsumption()'></td>"+
                "<td><input type='text' id = 'unitConsume"+serialNumber+"' name ='unitconsumption' class='form-control text-center'  placeholder='Enter Unit'       onchange='totalConsumption()'></td>"+
                "<td id = 'totConsume"+serialNumber+"'></td>"+
                "<td id = 'remark"+serialNumber+"'></td>"+
        "</tr>"
}

function totalConsumption(){

     sumTotal =0;  //Very Important because   if remove will lead to compounding effect and a global variable
   //i=1 is a global variable .If var i =1 is used here, my remark()function will not work effectively as it will not recognize i

//    document.getElementById("totConsume" + i).style.display='none';
//     document.getElementById("remark" + i).style.display='none';

    for(i=1;i<=serialNumber;i++){
    var quantity = Number(document.getElementById("quan" + i).value);
    var unit = Number(document.getElementById("unitConsume" + i).value);
    

        if ((isNaN(quantity)|| quantity<0) || (isNaN(unit)||unit<0)){
            
            var myValidation = 'Please enter a valid Positive Number!'
            document.getElementById('err').innerHTML= myValidation;//thiswillthrowanerror
            alert(myValidation)
            document.getElementById("totConsume" + i).innerHTML = '';
            document.getElementById("remark" + i).innerHTML = '';
            
            break;
        }
        else{
            document.getElementById('err').innerHTML= '';
        tot = document.getElementById("totConsume" + i).innerHTML = quantity*unit;
        remark();
        sumTotal =sumTotal + tot;
        document.getElementById('response').innerHTML = sumTotal;
        
        }
       


    }
    
}

function remark(){
    
    
    if (tot <=5) {
            document.getElementById("remark" + i).innerHTML ='Low';
            document.getElementById("remark" + i).style.color ='lightgreen';

        } else if(tot >=6 && tot<=10){
            document.getElementById("remark" + i).innerHTML ='Medium';
            document.getElementById("remark" + i).style.color ='yellow';
        }else if(tot >=11 && tot<=15){
            document.getElementById("remark" + i).innerHTML ='High';
            document.getElementById("remark" + i).style.color ='#C70039 ';
        }else{
            document.getElementById("remark" + i).innerHTML ='Too High';
            document.getElementById("remark" + i).style.color ='#900C3F';
        }
    

}


var a =7.5;
var b = 10;
var c= 15;
var sumTotal=sumTotal;
function getRecommendation() {

        // alert(sumTotal)

        if (sumTotal==0) {
            document.getElementById('recommend').innerHTML = 
            'Input at least an Appliance Quantity and its Corresponding Unit.'
            
             
        }
        else if (sumTotal < 7.5) {
            document.getElementById('recommend').innerHTML = 'Your Total Consumption is ' + sumTotal +'KW.'+' We recommend a ' + a+'KW'+' Generator. '+'<a id="link" href ="https://www.jumia.com.ng/generators/?oos=1" target = "_blank">'+'Click Here to Proceed'+'</a>'
            document.getElementById('recommend').style.color = ''
            document.getElementById('link').style.textDecoration = 'none';
        }else if (sumTotal>=7.5 && sumTotal<10){
            document.getElementById('recommend').innerHTML = 'Your Total Consumption is ' + sumTotal +'KW.'+' We recommend a ' + b+'KW'+' Generator.'+'<a id ="link" href ="https://www.jumia.com.ng/generators/?oos=1" target = "_blank">'+'Click Here to Proceed'+'</a>'
            document.getElementById('recommend').style.color = ''
            document.getElementById('link').style.textDecoration = 'none';
        }else if(sumTotal>=10 && sumTotal<15){
            document.getElementById('recommend').innerHTML = 'Your Total Consumption is ' + sumTotal +'KW.'+' We recommend a ' + c+'KW'+' Generator. '+'<a id="link" href ="https://www.jumia.com.ng/generators/?oos=1" target = "_blank">'+'Click Here to Proceed'+'</a>'
            document.getElementById('recommend').style.color = '';
            document.getElementById('link').style.textDecoration = 'none';
        }else{
            document.getElementById('recommend').innerHTML = 'Your Total Consumption is ' + sumTotal +'KW.'+' Sorry,We do not sell a generator that can power your apartment.'
            document.getElementById('recommend').style.color = ''

        }
            
}









