// Propuesta de apertura de CN Holística — 42 referencias.
// prop:true = todavía es una propuesta y el PVP no está fijado, así que no se muestra precio.
window.PROD = (window.PROD || []).concat([

/* ─── LAMBERTS ─────────────────────────────────────────────── */
{id:"lb-vitc",n:"Vitamina C 1.000 mg",m:"Lamberts",f:"60 tabletas",ref:"LB_8134-60",prop:true,img:"",
 u:"Defensas, antioxidante, colágeno, absorción de hierro",
 comp:"Vitamina C 1.000 mg por tableta",
 ing:["vit-c"],
 x:[{k:"renal",l:"R",t:"1.000 mg por tableta es dosis alta: aumenta el oxalato urinario. CONTRAINDICADA en litiasis renal por oxalato cálcico e insuficiencia renal."},
    {k:"hemocromatosis",l:"R",t:"A esta dosis aumenta mucho la absorción de hierro. No vender en hemocromatosis ni talasemia."}]},

{id:"lb-omega3",n:"Omega 3 Ultra — aceite de pescado puro",m:"Lamberts",f:"60 cápsulas",ref:"LB_8506-60",prop:true,img:"",
 u:"Corazón, triglicéridos, inflamación, cerebro",
 comp:"Aceite de pescado de alta concentración en EPA y DHA",
 ing:["omega3"],
 x:[{k:"anticoag",l:"R",t:"Es una fórmula 'ultra', de dosis alta. Con Sintrom o antiagregantes, no vender sin visto bueno médico."}]},

{id:"lb-magasorb-180",n:"MagAsorb 150 mg",m:"Lamberts",f:"180 cápsulas",ref:"LB_8239-180",prop:true,img:"",
 u:"Calambres, músculo, cansancio, descanso",
 comp:"Citrato de magnesio, 150 mg de magnesio elemento por cápsula",
 ing:["magnesio"],x:[]},

{id:"lb-magasorb-60",n:"MagAsorb 150 mg",m:"Lamberts",f:"60 tabletas",ref:"LB_8239-60",prop:true,img:"",
 u:"Calambres, músculo, cansancio, descanso",
 comp:"Citrato de magnesio, 150 mg de magnesio elemento por tableta",
 ing:["magnesio"],x:[]},

{id:"lb-zinc",n:"Zinc 25 mg (citrato)",m:"Lamberts",f:"120 tabletas",ref:"LB_8286-120",prop:true,img:"",
 u:"Defensas, piel, acné, fertilidad masculina",
 comp:"Zinc 25 mg como citrato por tableta",
 ing:["zinc"],
 x:[{k:"cobre",l:"A",t:"25 mg al día durante meses agota el cobre. Si el cliente lo va a tomar de forma continuada más de 2-3 meses, que lleve cobre o que descanse."}]},

{id:"lb-b50",n:"Complejo de Vitaminas B-50",m:"Lamberts",f:"60 tabletas",ref:"LB_8029-60",prop:true,img:"",
 u:"Energía, sistema nervioso, estrés",
 comp:"Fórmula B-50 clásica: 50 mg de B1, B2, B3, B5 y B6 por tableta, más B12, biotina y folato",
 ing:["vit-b1","vit-b2","vit-b3","vit-b5","vit-b6","vit-b7","folato","vit-b12","colina","inositol","paba"],
 x:[{k:"_destacado",l:"R",t:"★ EL PRODUCTO CON MÁS B6 DE TODO TU LINEAL. Una fórmula B-50 lleva 50 mg de vitamina B6 por tableta y el límite de la EFSA son 12 mg al día. Es más de cuatro veces el tope. No es para tomar a diario de forma indefinida: ciclos cortos y nunca junto a otro producto con B6. Si el cliente refiere hormigueo en manos o pies, que lo suspenda y vaya al médico."},
    {k:"analitica",l:"A",t:"Lleva biotina: puede alterar las analíticas de tiroides. Suspender 3 días antes de un análisis."},
    {k:"antibiot",l:"R",t:"Si la fórmula lleva PABA, antagoniza las sulfamidas. Comprueba la etiqueta si está con ese antibiótico."}]},

{id:"lb-methylb",n:"Methyl B Complex",m:"Lamberts",f:"60 cápsulas",ref:"LB_8027-60",prop:true,img:"",
 u:"Energía, sistema nervioso, homocisteína, veganos y mayores",
 comp:"Complejo B en formas metiladas (metilcobalamina, 5-MTHF, P5P). Confirmar cantidades exactas en la etiqueta.",
 ing:["vit-b6","folato","vit-b12","vit-b2"],pend:true,
 x:[{k:"_destacado",l:"A",t:"Es la versión metilada, mejor tolerada que la B-50 y con dosis de B6 normalmente mucho más bajas. Aun así, confirma en la etiqueta los mg de B6 antes de combinarlo con cualquier otro complejo B."}]},

{id:"lb-creatina",n:"Monohidrato de creatina en polvo",m:"Lamberts",f:"250 g",ref:"LB_8336-250",prop:true,img:"",
 u:"Fuerza, masa muscular, rendimiento, también cognición en mayores",
 comp:"Creatina monohidrato",
 ing:["creatina"],
 x:[{k:"analitica",l:"A",t:"La creatina eleva la creatinina en analítica SIN que haya daño renal. Si al cliente le sale alta y se asusta, es esto. Que se lo diga a su médico."}]},

{id:"lb-multiguard-sport",n:"Multi-guard Sport",m:"Lamberts",f:"60 tabletas",ref:"LB_7023",prop:true,img:"",
 u:"Multivitamínico para personas activas y deportistas",
 comp:"Multivitamínico y multimineral con dosis altas del grupo B. Confirmar cantidades en la etiqueta.",
 ing:["multi","vit-b6","vit-b3","vit-b7","zinc","magnesio","vit-c","vit-e","selenio","cromo"],pend:true,
 x:[{k:"_destacado",l:"A",t:"Los multis deportivos suelen llevar el grupo B a dosis altas. Antes de venderlo junto a un B-50 o a cualquier otro complejo B, suma la vitamina B6 de los dos."}]},

{id:"lb-pea-protein",n:"PEA Protein (proteína de guisante)",m:"Lamberts",f:"360 g",ref:"LB_8333-360",prop:true,img:"",
 u:"Aporte proteico vegetal, deporte, dietas veganas",
 comp:"Proteína aislada de guisante",
 ing:["proteina-vegetal"],
 x:[{k:"_destacado",l:"A",t:"OJO CON EL NOMBRE: aquí 'PEA' es guisante en inglés, no la palmitoiletanolamida que se usa para el dolor. Son cosas completamente distintas y el nombre confunde."},
    {k:"alergia_frutossecos",l:"A",t:"El guisante es una legumbre: puede haber reacción cruzada en alérgicos a cacahuete o altramuz."}]},

/* ─── NATRULY ──────────────────────────────────────────────── */
{id:"nat-crema-cacao",n:"Crema de cacao y avellanas",m:"Natruly",f:"285 g",ref:"NAT_0928",prop:true,img:"",
 u:"Untable, desayuno, alternativa saludable a la crema de cacao",
 comp:"Cacao y avellanas",ing:["cacao","frutos-secos-crema"],x:[]},

{id:"nat-prot-vainilla",n:"Proteína vegana sabor vainilla",m:"Natruly",f:"350 g",ref:"NAT_0195",prop:true,img:"",
 u:"Aporte proteico vegetal, deporte, dieta vegana",
 comp:"Proteína vegetal con sabor a vainilla",ing:["proteina-vegetal"],x:[]},

{id:"nat-prot-choco",n:"Proteína vegana sabor chocolate",m:"Natruly",f:"350 g",ref:"NAT_0454",prop:true,img:"",
 u:"Aporte proteico vegetal, deporte, dieta vegana",
 comp:"Proteína vegetal con cacao",ing:["proteina-vegetal","cacao"],x:[]},

{id:"nat-cookies-canela",n:"Cookies de canela",m:"Natruly",f:"125 g",ref:"NAT_1789",prop:true,img:"",
 u:"Snack, merienda",comp:"Galletas con canela",ing:["canela"],x:[]},

{id:"nat-cookies-cacao",n:"Cookies de cacao",m:"Natruly",f:"125 g",ref:"NAT_1772",prop:true,img:"",
 u:"Snack, merienda",comp:"Galletas con cacao",ing:["cacao"],x:[]},

{id:"nat-galletas-cacao-naranja",n:"Galletas de cacao y naranja BIO",m:"Natruly",f:"125 g",ref:"NAT_1796",prop:true,img:"",
 u:"Snack, merienda",comp:"Galletas ecológicas de cacao y naranja",ing:["cacao"],x:[]},

{id:"nat-crema-cacahuete",n:"Crema de cacahuete",m:"Natruly",f:"500 g",ref:"NAT_0119",prop:true,img:"",
 u:"Untable, aporte proteico y calórico, deporte",
 comp:"Cacahuete 100%",ing:["frutos-secos-crema"],x:[]},

/* ─── OLEANDER ─────────────────────────────────────────────── */
{id:"ol-harina-almendra",n:"Harina de almendra cruda repelada BIO",m:"Oleander",f:"500 g",ref:"OL_037040",prop:true,img:"",
 u:"Repostería sin gluten, dietas bajas en hidratos",
 comp:"Almendra cruda molida, ecológica",ing:["harina-almendra"],x:[]},

{id:"ol-crema-almendra-blanca",n:"Crema de almendra blanca sin piel BIO",m:"Oleander",f:"210 g",ref:"OL_039504",prop:true,img:"",
 u:"Untable, repostería",comp:"Almendra sin piel 100%, ecológica",ing:["frutos-secos-crema"],x:[]},

{id:"ol-crema-almendra-crunchy",n:"Crema de almendra tostada crunchy",m:"Oleander",f:"210 g",ref:"OL_049604",prop:true,img:"",
 u:"Untable, repostería",comp:"Almendra tostada",ing:["frutos-secos-crema"],x:[]},

{id:"ol-crema-pistacho",n:"Crema de pistacho tostado",m:"Oleander",f:"210 g",ref:"OL_206104",prop:true,img:"",
 u:"Untable, repostería, producto de capricho",
 comp:"Pistacho tostado",ing:["frutos-secos-crema"],x:[]},

{id:"ol-tahin-400",n:"Tahín blanco sin sal",m:"Oleander",f:"400 g",ref:"OL_305006",prop:true,img:"",
 u:"Untable, hummus, calcio, cocina de Oriente Medio",
 comp:"Sésamo blanco 100%",ing:["sesamo"],x:[]},

{id:"ol-tahin-210",n:"Tahín blanco sin sal",m:"Oleander",f:"210 g",ref:"OL_305004",prop:true,img:"",
 u:"Untable, hummus, calcio",comp:"Sésamo blanco 100%",ing:["sesamo"],x:[]},

{id:"ol-macadamia",n:"Nueces de macadamia BIO",m:"Oleander",f:"100 g",ref:"OL_230007",prop:true,img:"",
 u:"Snack, grasas saludables",comp:"Macadamia ecológica",ing:["frutos-secos-crema"],x:[]},

/* ─── BIONATURE BRANDS · coloración e higiene ──────────────── */
{id:"cult-515",n:"Tinte orgánico castaño",m:"Bionature",f:"Coloración capilar",ref:"CULT_515",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],x:[]},
{id:"cult-506",n:"Tinte orgánico castaño dorado claro",m:"Bionature",f:"Coloración capilar",ref:"CULT_506",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],x:[]},
{id:"cult-516",n:"Tinte orgánico castaño oscuro",m:"Bionature",f:"Coloración capilar",ref:"CULT_516",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],x:[]},
{id:"cult-517",n:"Tinte orgánico negro",m:"Bionature",f:"Coloración capilar",ref:"CULT_517",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],
 x:[{k:"piel",l:"R",t:"Los tonos negros son los que más PPD suelen llevar y los que más reacciones dan. Insiste especialmente en la prueba de 48 horas con este."}]},
{id:"cult-505",n:"Tinte orgánico caramelo",m:"Bionature",f:"Coloración capilar",ref:"CULT_505",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],x:[]},
{id:"cult-508",n:"Tinte orgánico castaño dorado oscuro",m:"Bionature",f:"Coloración capilar",ref:"CULT_508",prop:true,img:"",
 u:"Coloración del cabello",comp:"Tinte de formulación orgánica",ing:["tinte-capilar"],x:[]},

