(function(){if(window.DREAMSHIFT_AI_LOADED||(window.DREAMSHIFT_AI_LOADED=!0,window.elementorFrontend&&window.elementorFrontend.isEditMode&&window.elementorFrontend.isEditMode()))return;const E="https://dreamshift-bot.dreamshift-kb.workers.dev/chat",S="https://wa.me/94716936096";function g(){if(!document.body||document.getElementById("ds-launch"))return;const x=document.getElementById("ds-chat-mount");if(x){const t=x.closest(".elementor-popup-modal");if(t){const e=t.querySelector(".dialog-message"),s=t.querySelector(".dialog-widget-content");e&&(e.style.background="transparent",e.style.boxShadow="none",e.style.padding="0"),s&&(s.style.background="transparent",s.style.boxShadow="none",s.style.padding="0");const n=t.querySelector(".dialog-close-button");n&&(n.style.display="none")}}const b=document.createElement("style");b.textContent=`
        :root{
          --ds-header-bg:#411c30;
          --ds-header-text:#f6b900;
          --ds-chat-bg:#ffffff;
          --ds-chat-text:#24101a;
          --ds-border:#eaeaea;
          --ds-primary:#411c30;
          --ds-primary-dark:#24101a;
          --ds-radius:14px;
          --ds-shadow:0 18px 40px rgba(0,0,0,.18);
        }
  
        /* Launcher */
        #ds-launch{
          position:fixed;
          right:83px;
          bottom:27px;
          z-index:999998;
          display:flex;
          align-items:center;
          gap:8px;
          padding:14px 18px;
          border:0;
          border-radius:999px;
          background:var(--ds-primary);
          color:#fff;
          cursor:pointer;
          font:600 15px/1.1 "Poppins",system-ui,sans-serif;
          box-shadow:0 12px 34px rgba(0,0,0,.18);
          transition:transform .12s ease, filter .12s ease;
        }
        #ds-launch:hover{
          transform:translateY(-1px);
          filter:brightness(1.05);
        }
        #ds-launch svg{ width:18px; height:18px; }
  
        /* Chat Window */
        #ds-bot{
          position:fixed;
          right:18px;
          bottom:78px;
          z-index:999999;
          width:380px;
          max-width:95vw;
          max-height:70vh;
          overflow:hidden;
          background:var(--ds-chat-bg);
          color:var(--ds-chat-text);
          border:1px solid var(--ds-border);
          border-radius:var(--ds-radius);
          box-shadow:var(--ds-shadow);
          font-family:"Poppins",system-ui,sans-serif;
          font-size:13px;
          display:none;
          opacity:0;
          transform:translateY(12px);
          transition:opacity .22s ease, transform .22s ease;
        }
        #ds-bot.open{
          opacity:1;
          transform:translateY(0);
        }
  
        /* Header */
        #ds-head{
          display:flex;
          align-items:center;
          gap:10px;
          padding:12px 14px;
          border-bottom:1px solid var(--ds-border);
          background:var(--ds-header-bg);
          color:var(--ds-header-text);
        }
        #ds-head img{ height:22px; }
        #ds-title{ font-weight:600; font-size:17px; }
  
        /* Log */
        #ds-log{
          height:360px;
          max-height:50vh;
          overflow:auto;
          padding:14px 12px;
          scrollbar-width:thin;
          scrollbar-color:#ccc transparent;
        }
        #ds-log::-webkit-scrollbar{ width:8px; }
        #ds-log::-webkit-scrollbar-thumb{
          background:#ccc;
          border-radius:8px;
        }
  
        /* Messages */
        .ds-msg{ margin:12px 0; }
        .ds-role{
          font-weight:600;
          margin-bottom:6px;
          color:#1f1f1f;
        }
        .ds-role.ds-assistant{ color:var(--ds-primary); }
  
        .ds-text{
          background:#f9f9fb;
          border:1px solid #eee;
          padding:10px 12px;
          border-radius:12px;
          line-height:1.55;
          white-space:pre-wrap;
        }
        .ds-role.ds-assistant + .ds-text{
          background:#faf6fb;
          border-color:#f0e7f2;
        }
        .ds-role:not(.ds-assistant) + .ds-text{
          background:#fff;
          border-color:#ddd;
        }
  
        /* Markdown basics */
        .ds-text p{ margin:0 0 8px; }
        .ds-text ul,
        .ds-text ol{
          margin:0 0 8px 18px;
          padding-left:18px;
        }
        .ds-text ul{ list-style:disc; }
        .ds-text ol{ list-style:decimal; }
        .ds-text strong{ font-weight:600; }
  
        /* Headings */
        .ds-text h1,
        .ds-text h2,
        .ds-text h3{
          margin:8px 0 6px;
          font-weight:600;
          line-height:1.35;
          color:var(--ds-primary);
          position:relative;
          padding-left:10px;
        }
        .ds-text h1{ font-size:18px; }
        .ds-text h2{ font-size:16px; }
        .ds-text h3{ font-size:14px; }
        .ds-text h1::before,
        .ds-text h2::before,
        .ds-text h3::before{
          content:"";
          position:absolute;
          left:0;
          top:0.35em;
          width:4px;
          height:1.1em;
          border-radius:2px;
          background:var(--ds-header-text);
        }
  
        /* Typing dots */
        .ds-typing .ds-dot{
          width:6px;
          height:6px;
          background:#bdbdbd;
          border-radius:50%;
          display:inline-block;
          margin:0 2px;
          animation:dsblink 1.2s infinite;
        }
        .ds-typing .ds-dot:nth-child(2){ animation-delay:.2s; }
        .ds-typing .ds-dot:nth-child(3){ animation-delay:.4s; }
        @keyframes dsblink{
          0%,80%,100%{ opacity:.2; }
          40%{ opacity:1; }
        }
  
        /* Input */
        #ds-form{
          display:flex;
          gap:8px;
          padding:12px;
          border-top:1px solid var(--ds-border);
          background:#fff;
        }
        .ds-input-wrap{
          position:relative;
          flex:1;
        }
        #ds-input{
          width:100%;
          padding:12px 52px 12px 12px;
          border:1px solid #ddd;
          border-radius:12px;
          font-family:"Poppins",system-ui,sans-serif;
          font-size:15px;
          color:var(--ds-chat-text);
          background:#fff;
          outline:none;
          transition:border-color .12s ease, box-shadow .12s ease;
        }
        #ds-input:focus{
          border-color:#d3c2d0;
          box-shadow:0 0 0 3px rgba(65,28,48,.08);
        }
  
        /* Send Button */
        #ds-send-ico{
          position:absolute;
          right:8px;
          top:50%;
          transform:translateY(-50%);
          width:44px;
          height:40px;
          border-radius:10px;
          border:0;
          background:var(--ds-primary);
          color:#fff;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:background .2s ease, transform .1s ease;
          box-shadow:0 2px 6px rgba(0,0,0,.12);
        }
        #ds-send-ico:hover{ background:var(--ds-primary-dark); }
        #ds-send-ico:active{ transform:translateY(1px); }
        #ds-send-ico svg{
          width:18px;
          height:18px;
          fill:#fff;
        }
  
        @media (max-width:480px){
          #ds-bot{
            bottom:84px;
            width:94vw;
          }
        }
      `,document.head.appendChild(b);const p=document.createElement("button");p.id="ds-launch",p.setAttribute("aria-label","Open DreamShift AI"),p.innerHTML=`
        <span>Chat with us</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
            stroke="white" stroke-width="2" stroke-linejoin="round"></path>
        </svg>`,document.body.appendChild(p);const o=document.createElement("div");o.id="ds-bot",o.setAttribute("role","dialog"),o.setAttribute("aria-label","DreamShift AI"),o.innerHTML=`
        <div id="ds-head">
          <img src="https://dreamshift.net/wp-content/uploads/2025/09/Primary.png" alt="DreamShift Logo" />
          <div id="ds-title">DreamShift AI</div>
        </div>
        <div id="ds-log" aria-live="polite"></div>
        <form id="ds-form">
          <div class="ds-input-wrap">
            <input id="ds-input" placeholder="Ask about pricing, packages, timelines\u2026" autocomplete="off" />
            <button id="ds-send-ico" type="button" aria-label="Send">
              <svg viewBox="0 0 24 24"><path d="M3 11l18-8-8 18-2-7-8-3z"/></svg>
            </button>
          </div>
        </form>`,document.body.appendChild(o);const r=document.getElementById("ds-log"),y=document.getElementById("ds-form"),i=document.getElementById("ds-input"),A=document.getElementById("ds-send-ico");let f=[];function D(){o.classList.contains("open")?(o.classList.remove("open"),setTimeout(()=>{o.style.display="none"},200)):(o.style.display="block",requestAnimationFrame(()=>o.classList.add("open")),i&&i.focus())}p.addEventListener("click",D);const I=t=>(t||"").replace(/[&<>]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":"&gt;");function c(t){let e=I(t);return e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*(.+?)\*/g,"<em>$1</em>"),e}function h(t){const e=(t||"").split(/\r?\n/);let s="",n=!1,d=!1;const l=()=>{n&&(s+="</ul>",n=!1),d&&(s+="</ol>",d=!1)};for(const M of e){const a=M.trimEnd(),m=a.match(/^\s*(#{1,6})\s+(.+)$/);if(m){l();const k=Math.min(m[1].length,3);s+=`<h${k}>${c(m[2])}</h${k}>`;continue}if(/^\s*[-*]\s+/.test(a)){n||(l(),s+="<ul>",n=!0),s+="<li>"+c(a.replace(/^\s*[-*]\s+/,""))+"</li>";continue}if(/^\s*\d+\.\s+/.test(a)){d||(l(),s+="<ol>",d=!0),s+="<li>"+c(a.replace(/^\s*\d+\.\s+/,""))+"</li>";continue}if(a.trim()===""){l();continue}l(),s+="<p>"+c(a)+"</p>"}return l(),s||"<p></p>"}function u(t,e){const s=document.createElement("div");s.className="ds-msg";const n=t==="DreamShift AI"?"ds-assistant":"ds-user";s.innerHTML=`<div class="ds-role ${n}">${t}</div><div class="ds-text">${e}</div>`,r.appendChild(s),r.scrollTop=r.scrollHeight}function L(){const t=document.createElement("div");return t.className="ds-msg ds-typing",t.innerHTML=`<div class="ds-role ds-assistant">DreamShift AI</div>
           <div><span class="ds-dot"></span><span class="ds-dot"></span><span class="ds-dot"></span></div>`,r.appendChild(t),r.scrollTop=r.scrollHeight,t}function v(){return`<div class="ds-muted" style="margin-top:8px">
          Need a human? <a href="${S}" target="_blank" rel="noopener">WhatsApp us</a>
        </div>`}async function w(t){if(!t)return;u("You",h(t));const e=L();try{const n=await(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:f})})).text();let d;try{d=JSON.parse(n)}catch{d={reply:n}}e.remove(),f.push({role:"user",content:t}),d.reply&&f.push({role:"assistant",content:d.reply}),u("DreamShift AI",h(d.reply||"Sorry\u2014no reply.")+v())}catch{e.remove(),u("DreamShift AI",h("Sorry\u2014something went wrong. Please try again later.")+v())}}y.addEventListener("submit",function(t){t.preventDefault();const e=(i.value||"").trim();e&&(i.value="",w(e))}),A.addEventListener("click",function(t){t.preventDefault();const e=(i.value||"").trim();e&&(i.value="",w(e))}),i.addEventListener("keydown",function(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),y.dispatchEvent(new Event("submit",{cancelable:!0})))})}document.readyState==="complete"||document.readyState==="interactive"?g():document.addEventListener("DOMContentLoaded",g)})();
