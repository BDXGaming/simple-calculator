$(document).ready(function (){
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const operations = ["plus", "minus", "divide", "multiply", "clear"]
    const operationToSign = {"plus":"+", "minus":"-", "divide":"/", "multiply":"*"}
    let numberString = ""
    let operation = ""
    let displayId = "output";
    let currentNumber = 0;
    let lastNumber = 0;

    $("div").click(function (){
        let id = $(this).attr("id")
        id = parseFloat(id)
        // console.log(id)

        // This checks if a value selected is a number
        if(numbers.includes(id)) {
            numberString += id.toString()
            $(`#${displayId}`).text(numberString)

        } else if (operations.includes($(this).attr("id"))){
            id = $(this).attr("id")
            currentNumber = parseFloat(numberString)
            numberString = ""
            if(id === "clear"){
                currentNumber = 0;
                lastNumber = 0
                $(`#${displayId}`).text("")
            }else{
                operation = operationToSign[id]
               $(`#${displayId}`).text(operationToSign[id])
            }
        } else if($(this).attr("id") === "decimal"){
            numberString += "."
            $(`#${displayId}`).text(numberString)
        } else if($(this).attr('id') === "percent"){
            let num = parseFloat(numberString)
            num = num /100;
            numberString = num.toString()
            $(`#${displayId}`).text(numberString)
        } else if($(this).attr("id") === "sign"){
            let placeHolder = numberString
            if(numberString.startsWith("-")){
                numberString = placeHolder.substring(1,placeHolder.length)
            }else{
              numberString = "-" + placeHolder
            }

            $(`#${displayId}`).text(numberString)
        } else if($(this).attr("id") === "equals"){
            let secondVal = parseFloat(numberString)

            if(operation === "+"){
                lastNumber = currentNumber + secondVal
            } else if(operation === "-"){
                lastNumber = currentNumber - secondVal
            } else if(operation === "*"){
                lastNumber = currentNumber * secondVal
            } else if(operation === "/"){
                lastNumber = currentNumber / secondVal // This does not work for some reason
            }
            numberString = lastNumber.toString()
            $(`#${displayId}`).text(lastNumber)
        }
    })

})