{id:"freak-hilo-dental",n:"Varillas de hilo dental",m:"Freak",f:"Higiene oral",ref:"FREAK_9014701",prop:true,img:"",
 u:"Higiene interdental",comp:"Varillas de hilo dental",ing:[],
 x:[{k:"_destacado",l:"V",t:"Sin ninguna precaución sanitaria. Producto de venta libre para cualquiera."}]},

/* ─── MIELES COMO UNA REINA ────────────────────────────────── */
{id:"reina-miel-600",n:"Miel de aguacate premium",m:"Como una Reina",f:"600 g",ref:"REINA_AGUA-01",prop:true,img:"",
 u:"Endulzante, garganta, desayuno",comp:"Miel monofloral de aguacate",ing:["miel"],x:[]},
{id:"reina-miel-1000",n:"Miel de aguacate",m:"Como una Reina",f:"1.000 g",ref:"REINA_AGUA-02",prop:true,img:"",
 u:"Endulzante, garganta, desayuno",comp:"Miel monofloral de aguacate",ing:["miel"],x:[]},
{id:"reina-caramelos-jengibre",n:"Caramelos salud de jengibre y limón",m:"Como una Reina",f:"Bolsa",ref:"REINA_LAVV-01",prop:true,img:"",
 u:"Garganta, náuseas de viaje, digestión",comp:"Caramelos con jengibre y limón",ing:["caramelos-funcionales","jengibre"],x:[]},
{id:"reina-caramelos-propoleo",n:"Caramelos salud de miel, romero y propóleo",m:"Como una Reina",f:"Bolsa",ref:"REINA_LAVV-02",prop:true,img:"",
 u:"Garganta, defensas",comp:"Caramelos con miel, romero y propóleo",ing:["caramelos-funcionales","propoleo","miel"],x:[]},
{id:"reina-caramelos-relax",n:"Caramelos salud de hierbas relajantes",m:"Como una Reina",f:"Bolsa",ref:"REINA_LAVV-03",prop:true,img:"",
 u:"Relajación, garganta",comp:"Caramelos con mezcla de hierbas relajantes. Confirmar qué plantas lleva.",
 ing:["caramelos-funcionales"],pend:true,
 x:[{k:"_destacado",l:"A",t:"Pide a tu proveedor la lista de plantas: si lleva melisa, pasiflora o valeriana cambian las advertencias para quien conduzca o tome ansiolíticos."}]},

