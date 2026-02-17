const KEYS={cart:"abc_cart",subs:"abc_subscribers",feedback:"abc_feedback",order:"abc_custom_order"};
const rj=(s,k,f)=>{try{const v=s.getItem(k);return v?JSON.parse(v):f;}catch(e){return f;}};
const wj=(s,k,v)=>s.setItem(k,JSON.stringify(v));
const money=n=>`$${Number(n).toFixed(2)}`;
function getCart(){return rj(sessionStorage,KEYS.cart,[]);}
function setCart(c){wj(sessionStorage,KEYS.cart,c);updateCartCount();}
function updateCartCount(){const c=getCart().reduce((a,i)=>a+(i.qty||1),0);const el=document.getElementById("cartCount");if(el)el.textContent=String(c);}
function addToCart(item){const cart=getCart();const ex=cart.find(x=>x.id===item.id);if(ex){ex.qty=(ex.qty||1)+1;}else{cart.push({...item,qty:1});}setCart(cart);}
function clearCart(){setCart([]);}
document.addEventListener("DOMContentLoaded",updateCartCount);
