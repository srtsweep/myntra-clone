let bagItems;
onLoad();
function onLoad()
{
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagCount();
}

function addToBag(itemId)
{
  bagItems.push(itemId);
  localStorage.setItem('bagItems' , JSON.stringify(bagItems));
  displayBagCount();
}

function displayBagCount()
{
  let cntqe = document.querySelector('.bag-item-count');
  if(bagItems.length > 0)
  {
    cntqe.style.visibility = 'visible';  
    cntqe.innerHTML = bagItems.length;
  }
  else
  {
    cntqe.style.visibility = 'hidden';
  }
}



function displayItemsOnHomePage()
{
let itemQuerySelector = document.querySelector('.items-container');
if(!itemQuerySelector)
{
  return;
}
let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="item-container">
      <img class="product-img" src="${item.image}" alt="earing image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}     
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="add-to-btn" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>  
  `
})

itemQuerySelector.innerHTML = innerHtml;
}



