// Bloque 7 — Huecos detectados: plantas clásicas que faltaban, alimentación y cosmética
window.DB = (window.DB || []).concat([

{id:"ginkgo",n:"Ginkgo biloba",s:"Ginkgo biloba",a:["ginkgo","gingko","biloba"],c:"Planta",u:"Memoria, circulación cerebral, mareos, acúfenos",d:"Habitual 120–240 mg/día de extracto estandarizado (24% flavonoides).",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"★ Una de las plantas con más interacciones documentadas del herbolario, junto con el hipérico. Inhibe la agregación plaquetaria (factor activador de plaquetas) y hay hemorragias cerebrales descritas. Si toma algo que afecte a la sangre, no se lo vendas."},
{k:"anticoag",l:"R",t:"Riesgo real de hemorragia con Sintrom, aspirina, clopidogrel y anticoagulantes nuevos. Hay casos de hematoma subdural y hemorragia cerebral. NO VENDER."},
{k:"epilepsia",l:"R",t:"Baja el umbral convulsivo y hay casos de crisis. Contraindicado en epilepsia y con antiepilépticos."},
{k:"antiepil",l:"R",t:"Reduce la eficacia de valproato y fenitoína. No vender."},
{k:"cirugia",l:"R",t:"Suspender al menos 2 semanas antes de cualquier cirugía o extracción dental."},
{k:"antidiab",l:"A",t:"Puede alterar la glucemia en ambos sentidos. Vigilar controles."},
{k:"antidep",l:"A",t:"Con IMAO e ISRS, prudencia."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia."},
{k:"medicacion_general",l:"A",t:"Modifica varias enzimas hepáticas. Con medicación crónica, deriva al farmacéutico."}]},

{id:"bacopa",n:"Bacopa",s:"Bacopa monnieri",a:["bacopa","brahmi"],c:"Planta",u:"Memoria, concentración, estudio",d:"Habitual 300 mg/día de extracto (50% bacósidos). Tarda 8-12 semanas en notarse.",ev:"media",al:[],r:[
{k:"tiroidec",l:"R",t:"Aumenta la T4. Puede descontrolar un tiroides ya alterado."},
{k:"tiroides",l:"R",t:"Interfiere con la levotiroxina. Derivar."},
{k:"sedantes",l:"A",t:"Suma sedación con ansiolíticos."},
{k:"digestivo",l:"A",t:"Molestias gástricas frecuentes si se toma en ayunas. Mejor con comida."},
{k:"cardio",l:"A",t:"Efecto bradicardizante leve: prudencia con betabloqueantes."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"astragalo",n:"Astrágalo",s:"Astragalus membranaceus",a:["astragalo","astragalus","huang qi"],c:"Planta",u:"Defensas, energía, convalecencia",d:"Habitual 500–1.000 mg/día.",ev:"media",al:[],r:[
{k:"autoinmune",l:"R",t:"Inmunoestimulante: contraindicado en lupus, artritis reumatoide y esclerosis múltiple."},
{k:"inmuno",l:"R",t:"Antagoniza inmunosupresores. No vender a trasplantados."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"cardio",l:"A",t:"Puede bajar la tensión y actuar como diurético. Prudencia con litio."},
{k:"emb",l:"R",t:"Datos limitados. Evitar."}]},

{id:"andrographis",n:"Andrographis",s:"Andrographis paniculata",a:["andrographis","kalmegh"],c:"Planta",u:"Resfriados, defensas, garganta",d:"Habitual 400–1.200 mg/día. Uso corto.",ev:"media",al:[],r:[
{k:"autoinmune",l:"R",t:"Inmunoestimulante: contraindicado en autoinmunidad."},
{k:"inmuno",l:"R",t:"Antagoniza inmunosupresores."},
{k:"anticoag",l:"R",t:"Efecto antiagregante: prudencia alta con Sintrom y AAS."},
{k:"emb",l:"R",t:"CONTRAINDICADO: abortivo en estudios animales."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."},
{k:"hepatica",l:"A",t:"Casos aislados de hepatotoxicidad y de reacciones alérgicas graves."},
{k:"fiv",l:"R",t:"Evitar si busca embarazo: efecto antifertilidad descrito."}]},

{id:"azafran",n:"Azafrán",s:"Crocus sativus",a:["azafran","crocus","safranal"],c:"Planta",u:"Estado de ánimo, apetito, vista",d:"Habitual 28–30 mg/día de extracto estandarizado.",ev:"media",al:[],r:[
{k:"antidep",l:"R",t:"Actividad serotoninérgica: riesgo de sumarse a ISRS. Que lo autorice su médico."},
{k:"emb",l:"R",t:"CONTRAINDICADO: a dosis altas es abortivo y uterotónico."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"psiq",l:"A",t:"Puede desencadenar agitación en trastorno bipolar."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."}]},

{id:"mucuna",n:"Mucuna pruriens",s:"Mucuna pruriens",a:["mucuna","l-dopa","levodopa vegetal"],c:"Planta",u:"Ánimo, libido, Parkinson",d:"Aporta L-dopa natural. Habitual 300–800 mg/día de extracto.",ev:"media",al:[],r:[
{k:"parkinson",l:"R",t:"Contiene L-dopa: se suma a la levodopa del tratamiento y puede provocar discinesias. NO VENDER sin neurólogo."},
{k:"antidep",l:"R",t:"Con IMAO: crisis hipertensiva. Contraindicada."},
{k:"psiq",l:"R",t:"Contraindicada con antipsicóticos y en trastorno bipolar."},
{k:"cardio",l:"A",t:"Puede bajar la tensión y alterar el ritmo."},
{k:"emb",l:"R",t:"Contraindicada."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."}]},

{id:"schisandra",n:"Schisandra",s:"Schisandra chinensis",a:["schisandra","esquisandra"],c:"Planta",u:"Adaptógeno, hígado, resistencia",d:"Habitual 500–1.500 mg/día.",ev:"media",al:[],r:[
{k:"medicacion_general",l:"R",t:"Induce el CYP3A4: acelera la eliminación de muchos fármacos y les resta efecto. Con medicación crónica, deriva."},
{k:"inmuno",l:"R",t:"Altera los niveles de tacrolimus. No vender a trasplantados."},
{k:"emb",l:"R",t:"CONTRAINDICADA: uterotónica."},
{k:"epilepsia",l:"A",t:"Prudencia: puede bajar el umbral convulsivo."},
{k:"digestivo",l:"A",t:"Contraindicada en úlcera y reflujo."}]},

{id:"picnogenol",n:"Picnogenol / Extracto de pino marítimo",s:"Pinus pinaster",a:["picnogenol","pino maritimo","opc"],c:"Otros",u:"Circulación, piel, antioxidante",d:"Habitual 50–200 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto antiagregante: riesgo de sangrado con Sintrom y AAS."},
{k:"autoinmune",l:"A",t:"Inmunoestimulante: prudencia."},
{k:"inmuno",l:"A",t:"Prudencia con inmunosupresores."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"mirtilo",n:"Arándano azul / Mirtilo",s:"Vaccinium myrtillus",a:["arandano azul","mirtilo","bilberry","antocianos"],c:"Planta",u:"Vista, fatiga visual, circulación",d:"Habitual 80–160 mg/día de antocianósidos.",ev:"media",al:[],r:[
{k:"anticoag",l:"A",t:"Efecto antiagregante leve a dosis altas. Prudencia con Sintrom."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes."}]},

{id:"grosellero",n:"Grosellero negro",s:"Ribes nigrum",a:["grosellero negro","ribes nigrum","casis"],c:"Planta",u:"Alergias, articulaciones, antiinflamatorio suave",d:"Habitual según preparado (yemas, extracto).",ev:"baja",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"cardio",l:"A",t:"Efecto diurético: prudencia con diuréticos y litio."},
{k:"emb",l:"A",t:"Datos limitados. Consultar."}]},

{id:"ulmaria",n:"Ulmaria / Reina de los prados",s:"Filipendula ulmaria",a:["ulmaria","reina de los prados","filipendula"],c:"Planta",u:"Dolor, retención de líquidos, articulaciones",d:"Infusión o extracto.",ev:"media",al:["aspirina","salicilatos"],r:[
{k:"alergia_aspirina",l:"R",t:"Rica en salicilatos: contraindicada en alergia a la aspirina y en asma con poliposis."},
{k:"anticoag",l:"R",t:"Suma efecto antiagregante al Sintrom y a la aspirina."},
{k:"menor",l:"R",t:"No dar a menores de 16 años con proceso viral: riesgo de síndrome de Reye."},
{k:"digestivo",l:"R",t:"Contraindicada en úlcera péptica."},
{k:"asma",l:"A",t:"Puede desencadenar broncoespasmo en asmáticos sensibles a salicilatos."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"meliloto",n:"Meliloto",s:"Melilotus officinalis",a:["meliloto","trebol de olor"],c:"Planta",u:"Piernas pesadas, linfedema, circulación venosa",d:"Habitual según preparado estandarizado en cumarina.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Contiene cumarinas: potencia claramente el Sintrom. CONTRAINDICADO con anticoagulantes."},
{k:"hepatica",l:"R",t:"Hepatotóxico a dosis altas. No vender en hepatopatía."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"wild-yam",n:"Wild yam / Ñame silvestre",s:"Dioscorea villosa",a:["wild yam","name silvestre","dioscorea","diosgenina"],c:"Planta",u:"Menopausia, síndrome premenstrual",d:"Habitual 500–1.000 mg/día.",ev:"baja",al:[],r:[
{k:"hormonodep",l:"R",t:"Actividad estrogénica atribuida: evitar en tumores hormonodependientes y endometriosis."},
{k:"hormonal",l:"A",t:"Puede interferir con anticonceptivos y terapia hormonal."},
{k:"emb",l:"R",t:"Contraindicado."},
{k:"digestivo",l:"A",t:"Dosis altas dan náuseas y vómitos."}]},

{id:"pygeum",n:"Pygeum",s:"Prunus africana",a:["pygeum","ciruelo africano","prunus africana"],c:"Planta",u:"Próstata, hiperplasia benigna",d:"Habitual 100–200 mg/día.",ev:"media",al:[],r:[
{k:"prostata",l:"R",t:"Como el sabal: no sustituye el seguimiento urológico. Hay que descartar cáncer antes."},
{k:"digestivo",l:"A",t:"Molestias gástricas y diarrea frecuentes."},
{k:"emb",l:"R",t:"Producto masculino. No aplica."}]},

{id:"calabaza",n:"Semilla de calabaza",s:"Cucurbita pepo",a:["calabaza","semilla de calabaza","cucurbita"],c:"Planta",u:"Próstata, vejiga, zinc",d:"Aceite o extracto, 500–1.000 mg/día.",ev:"media",al:[],r:[
{k:"prostata",l:"A",t:"No sustituye el seguimiento urológico ni el PSA."},
{k:"cardio",l:"A",t:"Efecto diurético leve."}]},

{id:"espino-amarillo",n:"Espino amarillo / Omega 7",s:"Hippophae rhamnoides",a:["espino amarillo","omega 7","hippophae","palmitoleico"],c:"Ácidos grasos",u:"Mucosas secas, sequedad vaginal y ocular, piel",d:"Habitual 500–1.000 mg/día.",ev:"baja",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia con Sintrom."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."},
{k:"emb",l:"A",t:"Datos limitados."}]},

{id:"acerola",n:"Acerola / Rosa canina",s:"Malpighia glabra / Rosa canina",a:["acerola","rosa canina","escaramujo","vitamina c natural"],c:"Planta",u:"Vitamina C natural, defensas",d:"Aporta vitamina C. Suma con otros suplementos de vitamina C.",ev:"media",al:[],r:[
{k:"renal",l:"A",t:"Aporta vitamina C y oxalatos: prudencia en litiasis renal."},
{k:"hemocromatosis",l:"A",t:"La vitamina C aumenta la absorción de hierro. Prudencia en sobrecarga férrica."},
{k:"anticoag",l:"A",t:"La rosa canina puede interferir levemente con el Sintrom."}]},

{id:"llanten",n:"Llantén / Erísimo",s:"Plantago lanceolata / Sisymbrium officinale",a:["llanten","erisimo","hierba de los cantores"],c:"Planta",u:"Garganta, afonía, tos",d:"Infusión, jarabe o spray.",ev:"baja",al:[],r:[
{k:"tiroidec",l:"A",t:"El erísimo puede tener actividad tiroidea. Uso corto en patología tiroidea."},
{k:"emb",l:"A",t:"Uso corto y puntual. Consultar."},
{k:"medicacion_general",l:"A",t:"El mucílago del llantén puede retrasar la absorción de fármacos. Separar 1-2 h."}]},

{id:"levadura-cerveza",n:"Levadura de cerveza",s:"Saccharomyces cerevisiae",a:["levadura de cerveza","levadura nutricional"],c:"Superalimentos",u:"Vitaminas del grupo B, pelo y uñas, energía",d:"1–2 cucharadas/día.",ev:"media",al:["levadura","gluten"],r:[
{k:"alergia_levadura",l:"R",t:"Contraindicada en alergia a levaduras."},
{k:"digestivo",l:"R",t:"Contraindicada en enfermedad de Crohn: puede empeorar los brotes."},
{k:"antidep",l:"R",t:"Rica en tiramina: con IMAO puede provocar crisis hipertensiva."},
{k:"gota",l:"A",t:"Muy rica en purinas: evitar en gota e hiperuricemia."},
{k:"inmuno",l:"A",t:"Prudencia en inmunodeprimidos."}]},

{id:"lecitina",n:"Lecitina de soja o girasol",s:"",a:["lecitina","fosfatidilcolina"],c:"Superalimentos",u:"Colesterol, memoria, emulsionante",d:"Habitual 1.200–2.400 mg/día.",ev:"baja",al:["soja"],r:[
{k:"alergia_soja",l:"R",t:"Si es de soja, contraindicada en alergia a la soja. Existe versión de girasol."},
{k:"cardiop",l:"A",t:"Aporta colina y eleva el TMAO. Prudencia en cardiopatía establecida."},
{k:"hormonodep",l:"A",t:"La de soja puede aportar trazas de isoflavonas. Prudencia."}]},

{id:"avena",n:"Avena y beta-glucanos",s:"Avena sativa",a:["avena","beta glucanos","salvado de avena"],c:"Fibra",u:"Colesterol, saciedad, tránsito, glucemia",d:"3 g/día de beta-glucanos es la dosis con respaldo para el colesterol.",ev:"alta",al:["gluten"],r:[
{k:"alergia_gluten",l:"A",t:"La avena en sí no lleva gluten, pero casi siempre está contaminada. En celiaquía, solo avena certificada sin gluten."},
{k:"medicacion_general",l:"A",t:"La fibra puede reducir la absorción de fármacos. Separar 2 h."},
{k:"digestivo",l:"A",t:"Gases al principio. Subir la dosis poco a poco."},
{k:"antidiab",l:"A",t:"Ralentiza la absorción de azúcares: puede requerir ajuste de insulina."}]},

{id:"chia",n:"Semillas de chía",s:"Salvia hispanica",a:["chia","salvia hispanica"],c:"Fibra",u:"Fibra, omega-3 vegetal, saciedad",d:"1-2 cucharadas/día, siempre hidratadas y con agua abundante.",ev:"media",al:[],r:[
{k:"digestivo",l:"R",t:"Secas y con poca agua pueden provocar obstrucción esofágica. Hidratarlas siempre antes. Contraindicadas en estenosis y disfagia."},
{k:"anticoag",l:"A",t:"Aporta omega-3: efecto antiagregante leve a dosis altas."},
{k:"cardio",l:"A",t:"Puede bajar algo la tensión."},
{k:"medicacion_general",l:"A",t:"La fibra reduce la absorción de fármacos. Separar 2 h."}]},

{id:"aceite-coco",n:"Aceite de coco",s:"Cocos nucifera",a:["aceite de coco","coco"],c:"Ácidos grasos",u:"Cocina, piel, energía",d:"",ev:"media",al:["coco"],r:[
{k:"cardiop",l:"A",t:"Muy rico en grasa saturada: eleva el LDL. Ojo si te lo pide alguien con colesterol alto o cardiopatía: no es el 'aceite saludable' que se ha vendido."},
{k:"estatinas",l:"A",t:"Contradice el objetivo del tratamiento hipolipemiante. Explícalo."}]},

{id:"agar-kuzu",n:"Agar-agar y kuzu",s:"",a:["agar agar","kuzu","gelificante vegetal"],c:"Alimentación",u:"Gelificante, tránsito, digestivo",d:"",ev:"baja",al:[],r:[
{k:"digestivo",l:"R",t:"El agar-agar en seco y sin suficiente líquido puede provocar obstrucción. Siempre bien hidratado."},
{k:"medicacion_general",l:"A",t:"Separar 2 h de la medicación."}]},

{id:"bebidas-vegetales",n:"Bebidas vegetales (avena, almendra, soja, arroz)",s:"",a:["bebida vegetal","leche de avena","leche de almendras","bebida de soja"],c:"Bebidas",u:"Alternativa a la leche",d:"Busca las enriquecidas en calcio y B12 si sustituyen a la leche.",ev:"media",al:["frutossecos","soja","gluten"],r:[
{k:"alergia_frutossecos",l:"R",t:"Las de almendra, avellana o anacardo son frutos secos. Pregunta siempre."},
{k:"alergia_soja",l:"R",t:"La de soja está contraindicada en alergia a la soja."},
{k:"alergia_gluten",l:"A",t:"La de avena puede llevar gluten si no está certificada."},
{k:"menor",l:"R",t:"La bebida de arroz no debe darse a menores de 6 años: contenido en arsénico inorgánico (recomendación de AESAN). Ninguna bebida vegetal sustituye a la leche de fórmula en lactantes."},
{k:"hormonodep",l:"A",t:"La de soja aporta isoflavonas. Prudencia en tumores hormonodependientes."}]},

{id:"vitc-topica",n:"Vitamina C tópica",s:"Ácido ascórbico / derivados",a:["vitamina c topica","serum de vitamina c","ascorbico topico"],c:"Cosmética",u:"Manchas, luminosidad, antioxidante",d:"Habitual 10–20%. Por la mañana, bajo el protector solar.",ev:"media",al:[],r:[
{k:"piel",l:"A",t:"En concentración alta irrita en pieles sensibles. Empezar al 10%."},
{k:"sol",l:"A",t:"No fotosensibiliza, pero pierde eficacia sin protector solar. Insiste en el SPF."},
{k:"emb",l:"V",t:"Es de las pocas activas seguras en embarazo. Buena alternativa al retinol para embarazadas."}]},

{id:"niacinamida",n:"Niacinamida tópica",s:"",a:["niacinamida","nicotinamida topica"],c:"Cosmética",u:"Poros, rojeces, manchas, barrera cutánea",d:"Habitual 4–10%.",ev:"alta",al:[],r:[
{k:"piel",l:"A",t:"Por encima del 10% puede dar rubor e irritación. El 5% va bien para casi todo el mundo."},
{k:"emb",l:"V",t:"Segura en embarazo y lactancia. Es la alternativa fácil cuando te piden antiedad y están embarazadas."}]},

{id:"bakuchiol",n:"Bakuchiol",s:"Psoralea corylifolia",a:["bakuchiol"],c:"Cosmética",u:"Antiedad, alternativa al retinol",d:"Habitual 0,5–2%.",ev:"media",al:[],r:[
{k:"emb",l:"A",t:"Se vende como la alternativa al retinol en embarazo y es la opción más razonable, pero los datos de seguridad en gestación son limitados: que lo comente con su matrona."},
{k:"piel",l:"A",t:"Mejor tolerado que el retinol, pero puede irritar en piel muy sensible."}]},

{id:"peroxido-benzoilo",n:"Peróxido de benzoilo",s:"",a:["peroxido de benzoilo","benzoilo","acne"],c:"Cosmética",u:"Acné inflamatorio",d:"Habitual 2,5–5%. Más concentración no es mejor, solo irrita más.",ev:"alta",al:[],r:[
{k:"emb",l:"A",t:"En zona limitada se considera aceptable, pero que lo confirme su médico."},
{k:"piel",l:"R",t:"DECOLORA toallas, ropa y sábanas de forma permanente. Avísalo siempre o te lo devuelven."},
{k:"sol",l:"A",t:"Reseca y sensibiliza. SPF obligatorio."}]},

{id:"azelaico",n:"Ácido azelaico",s:"",a:["acido azelaico","azelaico"],c:"Cosmética",u:"Rosácea, manchas, acné",d:"Habitual 10–20%.",ev:"alta",al:[],r:[
{k:"emb",l:"V",t:"Es de las pocas activas para acné y manchas consideradas seguras en embarazo. Muy buena opción para embarazadas."},
{k:"piel",l:"A",t:"Escozor y hormigueo los primeros días: es normal, pero avísalo."}]},

{id:"arbol-te",n:"Aceite del árbol del té",s:"Melaleuca alternifolia",a:["arbol del te","tea tree","melaleuca"],c:"Cosmética",u:"Acné, piojos, hongos, uso tópico",d:"Siempre diluido. Nunca por vía oral.",ev:"media",al:[],r:[
{k:"_destacado",l:"R",t:"NUNCA por vía oral: es tóxico ingerido, con casos de confusión y ataxia, sobre todo en niños."},
{k:"menor",l:"R",t:"No usar por vía oral y con precaución en piel de menores. Se le ha atribuido actividad hormonal en niños prepúberes."},
{k:"piel",l:"A",t:"Dermatitis de contacto frecuente. Diluir al 5% y probar en una zona pequeña."},
{k:"emb",l:"A",t:"Uso tópico puntual y diluido. Evitar oral."},
{k:"mascotas",l:"R",t:"Tóxico para perros y gatos. No aplicárselo a mascotas."}]},

{id:"proteccion-solar",n:"Protector solar",s:"",a:["protector solar","spf","fotoproteccion","filtro solar"],c:"Cosmética",u:"Fotoprotección diaria",d:"SPF 50+ en Canarias todo el año. Reaplicar cada 2 horas de exposición.",ev:"alta",al:[],r:[
{k:"sol",l:"R",t:"Producto imprescindible con cualquier activo fotosensibilizante: retinol, ácidos, hipérico, aceites cítricos, alfalfa. Si vendes uno de esos, vende también el SPF y dilo."},
{k:"menor",l:"A",t:"En menores de 6 meses no se recomienda protector solar: sombra y ropa. A partir de ahí, filtros minerales."},
{k:"piel",l:"A",t:"En piel sensible o rosácea, filtros minerales (óxido de zinc, dióxido de titanio)."}]},

{id:"rosa-mosqueta",n:"Aceite de rosa mosqueta",s:"Rosa moschata",a:["rosa mosqueta","rosa moschata"],c:"Cosmética",u:"Cicatrices, estrías, regeneración de la piel",d:"Uso tópico. Se oxida rápido: guardar en oscuro y frío.",ev:"media",al:[],r:[
{k:"piel",l:"A",t:"Puede ser comedogénico en piel grasa o con acné."},
{k:"herida",l:"R",t:"No aplicar sobre heridas abiertas ni cicatrices recientes sin cerrar."},
{k:"emb",l:"V",t:"Uso tópico sin problema en embarazo. Es el clásico para las estrías."}]},

{id:"urea",n:"Urea tópica",s:"",a:["urea","crema de urea"],c:"Cosmética",u:"Piel muy seca, talones, queratosis",d:"5–10% hidrata; 20–40% es queratolítico (talones, uñas).",ev:"alta",al:[],r:[
{k:"piel",l:"A",t:"En concentración alta escuece sobre piel agrietada o con heridas."},
{k:"emb",l:"V",t:"Segura en embarazo y lactancia."},
{k:"menor",l:"A",t:"En bebés y niños pequeños, concentraciones bajas y superficie limitada."}]}

]);
