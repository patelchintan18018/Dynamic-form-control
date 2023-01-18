// function add() {

//     var a = document.getElementById('inputs').value
//     console.log(a)
//     var displayElement = document.getElementById('display_element')

//     //creating div to append in display_element
//     var ele = document.createElement("div")
//     displayElement.appendChild(ele)
//     ele.classList.add("box")

//     //creating leftside and rightside and appending it in ele
//     var leftSide = document.createElement("div")
//     var rightSide = document.createElement("div")
//     ele.appendChild(leftSide)
//     ele.appendChild(rightSide)
//     leftSide.classList.add("area")
//     rightSide.classList.add("area")


//     //creating and adding input and button on leftSide
//     var input1 = document.createElement("input")
//     var btn1 = document.createElement("button")
//     input1.placeholder = "Enter lable ..."
//     btn1.innerHTML = "add"
//     leftSide.appendChild(input1)
//     leftSide.appendChild(btn1)



//     //adding label 
//     btn1.addEventListener('click', function () {
//         var labelName = input1.value
//         // console.log(labelName)
//         leftSide.innerHTML = labelName + " :- "
//         leftSide.classList.add("label")

//     })

//     // creating input2, add and cancel 
//     var input2 = document.createElement("input")
//     var btn2 = document.createElement("button")
//     btn2.innerHTML = "add"
//     var btnCancel = document.createElement("button")
//     btnCancel.innerHTML = "&times"
//     btnCancel.classList.add("cancel")
//     var option = document.createElement("label")
//     option.for = input2.value
//     var addAnother = document.createElement("button")
//     addAnother.innerHTML = "+"

//     //checkig for radio and checkbox and submit
//     if (a == "Radio" || a == "Checkbox") {
//         rightSide.appendChild(input2)
//         rightSide.appendChild(option)
//         rightSide.appendChild(btn2)
//         rightSide.appendChild(btnCancel)
//         input2.placeholder = "options"

//         btn2.addEventListener('click', function () {
//             input2.type = a
//             input2.name = "qwe"
//             option.innerHTML = input2.value
//             btn2.remove()
//             rightSide.appendChild(addAnother)


//              //onclicking btn2 delete ele
//     btnCancel.addEventListener('click', function () {
//         btnCancel.parentNode.remove()
//     })

//         })


//     }
//     else {
//         rightSide.appendChild(input2)
//         rightSide.appendChild(btnCancel)
//         rightSide.appendChild(btnCancel)
//         input2.placeholder = a
//         input2.type = a

//          //onclicking btn2 delete ele
//     btnCancel.addEventListener('click', function () {
//         btnCancel.parentNode.parentNode.remove()
//     })
//     }



//     addAnother.addEventListener('click', function () {

//         addAnother.remove()
//         var space = document.createElement("br")
//         var secondinput2 = document.createElement("input")
//         secondinput2.name = "qwe"
//         secondinput2.placeholder = "options"
//         var secondoption = document.createElement("label")
//         secondoption.for = secondinput2.value
//         var secondbtn2 = document.createElement("button")
//         secondbtn2.innerHTML = "add"
//         var secondbtnCancel = document.createElement("button")
//         secondbtnCancel.innerHTML = "&times"
//         secondbtnCancel.classList.add("cancel")


// rightSide.appendChild(space)

//         rightSide.appendChild(btnCancel)
//         rightSide.appendChild(secondinput2)
//         rightSide.appendChild(secondoption)
//         rightSide.appendChild(secondbtn2)
//         rightSide.appendChild(secondbtnCancel)

//         secondbtn2.addEventListener('click', function () {
//             secondinput2.type = a
//             secondoption.innerHTML = secondinput2.value
//             secondbtn2.remove()
//             rightSide.appendChild(addAnother)

//         })
//     })




//     // //onclicking btn2 delete ele
//     // btnCancel.addEventListener('click', function () {
//     //     btnCancel.parentNode.parentNode.remove()
//     // })

// }



// function add() {
//     var a = document.getElementById('inputs').value
//     console.log(a)
//     var displayElement = document.getElementById('display_element')

//     var ele = document.createElement("div")
//     ele.classList.add("box")
//     displayElement.appendChild(ele)

//     var leftSide = document.createElement("div")
//     var rightSide = document.createElement("div")
//     leftSide.classList.add("area")
//     rightSide.classList.add("area")

//     //leftSide element
//     var input1 = document.createElement("input")
//     input1.placeholder = "Enter Label..."
//     var btn1 = document.createElement("button")
//     btn1.innerHTML = "add"
//     leftSide.appendChild(input1)
//     leftSide.appendChild(btn1)
//     ele.appendChild(leftSide)

//     //onclick btn1
//     btn1.addEventListener('click', function () {
//         var labelName = input1.value
//         leftSide.innerHTML = labelName + ' :- '
//         leftSide.classList.add("labelName")
//     })


//     //creating all element required for rightSide
//     var input2 = document.createElement("input")
//     var label2 = document.createElement("label")
//     var btn2 = document.createElement("button")
//     btn2.innerHTML = "add"

//     var btnCancel = document.createElement("button")
//     btnCancel.innerHTML = "&times"
//     btnCancel.classList.add("cancel")

//     var addAnother = document.createElement("button")
//     addAnother.innerHTML = "+"

//     var removeItem =document.createElement("button")
//     removeItem.innerHTML="-"


