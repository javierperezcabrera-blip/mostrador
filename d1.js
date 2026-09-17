// Bloque 1 — Vitaminas y minerales
window.DB = (window.DB || []).concat([

{id:"vit-a",n:"Vitamina A (retinol)",s:"Retinil palmitato / acetato",a:["retinol","palmitato de retinilo","vitamina A preformada"],c:"Vitamina",u:"Visión, piel, mucosas, inmunidad",d:"VRN 800 µg ER. Límite superior 3.000 µg/día. Sumar lo que ya aporten multivitamínicos y aceite de hígado de bacalao.",ev:"alta",al:[],r:[
{k:"emb",l:"R",t:"Teratógena por encima de 3.000 µg/día. No vender retinol preformado a embarazadas ni a quien esté buscando embarazo. El betacaroteno sí es alternativa."},
{k:"hepatica",l:"R",t:"Se acumula en el hígado; dosis altas son hepatotóxicas. Derivar."},
{k:"lact",l:"A",t:"Solo a dosis de VRN, sin megadosis. Consultar."},
{k:"anticoag",l:"A",t:"Dosis altas pueden potenciar el efecto anticoagulante. Avisar al farmacéutico."}]},

{id:"betacaroteno",n:"Betacaroteno",s:"Provitamina A",a:["caroteno","provitamina A"],c:"Vitamina",u:"Precursor de vitamina A, piel, antioxidante",d:"Habitual 2–7 mg/día. Evitar dosis >7 mg/día de forma prolongada.",ev:"alta",al:[],r:[
{k:"fumador",l:"R",t:"En fumadores y expuestos a amianto, el betacaroteno aislado a dosis altas se asoció a más cáncer de pulmón (estudios ATBC y CARET). No vender dosis altas a fumadores."},
{k:"emb",l:"A",t:"Seguro a dosis dietéticas; evitar megadosis."}]},

{id:"vit-d",n:"Vitamina D3",s:"Colecalciferol",a:["colecalciferol","d3","vitamina d"],c:"Vitamina",u:"Huesos, músculo, inmunidad",d:"Habitual 400–2.000 UI/día. Límite superior 4.000 UI/día en adultos sin control analítico. Por encima de eso, que lo pauten con analítica.",ev:"alta",al:["pescado","lanolina"],r:[
{k:"renal",l:"R",t:"Riesgo de hipercalcemia y de cálculos. Solo con control médico."},
{k:"cardio",l:"A",t:"Con tiazidas aumenta el riesgo de hipercalcemia. Que lo valide su farmacéutico."},
{k:"digoxina",l:"A",t:"La hipercalcemia aumenta la toxicidad de la digoxina. Evitar dosis altas."},
{k:"autoinmune",l:"A",t:"En sarcoidosis, tuberculosis o linfoma hay riesgo alto de hipercalcemia. Derivar."}]},

{id:"vit-e",n:"Vitamina E",s:"Tocoferoles / tocotrienoles",a:["tocoferol","alfa-tocoferol"],c:"Vitamina",u:"Antioxidante, piel",d:"Habitual 12–100 mg/día. Evitar dosis >300 mg/día de forma prolongada.",ev:"alta",al:["soja","trigo"],r:[
{k:"anticoag",l:"R",t:"Dosis >300 mg/día aumentan claramente el riesgo de sangrado con Sintrom, warfarina, AAS o clopidogrel. No vender sin visto bueno."},
{k:"cirugia",l:"R",t:"Suspender al menos 2 semanas antes de cualquier cirugía o extracción dental."},
{k:"quimio",l:"A",t:"Dosis altas de antioxidantes pueden interferir con radioterapia y algunos citostáticos. Derivar a su oncólogo."}]},

{id:"vit-k",n:"Vitamina K (K1 y K2 / MK-7)",s:"Filoquinona / menaquinona",a:["k2","mk7","menaquinona","filoquinona"],c:"Vitamina",u:"Coagulación, fijación del calcio en hueso",d:"Habitual 45–200 µg/día de K2.",ev:"alta",al:["soja"],r:[
{k:"anticoag",l:"R",t:"INTERACCIÓN MAYOR con Sintrom (acenocumarol) y warfarina: antagoniza directamente el fármaco y puede provocar trombosis. NO VENDER. Los anticoagulantes nuevos (apixabán, rivaroxabán) no se ven afectados, pero confirma cuál toma."},
{k:"emb",l:"A",t:"A dosis de VRN es adecuada; evitar dosis altas sin indicación."}]},

{id:"vit-c",n:"Vitamina C",s:"Ácido ascórbico",a:["ascorbico","ascorbato"],c:"Vitamina",u:"Antioxidante, inmunidad, colágeno, absorción de hierro",d:"Habitual 80–1.000 mg/día. Por encima de 2.000 mg/día: diarrea y riesgo de oxalato.",ev:"alta",al:[],r:[
{k:"renal",l:"R",t:"Dosis >1.000 mg/día aumentan el oxalato urinario. Contraindicada en litiasis por oxalato cálcico e insuficiencia renal."},
{k:"hemocromatosis",l:"R",t:"Aumenta mucho la absorción de hierro. Contraindicada en hemocromatosis y talasemia."},
{k:"quimio",l:"A",t:"Dosis altas durante quimio o radioterapia deben consultarse con oncología."},
{k:"anticoag",l:"A",t:"Dosis muy altas pueden alterar el INR. Mantener dosis estable y avisar."}]},

{id:"vit-b1",n:"Vitamina B1 (tiamina)",s:"Tiamina",a:["tiamina","b1"],c:"Vitamina",u:"Energía, sistema nervioso",d:"Habitual 1,1–100 mg/día. Muy buen perfil de seguridad.",ev:"media",al:[],r:[]},

{id:"vit-b2",n:"Vitamina B2 (riboflavina)",s:"Riboflavina",a:["riboflavina","b2"],c:"Vitamina",u:"Energía, mucosas",d:"Habitual 1,4–100 mg/día. Tiñe la orina de amarillo intenso: es normal, avísalo o te llamarán asustados.",ev:"media",al:[],r:[]},

{id:"vit-b3",n:"Vitamina B3 (niacina / nicotinamida)",s:"Ácido nicotínico / nicotinamida",a:["niacina","nicotinamida","b3","acido nicotinico"],c:"Vitamina",u:"Energía, piel, perfil lipídico",d:"VRN 16 mg. El ácido nicotínico da rubor (flushing) desde 30 mg. Límite UE: 10 mg/día de ácido nicotínico y 900 mg/día de nicotinamida.",ev:"alta",al:[],r:[
{k:"hepatica",l:"R",t:"El ácido nicotínico a dosis altas (>500 mg) es hepatotóxico, sobre todo en formas de liberación sostenida. No vender."},
{k:"estatinas",l:"A",t:"Combinado con estatinas aumenta el riesgo de miopatía y rabdomiólisis. Que lo valore su médico."},
{k:"diabetes",l:"A",t:"Dosis altas elevan la glucemia. Vigilar controles."},
{k:"digestivo",l:"A",t:"Contraindicado en úlcera péptica activa."}]},

{id:"vit-b5",n:"Vitamina B5 (ácido pantoténico)",s:"Pantotenato cálcico",a:["pantotenico","b5","pantenol"],c:"Vitamina",u:"Energía, piel y cabello",d:"Habitual 6–200 mg/día. Muy seguro.",ev:"baja",al:[],r:[]},

{id:"vit-b6",n:"Vitamina B6 (piridoxina)",s:"Piridoxina / P5P",a:["piridoxina","b6","p5p"],c:"Vitamina",u:"Sistema nervioso, hormonas, síndrome premenstrual",d:"OJO: la EFSA bajó el límite superior a 12 mg/día en adultos (2023). Muchos complejos B llevan 25–50 mg. Suma todo lo que tome.",ev:"alta",al:[],r:[
{k:"neuro",l:"R",t:"El exceso mantenido causa neuropatía periférica (hormigueo, pérdida de sensibilidad en manos y pies). Si el cliente ya refiere hormigueos, no vender y derivar."},
{k:"parkinson",l:"R",t:"Dosis altas reducen el efecto de la levodopa sin carbidopa. Derivar."},
{k:"antiepil",l:"A",t:"Puede reducir los niveles de fenitoína y fenobarbital. Avisar."}]},

{id:"vit-b7",n:"Biotina (vitamina B8/H)",s:"Biotina",a:["biotina","b8","vitamina h"],c:"Vitamina",u:"Cabello, uñas, piel",d:"Habitual 50–5.000 µg/día.",ev:"alta",al:[],r:[
{k:"analitica",l:"R",t:"AVISO IMPORTANTE: la biotina a dosis altas FALSEA las analíticas de tiroides (TSH, T4) y de troponina, pudiendo simular un hipertiroidismo o enmascarar un infarto. Hay que suspenderla 2–3 días antes de cualquier análisis de sangre. Dilo siempre en la venta."},
{k:"tiroidec",l:"A",t:"Si se controla el tiroides por analítica, suspender 3 días antes de la extracción."}]},

{id:"folato",n:"Ácido fólico / Folato (B9)",s:"Ácido fólico o 5-MTHF",a:["folico","folato","b9","metilfolato","5-mthf"],c:"Vitamina",u:"Embarazo, formación de glóbulos rojos, homocisteína",d:"Embarazo: 400 µg/día desde 1 mes antes de la concepción. Límite superior 1.000 µg/día.",ev:"alta",al:[],r:[
{k:"quimio",l:"R",t:"Con metotrexato solo bajo pauta médica: el fólico puede anular el efecto del tratamiento en indicaciones oncológicas. No vender por tu cuenta."},
{k:"antiepil",l:"A",t:"Puede reducir los niveles de fenitoína y aumentar crisis. Que lo paute el neurólogo."},
{k:"b12def",l:"A",t:"Dosis altas enmascaran el déficit de B12 mientras avanza el daño neurológico. Vender siempre acompañado de B12 en mayores y veganos."}]},

{id:"vit-b12",n:"Vitamina B12",s:"Cianocobalamina / metilcobalamina",a:["b12","cobalamina","cianocobalamina","metilcobalamina"],c:"Vitamina",u:"Energía, sistema nervioso, veganos, mayores, uso de metformina o IBP",d:"Habitual 25–1.000 µg/día. No tiene límite superior establecido; muy seguro.",ev:"alta",al:[],r:[
{k:"antidiab",l:"V",t:"De hecho es RECOMENDABLE: la metformina de uso prolongado reduce la absorción de B12. Punto a favor, no en contra."},
{k:"ibp",l:"V",t:"Los IBP (omeprazol y similares) reducen la absorción de B12. Suplementar tiene sentido."}]},

{id:"colina",n:"Colina",s:"Bitartrato de colina / alfa-GPC / citicolina",a:["colina","alfa-gpc","citicolina"],c:"Vitamina",u:"Memoria, hígado, embarazo",d:"Habitual 250–1.000 mg/día. Límite 3.500 mg/día.",ev:"media",al:["soja"],r:[
{k:"cardiop",l:"A",t:"Dosis altas elevan el TMAO, asociado a riesgo cardiovascular. Prudencia en cardiópatas."},
{k:"psiq",l:"A",t:"Puede empeorar cuadros depresivos en personas sensibles. Vigilar."}]},

{id:"multi",n:"Multivitamínico general",s:"",a:["multivitaminico","multi","complejo vitaminico"],c:"Vitamina",u:"Cobertura general de vitaminas y minerales",d:"El riesgo aquí es SUMAR: si el cliente ya toma vitamina D, hierro o un complejo B por separado, revisa que no se pase del límite.",ev:"alta",al:["soja","gluten","pescado"],r:[
{k:"emb",l:"R",t:"Los multis generales suelen llevar retinol y no llevan yodo/fólico en la proporción adecuada. En embarazo hay que vender un producto específico de gestación, nunca un multi normal."},
{k:"anticoag",l:"A",t:"Revisa si lleva vitamina K, E o hierba de San Juan en la fórmula. Muchos multis 'plus' añaden plantas."},
{k:"hemocromatosis",l:"R",t:"No vender multis con hierro. Buscar versión 'sin hierro'."}]},

{id:"calcio",n:"Calcio",s:"Carbonato / citrato de calcio",a:["calcio","carbonato calcico","citrato calcico"],c:"Mineral",u:"Huesos, menopausia, dieta sin lácteos",d:"Habitual 500–1.000 mg/día repartidos. No superar 2.500 mg/día contando la dieta. El citrato se absorbe mejor con IBP.",ev:"alta",al:["lacteos","marisco"],r:[
{k:"tiroides",l:"R",t:"Bloquea la absorción de la levotiroxina (Eutirox). Hay que separarlo MÍNIMO 4 horas. Si el cliente no puede garantizar esa separación, no se la vendas."},
{k:"antibiot",l:"R",t:"Quela quinolonas y tetraciclinas y anula el antibiótico. Separar 2 h antes o 4–6 h después."},
{k:"digoxina",l:"R",t:"El calcio intravenoso u oral a dosis altas puede desencadenar arritmias graves con digoxina. Derivar."},
{k:"renal",l:"R",t:"Contraindicado en litiasis renal cálcica activa e insuficiencia renal sin control."},
{k:"ibp",l:"A",t:"Con omeprazol usa citrato, no carbonato: sin ácido gástrico el carbonato apenas se absorbe."},
{k:"hierro",l:"A",t:"No tomar junto al hierro: compiten. Separar mínimo 2 h."}]},

{id:"magnesio",n:"Magnesio",s:"Citrato / bisglicinato / óxido",a:["magnesio","citrato de magnesio","bisglicinato"],c:"Mineral",u:"Calambres, descanso, estreñimiento, energía",d:"Habitual 200–400 mg/día de magnesio elemento. El óxido es laxante; el bisglicinato el mejor tolerado.",ev:"alta",al:[],r:[
{k:"renal",l:"R",t:"CONTRAINDICADO en insuficiencia renal: el riñón no lo elimina y se acumula (hipermagnesemia grave). Pregunta siempre por la función renal en mayores."},
{k:"antibiot",l:"R",t:"Quela quinolonas y tetraciclinas. Separar 2 h antes o 4–6 h después."},
{k:"tiroides",l:"A",t:"Separar 4 h de la levotiroxina."},
{k:"cardio",l:"A",t:"Con bifosfonatos (osteoporosis) separar 2 h. Con digoxina, vigilar."},
{k:"digestivo",l:"A",t:"El citrato y el óxido pueden dar diarrea. En colon irritable, mejor bisglicinato."}]},

{id:"hierro",n:"Hierro",s:"Bisglicinato / sulfato / pirofosfato liposomado",a:["hierro","sulfato ferroso","bisglicinato de hierro"],c:"Mineral",u:"Anemia, cansancio, menstruaciones abundantes, embarazo",d:"Habitual 14–30 mg/día. Idealmente con una analítica previa (ferritina). Tomar en ayunas con vitamina C.",ev:"alta",al:[],r:[
{k:"hemocromatosis",l:"R",t:"CONTRAINDICADO ABSOLUTO en hemocromatosis, talasemia y sobrecarga férrica. Pregunta siempre antes de vender hierro."},
{k:"tiroides",l:"R",t:"Bloquea la levotiroxina. Separar mínimo 4 horas."},
{k:"antibiot",l:"R",t:"Anula quinolonas y tetraciclinas. Separar 2 h antes o 4 h después."},
{k:"ibp",l:"A",t:"Con omeprazol se absorbe mucho peor. Recomienda formas quelatadas y tomarlo con vitamina C."},
{k:"digestivo",l:"A",t:"Estreñimiento, heces negras y molestias gástricas son frecuentes. En EII activa, derivar."},
{k:"menor",l:"R",t:"Riesgo de intoxicación grave por ingestión accidental en niños. Insistir en guardarlo fuera de su alcance."}]},

{id:"zinc",n:"Zinc",s:"Picolinato / bisglicinato / gluconato",a:["zinc","cinc","picolinato de zinc"],c:"Mineral",u:"Inmunidad, piel, acné, fertilidad masculina",d:"Habitual 10–25 mg/día. No superar 40 mg/día de forma prolongada sin cobre.",ev:"alta",al:[],r:[
{k:"cobre",l:"A",t:"Por encima de 40 mg/día y mantenido provoca déficit de cobre (anemia, neuropatía). Si va a tomar dosis alta más de 2 meses, que lleve cobre asociado."},
{k:"antibiot",l:"R",t:"Quela quinolonas y tetraciclinas. Separar 2 h antes o 4–6 h después."},
{k:"inmuno",l:"A",t:"Con penicilamina y algunos inmunosupresores reduce la absorción del fármaco. Derivar."},
{k:"digestivo",l:"A",t:"En ayunas da náuseas. Mejor con comida."}]},

{id:"selenio",n:"Selenio",s:"Selenometionina / levadura de selenio",a:["selenio","selenometionina"],c:"Mineral",u:"Tiroides, antioxidante, inmunidad",d:"Habitual 55–100 µg/día. Límite superior 255 µg/día (EFSA 2023). Margen estrecho: cuidado con acumular fuentes.",ev:"alta",al:[],r:[
{k:"selenosis",l:"R",t:"El exceso es tóxico: caída de pelo, uñas quebradizas, aliento a ajo, neuropatía. Nunca combines dos productos con selenio."},
{k:"diabetes",l:"A",t:"Dosis altas mantenidas se han asociado a mayor riesgo de diabetes tipo 2. Prudencia."},
{k:"tiroidec",l:"A",t:"Útil en tiroiditis de Hashimoto, pero que lo sepa su endocrino: puede modificar los controles."}]},

{id:"yodo",n:"Yodo",s:"Yoduro potásico / algas",a:["yodo","yoduro","kelp","fucus"],c:"Mineral",u:"Tiroides, embarazo",d:"VRN 150 µg. Embarazo 200 µg. Límite superior 600 µg/día. Las algas (kelp, fucus) pueden llevar dosis descontroladas y muy superiores.",ev:"alta",al:["pescado","marisco"],r:[
{k:"tiroidec",l:"R",t:"NO VENDER a quien tenga cualquier patología tiroidea sin que lo autorice su endocrino: puede disparar un hipertiroidismo o agravar un Hashimoto. Es uno de los errores más frecuentes en herbolario."},
{k:"tiroides",l:"R",t:"Si toma levotiroxina o antitiroideos, el yodo extra descontrola la dosis. Derivar."},
{k:"cardio",l:"R",t:"Con amiodarona (antiarrítmico, ya de por sí muy rica en yodo) está contraindicado."},
{k:"autoinmune",l:"A",t:"Puede activar tiroiditis autoinmune latente."},
{k:"emb",l:"A",t:"Necesario en embarazo, pero a la dosis pautada por su matrona/ginecólogo, no a dosis de alga."}]},

{id:"potasio",n:"Potasio",s:"Citrato / cloruro potásico",a:["potasio","citrato potasico"],c:"Mineral",u:"Calambres, tensión arterial, deporte",d:"En complementos la UE limita la dosis. Vigila las 'sales de dieta' y el agua de mar, que llevan mucho potasio.",ev:"alta",al:[],r:[
{k:"cardio",l:"R",t:"CONTRAINDICADO con IECA (enalapril, ramipril), ARA-II (losartán, valsartán) y diuréticos ahorradores (espironolactona, eplerenona): riesgo de hiperpotasemia y arritmia mortal. NO VENDER."},
{k:"renal",l:"R",t:"Contraindicado en insuficiencia renal: no se elimina y se acumula."},
{k:"digoxina",l:"A",t:"Las alteraciones del potasio modifican la toxicidad de la digoxina. Derivar."}]},

{id:"cobre",n:"Cobre",s:"Bisglicinato de cobre",a:["cobre"],c:"Mineral",u:"Acompañante del zinc, pelo, colágeno",d:"Habitual 1–2 mg/día. Límite 5 mg/día.",ev:"media",al:[],r:[
{k:"wilson",l:"R",t:"Contraindicado en enfermedad de Wilson."},
{k:"hepatica",l:"A",t:"Se acumula en enfermedad hepática. Derivar."}]},

{id:"manganeso",n:"Manganeso",s:"",a:["manganeso"],c:"Mineral",u:"Huesos, metabolismo",d:"Habitual 1–3 mg/día. Límite 8 mg/día.",ev:"baja",al:[],r:[
{k:"hepatica",l:"R",t:"En enfermedad hepática se acumula y es neurotóxico (parkinsonismo). No vender."},
{k:"neuro",l:"A",t:"Prudencia en Parkinson y trastornos del movimiento."}]},

{id:"cromo",n:"Cromo",s:"Picolinato de cromo",a:["cromo","picolinato de cromo"],c:"Mineral",u:"Control del apetito y de la glucemia",d:"Habitual 40–200 µg/día.",ev:"media",al:[],r:[
{k:"antidiab",l:"R",t:"Puede sumar efecto hipoglucemiante a insulina o antidiabéticos y provocar bajadas. No vender sin que su médico ajuste."},
{k:"diabetes",l:"A",t:"Que se controle la glucemia más a menudo las primeras semanas."},
{k:"renal",l:"A",t:"Evitar en insuficiencia renal."}]},

{id:"molibdeno",n:"Molibdeno",s:"",a:["molibdeno"],c:"Mineral",u:"Detoxificación, enzimas",d:"Habitual 50–100 µg/día.",ev:"baja",al:[],r:[
{k:"renal",l:"A",t:"Se elimina por riñón. Prudencia en insuficiencia renal."},
{k:"gota",l:"A",t:"Puede elevar el ácido úrico. Evitar en gota."}]},

{id:"boro",n:"Boro",s:"",a:["boro"],c:"Mineral",u:"Huesos, articulaciones, hormonas",d:"Habitual 1–3 mg/día. Límite 10 mg/día.",ev:"baja",al:[],r:[
{k:"hormonodep",l:"R",t:"Eleva el estradiol y la testosterona libres. Evitar en tumores hormonodependientes."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."}]},

{id:"silicio",n:"Silicio / Bambú / Cola de caballo",s:"Ácido ortosilícico",a:["silicio","bambu","silice"],c:"Mineral",u:"Pelo, uñas, colágeno, articulaciones",d:"Habitual 5–20 mg/día de silicio.",ev:"baja",al:[],r:[
{k:"renal",l:"A",t:"Se elimina por riñón; prudencia en insuficiencia renal."},
{k:"cardio",l:"A",t:"Si la fuente es cola de caballo, tiene efecto diurético: cuidado con diuréticos y litio."}]},

{id:"fosforo",n:"Fósforo",s:"",a:["fosforo","fosfato"],c:"Mineral",u:"Huesos, energía",d:"Rara vez hace falta suplementarlo: la dieta occidental ya va sobrada.",ev:"media",al:[],r:[
{k:"renal",l:"R",t:"CONTRAINDICADO en insuficiencia renal: la hiperfosfatemia es un problema serio en estos pacientes."},
{k:"cardio",l:"A",t:"Vigilar con IECA y diuréticos ahorradores por el potasio asociado."}]},

{id:"agua-mar",n:"Agua de mar",s:"",a:["agua de mar","plasma marino"],c:"Mineral",u:"Remineralizante, deporte",d:"La hipertónica lleva mucho sodio. La isotónica está diluida.",ev:"baja",al:[],r:[
{k:"hta",l:"R",t:"Aporte alto de sodio: contraindicada en hipertensión."},
{k:"renal",l:"R",t:"Sobrecarga de sodio y potasio. No vender en insuficiencia renal ni cardíaca."},
{k:"cardio",l:"R",t:"En insuficiencia cardíaca y con diuréticos, no."}]}

]);
