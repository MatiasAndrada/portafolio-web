import{aC as Ve,aD as We,aE as Be,q as E,a7 as Ae,a0 as q,a2 as Q,aF as De,l as y,aG as z,aH as Y,r as H,ap as S,aB as Ge,aA as qe}from"./index-f565b734.js";var Qe=Object.defineProperty,$e=(b,h,f)=>h in b?Qe(b,h,{enumerable:!0,configurable:!0,writable:!0,value:f}):b[h]=f,n=(b,h,f)=>($e(b,typeof h!="symbol"?h+"":h,f),f);const $=new Ve,ve=new We,Je=Math.cos(70*(Math.PI/180)),Le=(b,h)=>(b%h+h)%h;let et=class extends Be{constructor(h,f){super(),n(this,"object"),n(this,"domElement"),n(this,"enabled",!0),n(this,"target",new E),n(this,"minDistance",0),n(this,"maxDistance",1/0),n(this,"minZoom",0),n(this,"maxZoom",1/0),n(this,"minPolarAngle",0),n(this,"maxPolarAngle",Math.PI),n(this,"minAzimuthAngle",-1/0),n(this,"maxAzimuthAngle",1/0),n(this,"enableDamping",!1),n(this,"dampingFactor",.05),n(this,"enableZoom",!0),n(this,"zoomSpeed",1),n(this,"enableRotate",!0),n(this,"rotateSpeed",1),n(this,"enablePan",!0),n(this,"panSpeed",1),n(this,"screenSpacePanning",!0),n(this,"keyPanSpeed",7),n(this,"zoomToCursor",!1),n(this,"autoRotate",!1),n(this,"autoRotateSpeed",2),n(this,"reverseOrbit",!1),n(this,"reverseHorizontalOrbit",!1),n(this,"reverseVerticalOrbit",!1),n(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),n(this,"mouseButtons",{LEFT:z.ROTATE,MIDDLE:z.DOLLY,RIGHT:z.PAN}),n(this,"touches",{ONE:Y.ROTATE,TWO:Y.DOLLY_PAN}),n(this,"target0"),n(this,"position0"),n(this,"zoom0"),n(this,"_domElementKeyEvents",null),n(this,"getPolarAngle"),n(this,"getAzimuthalAngle"),n(this,"setPolarAngle"),n(this,"setAzimuthalAngle"),n(this,"getDistance"),n(this,"listenToKeyEvents"),n(this,"stopListenToKeyEvents"),n(this,"saveState"),n(this,"reset"),n(this,"update"),n(this,"connect"),n(this,"dispose"),this.object=h,this.domElement=f,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=t=>{let o=Le(t,2*Math.PI),a=u.phi;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),m.phi=o-a,e.update()},this.setAzimuthalAngle=t=>{let o=Le(t,2*Math.PI),a=u.theta;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),m.theta=o-a,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",ae),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(K),e.update(),c=i.NONE},this.update=(()=>{const t=new E,o=new E(0,1,0),a=new Ae().setFromUnitVectors(h.up,o),s=a.clone().invert(),d=new E,L=new Ae,C=2*Math.PI;return function(){const je=e.object.position;a.setFromUnitVectors(h.up,o),s.copy(a).invert(),t.copy(je).sub(e.target),t.applyQuaternion(a),u.setFromVector3(t),e.autoRotate&&c===i.NONE&&J(xe()),e.enableDamping?(u.theta+=m.theta*e.dampingFactor,u.phi+=m.phi*e.dampingFactor):(u.theta+=m.theta,u.phi+=m.phi);let x=e.minAzimuthAngle,I=e.maxAzimuthAngle;isFinite(x)&&isFinite(I)&&(x<-Math.PI?x+=C:x>Math.PI&&(x-=C),I<-Math.PI?I+=C:I>Math.PI&&(I-=C),x<=I?u.theta=Math.max(x,Math.min(I,u.theta)):u.theta=u.theta>(x+I)/2?Math.max(x,u.theta):Math.min(I,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(R,e.dampingFactor):e.target.add(R),e.zoomToCursor&&O||e.object.isOrthographicCamera?u.radius=te(u.radius):u.radius=te(u.radius*P),t.setFromSpherical(u),t.applyQuaternion(s),je.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,R.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),R.set(0,0,0));let F=!1;if(e.zoomToCursor&&O){let Z=null;if(e.object instanceof q&&e.object.isPerspectiveCamera){const X=t.length();Z=te(X*P);const G=X-Z;e.object.position.addScaledVector(U,G),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const X=new E(g.x,g.y,0);X.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),e.object.updateProjectionMatrix(),F=!0;const G=new E(g.x,g.y,0);G.unproject(e.object),e.object.position.sub(G).add(X),e.object.updateMatrixWorld(),Z=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Z!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Z).add(e.object.position):($.origin.copy(e.object.position),$.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot($.direction))<Je?h.lookAt(e.target):(ve.setFromNormalAndCoplanarPoint(e.object.up,e.target),$.intersectPlane(ve,e.target))))}else e.object instanceof Q&&e.object.isOrthographicCamera&&(F=P!==1,F&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),e.object.updateProjectionMatrix()));return P=1,O=!1,F||d.distanceToSquared(e.object.position)>V||8*(1-L.dot(e.object.quaternion))>V?(e.dispatchEvent(K),d.copy(e.object.position),L.copy(e.object.quaternion),F=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Oe),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",Pe),e.domElement.addEventListener("wheel",Te)},this.dispose=()=>{var t,o,a,s,d,L;(t=e.domElement)==null||t.removeEventListener("contextmenu",Oe),(o=e.domElement)==null||o.removeEventListener("pointerdown",ye),(a=e.domElement)==null||a.removeEventListener("pointercancel",Pe),(s=e.domElement)==null||s.removeEventListener("wheel",Te),(d=e.domElement)==null||d.ownerDocument.removeEventListener("pointermove",oe),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",ne),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ae)};const e=this,K={type:"change"},N={type:"start"},_={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const V=1e-6,u=new De,m=new De;let P=1;const R=new E,M=new y,w=new y,j=new y,A=new y,D=new y,v=new y,T=new y,p=new y,l=new y,U=new E,g=new y;let O=!1;const r=[],W={};function xe(){return 2*Math.PI/60/60*e.autoRotateSpeed}function B(){return Math.pow(.95,e.zoomSpeed)}function J(t){e.reverseOrbit||e.reverseHorizontalOrbit?m.theta+=t:m.theta-=t}function se(t){e.reverseOrbit||e.reverseVerticalOrbit?m.phi+=t:m.phi-=t}const re=(()=>{const t=new E;return function(a,s){t.setFromMatrixColumn(s,0),t.multiplyScalar(-a),R.add(t)}})(),ce=(()=>{const t=new E;return function(a,s){e.screenSpacePanning===!0?t.setFromMatrixColumn(s,1):(t.setFromMatrixColumn(s,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(a),R.add(t)}})(),k=(()=>{const t=new E;return function(a,s){const d=e.domElement;if(d&&e.object instanceof q&&e.object.isPerspectiveCamera){const L=e.object.position;t.copy(L).sub(e.target);let C=t.length();C*=Math.tan(e.object.fov/2*Math.PI/180),re(2*a*C/d.clientHeight,e.object.matrix),ce(2*s*C/d.clientHeight,e.object.matrix)}else d&&e.object instanceof Q&&e.object.isOrthographicCamera?(re(a*(e.object.right-e.object.left)/e.object.zoom/d.clientWidth,e.object.matrix),ce(s*(e.object.top-e.object.bottom)/e.object.zoom/d.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ee(t){e.object instanceof q&&e.object.isPerspectiveCamera||e.object instanceof Q&&e.object.isOrthographicCamera?P/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function le(t){e.object instanceof q&&e.object.isPerspectiveCamera||e.object instanceof Q&&e.object.isOrthographicCamera?P*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ue(t){if(!e.zoomToCursor||!e.domElement)return;O=!0;const o=e.domElement.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top,d=o.width,L=o.height;g.x=a/d*2-1,g.y=-(s/L)*2+1,U.set(g.x,g.y,1).unproject(e.object).sub(e.object.position).normalize()}function te(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function pe(t){M.set(t.clientX,t.clientY)}function Ie(t){ue(t),T.set(t.clientX,t.clientY)}function he(t){A.set(t.clientX,t.clientY)}function Ne(t){w.set(t.clientX,t.clientY),j.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(J(2*Math.PI*j.x/o.clientHeight),se(2*Math.PI*j.y/o.clientHeight)),M.copy(w),e.update()}function Re(t){p.set(t.clientX,t.clientY),l.subVectors(p,T),l.y>0?ee(B()):l.y<0&&le(B()),T.copy(p),e.update()}function Ce(t){D.set(t.clientX,t.clientY),v.subVectors(D,A).multiplyScalar(e.panSpeed),k(v.x,v.y),A.copy(D),e.update()}function Se(t){ue(t),t.deltaY<0?le(B()):t.deltaY>0&&ee(B()),e.update()}function _e(t){let o=!1;switch(t.code){case e.keys.UP:k(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:k(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:k(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:k(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function de(){if(r.length==1)M.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);M.set(t,o)}}function me(){if(r.length==1)A.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);A.set(t,o)}}function fe(){const t=r[0].pageX-r[1].pageX,o=r[0].pageY-r[1].pageY,a=Math.sqrt(t*t+o*o);T.set(0,a)}function ke(){e.enableZoom&&fe(),e.enablePan&&me()}function ze(){e.enableZoom&&fe(),e.enableRotate&&de()}function be(t){if(r.length==1)w.set(t.pageX,t.pageY);else{const a=ie(t),s=.5*(t.pageX+a.x),d=.5*(t.pageY+a.y);w.set(s,d)}j.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(J(2*Math.PI*j.x/o.clientHeight),se(2*Math.PI*j.y/o.clientHeight)),M.copy(w)}function ge(t){if(r.length==1)D.set(t.pageX,t.pageY);else{const o=ie(t),a=.5*(t.pageX+o.x),s=.5*(t.pageY+o.y);D.set(a,s)}v.subVectors(D,A).multiplyScalar(e.panSpeed),k(v.x,v.y),A.copy(D)}function Ee(t){const o=ie(t),a=t.pageX-o.x,s=t.pageY-o.y,d=Math.sqrt(a*a+s*s);p.set(0,d),l.set(0,Math.pow(p.y/T.y,e.zoomSpeed)),ee(l.y),T.copy(p)}function Ye(t){e.enableZoom&&Ee(t),e.enablePan&&ge(t)}function He(t){e.enableZoom&&Ee(t),e.enableRotate&&be(t)}function ye(t){var o,a;e.enabled!==!1&&(r.length===0&&((o=e.domElement)==null||o.ownerDocument.addEventListener("pointermove",oe),(a=e.domElement)==null||a.ownerDocument.addEventListener("pointerup",ne)),Ke(t),t.pointerType==="touch"?Ze(t):Ue(t))}function oe(t){e.enabled!==!1&&(t.pointerType==="touch"?Xe(t):Fe(t))}function ne(t){var o,a,s;Me(t),r.length===0&&((o=e.domElement)==null||o.releasePointerCapture(t.pointerId),(a=e.domElement)==null||a.ownerDocument.removeEventListener("pointermove",oe),(s=e.domElement)==null||s.ownerDocument.removeEventListener("pointerup",ne)),e.dispatchEvent(_),c=i.NONE}function Pe(t){Me(t)}function Ue(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case z.DOLLY:if(e.enableZoom===!1)return;Ie(t),c=i.DOLLY;break;case z.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;he(t),c=i.PAN}else{if(e.enableRotate===!1)return;pe(t),c=i.ROTATE}break;case z.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;pe(t),c=i.ROTATE}else{if(e.enablePan===!1)return;he(t),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(N)}function Fe(t){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;Ne(t);break;case i.DOLLY:if(e.enableZoom===!1)return;Re(t);break;case i.PAN:if(e.enablePan===!1)return;Ce(t);break}}function Te(t){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(t.preventDefault(),e.dispatchEvent(N),Se(t),e.dispatchEvent(_))}function ae(t){e.enabled===!1||e.enablePan===!1||_e(t)}function Ze(t){switch(we(t),r.length){case 1:switch(e.touches.ONE){case Y.ROTATE:if(e.enableRotate===!1)return;de(),c=i.TOUCH_ROTATE;break;case Y.PAN:if(e.enablePan===!1)return;me(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case Y.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ke(),c=i.TOUCH_DOLLY_PAN;break;case Y.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ze(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(N)}function Xe(t){switch(we(t),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;be(t),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;ge(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;He(t),e.update();break;default:c=i.NONE}}function Oe(t){e.enabled!==!1&&t.preventDefault()}function Ke(t){r.push(t)}function Me(t){delete W[t.pointerId];for(let o=0;o<r.length;o++)if(r[o].pointerId==t.pointerId){r.splice(o,1);return}}function we(t){let o=W[t.pointerId];o===void 0&&(o=new y,W[t.pointerId]=o),o.set(t.pageX,t.pageY)}function ie(t){const o=t.pointerId===r[0].pointerId?r[1]:r[0];return W[o.pointerId]}f!==void 0&&this.connect(f),this.update()}};const at=H.forwardRef(({makeDefault:b,camera:h,regress:f,domElement:e,enableDamping:K=!0,keyEvents:N=!1,onChange:_,onStart:i,onEnd:c,...V},u)=>{const m=S(l=>l.invalidate),P=S(l=>l.camera),R=S(l=>l.gl),M=S(l=>l.events),w=S(l=>l.setEvents),j=S(l=>l.set),A=S(l=>l.get),D=S(l=>l.performance),v=h||P,T=e||M.connected||R.domElement,p=H.useMemo(()=>new et(v),[v]);return Ge(()=>{p.enabled&&p.update()},-1),H.useEffect(()=>(N&&p.connect(N===!0?T:N),p.connect(T),()=>void p.dispose()),[N,T,f,p,m]),H.useEffect(()=>{const l=O=>{m(),f&&D.regress(),_&&_(O)},U=O=>{i&&i(O)},g=O=>{c&&c(O)};return p.addEventListener("change",l),p.addEventListener("start",U),p.addEventListener("end",g),()=>{p.removeEventListener("start",U),p.removeEventListener("end",g),p.removeEventListener("change",l)}},[_,i,c,p,m,w]),H.useEffect(()=>{if(b){const l=A().controls;return j({controls:p}),()=>j({controls:l})}},[b,p]),H.createElement("primitive",qe({ref:u,object:p,enableDamping:K},V))});export{at as O};