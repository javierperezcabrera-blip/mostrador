// Bloque 3 — Plantas: sistema nervioso, adaptógenos, articulaciones
window.DB = (window.DB || []).concat([

{id:"hiperico",n:"Hierba de San Juan / Hipérico",s:"Hypericum perforatum",a:["hiperico","hierba de san juan","corazoncillo","st johns wort"],c:"Planta",u:"Estado de ánimo bajo",d:"Habitual 300–900 mg/día de extracto estandarizado.",ev:"alta",al:[],lg:"En España, a ciertas concentraciones de hipericina está considerado medicamento. Revisa la ficha del producto.",r:[
{k:"_destacado",l:"R",t:"★ LA PLANTA MÁS PELIGROSA DEL HERBOLARIO. Es un inductor potente del CYP3A4 y de la glicoproteína-P: acelera la eliminación de MUCHÍSIMOS fármacos y les quita el efecto. Regla práctica: si el cliente toma CUALQUIER medicamento de forma crónica, NO SE LO VENDAS sin que lo apruebe su médico o farmacéutico."},
{k:"hormonal",l:"R",t:"ANULA los anticonceptivos hormonales. Hay embarazos documentados por esto. No vender."},
{k:"anticoag",l:"R",t:"Reduce el efecto del Sintrom/warfarina y de los anticoagulantes nuevos: riesgo de trombosis."},
{k:"antidep",l:"R",t:"Con ISRS, duloxetina, tramadol o triptanes: síndrome serotoninérgico. Con otros, pérdida de eficacia. NO VENDER."},
{k:"inmuno",l:"R",t:"Reduce ciclosporina y tacrolimus: se han producido rechazos de trasplante. NO VENDER."},
{k:"antiviral",l:"R",t:"Anula antirretrovirales (VIH) y antivirales de hepatitis C. NO VENDER."},
{k:"quimio",l:"R",t:"Reduce imatinib, irinotecán y otros citostáticos. NO VENDER."},
{k:"digoxina",l:"R",t:"Baja los niveles de digoxina hasta un 25%."},
{k:"estatinas",l:"R",t:"Reduce el efecto de simvastatina y atorvastatina."},
{k:"antiepil",l:"R",t:"Reduce carbamazepina y fenitoína: riesgo de crisis."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia."},
{k:"psiq",l:"R",t:"Puede desencadenar manía en trastorno bipolar."},
{k:"sol",l:"A",t:"Fotosensibilizante: evitar sol intenso y cabinas de bronceado."}]},

{id:"valeriana",n:"Valeriana",s:"Valeriana officinalis",a:["valeriana"],c:"Planta",u:"Descanso nocturno, nerviosismo",d:"Habitual 300–600 mg de extracto antes de dormir.",ev:"media",al:[],r:[
{k:"sedantes",l:"R",t:"Potencia benzodiacepinas, zolpidem, antihistamínicos y alcohol. Somnolencia excesiva. No combinar sin control médico."},
{k:"conduccion",l:"A",t:"Puede afectar a la conducción y al manejo de maquinaria. Avísalo siempre."},
{k:"hepatica",l:"A",t:"Casos aislados de hepatotoxicidad. Evitar en hepatopatía."},
{k:"emb",l:"R",t:"Sin datos suficientes. Evitar en embarazo y lactancia."},
{k:"cirugia",l:"A",t:"Suspender una semana antes de una anestesia general."}]},

{id:"pasiflora",n:"Pasiflora",s:"Passiflora incarnata",a:["pasiflora","flor de la pasion"],c:"Planta",u:"Ansiedad leve, descanso",d:"Habitual 200–800 mg/día.",ev:"media",al:[],r:[
{k:"sedantes",l:"A",t:"Suma sedación con benzodiacepinas, antihistamínicos y alcohol."},
{k:"conduccion",l:"A",t:"Puede dar somnolencia. Avisar."},
{k:"emb",l:"R",t:"Evitar: se le atribuye efecto uterotónico."},
{k:"anticoag",l:"A",t:"Prudencia, posible efecto aditivo."}]},

{id:"melisa",n:"Melisa / Toronjil",s:"Melissa officinalis",a:["melisa","toronjil"],c:"Planta",u:"Nerviosismo, digestiones nerviosas, descanso",d:"Infusión o 300–600 mg de extracto.",ev:"media",al:[],r:[
{k:"tiroidec",l:"A",t:"Puede interferir en la función tiroidea (antitiroideo leve). Prudencia en hipotiroidismo."},
{k:"sedantes",l:"A",t:"Suma sedación."},
{k:"emb",l:"A",t:"Puntualmente en infusión se considera aceptable; evitar extractos concentrados."}]},

{id:"amapola",n:"Amapola de California",s:"Eschscholzia californica",a:["amapola de california","eschscholzia"],c:"Planta",u:"Descanso, despertares nocturnos",d:"Habitual 200–400 mg de extracto.",ev:"baja",al:[],r:[
{k:"sedantes",l:"A",t:"Suma sedación con hipnóticos y ansiolíticos."},
{k:"antidep",l:"A",t:"Prudencia con IMAO."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."},
{k:"conduccion",l:"A",t:"Somnolencia. Avisar."}]},

{id:"lupulo",n:"Lúpulo",s:"Humulus lupulus",a:["lupulo"],c:"Planta",u:"Descanso, sofocos de menopausia",d:"Habitual 100–300 mg de extracto.",ev:"baja",al:[],r:[
{k:"hormonodep",l:"R",t:"Contiene 8-prenilnaringenina, uno de los fitoestrógenos más potentes que se conocen. Evitar en cáncer de mama, útero u ovario."},
{k:"sedantes",l:"A",t:"Suma sedación."},
{k:"psiq",l:"A",t:"Puede agravar cuadros depresivos."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"lavanda",n:"Lavanda",s:"Lavandula angustifolia",a:["lavanda","espliego","silexan"],c:"Planta",u:"Ansiedad leve, descanso",d:"80 mg/día de aceite esencial oral estandarizado, o uso aromático.",ev:"media",al:[],r:[
{k:"sedantes",l:"A",t:"Suma sedación."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante leve."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica débil descrita. Prudencia."},
{k:"emb",l:"A",t:"Uso aromático puntual aceptable; evitar vía oral."}]},

{id:"manzanilla",n:"Manzanilla",s:"Matricaria recutita",a:["manzanilla","camomila"],c:"Planta",u:"Digestiones, gases, relajación, uso ocular externo",d:"Infusión habitual.",ev:"media",al:["asteraceas"],r:[
{k:"alergia_asteraceas",l:"R",t:"Familia de las asteráceas: reacción cruzada con ambrosía, artemisa y crisantemo. Preguntar en alérgicos al polen."},
{k:"anticoag",l:"A",t:"Contiene cumarinas. A dosis altas, prudencia con Sintrom."},
{k:"sedantes",l:"A",t:"Sedación leve aditiva."}]},

{id:"tila",n:"Tila",s:"Tilia platyphyllos",a:["tila","tilo"],c:"Planta",u:"Nerviosismo, descanso",d:"Infusión.",ev:"baja",al:[],r:[
{k:"sedantes",l:"A",t:"Sedación leve aditiva."},
{k:"cardiop",l:"A",t:"Uso muy prolongado y a dosis altas: prudencia en cardiopatía."}]},

{id:"ashwagandha",n:"Ashwagandha",s:"Withania somnifera",a:["ashwagandha","withania","bufera"],c:"Planta",u:"Estrés, energía, descanso",d:"Habitual 300–600 mg/día de extracto (KSM-66, Sensoril).",ev:"media",al:["solanaceas"],r:[
{k:"tiroidec",l:"R",t:"AUMENTA T3 y T4. Puede provocar un hipertiroidismo, sobre todo en tiroides ya alterado. No vender en patología tiroidea sin endocrino."},
{k:"tiroides",l:"R",t:"Con levotiroxina descontrola la dosis. Derivar."},
{k:"autoinmune",l:"R",t:"Estimula el sistema inmune: evitar en lupus, artritis reumatoide, Hashimoto, esclerosis múltiple."},
{k:"inmuno",l:"R",t:"Antagoniza inmunosupresores. No vender a trasplantados."},
{k:"hepatica",l:"R",t:"Hay casos documentados de hepatotoxicidad (Islandia, EE. UU., alertas europeas). No vender en hepatopatía y suspender si aparece ictericia o cansancio marcado."},
{k:"emb",l:"R",t:"Abortivo tradicional. CONTRAINDICADO en embarazo."},
{k:"sedantes",l:"A",t:"Suma sedación con benzodiacepinas."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia. Vigilar."},
{k:"cardio",l:"A",t:"Puede bajar la tensión. Prudencia."}]},

{id:"rhodiola",n:"Rhodiola",s:"Rhodiola rosea",a:["rhodiola","raiz artica"],c:"Planta",u:"Fatiga mental, estrés, rendimiento",d:"Habitual 200–600 mg/día, por la mañana.",ev:"media",al:[],r:[
{k:"antidep",l:"R",t:"Actividad sobre serotonina y MAO: riesgo con ISRS e IMAO. Derivar."},
{k:"psiq",l:"R",t:"Puede desencadenar agitación o manía en trastorno bipolar."},
{k:"hta",l:"A",t:"Puede subir ligeramente la tensión en personas sensibles."},
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia."},
{k:"emb",l:"R",t:"Sin datos. Evitar."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica descrita in vitro. Prudencia."}]},

{id:"ginseng",n:"Ginseng coreano / rojo",s:"Panax ginseng",a:["ginseng","panax","ginseng rojo","ginseng coreano"],c:"Planta",u:"Fatiga, rendimiento físico y mental, libido",d:"Habitual 200–400 mg/día de extracto estandarizado. Ciclos de 2–3 meses.",ev:"alta",al:[],r:[
{k:"anticoag",l:"R",t:"Reduce el efecto de la warfarina y tiene efecto antiagregante. Riesgo en ambos sentidos. No vender con Sintrom."},
{k:"antidiab",l:"R",t:"Baja la glucemia: riesgo de hipoglucemia con insulina o sulfonilureas."},
{k:"antidep",l:"R",t:"Con IMAO (fenelzina) se han descrito manía e insomnio."},
{k:"hta",l:"A",t:"Puede subir la tensión. Prudencia en hipertensos."},
{k:"hormonodep",l:"A",t:"Actividad estrogénica débil. Consultar en tumores hormonodependientes."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."},
{k:"ansiedad",l:"A",t:"Puede dar insomnio y nerviosismo. No tomar por la tarde."}]},

{id:"eleuterococo",n:"Eleuterococo / Ginseng siberiano",s:"Eleutherococcus senticosus",a:["eleuterococo","ginseng siberiano"],c:"Planta",u:"Fatiga, defensas, adaptógeno suave",d:"Habitual 300–1.200 mg/día.",ev:"media",al:[],r:[
{k:"digoxina",l:"R",t:"Interfiere con la digoxina y con su medición analítica. No vender."},
{k:"hta",l:"A",t:"Puede subir la tensión. Prudencia."},
{k:"anticoag",l:"A",t:"Posible efecto sobre la coagulación."},
{k:"autoinmune",l:"A",t:"Inmunoestimulante: prudencia en enfermedad autoinmune."},
{k:"emb",l:"R",t:"Evitar."}]},

{id:"maca",n:"Maca",s:"Lepidium meyenii",a:["maca","maca andina"],c:"Planta",u:"Energía, libido, menopausia",d:"Habitual 1,5–3 g/día.",ev:"baja",al:[],r:[
{k:"hormonodep",l:"A",t:"Aunque no es fitoestrógeno clásico, se le atribuye modulación hormonal. Consultar en tumores hormonodependientes."},
{k:"tiroidec",l:"A",t:"Es una crucífera: a dosis altas y cruda, potencial bociógeno. Prudencia en hipotiroidismo."},
{k:"hta",l:"A",t:"Puede subir ligeramente la tensión."},
{k:"emb",l:"A",t:"Sin datos suficientes. Mejor evitar."}]},

{id:"tribulus",n:"Tribulus",s:"Tribulus terrestris",a:["tribulus","abrojo"],c:"Planta",u:"Libido, deportiva",d:"Habitual 500–1.500 mg/día.",ev:"baja",al:[],r:[
{k:"hormonodep",l:"R",t:"Evitar en cáncer de próstata y en tumores hormonodependientes."},
{k:"prostata",l:"R",t:"Puede empeorar la hiperplasia benigna de próstata."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"cardio",l:"A",t:"Puede bajar la tensión. Prudencia."},
{k:"emb",l:"R",t:"Contraindicado."},
{k:"hepatica",l:"A",t:"Casos aislados de hepatotoxicidad y nefrotoxicidad con productos adulterados."}]},

{id:"curcuma",n:"Cúrcuma",s:"Curcuma longa",a:["curcuma","curcumina","turmeric"],c:"Planta",u:"Articulaciones, inflamación, digestión",d:"Habitual 500–1.500 mg/día de extracto. Las fórmulas con piperina o fitosomas multiplican la absorción (y el riesgo de interacción).",ev:"alta",al:[],r:[
{k:"biliar",l:"R",t:"CONTRAINDICADA en cálculos biliares y obstrucción de vías biliares: es colerética y provoca cólico."},
{k:"hepatica",l:"R",t:"Hay casos documentados de hepatitis tóxica, sobre todo con formas de alta biodisponibilidad. Alerta de la AEMPS y de agencias europeas. No vender en hepatopatía; suspender si aparece ictericia, orina oscura o cansancio."},
{k:"anticoag",l:"R",t:"Efecto antiagregante y potenciación del Sintrom. Con anticoagulantes, no vender extractos concentrados."},
{k:"cirugia",l:"A",t:"Suspender 2 semanas antes de una cirugía."},
{k:"hierro",l:"A",t:"Quela el hierro y puede empeorar una anemia ferropénica. Separar."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"quimio",l:"A",t:"Puede interferir con algunos citostáticos. Derivar a oncología."},
{k:"emb",l:"R",t:"Extractos concentrados contraindicados (la especia en la comida, sin problema)."},
{k:"digestivo",l:"A",t:"Puede dar reflujo y molestias gástricas."}]},

{id:"jengibre",n:"Jengibre",s:"Zingiber officinale",a:["jengibre","ginger"],c:"Planta",u:"Náuseas, digestión, inflamación, mareo en viajes",d:"Habitual 1–2 g/día. En náuseas del embarazo, hasta 1 g/día se considera aceptable.",ev:"alta",al:[],r:[
{k:"anticoag",l:"A",t:"Efecto antiagregante a dosis altas. Con Sintrom o AAS, limitar a uso culinario."},
{k:"biliar",l:"A",t:"Prudencia en litiasis biliar."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"digestivo",l:"A",t:"Puede dar ardor y reflujo."},
{k:"emb",l:"A",t:"Hasta 1 g/día se considera seguro para las náuseas; por encima, consultar."}]},

{id:"boswellia",n:"Boswellia / Incienso indio",s:"Boswellia serrata",a:["boswellia","incienso","olibano"],c:"Planta",u:"Articulaciones, inflamación",d:"Habitual 300–1.200 mg/día de extracto.",ev:"media",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante. Prudencia."},
{k:"inmuno",l:"A",t:"Modula la respuesta inmune: prudencia con inmunosupresores."},
{k:"emb",l:"R",t:"Evitar: efecto emenagogo descrito."},
{k:"digestivo",l:"A",t:"Puede dar molestias gástricas y diarrea."}]},

{id:"harpagofito",n:"Harpagofito / Garra del diablo",s:"Harpagophytum procumbens",a:["harpagofito","garra del diablo","harpago"],c:"Planta",u:"Dolor articular, artrosis, lumbalgia",d:"Habitual 600–1.200 mg/día de extracto.",ev:"media",al:[],r:[
{k:"digestivo",l:"R",t:"CONTRAINDICADO en úlcera gástrica o duodenal y en reflujo importante: estimula la secreción ácida."},
{k:"anticoag",l:"R",t:"Potencia la warfarina/acenocumarol. No vender con Sintrom."},
{k:"digoxina",l:"R",t:"Puede alterar el ritmo cardíaco y potenciar la digoxina. Derivar."},
{k:"cardiop",l:"A",t:"Prudencia en arritmias."},
{k:"antidiab",l:"A",t:"Puede bajar la glucemia."},
{k:"biliar",l:"R",t:"Contraindicado en obstrucción biliar."},
{k:"emb",l:"R",t:"Contraindicado: oxitócico."}]},

{id:"sauce",n:"Sauce blanco",s:"Salix alba",a:["sauce blanco","salix","salicina"],c:"Planta",u:"Dolor, fiebre — la 'aspirina vegetal'",d:"Habitual 120–240 mg/día de salicina.",ev:"media",al:["aspirina","salicilatos"],r:[
{k:"alergia_aspirina",l:"R",t:"CONTRAINDICADO en alergia o intolerancia a la aspirina y a los AINE, y en asma con poliposis nasal (triada ASA)."},
{k:"anticoag",l:"R",t:"Suma efecto antiagregante al Sintrom, AAS o clopidogrel: riesgo de hemorragia. NO VENDER."},
{k:"menor",l:"R",t:"NO VENDER a menores de 16 años con proceso viral: riesgo de síndrome de Reye."},
{k:"digestivo",l:"R",t:"Contraindicado en úlcera péptica."},
{k:"renal",l:"A",t:"Como los AINE, prudencia en insuficiencia renal."},
{k:"emb",l:"R",t:"Contraindicado, sobre todo en el tercer trimestre."}]},

{id:"glucosamina",n:"Glucosamina",s:"Sulfato de glucosamina",a:["glucosamina"],c:"Articulaciones",u:"Artrosis, cartílago",d:"Habitual 1.500 mg/día.",ev:"alta",al:["marisco","crustaceos"],r:[
{k:"alergia_marisco",l:"R",t:"La mayoría se obtiene de caparazón de crustáceos. Comprueba el origen si hay alergia a marisco (existe versión fermentada vegetal)."},
{k:"anticoag",l:"R",t:"Hay casos de aumento del INR con acenocumarol/warfarina. No vender con Sintrom sin control."},
{k:"antidiab",l:"A",t:"Puede elevar ligeramente la glucemia. Que vigile sus controles."},
{k:"asma",l:"A",t:"Casos aislados de empeoramiento del asma."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"condroitina",n:"Condroitina",s:"Sulfato de condroitina",a:["condroitina"],c:"Articulaciones",u:"Artrosis, cartílago",d:"Habitual 800–1.200 mg/día.",ev:"media",al:["bovino","porcino","pescado"],r:[
{k:"anticoag",l:"R",t:"Estructura similar a la heparina: aumenta el riesgo de sangrado con anticoagulantes. No vender con Sintrom."},
{k:"religioso",l:"A",t:"Origen bovino, porcino o de tiburón. Relevante para halal, kosher y vegetarianos."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"msm",n:"MSM (metilsulfonilmetano)",s:"",a:["msm","metilsulfonilmetano","azufre organico"],c:"Articulaciones",u:"Articulaciones, piel, pelo",d:"Habitual 1.500–3.000 mg/día.",ev:"media",al:[],r:[
{k:"anticoag",l:"A",t:"Posible efecto antiagregante leve. Prudencia."},
{k:"emb",l:"A",t:"Sin datos suficientes. Mejor evitar."},
{k:"digestivo",l:"A",t:"Puede dar molestias digestivas al inicio."}]},

{id:"hialuronico",n:"Ácido hialurónico oral",s:"",a:["hialuronico","acido hialuronico"],c:"Articulaciones",u:"Piel, articulaciones, hidratación",d:"Habitual 120–240 mg/día.",ev:"baja",al:[],r:[
{k:"quimio",l:"A",t:"Prudencia teórica en procesos tumorales activos. Consultar."},
{k:"emb",l:"A",t:"Sin datos. Mejor evitar."}]},

{id:"arnica",n:"Árnica",s:"Arnica montana",a:["arnica"],c:"Planta",u:"Golpes, hematomas, contusiones — USO EXTERNO",d:"Solo uso tópico sobre piel íntegra. La vía oral, únicamente en forma homeopática.",ev:"media",al:["asteraceas"],r:[
{k:"_destacado",l:"R",t:"NO SE TOMA POR VÍA ORAL (fuera de la homeopatía): la árnica ingerida es tóxica cardíaca y digestiva."},
{k:"alergia_asteraceas",l:"R",t:"Asterácea: alta tasa de dermatitis de contacto en alérgicos al polen."},
{k:"herida",l:"R",t:"No aplicar sobre heridas abiertas ni mucosas."},
{k:"anticoag",l:"A",t:"Efecto antiagregante si se absorbe. Prudencia en tratamiento anticoagulante."},
{k:"emb",l:"R",t:"Evitar."}]}

]);
