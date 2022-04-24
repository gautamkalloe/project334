import{_,o as i,c as d,a as S,r as c,b as n,w as L,d as s,e as w,v as C,t as b,f as g,n as y,p as A,g as R,h as k,i as B,j as I,k as E,F as P}from"./index.d75686af.js";import{F as T,a as V,E as D,c as W,b as v,d as O}from"./object.2bf7faeb.js";import{R as G,r as z,l as K}from"./firebaseAuth.eba7cbe6.js";var Z="data:image/png;base64,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";const H={},N={class:"g-sign-in-button"},j=S('<div class="content-wrapper" data-v-44f12d23><div class="logo-wrapper" data-v-44f12d23><img alt="google logo" src="'+Z+'" data-v-44f12d23></div><span class="text-container" data-v-44f12d23><span class="text" data-v-44f12d23>Log in met Google</span></span></div>',1),q=[j];function Q(e,o){return i(),d("div",N,q)}var J=_(H,[["render",Q],["__scopeId","data-v-44f12d23"]]),U="/project334/assets/output-onlinepngtools.c10dfe69.png";const Y={name:"RegisterBtn",props:{textColor:String,backgroudnColor:String,activeColor:String},methods:{}},$={class:"g-sign-in-button"},X=S('<div class="content-wrapper" data-v-2d93152e><div class="logo-wrapper" data-v-2d93152e><img alt="envelop" src="'+U+'" data-v-2d93152e></div><span class="text-container" data-v-2d93152e><span class="text" data-v-2d93152e>Registreer met email</span></span></div>',1),ee=[X];function se(e,o,l,u,t,r){return i(),d("div",$,ee)}var oe=_(Y,[["render",se],["__scopeId","data-v-2d93152e"]]);const te={name:"Register",props:{firebaseError:String},components:{Form:T,Field:V,ErrorMessage:D},data(){const e=W().shape({email:v().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:v().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!"),passwordConfirmation:v().oneOf([O("password"),null],"Passwords must match").required("Password confirmation is required")});return{successful:!1,loading:!1,message:"",schema:e}},methods:{handleRegister(e){this.message="",this.successful=!1,this.loading=!0,this.$emit("send",e),this.successful=!0,this.loading=!1}}},p=e=>(A("data-v-39fc338e"),e=e(),R(),e),re={class:"form"},ae=p(()=>s("h3",null,"Registreer met email",-1)),ie={class:"form-group"},ne=p(()=>s("label",{for:"email"},"Email",-1)),de={class:"form-group"},le=p(()=>s("label",{for:"password"},"Wachtwoord",-1)),ce={class:"form-group"},me=p(()=>s("label",{for:"passwordConfirmation"}," Herhaal wachtwoord",-1)),ge={id:"submit_btn_cover"},_e=["disabled"],pe={class:"spinner-border spinner-border-sm"},ue=k(" Registreer "),he={key:0,id:"errorText"};function fe(e,o,l,u,t,r){const a=c("Field"),m=c("ErrorMessage"),h=c("Form");return i(),d("form",re,[ae,n(h,{onSubmit:r.handleRegister,"validation-schema":t.schema},{default:L(()=>[s("div",ie,[ne,n(a,{name:"email",type:"email",class:"form-control"}),n(m,{name:"email",class:"error-feedback"})]),s("div",de,[le,n(a,{name:"password",type:"password",class:"form-control"}),n(m,{name:"password",class:"error-feedback"})]),s("div",ce,[me,n(a,{name:"passwordConfirmation",type:"password",class:"form-control"}),n(m,{name:"passwordConfirmation",class:"error-feedback"})]),s("div",ge,[s("button",{disabled:t.loading},[w(s("span",pe,null,512),[[C,t.loading]]),ue],8,_e)])]),_:1},8,["onSubmit","validation-schema"]),l.firebaseError!==""?(i(),d("div",he,b(l.firebaseError),1)):g("",!0),t.message?(i(),d("div",{key:1,class:y(["alert",t.successful?"alert-success":"alert-danger"])},b(t.message),3)):g("",!0)])}var ve=_(te,[["render",fe],["__scopeId","data-v-39fc338e"]]);const we={name:"LoginForm",props:{errorMessage:String},data(){return{userData:{email:"",password:""}}},methods:{submitForm(){this.$emit("send",this.userData)}}},x=e=>(A("data-v-e7c3306e"),e=e(),R(),e),be=x(()=>s("h3",null,"Log in met email",-1)),Ae=x(()=>s("label",{for:"email"},"Email adress",-1)),Re={class:"input_box"},xe=x(()=>s("label",{for:"password"},"Wachtwoord",-1)),Be={class:"input_box"},Ee={key:0,id:"errorText"},Se={id:"submit_btn_cover"};function ke(e,o,l,u,t,r){return i(),d("form",null,[be,Ae,s("div",Re,[w(s("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t.userData.email=a),type:"email",id:"email_adress",name:"emailAdress"},null,512),[[B,t.userData.email]])]),xe,s("div",Be,[w(s("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>t.userData.password=a),type:"password",id:"password",name:"password"},null,512),[[B,t.userData.password]])]),l.errorMessage!==""?(i(),d("div",Ee,b(l.errorMessage),1)):g("",!0),s("div",Se,[s("button",{type:"button",onClick:o[2]||(o[2]=a=>r.submitForm())},"Login")])])}var Fe=_(we,[["render",ke],["__scopeId","data-v-e7c3306e"]]),Me="/project334/assets/logo.5918dd1b.png";const Le={name:"register",components:{GoogleRegisterButton:J,EmailRegisterButton:oe,RegisterForm:ve,LoginForm:Fe},data(){return{showForm:!1,user:null,showLoginForm:!1,errorMessage:"",registerMessage:"",firebaseErrorFromRegister:""}},methods:{showLogForm(e){e.stopPropagation(),this.showLoginForm=!0},showRegisterForm(e){e.stopPropagation(),this.showForm=!0},blurrStyle(){return this.showForm||this.showLoginForm?"filter: blur(24px); opacity: 0.6;":""},closeForm(){this.showForm=!1,this.showLoginForm=!1,this.errorMessage=""},RegisterWithGoogle(){G()},registerWithEmail(e){z(e).then(o=>{this.firebaseErrorFromRegister=o.error})},login(e){K(e).then(o=>{this.errorMessage=o.error})}}},F=e=>(A("data-v-90a90d60"),e=e(),R(),e),Ce=F(()=>s("img",{class:"logo",alt:"hogeschool utrecht logo",src:Me},null,-1)),ye=F(()=>s("p",{class:"main-text"},"Sensor technologie voor de fysiotherapeut",-1)),Ie={style:{color:"white"}},Pe=k(" HEB JE AL EEN ACCOUNT?");function Te(e,o,l,u,t,r){const a=c("GoogleRegisterButton"),m=c("EmailRegisterButton"),h=c("RegisterForm"),M=c("LoginForm");return i(),d(P,null,[s("div",{class:"container",onClick:o[2]||(o[2]=f=>r.closeForm()),style:I(r.blurrStyle())},[Ce,ye,n(a,{onClick:o[0]||(o[0]=f=>r.RegisterWithGoogle())}),n(m,{onClick:r.showRegisterForm},null,8,["onClick"]),s("p",Ie,[Pe,s("button",{onClick:o[1]||(o[1]=(...f)=>r.showLogForm&&r.showLogForm(...f)),class:"loginBTN"}," LOGIN ")])],4),t.showForm&&!t.showLoginForm?(i(),E(h,{key:0,firebaseError:t.firebaseErrorFromRegister,onSend:r.registerWithEmail},null,8,["firebaseError","onSend"])):g("",!0),t.showLoginForm?(i(),E(M,{key:1,errorMessage:t.errorMessage,onSend:r.login},null,8,["errorMessage","onSend"])):g("",!0)],64)}var Oe=_(Le,[["render",Te],["__scopeId","data-v-90a90d60"]]);export{Oe as default};
