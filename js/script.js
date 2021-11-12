function calculateBMI()
{
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var result = weight / Math.pow(height / 100, 2);

    if (isNaN(result)){
        document.getElementById('result').innerHTML = "Please enter numerical values";
    }
    else{
        if (weight === "" || height === ""){
            document.getElementById('result').innerHTML = "Textfields cannot be empty"
        }
        else{
            document.getElementById('result').innerHTML = result.toFixed(3) + " kg/m<sup>2</sup>";
        }
    }

    if (result < 18.5){
        document.getElementById('category').innerHTML = "Underweight";
    }
    else if (result >= 18.5 && result <= 25){
        document.getElementById('category').innerHTML = "Normal";
    }
    else if (result >25 && result <= 30){
        document.getElementById('category').innerHTML = "Overweight";
    }
    else if (result > 30){
        document.getElementById('category').innerHTML = "Obese";
    }
    else{
        document.getElementById('category').innerHTML = "Undefined";
    }

    return true;
}

function clearFields()
{
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('category').innerHTML = "";
}