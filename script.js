document.addEventListener("DOMContentLoaded", function () {
  updatePrice();

  const orderForm = document.getElementById("orderForm");
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const pricePerUnit = parseFloat(
      document
        .getElementById("product")
        .selectedOptions[0].getAttribute("data-price")
    );

    if (!product || isNaN(quantity) || quantity <= 0) {
      alert("Please select a product and enter a valid quantity.");
      return;
    }

    const totalPrice = pricePerUnit * quantity;

    alert(
      `Your total is ${totalPrice.toFixed(2)} SAR. Thank you for your order!`
    );
  });
});

function updatePrice() {
  const productSelect = document.getElementById("product");
  const quantity = parseInt(document.getElementById("quantity").value);
  const pricePerUnit = parseFloat(
    productSelect.selectedOptions[0]?.getAttribute("data-price") || 0
  );
  const totalPrice = pricePerUnit * quantity;

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
