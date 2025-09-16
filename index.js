async function Getproducts() {
  try{
    const res=await fetch("https://fakestoreapi.com/products");
    const data= await res.json();
    console.log(data);
    displayProducts(data);
  }
  catch(error){
    alert('failed to fetch data');
  }
}
function displayProducts(products) {
  const output = document.getElementById("output");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";
     div.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><strong>Price:</strong> $${product.price}</p>
      <p>${product.description.substring(0, 100)}...</p>
    `;
    output.appendChild(div);
  });
}