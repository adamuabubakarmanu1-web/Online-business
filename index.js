// 🔹 Lissafin kayan da aka saka a Cart
let cartCount = 0;

// 🔹 Aiki na ƙara kaya zuwa Cart
function addToCart(productName, price) {
  cartCount++; // ƙara yawan kayan
  document.getElementById("cart-count").innerText = cartCount; // sabunta adadin a UI
  alert(productName + " added to cart! Price: $" + price); // sanar da mai amfani
}

// 🔹 Nuna ko ɓoye sashen Team (a shafin About Us)
function toggleTeam() {
  let teamList = document.getElementById("team");
  if (teamList.style.display === "none") {
    teamList.style.display = "block"; // idan a ɓoye yake, a nuna shi
  } else {
    teamList.style.display = "none"; // idan yana bayyane, a ɓoye shi
  }
}

// 🔹 Lissafin lokaci (Countdown) don Special Offers
function startCountdown() {
  let countdown = document.getElementById("countdown");
  if (!countdown) return; // idan babu element ɗin countdown a shafi, kada ayi komai

  let timeLeft = 3600; // 1 awa (seconds)

  setInterval(() => {
    if (timeLeft <= 0) {
      countdown.innerText = "Offer expired!"; // idan lokaci ya ƙare
    } else {
      let minutes = Math.floor(timeLeft / 60); // lissafin mintuna
      let seconds = timeLeft % 60; // lissafin seconds
      countdown.innerText = minutes + "m " + seconds + "s left!"; // saka sakon lokaci
      timeLeft--; // rage lokaci
    }
  }, 1000); // sabunta kowanne second
}

// 🔹 Aiki na ƙara Review (shafin Customer Reviews)
function addReview(event) {
  event.preventDefault(); // hana form ya sake shafi

  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  let reviewList = document.getElementById("review-list");

  // ƙirƙirar sabon review
  let newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = `<h3>${name}</h3><p>${message}</p>`;

  // saka shi cikin jerin reviews
  reviewList.appendChild(newReview);

  // tsaftace form bayan submit
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

// 🔹 Aiki na buɗe/ruffewa amsa a cikin FAQ
function toggleAnswer(element) {
  let answer = element.nextElementSibling; // samu amsar da take bayan tambaya
  if (answer.style.display === "block") {
    answer.style.display = "none"; // idan tana bayyane, a ɓoye
  } else {
    answer.style.display = "block"; // idan tana ɓoye, a nuna
  }
}

// 🔹 Tabbatar da bayanan Checkout form
function validateCheckout(event) {
  event.preventDefault(); // hana reload ɗin shafi

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let cardNumber = document.getElementById("cardNumber").value.trim();
  let expiry = document.getElementById("expiry").value.trim();
  let cvv = document.getElementById("cvv").value.trim();

  // duba idan dukkan filayen an cike su
  if (!fullName || !email || !address || !cardNumber || !expiry || !cvv) {
    alert("Please fill in all fields!"); // sanar da mai amfani
    return false;
  }

  // idan komai ya cika
  alert("Thank you, " + fullName + "! Your order has been placed.");
  event.target.reset(); // tsaftace form
  return true;
}

// 🔹 Tabbatar da bayanan Contact form
function validateContact(event) {
  event.preventDefault(); // hana reload ɗin shafi

  let name = document.getElementById("contactName").value.trim();
  let email = document.getElementById("contactEmail").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  // duba idan dukkan filayen an cike
  if (!name || !email || !message) {
    alert("Please fill in all fields!"); // sanar da mai amfani
    return false;
  }

  // idan an cike
  alert("Thank you, " + name + "! Your message has been sent.");
  event.target.reset(); // tsaftace form
  return true;
}
