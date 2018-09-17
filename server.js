const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));


const phones = [
  {
    "id": 1,
    "name": "Xiaomi Pocophone F1",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/55/thumb_154491_phone_front_big.jpeg",
    "memory": "64 GB",
    "ram": "6GB",
    "batery": "4000 mAh",
    "color": "Black",
    "price": "285 €",
    "rating": "9.9"
  },
  {
    "id": 2,
    "name": "Xiaomi Redmi Note 5",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/27/thumb_126184_phone_front_big.jpeg",
    "memory": "64 GB",
    "ram": "4GB",
    "batery": "2400 mAh",
    "color": "White",
    "price": "135 €",
    "rating": "9.6"
  },
  {
    "id": 3,
    "name": "Huawei Honor 10",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/37/thumb_136529_phone_front_big.png",
    "memory": "128 GB",
    "ram": "6GB",
    "batery": "3400 mAh",
    "color": "Blue",
    "price": "309 €",
    "rating": "9.7"
  },
  {
    "id": 4,
    "name": "Xiaomi Mi8",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/43/thumb_142438_phone_front_big.jpeg",
    "memory": "128 GB",
    "ram": "8GB",
    "batery": "3400 mAh",
    "color": "Gold",
    "price": "135 €",
    "rating": "9.7"
  },
  {
    "id": 5,
    "name": "Huawei Honor Note 10",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/52/thumb_151515_phone_front_big.jpeg",
    "memory": "64 GB",
    "ram": "6GB",
    "batery": "4900 mAh",
    "color": "Black",
    "price": "450 €",
    "rating": "9.8"
  },
  {
    "id": 6,
    "name": "iPhone 8",
    "image": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/89/thumb_88077_phone_front_big.jpeg",
    "memory": "64 GB",
    "ram": "4GB",
    "batery": "1821 mAh",
    "color": "White",
    "price": "700 €",
    "rating": "9.4"
  }
];

app.get('/api/phones', (request, response) => {
  response.json({
    phones: phones
  });
});

app.listen(3000, function () {
  console.log('Phone-catalog-app listening on port 3000!');
});