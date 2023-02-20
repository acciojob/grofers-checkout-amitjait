const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.getElementsByClassName('price');
	let total = 0;
    console.log(prices);
	
    for(let i=0; i<prices.length; i++){
        total += (Number)(prices[i].innerHTML);
    }

	let tr = document.createElement('tr');
	let td = document.createElement('td');

	td.innerHTML = total;
	tr.appendChild(td);


	let table = document.getElementById('itemTable');

	table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

