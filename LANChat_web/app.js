const wsUrl = "wss://lanchat-1dqn.onrender.com";
const GSurl = "https://script.google.com/macros/s/AKfycbxpRf82GkruhbZNfmXJUaRuMBF-B7ueZLfXsAGZ1XWKYq3NbnextFTlKSEWLebMEziY/exec";
let ws;
let eszkozID;
let felhID;

let cimzettek = [];

let messagesDiv;
let input;

let jelszo1;

let aktRoom = "";

let szobaTagok;
let memuNyitva = false;

let megjNev;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('I 2E="4i://4h-4g.4f.37";I 2L="4j://4k.4o.37/4n/s/4m-4l/4e";f 12;f R;f B;f 2a=[];f 1C;f 16;f L;f 14="";f 1a;f 1c=4d;f 1e;5.2j("46",()=>{1C=5.9("3n");16=5.9("16");16.2j("45",(e)=>{b(e.44==="43")2k()});5.9("47").2l=()=>1n();5.9("48").2l=()=>2k();3y()});W E 3y(){R=1x.3p("2K");B=1x.3p("23");5.9("N").c.d="13";b(R){f G=H Q("4c"+R);b(G=="Y 4b"||G=="Y 4a"){o("Ó49á4p 2s a 3i!");h}w b(G=="D 1D"){I 1X=2v()R=H Q("2I"+1X);o("Új 1E 4q: "+R)}w b(G=="1D"){}}w{I 1X=2v()R=H Q("2I"+1X);1x.3f("2K",R);20.22("Új 24ö4F:",R)}b(B==18||B==""){5.9("1S/1R").c.d="13";5.9("N").c.d="u"}w{f G=H Q("4E"+B+"C"+R);b(G.Z("C")[0]=="1D"){1e=G.Z("C")[1];1M();5.9("X").c.d="F";5.9("N").c.d="u"}w b(G=="D 1D"){B="";5.9("1S/1R").c.d="13";5.9("N").c.d="u"}}}W E 2k(){b(!16.y.4D())h;b(14==="")h;H 1n();I O=16.y;20.22(B)12.1v(1j.1w({P:"2T",1Q:B,1O:2a,O:O,1q:14}));16.y=""}W E 1n(){b(12&&12.4H===2C.4I)h;12=2Y 2C(2E);h 2Y 4M((2W,2F)=>{12.4L=()=>{12.1v(1j.1w({P:"4K",4J:R}));2W()};12.4C=(27)=>{4B{I 1g=1j.4u(27.1g);I P=1g.P;I 19=1g.19||"2g";I O=1g.O||"";I 1q=1g.1q||"";b(P==="2T"||P==="4t"){b(1q===14||19==="2g"){f q;b(19=="2g"){q=19}w{b(1a!=18&&1a.1b>0){q=(19==B)?"2Q":(1a.4r(S=>S.1b>1&&S[1]==19.42())?.[0]??"Y")}w{q=19==B?"2Q":19}}1z(`${q}:${O}`)}}w b(P==="2d"){b(O==="2c"){26()}}w b(P=="3e"&&1q==14){b(O=="38"){1Y()}}}3b{1z(27.1g)}};12.4w=(1p)=>{1z("21: "+1p);2F(1p)}})}W E Q(O){I 3t=`${2L}?O=${4A(O)}`;h 4z(3t).3o(1f=>1f.1U()).3o(1U=>{20.22("3m 3z:",1U);h 1U}).3b(1p=>{20.4N("3m 3z 2s:",1p);3B 1p})}E 1z(O){I p=5.3c("3D");p.1Z=O;1C.3u(p);1C.41=1C.3T}E 3S(){5.9("1S/1R").c.d="u";5.9("1o").c.d="13"}E 3R(){5.9("1S/1R").c.d="u";5.9("2h").c.d="13"}W E 40(){L=5.9("3E").y;f 2M=5.9("3Z").y;f q=5.9("3Y").y;b(L==""||L==18){o("A Uó D V ü1f!");h}b(L!=2M){o("1Vás Uó3hősítés!");h}b(L.1b<6){o("A Uó D V rö1K 6 1Lél!");h}b(q==""||q==18){o("A név D V ü1f!");h}b(q.1b<4){o("A név D V rö1K 4 1Lél!");h}b(q=="még Y"){o("A név D V \'még Y\'!");h}b(L==q){o("A Uó D 2w 2q a né2p!");h}b(L.x("C")||q.x("C")||L.x("-")||q.x("-")||L.x(":")||q.x(":")){o("A 1d 1T D 3sák a kö2Hő 2J: C - :");h}5.9("2h").c.d="u";B=H Q(`3X${q}C${L}C${R}`);o("1J 3Qá3Pó!\\3I ön 1háló 1E-3H: "+B);1e=q;1o(L,B)}E 3G(){f 17=5.9("36").y;f 1s=5.9("39").y;1o(17,1s)}W E 1o(17,1r){b(17==""||17==18){o("A Uó D V ü1f!");h}b(1r==0){o("A 1háló 1E D V 0!");h}5.9("2h").c.d="u";5.9("1o").c.d="u";5.9("N").c.d="13";f 1W=H Q(`3F${1r}C${17}C${R}`);b(1W=="3g"){B=1r;o("1J 1Iés!");1M()}w b(1W=="3k"){5.9("1o").c.d="13";5.9("39").y=1r;5.9("36").y="";o("25 1Iés! Ké2S 2Vő2U a 1d 3K!")}w b(1W=="már 3N"){B=1r;o("1J 1Iés!");1M()}w{o("25 1Iés! 21 a 3i!")}}E 1M(){5.9("X").c.d="F";5.9("N").c.d="u";1x.3f("23",B);26();1n()}W E 26(){f 2f=5.9("1A");f 1A=H Q(`5G${B}`);b(!1A||1A==="Y"){o("Még D 5E 5H 3ré5I 5K!");h}2f.1B="";1A.Z(\'C\').29(3a=>{I[1s,q]=3a.Z(\':\');I 1y=5.3c("1y");1y.1Z=q;1y.2l=W()=>{b(14==1s)h;14=1s;5.9("3n").1B="";5.9("5w").1Z=q;5.9("X").c.d="u"5.9("N").c.d="13"H 1Y();b(1c){3q()}5.9("N").c.d="u"5.9("X").c.d="F"1z(`5vé4O a(z)${q}3ré5u!`)}2f.3u(1y)})}W E 5x(){f 1H=5.9("5y").y;f 17=5.9("1G").y;b(17==""||17==18){o("5Bó 5Aá5M kö5Lő 5V 2e 3wá60ásá5Z!");h}b(1H==0){o("A 1háló 1E D V 0!");h}5.9("1N").c.d="u";5.9("N").c.d="13";f G=H Q(`5Y${B}C${17}C${14}C${1H}`);b(G=="2Aás U"){o("1Vás Uó! Ké2S 2Vő2U a 1d Uót!");5.9("1N").c.d="F";5.9("1G").y="";h}b(G=="62 D lé34"){o("A 1d 1háló D lé34!");5.9("1G").y="";h}b(G=="már 2e"){5.9("X").c.d="F";o("A 1d 1háló már 2e!");h}b(G=="ké5P"){5.9("X").c.d="F";5.9("N").c.d="u";H 1n();f 1l=H Q("2X"+1H);b(1l=="Y"){5.28("2m")[0].1B="<1i>21 a 2Z! 2O 2Ná2Dó a 1d 1háló 24ö2B!</1i>"}f 1F=1l.Z(\'C\');12.1v(1j.1w({P:"2d",1Q:B,1O:1F,O:"2c",}));H 1Y();I 2y=1a.5O(S=>S.1b>1&&S[1]&&S[1]!=="").29(S=>S[1]);f 3j=H Q("5N"+2y.5Q(":"));f 3d=3j.Z(\':\').5R(S=>S.Z(\'-\')[1].Z(\'C\'));12.1v(1j.1w({P:"3e",1Q:B,1O:3d,O:"38",1q:14}));o("35áló 5T 3wá5S!");h}5.28("2m")[0].1B="<1i>5zól 5t 52 51 D jó!</1i>"}W E 1Y(){I 16=H Q("54"+B+"C"+14);I 30=16.Z(":");1a=30.29(S=>S.Z("-"));f 2i=[];55(f i=0;i<1a.1b;i++){b(1a[i][2]){2i.4Z(...1a[i][2].Z("C"))}}2a=2i}E 4P(){5.9("2b").c.d="F";5.9("X").c.d="u"}W E 4T(){f 2R=5.9("4U").y;5.9("2b").c.d="u";5.9("N").c.d="13";f G=H Q(`4X${B}C${2R}`);H 1n();f 1l=H Q("2X"+B);b(1l=="Y"){5.28("2m")[0].1B="<1i>21 a 2Z! 2O 2Ná2Dó a 1d 1háló 24ö2B!</1i>"}f 1F=1l.Z(\'C\');12.1v(1j.1w({P:"2d",1Q:B,1O:1F,O:"2c",}));5.9("N").c.d="u";5.9("X").c.d="F"}E 5b(){5.9("2b").c.d="u";5.9("1N").c.d="u";5.9("X").c.d="F";5.9("1G").y=""}E 5d(){b(14=="")h;5.9("X").c.d="u"5.9("1N").c.d="F"}E 3q(){b(!1c){1c=!1c 5.9("1u").c.d="u"5.9("1t").c.d="F"}w{1c=!1c 5.9("1u").c.d="F"5.9("1t").c.d="u"}}3v.2j("5f",()=>{b(3v.5s>5g){5.9("1u").c.d="F"5.9("1t").c.d="F"}w{b(1c){5.9("1u").c.d="u"5.9("1t").c.d="F"}w{5.9("1u").c.d="F"5.9("1t").c.d="u"}}});W E 5r(){b(!59("4S 53 50 5U?")){h}5.9("1k").c.d="u";5.9("N").c.d="F";1x.5W("23");f G=H Q("61"+R+"C"+B);b(G=="3k 1Pés, D 1D"){o("25 1Pés, D 5D 5F!")}w b(G=="3g 1Pés"){o("1J 1Pés, 5a 5eás ú5h!")}B="";5i.5j()}E 5p(){5.9("1k").c.d="F";5.9("X").c.d="u";5.9("4V").4W("16").y=1e;5.9("5C").1Z="35áló 1E: "+B}W E 5X(){f q=5.9("2z").y;f T=5.9("2n").y;f 3A=5.9("2r").y;L=5.9("2o").y;b(L==""||L==18){o("A Uó D V ü1f!");h}b(T!=3A){o("1Vás Uó3hősítés!");h}b(T.1b<6&&T!=""){o("A Uó D V rö1K 6 1Lél!");h}b(q.1b<4&&q!=""){o("A név D V rö1K 4 1Lél!");h}b(q==""||q==18){o("A név D V ü1f!");h}b(q=="még Y"){o("A név D V \'még Y\'!");h}b(L==q){o("A Uó D 2w 2q a né2p!");h}b(T==q){o("A Uó D 2w 2q a né2p!");h}b(T==""||T==18){T="*"}b(T.x("C")||q.x("C")||T.x("-")||q.x("-")||T.x(":")||q.x(":")){o("A 1d 1T D 3sák a kö2Hő 2J: C - :");h}b(q==1e){q="*"}b(T=="*"&&q=="*"){o("Y vá5cás!");5.9("1k").c.d="u";5.9("X").c.d="F";5.9("2n").y="";5.9("2r").y="";5.9("2o").y="";h}5.9("2o").y="";5.9("1k").c.d="u";5.9("N").c.d="13"5.9("2n").y="";5.9("2r").y="";f G=H Q("5q"+B+"C"+L+"C"+T+"C"+q);b(G=="2Aás 1T"){5.9("1k").c.d="F";5.9("2z").y=1e;5.9("N").c.d="u";o("1Vás 1T");h}w b(G=="Y 5o"){5.9("1k").c.d="F";5.9("N").c.d="u"o("5n 5ká5l!");h}w b(G=="5m"){b(q!="*"){1e=q}5.9("N").c.d="u"5.9("X").c.d="F";o("58");h}w{o("2s!")}}E 2v(){I 2P=4Q.4R;I J=2P.56();f 15="57";b(J.x("2u 2x 10"))15="2t 10/11";w b(J.x("2u 2x 6.3"))15="2t 8.1";w b(J.x("2u 2x 6.1"))15="2t 7";w b(J.x("5J 15"))15="4Y";w b(J.x("31"))15="33";w b(J.x("32")||J.x("2G"))15="4v";w b(J.x("3L"))15="3M";f 1m="3O";b(J.x("3l")&&!J.x("3x"))1m="3J";w b(J.x("3x"))1m="3W";w b(J.x("3V"))1m="3U";w b(J.x("3C")&&!J.x("3l"))1m="4x";f P="4y";b(J.x("31"))P="33";w b(J.x("32"))P="4s";w b(J.x("2G"))P="4G";h`${P}-${15}-${1m}`}',62,375,'|||||document||||getElementById||if|style|display||let||return|||||||alert||nev||||none||else|includes|value|||felhID|_|nem|function|block|valasz|await|const|uaL||jelszo1||betoltes|msg|type|GS_Get|eszkozID|sor|ujJelszo1|jelsz|lehet|async|betoltve|nincs|split|||ws|flex|aktRoom|os|input|jelszo|null|from|szobaTagok|length|memuNyitva|megadott|megjNev|res|data|felhaszn|h1|JSON|prof|eszkozei|browser|connectWebSocket|bejelentkezes|err|room|felhid|id|menu|uzenetek|send|stringify|localStorage|li|addMessage|szobak|innerHTML|messagesDiv|tartalmazza|ID|eszkozeiArr|ujFelhSJelszo|ujFelhId|bejelentkez|Sikeres|videbb|karaktern|Indit|tagHozzaadas|to|kijelentkez|felado|reg|bej|adatok|text|Hib|beenged|eszkozNev|szobaLeker|textContent|console|Hiba|log|webFelhId|eszk|Sikertelen|szobakBetolt|event|getElementsByTagName|map|cimzettek|szobaLetrehozas|szobakFrissit|info|tag|szobaki|Szerver|regisztracio|ujCimzettek|addEventListener|uzenetKuldes|onclick|body|profUjJelszo|profJelszo|vvel|meg|profUjJelszoMeg|hiba|Windows|windows|getDeviceName|egyezhet|nt|tagok|megjNevKiirBe|hib|ze|WebSocket|lhat|wsUrl|reject|ipad|vetkez|ujid_|karaktereket|webEszkId|GSurl|jelszo2|tal|Nem|ua|Te|szobaNev|rem|message|rizze|ellen|resolve|eszkozei_|new|rendszerben|sorok|android|iphone|Android|tezik|Felhaszn|bejelentkezes_jelszo1|com|tagokFrissit|bejelentkezes_felhID|szoba|catch|createElement|eszkozeikArr|szobaInfo|setItem|sikeres|meger|rendszerbe|eszkozeik|sikertelen|chrome|GS|messages|then|getItem|menuNyitZar|cseveg|tartalmazhatj|url|appendChild|window|hozz|edg|Inditas|GET|ujJelszo2|throw|safari|div|regisztracio_jelszo1|bejelentkezes_|bejelentkezesBTNok_Click|ja|nAz|Chrome|adatokat|linux|Linux|van|Browser|ci|regisztr|regisztralasBTN_Click|bejelentkezesBTN_Click|scrollHeight|Firefox|firefox|Edge|regisztracio_|regisztracio_nev|regisztracio_jelszo2|regisztracioBTN_Click|scrollTop|toString|Enter|key|keydown|DOMContentLoaded|connectBtn|sendBtn|ri|adat|lap|eszkidell_|false|exec|onrender|1dqn|lanchat|wss|https|script|B7ueZLfXsAGZ1XWKYq3NbnextFTlKSEWLebMEziY|AKfycbxpRf82GkruhbZNfmXJUaRuMBF|macros|google|si|megadva|find|iPhone|status|parse|iOS|onerror|Safari|PC|fetch|encodeURIComponent|try|onmessage|trim|felhidell_|zID|iPad|readyState|OPEN|userId|register|onopen|Promise|error|pve|ujCsevegesBtn_Click|navigator|userAgent|Biztosan|ujSzoba|szobaNevBe|nevKi|querySelector|ujszoba_|macOS|push|szeretne|nagyon|valami|ki|szobaleker_|for|toLowerCase|Web|Mentve|confirm|az|megse|ltoztat|tagHozzaadasa|alkalmaz|resize|768|jraindul|location|reload|aktu|lis|mentve|Minden|feladat|profilBTN_Click|felhmod_|kijelentkezes|innerWidth|tartok|sbe|Bel|szobaNevKiir|tagHozzaadasaBtn_Click|ujFelhIdBe|Att|megad|Jelsz|felhIdki|volt|csatlakozott|bejelentkezve|szobakleker_|egyetlen|shez|mac|sem|telez|sa|eszkozeik_|filter|sz|join|flatMap|adva|sikeresen|jelentkezni|chat|removeItem|profMent_Click|taghozzaadas_|hoz|ad|kijelentkezes_|felh'.split('|'),0,{}))