//     ele.appendChild(rightSide)


//     if (a == "Radio") {
//         input2.type = "text"
//         input2.placeholder = "option"
//         input2.name = "qwe"
//         rightSide.appendChild(input2)
//         rightSide.appendChild(label2)
//         rightSide.appendChild(btn2)
//         rightSide.appendChild(btnCancel)

//         btn2.addEventListener('click', function () {
//             rightSide.appendChild(label2)
//             rightSide.appendChild(addAnother)
//             rightSide.appendChild(removeItem)
//             input2.type = a
//             input2.id = input2.value
//             label2.for = input2.value
//             label2.innerHTML = input2.value
//             label2.classList.add("labelName")



//             btn2.remove()
//             // rightSide.appendChild(addAnother)
//             rightSide.appendChild(btnCancel)

//          //remove items
//     removeItem.addEventListener('click',function(){
//         removeItem.parentNode.remove()
//     })


//         })

//     }
//     else {
//         rightSide.appendChild(input2)
//         input2.type = a
//         input2.placeholder = a
//         rightSide.appendChild(btn2)
//         rightSide.appendChild(btnCancel)
//     }


//     addAnother.addEventListener('click', function () {

//         // addAnother.remove()
//         var space = document.createElement("br")
//         var secondinput2 = document.createElement("input")
//         secondinput2.name = "qwe"
//         secondinput2.placeholder = "options"
//         var secondoption = document.createElement("label")
//         secondoption.for = secondinput2.value
//         secondoption.classList.add("labelName")
//         var secondbtn2 = document.createElement("button")
//         secondbtn2.innerHTML = "add"
//         var secondbtnAdd = document.createElement("button")
//         secondbtnAdd.innerHTML="+"
//         var secondbtnCancel = document.createElement("button")
//         secondbtnCancel.innerHTML = "-"

//         var rightSide2= document.createElement("div")
//         rightSide2.style.display="flex"
//         rightSide.appendChild(rightSide2)

//         rightSide2.appendChild(space)

//         // rightSide.appendChild(btnCancel)
//         rightSide2.appendChild(secondinput2)
//         rightSide2.appendChild(secondoption)
//         rightSide2.appendChild(secondbtn2)


//         secondbtn2.addEventListener('click', function () {
//             secondinput2.type = a
//             secondoption.innerHTML = secondinput2.value
//             secondbtn2.remove()
//             rightSide2.appendChild(addAnother)
//             rightSide2.appendChild(secondbtnCancel)

//             secondbtnCancel.addEventListener('click',function(){
//                 secondbtnCancel.parentNode.remove()
//                 rightSide2.appendChild(secondbtnCancel)
//             })
//         })
//     })


//     //onclicking btn2 delete ele
//     btnCancel.addEventListener('click', function () {
//         btnCancel.parentNode.parentNode.remove()
//     })







// }

function add() {
    
    var a = document.getElementById('inputs').value
    console.log(a)

    var displayElement = document.getElementById('display_element')

    var ele = document.createElement("div")
    ele.classList.add("box")
    displayElement.appendChild(ele)


    //creating leftSide and rightSide
    var leftSide = document.createElement("div")
    var rightSide = document.createElement("div")
    leftSide.classList.add("area")
    rightSide.classList.add("area")

    //adding element in leftSide
    var input1 = document.createElement("input")
    input1.placeholder = "Enter Label..."
    var btn1 = document.createElement("button")
    btn1.innerHTML = "add"
    leftSide.appendChild(input1)
    leftSide.appendChild(btn1)
    
    ele.appendChild(leftSide)

    //onclick btn1
    btn1.addEventListener('click', function () {
        var labelName = input1.value
        leftSide.innerHTML = labelName + ' :- '
        leftSide.classList.add("labelName")
    })


     //creating all element required for rightSide
    var input2 = document.createElement("input")
    var btn2 = document.createElement("button")
    btn2.innerHTML = "+"
    var btnCancel = document.createElement("button")
    btnCancel.innerHTML = "&times"
    btnCancel.classList.add("cancel")

    //adding element in rightSide
    ele.appendChild(rightSide)
    rightSide.appendChild(input2)
    input2.placeholder=a
    
    if(a=="Radio" || a=="Checkbox"){
        rightSide.appendChild(btn2)
    }

    rightSide.appendChild(btnCancel)

    btn2.addEventListener('click',function(){
        var para=document.createElement("p")
        // para.style.border="2px solid black"
        var input3=document.createElement("input")
        input3.type=a
        input3.name=input1.value
        var labelName=document.createElement("label")
        labelName.innerHTML=input2.value
        labelName.style.width="200px"
        var removeItem=document.createElement("button")
        removeItem.innerHTML="-"
        // removeItem.classList.add("cancel")
        
        para.appendChild(input3)
        para.appendChild(labelName)
        para.appendChild(removeItem)
        rightSide.appendChild(para)
        input2.value=""


        //removing radio and checkbox item
        removeItem.addEventListener('click',function(){
            para.remove()
        })
    })

    

  




    //submit button
    if(a=="Submit"){
        
        leftSide.remove()
        // input1.remove()
        // btn1.remove()
        
        rightSide.style.marginTop="2rem"
        input2.type=a
        ele.style.textAlign="center"
    }

    //removing element
    btnCancel.addEventListener('click', function(){
        btnCancel.parentNode.parentNode.remove()
    })
}