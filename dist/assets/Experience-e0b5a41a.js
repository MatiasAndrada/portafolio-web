import{V as r,a as i,R as e,m,s as l,e as s}from"./index-d481d609.js";import{S as o,t as E}from"./SectionWrapper-1b4ee2ea.js";var n={VerticalTimeline:r.default,VerticalTimelineElement:i.default};const d=({experience:t})=>e.createElement(n.VerticalTimelineElement,{contentStyle:{background:"#232631",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e.createElement("div",{className:"flex justify-center items-center w-full h-full"},e.createElement("img",{src:t.icon,alt:t.company_name,className:"w-[120%] h-[120%] object-contain"}))},e.createElement("div",null,e.createElement("h3",{className:"text-white text-[24px] font-bold"},t.title),e.createElement("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0}},t.company_name)),e.createElement("ul",{className:"mt-5 list-disc ml-5 space-y-2"},t.points.map((a,c)=>e.createElement("li",{key:`experience-point-${c}`,className:"text-slate-200 text-[14px] pl-1 tracking-wider"},a)))),p=()=>e.createElement(e.Fragment,null,e.createElement(m.div,{variants:E()},e.createElement("p",{className:l.sectionSubText},"Lo que he hecho hasta ahora"),e.createElement("h2",{className:l.sectionHeadText},"Mi experiencia laboral.")),e.createElement("div",{className:"mt-20 flex flex-col h-100"},e.createElement(n.VerticalTimeline,null,s.map((t,a)=>e.createElement(d,{key:a,experience:t}))))),u=o(p,"work");export{u as default};
