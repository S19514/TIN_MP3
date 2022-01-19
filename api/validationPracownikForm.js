function validateForm(){
    const firstNameInput = document.getElementById('prc_imie');
    const lastNameInput = document.getElementById('prc_nazwisko');
    const birthDateInput = document.getElementById('prc_dataUrodznia');
    const workplaceInput = document.getElementById('prc_stanowisko');
    const civilStateInput = document.getElementById('prc_stanCywilny');
    const wareHouseInput = document.getElementById('mag_id');
    const companyInput = document.getElementById('frm_id');

    const errorFirstName = document.getElementById('errorprc_imie');
    const errorLastName = document.getElementById('errorprc_nazwisko');
    const errorBirthDate = document.getElementById('errorprc_dataUrodznia');
    const errorWorkplace = document.getElementById('errorprc_stanowisko');
    const errorWareHouse = document.getElementById('errormag_id');
    const errorCompany = document.getElementById('errorfrm_id');
    //const errorsSummary = document.getElementById('errorsSummary');
    
    resetErrors([firstNameInput
                ,lastNameInput
                ,birthDateInput
                ,workplaceInput
                ,civilStateInput
                ,wareHouseInput
                ,companyInput]
                ,[errorFirstName
                ,errorLastName
                ,errorBirthDate
                ,errorWorkplace
                ,errorWareHouse
                ,errorCompany]
                ,errorsSummary);
    let valid = true;

    if(!checkRequired(firstNameInput.value))
    {       
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.classList.add("errors-text");
        errorFirstName.innerText = "Pole jest wymagane client";
    }
    else if(!checkTextLengthRange(firstNameInput.value,2,150))
    {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.classList.add("errors-text");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 150 znaków client";
    }
    if(!checkRequired(lastNameInput.value))
    {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.classList.add("errors-text")
        errorLastName.innerText = "Pole jest wymagane client";
        
    }
    else if(!checkTextLengthRange(lastNameInput.value,2,150))
    {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.classList.add("errors-text")
        errorLastName.innerText = "Pole powinno zawierać od 2 do 150 znaków client";
    }
    if(!checkRequired(birthDateInput.value))
    {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirthDate.innerText = "Pole jest wymagane client";
        
    }

    if(!checkDate(birthDateInput.value))
    {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirthDate.innerText = "Data musi być z przeszłości client";
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
        errorWorkplace.innerText = "Pole jest wymagane client";
    }

   else if(!checkTextLengthRange(workplaceInput.value,1,100))
   {
        valid = false;
        workplaceInput.classList.add("error-input");
        workplaceInput.classList.add("errors-text");
        errorWorkplace.innerText = "Pole powinno zawierać od 1 do 150 znaków client";
   }
   
    if(!checkRequired(wareHouseInput.value))
    {
        valid = false;
        wareHouseInput.classList.add("error-input");
        wareHouseInput.classList.add("errors-text");
        errorWareHouse.innerText = "Pole jest wymagane client";
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
        errorCompany.innerText = "Pole jest wymagane client";
    }
    if(!valid)
    {
        errorsSummary.innerText = "Formularz zawiera błędy client";
    }
    return valid;
}
