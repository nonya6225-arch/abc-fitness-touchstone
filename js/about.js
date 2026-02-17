document.addEventListener("DOMContentLoaded",()=>{const form=document.getElementById("contactForm");const msg=document.getElementById("contactMsg");const list=document.getElementById("feedbackList");
function render(){const items=rj(localStorage,KEYS.feedback,[]); list.innerHTML="";
if(items.length===0){list.innerHTML="<li class='helper'>No feedback yet.</li>"; return;}
items.slice().reverse().forEach(e=>{const li=document.createElement("li");
li.innerHTML=`<strong>${e.name}</strong> <span class="helper">(${e.type})</span><br/><span class="helper">${e.email}</span><br/>${e.message}`; list.appendChild(li);});}
if(form) form.addEventListener("submit",(ev)=>{ev.preventDefault();msg.textContent="";msg.className="";
const name=document.getElementById("fullName").value.trim();const email=document.getElementById("email").value.trim().toLowerCase();
const type=document.getElementById("requestType").value;const message=document.getElementById("message").value.trim();
if(name.length<2){msg.textContent="Please enter your full name.";msg.className="error";return;}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.textContent="Please enter a valid email.";msg.className="error";return;}
if(message.length<10){msg.textContent="Message must be at least 10 characters.";msg.className="error";return;}
const entry={name,email,type,message,ts:new Date().toISOString()};
const fb=rj(localStorage,KEYS.feedback,[]); fb.push(entry); wj(localStorage,KEYS.feedback,fb); wj(localStorage,KEYS.order,entry);
msg.textContent="Saved! We will follow up soon.";msg.className="success"; form.reset(); render();
});
render();
});