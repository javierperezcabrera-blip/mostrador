// Ajustes por dosis: un ingrediente puede ser rojo a dosis de suplemento suelto
// y no serlo dentro de una fórmula que lleva una cantidad pequeña.
// Estas anulaciones se aplican DESPUÉS de los riesgos heredados de los ingredientes.
window.POVR = {

"nut-biotin":[
 {k:"anticoag",l:"A",t:"Lleva 25 mg de vitamina E, muy lejos de los 300 mg que preocupan con el Sintrom. No es un problema, pero que su médico sepa lo que toma."},
 {k:"renal",l:"A",t:"2.000 UI de vitamina D es una dosis normal. Con riñón delicado, que lo comente en su próxima revisión."}],

"nut-colageno-marino":[
 {k:"anticoag",l:"A",t:"Las cantidades de Q10 (7,5 mg) y vitamina E (2,5 mg) son testimoniales. Avisar, pero no es motivo para no vender."},
 {k:"renal",l:"A",t:"Solo 12,5 mg de vitamina C por cápsula: sin relevancia renal."}],

"nut-resveratrol-nad":[
 {k:"renal",l:"A",t:"40 mg de vitamina C: sin relevancia renal."}],

"nut-omega3":[
 {k:"renal",l:"A",t:"10 µg de vitamina D es dosis de mantenimiento."}],

"nut-red-yeast":[
 {k:"anticoag",l:"A",t:"El ajo (100 mg de extracto) y el Q10 (30 mg) tienen efecto leve a estas dosis. Lo serio de este producto es la monacolina, no la coagulación."},
 {k:"renal",l:"A",t:"80 mg de vitamina C: sin relevancia renal."},
 {k:"hepatica",l:"R",t:"CONTRAINDICADO. La monacolina K es una estatina y es hepatotóxica. La niacina de la fórmula (16 mg como nicotinamida) no suma riesgo, pero la monacolina sí."}],

"nut-women":[
 {k:"renal",l:"A",t:"Calcio 203 mg, magnesio 100 mg y vitamina D 15 µg son dosis moderadas, pero en insuficiencia renal cualquier aporte de magnesio hay que consultarlo."},
 {k:"hepatica",l:"A",t:"Vitamina A 800 µg y manganeso 1 mg están en cantidades normales. Con hepatopatía, que lo valore su médico antes de tomar un multi."},
 {k:"tiroides",l:"A",t:"Lleva hierro (14 mg) y calcio (203 mg): ambos bloquean la levotiroxina. SE PUEDE vender, pero hay que separarlo 4 horas del Eutirox. Díselo y escríbeselo."},
 {k:"quimio",l:"A",t:"Los 300 µg de folato son dosis normal, pero durante quimioterapia cualquier suplemento tiene que autorizarlo el oncólogo."},
 {k:"alergia_marisco",l:"A",t:"El aviso viene del calcio: algunos carbonatos se obtienen de concha de ostra. Mira la etiqueta si hay alergia al marisco; lo habitual es que sea carbonato mineral y no haya problema."}],

"nut-detox":[
 {k:"renal",l:"A",t:"Es un diurético de plantas. En insuficiencia renal no se vende, pero el motivo es el efecto depurativo, no el castaño de Indias."}],

"nut-biprotics":[
 {k:"renal",l:"A",t:"5 µg de vitamina D: irrelevante."}],

"nut-b-complex":[
 {k:"renal",l:"A",t:"80 mg de vitamina C: sin relevancia renal."},
 {k:"hepatica",l:"A",t:"Los 54 mg de B3 son nicotinamida, no ácido nicotínico: no es la forma hepatotóxica. Aun así, en hepatopatía consultar."},
 {k:"quimio",l:"A",t:"400 µg de folato. Durante quimioterapia con metotrexato tiene que autorizarlo el oncólogo."}],

"nut-q10":[
 {k:"renal",l:"A",t:"40 mg de vitamina C: sin relevancia renal."}],

"nut-magnesio":[
 {k:"renal",l:"R",t:"302 mg de magnesio al día. CONTRAINDICADO en insuficiencia renal: el riñón no lo elimina y se acumula."}],

"nut-d3k2":[
 {k:"renal",l:"R",t:"10.000 UI de vitamina D por perla. En problemas de riñón o litiasis, no vender."}],

"fepa-ester-c":[
 {k:"tiroides",l:"A",t:"El ascorbato de calcio aporta calcio, que bloquea la levotiroxina. Separar 4 horas del Eutirox."},
 {k:"alergia_marisco",l:"A",t:"Aquí el calcio es ascorbato cálcico, de origen mineral, no marino. Sin problema salvo que la etiqueta diga otra cosa."}],

"fepa-glutation":[
 {k:"renal",l:"A",t:"La vitamina C que lleva es la del ascorbato cálcico, en cantidad moderada."}],

"fepa-astaxantina":[
 {k:"anticoag",l:"A",t:"Efecto antiagregante leve. Prudencia con Sintrom, pero no es una contraindicación."}],

"klau-261":[],
"klau-512":[],
"klau-826":[]

};
