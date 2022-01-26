function validateForm(){
    const magCodeInput = document.getElementById('mag_kod');
    const magNameInput = document.getElementById('mag_nazwa');
    const countryPrefixInput = document.getElementById('mag_krajPrefix');
    const squareMetersInput = document.getElementById('mag_powierzchnia');
    const rackCountInput = document.getElementById('mag_iloscRegalow');    
    const locationCountInput = document.getElementById('mag_iloscPolozen');
    const cartCountInput = document.getElementById('mag_iloscWozkow');
    const hallCountInput = document.getElementById('mag_iloscHal');
    const scannerCountInput = document.getElementById('mag_iloscSkanerow');

    const errorMagCode = document.getElementById('errormag_kod');
    const errorMagName = document.getElementById('errormag_nazwa');
    const errorCountryPrefix = document.getElementById('errormag_krajPrefix');
    const errorSquareMeters = document.getElementById('errormag_powierzchnia');
    const errorRackCount = document.getElementById('errormag_iloscRegalow');
    const errorLocationCount = document.getElementById('errormag_iloscPolozen');
    const errorCartCount = document.getElementById('errormag_iloscWozkow');
    const errorHallCount = document.getElementById('errormag_iloscHal');
    const errorScannerCount = document.getElementById('errormag_iloscSkanerow');
    const errRequired = document.getElementById('errorMessage-required').innerText;
    const errSummary = document.getElementById('errorMessage-SummaryErr').innerText;
    const errNotInRange = document.getElementById('errorMessage-NotInRange').innerText;
    const errNotInRangeInt = document.getElementById('errorMessage-NotInRangeInt').innerText;

    resetErrors([magCodeInput //2-25
                ,magNameInput //2-100
                ,countryPrefixInput //2-5
                ,squareMetersInput
                ,rackCountInput
                ,locationCountInput
                ,cartCountInput
                ,hallCountInput
                ,scannerCountInput]
                ,[errorMagCode
                ,errorMagName
                ,errorCountryPrefix
                ,errorSquareMeters
                ,errorRackCount
                ,errorLocationCount
                ,errorCartCount
                ,errorHallCount
                ,errorScannerCount]
            ,errorsSummary);
    let valid = true;
//#region 
    if(!checkRequired(magCodeInput.value))
    {       
        valid = false;        
        magCodeInput.classList.add("error-input");
        errorMagCode.classList.add("errors-text");
        errorMagCode.innerText = errRequired;
    }
    else if(!checkTextLengthRange(magCodeInput.value,2,25))
    {
        valid = false;
        magCodeInput.classList.add("error-input");
        errorMagCode.classList.add("errors-text");
        errorMagCode.innerText = errNotInRange;
    }
    if(!checkRequired(magNameInput.value))
    {
        valid = false;
        magNameInput.classList.add("error-input");
        errorMagName.classList.add("errors-text")
        errorMagName.innerText = errRequired;
        
    }
    else if(!checkTextLengthRange(magNameInput.value,2,100))
    {
        valid = false;
        magNameInput.classList.add("error-input");
        errorMagName.classList.add("errors-text")
        errorMagName.innerText = errNotInRange;
    }
    if(!checkRequired(countryPrefixInput.value))
    {       
        valid = false;        
        countryPrefixInput.classList.add("error-input");
        errorCountryPrefix.classList.add("errors-text");
        errorCountryPrefix.innerText = errRequired;
    }
    else if(!checkTextLengthRange(countryPrefixInput.value,2,5))
    {
        valid = false;
        countryPrefixInput.classList.add("error-input");
        errorCountryPrefix.classList.add("errors-text");
        errorCountryPrefix.innerText = errNotInRange;
    }
    if(!checkRequired(squareMetersInput.value))
    {       
        valid = false;        
        squareMetersInput.classList.add("error-input");
        errorSquareMeters.classList.add("errors-text");
        errorSquareMeters.innerText = errRequired;
    }
    else if(!checkNumberRange(squareMetersInput.value,1,Number.MAX_SAFE_INTEGER))
    {
        valid = false;
        squareMetersInput.classList.add("error-input");
        errorSquareMeters.classList.add("errors-text");
        errorSquareMeters.innerText = errNotInRangeInt;
    }
    if(!checkRequired(rackCountInput.value))
    {       
        valid = false;        
        rackCountInput.classList.add("error-input");
        errorRackCount.classList.add("errors-text");
        errorRackCount.innerText = errRequired;
    }
    else if(!checkNumberRange(rackCountInput.value,1,Number.MAX_SAFE_INTEGER))
    {
        valid = false;
        rackCountInput.classList.add("error-input");
        errorRackCount.classList.add("errors-text");
        errorRackCount.innerText = errNotInRangeInt;
    }
    if(!checkRequired(locationCountInput.value))
    {       
        valid = false;        
        locationCountInput.classList.add("error-input");
        errorLocationCount.classList.add("errors-text");
        errorLocationCount.innerText = errRequired;
    }
    else if(!checkNumberRange(locationCountInput.value,1,Number.MAX_SAFE_INTEGER))
    {
        valid = false;
        locationCountInput.classList.add("error-input");
        errorLocationCount.classList.add("errors-text");
        errorLocationCount.innerText = errNotInRangeInt;
    }
    if(!checkRequired(cartCountInput.value))
    {       
        valid = false;        
        cartCountInput.classList.add("error-input");
        errorCartCount.classList.add("errors-text");
        errorCartCount.innerText = errRequired;
    }
    else if(!checkNumberRange(cartCountInput.value,1,Number.MAX_SAFE_INTEGER))
    {
        valid = false;
        cartCountInput.classList.add("error-input");
        errorCartCount.classList.add("errors-text");
        errorCartCount.innerText = errNotInRangeInt;
    }
    if(!checkRequired(hallCountInput.value))
    {       
        valid = false;        
        hallCountInput.classList.add("error-input");
        errorHallCount.classList.add("errors-text");
        errorHallCount.innerText = errRequired;
    }
    else if(!checkNumberRange(hallCountInput.value,1,Number.MAX_SAFE_INTEGER))
    {
        valid = false;
        hallCountInput.classList.add("error-input");
        errorHallCount.classList.add("errors-text");
        errorHallCount.innerText = errNotInRangeInt;
    }
    if(scannerCountInput.value)
    {
        if(!checkNumberRange(scannerCountInput.value,1,Number.MAX_SAFE_INTEGER))
        {
            valid = false;
            scannerCountInput.classList.add("error-input");
            errorScannerCount.classList.add("errors-text");
            errorScannerCount.innerText = errNotInRangeInt;
        }

    }
    //#endregion
       
    if(!valid)
    {
        errorsSummary.innerText = errSummary;
    }
    return valid;
}
