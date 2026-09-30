/* ================= taxonomía ================= */
var GROUPS = [
 {id:"sit", t:"Situación", hint:"Lo que define a la persona hoy.", keys:[
   ["emb","Embarazo"],["lact","Lactancia"],["menor","Menor de edad"],["fumador","Fumador"],
   ["cirugia","Cirugía o extracción en menos de 2 semanas"],["analitica","Analítica próxima"],
   ["conduccion","Conduce o maneja maquinaria"],["fiv","Tratamiento de fertilidad"],
   ["sol","Exposición solar intensa"],["religioso","Vegano, halal o kosher"]]},
 {id:"med", t:"Medicación", hint:"Lo más importante de todo. Si no sabe el nombre, que te enseñe la caja.", keys:[
   ["medicacion_general","Toma alguna medicación crónica"],
   ["anticoag","Anticoagulantes o antiagregantes (Sintrom, aspirina, clopidogrel, apixabán)"],
   ["antidiab","Antidiabéticos o insulina"],
   ["cardio","Tensión o corazón (enalapril, losartán, amlodipino, betabloqueantes, diuréticos)"],
   ["digoxina","Digoxina o antiarrítmicos"],
   ["estatinas","Estatinas o hipolipemiantes"],
   ["tiroides","Levotiroxina o antitiroideos"],
   ["antidep","Antidepresivos, tramadol, triptanes, IMAO"],
   ["litio","Litio"],
   ["sedantes","Ansiolíticos o pastillas para dormir"],
   ["antiepil","Antiepilépticos"],
   ["inmuno","Inmunosupresores, corticoides o trasplante"],
   ["quimio","Quimioterapia o tratamiento oncológico"],
   ["hormonal","Anticonceptivos, terapia hormonal o tamoxifeno"],
   ["antiviral","Antirretrovirales o antivirales"],
   ["antibiot","Antibióticos ahora mismo"],
   ["ibp","Omeprazol o antiácidos"]]},
 {id:"cond", t:"Condiciones de salud", hint:"Lo que el cliente te cuente. No preguntes más de lo necesario.", keys:[
   ["diabetes","Diabetes"],["hta","Hipertensión"],["cardiop","Cardiopatía o arritmia"],
   ["tiroidec","Problema de tiroides"],["renal","Riñón o cálculos renales"],["hepatica","Hígado"],
   ["biliar","Cálculos o problemas de vesícula"],["digestivo","Úlcera, reflujo o enfermedad intestinal"],
   ["autoinmune","Enfermedad autoinmune"],["hormonodep","Tumor hormonodependiente o endometriosis"],
   ["prostata","Próstata"],["epilepsia","Epilepsia"],["asma","Asma o atopia"],
   ["ansiedad","Ansiedad o insomnio"],["psiq","Trastorno bipolar o psiquiátrico"],
   ["neuro","Trastorno neurológico"],["parkinson","Parkinson"],
   ["hemocromatosis","Hemocromatosis o exceso de hierro"],["gota","Gota"],
   ["herpes","Herpes de repetición"],["fenilcetonuria","Fenilcetonuria"],["fructosa","Intolerancia a la fructosa"]]},
 {id:"alg", t:"Alergias e intolerancias", hint:"Un rojo aquí no se negocia.", keys:[
   ["alergia_pescado","Pescado"],["alergia_marisco","Marisco o crustáceos"],["alergia_lacteos","Leche o lácteos"],
   ["alergia_frutossecos","Frutos secos, cacahuete o legumbres"],["alergia_soja","Soja"],["alergia_sesamo","Sésamo"],
   ["alergia_gluten","Gluten o celiaquía"],["alergia_asteraceas","Pólenes y compuestas"],
   ["alergia_abejas","Abejas y productos apícolas"],["alergia_aspirina","Aspirina o AINE"],
   ["alergia_hongos","Hongos"],["alergia_levadura","Levaduras"],["alergia_latex","Látex"]]}
];

