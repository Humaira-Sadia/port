import{r as f,R as M}from"./react-g8F3bhkl.js";function x(c,t,e,i){return new(e||(e=Promise))(function(n,a){function s(l){try{o(i.next(l))}catch(h){a(h)}}function r(l){try{o(i.throw(l))}catch(h){a(h)}}function o(l){var h;l.done?n(l.value):(h=l.value,h instanceof e?h:new e(function(g){g(h)})).then(s,r)}o((i=i.apply(c,t||[])).next())})}const v=(c,t,e,i)=>{c.style.transition=`${t} ${e}ms ${i}`},p=(c,t,e)=>Math.min(Math.max(c,t),e);class L{constructor(t,e){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:r,height:o}=s,l=Math.sqrt(Math.pow(r,2)+Math.pow(o,2));return{width:l,height:l}},this.setSize=s=>{const r=this.calculateGlareSize(s);this.glareEl.style.width=`${r.width}px`,this.glareEl.style.height=`${r.height}px`},this.update=(s,r,o,l)=>{this.updateAngle(s,r.glareReverse),this.updateOpacity(s,r,o,l)},this.updateAngle=(s,r)=>{const{xPercentage:o,yPercentage:l}=s,h=180/Math.PI,g=o?Math.atan2(l,-o)*h:0;this.glareAngle=g-(r?180:0)},this.updateOpacity=(s,r,o,l)=>{const{xPercentage:h,yPercentage:g}=s,{glarePosition:m,glareReverse:A,glareMaxOpacity:y}=r,w=o?-1:1,E=l?-1:1,u=A?-1:1;let d=0;switch(m){case"top":d=-h*w*u;break;case"right":d=g*E*u;break;case"bottom":case void 0:d=h*w*u;break;case"left":d=-g*E*u;break;case"all":d=Math.hypot(h,g)}const P=p(d,0,100);this.glareOpacity=P*y/100},this.render=s=>{const{glareColor:r}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${r} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:e,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(t),a={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,a)}}class Y{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,e)=>{this.updateTilt(t,e),this.updateTiltManualInput(t,e),this.updateTiltReverse(e),this.updateTiltLimits(e)},this.updateTilt=(t,e)=>{const{xPercentage:i,yPercentage:n}=t,{tiltMaxAngleX:a,tiltMaxAngleY:s}=e;this.tiltAngleX=i*a/100,this.tiltAngleY=n*s/100*-1},this.updateTiltManualInput=(t,e)=>{const{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:a,tiltMaxAngleY:s}=e;(i!==null||n!==null)&&(this.tiltAngleX=i!==null?i:0,this.tiltAngleY=n!==null?n:0,t.xPercentage=100*this.tiltAngleX/a,t.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=t=>{const e=t.tiltReverse?-1:1;this.tiltAngleX=e*this.tiltAngleX,this.tiltAngleY=e*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:e}=t;this.tiltAngleX=p(this.tiltAngleX,-90,90),this.tiltAngleY=p(this.tiltAngleY,-90,90),e&&(this.tiltAngleX=e==="x"?this.tiltAngleX:0,this.tiltAngleY=e==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:e,tiltMaxAngleY:i}=t;this.tiltAngleXPercentage=this.tiltAngleX/e*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const X=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class O extends f.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>x(this,void 0,void 0,function*(){if(!window.DeviceOrientationEvent)return;const t=DeviceOrientationEvent.requestPermission;typeof t=="function"?(yield t())==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)}),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:e}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),e&&e(t.type)},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:e}=this.props;if(this.setTransitions(),e&&e(t.type),this.props.reset){const i=new CustomEvent("autoreset");this.onMove(i)}},this.processInput=t=>{const{scale:e}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=e;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=e;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=e;break;case"autoreset":const{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:a,tiltMaxAngleY:s}=this.props,r=n/s*100;this.wrapperEl.clientPosition.xPercentage=p(i/a*100,-100,100),this.wrapperEl.clientPosition.yPercentage=p(r,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:e,tiltMaxAngleY:i}=this.props,n=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/e*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=p(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=p(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:e,flipVertically:i,flipHorizontally:n}=this.props;t!=="autoreset"&&t!=="deviceorientation"&&t!=="propChange"&&this.updateClientInput(),e&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let e,i;if(t){const{x:n,y:a}=this.wrapperEl.clientPosition;e=a/window.innerHeight*200-100,i=n/window.innerWidth*200-100}else{const{size:{width:n,height:a,left:s,top:r},clientPosition:{x:o,y:l}}=this.wrapperEl;e=(l-r)/a*200-100,i=(o-s)/n*200-100}this.wrapperEl.clientPosition.xPercentage=p(e,-100,100),this.wrapperEl.clientPosition.yPercentage=p(i,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:e}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),e&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Y,this.initGlare(),this.addEventListeners(),typeof CustomEvent>"u")return;const t=new CustomEvent("autoreset");this.mainLoop(t);const e=new CustomEvent("initial");this.emitOnMove(e)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:e}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),e&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:e}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),e&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:e}=this.props;t&&(this.glare=new L(this.wrapperEl.size,e),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:e}=this.props;if(!e)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),e({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:t.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:e}=this.props;v(this.wrapperEl.node,"all",t,e),this.glare&&v(this.glare.glareEl,"opacity",t,e)}render(){const{children:t,className:e,style:i}=this.props;return M.createElement("div",{ref:n=>this.wrapperEl.node=n,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:e,style:i},t)}}O.defaultProps=X;export{O as o};
