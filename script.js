const counters = document.querySelectorAll('.counter');
const speed = 50;


counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = (count + inc).toFixed(0);
            setTimeout(updateCounter, 1)
        }
        else {
            count.innerText = target.toFixed(0);
        }
    }
    updateCounter();
})

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nicolae.ghetan@gmail.com",
        Password: "Ciudaiuda!3",
        To: 'nicolae.ghetan@gmail.com',
        From: "nicolae.ghetan@gmail.com",
        Subject: "Test mesage",
        Body: "Test mesage"
    }).then(
        message => alert(message)
    );
}
