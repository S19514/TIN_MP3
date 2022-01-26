function validateForm(){
    const firstNameInput = document.getElementById('prc_imie');
    const lastNameInput = document.getElementById('prc_nazwisko');
    const birthDateInput = document.getElementById('prc_dataUrodzenia');
    const workplaceInput = document.getElementById('prc_stanowisko');
    const civilStateInput = document.getElementById('prc_stanCywilny');
    const wareHouseInput = document.getElementById('mag_id');    
    const companyInput = document.getElementById('frm_id');
    const passwordInput = document.getElementById('password');
  

    const errorFirstName = document.getElementById('errorprc_imie');
    const errorLastName = document.getElementById('errorprc_nazwisko');
    const errorBirthDate = document.getElementById('errorprc_dataUrodzenia');
    const errorWorkplace = document.getElementById('errorprc_stanowisko');
    const errorWareHouse = document.getElementById('errormag_id');
    const errorCivilState = document.getElementById("errorprc_stanCywilny");
    const errorCompany = document.getElementById('errorfrm_id');
    const errorPassword = document.getElementById('errorpassword');
    const errRequired = document.getElementById('errorMessage-required').innerText;
    const errSummary = document.getElementById('errorMessage-SummaryErr').innerText;
    const errNotInRange = document.getElementById('errorMessage-NotInRange').innerText;
    const errDateNotFromPast = document.getElementById('errorMessage-DateFromPast').innerText;
  //  const errorsSummary = document.getElementById('errorsSummary');errorMessage-DateFromPast
    
    resetErrors([firstNameInput
                ,lastNameInput
                ,birthDateInput
                ,workplaceInput
                ,civilStateInput
                ,wareHouseInput
                ,companyInput
                ,passwordInput]
                ,[errorFirstName
                ,errorLastName
                ,errorBirthDate
                ,errorWorkplace
                ,errorWareHouse
                ,errorCompany
                ,errorPassword]
                ,errorsSummary);
    let valid = true;


    if(civilStateInput.value)
    {
        if(!checkTextLengthRange(civilStateInput.value,2,150))
        {
            valid = false;
            civilStateInput.classList.add("error-input");
            errorCivilState.classList.add("errors-text")
            errorCivilState.innerText = errNotInRange;//"Pole powinno zawierać od 2 do 150 znaków client";
        }
    }

    if(!checkRequired(firstNameInput.value))
    {       
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.classList.add("errors-text");
        errorFirstName.innerText = errRequired;//"Pole jest wymagane client";
    }
    else if(!checkTextLengthRange(firstNameInput.value,2,150))
    {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.classList.add("errors-text");
        errorFirstName.innerText = errNotInRange;//"Pole powinno zawierać od 2 do 150 znaków client";
    }

    if(!checkRequired(passwordInput.value))
    {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.classList.add("errors-text");
        errorPassword.innerText = errRequired;//"Pole jest wymagane client";
    }
    else if(!checkTextLengthRange(passwordInput.value,2,150))
    {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.classList.add("errors-text");
        errorPassword.innerText = errNotInRange;//"Pole powinno zawierać od 2 do 150 znaków client";
    }

    if(!checkRequired(lastNameInput.value))
    {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.classList.add("errors-text")
        errorLastName.innerText =errRequired;// "Pole jest wymagane client";
        
    }
    else if(!checkTextLengthRange(lastNameInput.value,2,150))
    {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.classList.add("errors-text")
        errorLastName.innerText = errNotInRange;//"Pole powinno zawierać od 2 do 150 znaków client";
    }
    if(!checkRequired(birthDateInput.value))
    {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirthDate.innerText = errRequired;//"Pole jest wymagane client";
        
    }

    if(!checkDate(birthDateInput.value))
    {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirthDate.innerText = errDateNotFromPast;//"Data musi być z przeszłości client";
    }
    // else if(!checkTextLengthRange(birthDateInput.valid,2,150))
    // {
    //     valid = false;
    //     birthDateInput.classList.add("error-input");
    //     errorBirthDate.innerText = "Pole powinno zawierać poprawną datę";
    // }

    if(!checkRequired(workplaceInput.value))
    {
        valid = false;
        workplaceInput.classList.add("error-input");
        errorWorkplace.classList.add("errors-text");
        errorWorkplace.innerText = errRequired;//"Pole jest wymagane client";
    }

   else if(!checkTextLengthRange(workplaceInput.value,1,100))
   {
        valid = false;
        workplaceInput.classList.add("error-input");
        workplaceInput.classList.add("errors-text");
        errorWorkplace.innerText = errNotInRange;//"Pole powinno zawierać od 1 do 150 znaków client";
   }
   
    if(!checkRequired(wareHouseInput.value))
    {
        valid = false;
        wareHouseInput.classList.add("error-input");
        wareHouseInput.classList.add("errors-text");
        errorWareHouse.innerText = errRequired;//"Pole jest wymagane client";
    }
    // else if(!checkTextLengthRange(wareHouseInput.valid,2,100))
    // {
    //     valid = false;
    //     workplaceInput.classList.add("error-input");
    //     workplaceInput.classList.add("errors-text");
    //     errorWorkplace.innerText = "Pole powinno zawierać od 2 do 150 znaków";
    // }    
    if(!checkRequired(companyInput.value))
    {
        valid = false;
        companyInput.classList.add("error-input");
        companyInput.classList.add("errors-text");
        errorCompany.innerText = errRequired;//"Pole jest wymagane client";
    }
    if(!valid)
    {
        errorsSummary.innerText = errSummary;//"Formularz zawiera błędy client";
    }
    return valid;
}
