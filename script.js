function sendMail(params){
    let temParams={
        contactName:document.getElementById('contactName').value,
        contactEmail:document.getElementById('contactEmail').value,
        contactSubject:document.getElementById('contactSubject').value,
        contactMessage:document.getElementById('contactMessage').value
    };

    form=document.getElementById('contactForm');


    // emailjs.send('service_peb2qze','template_ddkwo87',temParams)
    // .then( () => {
    //     alert('Your message has been sent . I will be in contact with you soon. Thank you!')
    //     form.reset()}
    // )
    
     let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(temParams.contactName==''|| !temParams.contactEmail.match(mailformat)||temParams.contactMessage==''){
       alert('Oops! Something went wrong.Please fill out the form correctly.');
     }
    else{
       emailjs.send('service_peb2qze','template_ddkwo87',temParams)
        .then( () => {
             alert('Your message has been sent . I will be in contact with you soon. Thank you!')
            form.reset();
            })
       .catch(err => alert('Oops! Something went wrong. Try again!'))
        }
    }

    
    