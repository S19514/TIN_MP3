function validateForm() {
    const frmNameInput = document.getElementById('frm_nazwa'); //150
    const frmAdressInput = document.getElementById('frm_adres'); //150
    const frmPostCodeInput = document.getElementById('frm_kodP'); //20
    const frmTownInput = document.getElementById('frm_miasto');// 150
    const frmCountryPrefixInput = document.getElementById('frm_krajPrefix');//5
    const frmPrezesInput = document.getElementById('frm_prezes');//150


    const errorFrmName = document.getElementById('errorfrm_nazwa');
    const errorFrmAdress = document.getElementById('errorfrm_adres');
    const errorfrmPostCode = document.getElementById('errorfrm_kodP');
    const errorFrmTown = document.getElementById('errorfrm_miasto');
    const errorFrmCountryPrefix = document.getElementById('errorfrm_krajPrefix');
    const errorFrmPrezes = document.getElementById('errorfrm_prezes');

    const errRequired = document.getElementById('errorMessage-required').innerText;
    const errSummary = document.getElementById('errorMessage-SummaryErr').innerText;
    const errNotInRange = document.getElementById('errorMessage-NotInRange').innerText;
    const errNotInRangeInt = document.getElementById('errorMessage-NotInRangeInt').innerText;
 
    resetErrors([frmNameInput ///2-150
        , frmAdressInput //2-150
        , frmPostCodeInput //4-20
        , frmTownInput //1-150
        , frmCountryPrefixInput //2-5
        , frmPrezesInput]
        , [errorFrmName
            , errorFrmAdress
            , errorfrmPostCode
            , errorFrmTown
            , errorFrmCountryPrefix
            , errorFrmPrezes]
        , errorsSummary);
    let valid = true;
    // #region 
    if (!checkRequired(frmNameInput.value)) {
        valid = false;
        frmNameInput.classList.add("error-input");
        errorFrmName.classList.add("errors-text");
        errorFrmName.innerText = errRequired;
    }
    else if (!checkTextLengthRange(frmNameInput.value, 2, 150)) {
        valid = false;
        frmNameInput.classList.add("error-input");
        errorFrmName.classList.add("errors-text");
        errorFrmName.innerText = errNotInRange;
    }
    if (!checkRequired(frmAdressInput.value)) {
        valid = false;
        frmAdressInput.classList.add("error-input");
        errorFrmAdress.classList.add("errors-text");
        errorFrmAdress.innerText = errRequired;
    }
    else if (!checkTextLengthRange(frmAdressInput.value, 2, 150)) {
        valid = false;
        frmAdressInput.classList.add("error-input");
        errorFrmAdress.classList.add("errors-text");
        errorFrmAdress.innerText = errNotInRange;
    }
    if (!checkRequired(frmPostCodeInput.value)) {
        valid = false;
        frmPostCodeInput.classList.add("error-input");
        errorfrmPostCode.classList.add("errors-text");
        errorfrmPostCode.innerText = errRequired;
    }
    else if (!checkTextLengthRange(frmPostCodeInput.value, 2, 20)) {
        valid = false;
        frmPostCodeInput.classList.add("error-input");
        errorfrmPostCode.classList.add("errors-text");
        errorfrmPostCode.innerText = errNotInRange;
    }
    if (!checkRequired(frmTownInput.value)) {
        valid = false;
        frmTownInput.classList.add("error-input");
        errorFrmTown.classList.add("errors-text");
        errorFrmTown.innerText = errRequired;
    }
    else if (!checkTextLengthRange(frmTownInput.value, 2, 150)) {
        valid = false;
        frmTownInput.classList.add("error-input");
        errorFrmTown.classList.add("errors-text");
        errorFrmTown.innerText = errNotInRange;
    }
    if (!checkRequired(frmCountryPrefixInput.value)) {
        valid = false;
        frmCountryPrefixInput.classList.add("error-input");
        errorFrmCountryPrefix.classList.add("errors-text");
        errorFrmCountryPrefix.innerText = errRequired;
    }
    else if (!checkTextLengthRange(frmCountryPrefixInput.value, 2, 5)) {
        valid = false;
        frmCountryPrefixInput.classList.add("error-input");
        errorFrmCountryPrefix.classList.add("errors-text");
        errorFrmCountryPrefix.innerText = errNotInRange;
    }
    if (frmPrezesInput.value) 
    {           
        if (!checkTextLengthRange(frmPrezesInput.value, 2, 150)) 
        {
            valid = false;
            frmPrezesInput.classList.add("error-input");
            errorFrmPrezes.classList.add("errors-text");
            errorFrmPrezes.innerText = errNotInRange;
        }
    }
    
    //#endregion

    if (!valid) {
        errorsSummary.innerText = errSummary;
    }
    return valid;
}