document.addEventListener("DOMContentLoaded", () => {
  messagesDiv = document.getElementById("messages");
  input = document.getElementById("input");

  input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") uzenetKuldes();
  });

  

  document.getElementById("connectBtn").onclick = () => connectWebSocket();
  document.getElementById("sendBtn").onclick = () => uzenetKuldes();

  
  Inditas();

  /*{
    localStorage.removeItem("webEszkId")
    localStorage.removeItem("webFelhId")
  }*/
  
});

async function Inditas() {
    eszkozID = localStorage.getItem("webEszkId");
    felhID = localStorage.getItem("webFelhId");
    document.getElementById("betoltes").style.display = "flex";
    if (eszkozID) {
    
        let valasz = await GS_Get("eszkidell_" + eszkozID);
        if (valasz == "nincs lap" || valasz == "nincs adat")
        {
            alert("Óriási hiba a rendszerbe!");
            return;
        }
        else if (valasz == "nem tartalmazza")
        {
            const eszkozNev = getDeviceName()
            eszkozID = await GS_Get("ujid_"+eszkozNev);
            alert("Új ID megadva: " + eszkozID);
        }
        else if (valasz == "tartalmazza") { }
    }
    else {
        const eszkozNev = getDeviceName()
        eszkozID = await GS_Get("ujid_"+eszkozNev);
        localStorage.setItem("webEszkId", eszkozID);
        console.log("Új eszközID:", eszkozID);
    }

    
    if (felhID == null || felhID == "") {
        document.getElementById("bej/reg").style.display = "flex";
        document.getElementById("betoltes").style.display = "none";
    }
    else {
        let valasz = await GS_Get("felhidell_" + felhID + "_" + eszkozID);
        if (valasz.split("_")[0] == "tartalmazza")
        {
            megjNev = valasz.split("_")[1];
            Indit();

            document.getElementById("betoltve").style.display = "block";
            document.getElementById("betoltes").style.display = "none";
        }
        else if (valasz == "nem tartalmazza")
        {
            felhID = "";
            document.getElementById("bej/reg").style.display = "flex";
            document.getElementById("betoltes").style.display = "none";
            
        }
        
    }
    //addMessage("EszközID: " + eszkozID);
    //await connectWebSocket();
}

