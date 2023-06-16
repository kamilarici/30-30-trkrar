// Bir sayaç değeri için başlangıç değerini tanımlayalım
let counter = 0;

// setInterval kullanarak her 1 saniyede bir sayaç değerini artıralım
const intervalId = setInterval(() => {
  counter++;
  console.log("Sayaç: ", counter);

  // Sayaç değeri 5 olduğunda setInterval'i durduralım
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Sayaç durduruldu.");
  }
}, 1000);
