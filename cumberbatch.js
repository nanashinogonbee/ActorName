function getRand(min, list)
{
    let max = list.length - 1;
    return Math.floor(Math.random() * (max - min) + min);
}

function getXmlHttp() {
    let xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
 
function docOpen(docname) {
    let xmlhttp = getXmlHttp();
    xmlhttp.open('GET', docname, false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
        let response = xmlhttp.responseText;
        response = response.split("\n");
        return response
    }
};

function generate() {
    alert( (docOpen("names.txt")[getRand(0, docOpen("names.txt"))] + ' ' + docOpen("surnames.txt")[getRand(0, docOpen("surnames.txt"))]) );
}