async function uzenetKuldes() {
    if (!input.value.trim()) return;
    if (aktRoom === "") return;
    await connectWebSocket();
    const msg = input.value;
    console.log(felhID)
    ws.send(JSON.stringify({ type: "message", felado: felhID, to: cimzettek, msg: msg, room: aktRoom }));
    //addMessage(`Te: ${msg}`);
    input.value = "";
}

// --- WebSocket kapcsolódás ---
async function connectWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    ws = new WebSocket(wsUrl);

    return new Promise((resolve, reject) => {
        ws.onopen = () => {
            //addMessage("Kapcsolódva: " + eszkozID);
            ws.send(JSON.stringify({ type: "register", userId: eszkozID }));
            resolve();
        };
      ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            const type = data.type;
            const from = data.from || "Szerver";
            const msg = data.msg || "";
            const room = data.room || "";
            if (type === "message" || type === "status") {
                if (room === aktRoom || from === "Szerver"){
                    let nev;
                    if (from == "Szerver"){
                        nev = from;
                    }
                    else {
                        if (szobaTagok != null && szobaTagok.length > 0){
                            nev = (from == felhID)
                                ? "Te"
                                : (szobaTagok.find(sor => sor.length > 1 && sor[1] == from.toString())?.[0] ?? "nincs");
                            
                        }
                        else {
                            nev = from == felhID ? "Te" : from;
                        }
                    }
                    addMessage(`${nev}: ${msg}`);
                }
            }
            else if (type === "info") {
                if (msg === "szobakFrissit") {
                    szobakBetolt();
                }
            }
            else if (type == "szobaInfo" && room == aktRoom)
            
            {
                if (msg == "tagokFrissit")
                {
                    
                    //MessageBox.Show("tagokfrissit, szoba: "+room);
                    szobaLeker();
                        
                }
            }
            
        } catch {
            addMessage(event.data);
        }
      };
      ws.onerror = (err) => {
        addMessage("Hiba: " + err);
        reject(err);
      };
    });
}