/* ─── TREE NATURAL BARS ────────────────────────────────────── */
{id:"tree-mix",n:"Caja 10 barritas de proteína — mix de sabores",m:"Tree",f:"Caja de 10",ref:"TREE_MIX10",prop:true,img:"",
 u:"Snack proteico, deporte, saciedad",comp:"Barritas de proteína, sabores surtidos",ing:["barritas-proteicas"],x:[]},
{id:"tree-pistacho",n:"Caja 10 barritas de proteína — crunchy pistacho",m:"Tree",f:"Caja de 10",ref:"TREE_CP10",prop:true,img:"",
 u:"Snack proteico, deporte",comp:"Barritas de proteína con pistacho",ing:["barritas-proteicas","frutos-secos-crema"],x:[]},
{id:"tree-camino",n:"Caja 10 barritas de proteína — Del Camino",m:"Tree",f:"Caja de 10",ref:"TREE_BC10",prop:true,img:"",
 u:"Snack proteico, deporte, senderismo",comp:"Barritas de proteína",ing:["barritas-proteicas"],x:[]},
{id:"tree-cacao",n:"Caja 10 barritas de proteína — original cacao",m:"Tree",f:"Caja de 10",ref:"TREE_OC10",prop:true,img:"",
 u:"Snack proteico, deporte",comp:"Barritas de proteína con cacao",ing:["barritas-proteicas","cacao"],x:[]},
{id:"tree-mango",n:"Caja 10 barritas de proteína — Delicious Mango",m:"Tree",f:"Caja de 10",ref:"TREE_DM10",prop:true,img:"",
 u:"Snack proteico, deporte",comp:"Barritas de proteína con mango",ing:["barritas-proteicas"],x:[]},

/* ─── NATURALIDER ──────────────────────────────────────────── */
{id:"nl-allergolider",n:"Allergolider (Ventolider)",m:"Naturalider",f:"60 cápsulas",ref:"NL_000184",prop:true,img:"",
 u:"Alergias respiratorias, rinitis, vías altas",
 comp:"Fórmula para alergias. No tengo la composición: hay que pedirla al proveedor.",
 ing:["quercetina"],pend:true,
 x:[{k:"_destacado",l:"A",t:"Ficha incompleta a propósito: no tengo la composición de esta referencia. Pídesela a Naturalider antes de ponerla a la venta, porque las fórmulas antialérgicas suelen llevar quercetina, perilla o plantas que interaccionan con antihistamínicos y con la ciclosporina."},
    {k:"emb",l:"A",t:"Mientras no confirmes la composición, no la vendas en embarazo."}]}

]);
