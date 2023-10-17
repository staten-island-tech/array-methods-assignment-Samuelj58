const B = {
  Name: "Borscht",
  Orgin: "Russia/Ukraine",
  Hot: false,
  nums: [1,2,3,4]
};
const C = {
  Name: "Croque Madame",
  Orgin: "France",
  Hot: true,
  nums: [2,4]
};
const K = {
  Name: "Kimchi",
  Orgin: "Korea",
  Hot: false,
  nums: [1,2]
};
const S = {
  Name: "Souvlaki",
  Orgin: "Greece",
  Hot: true,
  nums: [2,3]
};
const Sch = {
  Name: "Schweinshaxe",
  Orgin: "Germany",
  Hot: true,
  nums: [3,4]
};
const Kit = {
  Name: "Kitfo",
  Orgin: "Ethiopia",
  Hot: false,
  nums: [1,4]
};

const foodarr = [];
foodarr.push(B, C, K, S, Sch, Kit);

foodarr.forEach(function (food) {
  console.log(food.Name);
});

const food = foodarr.filter((item) => item.Hot);
const cfood = foodarr.filter((items) => !items.Hot);
console.log(cfood, food,);
