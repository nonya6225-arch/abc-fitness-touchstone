document.addEventListener("DOMContentLoaded",()=>{const box=document.getElementById("lastRequest");
const last=rj(localStorage,KEYS.order,null);
if(!last){box.innerHTML="<p class='helper'>No recent custom request saved on this device.</p>";return;}
box.innerHTML=`<p><strong>Name:</strong> ${last.name}<br/><strong>Email:</strong> ${last.email}<br/><strong>Type:</strong> ${last.type}</p><p><strong>Message:</strong><br/>${last.message}</p>`;
});