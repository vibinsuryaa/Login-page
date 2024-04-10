/*ele=document.querySelector("h1")
// btn=querySelector
arr = [1,2,5,23,45,21]

document.querySelector("#myButton")
.addEventListener('click', ()=> {
    console.log("open")
    ele.textContent="Car"
    // ButtonToolbar.classList.add('button')
    var ans = add(10, 50,hello);
    console.log(ans);
})

function add(a, b,c) {
    c()
    return a + b;
}
function hello(){
    console.log("hello")
    for (i of arr){
        console.log(i)
    }
}*/

/*var object = {
  name: "suresh",
  age: "20",
};
object.sex = "Male";

for (i in object) {
  console.log(object[i]);
}

Arrayobj = [
  {
    name: "vibin",
    age: "50",
  },
  {
    name: "surya",
    age: "20",
  },
];
result = Arrayobj.filter(checkadult);
console.log(result);

for (i of Arrayobj) {
  console.log(i.name);
  console.log(i.age);
}

function checkadult(age) {
  return age.age >= 20;
}

var objectar=[
    {
        category:"work",
        SubCategory:"Meeting",
        Duration:"42",
        Task:"-"
    },

    {
        category:"Personal space",
        SubCategory:"-",
        Duration:"42",
        Task:"vty"
    },

    {
        category:"work",
        SubCategory:"-metting",
        Duration:"30",
        Task:"client call"
    },

    {
        category:"Personal space",
        SubCategory:"-",
        Duration:"55",
        Task:"work"
    },

    {
        category:"work",
        SubCategory:"-",
        Duration:"80",
        Task:"Docummentation"
    },
]

objectar.map((ele)=>{
    console.log(ele.category,ele.SubCategory,ele.Task,ele.Duration)
})

*/

/*var object={
  name:"vibin",
  subname:this.name,
  subtwoname:this.subname
}*/

const arr1=[1,2,3]
const arr2=[4,5,6]

arr3=[...arr1,0,...arr2];
console.log(arr3)