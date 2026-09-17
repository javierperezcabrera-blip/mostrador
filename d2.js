// Bloque 2 — Ácidos grasos, aminoácidos, proteínas y deportiva
window.DB = (window.DB || []).concat([

{id:"omega3",n:"Omega-3 (EPA/DHA)",s:"Aceite de pescado",a:["omega 3","epa","dha","aceite de pescado"],c:"Ácidos grasos",u:"Corazón, triglicéridos, inflamación, embarazo, visión",d:"Habitual 500–2.000 mg/día de EPA+DHA. La EFSA considera seguro hasta 5 g/día.",ev:"alta",al:["pescado"],r:[
{k:"anticoag",l:"A",t:"Por encima de 3 g/día alarga el tiempo de sangrado. Con Sintrom, AAS o clopidogrel: máximo 1 g/día y que lo sepa su médico."},
{k:"cirugia",l:"A",t:"Suspender 1–2 semanas antes de cirugía."},
{k:"cardiop",l:"A",t:"En fibrilación auricular, dosis altas (>4 g) se han asociado a más recurrencias. Prudencia."}]},

{id:"omega3-vegano",n:"Omega-3 vegano (algas)",s:"Aceite de microalgas (Schizochytrium)",a:["omega 3 vegano","dha algas","algas"],c:"Ácidos grasos",u:"Alternativa al aceite de pescado para veganos y alérgicos",d:"Habitual 250–600 mg/día de DHA.",ev:"media",al:[],r:[
{k:"anticoag",l:"A",t:"Mismo efecto antiagregante que el omega-3 de pescado a dosis altas."}]},

{id:"krill",n:"Aceite de krill",s:"Euphausia superba",a:["krill"],c:"Ácidos grasos",u:"Omega-3 fosfolipídico, articulaciones",d:"Habitual 500–1.000 mg/día.",ev:"media",al:["marisco","crustaceos"],r:[
{k:"alergia_marisco",l:"R",t:"ES CRUSTÁCEO. Contraindicado en alergia a marisco. Pregúntalo siempre."},
{k:"anticoag",l:"A",t:"Efecto antiagregante. Prudencia con Sintrom y antiagregantes."}]},

{id:"higado-bacalao",n:"Aceite de hígado de bacalao",s:"",a:["higado de bacalao","cod liver oil"],c:"Ácidos grasos",u:"Omega-3 + vitaminas A y D",d:"Ojo: aporta vitamina A preformada, que se acumula.",ev:"alta",al:["pescado"],r:[
{k:"emb",l:"R",t:"Lleva retinol: NO VENDER en embarazo. Vender omega-3 puro sin vitamina A."},
{k:"anticoag",l:"A",t:"Suma efecto antiagregante y vitamina A."},
{k:"hepatica",l:"A",t:"Acumulación de vitamina A. Prudencia."}]},

{id:"onagra",n:"Aceite de onagra",s:"Oenothera biennis",a:["onagra","primula","gla"],c:"Ácidos grasos",u:"Síndrome premenstrual, menopausia, piel atópica",d:"Habitual 500–3.000 mg/día.",ev:"media",al:[],r:[
{k:"epilepsia",l:"R",t:"Clásicamente desaconsejado en epilepsia y con fármacos que bajan el umbral convulsivo (fenotiazinas). Aunque la evidencia es débil, la ficha de seguridad lo mantiene. No vender."},
{k:"anticoag",l:"A",t:"Ligero efecto antiagregante. Prudencia."},
{k:"emb",l:"R",t:"Evitar salvo pauta de matrona al final del embarazo."}]},

{id:"borraja",n:"Aceite de borraja",s:"Borago officinalis",a:["borraja"],c:"Ácidos grasos",u:"GLA, piel, hormonas femeninas",d:"Habitual 500–2.000 mg/día. Exige que sea 'libre de alcaloides pirrolizidínicos'.",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"Los alcaloides pirrolizidínicos son hepatotóxicos. Solo productos certificados PA-free, y nunca en hepatopatía."},
{k:"emb",l:"R",t:"Contraindicado en embarazo y lactancia."},
{k:"epilepsia",l:"A",t:"Misma precaución que la onagra."},
{k:"anticoag",l:"A",t:"Ligero efecto antiagregante."}]},

