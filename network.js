
// select buttons for form signin, signup and post a feed
const signinForm = document.querySelector('#formSignin');
const signupForm = document.querySelector('#formSignup');
const postForm = document.querySelector('#formPost');

// handle a submit event for the signin form when user provides input
signinForm.onsubmit = (e)=>{
    e.preventDefault();
    const userMail = document.getElementById('userMail').value;
    const userPass = document.getElementById('userPass').value;

}