// Bloque 9 — Ingredientes de la propuesta de CN Holística (alimentación, snack y cosmética)
window.DB = (window.DB || []).concat([

{id:"sesamo",n:"Sésamo y tahín",s:"Sesamum indicum",a:["sesamo","tahin","tahini","ajonjoli"],c:"Alimentación",u:"Untable, calcio, grasas saludables",d:"",ev:"alta",al:["sesamo"],r:[
{k:"alergia_sesamo",l:"R",t:"El sésamo es uno de los 14 alérgenos de declaración obligatoria en la UE y las reacciones pueden ser graves. Pregunta siempre antes de vender tahín o productos con sésamo."},
{k:"_destacado",l:"A",t:"El sésamo se cuela en muchos productos (panes, hummus, barritas). Si un cliente te dice que es alérgico, revisa la etiqueta de todo lo que le vendas, no solo del tahín."}]},

{id:"frutos-secos-crema",n:"Cremas y harinas de frutos secos",s:"Almendra, pistacho, cacahuete, avellana, macadamia",a:["crema de almendra","crema de cacahuete","crema de pistacho","harina de almendra","macadamia","avellana","mantequilla de cacahuete"],c:"Alimentación",u:"Untables, repostería, aporte calórico y grasas saludables",d:"",ev:"alta",al:["frutossecos","cacahuete"],r:[
{k:"alergia_frutossecos",l:"R",t:"Alérgeno mayor. La alergia a frutos secos y a cacahuete puede dar anafilaxia. Pregunta siempre, y ojo con las trazas: casi todas estas cremas se elaboran en líneas compartidas."},
{k:"menor",l:"A",t:"Las cremas de frutos secos no se dan a cucharadas a menores de 4 años por riesgo de atragantamiento: mejor untadas y en capa fina."},
{k:"mascotas",l:"A",t:"La macadamia es tóxica para los perros. Si el cliente tiene perro, que la guarde fuera de su alcance."}]},

{id:"cacao",n:"Cacao y chocolate",s:"Theobroma cacao",a:["cacao","chocolate","teobromina","crema de cacao"],c:"Alimentación",u:"Untables, repostería, snack, antioxidantes",d:"",ev:"media",al:["lacteos","frutossecos","soja"],r:[
{k:"digestivo",l:"A",t:"Relaja el esfínter esofágico: empeora el reflujo y la hernia de hiato."},
{k:"ansiedad",l:"A",t:"Contiene teobromina y algo de cafeína: puede dar nerviosismo e insomnio en personas sensibles, sobre todo por la tarde."},
{k:"cardiop",l:"A",t:"En cantidad, la teobromina puede dar palpitaciones. Prudencia en arritmias."},
{k:"antidep",l:"A",t:"Con IMAO, prudencia por el contenido en tiramina de algunos chocolates."},
{k:"diabetes",l:"A",t:"Mira el azúcar de la etiqueta: las cremas de cacao llevan bastante aunque sean 'saludables'."},
{k:"mascotas",l:"R",t:"El chocolate es tóxico para perros y gatos. Merece la pena decirlo."}]},

{id:"barritas-proteicas",n:"Barritas de proteína",s:"",a:["barritas","barrita proteica","snack proteico","protein bar"],c:"Alimentación",u:"Snack, deporte, saciedad",d:"",ev:"media",al:["lacteos","soja","frutossecos","gluten","sesamo"],r:[
{k:"_destacado",l:"A",t:"Son el producto con más alérgenos ocultos del lineal: leche, soja, frutos secos, gluten y a veces sésamo, todo en la misma barrita. Lee la etiqueta delante del cliente alérgico."},
{k:"digestivo",l:"A",t:"Muchas llevan polioles (maltitol, sorbitol) como edulcorante: en cantidad son laxantes y dan gases. En colon irritable, media barrita para empezar."},
{k:"renal",l:"A",t:"Carga proteica. En insuficiencia renal hay que contarla."},
{k:"diabetes",l:"A",t:"'Sin azúcares añadidos' no es lo mismo que 'no sube el azúcar'. Mira los hidratos totales."}]},

{id:"tinte-capilar",n:"Tinte capilar vegetal u orgánico",s:"",a:["tinte","tinte organico","coloracion","henna","ppd"],c:"Cosmética",u:"Coloración del cabello",d:"Prueba de sensibilidad 48 horas antes, SIEMPRE, aunque ya se lo haya puesto otras veces.",ev:"alta",al:[],r:[
{k:"_destacado",l:"R",t:"★ LA PRUEBA DEL PLIEGUE DEL CODO 48 HORAS ANTES NO ES OPCIONAL. Vender un tinte sin decirlo es el riesgo cosmético más serio que vas a tener en la tienda: las reacciones a la parafenilendiamina (PPD) pueden ser graves y aparecen de golpe en gente que llevaba años tiñéndose sin problema."},
{k:"piel",l:"R",t:"'Orgánico' o 'vegetal' NO quiere decir sin PPD. Comprueba la lista de ingredientes de cada referencia y no des por hecho que es inocuo por la marca."},
{k:"emb",l:"A",t:"Los tintes se desaconsejan en el primer trimestre y se recomienda aplicar en zona ventilada. Que lo comente con su matrona."},
{k:"menor",l:"R",t:"No aplicar tintes de oxidación a menores de 16 años."},
{k:"alergia_latex",l:"A",t:"La alergia a los tatuajes de henna negra predice reacción grave al PPD. Si el cliente la ha tenido, no le vendas tinte."}]},

{id:"caramelos-funcionales",n:"Caramelos funcionales de hierbas",s:"",a:["caramelos","caramelo de miel","pastillas garganta"],c:"Alimentación",u:"Garganta, tos, digestión, relajación",d:"",ev:"baja",al:["abejas","propoleo"],r:[
{k:"alergia_abejas",l:"R",t:"Los de miel y propóleo están contraindicados en alergia a productos apícolas."},
{k:"diabetes",l:"A",t:"Son caramelos: llevan azúcar. Cuéntalos si el cliente es diabético."},
{k:"menor",l:"R",t:"Los que llevan miel, nunca a menores de 12 meses. Y ojo con el atragantamiento en menores de 4 años."}]},

{id:"harina-almendra",n:"Harina de almendra",s:"Prunus dulcis",a:["harina de almendra","almendra molida"],c:"Alimentación",u:"Repostería sin gluten, bajo en hidratos",d:"",ev:"alta",al:["frutossecos"],r:[
{k:"alergia_frutossecos",l:"R",t:"Es almendra pura. Contraindicada en alergia a frutos secos."},
{k:"alergia_gluten",l:"V",t:"Sin gluten de forma natural: buena opción para celíacos, siempre que esté certificada."}]}

]);