/* etiquetas de todas las claves, incluidas las que no son filtros */
var LABEL = {};
GROUPS.forEach(function(g){g.keys.forEach(function(k){LABEL[k[0]]=k[1]})});
var EXTRA = {
 _destacado:"Atención especial", medicacion_general:"Cualquier medicación",
 hierro:"Combinado con hierro", calcio:"Combinado con calcio", cobre:"Equilibrio con cobre",
 yodo:"Aporte de yodo", tiamina:"Vitamina B1", b1def:"Déficit de B1", b12def:"Déficit de B12",
 selenosis:"Exceso de selenio", wilson:"Enfermedad de Wilson", sitosterolemia:"Sitosterolemia",
 antifungico:"Antifúngicos", metales:"Metales pesados", crudo:"Producto crudo",
 herida:"Heridas abiertas", muscular:"Señal de alarma muscular", dental:"Esmalte dental",
 mascotas:"Mascotas en casa", piel:"Piel", sol:"Sol y fotosensibilidad",
 conduccion:"Conducción", analitica:"Analíticas", religioso:"Origen del producto",
 fiv:"Fertilidad", herpes:"Herpes", fumador:"Fumadores", cirugia:"Cirugía próxima"
};
Object.keys(EXTRA).forEach(function(k){ if(!LABEL[k]) LABEL[k]=EXTRA[k] });
function labelOf(k){ return LABEL[k] || EXTRA[k] || k }

/* alérgenos declarados en el campo al[] -> clave de filtro */
var ALMAP = {pescado:"alergia_pescado",marisco:"alergia_marisco",crustaceos:"alergia_marisco",
 lacteos:"alergia_lacteos",huevo:"alergia_huevo",soja:"alergia_soja",gluten:"alergia_gluten",
 trigo:"alergia_gluten",frutossecos:"alergia_frutossecos",cacahuete:"alergia_frutossecos",
 legumbres:"alergia_frutossecos",asteraceas:"alergia_asteraceas",abejas:"alergia_abejas",
 propoleo:"alergia_abejas",polen:"alergia_abejas",hongos:"alergia_hongos",levadura:"alergia_levadura",
 latex:"alergia_latex",aspirina:"alergia_aspirina",salicilatos:"alergia_aspirina",
 sesamo:"alergia_sesamo",cacahuete:"alergia_frutossecos"};
var ALNAME = {pescado:"pescado",marisco:"marisco",crustaceos:"crustáceos",lacteos:"lácteos",huevo:"huevo",
 soja:"soja",gluten:"gluten",trigo:"trigo",frutossecos:"frutos secos",cacahuete:"cacahuete",
 legumbres:"legumbres",asteraceas:"asteráceas",abejas:"productos apícolas",propoleo:"própolis",
 polen:"polen",hongos:"hongos",levadura:"levadura",latex:"látex",aspirina:"salicilatos",
 salicilatos:"salicilatos",sesamo:"sésamo",solanaceas:"solanáceas",labiadas:"labiadas",coco:"coco",porcino:"origen porcino",
 bovino:"origen bovino",pina:"piña",papaya:"papaya",lanolina:"lanolina"};

/* claves que siempre se muestran aunque no estén en el perfil */
var ALWAYS = {_destacado:1,hierro:1,calcio:1,cobre:1,yodo:1,tiamina:1,b1def:1,b12def:1,selenosis:1,
 wilson:1,sitosterolemia:1,antifungico:1,metales:1,crudo:1,herida:1,muscular:1,dental:1,mascotas:1,piel:1};

var ORDER = {R:0,A:1,V:2};
var VERDICT = {
 R:{l:"No vender",s:"Hay una contraindicación o una interacción seria. Da la información y deriva al médico o al farmacéutico."},
 A:{l:"Vender con aviso",s:"Se puede vender, pero hay que explicar la precaución y que la tenga presente."},
 V:{l:"Sin alertas",s:"Con el perfil que has marcado no salta ninguna alerta. Revisa igualmente los avisos generales."}
};

/* ================= estado ================= */
var P = {};
try{ var s=localStorage.getItem("mostrador.perfil"); if(s) P=JSON.parse(s)||{}; }catch(e){}
function save(){ try{ localStorage.setItem("mostrador.perfil",JSON.stringify(P)); }catch(e){} }
function activeKeys(){ return Object.keys(P).filter(function(k){return P[k]}) }

