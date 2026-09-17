// Bloque 5 — Metabolismo y peso, salud hormonal, hongos, probióticos
window.DB = (window.DB || []).concat([

{id:"te-verde",n:"Té verde / EGCG",s:"Camellia sinensis",a:["te verde","egcg","camellia","catequinas"],c:"Planta",u:"Antioxidante, control de peso, energía",d:"LÍMITE UE: los complementos no pueden aportar 800 mg/día o más de EGCG, y deben advertirlo en la etiqueta (Reglamento UE 2022/2340).",ev:"alta",al:[],r:[
{k:"hepatica",l:"R",t:"Los extractos concentrados de té verde son hepatotóxicos: hay casos de hepatitis fulminante. No vender extractos en hepatopatía, ni junto a otros hepatotóxicos. Tomarlo con comida reduce el riesgo."},
{k:"anticoag",l:"R",t:"Contiene vitamina K y antagoniza el Sintrom; además tiene efecto antiagregante. No vender extractos con acenocumarol."},
{k:"hierro",l:"A",t:"Los taninos bloquean la absorción de hierro. Separar 2 h de los suplementos de hierro y de las comidas si hay anemia."},
{k:"cardiop",l:"A",t:"Aporta cafeína: prudencia en arritmias e hipertensión."},
{k:"emb",l:"R",t:"Extractos concentrados contraindicados; además reduce la absorción de folato."},
{k:"cardio",l:"A",t:"Puede reducir el efecto del nadolol y otros betabloqueantes."}]},

{id:"cafe-verde",n:"Café verde",s:"Coffea arabica sin tostar",a:["cafe verde","acido clorogenico"],c:"Planta",u:"Control de peso, energía",d:"Habitual 200–400 mg/día. Contiene cafeína.",ev:"baja",al:[],r:[
{k:"hta",l:"R",t:"Sube la tensión por la cafeína. Prudencia en hipertensos."},
{k:"cardiop",l:"R",t:"Contraindicado en arritmias."},
{k:"emb",l:"R",t:"Evitar por la carga de cafeína."},
{k:"ansiedad",l:"A",t:"Nerviosismo e insomnio."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."}]},

{id:"guarana",n:"Guaraná",s:"Paullinia cupana",a:["guarana","paullinia"],c:"Planta",u:"Energía, concentración, pre-entreno",d:"Muy rico en cafeína: 1 g de guaraná ≈ 40–80 mg de cafeína.",ev:"media",al:[],r:[
{k:"cardiop",l:"R",t:"Contraindicado en arritmias y cardiopatía."},
{k:"hta",l:"R",t:"Sube la tensión."},
{k:"emb",l:"R",t:"Evitar."},
{k:"menor",l:"R",t:"No vender a menores."},
{k:"ansiedad",l:"R",t:"Empeora ansiedad e insomnio."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"antidep",l:"A",t:"Prudencia con IMAO y litio."}]},

{id:"mate",n:"Mate",s:"Ilex paraguariensis",a:["mate","yerba mate"],c:"Planta",u:"Energía, control de peso",d:"Contiene cafeína. El consumo muy caliente y crónico se asocia a cáncer de esófago.",ev:"media",al:[],r:[
{k:"hta",l:"A",t:"Cafeína: sube la tensión."},
{k:"cardiop",l:"A",t:"Prudencia en arritmias."},
{k:"emb",l:"R",t:"Evitar."},
{k:"antidep",l:"A",t:"Prudencia con IMAO."}]},

{id:"naranja-amarga",n:"Naranja amarga / Sinefrina",s:"Citrus aurantium",a:["naranja amarga","sinefrina","citrus aurantium"],c:"Planta",u:"Termogénico, control de peso",d:"Muy usado como sustituto de la efedra. Perfil de riesgo cardiovascular alto.",ev:"media",al:[],r:[
{k:"_destacado",l:"R",t:"Producto de riesgo. Hay casos de infarto, ictus y arritmias, sobre todo combinado con cafeína. Yo no lo tendría en el lineal; si lo tienes, no lo vendas a nadie con factores de riesgo cardiovascular."},
{k:"cardiop",l:"R",t:"CONTRAINDICADA en cualquier cardiopatía o arritmia."},
{k:"hta",l:"R",t:"Sube la tensión y la frecuencia cardíaca. Contraindicada en hipertensión."},
{k:"antidep",l:"R",t:"Con IMAO: crisis hipertensiva. Contraindicada."},
{k:"emb",l:"R",t:"Contraindicada."},
{k:"tiroidec",l:"R",t:"Contraindicada en hipertiroidismo."},
{k:"medicacion_general",l:"R",t:"Inhibe el CYP3A4 como el pomelo: altera muchísimos fármacos."}]},

{id:"garcinia",n:"Garcinia cambogia",s:"Garcinia gummi-gutta",a:["garcinia","hca","acido hidroxicitrico"],c:"Planta",u:"Control de peso, saciedad",d:"Habitual 500–1.500 mg/día. Evidencia de eficacia muy pobre.",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"Casos documentados de hepatotoxicidad grave, incluidos trasplantes. No vender en hepatopatía ni junto a otros hepatotóxicos."},
{k:"antidep",l:"R",t:"Actividad serotoninérgica: riesgo de síndrome serotoninérgico con ISRS. No vender."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"emb",l:"R",t:"Contraindicada."},
{k:"psiq",l:"A",t:"Casos de manía descritos."}]},

{id:"berberina",n:"Berberina",s:"Berberis / Coptis",a:["berberina","agracejo"],c:"Otros",u:"Glucemia, colesterol, síndrome metabólico",d:"Habitual 500 mg 2–3 veces/día con las comidas.",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"★ Es un inhibidor potente del CYP3A4 y de la glicoproteína-P, como el pomelo. Multiplica los niveles de muchos fármacos. Si el cliente toma medicación crónica, deriva al farmacéutico antes de vender."},
{k:"antidiab",l:"R",t:"Efecto hipoglucemiante real y potente. Sumado a metformina o insulina puede provocar hipoglucemia. No vender sin control médico."},
{k:"emb",l:"R",t:"CONTRAINDICADA en embarazo y lactancia: desplaza la bilirrubina y puede causar kernicterus en el recién nacido. También en menores."},
{k:"menor",l:"R",t:"Contraindicada en lactantes y niños pequeños."},
{k:"inmuno",l:"R",t:"Eleva peligrosamente los niveles de ciclosporina y tacrolimus."},
{k:"estatinas",l:"A",t:"Puede aumentar los niveles de estatinas y el riesgo de miopatía."},
{k:"anticoag",l:"A",t:"Puede alterar los niveles de anticoagulantes. Prudencia."},
{k:"hepatica",l:"A",t:"Prudencia en hepatopatía."}]},

{id:"canela",n:"Canela",s:"Cinnamomum cassia / verum",a:["canela","cassia","cumarina"],c:"Planta",u:"Glucemia, digestión",d:"La canela cassia es rica en cumarina (hepatotóxica). Para uso diario, preferir canela de Ceilán (verum).",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"La cumarina de la canela cassia es hepatotóxica a dosis altas y mantenidas. No vender extractos de cassia en hepatopatía."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia: vigilar con insulina o metformina."},
{k:"anticoag",l:"A",t:"La cumarina puede interferir con el Sintrom a dosis altas."},
{k:"emb",l:"A",t:"Uso culinario sin problema; extractos, evitar."}]},

