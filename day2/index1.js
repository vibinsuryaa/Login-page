/*setInterval(()=>alert("hello"),3000);

var object={
    name:"vibin",
    subaname:this.name,
    subwoname:this.subName
}

console.log(object)*/

/*timer=setTimeout(()=>{alert("time out")},1000)

setTimeout(()=>{
    clearTimeout(timer)

},3000);*/




/*document.querySelector('#start')
.addEventListener('click',()=>{
    stopWatch=document.querySelector("#watch").value
    console.log(stopWatch)
    timer = setInterval(()=>{
        console.log(timer);
    
    },1000);
    setTimeout(()=>{
        clearInterval(timer);
        alert("end")
    },stopWatch);
})*/

const arr1=[1,2,3]
const arr2=[4,5,6]

arr3=[...arr1,0,...arr2];
console.log(arr3)


    