var DB = window.DB || [];
DB.forEach(function(p){
  p._s = (p.n+" "+(p.s||"")+" "+(p.a||[]).join(" ")+" "+p.c).toLowerCase()
          .normalize("NFD").replace(/[̀-ͯ]/g,"");
});
function norm(t){ return (t||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim() }

/* ---- búsqueda por necesidad ---- */
var NEEDS = window.NEEDS || [];
NEEDS.forEach(function(n){ n._n = norm(n.n) });
var BYID = {}; DB.forEach(function(p){ BYID[p.id]=p });
var NEEDSOF = {};
NEEDS.forEach(function(n){ n.p.forEach(function(id){ (NEEDSOF[id]=NEEDSOF[id]||[]).push(n.n) }) });

var STOP = {algo:1,para:1,por:1,con:1,los:1,las:1,una:1,uno:1,que:1,del:1,mas:1,muy:1,tengo:1,tiene:1,
 quiero:1,queria:1,necesito:1,busco:1,buscar:1,mejor:1,bien:1,esta:1,esto:1,eso:1,sirve:1,ayuda:1,ayude:1,
 cosa:1,algun:1,alguna:1,producto:1,dame:1,darme:1,tomar:1,tome:1,cliente:1,senora:1,senor:1,hombre:1,mujer:1,
 chico:1,chica:1,pide:1,pedir:1,mucho:1,poco:1,nada:1,todo:1,como:1,pero:1,sobre:1,desde:1,hace:1,hacer:1,
 senal:1,vale:1,tambien:1,natural:1,recomiendas:1,recomendar:1};
function tokens(t){
  return norm(t).split(/[^a-z0-9]+/).filter(function(w){ return w.length>2 && !STOP[w] });
}
function matchNeeds(tk){
  if(!tk.length) return [];
  return NEEDS.map(function(n){
    var hitTok={};
    tk.forEach(function(t){
      if(n._n.indexOf(t)>-1){ hitTok[t]=1; return }
      for(var i=0;i<n.k.length;i++){
        var k=n.k[i];
        if(k.indexOf(t)>-1 || (t.length>4 && t.indexOf(k)>-1)){ hitTok[t]=1; return }
      }
    });
    return {n:n, sc:Object.keys(hitTok).length};
  }).filter(function(x){return x.sc>0})
    .sort(function(a,b){ return b.sc-a.sc || a.n.p.length-b.n.p.length })
    .slice(0,3);
}
function matchProducts(tk, term){
  var sc={};
  DB.forEach(function(p){
    var s=0;
    if(term.length>1 && p._s.indexOf(term)>-1) s+=3;
    tk.forEach(function(t){ if(t.length>3 && p._s.indexOf(t)>-1) s+=1 });
    if(s) sc[p.id]=s;
  });
  return Object.keys(sc).sort(function(a,b){
    return sc[b]-sc[a] || norm(BYID[a].n).indexOf(term)-norm(BYID[b].n).indexOf(term);
  }).map(function(id){return BYID[id]});
}
/* para una necesidad interesa lo contrario: primero lo que SÍ se puede vender */
function byLevel(list){
  return list.slice().sort(function(a,b){ return ORDER[level(b)]-ORDER[level(a)] });
}

/* ---- catálogo real de la tienda ---- */
var PROD = window.PROD || [];
PROD.forEach(function(p){
  p._s = norm(p.n+" "+p.m+" "+(p.u||"")+" "+(p.comp||"")+" "+(p.ing||[]).map(function(i){
    return BYID[i]? BYID[i].n+" "+(BYID[i].a||[]).join(" ") : i }).join(" "));
});
var PBYID = {}; PROD.forEach(function(p){ PBYID[p.id]=p });

/* riesgos del producto = los de sus ingredientes + los suyos propios, sin repetir clave */
function prodRisks(p){
  var out = {};
  function put(k, l, t, src, gen){
    var c = out[k];
    if(!c){ c = out[k] = {k:k, l:l, t:t, by:{}, gen:gen} }
    (c.by[l] = c.by[l] || []).push(src);
    if(ORDER[l] < ORDER[c.l]){ c.l=l; c.t=t; c.gen=gen }
  }
  (p.ing||[]).forEach(function(id){
    var ing = BYID[id]; if(!ing) return;
    hits(ing).forEach(function(h){ if(h.l!=="V") put(h.k, h.l, h.t, ing.n, false) });
    // de los avisos generales del ingrediente solo interesa el destacado: el resto es ruido en un multi
    generales(ing).forEach(function(g){ if(g.k==="_destacado") put(g.k, g.l, g.t, ing.n, true) });
  });
  // ajustes por dosis: sustituyen lo heredado del ingrediente
  ((window.POVR||{})[p.id]||[]).forEach(function(r){
    if(!out[r.k]) return;                       // si el riesgo no ha saltado, no inventamos uno
    if(!(ALWAYS[r.k] || P[r.k])) return;
    out[r.k] = {k:r.k, l:r.l, t:r.t, by:out[r.k].by, gen:!P[r.k]};
  });
  (p.x||[]).forEach(function(r){
    if(!(ALWAYS[r.k] || P[r.k])) return;
    out[r.k] = {k:r.k, l:r.l, t:r.t, by:{}, own:true, gen:!P[r.k]};
  });
  return Object.keys(out).map(function(k){
      var c = out[k];
      c.src = (c.by && c.by[c.l] ? c.by[c.l] : []).filter(function(v,i,a){ return v && a.indexOf(v)===i });
      return c;
    }).sort(function(a,b){ return ORDER[a.l]-ORDER[b.l] });
}
function prodLevel(p){
  var r = prodRisks(p).filter(function(x){ return !x.gen });
  for(var i=0;i<r.length;i++) if(r[i].l==="R") return "R";
  for(var j=0;j<r.length;j++) if(r[j].l==="A") return "A";
  return "V";
}
function eur(v){ return v? v.toFixed(2).replace('.',',')+" €" : "" }
function thumb(p){
  return p.img ? '<img class="th" src="'+p.img+'.jpg" alt="" loading="lazy">'
               : '<span class="th tile"><b>'+esc(p.m.slice(0,1))+'</b></span>';
}
function prodRowHTML(p){
  var lv = prodLevel(p);
  var r = prodRisks(p).filter(function(x){ return !x.gen && x.l!=="V" });
  var sub = r.length ? r.slice(0,2).map(function(x){return labelOf(x.k)}).join(" · ")+(r.length>2?" +"+(r.length-2):"")
                     : (p.m+" · "+p.f);
  return '<button class="row prow" type="button" data-prod="'+p.id+'"><span class="dot '+lv+'"></span>'+
    thumb(p)+'<span class="rw"><b>'+esc(p.n)+(p.pend?' <i class="pend">ficha por confirmar</i>':'')+
    (p.prop?' <i class="prop">propuesta</i>':'')+'</b><small>'+esc(sub)+'</small></span>'+
    '<span class="pvp">'+(p.prop?'':eur(p.pvp))+'</span></button>';
}
function matchProds(tk, term){
  var sc = {};
  PROD.forEach(function(p){
    var v = 0;
    if(term.length>1 && p._s.indexOf(term)>-1) v += 3;
    tk.forEach(function(t){ if(t.length>3 && p._s.indexOf(t)>-1) v += 1 });
    if(v) sc[p.id] = v;
  });
  return Object.keys(sc).sort(function(a,b){return sc[b]-sc[a]}).map(function(i){return PBYID[i]});
}
function prodsForNeed(need){
  // solo los activos principales: si no, un multivitamínico sale para todo
  var want = {}; need.p.forEach(function(i){ want[i]=1 });
  return PROD.filter(function(p){ return (p.ing||[]).slice(0,4).some(function(i){ return want[i] }) })
             .sort(function(a,b){ return ORDER[prodLevel(b)]-ORDER[prodLevel(a)] });
}

/* riesgos que disparan con el perfil actual + alérgenos declarados */
function hits(p){
  var out=[], seen={};
  (p.r||[]).forEach(function(x){
    if(P[x.k] && x.l!=="V"){ out.push({k:x.k,l:x.l,t:x.t}); seen[x.k]=1 }
  });
  (p.al||[]).forEach(function(a){
    var key=ALMAP[a];
    if(key && P[key] && !seen[key]){
      out.push({k:key,l:"R",t:"El producto declara "+(ALNAME[a]||a)+" entre sus alérgenos o su origen. Comprueba la etiqueta del producto concreto antes de vender."});
      seen[key]=1;
    }
  });
  (p.r||[]).forEach(function(x){ if(P[x.k] && x.l==="V") out.push({k:x.k,l:"V",t:x.t}) });
  out.sort(function(a,b){return ORDER[a.l]-ORDER[b.l]});
  return out;
}
function generales(p){ return (p.r||[]).filter(function(x){ return ALWAYS[x.k] && !P[x.k] }) }
function level(p){
  var h=hits(p);
  for(var i=0;i<h.length;i++){ if(h[i].l==="R") return "R" }
  for(var j=0;j<h.length;j++){ if(h[j].l==="A") return "A" }
  return "V";
}
function tagOf(x){ return x.k==="_destacado" ? "\u2605" : (x.l==="R" ? "No" : x.l==="A" ? "Ojo" : "Ok") }
function esc(t){ return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]}) }

