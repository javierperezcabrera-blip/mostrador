// Bloque 6 — Superalimentos, otros compuestos, cosmética y productos problemáticos
window.DB = (window.DB || []).concat([

{id:"espirulina",n:"Espirulina",s:"Arthrospira platensis",a:["espirulina","spirulina"],c:"Superalimentos",u:"Proteína, hierro, energía, detox",d:"Habitual 3–5 g/día. Exige análisis de microcistinas y metales pesados al proveedor.",ev:"media",al:[],r:[
{k:"autoinmune",l:"R",t:"Inmunoestimulante: contraindicada en lupus, artritis reumatoide, esclerosis múltiple y otras autoinmunidades."},
{k:"inmuno",l:"R",t:"Puede antagonizar inmunosupresores. No vender a trasplantados."},
{k:"fenilcetonuria",l:"R",t:"Rica en fenilalanina: contraindicada en fenilcetonuria."},
{k:"anticoag",l:"A",t:"Contiene vitamina K y tiene efecto antiagregante. Prudencia con Sintrom."},
{k:"hepatica",l:"A",t:"Riesgo si está contaminada con microcistinas. Solo proveedores con analítica."},
{k:"tiroidec",l:"A",t:"Puede aportar yodo. Prudencia en patología tiroidea."},
{k:"emb",l:"A",t:"Solo producto con garantía de pureza. Consultar."}]},

{id:"chlorella",n:"Chlorella",s:"Chlorella vulgaris",a:["chlorella","clorela"],c:"Superalimentos",u:"Detox, clorofila, hierro",d:"Habitual 3–5 g/día. Debe ser de pared celular rota.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"MUY rica en vitamina K: antagoniza el Sintrom. No vender con acenocumarol."},
{k:"autoinmune",l:"R",t:"Inmunoestimulante. Prudencia alta en autoinmunidad."},
{k:"inmuno",l:"A",t:"Puede interferir con inmunosupresores."},
{k:"yodo",l:"A",t:"Puede aportar yodo. Prudencia en patología tiroidea."},
{k:"sol",l:"A",t:"Fotosensibilidad descrita."}]},

{id:"kelp",n:"Algas kelp / Fucus",s:"Laminaria / Fucus vesiculosus",a:["kelp","fucus","laminaria","alga parda"],c:"Superalimentos",u:"Tiroides, saciedad, remineralizante",d:"El contenido en yodo es enorme y muy variable entre lotes.",ev:"alta",al:["pescado","marisco"],r:[
{k:"_destacado",l:"R",t:"Una sola dosis puede aportar decenas de veces el límite diario de yodo. Es una de las causas más frecuentes de disfunción tiroidea por complemento."},
{k:"tiroidec",l:"R",t:"CONTRAINDICADO en cualquier patología tiroidea. Puede provocar hiper o hipotiroidismo."},
{k:"tiroides",l:"R",t:"Descontrola por completo el tratamiento con levotiroxina. No vender."},
{k:"emb",l:"R",t:"Contraindicado: el exceso de yodo daña el tiroides fetal."},
{k:"anticoag",l:"A",t:"El fucus tiene efecto anticoagulante."},
{k:"metales",l:"A",t:"Puede acumular arsénico y metales pesados. Exige analítica al proveedor."}]},

{id:"moringa",n:"Moringa",s:"Moringa oleifera",a:["moringa"],c:"Superalimentos",u:"Nutrientes, energía, glucemia",d:"Habitual 2–6 g/día de hoja.",ev:"baja",al:[],r:[
{k:"emb",l:"R",t:"CONTRAINDICADA: la raíz y la corteza son abortivas. Evitar toda la planta en embarazo."},
{k:"antidiab",l:"A",t:"Baja la glucemia: vigilar con antidiabéticos."},
{k:"tiroidec",l:"A",t:"Puede modificar la función tiroidea. Prudencia."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."}]},

{id:"noni",n:"Noni",s:"Morinda citrifolia",a:["noni","morinda"],c:"Superalimentos",u:"Energía, defensas",d:"Zumo según producto.",ev:"baja",al:[],r:[
{k:"renal",l:"R",t:"MUY rico en potasio: contraindicado en insuficiencia renal. Hay casos de hiperpotasemia."},
{k:"cardio",l:"R",t:"Con IECA, ARA-II y diuréticos ahorradores: riesgo de hiperpotasemia."},
{k:"hepatica",l:"R",t:"Casos documentados de hepatitis tóxica. No vender en hepatopatía."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"una-gato",n:"Uña de gato",s:"Uncaria tomentosa",a:["una de gato","uncaria"],c:"Planta",u:"Defensas, articulaciones, inflamación",d:"Habitual 250–500 mg/día.",ev:"media",al:[],r:[
{k:"inmuno",l:"R",t:"Inmunomoduladora potente: CONTRAINDICADA en trasplantados y con inmunosupresores."},
{k:"autoinmune",l:"R",t:"Contraindicada en enfermedad autoinmune."},
{k:"emb",l:"R",t:"Contraindicada: tradicionalmente anticonceptiva y abortiva."},
{k:"cardio",l:"A",t:"Puede bajar la tensión y enlentecer el ritmo. Prudencia."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante."},
{k:"medicacion_general",l:"A",t:"Inhibe el CYP3A4: prudencia con medicación crónica."}]},

{id:"pau-darco",n:"Pau d'arco / Lapacho",s:"Tabebuia impetiginosa",a:["pau darco","lapacho","tabebuia"],c:"Planta",u:"Defensas, candidiasis",d:"Infusión o extracto. Uso corto.",ev:"baja",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto anticoagulante marcado: contraindicado con Sintrom, AAS y clopidogrel."},
{k:"emb",l:"R",t:"Contraindicado: potencial teratógeno."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes."},
{k:"hepatica",l:"A",t:"Dosis altas son tóxicas. Uso corto y prudente."}]},

{id:"alfalfa",n:"Alfalfa",s:"Medicago sativa",a:["alfalfa","medicago"],c:"Planta",u:"Remineralizante, menopausia, colesterol",d:"Habitual 500–1.000 mg/día.",ev:"baja",al:[],r:[
{k:"autoinmune",l:"R",t:"CONTRAINDICADA en lupus: la L-canavanina puede reactivarlo. Hay casos documentados."},
{k:"anticoag",l:"R",t:"Muy rica en vitamina K: antagoniza el Sintrom."},
{k:"inmuno",l:"R",t:"Inmunoestimulante: prudencia con inmunosupresores."},
{k:"hormonodep",l:"A",t:"Fitoestrógenos. Prudencia."},
{k:"emb",l:"R",t:"Evitar."},
{k:"sol",l:"A",t:"Fotosensibilizante."}]},

{id:"luteina",n:"Luteína y zeaxantina",s:"",a:["luteina","zeaxantina"],c:"Otros",u:"Salud ocular, pantallas, DMAE",d:"Habitual 10–20 mg/día de luteína.",ev:"alta",al:[],r:[
{k:"fumador",l:"A",t:"Si la fórmula lleva betacaroteno (tipo AREDS clásico), no darla a fumadores. Buscar fórmula AREDS2 sin betacaroteno."},
{k:"emb",l:"A",t:"A dosis dietéticas, sin problema. Evitar megadosis."}]},

{id:"licopeno",n:"Licopeno",s:"",a:["licopeno"],c:"Otros",u:"Próstata, piel, antioxidante",d:"Habitual 5–15 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante leve a dosis altas."},
{k:"cardio",l:"A",t:"Puede bajar ligeramente la tensión."},
{k:"emb",l:"A",t:"Dosis dietéticas sin problema."}]},

{id:"astaxantina",n:"Astaxantina",s:"Haematococcus pluvialis",a:["astaxantina"],c:"Otros",u:"Piel, sol, antioxidante, deporte",d:"Habitual 4–12 mg/día.",ev:"media",al:["marisco"],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia con Sintrom."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."},
{k:"hormonal",l:"A",t:"Actividad 5-alfa-reductasa descrita. Prudencia con terapia hormonal."},
{k:"emb",l:"A",t:"Datos limitados."}]},

{id:"colostro",n:"Calostro bovino",s:"",a:["calostro","colostro"],c:"Otros",u:"Defensas, mucosa intestinal, deportistas",d:"Habitual 1–3 g/día.",ev:"baja",al:["lacteos"],r:[
{k:"alergia_lacteos",l:"R",t:"Es un derivado lácteo: contraindicado en alergia a proteína de leche de vaca."},
{k:"inmuno",l:"A",t:"Inmunomodulador: prudencia con inmunosupresores."},
{k:"religioso",l:"A",t:"No apto para veganos."}]},

{id:"vinagre-manzana",n:"Vinagre de manzana",s:"",a:["vinagre de manzana","acv"],c:"Alimentación",u:"Digestión, glucemia, saciedad",d:"1-2 cucharadas diluidas en agua, con caña si es posible.",ev:"media",al:[],r:[
{k:"antidiab",l:"A",t:"Puede bajar la glucemia: vigilar con insulina."},
{k:"cardio",l:"A",t:"Con diuréticos puede agravar la pérdida de potasio."},
{k:"digestivo",l:"R",t:"Contraindicado en úlcera, gastritis y reflujo: es ácido."},
{k:"dental",l:"A",t:"Erosiona el esmalte dental. Siempre diluido y enjuagando después."}]},

{id:"arcilla",n:"Arcilla (bentonita, illita)",s:"",a:["arcilla","bentonita","illita","arcilla blanca"],c:"Otros",u:"Digestivo, detox, uso externo",d:"Uso puntual por vía oral.",ev:"baja",al:[],r:[
{k:"medicacion_general",l:"R",t:"Adsorbe fármacos igual que el carbón. Separar mínimo 2 horas de cualquier medicamento."},
{k:"digestivo",l:"R",t:"Contraindicada en obstrucción y estreñimiento importante."},
{k:"metales",l:"A",t:"Algunas arcillas contienen plomo. Exige analítica al proveedor."},
{k:"emb",l:"A",t:"Evitar por vía oral."}]},

{id:"nattokinasa",n:"Nattokinasa",s:"",a:["nattokinasa","natto"],c:"Otros",u:"Circulación, fibrinólisis",d:"Habitual 2.000 FU/día.",ev:"media",al:["soja"],r:[
{k:"anticoag",l:"R",t:"Es fibrinolítica: CONTRAINDICADA con anticoagulantes y antiagregantes. Riesgo de hemorragia, incluida cerebral."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes de cualquier cirugía."},
{k:"cardio",l:"A",t:"Puede bajar la tensión."},
{k:"emb",l:"R",t:"Contraindicada."}]},

{id:"serrapeptasa",n:"Serrapeptasa",s:"",a:["serrapeptasa","serratiopeptidasa"],c:"Otros",u:"Inflamación, mucosidad",d:"Habitual 10–60 mg/día en ayunas.",ev:"baja",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto fibrinolítico: contraindicada con anticoagulantes y antiagregantes."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes de cirugía."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"pqq",n:"PQQ",s:"Pirroloquinolina quinona",a:["pqq"],c:"Otros",u:"Energía mitocondrial, cognición",d:"Habitual 10–20 mg/día.",ev:"baja",al:[],r:[
{k:"emb",l:"R",t:"Sin datos. Evitar."},
{k:"medicacion_general",l:"A",t:"Datos de interacción muy escasos. Prudencia con medicación crónica."}]},

{id:"espermidina",n:"Espermidina",s:"",a:["espermidina","germen de trigo"],c:"Otros",u:"Longevidad, autofagia, cabello",d:"Habitual 1–6 mg/día.",ev:"baja",al:["gluten"],r:[
{k:"alergia_gluten",l:"A",t:"Suele obtenerse de germen de trigo. Comprueba si es apto para celíacos."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"pea",n:"PEA (palmitoiletanolamida)",s:"",a:["pea","palmitoiletanolamida"],c:"Otros",u:"Dolor crónico, neuropatía",d:"Habitual 600–1.200 mg/día.",ev:"media",al:[],r:[
{k:"emb",l:"A",t:"Datos limitados. Consultar."},
{k:"medicacion_general",l:"A",t:"Perfil de interacciones favorable, pero si es para dolor crónico debe haber diagnóstico médico. Deriva."}]},

{id:"bicarbonato",n:"Bicarbonato sódico",s:"",a:["bicarbonato"],c:"Otros",u:"Acidez puntual, deporte",d:"Uso puntual.",ev:"media",al:[],r:[
{k:"hta",l:"R",t:"Aporte alto de sodio: contraindicado en hipertensión e insuficiencia cardíaca."},
{k:"renal",l:"R",t:"Contraindicado en insuficiencia renal."},
{k:"medicacion_general",l:"R",t:"Sube el pH gástrico y altera la absorción de muchos fármacos. Separar 2 h."},
{k:"ibp",l:"A",t:"Redundante con el omeprazol y puede enmascarar síntomas que deberían valorarse."}]},

{id:"pomelo",n:"Pomelo (zumo y extracto de semilla)",s:"Citrus paradisi",a:["pomelo","toronja","extracto de semilla de pomelo"],c:"Alimentación",u:"Depurativo, defensas, antimicrobiano",d:"No es tanto un producto como una ALERTA que debes tener siempre presente.",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"★ El pomelo inhibe el CYP3A4 intestinal y multiplica los niveles en sangre de más de 85 medicamentos. Un solo vaso puede bastar y el efecto dura hasta 72 h. Pregunta siempre si un producto 'detox' o 'cítrico' lleva pomelo."},
{k:"estatinas",l:"R",t:"Multiplica los niveles de simvastatina y atorvastatina: riesgo de rabdomiólisis."},
{k:"cardio",l:"R",t:"Potencia peligrosamente amlodipino, nifedipino y otros calcioantagonistas: hipotensión grave."},
{k:"inmuno",l:"R",t:"Eleva ciclosporina y tacrolimus a niveles tóxicos."},
{k:"anticoag",l:"R",t:"Altera los niveles de apixabán y rivaroxabán."},
{k:"sedantes",l:"R",t:"Potencia midazolam, triazolam y buspirona."},
{k:"antiepil",l:"A",t:"Puede alterar los niveles de carbamazepina."}]},

{id:"kombucha",n:"Kombucha",s:"",a:["kombucha"],c:"Bebidas",u:"Bebida fermentada, digestión",d:"Contiene un poco de alcohol y es ácida.",ev:"baja",al:[],r:[
{k:"inmuno",l:"R",t:"Producto fermentado no pasteurizado: evitar en inmunodeprimidos."},
{k:"emb",l:"R",t:"Contiene alcohol y no está pasteurizada. Evitar en embarazo."},
{k:"digestivo",l:"A",t:"Ácida: puede empeorar reflujo y gastritis."},
{k:"diabetes",l:"A",t:"Suele llevar azúcar residual."}]},

{id:"kefir",n:"Kéfir",s:"",a:["kefir"],c:"Bebidas",u:"Flora intestinal, digestión",d:"",ev:"media",al:["lacteos"],r:[
{k:"alergia_lacteos",l:"R",t:"Si es de leche, contraindicado en alergia a proteína de vaca. Existe kéfir de agua."},
{k:"inmuno",l:"A",t:"Fermentado vivo: prudencia en inmunodeprimidos graves."}]},

{id:"stevia-polioles",n:"Edulcorantes (estevia, eritritol, xilitol, maltitol)",s:"",a:["estevia","stevia","eritritol","xilitol","maltitol","polioles"],c:"Alimentación",u:"Alternativa al azúcar",d:"",ev:"media",al:[],r:[
{k:"digestivo",l:"A",t:"Los polioles (xilitol, maltitol, sorbitol) son FODMAP: dan gases y diarrea, sobre todo en colon irritable."},
{k:"cardio",l:"A",t:"La estevia puede bajar algo la tensión y la glucemia: prudencia si ya toma medicación para ello."},
{k:"mascotas",l:"R",t:"El xilitol es MORTAL para los perros incluso en cantidad pequeña. Dilo si el cliente tiene perro."}]},

{id:"retinol-topico",n:"Retinol y retinoides (cosmética)",s:"",a:["retinol","retinoide","retinal","tretinoina"],c:"Cosmética",u:"Antiedad, arrugas, acné",d:"Uso nocturno, siempre con protector solar por la mañana.",ev:"alta",al:[],r:[
{k:"emb",l:"R",t:"NO VENDER a embarazadas ni en lactancia. Los retinoides se desaconsejan por riesgo teratógeno, aunque la absorción tópica sea baja. Ofrece bakuchiol como alternativa."},
{k:"lact",l:"R",t:"Evitar durante la lactancia."},
{k:"sol",l:"R",t:"Fotosensibiliza. Insiste en el SPF 50 diario y en no usarlo antes de exposición solar intensa."},
{k:"piel",l:"A",t:"No combinar con ácidos ni peróxido de benzoilo el mismo día al inicio: irritación."}]},

{id:"acidos-topicos",n:"Ácidos exfoliantes (AHA, BHA, salicílico)",s:"",a:["acido glicolico","salicilico","aha","bha","exfoliante"],c:"Cosmética",u:"Textura, manchas, acné",d:"Uso nocturno, empezando 1-2 veces por semana.",ev:"alta",al:["aspirina","salicilatos"],r:[
{k:"emb",l:"A",t:"El salicílico tópico en concentración baja y zona limitada se considera aceptable, pero muchas marcas lo desaconsejan. Si hay duda, no lo vendas a embarazadas."},
{k:"alergia_aspirina",l:"A",t:"El salicílico deriva de los salicilatos: prudencia en alergia a la aspirina."},
{k:"sol",l:"R",t:"Fotosensibilizan. SPF 50 obligatorio."},
{k:"piel",l:"A",t:"No combinar con retinol el mismo día al principio."}]},

{id:"ae-citricos",n:"Aceites esenciales cítricos (bergamota, limón, naranja)",s:"",a:["bergamota","aceite esencial de limon","citricos","furocumarinas"],c:"Cosmética",u:"Aromaterapia, cosmética",d:"Diluir siempre. Nunca puros sobre la piel.",ev:"alta",al:[],r:[
{k:"sol",l:"R",t:"FOTOTÓXICOS: las furocumarinas provocan quemaduras y manchas graves con el sol (fitofotodermatitis). No aplicar en zonas expuestas antes de tomar el sol."},
{k:"emb",l:"A",t:"Muchos aceites esenciales están desaconsejados en embarazo. Consultar caso a caso."},
{k:"menor",l:"R",t:"No aplicar aceites esenciales en menores de 3 años ni cerca de la cara."},
{k:"piel",l:"A",t:"Nunca puros sobre la piel: dilución máxima del 1-2%."}]},

{id:"ae-general",n:"Aceites esenciales (uso oral)",s:"",a:["aceites esenciales","aromaterapia","ae"],c:"Cosmética",u:"Aromaterapia y uso interno",d:"La vía oral de aceites esenciales NO es terreno de herbolario sin formación específica.",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"Regla de oro: no recomiendes aceites esenciales por vía oral. Son extremadamente concentrados, hepatotóxicos y neurotóxicos a dosis pequeñas, y hay intoxicaciones graves en niños. Vende difusión y uso tópico diluido."},
{k:"menor",l:"R",t:"Contraindicados por vía oral en menores. Riesgo de convulsiones y depresión respiratoria."},
{k:"emb",l:"R",t:"Evitar por vía oral en embarazo y lactancia."},
{k:"epilepsia",l:"R",t:"Alcanfor, salvia, hisopo, romero y eucalipto pueden desencadenar convulsiones."},
{k:"asma",l:"A",t:"La difusión puede desencadenar broncoespasmo en asmáticos."}]},

{id:"dhea",n:"DHEA",s:"Dehidroepiandrosterona",a:["dhea"],c:"No autorizado",u:"Antiedad, hormonas",d:"",ev:"alta",al:[],lg:"NO autorizado como complemento alimenticio en España ni en la UE. Es una hormona esteroidea. No debe estar en tu lineal.",r:[
{k:"_destacado",l:"R",t:"★ NO VENDER. Es una hormona, no un complemento, y su venta como complemento alimenticio no está autorizada en España. Además tiene contraindicaciones oncológicas serias."},
{k:"hormonodep",l:"R",t:"Contraindicada en cáncer de mama, próstata y tumores hormonodependientes."},
{k:"emb",l:"R",t:"Contraindicada."}]},

{id:"yohimbina",n:"Yohimbina",s:"Pausinystalia yohimbe",a:["yohimbina","yohimbe"],c:"No autorizado",u:"Libido, quemagrasas",d:"",ev:"alta",al:[],lg:"Su uso en complementos alimenticios está prohibido o muy restringido en España y varios países de la UE.",r:[
{k:"_destacado",l:"R",t:"★ NO VENDER. Hay casos de crisis hipertensivas, arritmias, convulsiones y muertes. Producto de riesgo alto, frecuente en quemagrasas importados."},
{k:"cardiop",l:"R",t:"Contraindicada en cualquier cardiopatía o hipertensión."},
{k:"antidep",l:"R",t:"Contraindicada con IMAO, ISRS y tricíclicos."},
{k:"psiq",l:"R",t:"Desencadena crisis de ansiedad y pánico."}]},

{id:"kava",n:"Kava kava",s:"Piper methysticum",a:["kava","kava kava"],c:"No autorizado",u:"Ansiedad",d:"",ev:"alta",al:[],lg:"Retirada del mercado en España por la AEMPS por hepatotoxicidad grave.",r:[
{k:"_destacado",l:"R",t:"★ NO VENDER. Retirada en España por casos de fallo hepático fulminante y trasplante."},
{k:"hepatica",l:"R",t:"Hepatotoxicidad grave documentada."}]},

{id:"efedra",n:"Efedra / Ma Huang",s:"Ephedra sinica",a:["efedra","ma huang","efedrina"],c:"No autorizado",u:"Quemagrasas, energía",d:"",ev:"alta",al:[],lg:"Prohibida en complementos alimenticios en la UE.",r:[
{k:"_destacado",l:"R",t:"★ NO VENDER. Prohibida. Asociada a infartos, ictus y muertes. Aparece en productos importados y en compras online: si un cliente te la enseña, adviértele."}]},

{id:"plata-coloidal",n:"Plata coloidal",s:"",a:["plata coloidal"],c:"No autorizado",u:"Antimicrobiano, defensas",d:"",ev:"alta",al:[],lg:"No autorizada como complemento alimenticio en la UE.",r:[
{k:"_destacado",l:"R",t:"★ NO VENDER por vía oral. Provoca argiria (coloración azul-grisácea permanente de la piel), no tiene eficacia demostrada y no está autorizada. Además quela antibióticos y levotiroxina."},
{k:"tiroides",l:"R",t:"Reduce la absorción de levotiroxina."},
{k:"antibiot",l:"R",t:"Quela quinolonas y tetraciclinas."}]},

{id:"cbd",n:"CBD (cannabidiol) oral",s:"Cannabis sativa",a:["cbd","cannabidiol"],c:"No autorizado",u:"Dolor, ansiedad, descanso",d:"",ev:"alta",al:[],lg:"En España el CBD NO está autorizado para consumo oral como complemento alimenticio. En febrero de 2026 la EFSA fijó por fin un nivel de ingesta seguro provisional (unos 2 mg/día en un adulto de 70 kg), lo que desbloquea las solicitudes de nuevo alimento pendientes, pero eso NO es una autorización de venta. Hasta que se autorice, solo uso tópico.",r:[
{k:"_destacado",l:"R",t:"★ Ojo con la etiqueta. Vender CBD para ingerir en España te expone a sanción de consumo/AESAN, y la OCU ya ha denunciado a la AESAN la venta de gominolas con CBD. Uso tópico sí; oral, no, mientras no se autorice como novel food."},
{k:"medicacion_general",l:"R",t:"Inhibe CYP3A4 y CYP2C19: interacciona con anticoagulantes, antiepilépticos y muchos más."},
{k:"antiepil",l:"R",t:"Eleva los niveles de clobazam y valproato."},
{k:"hepatica",l:"R",t:"Elevación de transaminasas descrita."},
{k:"emb",l:"R",t:"Contraindicado."}]},

{id:"nmn",n:"NMN / NR (nicotinamida ribósido)",s:"",a:["nmn","nr","nicotinamida ribosido","nad"],c:"No autorizado",u:"Longevidad, energía, NAD+",d:"",ev:"media",al:[],lg:"El NMN no está autorizado como complemento alimenticio en la UE (no tiene aprobación de nuevo alimento). El NR sí está autorizado como nuevo alimento con condiciones. Verifica el estatus exacto con tu proveedor antes de ponerlo en el lineal.",r:[
{k:"_destacado",l:"A",t:"Comprueba el estatus regulatorio del producto concreto antes de venderlo. Es una zona gris que las inspecciones están mirando."},
{k:"quimio",l:"A",t:"Datos contradictorios en procesos tumorales. Derivar."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"zeolita",n:"Zeolita",s:"Clinoptilolita",a:["zeolita","clinoptilolita"],c:"No autorizado",u:"Detox, metales pesados",d:"",ev:"baja",al:[],lg:"Estatus como complemento alimenticio no resuelto en la UE. Verifica antes de venderla.",r:[
{k:"_destacado",l:"A",t:"Zona gris regulatoria y evidencia muy pobre. Verifica el estatus del producto concreto."},
{k:"medicacion_general",l:"R",t:"Adsorbe fármacos. Separar 2 h de cualquier medicación."},
{k:"renal",l:"A",t:"Puede aportar aluminio. Prudencia en insuficiencia renal."},
{k:"emb",l:"R",t:"Evitar."}]}

]);
