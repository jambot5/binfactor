document.forms['myFormId'].addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();
    // TODO do something here to show user that form is being submitted
    const contactFormSendButton = document.getElementById('contactFormSendButton')
    contactFormSendButton.textContent = `Sending... 🕒`;

    fetch(event.target.action, {
            method: 'POST',
            body: new URLSearchParams(new FormData(event.target)) // event.target is the form
        }).then((resp) => {
            return resp.json(); // or resp.text() or whatever the server sends
        }).then((body) => {
            // TODO handle body
            if (body.emailSent === true) {
                contactFormSendButton.textContent = `Got it. Thanks! 😀✔`;
                return;
            } else {
                contactFormSendButton.textContent = `❌ Error!\nPlease email or call us directly`;
            }
        }).catch((error) => {
            // TODO handle error
            contactFormSendButton.textContent = `❌ Error!\nPlease email or call us directly`;
            console.log(error);
            return;
        })
        .finally(
            () => {
                document.forms['myFormId'].reset();
            }
        );
}