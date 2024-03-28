//1. Array icinde en boyuk ededi tapin:
// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];
// let maxNumber = Math.max.apply(null, numbers);
// console.log(" En boyuk eded : " + maxNumber);

// 2. Array icinde sade ededleri tap:
// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];
// let primeNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let bolen = numbers[i];
//   let isPrime = true;
//    // isPrime bir ededin sade olub olmadigini yoxlayir

//   if (bolen === 1) {
//     isPrime = false;
//   } else if (bolen > 1) {
//     for (let j = 2; j <= Math.sqrt(bolen); j++) {
//       if (bolen % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   } else {
//     isPrime = false;
//   }
//   if (isPrime) {
//     primeNumbers.push(bolen);
//   }
// }
// console.log("Sadə ədədlər:", primeNumbers);

// 3.Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
// let data = [
//   "Salam",
//   "Dünyalı",
//   "JavaScript",
//   "Programlaşdırma",
//   "Kod",
//   "Frontend",
//   "Backend",
// ];

// for (let i = 0; i < data.length; i++) {
//   if (data[i].length === 7) {
//     console.log(data[i]);
//   }
// }

//4. İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.
// (kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
// 18-dən aşağı nəticələr: İdeal çəkidən aşağı
// 18 ilə 25 arasında nəticələr: İdeal çəki
// 25 ilə 30 arasında nəticələr: İdeal çəkidən yuxarı
// 30 ilə 40 arasında nəticələr: Artıq çəki (obez)
// 40-dən yuxarı nəticələr: Artıq çəki (morbid dərəcədə piylənmə)

// let kilo = prompt("Kilonuzu daxil edin : ");
// let boy = prompt("Boyunuzu daxil edin : ");
// let bmi = kilo / (boy ** 2);
// if (bmi < 18) {
//     console.log("İdeal çəkidən aşağı.");
// } else if (bmi >= 18 && bmi < 25) {
//     console.log("İdeal çəki.");
// } else if (bmi >= 25 && bmi < 30) {
//     console.log("İdeal çəkidən yuxarı.");
// } else if (bmi >= 30 && bmi < 40) {
//     console.log("Artıq çəki (obez).");
// } else {
//     console.log("Artıq çəki (morbid dərəcədə piylənmə).");
// }

// 5. Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), 
// Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
//  let point = +prompt("Qiymətinizi daxil edin (0 - 100):");
//  let k = point;
//  if(k >= 0 && k <= 35) {
//     console.log(" Kafi");
//  }
//  else if(k > 35 && k <= 55 ) {
//     console.log(" Pis");
//  }
//  else if(k > 55 && k <= 75 ) {
//     console.log(" Orta ");
//  }
//  else if(k > 75 && k <= 90 ) {
//     console.log(" Yaxsi ");
//  }
//  else if(k > 90 && k <= 100 ) {
//     console.log(" Ela");
//  }
//  else{
//     console.log("Qiymet duzgun girilmeyib");
//  }

// 6.Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
// let hesablayinHipetonuz = (a, b) => Math.sqrt(a ** 2 + b ** 2);

// let teref2 = prompt("İkinci tərəfi daxil edin:");
// let teref1 = prompt("Birinci tərəfi daxil edin:");

// let hipetonuz = hesablayinHipetonuz(teref1, teref2);

// console.log("Üçbucağın hipotonuzu (c) tərəfi:", hipetonuz);