{id:"lino",n:"Aceite / semillas de lino",s:"Linum usitatissimum",a:["lino","linaza","omega 3 vegetal"],c:"Ácidos grasos",u:"Omega-3 vegetal (ALA), tránsito intestinal",d:"Semilla 1–2 cucharadas/día con mucha agua. Aceite 1–2 g/día.",ev:"media",al:[],r:[
{k:"hormonodep",l:"A",t:"Los lignanos tienen actividad fitoestrogénica débil. Consultar en cáncer de mama hormonodependiente."},
{k:"digestivo",l:"R",t:"Contraindicado en obstrucción, estenosis o esófago estrecho. Siempre con abundante agua."},
{k:"medicacion_general",l:"A",t:"La fibra reduce la absorción de fármacos. Separar 2 horas."},
{k:"anticoag",l:"A",t:"Ligero efecto antiagregante a dosis altas."}]},

{id:"cla",n:"CLA (ácido linoleico conjugado)",s:"",a:["cla","acido linoleico conjugado"],c:"Ácidos grasos",u:"Composición corporal, deportiva",d:"Habitual 3–4 g/día.",ev:"baja",al:[],r:[
{k:"diabetes",l:"A",t:"Puede empeorar la resistencia a la insulina. Evitar en diabéticos."},
{k:"hepatica",l:"A",t:"Casos de elevación de enzimas hepáticas. Prudencia."},
{k:"emb",l:"R",t:"Sin datos de seguridad. Evitar."}]},

{id:"mct",n:"Aceite MCT",s:"Triglicéridos de cadena media",a:["mct","coco mct"],c:"Ácidos grasos",u:"Energía rápida, dietas cetogénicas",d:"Empezar por 5 ml e ir subiendo; de golpe da diarrea.",ev:"media",al:["coco"],r:[
{k:"hepatica",l:"R",t:"Contraindicado en cirrosis y encefalopatía hepática."},
{k:"diabetes",l:"A",t:"En diabetes tipo 1 hay riesgo de cetosis. Consultar."}]},

{id:"proteina-suero",n:"Proteína de suero (whey)",s:"",a:["whey","proteina de suero","suero de leche"],c:"Proteínas",u:"Deporte, masa muscular, mayores",d:"Habitual 20–40 g por toma.",ev:"alta",al:["lacteos"],r:[
{k:"alergia_lacteos",l:"R",t:"Contiene proteína de leche. Contraindicada en alergia a la proteína de vaca. El aislado tiene poquísima lactosa pero SIGUE teniendo proteína láctea."},
{k:"renal",l:"R",t:"En insuficiencia renal la carga proteica está limitada. Derivar al nefrólogo."},
{k:"hepatica",l:"A",t:"En encefalopatía hepática hay que restringir proteínas. Derivar."}]},

{id:"proteina-vegetal",n:"Proteína vegetal (guisante, arroz, soja)",s:"",a:["proteina vegetal","guisante","proteina de soja"],c:"Proteínas",u:"Deporte y aporte proteico sin lácteos",d:"Habitual 25–40 g por toma.",ev:"media",al:["soja"],r:[
{k:"renal",l:"R",t:"Carga proteica alta. Derivar en insuficiencia renal."},
{k:"hormonodep",l:"A",t:"Si es de soja, lleva isoflavonas. Consultar en tumor hormonodependiente."},
{k:"tiroides",l:"A",t:"La soja interfiere en la absorción de levotiroxina. Separar 4 h."}]},

