<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>sugar.bloom — artisanal patisserie</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Great+Vibes&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root{
  --cream:#FDF7F0;
  --cream-2:#FAEFE6;
  --blush:#F6D9DD;
  --blush-soft:#FBECEF;
  --rose:#E3A4AE;
  --rose-deep:#C97B88;
  --cocoa:#5A3D35;
  --cocoa-soft:#8A6B60;
  --butter:#F7E3C3;
  --butter-soft:#FBF0DD;
  --lilac:#E7DDF4;
  --sage:#DFEADA;
  --white:#FFFDFB;
  --shadow:0 20px 60px rgba(90,61,53,.12);
  --radius:28px;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family:'Jost',sans-serif;
  background:var(--cream);
  color:var(--cocoa);
  overflow-x:hidden;
  cursor:default;
}
::selection{background:var(--rose);color:var(--white)}
h1,h2,h3,.serif{font-family:'Fraunces',serif;font-weight:400}
.script{font-family:'Great Vibes',cursive}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}

/* ---------- grain overlay ---------- */
body::after{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:9998;opacity:.05;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
}

/* ---------- cursor ---------- */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;border-radius:50%;transform:translate(-50%,-50%)}
.cursor-dot{width:8px;height:8px;background:var(--rose-deep)}
.cursor-ring{width:36px;height:36px;border:1.5px solid rgba(201,123,136,.55);transition:width .3s,height .3s,background .3s}
.cursor-ring.hovering{width:60px;height:60px;background:rgba(246,217,221,.35)}
@media(hover:none){.cursor-dot,.cursor-ring{display:none}}

/* ---------- nav ---------- */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:22px 5vw;transition:.4s;
}
nav.scrolled{background:rgba(253,247,240,.75);backdrop-filter:blur(18px);padding:14px 5vw;box-shadow:0 6px 30px rgba(90,61,53,.06)}
.logo{font-family:'Fraunces',serif;font-size:1.5rem;letter-spacing:.5px}
.logo .bloom-dot{color:var(--rose-deep)}
.nav-links{display:flex;gap:38px;align-items:center;font-size:.82rem;letter-spacing:.18em;text-transform:uppercase;font-weight:400}
.nav-links a{position:relative;transition:color .3s}
.nav-links a::after{content:"";position:absolute;left:0;bottom:-6px;width:0;height:1px;background:var(--rose-deep);transition:width .35s cubic-bezier(.6,0,.2,1)}
.nav-links a:hover{color:var(--rose-deep)}
.nav-links a:hover::after{width:100%}
.nav-cta{
  background:var(--cocoa);color:var(--cream)!important;padding:11px 26px;border-radius:100px;
  transition:.35s!important;
}
.nav-cta:hover{background:var(--rose-deep);transform:translateY(-2px)}
.nav-cta::after{display:none}
@media(max-width:820px){.nav-links a:not(.nav-cta){display:none}}

/* ---------- hero ---------- */
.hero{
  min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;position:relative;padding:120px 6vw 80px;overflow:hidden;
}
#petals{position:absolute;inset:0;z-index:1}
.hero-inner{position:relative;z-index:2;max-width:900px}
.hero .eyebrow{
  display:inline-flex;align-items:center;gap:12px;font-size:.78rem;letter-spacing:.32em;text-transform:uppercase;
  color:var(--cocoa-soft);margin-bottom:28px;
}
.hero .eyebrow::before,.hero .eyebrow::after{content:"";width:46px;height:1px;background:var(--rose)}
.hero h1{
  font-size:clamp(4rem,11vw,9.5rem);line-height:.95;letter-spacing:-.02em;font-weight:300;
}
.hero h1 .dot{color:var(--rose-deep)}
.hero h1 em{font-style:italic;font-weight:300}
.hero .sub{
  font-family:'Great Vibes',cursive;font-size:clamp(1.8rem,4vw,3rem);color:var(--rose-deep);
  margin:14px 0 26px;transform:rotate(-2deg);display:inline-block;
}
.hero p.tag{max-width:460px;margin:0 auto 42px;color:var(--cocoa-soft);font-weight:300;font-size:1.05rem;line-height:1.7}
.btn-row{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
.btn{
  padding:16px 38px;border-radius:100px;font-size:.82rem;letter-spacing:.2em;text-transform:uppercase;
  font-weight:500;transition:.4s cubic-bezier(.6,0,.2,1);display:inline-block;
}
.btn-fill{background:var(--rose-deep);color:var(--white);box-shadow:0 14px 34px rgba(201,123,136,.4)}
.btn-fill:hover{transform:translateY(-4px);box-shadow:0 22px 44px rgba(201,123,136,.5)}
.btn-ghost{border:1.5px solid var(--rose);color:var(--cocoa)}
.btn-ghost:hover{background:var(--blush-soft);transform:translateY(-4px)}
.hero .scroll-hint{position:absolute;bottom:34px;left:50%;transform:translateX(-50%);z-index:2;
  display:flex;flex-direction:column;align-items:center;gap:10px;font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--cocoa-soft)}
