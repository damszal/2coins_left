const container = document.querySelector(".sub-title-container")
const box = document.querySelector(".box")
const text = 'THE PLACE WHERE YOU CAN FIND MORE INFORMATION ABOUT ME'


const textArr = [...text]

function display(arr,time) {
    let index = 0
    const id = setInterval(()=>{
        if (index<arr.length)
        {
            container.innerHTML += `<span class="${arr[index]}">${arr[index]}</span>`
            index++
        } else
        {clearInterval(id)}
    },time)
}

display(textArr,120)