{id:"colageno",n:"Colágeno hidrolizado",s:"Péptidos de colágeno",a:["colageno","peptidos de colageno"],c:"Proteínas",u:"Articulaciones, piel, pelo",d:"Habitual 10 g/día. Suele llevar vitamina C asociada.",ev:"media",al:["pescado","porcino","bovino"],r:[
{k:"alergia_pescado",l:"R",t:"Muchos colágenos son marinos. Comprueba el origen si hay alergia a pescado."},
{k:"renal",l:"A",t:"Carga proteica; prudencia en insuficiencia renal."},
{k:"religioso",l:"A",t:"Origen porcino o bovino: relevante para clientes halal, kosher o vegetarianos. Dilo abiertamente."}]},

{id:"creatina",n:"Creatina monohidrato",s:"",a:["creatina","monohidrato"],c:"Deportiva",u:"Fuerza, masa muscular, también cognición en mayores",d:"3–5 g/día. No hace falta fase de carga.",ev:"alta",al:[],r:[
{k:"renal",l:"R",t:"Contraindicada en enfermedad renal. En riñón sano no la daña, pero eleva la creatinina en analítica y puede alarmar al médico: avísalo."},
{k:"analitica",l:"A",t:"Eleva la creatinina sérica sin que haya daño renal. Que lo comente antes de un análisis."}]},

{id:"bcaa",n:"BCAA / aminoácidos ramificados",s:"Leucina, isoleucina, valina",a:["bcaa","ramificados","leucina"],c:"Deportiva",u:"Recuperación muscular",d:"Habitual 5–10 g alrededor del entrenamiento.",ev:"media",al:[],r:[
{k:"renal",l:"A",t:"Carga nitrogenada. Prudencia en insuficiencia renal."},
{k:"antidiab",l:"A",t:"Pueden alterar la glucemia. Vigilar."},
{k:"neuro",l:"A",t:"Evitar en esclerosis lateral amiotrófica."}]},

{id:"glutamina",n:"L-Glutamina",s:"",a:["glutamina"],c:"Aminoácidos",u:"Mucosa intestinal, recuperación deportiva",d:"Habitual 5–10 g/día.",ev:"media",al:[],r:[
{k:"hepatica",l:"R",t:"Contraindicada en cirrosis con encefalopatía: aumenta el amonio."},
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."},
{k:"epilepsia",l:"A",t:"Teóricamente puede bajar el umbral convulsivo. Prudencia."},
{k:"quimio",l:"A",t:"Consultar con oncología antes de usarla."}]},

{id:"arginina",n:"L-Arginina",s:"",a:["arginina","aakg"],c:"Aminoácidos",u:"Óxido nítrico, rendimiento, circulación",d:"Habitual 3–6 g/día.",ev:"media",al:[],r:[
{k:"cardio",l:"R",t:"Suma efecto hipotensor con antihipertensivos y con sildenafilo/tadalafilo: riesgo de bajada de tensión. No vender sin control."},
{k:"cardiop",l:"R",t:"Evitar tras un infarto reciente (peor pronóstico en estudios)."},
{k:"herpes",l:"A",t:"Puede reactivar el herpes labial. Si el cliente es propenso, avísale."},
{k:"asma",l:"A",t:"Puede empeorar la inflamación de la vía aérea."}]},

{id:"citrulina",n:"L-Citrulina / Citrulina malato",s:"",a:["citrulina","citrulina malato"],c:"Aminoácidos",u:"Congestión muscular, rendimiento",d:"Habitual 6–8 g pre-entreno.",ev:"media",al:[],r:[
{k:"cardio",l:"A",t:"Efecto vasodilatador: suma con antihipertensivos y con sildenafilo. Prudencia."}]},

{id:"lisina",n:"L-Lisina",s:"",a:["lisina"],c:"Aminoácidos",u:"Herpes labial recurrente, colágeno",d:"Habitual 1–3 g/día.",ev:"media",al:[],r:[
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."},
{k:"calcio",l:"A",t:"Aumenta la absorción de calcio: vigilar si ya toma suplementos de calcio."}]},