/* ================= render ================= */
var body=document.getElementById("consultaBody"), q=document.getElementById("q");
var current=null;   // {t:'ing'|'prod', id}

function pillText(){
  var n=activeKeys().length, b=document.getElementById("pillBtn");
  b.textContent = n? (n+(n===1?" dato":" datos")) : "Sin perfil";
  b.className = "pill"+(n?" on":"");
  document.getElementById("resetBtn").hidden = !n;
}

function renderConsulta(){
  pillText();
  if(current){ return current.t==="prod" ? renderProdDetail(current.id) : renderDetail(current.id) }
  var term=norm(q.value);
  if(term.length>0){
    var tk=tokens(q.value), nds=matchNeeds(tk), shown={}, html="";
    var pr = matchProds(tk, term);
    if(pr.length){
      html += '<div class="sechead"><h2>En tu catálogo</h2><span class="n">'+pr.length+'</span></div>'+
              '<div class="list">'+pr.slice(0,25).map(prodRowHTML).join("")+'</div>';
    }
    nds.forEach(function(x){
      var list=byLevel(x.n.p.map(function(id){return BYID[id]}).filter(Boolean));
      list.forEach(function(p){ shown[p.id]=1 });
      var rojos=list.filter(function(p){return level(p)==="R"}).length;
      var pn = prodsForNeed(x.n).filter(function(z){ return pr.indexOf(z)<0 });
      if(pn.length){
        html+='<div class="sechead"><h2>Para '+esc(x.n.n.toLowerCase())+', de tu catálogo</h2><span class="n">'+pn.length+'</span></div>'+
              '<div class="list">'+pn.map(prodRowHTML).join("")+'</div>';
      }
      html+='<div class="sechead"><h2>Ingredientes para: '+esc(x.n.n)+'</h2><span class="n">'+list.length+'</span></div>'+
        '<p class="note" style="margin-bottom:10px">'+
          (activeKeys().length
            ? (rojos? 'Ordenados de más a menos vendible con este cliente: empieza por arriba. '+(rojos===1?'El último no se lo vendas.':'Los '+rojos+' últimos no se los vendas.')
                    : 'Con este perfil ninguno da alerta, pero abre cada ficha para leer los avisos generales.')
            : 'Marca el perfil del cliente en la pestaña <b>Cliente</b> y esta lista se reordena sola.')+
        '</p><div class="list">'+list.map(rowHTML).join("")+'</div>';
    });
    var prods=matchProducts(tk,term).filter(function(p){return !shown[p.id]}).slice(0,40);
    if(prods.length){
      html+= nds.length? '<div class="sechead"><h2>Otras coincidencias</h2><span class="n">'+prods.length+'</span></div>' : "";
      html+='<div class="list">'+prods.map(rowHTML).join("")+'</div>';
    }
    body.innerHTML = html || '<div class="card empty">No encuentro nada con eso. Prueba a decirlo como te lo diría el cliente («algo para el reflujo») o busca el ingrediente suelto («cúrcuma»). Si te falta algo que vendes, apúntalo y lo añadimos.</div>';
    bindRows(); return;
  }
  var keys=activeKeys();
  var needChips='<div class="sechead"><h2>¿Qué te pide?</h2></div><div class="chips" style="margin-bottom:6px">'+
    NEEDS.map(function(n){ return '<button class="chip" type="button" data-need="'+n.id+'">'+esc(n.n)+'</button>' }).join("")+'</div>';
  if(!keys.length){
    var star=DB.filter(function(p){ return (p.r||[]).some(function(x){return x.k==="_destacado"}) });
    body.innerHTML =
      '<div class="card" style="padding:16px"><h2 style="font-family:Playfair Display,Georgia,serif;font-size:19px;font-weight:600;margin-bottom:7px">Empieza por el cliente</h2>'+
      '<p class="note">Entra alguien y te pide algo. Antes de buscar el producto, pásate a la pestaña <b>Cliente</b> y marca lo que te haya contado: medicación, embarazo, alergias, lo que sepas. Luego busca el producto aquí y el semáforo se pinta solo.</p>'+
      '<p class="note" style="margin-top:9px">Busca como te lo diría el cliente —«algo para dormir mejor», «para la retención de líquidos», «para el reflujo»— o directamente por el nombre del producto.</p></div>'+
      '<div class="sechead"><h2>Tu catálogo</h2><span class="n">'+PROD.length+'</span></div>'+
      '<div class="list">'+PROD.map(prodRowHTML).join("")+'</div>'+
      needChips+
      '<div class="sechead"><h2><span class="star">★</span> Ingredientes de máxima vigilancia</h2><span class="n">'+star.length+'</span></div>'+
      '<p class="note" style="margin-bottom:10px">Estos son los productos de tu lineal que más problemas dan. Merece la pena que te los sepas de memoria.</p>'+
      '<div class="list">'+star.map(rowHTML).join("")+"</div>";
    bindRows(); return;
  }
  var pR=PROD.filter(function(p){return prodLevel(p)==="R"}), pA=PROD.filter(function(p){return prodLevel(p)==="A"});
  var rojos=DB.filter(function(p){return level(p)==="R"}), ambar=DB.filter(function(p){return level(p)==="A"});
  var html='<div class="card" style="padding:14px 16px"><p class="note">Con los <b>'+keys.length+'</b> datos que has marcado, de las <b>'+PROD.length+'</b> referencias de tu catálogo: <b style="color:var(--rojo)">'+pR.length+' no se venden</b>, <b style="color:var(--ambar)">'+pA.length+' necesitan aviso</b> y <b style="color:var(--verde)">'+(PROD.length-pR.length-pA.length)+' no dan alerta</b>. En la base general de '+DB.length+' ingredientes, '+rojos.length+' salen en rojo.</p></div>'+
    (pR.length? '<div class="sechead"><h2>De tu catálogo, no vender</h2><span class="n">'+pR.length+'</span></div><div class="list">'+pR.map(prodRowHTML).join("")+'</div>' : '')+
    (pA.length? '<div class="sechead"><h2>De tu catálogo, con aviso</h2><span class="n">'+pA.length+'</span></div><div class="list">'+pA.map(prodRowHTML).join("")+'</div>' : '')+
    needChips;
  if(rojos.length){ html+='<div class="sechead"><h2>No vender</h2><span class="n">'+rojos.length+'</span></div><div class="list">'+rojos.map(rowHTML).join("")+"</div>" }
  if(ambar.length){ html+='<div class="sechead"><h2>Vender con aviso</h2><span class="n">'+ambar.length+'</span></div><div class="list">'+ambar.map(rowHTML).join("")+"</div>" }
  if(!rojos.length && !ambar.length){ html+='<div class="card empty">Con este perfil no salta ninguna alerta en la base. Busca el producto concreto para leer sus avisos generales.</div>' }
  body.innerHTML=html; bindRows();
}

