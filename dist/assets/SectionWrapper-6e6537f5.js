import{r as i,R as o,m as d,s as l}from"./index-282b7503.js";const y=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),f=(e,t,s,n)=>({hidden:{x:e==="left"?100:e==="right"?-100:0,y:e==="up"?100:e==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:s,duration:n,ease:"easeOut"}}}),m=(e,t,s,n)=>({hidden:{x:e==="left"?"-100%":e==="right"?"100%":0,y:e==="up"||e==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:s,duration:n,ease:"easeOut"}}}),h=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),x=(e,t)=>function(){const[n,c]=i.useState(!1);return i.useEffect(()=>{const r=new IntersectionObserver(([u])=>{u.isIntersecting&&(c(!0),r.disconnect())},{threshold:.5}),a=document.getElementById(t);return a&&r.observe(a),()=>{a&&r.unobserve(a)}},[t]),o.createElement(d.section,{variants:h(),initial:n?"show":"hidden",className:`${l.padding} max-w-7xl mx-auto relative z-0`,id:t},o.createElement("span",{className:"hash-span",id:t}," "),n&&o.createElement(e,null))};export{x as S,f,m as s,y as t};