{id:"carnitina",n:"L-Carnitina",s:"Acetil-L-carnitina / L-carnitina tartrato",s2:"",a:["carnitina","acetil carnitina","l-carnitina"],c:"Aminoácidos",u:"Metabolismo de grasas, energía, fertilidad",d:"Habitual 1–3 g/día.",ev:"media",al:[],r:[
{k:"tiroidec",l:"R",t:"Antagoniza la acción de las hormonas tiroideas: puede provocar o empeorar un hipotiroidismo. No vender a quien tome levotiroxina sin consultar."},
{k:"tiroides",l:"R",t:"Interfiere con la levotiroxina. Derivar."},
{k:"anticoag",l:"A",t:"Puede potenciar el acenocumarol. Vigilar INR."},
{k:"epilepsia",l:"A",t:"Prudencia: posible aumento de crisis."},
{k:"cardiop",l:"A",t:"Eleva el TMAO. Prudencia en cardiopatía establecida."}]},

{id:"taurina",n:"Taurina",s:"",a:["taurina"],c:"Aminoácidos",u:"Energía, corazón, deporte",d:"Habitual 1–3 g/día. Buen perfil de seguridad.",ev:"media",al:[],r:[
{k:"cardio",l:"A",t:"Ligero efecto hipotensor. Prudencia si ya va justo de tensión."},
{k:"litio",l:"A",t:"Efecto diurético leve: puede alterar los niveles de litio."}]},

{id:"triptofano",n:"L-Triptófano",s:"",a:["triptofano"],c:"Aminoácidos",u:"Descanso, estado de ánimo",d:"Habitual 500–1.000 mg antes de dormir.",ev:"alta",al:[],r:[
{k:"antidep",l:"R",t:"RIESGO DE SÍNDROME SEROTONINÉRGICO con ISRS (sertralina, fluoxetina, escitalopram), duloxetina, tramadol, triptanes e IMAO. Es una urgencia médica. NO VENDER."},
{k:"sedantes",l:"A",t:"Suma somnolencia con benzodiacepinas y con la conducción."},
{k:"psiq",l:"A",t:"Prudencia en trastorno bipolar."},
{k:"hepatica",l:"A",t:"Prudencia en hepatopatía."}]},

{id:"5htp",n:"5-HTP",s:"Griffonia simplicifolia",a:["5-htp","5 hidroxitriptofano","griffonia"],c:"Aminoácidos",u:"Estado de ánimo, descanso, apetito",d:"Habitual 50–200 mg/día.",ev:"alta",al:[],r:[
{k:"antidep",l:"R",t:"CONTRAINDICADO con cualquier antidepresivo serotoninérgico, tramadol, triptanes o IMAO: síndrome serotoninérgico. Es probablemente el error más peligroso que se comete en herbolario. NO VENDER."},
{k:"parkinson",l:"R",t:"Con carbidopa puede dar un cuadro cutáneo tipo esclerodermia. Derivar."},
{k:"psiq",l:"R",t:"Puede desencadenar manía en trastorno bipolar."},
{k:"emb",l:"R",t:"Evitar en embarazo y lactancia."},
{k:"sedantes",l:"A",t:"Suma sedación."}]},

{id:"tirosina",n:"L-Tirosina",s:"",a:["tirosina","n-acetil tirosina"],c:"Aminoácidos",u:"Concentración, energía mental, estrés",d:"Habitual 500–2.000 mg/día.",ev:"media",al:[],r:[
{k:"tiroidec",l:"R",t:"Es precursor de la hormona tiroidea: puede agravar un hipertiroidismo o Graves. No vender."},
{k:"antidep",l:"R",t:"Con IMAO puede provocar crisis hipertensiva."},
{k:"hta",l:"A",t:"Puede subir la tensión. Prudencia."},
{k:"tiroides",l:"A",t:"Puede alterar el control con levotiroxina."}]},