async function GS_Get(msg) {
  const url = `${GSurl}?msg=${encodeURIComponent(msg)}`;
  return fetch(url)
    .then(res => res.text())
    .then(text => {
      console.log("GS GET:", text); // logoljuk
      return text;                  // visszaadjuk
    })
    .catch(err => {
      console.error("GS GET hiba:", err);
      throw err;
    });
}

function addMessage(msg) {
      const p = document.createElement("div");
      p.textContent = msg;
      messagesDiv.appendChild(p);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

function bejelentkezesBTN_Click() {
    document.getElementById("bej/reg").style.display = "none";
    document.getElementById("bejelentkezes").style.display = "flex";
}
function regisztralasBTN_Click() {
    document.getElementById("bej/reg").style.display = "none";
    document.getElementById("regisztracio").style.display = "flex";
}

async function regisztracioBTN_Click() {
    //console.log("Regisztráció gomb kattintva");
    jelszo1 = document.getElementById("regisztracio_jelszo1").value;
    let jelszo2 = document.getElementById("regisztracio_jelszo2").value;
    let nev = document.getElementById("regisztracio_nev").value;
    if (jelszo1 == "" || jelszo1 == null)
    {
        alert("A jelszó nem lehet üres!");
        return;
    }
    if (jelszo1 != jelszo2)
    {
        alert("Hibás jelszómegerősítés!");
        return;
    }
    if (jelszo1.length < 6)
    {
        alert("A jelszó nem lehet rövidebb 6 karakternél!");
        return;
    }
    if (nev == "" || nev == null)
    {
        alert("A név nem lehet üres!");
        return;
    }
    if (nev.length < 4)
    {
        alert("A név nem lehet rövidebb 4 karakternél!");
        return;
    }
    if (nev == "még nincs")
    {
        alert("A név nem lehet 'még nincs'!");
        return;
    }
    if (jelszo1 == nev)
    {
        alert("A jelszó nem egyezhet meg a névvel!");
        return;
    }
    if (
        jelszo1.includes("_") || nev.includes("_") ||
        jelszo1.includes("-") || nev.includes("-") ||
        jelszo1.includes(":") || nev.includes(":")){
            alert("A megadott adatok nem tartalmazhatják a következő karaktereket: _ - :");
            return;
        }
    document.getElementById("regisztracio").style.display = "none";
    felhID = await GS_Get(`regisztracio_${nev}_${jelszo1}_${eszkozID}`);
    alert("Sikeres regisztráció!\nAz ön felhasználó ID-ja: " + felhID);
    megjNev = nev;
    bejelentkezes(jelszo1, felhID);            
}

function bejelentkezesBTNok_Click() {
    let jelszo = document.getElementById("bejelentkezes_jelszo1").value;
    let id = document.getElementById("bejelentkezes_felhID").value;
    bejelentkezes(jelszo, id);
}

async function bejelentkezes(jelszo, felhid) {
    if (jelszo == "" || jelszo == null){
        alert("A jelszó nem lehet üres!");
        return; 
    }
    if (felhid == 0)
    {
        alert("A felhasználó ID nem lehet 0!");
        return;
    }
    document.getElementById("regisztracio").style.display = "none";
    document.getElementById("bejelentkezes").style.display = "none";
    document.getElementById("betoltes").style.display = "flex";
    let beenged = await GS_Get(`bejelentkezes_${felhid}_${jelszo}_${eszkozID}`);
    if (beenged == "sikeres")
    {
        felhID = felhid;
        alert("Sikeres bejelentkezés!");
        Indit();
    }
    else if (beenged == "sikertelen")
    {
        document.getElementById("bejelentkezes").style.display = "flex";
        document.getElementById("bejelentkezes_felhID").value = felhid;
        document.getElementById("bejelentkezes_jelszo1").value = "";
        alert("Sikertelen bejelentkezés! Kérem ellenőrizze a megadott adatokat!");

    }
    else if (beenged == "már van")
    {
        felhID = felhid;
        alert("Sikeres bejelentkezés!");
        Indit();
    }
    else
    {
        alert("Sikertelen bejelentkezés! Hiba a rendszerbe!");
    }
}

function Indit() {
    document.getElementById("betoltve").style.display = "block";
    document.getElementById("betoltes").style.display = "none";
    localStorage.setItem("webFelhId", felhID);
    szobakBetolt();
    connectWebSocket();
    
}

async function szobakBetolt() {
    let szobaki = document.getElementById("szobak");
    let szobak = await GS_Get(`szobakleker_${felhID}`);

    if (!szobak || szobak === "nincs") {
        alert("Még nem csatlakozott egyetlen csevegéshez sem!");
        return;
    }
    szobaki.innerHTML = "";
    szobak.split('_').map(szoba => {
        const [id, nev] = szoba.split(':');
        const li = document.createElement("li");
        li.textContent = nev;
        li.onclick = async () => {
            if (aktRoom == id) return;
            aktRoom = id;
            document.getElementById("messages").innerHTML = "";
            document.getElementById("szobaNevKiir").textContent = nev;
            document.getElementById("betoltve").style.display = "none"
            document.getElementById("betoltes").style.display = "flex"
            await szobaLeker();
            if (memuNyitva){
                menuNyitZar()
            }
            document.getElementById("betoltes").style.display = "none"
            document.getElementById("betoltve").style.display = "block"
            addMessage(`Belépve a(z) ${nev} csevegésbe!`);
        }
        szobaki.appendChild(li);
    });

}

async function tagHozzaadasaBtn_Click() {
    let ujFelhId = document.getElementById("ujFelhIdBe").value;
    let jelszo = document.getElementById("ujFelhSJelszo").value;
    if (jelszo == "" || jelszo == null){
        alert("Jelszó megadása kötelező chat tag hozzáadásához!");
        return;
    }
    if (ujFelhId == 0)
    {
        alert("A felhasználó ID nem lehet 0!");
        return;
    }
    document.getElementById("tagHozzaadas").style.display = "none";
    document.getElementById("betoltes").style.display = "flex";
    let valasz = await GS_Get(`taghozzaadas_${felhID}_${jelszo}_${aktRoom}_${ujFelhId}`);
    if (valasz == "hibás jelsz")
    {
        alert("Hibás jelszó! Kérem ellenőrizze a megadott jelszót!");
        document.getElementById("tagHozzaadas").style.display = "block";
        document.getElementById("ujFelhSJelszo").value = "";
        return;
    }
    if (valasz == "felh nem létezik")
    {
        alert("A megadott felhasználó nem létezik!");
        document.getElementById("ujFelhSJelszo").value = "";
        return;
    }
    if (valasz == "már tag")
    {
        document.getElementById("betoltve").style.display = "block";
        alert("A megadott felhasználó már tag!");
        return;
    }
    if (valasz == "kész")
    {
        document.getElementById("betoltve").style.display = "block";
        document.getElementById("betoltes").style.display = "none";
        
        await connectWebSocket();
        let eszkozei = await GS_Get("eszkozei_" + ujFelhId);
        if (eszkozei == "nincs")
        {
            //alert("Hiba a rendszerben! Nem található a megadott felhasználó eszköze!");
            document.getElementsByTagName("body")[0].innerHTML = "<h1>Hiba a rendszerben! Nem található a megadott felhasználó eszköze!</h1>";
        }
        let eszkozeiArr = eszkozei.split('_');
        
        ws.send(JSON.stringify({ type: "info", felado: felhID, to: eszkozeiArr, msg: "szobakFrissit", }));
        

        await szobaLeker();
        const tagok = szobaTagok
            .filter(sor => sor.length > 1 && sor[1] && sor[1] !== "")
            .map(sor => sor[1]);

        let eszkozeik = await GS_Get("eszkozeik_" + tagok.join(":"));
        let eszkozeikArr = eszkozeik
                .split(':')                       // sorokra bontás
                .flatMap(sor => sor.split('-')[1] // minden sorból a második részt (eszközök)
                                    .split('_'));    // eszközök külön

        ws.send(JSON.stringify({ type: "szobaInfo", felado: felhID, to: eszkozeikArr, msg: "tagokFrissit", room: aktRoom}));
        alert("Felhasználó sikeresen hozzáadva!");
        return;
    }
    //alert("Attól tartok valami nagyon nem jó!");
    document.getElementsByTagName("body")[0].innerHTML = "<h1>Attól tartok valami nagyon nem jó!</h1>";
}

async function szobaLeker() {
    const input = await GS_Get("szobaleker_" + felhID + "_" + aktRoom);
    //console.log(input);
    const sorok = input.split(":");

    // 2D tömb
    szobaTagok = sorok.map(sor => sor.split("-"));

    let ujCimzettek = [];
    for (let i = 0; i < szobaTagok.length; i++) {
        //console.log(szobaTagok[i]);
        if (szobaTagok[i][2]) { // ha van eszköz lista
            ujCimzettek.push(...szobaTagok[i][2].split("_"));
        }
    }

    cimzettek = ujCimzettek;
    // console.log(cimzettek);

}

function ujCsevegesBtn_Click() {
    document.getElementById("szobaLetrehozas").style.display = "block";
    document.getElementById("betoltve").style.display = "none";
}

async function ujSzoba() {
    let szobaNev = document.getElementById("szobaNevBe").value;
    document.getElementById("szobaLetrehozas").style.display = "none";
    document.getElementById("betoltes").style.display = "flex";
    let valasz = await GS_Get(`ujszoba_${felhID}_${szobaNev}`);
    //szobakBetolt();
    await connectWebSocket();
    let eszkozei = await GS_Get("eszkozei_" + felhID);
        if (eszkozei == "nincs")
        {
            //alert("Hiba a rendszerben! Nem található a megadott felhasználó eszköze!");
            document.getElementsByTagName("body")[0].innerHTML = "<h1>Hiba a rendszerben! Nem található a megadott felhasználó eszköze!</h1>";
        }
        let eszkozeiArr = eszkozei.split('_');
        
        ws.send(JSON.stringify({ type: "info", felado: felhID, to: eszkozeiArr, msg: "szobakFrissit", }));

    document.getElementById("betoltes").style.display = "none";
    document.getElementById("betoltve").style.display = "block";
        

}

function megse() {
    document.getElementById("szobaLetrehozas").style.display = "none";
    document.getElementById("tagHozzaadas").style.display = "none";
    document.getElementById("betoltve").style.display = "block";
    document.getElementById("ujFelhSJelszo").value = "";
}

function tagHozzaadasa(){
    if (aktRoom == "") return;
    document.getElementById("betoltve").style.display = "none"
    document.getElementById("tagHozzaadas").style.display = "block"
}
function menuNyitZar() {
    if (!memuNyitva){
        memuNyitva = !memuNyitva
        document.getElementById("uzenetek").style.display = "none"
        document.getElementById("menu").style.display = "block"
    }
    else{
        memuNyitva = !memuNyitva
        document.getElementById("uzenetek").style.display = "block"
        document.getElementById("menu").style.display = "none"
    }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768){
    document.getElementById("uzenetek").style.display = "block"
        document.getElementById("menu").style.display = "block"
  }
  else {
    if (memuNyitva){
        document.getElementById("uzenetek").style.display = "none"
        document.getElementById("menu").style.display = "block"
    }
    else{
        document.getElementById("uzenetek").style.display = "block"
        document.getElementById("menu").style.display = "none"
    }
  }
});

