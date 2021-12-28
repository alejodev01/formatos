import { data } from "../data/data.js"

let selectRefEgreso = document.getElementById('selectRefEgreso');
let inputSelectEgreso = document.getElementById('inputSelectEgreso');
let selectRefIngreso = document.getElementById('selectRefIngreso');
let inputSelectIngreso = document.getElementById('inputSelectIngreso');
let buttonInsertar = document.getElementById('buttonInsertar');
let selectRefPedido = document.getElementById('selectRefPedido');
let selectUnidadNegocios = document.getElementById('selectUnidadNegocios');
buttonInsertar.addEventListener('click', guardarRegistro);
buttonInsertar.addEventListener('click', limpiar);
inputSelectIngreso.addEventListener('change', obtenerTransito);
inputSelectIngreso.addEventListener('change', obtenerRefIngreso);
inputSelectEgreso.addEventListener('change', obtenerRefEgreso);
selectRefEgreso.addEventListener('change', obtenerMovimiento1);
selectRefIngreso.addEventListener('change', obtenerMovimiento2);
inputSelectIngreso.addEventListener('change', obtenerRefPedido);
selectUnidadNegocios.addEventListener('change', obtenerCuentaObjeto);

function obtenerCuentaObjeto() {
    let selectUnidadNegocios = document.getElementById('selectUnidadNegocios').value;
    let selectCuentaPedido = document.getElementById('selectCuentaPedido');

    let length = selectCuentaPedido.options.length;
    for (let i = length - 1; i >= 0; i--){  //elimina las opciones del select
        selectCuentaPedido.options[i] = null;          
    }
    if (selectUnidadNegocios == 1) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151807</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151808</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163501</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163503</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163504</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163507</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163590</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>167504</option>");
    }
    else if (selectUnidadNegocios == 2) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151032</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151090</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151807</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151808</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151890</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163501</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163504</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163507</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163590</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>164501</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>164512</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>165002</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>165511</option>");        
    }
    else if (selectUnidadNegocios == 3) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151032</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151090</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163501</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163504</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163507</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163590</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>167002</option>");        
    }
    else if (selectUnidadNegocios == 4) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>151890</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163501</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163503</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163504</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163507</option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>163590</option>");                
    }
    else if (selectUnidadNegocios == 5) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>161504</option>");
    }
    else if (selectUnidadNegocios == 6) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>161505</option>");
    } 
    else if (selectUnidadNegocios == 7) {
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectCuentaPedido.insertAdjacentHTML("beforeend", "<option>161504</option>");
    }     
}


function obtenerRefPedido() {
    let bodegaIngreso = document.getElementById('inputSelectIngreso').value;
    let selectRefPedido = document.getElementById('selectRefPedido');

    let length = selectRefPedido.options.length;
    for (let i = length - 1; i >= 0; i--) { //elimina las opciones del select
        selectRefPedido.options[i] = null;
    }
    if (bodegaIngreso == 1) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO TERMODORADA</option>");
    }
    else if (bodegaIngreso == 9) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MANTENIENTO REDES</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PERDIDAS COSTO</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ALUMBRADO PUBLICO</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO GENERACION</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO SYL</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO OPERACION Y CALIDAD</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO GESTION INMOBILIARIA</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO ALUMBRADO PUBLICO</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 10) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO POSTES GENERACION</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO POSTES REDES</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO POSTES SYL</option>");
    }
    else if (bodegaIngreso == 11) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO REDES</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO SYL</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO ALUMBRADO</option>");
    }
    else if (bodegaIngreso == 35) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>CLIENTES VENTA</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>CLIENTES TT</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PERDIDAS VENTA</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>COMERCIAL VENTA</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 36) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 49) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-003 REDES</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ARE GENERACION</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ARE SYL</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ARE OPERACIÓN Y CALIDAD</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ARE APOYO</option>");
    }
    else if (bodegaIngreso == 141) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>REPARADOS REDES</option>");
    }
    else if (bodegaIngreso == 50) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>ARE SYL CHINCHINA</option>");
    }
    else if (bodegaIngreso == 65) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>INVERSION SYL</option>");
    }
    else if (bodegaIngreso == 66) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 67) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>INVERSION POSTES SYL</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
    }
    else if (bodegaIngreso == 68) {
        selectRefPedido.insertAdjacentHTML("beforeend", "<option selected></option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS</option>");
        selectRefPedido.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS SYL</option>");
    }
}