{id:"teanina",n:"L-Teanina",s:"",a:["teanina","l-theanine"],c:"Aminoácidos",u:"Calma sin sedación, foco, acompañante de la cafeína",d:"Habitual 100–400 mg/día. Muy buen perfil.",ev:"media",al:[],r:[
{k:"cardio",l:"A",t:"Ligero efecto hipotensor. Prudencia si la tensión ya va baja."},
{k:"sedantes",l:"A",t:"Suma sedación leve con ansiolíticos."}]},

{id:"gaba",n:"GABA",s:"Ácido gamma-aminobutírico",a:["gaba"],c:"Aminoácidos",u:"Relajación, descanso",d:"Habitual 100–500 mg/día.",ev:"baja",al:[],r:[
{k:"sedantes",l:"A",t:"Suma sedación con benzodiacepinas y antihistamínicos."},
{k:"cardio",l:"A",t:"Puede bajar algo la tensión."},
{k:"emb",l:"R",t:"Sin datos. Evitar."}]},

{id:"glicina",n:"Glicina",s:"",a:["glicina"],c:"Aminoácidos",u:"Descanso, colágeno",d:"Habitual 3 g antes de dormir.",ev:"media",al:[],r:[
{k:"sedantes",l:"A",t:"Ligera suma de sedación."},
{k:"psiq",l:"A",t:"Con clozapina puede reducir su eficacia. Derivar."}]},

{id:"nac",n:"NAC (N-acetilcisteína)",s:"",a:["nac","n-acetilcisteina","acetilcisteina"],c:"Otros",u:"Antioxidante, mucolítico, hígado",d:"Habitual 600–1.200 mg/día. En España existe también como medicamento.",ev:"media",al:[],r:[
{k:"asma",l:"A",t:"Puede provocar broncoespasmo en asmáticos. Prudencia."},
{k:"anticoag",l:"A",t:"Ligero efecto antiagregante. Prudencia con Sintrom."},
{k:"cardio",l:"A",t:"Con nitroglicerina potencia la vasodilatación y la cefalea/hipotensión."},
{k:"digestivo",l:"A",t:"Puede irritar el estómago; evitar en úlcera activa."}]},

{id:"betaalanina",n:"Beta-alanina",s:"",a:["beta alanina","carnosina"],c:"Deportiva",u:"Resistencia muscular",d:"3–6 g/día repartidos. Da hormigueo (parestesia): es inofensivo, pero avísalo.",ev:"media",al:[],r:[
{k:"renal",l:"A",t:"Prudencia en insuficiencia renal."}]},

{id:"cafeina",n:"Cafeína (en complementos y bebidas)",s:"",a:["cafeina","pre-entreno","energetica"],c:"Deportiva",u:"Energía, rendimiento, concentración",d:"Límite general 400 mg/día en adultos. En embarazo, 200 mg/día contando el café.",ev:"alta",al:[],r:[
{k:"emb",l:"R",t:"En embarazo el tope es 200 mg/día CONTANDO el café y el té. Un pre-entreno se lo salta de largo. No vender."},
{k:"cardiop",l:"R",t:"Contraindicada en arritmias. Puede desencadenar palpitaciones y fibrilación."},
{k:"hta",l:"R",t:"Sube la tensión. No vender dosis altas a hipertensos mal controlados."},
{k:"menor",l:"R",t:"No vender productos con cafeína a menores."},
{k:"ansiedad",l:"R",t:"Empeora ansiedad, insomnio y crisis de pánico."},
{k:"antidep",l:"A",t:"Con IMAO, riesgo de crisis hipertensiva. Con litio, altera sus niveles."},
{k:"antibiot",l:"A",t:"Las quinolonas (ciprofloxacino) multiplican el efecto de la cafeína."}]}

]);
