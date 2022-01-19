function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i=0; i<inputs.length; i++) {
            inputs[i].classList.remove("error-input");
    }

    for(let i=0; i<errorTexts.length; i++) {      
       errorTexts[i].innerText = "";
    }

    errorInfo.innerText = "";
}
function checkRequired(value)
{
    console.log("checkRequired " + value);
    if(!value) 
    {
        return false;
    }
    if(value =="-- Wybierz odpowiednie --")
        return false;

    value = value.toString().trim();
    if(value === "")
    {
        return false;
    }
    
    return true;
}
function checkTextLengthRange(value,min,max)
{
    if(!value) 
        return false;
    
    value = value.toString().trim();
    const length = value.length;
    if(max && length > max)
    {
        return false;
    }

        if(min && length < min)
        {
            return false;
        }

    return true;
}
function checkDate(value)
{
    let today = new Date().toISOString().slice(0, 10);
    if(!value) 
        return false;            
    if(today < value )
    {
        console.log("zbyt wysoka data");
        return false;        
    }
    else if(today == value )
    {
        console.log("równa data");
        return false
    }

    return true;
}
function checkNumberRange(value, min, max)
{
    if(!value)
        return false;

    if(isNaN(value))
        return false;

    value = parseInt(value);

    if(value < min)
        return false;
    if(value > max)
        return false;
            
    return true;
}