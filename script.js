// ======================================================
// ============Variables and API Info====================
// ======================================================

const apiKey = "5964325950072be8d95f7bde1257908e";
const divQuote = document.querySelector(".quote");
const button = document.querySelector(".quote-button");

// =====================================================
// ====================Quote API Call===================
// =====================================================

const getRandomQuote = async () => {
  const response = await axios.get("https://favqs.com/api/qotd", {
    "x-apiKey": apiKey
  })
  console.log(response);

  const author = response.data.quote.author;
  const famousQuote = response.data.quote.body;
  divQuote.innerHTML = `
      </blockquote><h3>${famousQuote}<h3></blockquote>
      <h4>${author}</h4>`;

}

getRandomQuote();

// ================================================================
// =====================QR CODE====================================
// ================================================================

const qrCode = document.querySelector(".qr");


const getQrCode = async () => {
  const response = await axios.get("https://api.qrserver.com/v1/create-qr-code/?data=https://Fashionarily.com/&size=300x300");
}

getQrCode();


// ============================================================
// =======================Slider===============================
// ============================================================















//     const author = response.data.author;
//     const famousQuote = response.data.body;
//     qotd.innerHTML =`
//       <p>${famousQuote}</p>
//       <h4>${author}</h4>`;
// };

// getRandomQuote();





// button.addEventListener('click', async () => {
//   const response = await axios.get("https://favqs.com/api/qotd", {
//     "x-apiKey": apiKey
//   });
//   console.log(response)
//   const author = response.data.author;
//   const famousQuote = response.data.body;
//   qotd.innerHTML = `
//     // <p>${famousQuote}</p>
//     <h4>${author}</h4>`;
// });