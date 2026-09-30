// Bloque 8 — Ingredientes que aparecen en el catálogo real de MAVIA y faltaban
window.DB = (window.DB || []).concat([

{id:"oregano-ae",n:"Orégano (aceite esencial en perlas)",s:"Origanum vulgare",a:["oregano","origanum","carvacrol"],c:"Planta",u:"Antimicrobiano intestinal, defensas, candidiasis",d:"Habitual 1-2 perlas/día con comida. Uso en ciclos cortos (2-4 semanas), no continuo.",ev:"media",al:["labiadas"],r:[
{k:"_destacado",l:"A",t:"Es un aceite esencial por vía oral: muy concentrado. Siempre con comida, nunca en ayunas, y en ciclos cortos. Si el cliente lo quiere tomar meses seguidos, deriva."},
{k:"digestivo",l:"R",t:"Muy irritante para la mucosa. Contraindicado en úlcera, gastritis y reflujo."},
{k:"emb",l:"R",t:"CONTRAINDICADO en embarazo: emenagogo y potencialmente abortivo. También en lactancia."},
{k:"anticoag",l:"A",t:"Efecto antiagregante descrito. Prudencia con Sintrom y aspirina."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"menor",l:"R",t:"No dar aceites esenciales por vía oral a menores."},
{k:"probiotico",l:"A",t:"Es antimicrobiano: arrasa también la flora buena. Separar del probiótico y reponer flora después del ciclo."},
{k:"hierro",l:"A",t:"Puede reducir la absorción de hierro. Separar."}]},

{id:"glutation",n:"Glutatión reducido",s:"L-glutatión",a:["glutation","glutathion","gsh"],c:"Otros",u:"Antioxidante maestro, hígado, piel, detoxificación",d:"Habitual 250–500 mg/día. Las formas liposomadas se absorben mucho mejor.",ev:"media",al:[],r:[
{k:"asma",l:"A",t:"Inhalado puede dar broncoespasmo; por vía oral, prudencia en asmáticos."},
{k:"quimio",l:"A",t:"Antioxidante potente: durante quimioterapia o radioterapia debe autorizarlo el oncólogo, porque puede interferir con el tratamiento."},
{k:"emb",l:"A",t:"Datos limitados. Consultar."},
{k:"medicacion_general",l:"A",t:"Modula enzimas de detoxificación hepática. Con medicación crónica, que lo sepa su farmacéutico."}]},

{id:"proteasas",n:"Proteasas sistémicas (Serrazimes, serrapeptasa, bromelina)",s:"Aspergillus oryzae / melleus",a:["proteasas","serrazimes","enzimas sistemicas","peptasa"],c:"Otros",u:"Inflamación, articulaciones, recuperación, fibrina",d:"En ayunas, lejos de las comidas: con comida hacen de enzima digestiva, no de antiinflamatorio.",ev:"media",al:["hongos"],r:[
{k:"anticoag",l:"R",t:"Son fibrinolíticas: suman al Sintrom, la aspirina y el clopidogrel. Riesgo de hemorragia. NO VENDER sin visto bueno médico."},
{k:"cirugia",l:"R",t:"Suspender 2 semanas antes de cualquier cirugía o extracción dental."},
{k:"digestivo",l:"R",t:"Contraindicadas en úlcera activa: en ayunas irritan."},
{k:"alergia_hongos",l:"A",t:"Origen fúngico (Aspergillus). Prudencia en alergia a hongos."},
{k:"emb",l:"R",t:"Sin datos de seguridad. Evitar."},
{k:"antibiot",l:"A",t:"Pueden aumentar la absorción de algunos antibióticos. Derivar."}]},

{id:"cbn",n:"CBN (cannabinol)",s:"Cannabis sativa",a:["cbn","cannabinol"],c:"No autorizado",u:"Descanso, se combina con melatonina",d:"",ev:"baja",al:[],lg:"Igual que el CBD: no autorizado como complemento alimenticio en España. Además el CBN es más sedante que el CBD.",r:[
{k:"_destacado",l:"R",t:"★ Mismo problema legal que el CBD por vía oral en España, y encima con efecto sedante marcado. Revisa cómo lo etiqueta tu proveedor."},
{k:"sedantes",l:"R",t:"Suma sedación con ansiolíticos, hipnóticos y alcohol."},
{k:"conduccion",l:"R",t:"No conducir después de tomarlo. Advertirlo siempre."},
{k:"medicacion_general",l:"R",t:"Como el CBD, interfiere con enzimas hepáticas. Con medicación crónica, deriva."},
{k:"emb",l:"R",t:"Contraindicado."},
{k:"menor",l:"R",t:"No vender a menores."}]},

{id:"mentol-alcanfor",n:"Mentol y alcanfor (uso tópico)",s:"",a:["mentol","alcanfor","balsamo tigre","frio"],c:"Cosmética",u:"Cremas y roll-on de efecto frío, contracturas, golpes",d:"Uso externo. No aplicar sobre piel rota.",ev:"alta",al:[],r:[
{k:"menor",l:"R",t:"NO aplicar mentol ni alcanfor en la cara ni cerca de la nariz en menores de 3 años: riesgo de espasmo de laringe y apnea. En niños mayores, solo en extremidades."},
{k:"herida",l:"R",t:"No aplicar sobre heridas abiertas, quemaduras ni piel irritada."},
{k:"asma",l:"A",t:"El vapor puede desencadenar broncoespasmo en asmáticos."},
{k:"emb",l:"A",t:"Uso tópico puntual en zona pequeña se considera aceptable; evitar el alcanfor en cantidad."},
{k:"piel",l:"A",t:"Lavarse las manos después y no tocarse los ojos."}]},

{id:"capsaicina",n:"Capsaicina y efecto calor (uso tópico)",s:"Capsicum",a:["capsaicina","calor","capsicum","pimiento"],c:"Cosmética",u:"Cremas de calor, contracturas, dolor muscular",d:"Uso externo, capa fina. El efecto tarda unos minutos y puede escocer bastante.",ev:"alta",al:[],r:[
{k:"piel",l:"R",t:"Nunca antes ni después de ducha caliente, sauna o manta eléctrica: puede provocar quemadura. Avísalo siempre, es el error más común con estas cremas."},
{k:"herida",l:"R",t:"No sobre heridas, mucosas ni piel irritada. Lavarse las manos a conciencia."},
{k:"menor",l:"R",t:"No en menores sin indicación."},
{k:"emb",l:"A",t:"Uso tópico puntual; evitar zonas amplias."},
{k:"cardiop",l:"A",t:"Zonas amplias con calor pueden dar taquicardia y bajada de tensión en personas frágiles."}]},

{id:"manuka",n:"Miel de Manuka (MGO)",s:"Leptospermum scoparium",a:["manuka","mgo","metilglioxal"],c:"Apicultura",u:"Garganta, defensas, digestivo, uso tópico en heridas",d:"El número MGO indica la concentración de metilglioxal: a más número, más potencia y más precio.",ev:"media",al:["abejas"],r:[
{k:"menor",l:"R",t:"Es miel: NUNCA a menores de 12 meses (botulismo infantil)."},
{k:"diabetes",l:"R",t:"Sigue siendo azúcar, y en cantidad. Con diabetes hay que contarla como hidratos y avisar. No la vendas como si fuera inocua."},
{k:"alergia_abejas",l:"R",t:"Contraindicada en alergia a productos apícolas."},
{k:"inmuno",l:"A",t:"En inmunodeprimidos graves, la miel cruda puede llevar esporas. Consultar."},
{k:"quimio",l:"A",t:"En pacientes con neutropenia, consultar con oncología antes de tomar miel cruda."}]},

{id:"paba",n:"PABA (ácido paraaminobenzoico)",s:"",a:["paba"],c:"Vitamina",u:"Acompañante del complejo B, pelo, piel",d:"Habitual 50–100 mg/día.",ev:"baja",al:[],r:[
{k:"antibiot",l:"R",t:"ANTAGONIZA las sulfamidas y les quita el efecto. No vender a quien esté con ese antibiótico."},
{k:"hepatica",l:"A",t:"Dosis altas y prolongadas se han asociado a toxicidad hepática. Prudencia."},
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."},
{k:"emb",l:"A",t:"Datos limitados. Evitar dosis altas."}]},

{id:"opc-uva",n:"OPC / Semilla de uva",s:"Vitis vinifera, semilla",a:["opc","semilla de uva","proantocianidinas","grape seed"],c:"Otros",u:"Antioxidante, circulación, piel",d:"Habitual 50–300 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"R",t:"Efecto antiagregante: riesgo de sangrado con Sintrom, aspirina y clopidogrel."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes de cirugía."},
{k:"cardio",l:"A",t:"Puede bajar la tensión. Prudencia con antihipertensivos."},
{k:"emb",l:"A",t:"Datos limitados. Mejor evitar."}]},

{id:"rabano-negro",n:"Rábano negro",s:"Raphanus sativus niger",a:["rabano negro","raphanus"],c:"Planta",u:"Vesícula, digestión de grasas, depurativo",d:"Habitual según preparado.",ev:"baja",al:[],r:[
{k:"biliar",l:"R",t:"Colerético potente: CONTRAINDICADO en cálculos y obstrucción de vías biliares. Puede provocar cólico."},
{k:"digestivo",l:"A",t:"Puede dar ardor y gases. Evitar en gastritis."},
{k:"tiroidec",l:"A",t:"Es una crucífera: a dosis altas, potencial bociógeno. Prudencia en hipotiroidismo."},
{k:"emb",l:"A",t:"Datos limitados. Consultar."}]}

]);
