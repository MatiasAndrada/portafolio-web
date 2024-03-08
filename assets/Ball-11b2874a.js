import{Q as Z,q as B,o as j,ax as R,ap as $,ao as G,u as W,r as i,W as q,ay as C,az as k,O as N,aA as Q,aB as J,a1 as K,R as d,as as Y,at as v}from"./index-f565b734.js";import{O as V}from"./OrbitControls-49c652f7.js";class tt extends Z{constructor(u,f,p,b){super();const E=[],P=[],I=[],l=new B,A=new j;A.makeRotationFromEuler(p),A.setPosition(f);const z=new j;z.copy(A).invert(),O(),this.setAttribute("position",new R(E,3)),this.setAttribute("normal",new R(P,3)),this.setAttribute("uv",new R(I,2));function O(){let t,e=[];const r=new B,a=new B;if(u.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const n=u.geometry,w=n.attributes.position,x=n.attributes.normal;if(n.index!==null){const m=n.index;for(t=0;t<m.count;t++)r.fromBufferAttribute(w,m.getX(t)),a.fromBufferAttribute(x,m.getX(t)),M(e,r,a)}else for(t=0;t<w.count;t++)r.fromBufferAttribute(w,t),a.fromBufferAttribute(x,t),M(e,r,a);for(e=h(e,l.set(1,0,0)),e=h(e,l.set(-1,0,0)),e=h(e,l.set(0,1,0)),e=h(e,l.set(0,-1,0)),e=h(e,l.set(0,0,1)),e=h(e,l.set(0,0,-1)),t=0;t<e.length;t++){const m=e[t];I.push(.5+m.position.x/b.x,.5+m.position.y/b.y),m.position.applyMatrix4(A),E.push(m.position.x,m.position.y,m.position.z),P.push(m.normal.x,m.normal.y,m.normal.z)}}function M(t,e,r){e.applyMatrix4(u.matrixWorld),e.applyMatrix4(z),r.transformDirection(u.matrixWorld),t.push(new H(e.clone(),r.clone()))}function h(t,e){const r=[],a=.5*Math.abs(b.dot(e));for(let n=0;n<t.length;n+=3){let w,x,m,L=0,c,y,g,D;const S=t[n+0].position.dot(e)-a,_=t[n+1].position.dot(e)-a,X=t[n+2].position.dot(e)-a;switch(w=S>0,x=_>0,m=X>0,L=(w?1:0)+(x?1:0)+(m?1:0),L){case 0:{r.push(t[n]),r.push(t[n+1]),r.push(t[n+2]);break}case 1:{if(w&&(c=t[n+1],y=t[n+2],g=s(t[n],c,e,a),D=s(t[n],y,e,a)),x){c=t[n],y=t[n+2],g=s(t[n+1],c,e,a),D=s(t[n+1],y,e,a),r.push(g),r.push(y.clone()),r.push(c.clone()),r.push(y.clone()),r.push(g.clone()),r.push(D);break}m&&(c=t[n],y=t[n+1],g=s(t[n+2],c,e,a),D=s(t[n+2],y,e,a)),r.push(c.clone()),r.push(y.clone()),r.push(g),r.push(D),r.push(g.clone()),r.push(y.clone());break}case 2:{w||(c=t[n].clone(),y=s(c,t[n+1],e,a),g=s(c,t[n+2],e,a),r.push(c),r.push(y),r.push(g)),x||(c=t[n+1].clone(),y=s(c,t[n+2],e,a),g=s(c,t[n],e,a),r.push(c),r.push(y),r.push(g)),m||(c=t[n+2].clone(),y=s(c,t[n],e,a),g=s(c,t[n+1],e,a),r.push(c),r.push(y),r.push(g));break}}}return r}function s(t,e,r,a){const n=t.position.dot(r)-a,w=e.position.dot(r)-a,x=n/(n-w);return new H(new B(t.position.x+x*(e.position.x-t.position.x),t.position.y+x*(e.position.y-t.position.y),t.position.z+x*(e.position.z-t.position.z)),new B(t.normal.x+x*(e.normal.x-t.normal.x),t.normal.y+x*(e.normal.y-t.normal.y),t.normal.z+x*(e.normal.z-t.normal.z)))}}}class H{constructor(u,f){this.position=u,this.normal=f}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const U=o=>o===Object(o)&&!Array.isArray(o)&&typeof o!="function";function F(o,u){const f=$(b=>b.gl),p=G(W,U(o)?Object.values(o):o);if(i.useLayoutEffect(()=>{u==null||u(p)},[u]),i.useEffect(()=>{"initTexture"in f&&(Array.isArray(p)?p:[p]).forEach(f.initTexture)},[f,p]),U(o)){const b={};let E=0;for(const P in o)b[P]=p[E++];return b}else return p}F.preload=o=>G.preload(W,o);F.clear=o=>G.clear(W,o);function et(o){return Array.isArray(o)}function T(o=[0,0,0]){return et(o)?o:o instanceof B||o instanceof C?[o.x,o.y,o.z]:[o,o,o]}const ot=i.forwardRef(function({debug:u,depthTest:f=!1,polygonOffsetFactor:p=-10,map:b,mesh:E,children:P,position:I,rotation:l,scale:A,...z},O){const M=i.useRef(null);i.useImperativeHandle(O,()=>M.current);const h=i.useRef(null);return i.useLayoutEffect(()=>{const s=(E==null?void 0:E.current)||M.current.parent,t=M.current;if(!(s instanceof q))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const e={position:new B,rotation:new C,scale:new B(1,1,1)};if(s){k(e,{position:I,scale:A});const r=s.matrixWorld.clone();if(s.matrixWorld.identity(),!l||typeof l=="number"){const a=new N;a.position.copy(e.position),a.lookAt(s.position),typeof l=="number"&&a.rotateZ(l),k(e,{rotation:a.rotation})}else k(e,{rotation:l});return t.geometry=new tt(s,e.position,e.rotation,e.scale),h.current&&(k(h.current,e),h.current.traverse(a=>a.raycast=()=>null)),s.matrixWorld=r,()=>{t.geometry.dispose()}}},[E,...T(I),...T(A),...T(l)]),i.createElement("mesh",Q({ref:M,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":p,"material-depthTest":f,"material-map":b},z),P,u&&i.createElement("mesh",{ref:h},i.createElement("boxGeometry",null),i.createElement("meshNormalMaterial",{wireframe:!0}),i.createElement("axesHelper",null)))}),rt=i.forwardRef(({children:o,enabled:u=!0,speed:f=1,rotationIntensity:p=1,floatIntensity:b=1,floatingRange:E=[-.1,.1],...P},I)=>{const l=i.useRef(null);i.useImperativeHandle(I,()=>l.current,[]);const A=i.useRef(Math.random()*1e4);return J(z=>{var O,M;if(!u||f===0)return;const h=A.current+z.clock.getElapsedTime();l.current.rotation.x=Math.cos(h/4*f)/8*p,l.current.rotation.y=Math.sin(h/4*f)/8*p,l.current.rotation.z=Math.sin(h/4*f)/20*p;let s=Math.sin(h/4*f)/10;s=K.mapLinear(s,-.1,.1,(O=E==null?void 0:E[0])!==null&&O!==void 0?O:-.1,(M=E==null?void 0:E[1])!==null&&M!==void 0?M:.1),l.current.position.y=s*b,l.current.updateMatrix()}),i.createElement("group",P,i.createElement("group",{ref:l,matrixAutoUpdate:!1},o))}),nt=o=>{const[u]=F([o.imgUrl]);return d.createElement(rt,{speed:1.75,rotationIntensity:.2,floatIntensity:.2},d.createElement("mesh",{scale:2.75},d.createElement("icosahedronGeometry",{args:[1,1]}),o.isMobile?d.createElement("meshBasicMaterial",{color:"#fff8eb",roughness:.5,metalness:.1}):d.createElement("meshLambertMaterial",{color:"#fff8eb",roughness:.5,metalness:.1,clipShadows:!0}),d.createElement(ot,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:u,opacity:.9})))},lt=({icon:o})=>{const[u,f]=i.useState(!1);return i.useEffect(()=>{const p=window.innerWidth;f(p<=500)},[]),d.createElement(Y,{frameloop:"demand",dpr:[1,u?1:2],gl:{preserveDrawingBuffer:!0}},d.createElement(i.Suspense,{fallback:d.createElement(v,null)},!u&&d.createElement(d.Fragment,null,d.createElement("ambientLight",{intensity:.25}),d.createElement("directionalLight",{position:[0,0,.03]})),d.createElement(V,{enableZoom:!1,enablePan:!1,minAzimuthAngle:-Math.PI/4,maxAzimuthAngle:Math.PI/4,minPolarAngle:Math.PI/2-Math.PI/18,maxPolarAngle:Math.PI/2+Math.PI/18,enableDamping:!0,dampingFactor:.05,target:[0,0,0]}),o&&d.createElement(nt,{imgUrl:o,isMobile:u})))};export{lt as default};