function rowHTML(p){
  var lv=level(p), h=hits(p).filter(function(x){return x.l!=="V"});
  var sub = h.length ? h.slice(0,2).map(function(x){return labelOf(x.k)}).join(" · ") + (h.length>2?" +"+(h.length-2):"") : (p.s||p.c);
  return '<button class="row" type="button" data-id="'+p.id+'"><span class="dot '+lv+'"></span>'+
    '<span class="rw"><b>'+esc(p.n)+'</b><small>'+esc(sub)+'</small></span><span class="chevron">›</span></button>';
}
function bindRows(){
  Array.prototype.forEach.call(body.querySelectorAll(".row"),function(b){
    b.addEventListener("click",function(){
      current = b.getAttribute("data-prod") ? {t:"prod", id:b.getAttribute("data-prod")}
                                            : {t:"ing",  id:b.getAttribute("data-id")};
      window.scrollTo(0,0); renderConsulta();
    });
  });
  Array.prototype.forEach.call(body.querySelectorAll("[data-need]"),function(b){
    b.addEventListener("click",function(){
      var n=NEEDS.filter(function(x){return x.id===b.getAttribute("data-need")})[0];
      q.value=n?n.n:""; current=null; window.scrollTo(0,0); renderConsulta();
    });
  });
}

function renderDetail(id){
  var p=DB.filter(function(x){return x.id===id})[0];
  if(!p){ current=null; return renderConsulta() }
  var lv=level(p), h=hits(p), gen=generales(p), v=VERDICT[lv];
  var noProfile = !activeKeys().length;

  var html='<button class="back" type="button" id="backBtn">‹ Volver</button>'+
    '<article class="verdict '+lv+'">'+
      '<div class="vhead"><div class="vlabel">'+(noProfile?"Ficha del producto":"Veredicto")+'</div>'+
      '<div class="vtitle">'+(noProfile?"Sin perfil marcado":v.l)+'</div>'+
      '<p class="vsub">'+(noProfile?"No has marcado nada del cliente, así que no puedo cribar. Abajo tienes todas las precauciones del producto.":v.s)+'</p></div>'+
      '<div class="prodname">'+esc(p.n)+'</div>'+
      '<div class="prodmeta">'+(p.s?'<i>'+esc(p.s)+'</i> · ':'')+esc(p.c)+'</div>'+
      '<div class="vbody">';

  if(!noProfile && h.length){
    html+='<div class="reasons">'+h.map(function(x){
      return '<div class="reason '+x.l+'"><span class="tag">'+tagOf(x)+'</span>'+
        '<p><b>'+esc(labelOf(x.k))+'</b>'+esc(x.t)+'</p></div>'}).join("")+'</div>';
  }
  if(gen.length){
    html+='<div><div class="vlabel" style="color:var(--faint);margin-bottom:8px">Avisos para cualquier cliente</div><div class="reasons">'+
      gen.map(function(x){ return '<div class="reason '+x.l+'"><span class="tag">'+tagOf(x)+'</span><p><b>'+esc(labelOf(x.k))+'</b>'+esc(x.t)+'</p></div>' }).join("")+'</div></div>';
  }

  html+='<dl class="kv">'+
    '<dt>Para qué</dt><dd>'+esc(p.u||"—")+(NEEDSOF[p.id]?'<br><span style="color:var(--faint)">Aparece en: '+esc(NEEDSOF[p.id].join(" · "))+'</span>':'')+'</dd>'+
    (p.d?'<dt>Dosis</dt><dd>'+esc(p.d)+'</dd>':'')+
    (p.lg?'<dt>Legal</dt><dd>'+esc(p.lg)+'</dd>':'')+
    ((p.al&&p.al.length)?'<dt>Alérgenos</dt><dd>'+esc(p.al.map(function(a){return ALNAME[a]||a}).join(", "))+'</dd>':'')+
    '<dt>Evidencia</dt><dd>'+({alta:"Interacciones bien documentadas",media:"Documentación moderada",baja:"Datos limitados: prudencia por defecto"}[p.ev]||"—")+'</dd>'+
    '</dl>';

  var all=(p.r||[]);
  if(all.length){
    html+='<details'+(noProfile?" open":"")+'><summary>Todas las precauciones ('+all.length+')</summary><div class="allrisks">'+
      all.slice().sort(function(a,b){return ORDER[a.l]-ORDER[b.l]}).map(function(x){
        return '<div class="ar"><span class="b '+x.l+'"></span><span><em>'+esc(labelOf(x.k))+'.</em> '+esc(x.t)+'</span></div>'
      }).join("")+'</div></details>';
  }
  html+='</div></article>';
  body.innerHTML=html;
  document.getElementById("backBtn").addEventListener("click",function(){ current=null; renderConsulta() });
}