function obtenerRefIngreso() {
    let bodegaIngreso = document.getElementById('inputSelectIngreso').value;
    let refIngreso = document.getElementById('selectRefIngreso');

    let length = refIngreso.options.length;
    for (let i = length - 1; i >= 0; i--) { //elimina las opciones del select
        refIngreso.options[i] = null;
    }
    if (bodegaIngreso == 1) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO TERMODORADA</option>");
    }
    else if (bodegaIngreso == 9) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MANTENIENTO REDES</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PERDIDAS COSTO</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ALUMBRADO PUBLICO</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO GENERACION</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO SYL</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO OPERACION Y CALIDAD</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO GESTION INMOBILIARIA</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO ALUMBRADO PUBLICO</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 10) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES GENERACION</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES REDES</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES SYL</option>");
    }
    else if (bodegaIngreso == 11) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO REDES</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO SYL</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO ALUMBRADO</option>");
    }
    else if (bodegaIngreso == 35) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>CLIENTES VENTA</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>CLIENTES TT</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PERDIDAS VENTA</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>COMERCIAL VENTA</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 36) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 49) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-003 REDES</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ARE GENERACION</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ARE SYL</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ARE OPERACIÓN Y CALIDAD</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ARE APOYO</option>");
    }
    else if (bodegaIngreso == 141) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>REPARADOS REDES</option>");
    }
    else if (bodegaIngreso == 50) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>ARE SYL CHINCHINA</option>");
    }
    else if (bodegaIngreso == 65) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>INVERSION SYL</option>");
    }
    else if (bodegaIngreso == 66) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaIngreso == 67) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>INVERSION POSTES SYL</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
    }
    else if (bodegaIngreso == 68) {
        refIngreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS</option>");
        refIngreso.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS SYL</option>");
    }
}



function obtenerRefEgreso() {
    let bodegaEgreso = document.getElementById('inputSelectEgreso').value;
    let refEgreso = document.getElementById('selectRefEgreso');

    let length = refEgreso.options.length;
    for (let i = length - 1; i >= 0; i--) { //elimina las opciones del select
        refEgreso.options[i] = null;
    }

    if (bodegaEgreso == 1) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MANTENIENTO REDES</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PERDIDAS COSTO</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ALUMBRADO PUBLICO</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO GENERACION</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO SYL</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO OPERACION Y CALIDAD</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO GESTION INMOBILIARIA</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO ALUMBRADO PUBLICO</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaEgreso == 2) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES GENERACION</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES REDES</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO POSTES SYL</option>");
    }
    else if (bodegaEgreso == 3) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO REDES</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO SYL</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO MARMATO ALUMBRADO</option>");
    }
    else if (bodegaEgreso == 4) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-003 REDES</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ARE GENERACION</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ARE SYL</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ARE OPERACIÓN Y CALIDAD</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ARE APOYO</option>");
    }
    else if (bodegaEgreso == 5) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>REPARADOS REDES</option>");
    }
    else if (bodegaEgreso == 6) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>INVERSION SYL</option>");
    }
    else if (bodegaEgreso == 7) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>INVERSION POSTES SYL</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-03-11-004 EXP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER EXP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-04-14-001 PER REP</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PT-DI-08-12-002 REP</option>");
    }
    else if (bodegaEgreso == 8) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>INVERSION PROYECTOS SYL</option>");
    }
    else if (bodegaEgreso == 9) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>CLIENTES VENTA</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>CLIENTES TT</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>PERDIDAS VENTA</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>COMERCIAL VENTA</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>GESTION MEDIDA DISTRIBUCION</option>");
    }
    else if (bodegaEgreso == 10) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>ARE SYL CHINCHINA</option>");
    }
    else if (bodegaEgreso == 11) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>MTTO TERMODORADA</option>");
    }
    else if (bodegaEgreso == 12) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaEgreso == 13) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>LABORATORIOS DISTRIBUCION</option>");
    }
    else if (bodegaEgreso == 14) {
        refEgreso.insertAdjacentHTML("beforeend", "<option selected></option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_B005</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C001</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C011</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C012</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C100</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C109</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C300</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C301</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C304</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C306</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C600</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>_C601</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B002</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B003</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B004</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B101</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B102</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B103</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>B104</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C006</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C007</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C008</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C010</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C014</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C015</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C016</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C104</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C105</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C106</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C107</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C108</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C110</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C111</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C204</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C205</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C206</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C208</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C209</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C210</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C211</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>C602</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>G400</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H600</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H601</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H602</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H603</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H604</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H605</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H606</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H607</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H608</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H609</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H610</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H611</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H612</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H613</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H614</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H615</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H616</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H617</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H618</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H619</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H620</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H621</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H622</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H623</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H624</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H625</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H626</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H627</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H628</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H629</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H630</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H631</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H632</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H633</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H634</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H635</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H636</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H637</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H638</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>H639</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T101</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T102</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T103</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T104</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T105</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T124</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T125</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T126</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T127</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T128</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T150</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T151</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T155</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T158</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T164</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T165</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T166</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T167</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T168</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T169</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T170</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T173</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T174</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T181</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T183</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T184</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T185</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T186</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T187</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T188</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T190</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T191</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T192</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T193</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T194</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T195</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T196</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T203</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T204</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T205</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T206</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T221</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T222</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T223</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T224</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T225</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T246</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T247</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T250</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T251</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T255</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T258</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T259</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T260</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T261</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T262</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T263</option>");
        refEgreso.insertAdjacentHTML("beforeend", "<option>T294</option>");
    }
}