.scroll-hint .line{width:1px;height:44px;background:linear-gradient(var(--rose-deep),transparent);animation:drip 2s infinite}
@keyframes drip{0%{transform:scaleY(0);transform-origin:top}45%{transform:scaleY(1);transform-origin:top}55%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
.hero-blob{position:absolute;border-radius:50%;filter:blur(2px);z-index:0}
.b1{width:420px;height:420px;background:radial-gradient(circle at 30% 30%,var(--blush),transparent 70%);top:-120px;left:-120px;opacity:.8}
.b2{width:520px;height:520px;background:radial-gradient(circle at 60% 40%,var(--butter),transparent 70%);bottom:-180px;right:-140px;opacity:.7}
.b3{width:300px;height:300px;background:radial-gradient(circle at 50% 50%,var(--lilac),transparent 70%);top:30%;right:6%;opacity:.5}

/* ---------- marquee ---------- */
.marquee{background:var(--cocoa);color:var(--cream);overflow:hidden;padding:18px 0;transform:rotate(-1.2deg);margin:20px -2vw;position:relative;z-index:3}
.marquee-track{display:flex;gap:0;width:max-content;animation:scroll 26s linear infinite}
.marquee-track span{font-family:'Fraunces',serif;font-size:1.15rem;font-style:italic;white-space:nowrap;padding:0 26px;display:flex;align-items:center;gap:26px}
.marquee-track span::after{content:"✿";font-style:normal;font-size:.85rem;color:var(--rose)}
@keyframes scroll{to{transform:translateX(-50%)}}

/* ---------- sections common ---------- */
section{padding:110px 6vw;position:relative}
.section-head{text-align:center;max-width:640px;margin:0 auto 70px}
.section-head .kicker{font-family:'Great Vibes',cursive;font-size:2.1rem;color:var(--rose-deep);display:block;margin-bottom:6px}
.section-head h2{font-size:clamp(2.2rem,4.6vw,3.6rem);font-weight:300;line-height:1.15}
.section-head h2 em{font-style:italic}
.section-head p{margin-top:18px;color:var(--cocoa-soft);font-weight:300;line-height:1.7}
.reveal{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.2,.7,.3,1),transform .9s cubic-bezier(.2,.7,.3,1)}
.reveal.visible{opacity:1;transform:none}

/* ---------- about ---------- */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;max-width:1150px;margin:0 auto}
@media(max-width:900px){.about-grid{grid-template-columns:1fr}}
.about-art{
  position:relative;aspect-ratio:4/5;border-radius:var(--radius);overflow:hidden;
  background:linear-gradient(160deg,var(--blush-soft),var(--butter-soft));box-shadow:var(--shadow);
}
.about-art::before{content:"";position:absolute;inset:0;
  background:radial-gradient(circle at 25% 25%,rgba(255,255,255,.9),transparent 55%),radial-gradient(circle at 80% 80%,rgba(227,164,174,.35),transparent 60%)}
