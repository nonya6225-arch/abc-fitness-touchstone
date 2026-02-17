document.addEventListener("DOMContentLoaded",()=>{const form=document.getElementById("subscribeForm");const msg=document.getElementById("subscribeMsg");
if(!form) return;
form.addEventListener("submit",(e)=>{e.preventDefault();msg.textContent="";msg.className="";
const email=document.getElementById("subEmail").value.trim().toLowerCase();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.textContent="Please enter a valid email address.";msg.className="error";return;}
const subs=rj(localStorage,KEYS.subs,[]);
if(subs.includes(email)){msg.textContent="You're already subscribed.";msg.className="helper";return;}
subs.push(email);wj(localStorage,KEYS.subs,subs);
msg.textContent="Thanks for subscribing!";msg.className="success";form.reset();
});});