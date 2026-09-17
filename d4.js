// Bloque 4 — Plantas: digestivo, hígado, circulación, urinario, respiratorio
window.DB = (window.DB || []).concat([

{id:"ajo",n:"Ajo (extracto / envejecido)",s:"Allium sativum",a:["ajo","allium","ajo negro"],c:"Planta",u:"Colesterol, tensión, circulación, defensas",d:"Habitual 600–1.200 mg/día de extracto.",ev:"alta",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto antiagregante marcado a dosis de extracto. Con Sintrom, AAS o clopidogrel hay riesgo real de sangrado. No vender extractos concentrados."},
{k:"antiviral",l:"R",t:"Reduce los niveles de saquinavir y otros antirretrovirales. No vender a pacientes con VIH."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes de cualquier cirugía."},
{k:"cardio",l:"A",t:"Suma efecto hipotensor. Vigilar la tensión."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"digestivo",l:"A",t:"Ardor y reflujo frecuentes. Mejor con comida."}]},

{id:"cardo-mariano",n:"Cardo mariano",s:"Silybum marianum",a:["cardo mariano","silimarina","silybum"],c:"Planta",u:"Protección hepática, digestión de grasas",d:"Habitual 200–600 mg/día de silimarina.",ev:"media",al:["asteraceas"],r:[
{k:"alergia_asteraceas",l:"R",t:"Asterácea: prudencia en alérgicos a ambrosía, margarita o alcachofa."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia: vigilar con insulina o metformina."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica débil descrita. Consultar en tumores hormonodependientes."},
{k:"quimio",l:"A",t:"Puede modificar el metabolismo de algunos citostáticos. Derivar a oncología."},
{k:"hormonal",l:"A",t:"Puede interferir en el metabolismo de los estrógenos. Prudencia."},
{k:"emb",l:"A",t:"Datos limitados. Consultar."}]},

{id:"alcachofa",n:"Alcachofa",s:"Cynara scolymus",a:["alcachofa","cynara"],c:"Planta",u:"Digestión, retención de líquidos, colesterol",d:"Habitual 300–600 mg/día de extracto.",ev:"media",al:["asteraceas"],r:[
{k:"biliar",l:"R",t:"CONTRAINDICADA en obstrucción biliar y cálculos: es colerética y puede provocar cólico."},
{k:"alergia_asteraceas",l:"R",t:"Asterácea. Prudencia en alérgicos al polen de compuestas."},
{k:"cardio",l:"A",t:"Efecto diurético leve: prudencia con diuréticos y litio."}]},

{id:"boldo",n:"Boldo",s:"Peumus boldus",a:["boldo"],c:"Planta",u:"Digestión pesada, vesícula",d:"Uso puntual y corto. No más de 4 semanas seguidas.",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"CONTRAINDICADO en enfermedad hepática: contiene ascaridol, hepatotóxico. Hay casos de hepatitis."},
{k:"biliar",l:"R",t:"Contraindicado en obstrucción de vías biliares."},
{k:"anticoag",l:"R",t:"Potencia la warfarina/acenocumarol. No vender con Sintrom."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia."}]},

{id:"diente-leon",n:"Diente de león",s:"Taraxacum officinale",a:["diente de leon","taraxacum"],c:"Planta",u:"Retención de líquidos, digestión, depurativo",d:"Infusión o 500–1.000 mg de extracto.",ev:"baja",al:["asteraceas"],r:[
{k:"biliar",l:"R",t:"Contraindicado en obstrucción biliar y cálculos."},
{k:"cardio",l:"R",t:"Diurético con alto contenido en potasio: prudencia con IECA, ARA-II y ahorradores de potasio. Con litio, altera sus niveles."},
{k:"alergia_asteraceas",l:"R",t:"Asterácea. Prudencia en alérgicos."},
{k:"digestivo",l:"A",t:"Contraindicado en úlcera activa."},
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal por el potasio."}]},

{id:"desmodium",n:"Desmodium",s:"Desmodium adscendens",a:["desmodium"],c:"Planta",u:"Apoyo hepático",d:"Habitual 500–2.000 mg/día.",ev:"baja",al:[],r:[
{k:"hepatica",l:"A",t:"Se usa como hepatoprotector, pero en hepatopatía establecida debe supervisarlo el médico."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"regaliz",n:"Regaliz",s:"Glycyrrhiza glabra",a:["regaliz","licorice","glicirricina"],c:"Planta",u:"Digestión, acidez, garganta, adrenal",d:"Máximo 100 mg/día de glicirricina y no más de 4–6 semanas. La forma DGL (desglicirrizinada) NO tiene estos riesgos.",ev:"alta",al:[],r:[
{k:"hta",l:"R",t:"CONTRAINDICADO en hipertensión: retiene sodio, pierde potasio y sube la tensión de forma marcada. Hay ingresos hospitalarios por esto."},
{k:"cardio",l:"R",t:"Con diuréticos provoca hipopotasemia grave. Con IECA/ARA-II, descontrol tensional."},
{k:"digoxina",l:"R",t:"La hipopotasemia que provoca multiplica la toxicidad de la digoxina. Muy peligroso."},
{k:"renal",l:"R",t:"Contraindicado en insuficiencia renal."},
{k:"emb",l:"R",t:"Contraindicado: se asocia a parto prematuro y a efectos en el desarrollo neurológico del bebé."},
{k:"inmuno",l:"A",t:"Potencia los corticoides. Derivar."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica. Prudencia."}]},

{id:"aloe-vera",n:"Aloe vera (gel oral)",s:"Aloe barbadensis",a:["aloe","aloe vera","sabila"],c:"Planta",u:"Digestión, mucosa gástrica, piel",d:"El GEL (sin aloína) es el uso digestivo. El LÁTEX/acíbar es laxante antraquinónico y es otra cosa.",ev:"media",al:[],r:[
{k:"_destacado",l:"A",t:"Distingue GEL de LÁTEX. El látex (aloína) es un laxante irritante con todas las contraindicaciones de los antraquinónicos y está muy restringido en la UE."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia por vía oral."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"cardio",l:"A",t:"Si lleva látex, pérdida de potasio: peligro con diuréticos y digoxina."},
{k:"digestivo",l:"R",t:"Contraindicado en enfermedad inflamatoria intestinal y obstrucción."},
{k:"menor",l:"R",t:"No usar por vía oral en menores de 12 años."}]},

{id:"sen",n:"Sen",s:"Senna alexandrina",a:["sen","senna"],c:"Planta",u:"Estreñimiento ocasional",d:"USO PUNTUAL: máximo 7–10 días seguidos. Nunca como hábito.",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"Laxante antraquinónico. El uso crónico crea dependencia, daña el colon y provoca pérdida de potasio. Si el cliente lo pide de forma habitual, deriva y ofrece fibra (psyllium) en su lugar."},
{k:"emb",l:"R",t:"CONTRAINDICADO en embarazo (estimula la musculatura uterina) y en lactancia."},
{k:"menor",l:"R",t:"No vender a menores de 12 años."},
{k:"digestivo",l:"R",t:"Contraindicado en enfermedad inflamatoria intestinal (Crohn, colitis), obstrucción, apendicitis y dolor abdominal sin diagnosticar."},
{k:"digoxina",l:"R",t:"La pérdida de potasio multiplica la toxicidad de la digoxina."},
{k:"cardio",l:"R",t:"Con diuréticos y corticoides, hipopotasemia grave."},
{k:"medicacion_general",l:"A",t:"Acelera el tránsito y reduce la absorción de otros fármacos."}]},

{id:"cascara-sagrada",n:"Cáscara sagrada / Frángula",s:"Rhamnus purshiana / frangula",a:["cascara sagrada","frangula","rhamnus"],c:"Planta",u:"Estreñimiento ocasional",d:"Mismas reglas que el sen: máximo 7–10 días.",ev:"alta",al:[],r:[
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia."},
{k:"menor",l:"R",t:"No vender a menores de 12 años."},
{k:"digestivo",l:"R",t:"Contraindicado en EII, obstrucción y dolor abdominal sin diagnóstico."},
{k:"digoxina",l:"R",t:"Hipopotasemia: peligro con digoxina."},
{k:"cardio",l:"R",t:"Con diuréticos, pérdida de potasio."},
{k:"hepatica",l:"A",t:"Casos aislados de hepatotoxicidad con uso prolongado."}]},

{id:"psyllium",n:"Psyllium / Ispágula",s:"Plantago ovata",a:["psyllium","ispagula","plantago","plantaben"],c:"Fibra",u:"Estreñimiento, colesterol, saciedad, colon irritable",d:"3,5–10 g/día SIEMPRE con 1-2 vasos grandes de agua.",ev:"alta",al:[],r:[
{k:"digestivo",l:"R",t:"CONTRAINDICADO en obstrucción intestinal, estenosis y dificultad para tragar. Sin suficiente agua puede provocar una obstrucción."},
{k:"medicacion_general",l:"R",t:"Reduce la absorción de casi cualquier fármaco. Separar SIEMPRE 2 horas de cualquier medicación."},
{k:"tiroides",l:"R",t:"Separar 4 h de la levotiroxina."},
{k:"antidiab",l:"A",t:"Ralentiza la absorción de azúcares: puede requerir ajustar la insulina."}]},

{id:"glucomanano",n:"Glucomanano",s:"Amorphophallus konjac",a:["glucomanano","konjac"],c:"Fibra",u:"Saciedad, control de peso, colesterol",d:"3 g/día en 3 tomas, con 1-2 vasos de agua antes de comer.",ev:"alta",al:[],r:[
{k:"digestivo",l:"R",t:"Riesgo real de obstrucción esofágica e intestinal si se toma con poca agua. Contraindicado en estenosis y disfagia. Es obligatorio advertirlo."},
{k:"medicacion_general",l:"R",t:"Separar 2 h de cualquier medicamento."},
{k:"antidiab",l:"A",t:"Baja la glucemia posprandial: puede requerir ajuste de insulina."},
{k:"tiroides",l:"R",t:"Separar 4 h de la levotiroxina."}]},

{id:"malvavisco",n:"Malvavisco / Altea",s:"Althaea officinalis",a:["malvavisco","altea"],c:"Planta",u:"Irritación de garganta, mucosa gástrica, tos seca",d:"Infusión o jarabe.",ev:"media",al:[],r:[
{k:"medicacion_general",l:"A",t:"El mucílago puede retrasar la absorción de otros fármacos. Separar 1-2 h."},
{k:"antidiab",l:"A",t:"Puede bajar ligeramente la glucemia."}]},

{id:"menta-ae",n:"Aceite esencial de menta (cápsulas gastrorresistentes)",s:"Mentha piperita",a:["menta","menta piperita","aceite de menta"],c:"Planta",u:"Colon irritable, digestión, gases",d:"Habitual 0,2 ml 3 veces/día en cápsulas con cubierta entérica.",ev:"alta",al:[],r:[
{k:"digestivo",l:"R",t:"Relaja el esfínter esofágico: CONTRAINDICADO en reflujo y hernia de hiato — lo empeora claramente."},
{k:"biliar",l:"R",t:"Contraindicado en cálculos biliares y obstrucción."},
{k:"menor",l:"R",t:"El aceite esencial no debe aplicarse ni darse a menores de 3 años (riesgo de espasmo laríngeo)."},
{k:"ibp",l:"A",t:"Los IBP pueden disolver antes la cubierta entérica. Separar."},
{k:"emb",l:"A",t:"Infusión ocasional sí; aceite esencial, evitar."}]},

{id:"hinojo",n:"Hinojo / Anís",s:"Foeniculum vulgare / Pimpinella anisum",a:["hinojo","anis","anis verde"],c:"Planta",u:"Gases, digestión, cólicos del lactante, lactancia",d:"Infusión. Los aceites esenciales concentrados, con precaución.",ev:"media",al:[],r:[
{k:"hormonodep",l:"R",t:"El anetol tiene actividad estrogénica. Evitar en cáncer de mama, útero u ovario y en endometriosis."},
{k:"emb",l:"R",t:"Evitar el aceite esencial y los extractos concentrados en embarazo."},
{k:"menor",l:"R",t:"La EMA desaconseja el hinojo en menores de 4 años (estragol). No lo recomiendes para cólicos del lactante."},
{k:"epilepsia",l:"A",t:"El aceite esencial puede bajar el umbral convulsivo."}]},

{id:"equinacea",n:"Equinácea",s:"Echinacea purpurea",a:["equinacea","echinacea"],c:"Planta",u:"Defensas, resfriados",d:"Habitual 300–900 mg/día. Máximo 10 días seguidos.",ev:"media",al:["asteraceas"],r:[
{k:"autoinmune",l:"R",t:"Inmunoestimulante: CONTRAINDICADA en lupus, artritis reumatoide, esclerosis múltiple, Crohn y cualquier autoinmunidad."},
{k:"inmuno",l:"R",t:"Antagoniza inmunosupresores. NO VENDER a trasplantados ni a quien tome corticoides o metotrexato."},
{k:"alergia_asteraceas",l:"R",t:"Asterácea: riesgo de anafilaxia en alérgicos a compuestas y en atópicos graves."},
{k:"hepatica",l:"A",t:"No usar más de 8 semanas. Prudencia con otros hepatotóxicos."},
{k:"emb",l:"A",t:"Datos limitados. Mejor evitar."},
{k:"quimio",l:"A",t:"Consultar con oncología."}]},

{id:"propoleo",n:"Própolis",s:"",a:["propoleo","propolis"],c:"Apicultura",u:"Garganta, defensas, antiséptico",d:"Spray o extracto según producto.",ev:"media",al:["abejas","propoleo","asteraceas"],r:[
{k:"alergia_abejas",l:"R",t:"CONTRAINDICADO en alergia a picadura de abeja, al polen o a productos apícolas. Riesgo de anafilaxia y de dermatitis de contacto grave."},
{k:"asma",l:"R",t:"Puede desencadenar broncoespasmo en asmáticos alérgicos."},
{k:"anticoag",l:"A",t:"Posible efecto sobre la coagulación a dosis altas."},
{k:"emb",l:"A",t:"Datos limitados."}]},

{id:"jalea-real",n:"Jalea real",s:"",a:["jalea real"],c:"Apicultura",u:"Energía, defensas, convalecencia",d:"Habitual 500–1.500 mg/día.",ev:"media",al:["abejas"],r:[
{k:"alergia_abejas",l:"R",t:"RIESGO DE ANAFILAXIA en asmáticos y atópicos, incluso sin alergia previa conocida a las abejas. Hay muertes descritas. No vender a asmáticos."},
{k:"asma",l:"R",t:"Contraindicada en asma. Es una de las causas de anafilaxia por complemento mejor documentadas."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica descrita. Prudencia."},
{k:"cardio",l:"A",t:"Puede potenciar la warfarina. Prudencia."}]},

{id:"polen",n:"Polen de abeja",s:"",a:["polen"],c:"Apicultura",u:"Energía, nutrientes, defensas",d:"1–2 cucharaditas/día, empezando poco a poco.",ev:"baja",al:["abejas","polen","asteraceas"],r:[
{k:"alergia_abejas",l:"R",t:"Contraindicado en alérgicos al polen y a productos apícolas: riesgo de anafilaxia."},
{k:"asma",l:"R",t:"Prudencia máxima en asmáticos y atópicos."},
{k:"anticoag",l:"A",t:"Posible potenciación de la warfarina."}]},

{id:"miel",n:"Miel",s:"",a:["miel","miel de manuka"],c:"Alimentación",u:"Garganta, tos, endulzante",d:"",ev:"alta",al:["abejas"],r:[
{k:"menor",l:"R",t:"NUNCA a menores de 12 meses: riesgo de botulismo infantil. Es una norma sanitaria firme."},
{k:"diabetes",l:"A",t:"Es azúcar: cuenta en el recuento de hidratos."},
{k:"alergia_abejas",l:"A",t:"Prudencia en alergia a productos apícolas."}]},

{id:"sauco",n:"Saúco",s:"Sambucus nigra",a:["sauco","sambucus","elderberry"],c:"Planta",u:"Resfriados, gripe, defensas",d:"Jarabe o extracto según producto.",ev:"media",al:[],r:[
{k:"autoinmune",l:"A",t:"Inmunoestimulante: prudencia en enfermedad autoinmune."},
{k:"inmuno",l:"A",t:"Puede contrarrestar inmunosupresores. Derivar."},
{k:"crudo",l:"R",t:"La baya cruda, las hojas y los tallos son tóxicos (cianogénicos). Solo productos elaborados."},
{k:"emb",l:"A",t:"Datos limitados."}]},

{id:"arandano-rojo",n:"Arándano rojo americano",s:"Vaccinium macrocarpon",a:["arandano rojo","cranberry","pac"],c:"Planta",u:"Infecciones urinarias de repetición",d:"36 mg/día de PAC (proantocianidinas) es la dosis con respaldo.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Hay casos descritos de aumento del INR con warfarina/acenocumarol y sangrado. Con Sintrom, no vender sin control del INR."},
{k:"renal",l:"R",t:"Alto en oxalatos: evitar en litiasis por oxalato cálcico."},
{k:"diabetes",l:"A",t:"Si es zumo, lleva azúcar. Preferir cápsulas."},
{k:"ibp",l:"A",t:"Puede aumentar la absorción de B12 en pacientes con IBP (efecto favorable)."}]},

{id:"dmanosa",n:"D-Manosa",s:"",a:["d-manosa","manosa"],c:"Otros",u:"Infecciones urinarias por E. coli",d:"Habitual 1,5–2 g/día.",ev:"media",al:[],r:[
{k:"diabetes",l:"A",t:"Es un azúcar: puede alterar ligeramente la glucemia y los controles. Vigilar."},
{k:"emb",l:"A",t:"Datos limitados. Consultar con la matrona."},
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."}]},

{id:"ortiga",n:"Ortiga verde",s:"Urtica dioica",a:["ortiga","urtica"],c:"Planta",u:"Depurativo, próstata (raíz), pelo, articulaciones",d:"Habitual 300–600 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"La hoja es muy rica en vitamina K: antagoniza el Sintrom. No vender con acenocumarol."},
{k:"cardio",l:"A",t:"Efecto diurético: prudencia con diuréticos, IECA y litio."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"emb",l:"R",t:"Evitar: efecto uterotónico descrito."}]},

{id:"cola-caballo",n:"Cola de caballo",s:"Equisetum arvense",a:["cola de caballo","equiseto"],c:"Planta",u:"Retención de líquidos, uñas y pelo, remineralizante",d:"Uso corto, no más de 4-6 semanas. Solo Equisetum arvense (otras especies son tóxicas).",ev:"media",al:[],r:[
{k:"cardio",l:"R",t:"Diurético: con diuréticos provoca pérdida de potasio. Con litio altera sus niveles peligrosamente."},
{k:"renal",l:"R",t:"Contraindicada en insuficiencia renal y cardíaca."},
{k:"tiamina",l:"A",t:"Contiene tiaminasa: el uso prolongado puede provocar déficit de vitamina B1. Especial cuidado en consumidores de alcohol."},
{k:"emb",l:"R",t:"Contraindicada en embarazo y lactancia."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."}]},

{id:"sabal",n:"Sabal / Saw palmetto",s:"Serenoa repens",a:["sabal","saw palmetto","serenoa","palmito salvaje"],c:"Planta",u:"Hiperplasia benigna de próstata, caída del cabello",d:"Habitual 320 mg/día de extracto lipídico.",ev:"media",al:[],r:[
{k:"prostata",l:"R",t:"IMPORTANTE: puede reducir el PSA y enmascarar un cáncer de próstata. Nunca vender sin que se haya descartado con su urólogo. Que lo comente antes de un análisis de PSA."},
{k:"anticoag",l:"R",t:"Efecto antiagregante: hay casos de sangrado con Sintrom y AAS."},
{k:"hormonal",l:"A",t:"Actividad antiandrogénica: interfiere con terapia hormonal y anticonceptivos."},
{k:"emb",l:"R",t:"Contraindicado en embarazo (riesgo teratogénico en feto masculino). Que no lo manipulen embarazadas."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes de cirugía."}]},

{id:"epilobio",n:"Epilobio",s:"Epilobium parviflorum",a:["epilobio"],c:"Planta",u:"Próstata, vías urinarias",d:"Infusión o extracto.",ev:"baja",al:[],r:[
{k:"prostata",l:"A",t:"Como con el sabal: nunca sustituir el seguimiento urológico ni el PSA."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"espino-blanco",n:"Espino blanco",s:"Crataegus monogyna",a:["espino blanco","crataegus","majuelo"],c:"Planta",u:"Palpitaciones leves, nerviosismo, corazón",d:"Habitual 300–900 mg/día.",ev:"media",al:[],r:[
{k:"digoxina",l:"R",t:"Potencia la digoxina y otros digitálicos: riesgo de toxicidad. NO VENDER."},
{k:"cardio",l:"R",t:"Suma efecto con betabloqueantes, nitratos y antihipertensivos: hipotensión y bradicardia. Derivar."},
{k:"cardiop",l:"R",t:"Cualquier cardiopatía tiene que estar controlada por cardiología. No es una planta para vender a la ligera."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"castano-indias",n:"Castaño de Indias",s:"Aesculus hippocastanum",a:["castano de indias","aesculus","escina"],c:"Planta",u:"Piernas cansadas, varices, hemorroides",d:"Habitual 300–600 mg/día (50–100 mg de escina).",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Contiene cumarinas y tiene efecto antiagregante: riesgo de sangrado con Sintrom y AAS."},
{k:"renal",l:"R",t:"Contraindicado en insuficiencia renal y hepática."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."},
{k:"digestivo",l:"A",t:"Puede irritar el estómago."}]},

{id:"vid-roja",n:"Vid roja",s:"Vitis vinifera",a:["vid roja","vina roja"],c:"Planta",u:"Circulación, piernas pesadas, capilares",d:"Habitual 300–600 mg/día.",ev:"baja",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia con Sintrom."},
{k:"emb",l:"A",t:"Datos limitados. Mejor evitar."}]},

{id:"rusco",n:"Rusco",s:"Ruscus aculeatus",a:["rusco","brusco"],c:"Planta",u:"Insuficiencia venosa, hemorroides",d:"Habitual 300–900 mg/día.",ev:"media",al:[],r:[
{k:"hta",l:"A",t:"Efecto vasoconstrictor: prudencia en hipertensión."},
{k:"cardio",l:"A",t:"Con antihipertensivos puede restar eficacia. Prudencia."},
{k:"emb",l:"R",t:"Evitar en el primer trimestre."}]},

{id:"centella",n:"Centella asiática",s:"Centella asiatica",a:["centella","gotu kola"],c:"Planta",u:"Circulación, cicatrización, celulitis, piel",d:"Habitual 60–120 mg/día de triterpenos.",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"Casos descritos de hepatitis tóxica. No usar más de 6 semanas seguidas ni en hepatopatía."},
{k:"sedantes",l:"A",t:"Puede sumar sedación."},
{k:"emb",l:"R",t:"Contraindicada en embarazo y lactancia."},
{k:"antidiab",l:"A",t:"Puede alterar la glucemia."}]},

{id:"hamamelis",n:"Hamamelis",s:"Hamamelis virginiana",a:["hamamelis"],c:"Planta",u:"Hemorroides, varices, piel — sobre todo tópico",d:"Uso tópico principalmente.",ev:"media",al:[],r:[
{k:"digestivo",l:"A",t:"Por vía oral, los taninos pueden dar molestias gástricas y reducir la absorción de hierro."},
{k:"emb",l:"A",t:"Tópico aceptable; oral, evitar."}]},

{id:"tomillo",n:"Tomillo",s:"Thymus vulgaris",a:["tomillo","timol"],c:"Planta",u:"Tos, garganta, digestión",d:"Infusión o jarabe.",ev:"media",al:["labiadas"],r:[
{k:"anticoag",l:"A",t:"Ligero efecto antiagregante a dosis altas."},
{k:"tiroidec",l:"A",t:"Posible actividad tiroidea. Prudencia a dosis altas."},
{k:"emb",l:"A",t:"Uso culinario y en infusión, sin problema. Aceite esencial, evitar."}]},

{id:"hiedra",n:"Hiedra",s:"Hedera helix",a:["hiedra","hedera"],c:"Planta",u:"Tos productiva, mucosidad",d:"Jarabe según producto. Muy usado en pediatría.",ev:"media",al:[],r:[
{k:"digestivo",l:"A",t:"Puede dar náuseas si se supera la dosis."},
{k:"menor",l:"A",t:"Muchos jarabes son aptos desde los 2 años: comprueba la ficha del producto concreto."},
{k:"emb",l:"A",t:"Datos limitados. Consultar."}]},

{id:"eucalipto",n:"Eucalipto",s:"Eucalyptus globulus",a:["eucalipto","eucaliptol","cineol"],c:"Planta",u:"Congestión, vías respiratorias",d:"Inhalación o jarabe.",ev:"media",al:[],r:[
{k:"menor",l:"R",t:"El aceite esencial NO debe aplicarse cerca de la cara ni inhalarse en menores de 6 años: riesgo de espasmo laríngeo y apnea."},
{k:"asma",l:"R",t:"Puede desencadenar broncoespasmo en asmáticos."},
{k:"epilepsia",l:"A",t:"El 1,8-cineol a dosis altas baja el umbral convulsivo."},
{k:"emb",l:"A",t:"Evitar el aceite esencial por vía oral."},
{k:"medicacion_general",l:"A",t:"El cineol induce enzimas hepáticas: puede reducir el efecto de otros fármacos."}]},

{id:"drosera",n:"Drosera",s:"Drosera rotundifolia",a:["drosera"],c:"Planta",u:"Tos seca e irritativa",d:"Jarabe o extracto.",ev:"baja",al:[],r:[
{k:"emb",l:"A",t:"Datos limitados. Evitar."}]},

{id:"salvia",n:"Salvia",s:"Salvia officinalis",a:["salvia"],c:"Planta",u:"Sofocos, sudoración, garganta, digestión",d:"Infusión o extracto. Evitar el uso prolongado del aceite esencial (tuyona).",ev:"media",al:[],r:[
{k:"epilepsia",l:"R",t:"La tuyona es convulsivante. CONTRAINDICADA en epilepsia, sobre todo el aceite esencial."},
{k:"lact",l:"R",t:"Reduce la producción de leche. No vender a madres lactantes que quieran seguir amamantando (sí si quieren destetar)."},
{k:"emb",l:"R",t:"Contraindicada: emenagoga y abortiva a dosis altas."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica. Prudencia."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"sedantes",l:"A",t:"Prudencia con sedantes."}]},

{id:"olivo",n:"Hoja de olivo",s:"Olea europaea",a:["olivo","hoja de olivo","oleuropeina"],c:"Planta",u:"Tensión arterial, colesterol, defensas",d:"Habitual 500–1.000 mg/día.",ev:"media",al:[],r:[
{k:"cardio",l:"R",t:"Suma efecto hipotensor con antihipertensivos: riesgo de bajada de tensión. Derivar para ajustar."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"emb",l:"A",t:"Datos limitados. Evitar extractos."}]}

]);
