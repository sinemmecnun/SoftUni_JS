window.addEventListener("load", solve);

function solve() {

  const totalProfit = document.getElementById('profit');
  let profit = 0;

  const input = {
    make : document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price")
  }

  const tables = {
    published: document.getElementById("table-body"),
    sold: document.getElementById("cars-list")
  }

  document.getElementById('publish').addEventListener('click', publish);

  function publish(event){
    event.preventDefault();
    //read input values
    const make = input.make.value;
    const model = input.model.value;
    const year = input.year.value;
    const fuel = input.fuel.value.toLowerCase();
    const originalCost = Number(input.originalCost.value);
    const sellingPrice = Number(input.sellingPrice.value);

    //validate
    if(make == '' || model == "" || year == '' || fuel == '' || originalCost == '' || sellingPrice == ''){
      return;
    }
    if(originalCost > sellingPrice){
      return;
    }

    //create post
    const tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `
    <td>${make}</td>
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuel}</td>
    <td>${originalCost}</td>
    <td>${sellingPrice}</td>
    <td>
      <button class='action-btn edit'>Edit</button>
      <button class="action-btn sell">Sell</button>
    </td>`;

    //add to published
    tables.published.appendChild(tr);

    //add functionality to buttons
    const editButton = tr.querySelector('.edit');
    editButton.addEventListener('click', edit);

    const sellButton = tr.querySelector('.sell');
    sellButton.addEventListener('click', sell);

    //clear fields
    input.make.value = "";
    input.model.value = "";
    input.year.value = "";
    input.fuel.value = '';
    input.originalCost.value = "";
    input.sellingPrice.value = "";

    function edit(){
      //move values
      input.make.value = make;
      input.model.value = model;
      input.year.value = year;
      input.fuel.value = fuel;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;

      //remove post
      tr.remove();
    }
  
    function sell(){
      tr.remove();
      const profitTemp = sellingPrice - originalCost;
      const li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `
      <span>${make} ${model}</span>
      <span>${year}</span>
      <span>${profitTemp}</span>
      `;

      tables.sold.appendChild(li);
      profit += profitTemp;
      totalProfit.textContent = profit.toFixed(2);
    }
  }

}