{id:"fenogreco",n:"Fenogreco / Alholva",s:"Trigonella foenum-graecum",a:["fenogreco","alholva","fenugreek"],c:"Planta",u:"Glucemia, apetito, lactancia, testosterona",d:"Habitual 500–1.000 mg/día.",ev:"media",al:["cacahuete","legumbres"],r:[
{k:"alergia_frutossecos",l:"R",t:"Es una leguminosa: reacción cruzada con cacahuete y garbanzo. Hay casos de anafilaxia."},
{k:"antidiab",l:"R",t:"Efecto hipoglucemiante marcado: riesgo con insulina y sulfonilureas. No vender sin control."},
{k:"anticoag",l:"R",t:"Contiene cumarinas y potencia el Sintrom. No vender con anticoagulantes."},
{k:"emb",l:"R",t:"CONTRAINDICADO: estimula las contracciones uterinas."},
{k:"tiroidec",l:"A",t:"Puede reducir la T3 y T4. Prudencia en hipotiroidismo."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica. Prudencia."}]},

{id:"gymnema",n:"Gymnema",s:"Gymnema sylvestre",a:["gymnema","gurmar"],c:"Planta",u:"Antojo de dulce, glucemia",d:"Habitual 200–400 mg/día de extracto.",ev:"media",al:[],r:[
{k:"antidiab",l:"R",t:"Efecto hipoglucemiante: riesgo real de hipoglucemia con insulina o sulfonilureas. Que lo autorice su médico."},
{k:"diabetes",l:"A",t:"Que se controle la glucemia más a menudo."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"banaba",n:"Banaba / Ácido corosólico",s:"Lagerstroemia speciosa",a:["banaba","corosolico"],c:"Planta",u:"Glucemia",d:"Habitual 32–48 mg/día de ácido corosólico.",ev:"baja",al:[],r:[
{k:"antidiab",l:"R",t:"Hipoglucemiante: riesgo de bajada con antidiabéticos. Derivar."},
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"levadura-roja",n:"Levadura roja de arroz / Monacolina K",s:"Monascus purpureus",a:["levadura roja","monacolina","arroz de levadura roja","monascus"],c:"Otros",u:"Colesterol",d:"LEGAL: en la UE los complementos deben aportar MENOS de 3 mg/día de monacolinas (Reg. UE 2022/860) y llevar advertencias. El Reg. 2024/2041 retiró la declaración de salud.",ev:"alta",al:[],lg:"Producto muy regulado. Comprueba que tu proveedor cumple el límite de <3 mg y que la etiqueta lleva las advertencias obligatorias.",r:[
{k:"_destacado",l:"R",t:"La monacolina K ES químicamente lovastatina, una estatina. Tiene los mismos riesgos que el medicamento pero sin control médico. Trátalo como un fármaco, no como una planta inocua."},
{k:"estatinas",l:"R",t:"NO VENDER a quien ya tome estatinas: se duplica la dosis y sube el riesgo de rabdomiólisis."},
{k:"hepatica",l:"R",t:"Contraindicada en enfermedad hepática. Riesgo de hepatotoxicidad."},
{k:"emb",l:"R",t:"CONTRAINDICADA en embarazo y lactancia (teratógena, como todas las estatinas) y en menores de 18 años."},
{k:"menor",l:"R",t:"Contraindicada en menores de 18 años."},
{k:"medicacion_general",l:"R",t:"Interacciona con todo lo que inhiba el CYP3A4: pomelo, macrólidos, antifúngicos, ciclosporina, amiodarona."},
{k:"antibiot",l:"R",t:"Con claritromicina, eritromicina o antifúngicos azólicos: riesgo de rabdomiólisis."},
{k:"muscular",l:"A",t:"Si aparece dolor muscular intenso u orina oscura, suspender y acudir a urgencias."}]},

{id:"policosanol",n:"Policosanol",s:"",a:["policosanol"],c:"Otros",u:"Colesterol",d:"Habitual 10–20 mg/día. Evidencia discutida.",ev:"baja",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia con Sintrom."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"fitoesteroles",n:"Fitoesteroles / Esteroles vegetales",s:"",a:["fitoesteroles","esteroles vegetales","estanoles"],c:"Otros",u:"Colesterol",d:"1,5–3 g/día es la dosis con respaldo.",ev:"alta",al:[],r:[
{k:"sitosterolemia",l:"R",t:"Contraindicados en sitosterolemia (enfermedad genética rara)."},
{k:"emb",l:"A",t:"No recomendados en embarazo, lactancia ni menores de 5 años: reducen la absorción de betacaroteno."},
{k:"menor",l:"A",t:"No recomendados en menores de 5 años."},
{k:"estatinas",l:"A",t:"Se pueden combinar, pero que lo sepa su médico para valorar el ajuste."}]},

{id:"cq10",n:"Coenzima Q10",s:"Ubiquinona / ubiquinol",a:["q10","coenzima q10","ubiquinol","ubiquinona"],c:"Otros",u:"Energía, corazón, acompañante de estatinas, fertilidad",d:"Habitual 100–300 mg/día. El ubiquinol se absorbe mejor.",ev:"alta",al:[],r:[
{k:"anticoag",l:"R",t:"Estructura parecida a la vitamina K: puede reducir el efecto del Sintrom. Si se toma, mantener dosis fija y controlar el INR."},
{k:"cardio",l:"A",t:"Ligero efecto hipotensor: puede sumar con antihipertensivos."},
{k:"quimio",l:"A",t:"Como antioxidante, consultar con oncología durante quimio o radioterapia."},
{k:"estatinas",l:"V",t:"Uso muy razonable: las estatinas reducen la CoQ10 endógena. Sin interacción negativa."}]},

{id:"ala",n:"Ácido alfa lipoico",s:"",a:["acido alfa lipoico","ala","alfa lipoico"],c:"Otros",u:"Neuropatía, glucemia, antioxidante",d:"Habitual 300–600 mg/día en ayunas.",ev:"media",al:[],r:[
{k:"antidiab",l:"R",t:"Efecto hipoglucemiante: riesgo de bajada con insulina o antidiabéticos. Derivar para ajustar."},
{k:"tiroidec",l:"A",t:"Puede interferir con la hormona tiroidea. Separar de la levotiroxina."},
{k:"tiroides",l:"A",t:"Separar de la levotiroxina y vigilar controles."},
{k:"b1def",l:"A",t:"En personas con déficit de tiamina (alcohol) puede agravarlo."},
{k:"quimio",l:"A",t:"Consultar con oncología."}]},

{id:"resveratrol",n:"Resveratrol",s:"",a:["resveratrol"],c:"Otros",u:"Antioxidante, longevidad, cardiovascular",d:"Habitual 100–500 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto antiagregante claro: riesgo de sangrado con Sintrom, AAS o clopidogrel."},
{k:"hormonodep",l:"R",t:"Fitoestrógeno: evitar en cáncer de mama, útero u ovario hormonodependiente."},
{k:"medicacion_general",l:"A",t:"Inhibe CYP3A4 y CYP2C9: prudencia con medicación crónica."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"quercetina",n:"Quercetina",s:"",a:["quercetina"],c:"Otros",u:"Alergias, antioxidante, defensas",d:"Habitual 500–1.000 mg/día.",ev:"media",al:[],r:[
{k:"inmuno",l:"R",t:"Eleva los niveles de ciclosporina. No vender a trasplantados sin control."},
{k:"antibiot",l:"A",t:"Puede interferir con quinolonas."},
{k:"anticoag",l:"A",t:"Efecto antiagregante leve."},
{k:"renal",l:"A",t:"Dosis muy altas y prolongadas: prudencia en insuficiencia renal."},
{k:"emb",l:"R",t:"Datos limitados. Evitar."}]},

{id:"melatonina",n:"Melatonina",s:"",a:["melatonina"],c:"Otros",u:"Conciliación del sueño, jet lag",d:"En España, los complementos pueden llevar hasta 1,9 mg. Por encima de 2 mg es medicamento y va con receta.",ev:"alta",al:[],lg:"Límite de 1,9 mg/día en complemento alimenticio. Si el cliente pide 5 o 10 mg, eso es medicamento y debe ir a farmacia con receta.",r:[
{k:"sedantes",l:"A",t:"Suma sedación con benzodiacepinas, zolpidem y antihistamínicos."},
{k:"anticoag",l:"A",t:"Puede potenciar la warfarina. Prudencia."},
{k:"autoinmune",l:"A",t:"Inmunomoduladora: prudencia en enfermedad autoinmune."},
{k:"epilepsia",l:"A",t:"Datos contradictorios: que lo valore su neurólogo."},
{k:"antidiab",l:"A",t:"Puede alterar la glucemia nocturna. Vigilar."},
{k:"conduccion",l:"R",t:"No conducir tras tomarla. Advertirlo siempre."},
{k:"emb",l:"R",t:"Sin datos de seguridad. Evitar en embarazo y lactancia."},
{k:"menor",l:"A",t:"En menores, solo bajo indicación pediátrica."},
{k:"hormonal",l:"A",t:"La fluvoxamina y los anticonceptivos multiplican sus niveles."}]},

{id:"same",n:"SAMe (S-adenosilmetionina)",s:"",a:["same","s-adenosilmetionina"],c:"Otros",u:"Estado de ánimo, articulaciones, hígado",d:"Habitual 400–1.200 mg/día.",ev:"media",al:[],lg:"En España su estatus como complemento alimenticio no está claro. Verifica con tu proveedor.",r:[
{k:"antidep",l:"R",t:"Riesgo de síndrome serotoninérgico con ISRS, IMAO, tramadol y triptanes. NO VENDER."},
{k:"psiq",l:"R",t:"Puede desencadenar manía en trastorno bipolar. Contraindicado."},
{k:"emb",l:"R",t:"Datos limitados. Evitar."},
{k:"parkinson",l:"A",t:"Puede interferir con la levodopa."}]},

{id:"inositol",n:"Inositol (mio-inositol)",s:"",a:["inositol","mioinositol"],c:"Otros",u:"Ovario poliquístico, fertilidad, ansiedad",d:"Habitual 2–4 g/día.",ev:"media",al:[],r:[
{k:"antidiab",l:"A",t:"Mejora la sensibilidad a la insulina: puede requerir ajuste de dosis. Vigilar."},
{k:"psiq",l:"A",t:"Puede desencadenar manía en trastorno bipolar."},
{k:"emb",l:"A",t:"Se usa en fertilidad, pero en embarazo confirmado debe pautarlo su ginecólogo."}]},

{id:"isoflavonas",n:"Isoflavonas de soja",s:"Glycine max",a:["isoflavonas","soja","genisteina","daidzeina"],c:"Planta",u:"Sofocos y síntomas de menopausia",d:"Habitual 40–80 mg/día de isoflavonas.",ev:"alta",al:["soja"],r:[
{k:"hormonodep",l:"R",t:"CONTRAINDICADAS en cáncer de mama, útero u ovario hormonodependiente y en antecedentes. Es la pregunta obligada antes de vender cualquier producto de menopausia."},
{k:"hormonal",l:"R",t:"Con tamoxifeno o inhibidores de la aromatasa pueden restar eficacia al tratamiento. NO VENDER."},
{k:"tiroides",l:"R",t:"Reducen la absorción de la levotiroxina. Separar 4 h y avisar al endocrino."},
{k:"tiroidec",l:"A",t:"Efecto bociógeno leve, sobre todo con déficit de yodo."},
{k:"anticoag",l:"A",t:"Posible interferencia con la warfarina."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."}]},

{id:"trebol-rojo",n:"Trébol rojo",s:"Trifolium pratense",a:["trebol rojo","trifolium"],c:"Planta",u:"Sofocos, menopausia",d:"Habitual 40–80 mg/día de isoflavonas.",ev:"media",al:[],r:[
{k:"hormonodep",l:"R",t:"Fitoestrógeno potente: contraindicado en tumores hormonodependientes y endometriosis."},
{k:"hormonal",l:"R",t:"Interfiere con tamoxifeno y terapia hormonal. No vender."},
{k:"anticoag",l:"R",t:"Contiene cumarinas: potencia el Sintrom."},
{k:"emb",l:"R",t:"Contraindicado."}]},

{id:"cimicifuga",n:"Cimicífuga",s:"Cimicifuga racemosa",a:["cimicifuga","black cohosh","actaea"],c:"Planta",u:"Sofocos de menopausia",d:"Habitual 40 mg/día de extracto. No más de 6 meses seguidos.",ev:"alta",al:[],r:[
{k:"hepatica",l:"R",t:"La EMA obliga a incluir advertencia de hepatotoxicidad: hay casos de hepatitis y fallo hepático. No vender en hepatopatía. Suspender ante ictericia, orina oscura o cansancio intenso."},
{k:"hormonodep",l:"R",t:"Contraindicada en cáncer de mama y tumores hormonodependientes sin autorización de su oncólogo."},
{k:"hormonal",l:"A",t:"Posible interferencia con tamoxifeno. Derivar."},
{k:"emb",l:"R",t:"Contraindicada en embarazo y lactancia."}]},

{id:"agnocasto",n:"Agnocasto / Sauzgatillo",s:"Vitex agnus-castus",a:["agnocasto","sauzgatillo","vitex"],c:"Planta",u:"Síndrome premenstrual, ciclos irregulares, mastalgia",d:"Habitual 20–40 mg/día de extracto.",ev:"media",al:[],r:[
{k:"hormonal",l:"R",t:"Actúa sobre la prolactina y el eje hormonal: puede reducir el efecto de los anticonceptivos y descontrolar la terapia hormonal. Derivar."},
{k:"hormonodep",l:"R",t:"Contraindicado en tumores hormonodependientes."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia (reduce la prolactina y por tanto la leche)."},
{k:"lact",l:"R",t:"Reduce la producción de leche."},
{k:"psiq",l:"R",t:"Es dopaminérgico: interfiere con antipsicóticos y con fármacos para el Parkinson."},
{k:"fiv",l:"R",t:"No usar durante tratamientos de fertilidad sin autorización."}]},

{id:"dong-quai",n:"Dong Quai / Angélica china",s:"Angelica sinensis",a:["dong quai","angelica china"],c:"Planta",u:"Menopausia, ciclo menstrual",d:"Habitual 500–1.500 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Contiene cumarinas: potencia mucho el Sintrom. Hay casos de hemorragia. NO VENDER."},
{k:"emb",l:"R",t:"CONTRAINDICADA: uterotónica y abortiva."},
{k:"hormonodep",l:"R",t:"Fitoestrógeno: contraindicada en tumores hormonodependientes."},
{k:"sol",l:"A",t:"Fotosensibilizante: evitar sol intenso."}]},

{id:"damiana",n:"Damiana",s:"Turnera diffusa",a:["damiana","turnera"],c:"Planta",u:"Libido, ánimo",d:"Infusión o extracto.",ev:"baja",al:[],r:[
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"emb",l:"R",t:"Evitar."},
{k:"hepatica",l:"A",t:"Prudencia a dosis altas."}]},

{id:"reishi",n:"Reishi",s:"Ganoderma lucidum",a:["reishi","ganoderma"],c:"Hongos",u:"Defensas, estrés, descanso",d:"Habitual 1–3 g/día de extracto.",ev:"media",al:["hongos"],r:[
{k:"anticoag",l:"R",t:"Efecto antiagregante: riesgo de sangrado con Sintrom, AAS o clopidogrel."},
{k:"inmuno",l:"R",t:"Inmunomodulador: puede antagonizar inmunosupresores. No vender a trasplantados."},
{k:"autoinmune",l:"A",t:"Prudencia en enfermedad autoinmune."},
{k:"cardio",l:"A",t:"Puede bajar la tensión. Suma con antihipertensivos."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes de cirugía."},
{k:"emb",l:"R",t:"Datos limitados. Evitar."}]},

{id:"melena-leon",n:"Melena de león",s:"Hericium erinaceus",a:["melena de leon","hericium","lions mane"],c:"Hongos",u:"Memoria, sistema nervioso, digestivo",d:"Habitual 1–3 g/día de extracto.",ev:"media",al:["hongos"],r:[
{k:"alergia_hongos",l:"R",t:"Contraindicado en alergia a hongos. Hay casos de dermatitis y neumonitis."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante leve."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"emb",l:"A",t:"Datos limitados."}]},

{id:"cordyceps",n:"Cordyceps",s:"Cordyceps militaris / sinensis",a:["cordyceps"],c:"Hongos",u:"Energía, rendimiento, respiratorio",d:"Habitual 1–3 g/día.",ev:"media",al:["hongos"],r:[
{k:"autoinmune",l:"R",t:"Inmunoestimulante: prudencia alta en autoinmunidad."},
{k:"inmuno",l:"R",t:"Antagoniza inmunosupresores. No vender a trasplantados."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"hormonodep",l:"A",t:"Actividad hormonal descrita. Prudencia."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"maitake-shiitake",n:"Maitake / Shiitake",s:"Grifola frondosa / Lentinula edodes",a:["maitake","shiitake","grifola","lentinula"],c:"Hongos",u:"Defensas, glucemia, colesterol",d:"Habitual 1–3 g/día.",ev:"media",al:["hongos"],r:[
{k:"antidiab",l:"R",t:"El maitake baja la glucemia: riesgo con insulina y antidiabéticos."},
{k:"autoinmune",l:"A",t:"Inmunoestimulantes: prudencia."},
{k:"inmuno",l:"A",t:"Prudencia con inmunosupresores."},
{k:"piel",l:"A",t:"El shiitake crudo o a dosis altas puede provocar dermatitis flagelada (erupción en latigazos). Es benigna pero alarma mucho."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."}]},

{id:"chaga",n:"Chaga",s:"Inonotus obliquus",a:["chaga","inonotus"],c:"Hongos",u:"Antioxidante, defensas",d:"Habitual 1–2 g/día.",ev:"baja",al:["hongos"],r:[
{k:"renal",l:"R",t:"MUY rico en oxalatos: hay casos de fracaso renal por nefropatía oxálica. CONTRAINDICADO en insuficiencia renal y litiasis."},
{k:"anticoag",l:"R",t:"Efecto antiagregante. Prudencia con Sintrom."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"autoinmune",l:"A",t:"Inmunoestimulante."}]},

{id:"probioticos",n:"Probióticos (general)",s:"Lactobacillus, Bifidobacterium",a:["probiotico","probioticos","lactobacillus","bifidobacterium","flora intestinal"],c:"Probióticos",u:"Flora intestinal, tras antibióticos, digestión",d:"Habitual 1.000–50.000 millones UFC/día.",ev:"alta",al:["lacteos","soja"],r:[
{k:"inmuno",l:"R",t:"En inmunodeprimidos graves, trasplantados, quimio con neutropenia o portadores de catéter venoso central hay riesgo de bacteriemia. NO VENDER sin autorización médica."},
{k:"quimio",l:"R",t:"En neutropenia por quimioterapia, contraindicados sin visto bueno oncológico."},
{k:"digestivo",l:"A",t:"En pancreatitis aguda grave están contraindicados. En SIBO pueden empeorar los síntomas."},
{k:"antibiot",l:"A",t:"Separar 2-3 h del antibiótico para que no lo destruya."},
{k:"alergia_lacteos",l:"A",t:"Muchos llevan trazas de leche en el excipiente. Comprueba la ficha."}]},

{id:"boulardii",n:"Saccharomyces boulardii",s:"",a:["boulardii","saccharomyces","levadura probiotica"],c:"Probióticos",u:"Diarrea del viajero, diarrea por antibióticos",d:"Habitual 250–500 mg/día.",ev:"alta",al:["levadura"],r:[
{k:"inmuno",l:"R",t:"CONTRAINDICADO en inmunodeprimidos y portadores de catéter central: hay casos documentados de fungemia mortal. NO VENDER."},
{k:"quimio",l:"R",t:"Contraindicado durante quimioterapia con neutropenia."},
{k:"antifungico",l:"A",t:"Los antifúngicos orales lo destruyen. Separar."},
{k:"alergia_levadura",l:"R",t:"Contraindicado en alergia a levaduras."}]},

{id:"prebioticos",n:"Prebióticos (inulina, FOS, GOS)",s:"",a:["inulina","fos","gos","prebiotico","achicoria"],c:"Probióticos",u:"Alimento para la flora, tránsito",d:"Habitual 3–10 g/día, subiendo poco a poco.",ev:"alta",al:[],r:[
{k:"digestivo",l:"A",t:"Son FODMAP: empeoran claramente los gases y el dolor en colon irritable y SIBO. Empezar muy despacio o evitar."},
{k:"fructosa",l:"A",t:"Evitar en intolerancia a la fructosa."}]},

{id:"enzimas",n:"Enzimas digestivas",s:"Proteasa, lipasa, amilasa, lactasa",a:["enzimas digestivas","lactasa","bromelina","papaina"],c:"Probióticos",u:"Digestiones pesadas, intolerancias",d:"Con las comidas.",ev:"media",al:["pina","papaya","porcino","hongos"],r:[
{k:"alergia_latex",l:"A",t:"La bromelina (piña) y la papaína (papaya) dan reacción cruzada con el látex."},
{k:"anticoag",l:"A",t:"La bromelina tiene efecto antiagregante. Prudencia con Sintrom."},
{k:"digestivo",l:"A",t:"Contraindicadas en úlcera activa y pancreatitis aguda."},
{k:"religioso",l:"A",t:"Algunas son de origen porcino (pancreatina). Relevante para halal y kosher."}]},

{id:"betaina-hcl",n:"Betaína HCl",s:"",a:["betaina hcl","clorhidrato de betaina"],c:"Probióticos",u:"Hipoclorhidria, digestiones pesadas",d:"Con las comidas proteicas.",ev:"baja",al:[],r:[
{k:"digestivo",l:"R",t:"CONTRAINDICADA en úlcera gástrica o duodenal, gastritis y reflujo: aporta ácido directamente."},
{k:"ibp",l:"R",t:"Contradice el tratamiento con omeprazol o antiácidos. No vender a quien los tome."},
{k:"medicacion_general",l:"A",t:"Con AINE y corticoides aumenta el riesgo de lesión gástrica."}]},

{id:"carbon",n:"Carbón activado",s:"",a:["carbon activado","carbon vegetal"],c:"Probióticos",u:"Gases, hinchazón",d:"Uso puntual.",ev:"media",al:[],r:[
{k:"medicacion_general",l:"R",t:"ADSORBE PRÁCTICAMENTE CUALQUIER FÁRMACO y lo anula. Separar MÍNIMO 2 horas de cualquier medicamento, incluidos anticonceptivos. Es una interacción que se olvida mucho."},
{k:"hormonal",l:"R",t:"Puede reducir la eficacia de los anticonceptivos orales. Separar 2-3 h."},
{k:"digestivo",l:"A",t:"Contraindicado en obstrucción intestinal. Tiñe las heces de negro."}]}

]);