/* css cake */
.cake{position:absolute;bottom:16%;left:50%;transform:translateX(-50%);width:62%}
.cake .plate{height:16px;border-radius:100%;background:linear-gradient(#fff,#e9dcd2);box-shadow:0 14px 24px rgba(90,61,53,.18);width:110%;margin-left:-5%}
.cake .tier{height:56px;border-radius:10px;margin:0 auto;position:relative}
.cake .t1{width:100%;background:linear-gradient(#FBE9EC,#F2C9D0)}
.cake .t2{width:76%;background:linear-gradient(#FDF4E3,#F3DCB8);margin-top:-8px}
.cake .t3{width:52%;background:linear-gradient(#FBE9EC,#F0C2CB);margin-top:-8px}
.cake .drip{position:absolute;top:-12px;left:0;right:0;height:22px;background:radial-gradient(circle at 10px -4px,transparent 14px,#FFFDFB 15px);background-size:22px 22px;background-repeat:repeat-x}
.cake .berries{position:absolute;top:-22px;left:50%;transform:translateX(-50%);display:flex;gap:8px}
.cake .berry{width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#E88B97,#B45663)}
.cake .berry:nth-child(2){background:radial-gradient(circle at 35% 30%,#fff,#f0dcc4)}
.about-badge{
  position:absolute;top:6%;right:-14px;background:var(--white);border-radius:20px;padding:18px 22px;box-shadow:var(--shadow);
  text-align:center;transform:rotate(6deg);
}
.about-badge .num{font-family:'Fraunces',serif;font-size:2rem;color:var(--rose-deep)}
.about-badge .lbl{font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--cocoa-soft)}
.about-copy h2{font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.2;margin-bottom:24px}
.about-copy h2 em{font-style:italic;color:var(--rose-deep)}
.about-copy p{color:var(--cocoa-soft);font-weight:300;line-height:1.85;margin-bottom:20px}
.stats{display:flex;gap:44px;margin-top:36px}
.stat .n{font-family:'Fraunces',serif;font-size:2.2rem}
.stat .l{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--cocoa-soft);margin-top:4px}

/* ---------- menu ---------- */
.menu{background:var(--cream-2);border-radius:60px 60px 0 0}
.menu-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(255px,1fr));gap:30px;max-width:1200px;margin:0 auto}
.card{
  background:var(--white);border-radius:var(--radius);padding:34px 28px 30px;text-align:center;
  box-shadow:0 10px 40px rgba(90,61,53,.06);transition:.5s cubic-bezier(.3,.9,.3,1);position:relative;overflow:hidden;
}
.card::before{content:"";position:absolute;inset:0;background:linear-gradient(160deg,var(--blush-soft),transparent 60%);opacity:0;transition:.5s}
.card:hover{transform:translateY(-12px) rotate(-1deg);box-shadow:var(--shadow)}
.card:hover::before{opacity:1}
.card .art{height:150px;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:22px}
.card h3{font-size:1.35rem;margin-bottom:8px;position:relative}
.card .desc{font-size:.92rem;color:var(--cocoa-soft);font-weight:300;line-height:1.6;position:relative;margin-bottom:18px;min-height:44px}
.card .price{font-family:'Fraunces',serif;font-style:italic;font-size:1.25rem;color:var(--rose-deep);position:relative}
.card .tag-pill{
  position:absolute;top:18px;left:18px;background:var(--butter);font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;
  padding:6px 13px;border-radius:100px;z-index:2;
}
/* css sweets */
.cupcake{width:110px;height:120px;position:relative;transition:transform .5s}
.card:hover .cupcake{transform:scale(1.06) rotate(2deg)}
.cupcake .wrapper{position:absolute;bottom:0;left:15px;right:15px;height:52px;background:linear-gradient(#E8A29B,#D18680);clip-path:polygon(0 0,100% 0,84% 100%,16% 100%)}
.cupcake .cake-top{position:absolute;bottom:42px;left:8px;right:8px;height:46px;background:linear-gradient(#FBE9EC,#F0C6CD);border-radius:50% 50% 46% 46%/80% 80% 40% 40%}
.cupcake .frost{position:absolute;bottom:70px;left:20px;right:20px;height:38px;background:linear-gradient(#FFFDFB,#F6E7EA);border-radius:50% 50% 45% 45%/90% 90% 30% 30%}
.cupcake .cherry{position:absolute;bottom:102px;left:50%;transform:translateX(-50%);width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#E88B97,#B45663)}
.macaron-stack{display:flex;flex-direction:column;align-items:center;gap:7px}
.mac{width:96px;height:30px;border-radius:100px;position:relative;box-shadow:inset 0 -6px 10px rgba(90,61,53,.08)}
.mac::after{content:"";position:absolute;left:4px;right:4px;top:100%;height:9px;background:var(--cream);border-radius:100px}
.mac.m1{background:linear-gradient(#F6D3DA,#E9AEB8)}
.mac.m2{background:linear-gradient(#F9EBD2,#F0D5A8)}
.mac.m3{background:linear-gradient(#E9E1F5,#CDBFE6)}
.tart{width:120px;height:74px;position:relative}
.tart .crust{position:absolute;bottom:0;width:100%;height:46px;background:linear-gradient(#E3B98B,#C99A66);border-radius:14px 14px 22px 22px}
.tart .fill{position:absolute;bottom:38px;left:8px;right:8px;height:26px;background:linear-gradient(#D9667C,#C14E66);border-radius:12px}
.tart .cream-dots{position:absolute;bottom:60px;left:0;right:0;display:flex;justify-content:center;gap:7px}
.tart .cream-dots i{width:13px;height:13px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#F1E3D4);box-shadow:0 2px 4px rgba(0,0,0,.08)}
.croissant{width:130px;height:84px;position:relative}
.croissant .body{position:absolute;bottom:14px;left:14px;width:102px;height:52px;background:linear-gradient(#F2CD96,#E0AB6C);border-radius:50% 50% 46% 46%/100% 100% 40% 40%;box-shadow:inset 0 -8px 12px rgba(160,110,60,.25)}
.croissant .roll1{position:absolute;bottom:8px;left:0;width:36px;height:48px;background:linear-gradient(#F5D7A6,#E2B176);border-radius:50%}
.croissant .roll2{position:absolute;bottom:8px;right:0;width:36px;height:48px;background:linear-gradient(#F5D7A6,#E2B176);border-radius:50%}
.croissant .shine{position:absolute;bottom:44px;left:38px;width:52px;height:12px;background:rgba(255,255,255,.4);border-radius:100px;filter:blur(2px)}
.pudding{width:104px;height:110px;position:relative}
.pudding .jar{position:absolute;bottom:0;left:12px;right:12px;height:84px;background:linear-gradient(rgba(255,255,255,.55),rgba(255,255,255,.35));border:2px solid rgba(255,255,255,.8);border-radius:12px 12px 22px 22px;overflow:hidden}
.pudding .pud{position:absolute;bottom:2px;left:2px;right:2px;height:58px;background:linear-gradient(#F6E3BD,#EDCD9B)}
.pudding .caramel{position:absolute;bottom:56px;left:2px;right:2px;height:14px;background:linear-gradient(#D89B54,#C2803C);border-radius:50% 50% 40% 40%}
.pudding .fruit{position:absolute;bottom:64px;left:50%;transform:translateX(-50%);width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#E88B97,#B45663);z-index:2}
.pudding .leaf{position:absolute;bottom:80px;left:56%;width:14px;height:8px;background:#9DBB90;border-radius:50% 50% 50% 50%/100% 100% 0 0;transform:rotate(20deg);z-index:3}
.cookie{width:110px;height:110px;position:relative}
.cookie .body{position:absolute;bottom:8px;left:5px;width:100px;height:88px;background:linear-gradient(#EBC492,#D9A96F);border-radius:48% 52% 50% 50%/55% 55% 45% 45%;box-shadow:inset 0 -8px 14px rgba(150,100,50,.22)}
.cookie .chip{position:absolute;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#7A523B,#5A3A28)}

/* ---------- gallery ---------- */
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:180px;gap:22px;max-width:1200px;margin:0 auto}
@media(max-width:900px){.gallery-grid{grid-template-columns:repeat(2,1fr)}}
.gtile{border-radius:24px;position:relative;overflow:hidden;cursor:pointer}
.gtile.tall{grid-row:span 2}
.gtile{background:linear-gradient(160deg,var(--blush-soft),var(--butter-soft))}
.gtile .g-art{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.gtile:hover .g-art{transform:scale(1.12) rotate(2deg)}
.gtile .g-label{
  position:absolute;bottom:0;left:0;right:0;padding:20px;font-family:'Fraunces',serif;font-style:italic;font-size:1.05rem;
  background:linear-gradient(transparent,rgba(90,61,53,.55));color:var(--white);opacity:0;transform:translateY(12px);transition:.45s;
}
.gtile:hover .g-label{opacity:1;transform:none}
.g-heart{font-size:3.4rem;filter:drop-shadow(0 10px 20px rgba(90,61,53,.15))}

/* ---------- testimonials ---------- */
.testi{background:var(--cream-2)}
.testi-wrap{max-width:800px;margin:0 auto;text-align:center;position:relative}
.testi .quote-mark{font-family:'Fraunces',serif;font-size:6rem;line-height:.5;color:var(--rose);opacity:.5}
.testi-slide{display:none;animation:fadeUp .8s}
.testi-slide.active{display:block}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.testi-slide p{font-family:'Fraunces',serif;font-style:italic;font-size:clamp(1.3rem,2.6vw,1.9rem);line-height:1.55;margin:26px 0}
.testi-slide .who{font-size:.78rem;letter-spacing:.26em;text-transform:uppercase;color:var(--cocoa-soft)}
.testi-dots{display:flex;gap:10px;justify-content:center;margin-top:40px}
.testi-dots button{width:10px;height:10px;border-radius:50%;border:none;background:var(--rose);opacity:.35;cursor:pointer;transition:.3s}
.testi-dots button.active{opacity:1;transform:scale(1.3)}

/* ---------- order cta ---------- */
.order-cta{
  background:linear-gradient(150deg,var(--rose) 0%,var(--rose-deep) 100%);
  border-radius:60px;margin:0 3vw 40px;padding:100px 6vw;text-align:center;color:var(--white);position:relative;overflow:hidden;
}
.order-cta::before{content:"";position:absolute;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,.12);top:-160px;right:-100px}
.order-cta::after{content:"";position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.1);bottom:-120px;left:-60px}
.order-cta h2{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:300;margin-bottom:16px;position:relative;z-index:2}
.order-cta h2 em{font-style:italic}
.order-cta p{opacity:.9;font-weight:300;max-width:440px;margin:0 auto 40px;line-height:1.7;position:relative;z-index:2}
.order-cta .btn-fill{background:var(--white);color:var(--rose-deep);box-shadow:0 16px 40px rgba(90,30,40,.3);position:relative;z-index:2}
.order-cta .btn-fill:hover{transform:translateY(-4px) scale(1.03)}
.order-cta .handle{font-family:'Great Vibes',cursive;font-size:2.2rem;display:block;margin-top:34px;position:relative;z-index;opacity:.95}

/* ---------- footer ---------- */
footer{padding:70px 6vw 40px;text-align:center}
footer .logo{font-size:2rem}
footer .foot-links{display:flex;gap:30px;justify-content:center;margin:26px 0;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--cocoa-soft)}
footer .foot-links a:hover{color:var(--rose-deep)}
footer .copy{font-size:.78rem;color:var(--cocoa-soft);font-weight:300}
footer .hearts{color:var(--rose-deep)}
</style>
</head>
<body>

<div class="cursor-dot"></div>
<div class="cursor-ring"></div>

<nav id="nav">
  <a href="#" class="logo">sugar<span class="bloom-dot">.</span>bloom</a>
  <div class="nav-links">
    <a href="#about">our story</a>
    <a href="#menu">the menu</a>
    <a href="#gallery">gallery</a>
    <a href="#order" class="nav-cta">order now</a>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="hero-blob b1"></div><div class="hero-blob b2"></div><div class="hero-blob b3"></div>
  <canvas id="petals"></canvas>
  <div class="hero-inner">
    <span class="eyebrow">artisanal patisserie · est. with love</span>
    <h1>sugar<span class="dot">.</span>bloom</h1>
    <span class="sub">little bites of happiness</span>
    <p class="tag">Handcrafted cakes, macarons &amp; tiny treasures — baked at dawn, frosted with care, and delivered while the petals are still fresh.</p>
    <div class="btn-row">
      <a href="#menu" class="btn btn-fill">explore the menu</a>
      <a href="#order" class="btn btn-ghost">custom orders</a>
    </div>
  </div>
  <div class="scroll-hint"><span>scroll</span><div class="line"></div></div>
</header>

<!-- MARQUEE -->
<div class="marquee">
  <div class="marquee-track" id="marquee"></div>
</div>

<!-- ABOUT -->
<section id="about">
  <div class="section-head reveal">
    <span class="kicker">our little bakehouse</span>
    <h2>where sugar <em>meets</em> bloom</h2>
  </div>
  <div class="about-grid">
    <div class="about-art reveal">
      <div class="cake">
        <div class="plate"></div>
        <div class="tier t1"><div class="drip"></div></div>
        <div class="tier t2"><div class="drip"></div></div>
        <div class="tier t3"><div class="drip"></div><div class="berries"><span class="berry"></span><span class="berry"></span><span class="berry"></span></div></div>
      </div>
      <div class="about-badge"><div class="num">4.9★</div><div class="lbl">loved by locals</div></div>
    </div>
    <div class="about-copy reveal">
      <h2>baked in small batches, <em>finished by hand</em></h2>
      <p>Every morning our ovens light before sunrise. Butter is creamed, eggs are whisked, and rose petals are pressed — all by hands that believe dessert should feel like a warm hug.</p>
      <p>From cloud-soft sponges to jewel-toned macarons, everything at sugar.bloom is made from real ingredients, never shortcuts. Because the prettiest things in life are still the simplest.</p>
      <div class="stats">
        <div class="stat"><div class="n" data-count="120">0</div><div class="l">recipes</div></div>
        <div class="stat"><div class="n" data-count="8">0</div><div class="l">years baking</div></div>
        <div class="stat"><div class="n" data-count="15">0</div><div class="l">daily bakes</div></div>
      </div>
    </div>
  </div>
</section>

<!-- MENU -->
<section id="menu" class="menu">
  <div class="section-head reveal">
    <span class="kicker">signature bakes</span>
    <h2>made to be <em>remembered</em></h2>
    <p>Our most-loved pieces — each one pretty enough to post, and good enough to finish in one sitting.</p>
  </div>
  <div class="menu-grid">
    <div class="card reveal">
      <span class="tag-pill">bestseller</span>
      <div class="art"><div class="cupcake"><div class="wrapper"></div><div class="cake-top"></div><div class="frost"></div><div class="cherry"></div></div></div>
      <h3>Blush Cupcake</h3>
      <p class="desc">vanilla bean sponge, raspberry buttercream swirl &amp; a single sugared cherry on top.</p>
      <div class="price">$6.50</div>
    </div>
    <div class="card reveal">
      <div class="art"><div class="macaron-stack"><div class="mac m1"></div><div class="mac m2"></div><div class="mac m3"></div></div></div>
      <h3>Pastel Macarons</h3>
      <p class="desc">rose, salted honey &amp; lavender shells — crisp outside, chewy cloud inside. box of six.</p>
      <div class="price">$18</div>
    </div>
    <div class="card reveal">
      <span class="tag-pill">new</span>
      <div class="art"><div class="tart"><div class="crust"></div><div class="fill"></div><div class="cream-dots"><i></i><i></i><i></i><i></i></div></div></div>
      <h3>Berry Cream Tart</h3>
      <p class="desc">butter sablé crust, vanilla diplomat cream crowned with glazed summer berries.</p>
      <div class="price">$9</div>
    </div>
    <div class="card reveal">
      <div class="art"><div class="croissant"><div class="roll1"></div><div class="body"></div><div class="roll2"></div><div class="shine"></div></div></div>
      <h3>Butter Croissant</h3>
      <p class="desc">72-hour laminated dough, honeyed crust, shattering layers. best eaten warm.</p>
      <div class="price">$5</div>
    </div>
    <div class="card reveal">
      <div class="art"><div class="pudding"><div class="jar"><div class="pud"></div><div class="caramel"></div></div><div class="fruit"></div><div class="leaf"></div></div></div>
      <h3>Caramel Pudding</h3>
      <p class="desc">silky vanilla custard, burnt caramel top, fresh berry — served chilled in glass.</p>
      <div class="price">$7.50</div>
    </div>
    <div class="card reveal">
      <span class="tag-pill">weekend only</span>
      <div class="art"><div class="cookie"><div class="body"></div><span class="chip" style="top:34px;left:26px"></span><span class="chip" style="top:48px;left:58px"></span><span class="chip" style="top:26px;left:64px"></span><span class="chip" style="top:60px;left:34px"></span><span class="chip" style="top:44px;left:80px;width:9px;height:9px"></span></div></div>
      <h3>Chunk Cookie</h3>
      <p class="desc">brown-butter dough, dark chocolate pools, flaky salt. warm from the oven at noon.</p>
      <div class="price">$4.50</div>
    </div>
  </div>
</section>

<!-- GALLERY -->
<section id="gallery">
  <div class="section-head reveal">
    <span class="kicker">sweet moments</span>
    <h2>from our <em>feed</em> to your heart</h2>
  </div>
  <div class="gallery-grid">
    <div class="gtile tall reveal"><div class="g-art"><span class="g-heart">🎂</span></div><div class="g-label">strawberry cloud cake</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">🧁</span></div><div class="g-label">blush cupcakes</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">🍓</span></div><div class="g-label">market berries</div></div>
    <div class="gtile tall reveal"><div class="g-art"><span class="g-heart">🫖</span></div><div class="g-label">afternoon tea set</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">🍮</span></div><div class="g-label">caramel pudding</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">🌸</span></div><div class="g-label">pressed petals</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">🥐</span></div><div class="g-label">sunday croissants</div></div>
    <div class="gtile reveal"><div class="g-art"><span class="g-heart">💌</span></div><div class="g-label">gift boxes</div></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testi">
  <div class="section-head reveal">
    <span class="kicker">kind words</span>
    <h2>sweet things people <em>say</em></h2>
  </div>
  <div class="testi-wrap reveal">
    <div class="quote-mark">“</div>
    <div class="testi-slide active">
      <p>The strawberry cloud cake made my daughter cry happy tears. It tasted like a birthday should feel.</p>
      <div class="who">— amara k. · birthday order</div>
    </div>
    <div class="testi-slide">
      <p>I've had macarons in paris. these are softer, prettier, and somehow kinder. I don't know how they do it.</p>
      <div class="who">— jonas p. · weekend regular</div>
    </div>
    <div class="testi-slide">
      <p>Ordered a dessert table for our wedding — guests are still talking about it a year later.</p>
      <div class="who">— priya &amp; dev · wedding clients</div>
    </div>
    <div class="testi-dots">
      <button class="active" onclick="showSlide(0)"></button>
      <button onclick="showSlide(1)"></button>
      <button onclick="showSlide(2)"></button>
    </div>
  </div>
</section>

<!-- ORDER CTA -->
<section class="order-cta" id="order" style="padding-left:6vw;padding-right:6vw">
  <h2>ready to <em>crave</em> something?</h2>
  <p>DM us for custom cakes, event dessert tables, or just to reserve your sunday croissant. we answer with a smile (and usually a photo of today's bake).</p>
  <a class="btn btn-fill" href="https://instagram.com/sugar.bloom" target="_blank" rel="noopener">message @sugar.bloom</a>
  <span class="handle">with love, always ✿</span>
</section>

<footer>
  <a href="#" class="logo">sugar<span class="bloom-dot">.</span>bloom</a>
  <div class="foot-links">
    <a href="#about">story</a><a href="#menu">menu</a><a href="#gallery">gallery</a><a href="#order">orders</a>
  </div>
  <p class="copy">© 2026 sugar.bloom · baked fresh daily <span class="hearts">✿</span> with butter, patience &amp; love</p>
</footer>

<script>
/* ---------- custom cursor ---------- */
const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx-4}px,${my-4}px)`});
(function loop(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.transform=`translate(${rx-18}px,${ry-18}px)`;requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.card,.gtile').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hovering'));
});

/* ---------- nav scroll ---------- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));

/* ---------- falling petals ---------- */
const cv=document.getElementById('petals'),ctx=cv.getContext('2d');
let W,H,petals=[];
const COLORS=['rgba(246,217,221,.9)','rgba(227,164,174,.75)','rgba(247,227,195,.85)','rgba(255,253,251,.9)','rgba(231,221,244,.8)'];
function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}
size();addEventListener('resize',size);
class P{
  constructor(){this.reset(true)}
  reset(init){
    this.x=Math.random()*W;this.y=init?Math.random()*H:-20;
    this.s=5+Math.random()*9;this.vy=.4+Math.random()*.9;
    this.sw=Math.random()*2*Math.PI;this.swS=.008+Math.random()*.015;
    this.rot=Math.random()*Math.PI*2;this.vr=(Math.random()-.5)*.02;
    this.c=COLORS[Math.random()*COLORS.length|0];
  }
  step(){
    this.sw+=this.swS;this.x+=Math.sin(this.sw)*.8;this.y+=this.vy;this.rot+=this.vr;
    if(this.y>H+30)this.reset(false);
    ctx.save();ctx.translate(this.x,this.y);ctx.rotate(this.rot);
    ctx.fillStyle=this.c;ctx.beginPath();
    ctx.moveTo(0,-this.s);
    ctx.bezierCurveTo(this.s*.9,-this.s*.4,this.s*.7,this.s*.8,0,this.s);
    ctx.bezierCurveTo(-this.s*.7,this.s*.8,-this.s*.9,-this.s*.4,0,-this.s);
    ctx.fill();ctx.restore();
  }
}
for(let i=0;i<42;i++)petals.push(new P());
(function draw(){ctx.clearRect(0,0,W,H);petals.forEach(p=>p.step());requestAnimationFrame(draw)})();

/* ---------- marquee content ---------- */
const words=['buttercream dreams','fresh from the oven','custom cakes','macaron mondays','pressed petals','sunday croissants','gift boxes','sweet little things'];
document.getElementById('marquee').innerHTML=(words.map(w=>`<span>${w}</span>`).join('')).repeat(2);

/* ---------- scroll reveal ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}
}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- counters ---------- */
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;cio.unobserve(e.target);
  const end=+e.target.dataset.count,t0=performance.now();
  (function tick(t){const p=Math.min((t-t0)/1400,1);
    e.target.textContent=Math.round(end*(1-Math.pow(1-p,3)))+(p===1&&end>50?'+':'');
    if(p<1)requestAnimationFrame(tick)})(t0);
}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

/* ---------- testimonials ---------- */
let cur=0;const slides=document.querySelectorAll('.testi-slide'),dots=document.querySelectorAll('.testi-dots button');
function showSlide(i){cur=i;slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('active',k===i))}
setInterval(()=>showSlide((cur+1)%slides.length),5200);
</script>
</body>
</html>
