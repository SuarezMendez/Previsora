(function(){$(function(){var e,a,n,t,i,r,c,d,l,o,u,s,m,v,p,E,y,I,_,O,g,b,N,h,A,B;return o="Ingrese s\xf3lo may\xfasculas, numeros, guiones y/o espacios.",$(this).find("textarea").on("input change propertychange",function(){var e,a,n;if(void 0!==(a=$(this).attr("pattern"))&&!1!==a)return n=new RegExp("^"+a.replace(/^\^|\$$/g,"")+"$","g"),e=!$(this).val().match(n),"function"==typeof this.setCustomValidity?this.setCustomValidity(e?o:""):($(this).toggleClass("error",!!e),$(this).toggleClass("ok",!e),e?$(this).attr("title",o):$(this).removeAttr("title"))}),function(){if("NO APLICA"===$("#case_id_ekogui").val()&&$("#case_id_ekogui").val("PENDIENTE"),"NO APLICA"===$("#process_radicate").val()&&$("#process_radicate").val("PENDIENTE"),"NO APLICA"===$("#contingency_reason").val()&&$("#contingency_reason").val("PENDIENTE"),"NO APLICA"===$("#contingency_resume").val()&&$("#contingency_resume").val("PENDIENTE"),"NO APLICA"===$("#facts").val()&&$("#facts").val("PENDIENTE"),"NO APLICA"===$("#active_part").val()&&$("#active_part").val("PENDIENTE"),"NO APLICA"===$("#passive_part").val())return $("#passive_part").val("PENDIENTE")}(),m=function(){return $("#subprocessAdminDiv").hide(),$("#subprocessAdmin").prop("disabled",!0),$("#subprocessAdmin").hide(),$("#subprocessCivil").prop("disabled",!0),$("#subprocessCivil").hide(),$("#subprocessPenal").prop("disabled",!0),$("#subprocessPenal").hide(),$("#subprocessLaboral").prop("disabled",!0),$("#subprocessLaboral").hide(),$("#subprocessArbitral").prop("disabled",!0),$("#subprocessArbitral").hide()},s=function(){return $("#currentStageDiv").hide(),$("#judicial_admin").hide(),$("#judicial_penal").prop("disabled",!0),$("#judicial_admin").prop("disabled",!0),$("#judicial_penal").hide(),$("#judicial_laboral").prop("disabled",!0),$("#judicial_laboral").hide(),$("#judicial_arbitral").prop("disabled",!0),$("#judicial_arbitral").hide(),$("#judicial_verbal").prop("disabled",!0),$("#judicial_verbal").hide(),$("#judicial_verbal_sum").prop("disabled",!0),$("#judicial_verbal_sum").hide(),$("#judicial_monitorio").prop("disabled",!0),$("#judicial_monitorio").hide(),$("#judicial_ejecutivo").prop("disabled",!0),$("#judicial_ejecutivo").hide(),$("#judicial_declarativos").prop("disabled",!0),$("#judicial_declarativos").hide(),$("#judicial_sucesion").prop("disabled",!0),$("#judicial_sucesion").hide(),$("#judicial_liquidacion").prop("disabled",!0),$("#judicial_liquidacion").hide(),$("#judicial_insolvencia").prop("disabled",!0),$("#judicial_insolvencia").hide(),$("#judicial_voluntaria").prop("disabled",!0),$("#judicial_voluntaria").hide(),$("#judicial_ordinario").prop("disabled",!0),$("#judicial_ordinario").hide(),$("#judicial_divisorio").prop("disabled",!0),$("#judicial_divisorio").hide()},b=function(){switch(m(),document.getElementById("processClass").value){case"JURISDICCION CONTENCIOSO ADMINISTRATIVO":return $("#subprocessAdminDiv").show(),$("#subprocessAdmin").prop("disabled",!1),$("#subprocessAdmin").show();case"JURISDICCION CIVIL":return $("#subprocessAdminDiv").show(),$("#subprocessCivil").prop("disabled",!1),$("#subprocessCivil").show();case"JURISDICCION PENAL":return $("#subprocessAdminDiv").show(),$("#subprocessPenal").prop("disabled",!1),$("#subprocessPenal").show();case"JURISDICCION LABORAL":return $("#subprocessAdminDiv").show(),$("#subprocessLaboral").prop("disabled",!1),$("#subprocessLaboral").show();case"PROCESO ARBITRAL":return $("#subprocessAdminDiv").show(),$("#subprocessArbitral").prop("disabled",!1),$("#subprocessArbitral").show()}},l=function(){switch(s(),document.getElementById("processClass").value){case"JURISDICCION CONTENCIOSO ADMINISTRATIVO":return $("#currentStageDiv").show(),$("#judicial_admin").prop("disabled",!1),$("#judicial_admin").show();case"JURISDICCION PENAL":return $("#currentStageDiv").show(),$("#judicial_penal").prop("disabled",!1),$("#judicial_penal").show();case"JURISDICCION LABORAL":return $("#currentStageDiv").show(),$("#judicial_laboral").show(),$("#judicial_laboral").prop("disabled",!1);case"PROCESO ARBITRAL":return $("#currentStageDiv").show(),$("#judicial_arbitral").prop("disabled",!1),$("#judicial_arbitral").show()}},$("#processClass").change(function(){return b(),l()}),b(),l(),B=function(){switch(s(),document.getElementById("subprocessCivil").value){case"NULIDAD DE LAS CARTAS DE NATURALEZA Y DE LAS RESOLUCIONES DE AUTORIZACION DE INSCRIPCION":return $("#currentStageDiv").show(),$("#judicial_verbal").prop("disabled",!1),$("#judicial_verbal").show();case"CONTROL POR VIA DE EXCEPCION":return $("#currentStageDiv").show(),$("#judicial_verbal_sum").prop("disabled",!1),$("#judicial_verbal_sum").show();case"PROCESO VERBAL":return $("#currentStageDiv").show(),$("#judicial_declarativos").prop("disabled",!1),$("#judicial_declarativos").show();case"PROCESO VERBAL SUMARIO":return $("#currentStageDiv").show(),$("#judicial_ejecutivo").prop("disabled",!1),$("#judicial_ejecutivo").show();case"PROCESOS DECLARATIVOS ESPECIALES":return $("#currentStageDiv").show(),$("#judicial_sucesion").show(),$("#judicial_sucesion").prop("disabled",!1);case"PROCESO EJECUTIVO":case"PROCESO DE SUCESION":return $("#currentStageDiv").show(),$("#judicial_liquidacion").prop("disabled",!1),$("#judicial_liquidacion").show();case"PROCESO DE LIQUIDACION DE SOCIEDADES CONYUGALES O PATRIMONIALES POR CAUSA DISTINTA DE LA MUERTE DE LOS CONYUGES O COMPA\xd1EROS PERMANENTES":return $("#currentStageDiv").show(),$("#judicial_insolvencia").show(),$("#judicial_insolvencia").prop("disabled",!1);case"DISOLUCION, NULIDAD Y LIQUIDACION DE SOCIEDADES":return $("#currentStageDiv").show(),$("#judicial_ordinario").prop("disabled",!1),$("#judicial_ordinario").show();case"INSOLVENCIA DE LA PERSONA NATURAL NO COMERCIANTE":return $("#currentStageDiv").show(),$("#judicial_divisorio").prop("disabled",!1),$("#judicial_divisorio").show();case"PROCESO ORDINARIO":return $("#currentStageDiv").show(),$("#judicial_voluntaria").prop("disabled",!1),$("#judicial_voluntaria").show()}},$("#subprocessCivil").change(function(){return B()}),function(){return"NO APLICA"===$("#correspondency_radicate").val()||"NO PRESENTA"===$("#correspondency_radicate").val()?($("#radicate").val("No"),document.getElementById("correspondency_radicate").readOnly=!0,$("#correspondency_radicate").val("NO PRESENTA")):$("#radicate").val("Si")}(),h=function(){var e;if("Si"===(e=document.getElementById("radicate").value)&&(document.getElementById("correspondency_radicate").readOnly=!1),"No"===e)return document.getElementById("correspondency_radicate").readOnly=!0,$("#correspondency_radicate").val("NO PRESENTA")},$("#radicate").change(function(){return h()}),(e=function(){var e,a;return e=$("#case_id_bap").val(),a=$("#case_id_sise").val(),"NO APLICA"===e&&"NO APLICA"===a&&($("#case_id_bap").val("PENDIENTE"),$("#case_id_sise").val("PENDIENTE"),document.getElementById("case_id_bap").required=!0,document.getElementById("case_id_sise").required=!1),""!==e&&"PENDIENTE"!==e?(document.getElementById("case_id_bap").required=!0,document.getElementById("case_id_sise").required=!1):""!==a&&"PENDIENTE"!==a?(document.getElementById("case_id_sise").required=!0,document.getElementById("case_id_bap").required=!1):(document.getElementById("case_id_bap").required=!0,document.getElementById("case_id_sise").required=!1)})(),$("#case_id_bap").change(function(){return e()}),$("#case_id_sise").change(function(){return e()}),A=function(){var e;return"FACULTATIVO"===(e=document.getElementById("reinsurance_type").value)||"CUOTA PARTE"===e?document.getElementById("reinsurance_value").readOnly=!1:(document.getElementById("reinsurance_value").readOnly=!0,$("#reinsurance_value").val(0))},$("#reinsurance_type").change(function(){return A()}),A(),i=function(){var e;return"CEDIDO"===(e=document.getElementById("coensurance_type").value)||"ACEPTADO"===e?document.getElementById("coensurance_value").readOnly=!1:(document.getElementById("coensurance_value").readOnly=!0,$("#coensurance_value").val(0))},$("#coensurance_type").change(function(){return i()}),i(),_="",I=_.concat(document.getElementById("number").value),u=_.concat(document.getElementById("exercise").value),g=_.concat(document.getElementById("branch_policy").value),r=_.concat(document.getElementById("branch_commercial").value),p=function(){return"SINIESTRO"===document.getElementById("litigationSource").value?(document.getElementById("policyCents").readOnly=!1,$("#protection").prop("disabled",!1),document.getElementById("number").readOnly=!1,document.getElementById("exercise").readOnly=!1,document.getElementById("more_protections").readOnly=!1,$("#branch_policy").prop("disabled",!1),$("#branch_commercial").prop("disabled",!1),$("#more_policies").prop("disabled",!1),$("#sinister").val(I+"-"+u+"-"+g+"-"+r)):(document.getElementById("policyCents").readOnly=!0,$("#policyCents").val("0"),$("#protection").prop("disabled",!0),$("#protection").val(""),document.getElementById("number").readOnly=!0,$("#number").val("0"),document.getElementById("exercise").readOnly=!0,document.getElementById("more_protections").readOnly=!0,$("#exercise").val("0"),$("#branch_policy").prop("disabled",!0),$("#branch_policy").val("0"),$("#branch_commercial").prop("disabled",!0),$("#branch_commercial").val("0"),$("#more_policies").prop("disabled",!0),$("#more_policies").prop("disabled",!0),$("#sinister").val("NO APLICA"))},$("#litigationSource").change(function(){return p()}),p(),N=function(){var e;return(e=$("#protection option:selected")).size()>0&&"OTRO"===e[e.size()-1].innerHTML?document.getElementById("more_protections").readOnly=!1:document.getElementById("more_protections").readOnly=!0},$("#protection").change(function(){return N()}),N(),$("#number").change(function(){return I=_.concat(document.getElementById("number").value),$("#sinister").val(I+"-"+u+"-"+g+"-"+r)}),$("#exercise").change(function(){return u=_.concat(document.getElementById("exercise").value),$("#sinister").val(I+"-"+u+"-"+g+"-"+r)}),$("#branch_policy").change(function(){return g=_.concat(document.getElementById("branch_policy").value),$("#sinister").val(I+"-"+u+"-"+g+"-"+r)}),$("#branch_commercial").change(function(){return r=_.concat(document.getElementById("branch_commercial").value),$("#sinister").val(I+"-"+u+"-"+g+"-"+r)}),function(){var e,a;return e=$("#policies").val(),a=$("#sinisters").val(),"NO APLICA"===e&&"NO APLICA"===a||"PENDIENTE"===e&&"PENDIENTE"===a?($("#more_policies").val("No"),document.getElementById("policies").readOnly=!0,document.getElementById("sinisters").readOnly=!0,$("#policies").val("PENDIENTE"),$("#sinisters").val("PENDIENTE")):$("#more_policies").val("Si")}(),y=function(){var e;if("Si"===(e=document.getElementById("more_policies").value)&&(document.getElementById("policies").readOnly=!1,document.getElementById("sinisters").readOnly=!1),"No"===e)return document.getElementById("policies").readOnly=!0,$("#policies").val("PENDIENTE"),document.getElementById("sinisters").readOnly=!0,$("#sinisters").val("PENDIENTE")},$("#more_policies").change(function(){return y()}),E=function(){return"PESO"===document.getElementById("moneyType").value?(document.getElementById("dolarValueCents").readOnly=!0,$("#dolarValueCents").val(0)):document.getElementById("dolarValueCents").readOnly=!1},$("#moneyType").change(function(){return E()}),E(),O=function(){return"OTRO"===document.getElementById("office").value?($("#office_text").prop("disabled",!1),$("#office_text").show()):($("#office_text").prop("disabled",!0),$("#office_text").hide())},$("#office").change(function(){return O()}),O(),a=function(){return"TERMINADO"===document.getElementById("caseState").value?($("#caseTermination").prop("disabled",!1),$("#lastPerformance").prop("disabled",!1),document.getElementById("lastPerformanceDate").readOnly=!1,$("#reservedReleased").prop("disabled",!1),$("#recovery").prop("disabled",!1)):($("#caseTermination").prop("disabled",!0),$("#caseTermination").val(""),$("#lastPerformance").prop("disabled",!0),$("#lastPerformance").val("1"),document.getElementById("lastPerformanceDate").readOnly=!0,$("#lastPerformanceDate").val("0-0-0"),$("#reservedReleased").prop("disabled",!0),$("#reservedReleased").val("1"),$("#recovery").prop("disabled",!0),$("#recovery").val("PENDIENTE"))},$("#caseState").change(function(){return a()}),a(),n=function(){return"TERMINADO CON PAGO: EN CONTRA"===document.getElementById("caseTermination").value?(document.getElementById("fail_value").readOnly=!1,document.getElementById("fail_previ").readOnly=!1,document.getElementById("payed_value").readOnly=!1,document.getElementById("payment_date").readOnly=!1):(document.getElementById("fail_value").readOnly=!0,$("#fail_value").val("0"),document.getElementById("fail_previ").readOnly=!0,$("#fail_previ").val("0"),document.getElementById("payed_value").readOnly=!0,$("#payed_value").val("0"),document.getElementById("payment_date").readOnly=!0,$("#payment_date").val("0-0-0"))},$("#caseTermination").change(function(){return n()}),n(),d=function(){var e;return e=document.getElementById("cost").value,document.getElementById("cost_value").readOnly="Si"!==e},$("#cost").change(function(){return d()}),d(),function(){var e,a;return e=$("#coactive_radicate").val(),a=$("#coactive_value_cents").val(),"NO APLICA"===e&&"0"===a?($("#coactive").val("No"),document.getElementById("coactive_radicate").readOnly=!0,document.getElementById("coactive_value_cents").readOnly=!0):$("#coactive").val("Si")}(),t=function(){var e;if("Si"===(e=document.getElementById("coactive").value)&&(document.getElementById("coactive_radicate").readOnly=!1,document.getElementById("coactive_value_cents").readOnly=!1),"No"===e)return document.getElementById("coactive_radicate").readOnly=!0,$("#coactive_radicate").val("NO APLICA"),document.getElementById("coactive_value_cents").readOnly=!0,$("#coactive_value_cents").val("0")},$("#coactive").change(function(){return t()}),v=function(){return"SI"===document.getElementById("join_committee").value?(document.getElementById("committee_date").readOnly=!1,$("#committee").prop("disabled",!1)):(document.getElementById("committee_date").readOnly=!0,$("#committee_date").val("0-0-0"),$("#committee").prop("disabled",!0),$("#committee").val("1"))},$("#join_committee").change(function(){return v()}),v(),c=function(){var e;return"CONCILIA"===(e=document.getElementById("committee").value)?(document.getElementById("reconcilie_value").readOnly=!1,document.getElementById("auth_value").readOnly=!1,document.getElementById("reason_conc").readOnly=!0,$("#reason_conc").val("PENDIENTE"),document.getElementById("reason_inv").readOnly=!0,$("#reason_inv").val("PENDIENTE"),document.getElementById("fail_value").readOnly=!0,$("#fail_value").val("0"),document.getElementById("fail_previ").readOnly=!0,$("#fail_previ").val("0"),document.getElementById("payed_value").readOnly=!0,$("#payed_value").val("0")):"NO CONCILIA"===e?(document.getElementById("reconcilie_value").readOnly=!0,$("#reconcilie_value").val("0"),document.getElementById("auth_value").readOnly=!0,$("#auth_value").val("0"),document.getElementById("reason_conc").readOnly=!1,document.getElementById("reason_inv").readOnly=!0,$("#reason_inv").val("PENDIENTE"),document.getElementById("fail_value").readOnly=!1,document.getElementById("fail_previ").readOnly=!1,document.getElementById("payed_value").readOnly=!1):"INVIABLE"===e?(document.getElementById("reconcilie_value").readOnly=!0,$("#reconcilie_value").val("0"),document.getElementById("auth_value").readOnly=!0,$("#auth_value").val("0"),document.getElementById("reason_conc").readOnly=!0,$("#reason_conc").val("PENDIENTE"),document.getElementById("reason_inv").readOnly=!1,document.getElementById("fail_value").readOnly=!1,document.getElementById("fail_previ").readOnly=!1,document.getElementById("payed_value").readOnly=!1):(document.getElementById("reconcilie_value").readOnly=!0,$("#reconcilie_value").val("0"),document.getElementById("auth_value").readOnly=!0,$("#auth_value").val("0"),document.getElementById("reason_conc").readOnly=!0,$("#reason_conc").val("PENDIENTE"),document.getElementById("reason_inv").readOnly=!0,$("#reason_inv").val("PENDIENTE"),document.getElementById("fail_value").readOnly=!1,document.getElementById("fail_previ").readOnly=!1,document.getElementById("payed_value").readOnly=!1)},$("#committee").change(function(){return c()}),c(),$("#departament").change(function(){var e;return $(this),e=$("#cities"),$.getJSON("/cities/"+$(this).val(),function(a){return e.empty(),$.each(a,function(n){var t;return t='<option value="'+a[n].toUpperCase()+'">'+a[n].toUpperCase()+"</option>",e.append(t)})})})})}).call(this);