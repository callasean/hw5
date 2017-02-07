var count1 = 0;

function myfunction()
{

count1++;

document.getElementById('pep').innerHTML = "Amount: $" + count1;

}
function myfunction2()
{

count1--;

document.getElementById('pep').innerHTML = "Amount: $" + count1;

}

var count2 = 0;

function myfunction3()
{

count2++;

document.getElementById('jalap').innerHTML = "Amount: $" + count2;

}
function myfunction4()
{

count2--;

document.getElementById('jalap').innerHTML = "Amount: $" + count2;

}

var count3 = 0;

function myfunction5()
{

count3++;

document.getElementById('onion').innerHTML = "Amount: $" + count3;
}
function myfunction6()
{

count3--;

document.getElementById('onion').innerHTML = "Amount: $" + count3;

}
function total()
{

document.getElementById('total').innerHTML = "Total: $";
document.getElementById('total').innerHTML += count1 + count2 + count3;
}

function reset()
{
	count1-count1;
	count2-count2;
	count3-count3;
document.getElementById('total').innerHTML = "Total: $";
document.getElementById('total').innerHTML += count1 - count1 + count2 - count2 + count3 - count3;
document.getElementById('pep').innerHTML = "Amount: $"
document.getElementById('pep').innerHTML +=- count1 + count1;
document.getElementById('jalap').innerHTML = "Amount: $"
document.getElementById('jalap').innerHTML +=- count2 + count2;
document.getElementById('onion').innerHTML = "Amount: $"
document.getElementById('onion').innerHTML +=- count3 + count3;
}