async function kijelentkezes() {
    if (!confirm("Biztosan ki szeretne jelentkezni?")) {
    return;
    }
    document.getElementById("prof").style.display = "none";
    document.getElementById("betoltes").style.display = "block";
    localStorage.removeItem("webFelhId");
    let valasz = await GS_Get("kijelentkezes_"+eszkozID+"_"+felhID);
    if (valasz == "sikertelen kijelentkezés, nem tartalmazza")
    {
        alert("Sikertelen kijelentkezés, nem volt bejelentkezve!");
    }
    else if (valasz == "sikeres kijelentkezés")
    {
        alert("Sikeres kijelentkezés, az alkalmazás újraindul!");
    }
    felhID = "";
    location.reload();
}
function profilBTN_Click(){
    document.getElementById("prof").style.display = "block";
    document.getElementById("betoltve").style.display = "none";
    document.getElementById("nevKi").querySelector("input").value = megjNev;
    document.getElementById("felhIdki").textContent = "Felhasználó ID: " + felhID;
}

async function profMent_Click(){
    let nev = document.getElementById("megjNevKiirBe").value;
    let ujJelszo1 = document.getElementById("profUjJelszo").value;
    let ujJelszo2 = document.getElementById("profUjJelszoMeg").value;
    jelszo1 = document.getElementById("profJelszo").value;
    if (jelszo1 == "" || jelszo1 == null)
    {
        alert("A jelszó nem lehet üres!");
        return;
    }
    if (ujJelszo1 != ujJelszo2)
    {
        alert("Hibás jelszómegerősítés!");
        return;
    }
    if (ujJelszo1.length < 6 && ujJelszo1 != "")
    {
        alert("A jelszó nem lehet rövidebb 6 karakternél!");
        return;
    }
    
    if (nev.length < 4  && nev != "")
    {
        alert("A név nem lehet rövidebb 4 karakternél!");
        return;
    }
    if (nev == "" || nev == null)
    {
        alert("A név nem lehet üres!");
        return;   
    }
    if (nev == "még nincs")
    {
        alert("A név nem lehet 'még nincs'!");
        return;
    }
    if (jelszo1 == nev)
    {
        alert("A jelszó nem egyezhet meg a névvel!");
        return;
    }
    if (ujJelszo1 == nev)
    {
        alert("A jelszó nem egyezhet meg a névvel!");
        return;
    }
    if (ujJelszo1 == "" || ujJelszo1 == null)
    {
        ujJelszo1 = "*";
    }
    if (
        ujJelszo1.includes("_") || nev.includes("_") ||
        ujJelszo1.includes("-") || nev.includes("-") ||
        ujJelszo1.includes(":") || nev.includes(":")){
            alert("A megadott adatok nem tartalmazhatják a következő karaktereket: _ - :");
            return;
    }
    if (nev == megjNev){
        nev = "*"
    }
    if (ujJelszo1 == "*" && nev == "*")
    {
        alert("nincs változtatás!");
        document.getElementById("prof").style.display = "none";
        document.getElementById("betoltve").style.display = "block";
        document.getElementById("profUjJelszo").value = "";
        document.getElementById("profUjJelszoMeg").value = "";
        document.getElementById("profJelszo").value = "";
        return;
    }
    
    //alert("elméleti mentés")
    document.getElementById("profJelszo").value = "";
    document.getElementById("prof").style.display = "none";
    document.getElementById("betoltes").style.display = "flex"
    
    document.getElementById("profUjJelszo").value = "";
    document.getElementById("profUjJelszoMeg").value = "";

    let valasz = await GS_Get("felhmod_" + felhID + "_" + jelszo1 + "_" + ujJelszo1 + "_" + nev);
    if (valasz == "hibás adatok")
    {
        document.getElementById("prof").style.display = "block";
        document.getElementById("megjNevKiirBe").value = megjNev;
        document.getElementById("betoltes").style.display = "none";
        alert("Hibás adatok");
        return;
    }
    else if (valasz == "nincs feladat")
    {
        document.getElementById("prof").style.display = "block";
        document.getElementById("betoltes").style.display = "none"
        alert("Minden aktuális!");
        return;
    }
    else if (valasz == "mentve")
    {
        
        if (nev != "*")
        {
            megjNev = nev;
        }
        document.getElementById("betoltes").style.display = "none"
        document.getElementById("betoltve").style.display = "block";
        alert("Mentve");
        return;
    }
    else
    {
        alert("hiba!");
    }



    
    


}
function getDeviceName() {
  const ua = navigator.userAgent;
  const uaL = ua.toLowerCase();

  // OS
  let os = "Web";
  if (uaL.includes("windows nt 10")) os = "Windows 10/11";
  else if (uaL.includes("windows nt 6.3")) os = "Windows 8.1";
  else if (uaL.includes("windows nt 6.1")) os = "Windows 7";
  else if (uaL.includes("mac os")) os = "macOS";
  else if (uaL.includes("android")) os = "Android";
  else if (uaL.includes("iphone") || uaL.includes("ipad")) os = "iOS";
  else if (uaL.includes("linux")) os = "Linux";

  // Browser
  let browser = "Browser";
  if (uaL.includes("chrome") && !uaL.includes("edg")) browser = "Chrome";
  else if (uaL.includes("edg")) browser = "Edge";
  else if (uaL.includes("firefox")) browser = "Firefox";
  else if (uaL.includes("safari") && !uaL.includes("chrome")) browser = "Safari";



    let type = "PC";

    if (uaL.includes("android")) type = "Android";
    else if (uaL.includes("iphone")) type = "iPhone";
    else if (uaL.includes("ipad")) type = "iPad";

  return `${type} - ${os} - ${browser}`;
}