function renderProdDetail(id){
  var p = PBYID[id];
  if(!p){ current=null; return renderConsulta() }
  var lv = prodLevel(p), risks = prodRisks(p);
  var prop = risks.filter(function(x){ return !x.gen }), gen = risks.filter(function(x){ return x.gen });
  var v = VERDICT[lv], noProfile = !activeKeys().length;

  var html = '<button class="back" type="button" id="backBtn">‹ Volver</button>'+
    '<article class="verdict '+lv+'">'+
      '<div class="vhead"><div class="vlabel">'+(noProfile?"Ficha de producto":"Veredicto")+'</div>'+
      '<div class="vtitle">'+(noProfile?"Sin perfil marcado":v.l)+'</div>'+
      '<p class="vsub">'+(noProfile?"Marca los datos del cliente y el semáforo se calcula solo. Abajo tienes la ficha completa.":v.s)+'</p></div>'+
      '<div class="phead">'+thumb2(p)+
        '<div class="pmeta"><div class="pbrand">'+esc(p.m)+(p.top?' · uso externo':'')+'</div>'+
        '<h2 class="pname">'+esc(p.n)+'</h2>'+
        '<div class="pfmt">'+esc(p.f||"")+'</div>'+
        (p.prop?'<div class="pprice prop2">PVP por fijar</div>':(p.pvp?'<div class="pprice">'+eur(p.pvp)+'</div>':''))+'</div></div>'+
      '<div class="vbody">';

  if(!noProfile && prop.length){
    html += '<div class="reasons">'+prop.map(function(x){
      return '<div class="reason '+x.l+'"><span class="tag">'+tagOf(x)+'</span>'+
        '<p><b>'+esc(labelOf(x.k))+(x.src&&x.src.length?' — '+esc(x.src.join(", ")):'')+'</b>'+esc(x.t)+'</p></div>' }).join("")+'</div>';
  }
  if(gen.length){
    html += '<div><div class="vlabel" style="color:var(--faint);margin-bottom:8px">Avisos para cualquier cliente</div><div class="reasons">'+
      gen.map(function(x){ return '<div class="reason '+x.l+'"><span class="tag">'+tagOf(x)+'</span>'+
        '<p><b>'+esc(labelOf(x.k))+(x.src&&x.src.length?' — '+esc(x.src.join(", ")):'')+'</b>'+esc(x.t)+'</p></div>' }).join("")+'</div></div>';
  }

  html += '<dl class="kv">'+
    '<dt>Para qué</dt><dd>'+esc(p.u||"—")+'</dd>'+
    (p.comp?'<dt>Composición</dt><dd>'+esc(p.comp)+'</dd>':'')+
    (p.ean?'<dt>EAN</dt><dd style="font-variant-numeric:tabular-nums">'+esc(p.ean)+'</dd>':'')+
    '</dl>';

  if((p.ing||[]).length){
    html += '<div><div class="vlabel" style="color:var(--faint);margin-bottom:8px">Lleva — toca para ver la ficha del ingrediente</div>'+
      '<div class="chips">'+p.ing.map(function(i){
        var ing = BYID[i]; if(!ing) return "";
        return '<button class="chip ichip '+level(ing)+'" type="button" data-id="'+i+'">'+esc(ing.n)+'</button>';
      }).join("")+'</div></div>';
  }
  html += '</div></article>';
  body.innerHTML = html;
  document.getElementById("backBtn").addEventListener("click",function(){ current=null; renderConsulta() });
  Array.prototype.forEach.call(body.querySelectorAll(".ichip"),function(b){
    b.addEventListener("click",function(){ current={t:"ing",id:b.getAttribute("data-id")}; window.scrollTo(0,0); renderConsulta() });
  });
}
function thumb2(p){
  return p.img ? '<img class="thbig" src="'+p.img+'.jpg" alt="'+esc(p.n)+'">'
               : '<span class="thbig tile"><b>'+esc(p.m.slice(0,1))+'</b></span>';
}