function obtenerMovimiento1() {
    let bodegaEgreso = document.getElementById('inputSelectEgreso');
    let bodegaEgresoSeleccionada = bodegaEgreso.options[bodegaEgreso.selectedIndex].text;
    let refEgreso = document.getElementById('selectRefEgreso').value;
    let resultado = (bodegaEgresoSeleccionada + " | " + refEgreso);
    document.getElementById('inputMovimiento1').value = resultado;
}

function obtenerMovimiento2() {
    let bodegaIngreso = document.getElementById('inputSelectIngreso');
    let bodegaIngresoSeleccionada = bodegaIngreso.options[bodegaIngreso.selectedIndex].text;
    let refIngreso = document.getElementById('selectRefIngreso').value;
    let resultado = (bodegaIngresoSeleccionada + " | " + refIngreso);
    document.getElementById('inputMovimiento2').value = resultado;
}






function obtenerTransito() {
    let bodegaIngreso = document.getElementById('inputSelectIngreso').value;

    if (bodegaIngreso > 0 && bodegaIngreso <= 4) {
        document.getElementById('inputTransito').value = "B091";
    }
    else if (bodegaIngreso >= 5 && bodegaIngreso <= 8) {
        document.getElementById('inputTransito').value = "B191";
    }
    else if (bodegaIngreso >= 9 && bodegaIngreso <= 34) {
        document.getElementById('inputTransito').value = "C091";
        //mostrarTransito();
    }
    else if (bodegaIngreso >= 35 && bodegaIngreso <= 48) {
        document.getElementById('inputTransito').value = "C092";
    }
    else if (bodegaIngreso >= 49 && bodegaIngreso <= 57) {
        document.getElementById('inputTransito').value = "C191";
    }
    else if (bodegaIngreso >= 58 && bodegaIngreso <= 64) {
        document.getElementById('inputTransito').value = "C192";
    }
    else if (bodegaIngreso >= 65 && bodegaIngreso <= 85) {
        document.getElementById('inputTransito').value = "C391";
    }
    else if (bodegaIngreso == 86) {
        document.getElementById('inputTransito').value = "G091";
    }
    else if (bodegaIngreso >= 87 && bodegaIngreso <= 140) {
        document.getElementById('inputTransito').value = "H091";
    }
    else {
        document.getElementById('inputTransito').value = "";
    }
}


let pedido = [];

function guardarRegistro() {

    let cod = document.getElementById('inputCodigo').value,
        solicitada = document.getElementById('inputSolicitada').value,
        despachada = document.getElementById('inputDespachada').value,
        cuenta = document.getElementById('selectCuentaPedido').value,
        referencia = document.getElementById('selectRefPedido').value;

    data.forEach(articulo => {
        const { codigo, descripcion, unidad_medida } = articulo;

        if (cod == codigo) {
            let registro = {
                codigo: codigo,
                descripcion: descripcion,
                unidad_medida: unidad_medida,
                solicitada: solicitada,
                despachada: despachada,
                cuenta: cuenta,
                referencia: referencia
                //idRegistro: 1
            }

            console.log("registro: " + registro);
            pedido.push(registro);
            console.log("pedido: " + pedido);
        }
    })
    let listaRegistros = pedido;
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < pedido.length; i++) {
        let idRegistro = 0;
        let row = tbody.insertRow(i);
        row.setAttribute("idRegistro", idRegistro);

        let codigoCelda = row.insertCell(0),
            descripcionCelda = row.insertCell(1),
            unidad_medida = row.insertCell(2),
            solicitadaCelda = row.insertCell(3),
            despachadaCelda = row.insertCell(4),
            cuentaCelda = row.insertCell(5),
            referenciaCelda = row.insertCell(6),
            borrarCelda = row.insertCell(7);

        idRegistro = idRegistro + 1;
        console.log("idRegistro " + idRegistro + " i: " + i);

        codigoCelda.innerHTML = listaRegistros[i].codigo;
        descripcionCelda.innerHTML = listaRegistros[i].descripcion;
        unidad_medida.innerHTML = listaRegistros[i].unidad_medida;
        solicitadaCelda.innerHTML = listaRegistros[i].solicitada;
        despachadaCelda.innerHTML = listaRegistros[i].despachada;
        cuentaCelda.innerHTML = listaRegistros[i].cuenta;
        referenciaCelda.innerHTML = listaRegistros[i].referencia;

        let buttonBorrar = document.createElement('button');
        buttonBorrar.type = 'button';
        buttonBorrar.id = "buttonBorrar";
        //buttonBorrar.value = i + 1;
        buttonBorrar.textContent = "X";

        borrarCelda.appendChild(buttonBorrar);
        buttonBorrar.addEventListener('click', (event) => {
            event.target.parentNode.parentNode.remove();
            borrarRegistro();
        })

        function borrarRegistro(idRegistro) {
            let elementoEliminado = pedido.splice(idRegistro, 1);
        }
        tbody.appendChild(row);
    }

}

function limpiar() {
    document.getElementById('inputCodigo').value = "";
    document.getElementById('inputSolicitada').value = "";
    document.getElementById('inputDespachada').value = "";
    document.getElementById('selectCuentaPedido').value = "";
    document.getElementById('selectRefPedido').value = "";
}