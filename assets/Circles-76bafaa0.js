import{r as x,R as y}from"./index-fdffa033.js";const R=()=>{const f=x.useRef(null);return x.useEffect(()=>{const t=f.current,r=t.getContext("2d"),n=["#ff0080","#36c5f0","#ffce00","#2ed573","#8c7ae6"];let c=[];t.width=window.innerWidth,t.height=window.innerHeight;const e=(i,s)=>Math.floor(Math.random()*(s-i+1)+i);class m{constructor(s,h,d,l,a,o){this.x=s,this.y=h,this.radius=d,this.dx=l,this.dy=a,this.color=o}draw(){r.beginPath(),r.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),r.fillStyle=this.color,r.fill()}update(){(this.x+this.radius>t.width||this.x-this.radius<0)&&(this.dx=-this.dx,this.color=n[e(0,n.length-1)]),(this.y+this.radius>t.height||this.y-this.radius<0)&&(this.dy=-this.dy,this.color=n[e(0,n.length-1)]),this.x+=this.dx,this.y+=this.dy,this.draw()}}const u=()=>{const i=Math.floor(t.width*t.height/1e5);c.length=0;for(let s=0;s<i;s++){const h=e(10,50),d=e(h,t.width-h),l=e(h,t.height-h);let a=e(-2,2),o=e(-2,2);s%2===0&&(a/=4,o/=4);const v=n[e(0,n.length-1)];c.push(new m(d,l,h,a,o,v))}};u();const w=()=>{requestAnimationFrame(w),r.clearRect(0,0,t.width,t.height),c.forEach(i=>i.update())};w();const g=()=>{t.width=window.innerWidth,t.height=window.innerHeight,u()};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),y.createElement("div",{className:"background "},y.createElement("canvas",{ref:f}))};export{R as default};