/* ---- perfil ---- */
function renderChips(){
  document.getElementById("chipGroups").innerHTML = GROUPS.map(function(g){
    return '<div class="grp"><h3>'+g.t+'</h3><p class="hint">'+g.hint+'</p><div class="chips">'+
      g.keys.map(function(k){
        return '<button class="chip" type="button" data-k="'+k[0]+'" aria-pressed="'+(P[k[0]]?"true":"false")+'">'+esc(k[1])+'</button>'
      }).join("")+'</div></div>';
  }).join("");
  Array.prototype.forEach.call(document.querySelectorAll(".chip[data-k]"),function(b){
    b.addEventListener("click",function(){
      var k=b.getAttribute("data-k");
      P[k]=!P[k]; if(!P[k]) delete P[k];
      b.setAttribute("aria-pressed",P[k]?"true":"false");
      save(); pillText();
    });
  });
}

/* ---- tabs ---- */
var VIEWS={consulta:"v-consulta",perfil:"v-perfil",guia:"v-guia"};
function show(name){
  Object.keys(VIEWS).forEach(function(n){
    document.getElementById(VIEWS[n]).hidden = (n!==name);
    document.getElementById("t-"+n).setAttribute("aria-selected", n===name?"true":"false");
  });
  if(name==="consulta") renderConsulta();
  window.scrollTo(0,0);
}
Object.keys(VIEWS).forEach(function(n){
  document.getElementById("t-"+n).addEventListener("click",function(){ show(n) });
});
document.getElementById("pillBtn").addEventListener("click",function(){ show("perfil") });
document.getElementById("clearBtn").addEventListener("click",function(){
  P={}; save(); renderChips(); pillText();
});
document.getElementById("resetBtn").addEventListener("click",function(){
  P={}; save(); renderChips(); pillText(); q.value=""; current=null; show("consulta");
});
q.addEventListener("input",function(){ current=null; renderConsulta() });

renderChips();
renderConsulta();
