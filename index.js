// 🔹 Cart Count
let cartCount = 0;

// 🔹 Add to Cart Function
function addToCart(productName, price) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(productName + " added to cart! Price: $" + price);
}

// 🔹 Toggle Team Section (for About Us page)
function toggleTeam() {
  let teamList = document.getElementById("team");
  if (teamList.style.display === "none") {
    teamList.style.display = "block";
  } else {
    teamList.style.display = "none";
  }
}

// 🔹 Countdown Timer (for Special Offers page)
function startCountdown() {
  let countdown = document.getElementById("countdown");
  if (!countdown) return;

  let timeLeft = 3600; // 1 hour in seconds

  setInterval(() => {
    if (timeLeft <= 0) {
      countdown.innerText = "Offer expired!";
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      countdown.innerText = minutes + "m " + seconds + "s left!";
      timeLeft--;
    }
  }, 1000);
}

// 🔹 Add Review Function (for Customer Reviews page)
function addReview(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  let reviewList = document.getElementById("review-list");

  let newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = `<h3>${name}</h3><p>${message}</p>`;

  reviewList.appendChild(newReview);

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

// 🔹 Toggle FAQ Answer
function toggleAnswer(element) {
  let answer = element.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// 🔹 Validate Checkout Form
function validateCheckout(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let cardNumber = document.getElementById("cardNumber").value.trim();
  let expiry = document.getElementById("expiry").value.trim();
  let cvv = document.getElementById("cvv").value.trim();

  if (!fullName || !email || !address || !cardNumber || !expiry || !cvv) {
    alert("Please fill in all fields!");
    return false;
  }

  alert("Thank you, " + fullName + "! Your order has been placed.");
  event.target.reset();
  return true;
}

// 🔹 Validate Contact Form
function validateContact(event) {
  event.preventDefault();

  let name = document.getElementById("contactName").value.trim();
  let email = document.getElementById("contactEmail").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  event.target.reset();
  return true;
}