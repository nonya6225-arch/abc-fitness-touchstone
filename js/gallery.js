document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>{
addToCart({id:b.dataset.id,name:b.dataset.name,price:Number(b.dataset.price)});
const s=document.getElementById("cartStatus"); if(s) s.textContent=`${b.dataset.name} added to cart.`;
}));
const view=document.getElementById("viewCart"); const area=document.getElementById("cartArea");
const body=document.getElementById("cartBody"); const total=document.getElementById("cartTotal"); const msg=document.getElementById("cartMsg");
function render(){const cart=getCart(); body.innerHTML=""; let t=0;
if(cart.length===0){msg.textContent="Your cart is empty."; msg.className="helper"; total.textContent=money(0); area.hidden=false; return;}
msg.textContent=""; msg.className="";
cart.forEach(i=>{const lt=i.price*(i.qty||1); t+=lt; const tr=document.createElement("tr");
tr.innerHTML=`<td>${i.name}</td><td>${money(i.price)}</td><td>${i.qty||1}</td><td>${money(lt)}</td>`; body.appendChild(tr);});
total.textContent=money(t); area.hidden=false;}
if(view) view.addEventListener("click",render);
document.getElementById("clearCart").addEventListener("click",()=>{clearCart();render();});
document.getElementById("processOrder").addEventListener("click",()=>{if(getCart().length===0){msg.textContent="Add an item first."; msg.className="error";return;}
msg.textContent="Order processed. Thank you!"; msg.className="success"; clearCart(); render();});
});