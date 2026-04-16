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
    /*addMessage("EszközID: " + eszkozID);
    await connectWebSocket();*/
}

async function uzenetKuldes() {
    if (!input.value.trim()) return;
    if (aktRoom === "") return;
    await connectWebSocket();
    const msg = input.value;
    console.log(felhID)
    ws.send(JSON.stringify({ type: "message", felado: felhID, to: cimzettek, msg: msg, room: aktRoom }));
    /*addMessage(`Te: ${msg}`);*/
    input.value = "";
}

/* --- WebSocket kapcsolódás ---*/
async function connectWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    ws = new WebSocket(wsUrl);

    return new Promise((resolve, reject) => {
        ws.onopen = () => {
            /*addMessage("Kapcsolódva: " + eszkozID);*/
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
                    
                /*MessageBox.Show("tagokfrissit, szoba: "+room);*/
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
      console.log("GS GET:", text); /*logoljuk*/
      return text;                  /* visszaadjuk*/
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
    /*          console.log("Regisztráció gomb kattintva");*/
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
    /*console.log(beenged)*/
    if (beenged.split("_")[0] == "sikeres")
    {
        felhID = felhid;
        megjNev = beenged.split("_")[1].toString();
        alert("Sikeres bejelentkezés!");
        Indit();
    }
    else if (beenged == "sikertelen")
    {
        document.getElementById("bejelentkezes").style.display = "flex";
        document.getElementById("bejelentkezes_felhID").value = felhid;
        document.getElementById("bejelentkezes_jelszo1").value = "";
        document.getElementById("betoltes").style.display = "none"
        alert("Sikertelen bejelentkezés! Kérem ellenőrizze a megadott adatokat!");

    }
    else if (beenged.split("_")[0] == "már van")
    {
        felhID = felhid;
        megjNev = beenged.split("_")[1].toString();
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
            /*          alert("Hiba a rendszerben! Nem található a megadott felhasználó eszköze!");*/
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
                .split(':')                       /*           sorokra bontás*/
                .flatMap(sor => sor.split('-')[1] /*           minden sorból a második részt (eszközök)*/
                                    .split('_'));    /*           eszközök külön*/

        ws.send(JSON.stringify({ type: "szobaInfo", felado: felhID, to: eszkozeikArr, msg: "tagokFrissit", room: aktRoom}));
        alert("Felhasználó sikeresen hozzáadva!");
        return;
    }
    /*          alert("Attól tartok valami nagyon nem jó!");*/
    document.getElementsByTagName("body")[0].innerHTML = "<h1>Attól tartok valami nagyon nem jó!</h1>";
}

async function szobaLeker() {
    const input = await GS_Get("szobaleker_" + felhID + "_" + aktRoom);
    /*          console.log(input);*/
    const sorok = input.split(":");

    /*           2D tömb*/
    szobaTagok = sorok.map(sor => sor.split("-"));

    let ujCimzettek = [];
    for (let i = 0; i < szobaTagok.length; i++) {
        /*          console.log(szobaTagok[i]);*/
        if (szobaTagok[i][2]) { /*           ha van eszköz lista*/
            ujCimzettek.push(...szobaTagok[i][2].split("_"));
        }
    }

    cimzettek = ujCimzettek;
    /*           console.log(cimzettek);*/

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
    /*          szobakBetolt();*/
    await connectWebSocket();
    let eszkozei = await GS_Get("eszkozei_" + felhID);
        if (eszkozei == "nincs")
        {
            /*          alert("Hiba a rendszerben! Nem található a megadott felhasználó eszköze!");*/
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
    document.getElementById("betoltes").style.display = "flex";
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
    
    /*          alert("elméleti mentés")*/
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

  /*           OS*/
  let os = "Web";
  if (uaL.includes("windows nt 10")) os = "Windows 10/11";
  else if (uaL.includes("windows nt 6.3")) os = "Windows 8.1";
  else if (uaL.includes("windows nt 6.1")) os = "Windows 7";
  else if (uaL.includes("mac os")) os = "macOS";
  else if (uaL.includes("android")) os = "Android";
  else if (uaL.includes("iphone") || uaL.includes("ipad")) os = "iOS";
  else if (uaL.includes("linux")) os = "Linux";

  /*           Browser*/
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