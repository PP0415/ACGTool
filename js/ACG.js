window.onload = function () {
    // 親ウィンドウの存在チェック
    LifeCounter.value = "20"
    otherCounter.value = "0"
    obj_window = window.open("Child.html", "child", "width=1200,height=1200,top=0,left=1800");
    douki()
}
document.getElementById("ChildWindowOpen").addEventListener("click", function (e) {
    obj_window = window.open("Child.html", "child", "width=1200,height=1200,top=0,left=1800");
    douki()
});

const douki = () => {
    obj_window.document.getElementById("MonsterArea").innerHTML = document.getElementById("MonsterArea").innerHTML;
    obj_window.document.getElementById("LandArea").innerHTML = document.getElementById("LandArea").innerHTML;
    obj_window.document.getElementById("DeckCardSpace").innerHTML = document.getElementById("DeckCardSpace").innerHTML;
    obj_window.document.getElementById("SubDeckCardSpace").innerHTML = document.getElementById("SubDeckCardSpace").innerHTML;
    obj_window.document.getElementById("LandDeckCardSpace").innerHTML = document.getElementById("LandDeckCardSpace").innerHTML;
    obj_window.document.getElementById("ExclusionSpace").innerHTML = document.getElementById("ExclusionSpace").innerHTML;
    obj_window.document.getElementById("DropSpace").innerHTML = document.getElementById("DropSpace").innerHTML;
    obj_window.document.getElementById("PileSpace").innerHTML = document.getElementById("PileSpace").innerHTML;
    obj_window.document.getElementById("LifeCounter").innerText = document.getElementById("LifeCounter").value;
    obj_window.document.getElementById("otherCounter").innerText = document.getElementById("otherCounter").value;
    obj_window.document.getElementById("RandomNo").innerText = document.getElementById("RandomNo").value;
    obj_window.document.getElementById("HandSpace").innerHTML = document.getElementById("HandSpace").innerHTML;
    if (document.getElementById("HandViewer").innerText == "非公開中") {
        Hand = obj_window.document.getElementById("HandSpace")
        for (i = 0; i < Hand.children.length; i++) {
            Card = Hand.children[i];
            alt = Card.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                let Sleeve = document.getElementById("LandSleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            }
        }
    }
    obj_window.document.getElementById("FreeZoneSpace").innerHTML = document.getElementById("FreeZoneSpace").innerHTML;
    if (document.getElementById("FreeZoneViewer").innerText == "非公開中") {
        Free = obj_window.document.getElementById("FreeZoneSpace")
        for (i = 0; i < Free.children.length; i++) {
            Card = Free.children[i];
            alt = Card.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                let Sleeve = document.getElementById("LandSleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            }
        }
    };
    obj_window.document.body.style.backgroundImage = document.body.style.backgroundImage;
    obj_window.document.getElementById("DeckViewer").innerText = document.getElementById("DeckViewer").innerText;
    obj_window.document.getElementById("DeckViewer").className = document.getElementById("DeckViewer").className;
    obj_window.document.getElementById("LandDeckViewer").innerText = document.getElementById("LandDeckViewer").innerText;
    obj_window.document.getElementById("LandDeckViewer").className = document.getElementById("LandDeckViewer").className;
    obj_window.document.getElementById("SubDeckViewer").innerText = document.getElementById("SubDeckViewer").innerText;
    obj_window.document.getElementById("SubDeckViewer").className = document.getElementById("SubDeckViewer").className;
    obj_window.document.getElementById("HandViewer").innerText = document.getElementById("HandViewer").innerText;
    obj_window.document.getElementById("HandViewer").className = document.getElementById("HandViewer").className;
    obj_window.document.getElementById("FreeZoneViewer").innerText = document.getElementById("FreeZoneViewer").innerText;
    obj_window.document.getElementById("FreeZoneViewer").className = document.getElementById("FreeZoneViewer").className;
    obj_window.document.getElementById("DeckCount").innerText = document.getElementById("DeckCount").innerText;
    obj_window.document.getElementById("LandDeckCount").innerText = document.getElementById("LandDeckCount").innerText;
    obj_window.document.getElementById("SubDeckCount").innerText = document.getElementById("SubDeckCount").innerText;
    obj_window.document.getElementById("ExclusionCount").innerText = document.getElementById("ExclusionCount").innerText;
    obj_window.document.getElementById("DropCount").innerText = document.getElementById("DropCount").innerText;
    obj_window.document.getElementById("HandCount").innerText = document.getElementById("HandCount").innerText;
}
//リセット
document.getElementById("Reset").addEventListener("click", function (e) {
    var result = window.confirm("確認:盤面をリセットしますか?");
    if (result) {
        MonsterArea.innerHTML = "";
        LandArea.innerHTML = "";
        DeckCardSpace.innerHTML = "";
        LandDeckCardSpace.innerHTML = "";
        SubDeckCardSpace.innerHTML = "";
        TokenCardSpace.innerHTML = "";
        ExclusionSpace.innerHTML = "";
        DropSpace.innerHTML = "";
        PileSpace.innerHTML = "";
        LifeCounter.value = "20";
        otherCounter.value = "0";
        HandSpace.innerHTML = "";
        FreeZoneSpace.innerHTML = "";

        //トークンセット
        setTimeout(function () {
            for (i = 0; i < TokenCardSave.children.length; i++) {
                let blobUrl = TokenCardSave.children[i].src;
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Token:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いていたら閉じる
                }
                let Space = document.getElementById("TokenCardSpace");
                Space.appendChild(img_element);
            }
        }, 100);
        //デッキセット
        setTimeout(function () {
            for (i = 0; i < DeckCardSave.children.length; i++) {
                let blobUrl = DeckCardSave.children[i].src;
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Deck:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("DeckCardSpace");
                Space.appendChild(img_element);
            }
        }, 100);
        //ランドセット
        setTimeout(function () {
            for (i = 0; i < LandDeckCardSave.children.length; i++) {
                let blobUrl = LandDeckCardSave.children[i].src;
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Land:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    }
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("LandDeckCardSpace");
                Space.appendChild(img_element);
            }
        }, 100);
        //予備デッキセット
        setTimeout(function () {
            for (i = 0; i < SubDeckCardSave.children.length; i++) {
                let blobUrl = SubDeckCardSave.children[i].src;
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Deck:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    }
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてたら閉じる
                }
                let Space = document.getElementById("SubDeckCardSpace");
                Space.appendChild(img_element);
            }
        }, 100);
    }
});

//プレイマットセット
document.getElementById("PlayMatSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            document.body.style.backgroundImage = "url(" + blobUrl + ")";
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});
//トークンスリーブセット
document.getElementById("TokenSleeveSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        TokenSleeveSpace.innerHTML = "";
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            let img_element = document.createElement("img");
            img_element.src = blobUrl;
            img_element.alt = "トークンスリーブ";
            img_element.width = "126";
            img_element.height = "176";
            let Space = document.getElementById("TokenSleeveSpace");
            Space.appendChild(img_element);
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキスリーブセット
document.getElementById("SleeveSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        SleeveSpace.innerHTML = "";
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            let img_element = document.createElement("img");
            img_element.src = blobUrl;
            img_element.alt = "スリーブ";
            img_element.width = "126";
            img_element.height = "176";
            let Space = document.getElementById("SleeveSpace");
            Space.appendChild(img_element);
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//ランドデッキスリーブセット
document.getElementById("LandSleeveSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        LandSleeveSpace.innerHTML = "";
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            let img_element = document.createElement("img");
            img_element.src = blobUrl;
            img_element.alt = "ランドスリーブ";
            img_element.width = "126";
            img_element.height = "176";
            let Space = document.getElementById("LandSleeveSpace");
            Space.appendChild(img_element);
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//トークンセット
document.getElementById("TokenSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        TokenCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Token:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("TokenCardSpace");
                Space.appendChild(img_element);
                TokenCardSave.innerHTML = TokenCardSpace.innerHTML;
            }
        }, 100);
        setTimeout(function () {
            douki()
        }, 100);

    }
});


//デッキセットjson
document.getElementById("DeckSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {
        return;
    }

    const file = e.target.files[0];
    // ファイルの種類をチェック
    if (file.type !== 'application/json') {
        console.error('JSONファイルを選択してください');
        alert('JSONファイルを選択してください');
        return;
    }

    const reader = new FileReader();

    reader.onload = async function (e) {
        console.log("JSONファイルの読み込みを開始");
        try {
            const deckData = JSON.parse(e.target.result);
            console.log("デッキデータ:", deckData);

            // card_id_number_pairs.jsonを読み込む
            const cardPairsResponse = await fetch('card_id_number_pairs.json');
            const cardPairsArray = await cardPairsResponse.json();

            // 配列からオブジェクトに変換
            const cardPairs = {};
            cardPairsArray.forEach(card => {
                cardPairs[card.id] = card;
            });

            console.log("カードIDペア変換後:", cardPairs);
            console.log("8011のデータ:", cardPairs[8011]);

            // カードIDからカード番号を取得する関数
            function getCardNumber(cardId) {
                const card = cardPairs[cardId];
                if (!card) {
                    console.error(`カードID ${cardId} が見つかりません`);
                    return null;
                }
                console.log(`カードID ${cardId} のデータ:`, card);
                return card.cardNumber;
            }

            // メインデッキの処理
            DeckCardSpace.innerHTML = "";
            for (const [cardId, count] of Object.entries(deckData.mainDeck)) {
                console.log(`カードID ${cardId} を ${count} 枚処理中`);

                const cardNumber = getCardNumber(cardId);
                if (!cardNumber) continue;

                const imagePath = `card_images/${cardNumber}.png`;
                console.log(`画像パス: ${imagePath}`);

                await addCardWithImageCheck(imagePath, count, "Deck", DeckCardSpace);
            }

            // デッキをシャッフル
            let elmRandom = document.getElementById("DeckCardSpace");
            for (let i = elmRandom.children.length; i >= 0; i--) {
                elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
            }

            DeckCardSave.innerHTML = DeckCardSpace.innerHTML;
            console.log("メインデッキの構築完了");

            // 領土デッキの処理
            if (deckData.territoryDeck) {
                LandDeckCardSpace.innerHTML = "";

                // 領土デッキの枚数チェック
                const totalCards = Object.values(deckData.territoryDeck).reduce((sum, count) => sum + count, 0);
                if (totalCards < 10) {
                    console.error("領土デッキ枚数は10枚必要です");
                    alert("領土デッキ枚数は10枚にして下さい");
                    return;
                }

                for (const [cardId, count] of Object.entries(deckData.territoryDeck)) {
                    console.log(`領土カードID ${cardId} を ${count} 枚処理中`);

                    const cardNumber = getCardNumber(cardId);
                    if (!cardNumber) continue;

                    const imagePath = `card_images/${cardNumber}.png`;
                    console.log(`画像パス: ${imagePath}`);

                    await addCardWithImageCheck(imagePath, count, "Land", LandDeckCardSpace);
                }

                LandDeckCardSave.innerHTML = LandDeckCardSpace.innerHTML;
                console.log("領土デッキの構築完了");
            } else {
                console.log("領土デッキが見つかりません");
            }

            // 予備デッキの処理
            if (deckData.reserveDeck) {
                SubDeckCardSpace.innerHTML = "";

                // 予備デッキの枚数チェック
                const totalCards = Object.values(deckData.reserveDeck).reduce((sum, count) => sum + count, 0);
                if (totalCards < 15) {
                    //console.error("予備デッキ枚数は10枚必要です");
                    //alert("予備デッキ枚数は15枚にして下さい");
                    //return;
                }

                for (const [cardId, count] of Object.entries(deckData.reserveDeck)) {
                    console.log(`予備カードID ${cardId} を ${count} 枚処理中`);

                    const cardNumber = getCardNumber(cardId);
                    if (!cardNumber) continue;

                    const imagePath = `card_images/${cardNumber}.png`;
                    console.log(`画像パス: ${imagePath}`);

                    await addCardWithImageCheck(imagePath, count, "Deck", SubDeckCardSpace);
                }

                SubDeckCardSave.innerHTML = SubDeckCardSpace.innerHTML;
                console.log("予備デッキの構築完了");
            } else {
                console.log("予備デッキが見つかりません");
            }

            setTimeout(function () {
                douki()
            }, 100);

        } catch (error) {
            console.error("デッキ構築中にエラーが発生:", error);
        }
    };
    reader.readAsText(file);
});
//デッキセット(旧)
document.getElementById("DeckSetOld").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        DeckCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Deck:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてたら閉じる
                }
                let Space = document.getElementById("DeckCardSpace");
                Space.appendChild(img_element);
                DeckCardSave.innerHTML = DeckCardSpace.innerHTML;
            }
        }, 100);
        let elmRandom = document.getElementById("DeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

//ランドデッキセット
document.getElementById("LandDeckSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        LandDeckCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Land:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    }
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("LandDeckCardSpace");
                Space.appendChild(img_element);
                LandDeckCardSave.innerHTML = LandDeckCardSpace.innerHTML;
            }
        }, 100);
        setTimeout(function () {
            douki()
        }, 100);
    }
});

//予備デッキセット
document.getElementById("SubDeckSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        SubDeckCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Deck:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                                let Sleeve = document.getElementById("LandSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                                let Sleeve = document.getElementById("TokenSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    }
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, Land.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, Token.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Land = document.getElementById("LandDeckCardSpace");
                            Land.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Token = document.getElementById("TokenCardSpace");
                            Token.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("SubDeckCardSpace");
                Space.appendChild(img_element);
                SubDeckCardSave.innerHTML = SubDeckCardSpace.innerHTML;
            }
        }, 100);
        setTimeout(function () {
            douki()
        }, 100);
    }
});
//エリア関連
//Monster関連
document.getElementById("CreateMonsterBox").addEventListener("click", function (e) {
    let Space = document.getElementById("MonsterArea");
    let tmpArray = [];
    if (Space.children.length != 0) {
        for (i = 0; i < Space.children.length; i++) {
            tmpStr = Space.children[i].id;
            tmpStr = tmpStr.substr(tmpStr.indexOf(":") + 1);
            tmpArray.push(tmpStr);
        }
        for (i = 0; i < tmpArray.length + 1; i++) {
            str = String(i);
            value = tmpArray.includes(str)
            if (value == false) {
                tmpNumber = i
                break;
            }
        }
    } else {
        tmpNumber = 0;
    }

    let div = document.createElement("div");
    let text = document.createElement("input");
    let handle = document.createElement("div");
    let button = document.createElement("button");
    let free = document.createElement("button");
    let box = document.createElement("div");

    //div関連
    div.classList.add("DivZone");
    div.id = "MonsterDivZone:" + tmpNumber;
    Space.appendChild(div);

    //handle関連
    handle.classList.add("HandleZone");
    handle.innerText = "ドラッグ"
    div.appendChild(handle);

    //Free関連
    free.classList.add("FreeButtonZone");
    free.innerText = "ムーブ"
    tmpID = "MonsterFreeButtonZone:" + tmpNumber;
    free.id = tmpID
    free.addEventListener("click", function () {
        n = box.children.length
        for (i = 0; i < n; i++) {
            if (box.children[i].style.transform == 'rotate(90deg)') {
                box.children[i].style.transform = '';
            } else if (box.children[i].style.transform == '') {
                box.children[i].style.transform = 'rotate(90deg)';
            }
        }
        setTimeout(function () {
            douki()
        }, 100);
    });
    div.appendChild(free);
    //button関連
    button.classList.add("ButtonZone");
    button.innerText = "BOX消去"
    tmpID = "MonsterButtonZone:" + tmpNumber;
    button.id = tmpID
    button.addEventListener("click",
        function () {
            const Box = this.nextElementSibling;
            if (Box.hasChildNodes()) {
                alert("中のカードを全て別のゾーンにおいてください");
            } else {
                this.parentElement.remove();
            }
            setTimeout(function () {
                douki()
            }, 100);
        },
    );
    div.appendChild(button);
    //Counter関連

    //box関連
    box.classList.add("BoxZone");
    tmpID = "MonsterBoxZone:" + tmpNumber;
    box.id = tmpID;
    div.appendChild(box);
    tmpID = document.getElementById(String(tmpID))
    new Sortable.create(tmpID, {
        group: {
            name: "Card",
            put: ["Card"]
        },
        animation: 150
    });
    setTimeout(function () {
        douki()
    }, 100);
});

//Land関連
document.getElementById("CreateLandBox").addEventListener("click", function (e) {
    let Space = document.getElementById("LandArea");
    let tmpArray = [];
    if (Space.children.length != 0) {
        for (i = 0; i < Space.children.length; i++) {
            tmpStr = Space.children[i].id;
            tmpStr = tmpStr.substr(tmpStr.indexOf(":") + 1);
            tmpArray.push(tmpStr);
        }
        for (i = 0; i < tmpArray.length + 1; i++) {
            str = String(i);
            value = tmpArray.includes(str)
            if (value == false) {
                tmpNumber = i
                break;
            }
        }
    } else {
        tmpNumber = 0;
    }

    let div = document.createElement("div");
    let handle = document.createElement("div");
    let button = document.createElement("button");
    let free = document.createElement("button");
    let box = document.createElement("div");

    //div関連

    div.classList.add("DivZone");
    div.id = "LandrDivZone:" + tmpNumber;
    Space.appendChild(div);

    //handle関連
    handle.classList.add("HandleZone");
    handle.innerText = "ドラッグ"
    div.appendChild(handle);

    //Free関連
    free.classList.add("FreeButtonZone");
    free.innerText = "ムーブ"
    tmpID = "LandFreeButtonZone:" + tmpNumber;
    free.id = tmpID
    free.addEventListener("click", function () {
        n = box.children.length
        for (i = 0; i < n; i++) {
            if (box.children[i].style.transform == 'rotate(90deg)') {
                box.children[i].style.transform = '';
            } else if (box.children[i].style.transform == '') {
                box.children[i].style.transform = 'rotate(90deg)';
            }
        }
        setTimeout(function () {
            douki()
        }, 100);
    });
    div.appendChild(free);
    //button関連
    button.classList.add("ButtonZone");
    button.innerText = "BOX消去"
    tmpID = "LandButtonZone:" + tmpNumber;
    button.id = tmpID
    button.addEventListener("click",
        function () {
            const Box = this.nextElementSibling;
            if (Box.hasChildNodes()) {
                alert("中のカードを全て別のゾーンにおいてください");
            } else {
                this.parentElement.remove();
            }
            setTimeout(function () {
                douki()
            }, 100);
        },
    );
    div.appendChild(button);
    //box関連
    box.classList.add("BoxZone");
    tmpID = "LandBoxZone:" + tmpNumber;
    box.id = tmpID;
    div.appendChild(box);
    tmpID = document.getElementById(String(tmpID))
    new Sortable.create(tmpID, {
        group: {
            name: "Card",
            put: ["Card"]
        },
        animation: 150
    });
    setTimeout(function () {
        douki()
    }, 100);
});
//トークン関連

//見る
document.getElementById("TokenViewer").addEventListener("click", function (e) {
    let Token = document.getElementById("TokenZone");
    if (Token.style.display != "none") {
        Token.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "非閲覧中"
    } else {
        Token.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});
//デッキ関連
//1ドロー
document.getElementById("Deck1Draw").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Hand = document.getElementById("HandSpace");
    Hand.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ドロップ
document.getElementById("Deck1Drop").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Drop = document.getElementById("DropSpace");
    Drop.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1表フリー
document.getElementById("Deck1FrontFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//夜を明ける
document.getElementById("ALLFront").addEventListener("click", function (e) {
    var result = window.confirm("確認:夜状態のカードを表にします");
    if (result) {
        //戦場
        let Space = document.getElementById("MonsterArea");
        if (Space.children.length != 0) {
            n = Space.children.length
            for (i = 0; i < n; i++) {
                let tmpID = "MonsterBoxZone:" + i;
                e = document.getElementById(tmpID).children.length
                for (j = 0; j < e; j++) {
                    alt = document.getElementById(tmpID).children[j].alt;
                    document.getElementById(tmpID).children[j].src = alt.substr(alt.indexOf(':') + 1)
                }
            }
        }
        //領土
        Space = document.getElementById("LandArea");
        if (Space.children.length != 0) {
            n = Space.children.length
            for (i = 0; i < n; i++) {
                let tmpID = "LandBoxZone:" + i;
                e = document.getElementById(tmpID).children.length
                for (j = 0; j < e; j++) {
                    alt = document.getElementById(tmpID).children[j].alt;
                    document.getElementById(tmpID).children[j].src = alt.substr(alt.indexOf(':') + 1)
                }
            }
            setTimeout(function () {
                douki()
            }, 100);
        }
    }

});

//1ボトムフリー
document.getElementById("Deck1LastFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    Free.insertBefore(Deck.lastElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキシャッフル
document.getElementById("DeckShuffle").addEventListener("click", function (e) {
    let elmRandom = document.getElementById("DeckCardSpace");
    for (let i = elmRandom.children.length; i >= 0; i--) {
        elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
    }
});

//デッキを見る
document.getElementById("DeckViewer").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckZone");
    if (Deck.style.display != "none") {
        Deck.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "デッキ非閲覧中"
        let elmRandom = document.getElementById("DeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
    } else {
        Deck.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "デッキ閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//ランドデッキ関連
//1ドロー
document.getElementById("LandDeck1Draw").addEventListener("click", function (e) {
    var Deck = document.getElementById("LandDeckCardSpace");
    var Hand = document.getElementById("HandSpace");
    Hand.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ドロップ
document.getElementById("LandDeck1Drop").addEventListener("click", function (e) {
    let Deck = document.getElementById("LandDeckCardSpace");
    let Drop = document.getElementById("DropSpace");
    Drop.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1表フリー
document.getElementById("LandDeck1FrontFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("LandDeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1表領地
document.getElementById("LandDeck1FrontLandZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("LandDeckCardSpace");
    let Free = document.getElementById("LandBoxZone:0");
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキシャッフル
document.getElementById("LandDeckShuffle").addEventListener("click", function (e) {
    let elmRandom = document.getElementById("LandDeckCardSpace");
    for (let i = elmRandom.children.length; i >= 0; i--) {
        elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
    }
});

//デッキを見る
document.getElementById("LandDeckViewer").addEventListener("click", function (e) {
    let Deck = document.getElementById("LandDeckZone");
    if (Deck.style.display != "none") {
        Deck.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "デッキを非閲覧中"
        let elmRandom = document.getElementById("LandDeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
    } else {
        Deck.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "デッキを閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});
//ライフカウンター
document.getElementById("LifeUp").addEventListener("click", function (e) {
    document.getElementById("LifeCounter").value = Number(document.getElementById("LifeCounter").value) + 1;
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("LifeDown").addEventListener("click", function (e) {
    document.getElementById("LifeCounter").value = document.getElementById("LifeCounter").value - 1;
    setTimeout(function () {
        douki()
    }, 100);
});
document.getElementById("CountUp").addEventListener("click", function (e) {
    document.getElementById("otherCounter").value = Number(document.getElementById("otherCounter").value) + 1;
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("CountDown").addEventListener("click", function (e) {
    document.getElementById("otherCounter").value = document.getElementById("otherCounter").value - 1;
    setTimeout(function () {
        douki()
    }, 100);
});

//その他管理
//ソータブル関連
Sortable.create(ExclusionSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(DropSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(PileSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(TokenCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(DeckCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(LandDeckCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});


Sortable.create(SubDeckCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});


Sortable.create(HandSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(FreeZoneSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});
//エリア関連
Sortable.create(MonsterArea, {
    handle: ".HandleZone",
    animation: 150
});

Sortable.create(LandArea, {
    handle: ".HandleZone",
    animation: 150
});
//
document.body.addEventListener('sort', function (e) {
    douki()
});
//メニュー関連
document.body.addEventListener('click', function (e) {
    document.getElementById("CardMenu").style.display = "none";
});

document.body.addEventListener('click', function (e) {
    document.getElementById("DetaMenu").style.display = "none";
});
//手札公開
document.getElementById("HandViewer").addEventListener("click", function (e) {
    if (this.innerText == "公開中") {
        this.classList.remove("on")
        this.classList.add("off")
        this.innerText = "非公開中"
    } else {
        this.classList.remove("off")
        this.classList.add("on")
        this.innerText = "公開中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("FreeZoneViewer").addEventListener("click", function (e) {
    if (this.innerText == "公開中") {
        this.classList.remove("on")
        this.classList.add("off")
        this.innerText = "非公開中"
    } else {
        this.classList.remove("off")
        this.classList.add("on")
        this.innerText = "公開中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//カード移動関連(ToFree)
document.getElementById("ExclusionToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("ExclusionSpace").children.length
    var result = window.confirm("確認:除外を全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("ExclusionSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("HandToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("HandSpace").children.length
    var result = window.confirm("確認:手札を全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("HandSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("PileToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("PileSpace").children.length
    var result = window.confirm("確認:パイルを全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("PileSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("DropToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("DropSpace").children.length
    var result = window.confirm("確認:ドロップを全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("DropSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});


//カード移動関連(FromFree)
document.getElementById("FreeZoneToHand").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全て手札に送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("HandSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneToDrop").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全て墓地に送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("DropSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneToDeck").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全てデッキの下に送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            alt = document.getElementById("FreeZoneSpace").firstElementChild.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                document.getElementById("DeckCardSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
            } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                document.getElementById("LandDeckCardSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
            } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                document.getElementById("TokenCardSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
            }

        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneFront").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    for (i = 0; i < n; i++) {
        alt = document.getElementById("FreeZoneSpace").children[i].alt;
        document.getElementById("FreeZoneSpace").children[i].src = alt.substr(alt.indexOf(':') + 1)
    }
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("FreeZoneBack").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    for (i = 0; i < n; i++) {
        alt = document.getElementById("FreeZoneSpace").children[i].alt;
        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
            Back = document.getElementById("SleeveSpace").firstElementChild;
            document.getElementById("FreeZoneSpace").children[i].src = Back.src;
        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
            Back = document.getElementById("LandSleeveSpace").firstElementChild;
            document.getElementById("FreeZoneSpace").children[i].src = Back.src;
        }
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//ダイス
document.getElementById("Diceroll").addEventListener("click", function (e) {
    RandomNo = document.getElementById("RandomNo");
    if (RandomNo.style.display != "none") {
        RandomNo.style.display = "none"
    } else {
        RandomNo.style.display = "block"
        RandomNo.innerText = Math.floor(Math.random() * 6) + 1;
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//予備デッキを見る
document.getElementById("SubDeckViewer").addEventListener("click", function (e) {
    let Deck = document.getElementById("SubDeckZone");
    if (Deck.style.display != "none") {
        Deck.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "デッキを非閲覧中"
        let elmRandom = document.getElementById("SubDeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
    } else {
        Deck.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "デッキを閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//カード枚数管理

//デッキ
DeckElm = document.getElementById("DeckCardSpace");
DeckCount = document.getElementById("DeckCount");
const ObsDeck = new MutationObserver(records => {
    DeckCount.innerText = "(" + DeckElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);

})
ObsDeck.observe(DeckElm, {
    childList: true
})

//ランドデッキ
LandDeckElm = document.getElementById("LandDeckCardSpace");
LandDeckCount = document.getElementById("LandDeckCount");
const ObsLandDeck = new MutationObserver(records => {
    LandDeckCount.innerText = "(" + LandDeckElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsLandDeck.observe(LandDeckElm, {
    childList: true
})

//墓地
DropElm = document.getElementById("DropSpace");
DropCount = document.getElementById("DropCount");
const ObsDrop = new MutationObserver(records => {
    DropCount.innerText = "(" + DropElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsDrop.observe(DropElm, {
    childList: true
})

//手札
HandElm = document.getElementById("HandSpace");
HandCount = document.getElementById("HandCount");
const ObsHand = new MutationObserver(records => {
    HandCount.innerText = "(" + HandElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsHand.observe(HandElm, {
    childList: true
})
//予備デッキ
SubDeckElm = document.getElementById("SubDeckCardSpace");
SubDeckCount = document.getElementById("SubDeckCount");
const ObsSubDeck = new MutationObserver(records => {
    SubDeckCount.innerText = "(" + SubDeckElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsSubDeck.observe(SubDeckElm, {
    childList: true
})

// 画像の存在確認と追加を行う共通関数
async function addCardWithImageCheck(imagePath, count, cardType, targetSpace) {
    try {
        const response = await fetch(imagePath);
        if (!response.ok) {
            alert(`画像ファイルが見つかりません: ${imagePath}`);
            console.error(`画像が見つかりません: ${imagePath}`);
            return false;
        }

        // 指定枚数分カードを追加
        for (let i = 0; i < count; i++) {
            let img_element = document.createElement("img");
            img_element.src = imagePath;
            img_element.alt = `${cardType}:${imagePath}`;
            img_element.width = "126";
            img_element.height = "176";

            // 既存のcontextmenuイベントリスナーを追加
            img_element.addEventListener("contextmenu", function (e) {
                document.getElementById("CardMenu").style.position = "absolute";
                document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                document.getElementById("CardMenu").style.display = "block";
                document.getElementById("CardReverse").onclick = function hoge() {
                    alt = img_element.alt;
                    src = img_element.src;
                    if (src == alt.substr(alt.indexOf(':') + 1)) {
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Sleeve = document.getElementById("SleeveSpace")
                            let Back = Sleeve.firstElementChild;
                            img_element.src = Back.src;
                        } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                            let Sleeve = document.getElementById("LandSleeveSpace")
                            let Back = Sleeve.firstElementChild;
                            img_element.src = Back.src;
                        } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                            let Sleeve = document.getElementById("TokenSleeveSpace")
                            let Back = Sleeve.firstElementChild;
                            img_element.src = Back.src;
                        }
                    } else {
                        img_element.src = alt.substr(alt.indexOf(':') + 1)
                    }
                    setTimeout(function () {
                        douki()
                    }, 100);
                };
                document.getElementById("CardRest/Stand").onclick = function hoge() {
                    if (img_element.style.transform == 'rotate(90deg)') {
                        img_element.style.transform = '';
                    } else if (img_element.style.transform == '') {
                        img_element.style.transform = 'rotate(90deg)';
                    }
                    setTimeout(function () {
                        douki()
                    }, 100);
                };
                document.getElementById("CardDeckTop").onclick = function hoge() {
                    alt = img_element.alt;
                    if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                        let Deck = document.getElementById("DeckCardSpace");
                        Deck.insertBefore(img_element, Deck.firstChild);
                    } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                        let Land = document.getElementById("LandDeckCardSpace");
                        Land.insertBefore(img_element, Land.firstChild);
                    } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                        let Token = document.getElementById("TokenCardSpace");
                        Token.insertBefore(img_element, Token.firstChild);
                    }
                    setTimeout(function () {
                        douki()
                    }, 100);
                };
                document.getElementById("CardDeckButtom").onclick = function hoge() {
                    alt = img_element.alt;
                    if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                        let Deck = document.getElementById("DeckCardSpace");
                        Deck.insertBefore(img_element, null);
                    } else if (alt.substr(0, alt.indexOf(':')) == "Land") {
                        let Land = document.getElementById("LandDeckCardSpace");
                        Land.insertBefore(img_element, null);
                    } else if (alt.substr(0, alt.indexOf(':')) == "Token") {
                        let Token = document.getElementById("TokenCardSpace");
                        Token.insertBefore(img_element, null);
                    }
                    setTimeout(function () {
                        douki()
                    }, 100);
                };
            });

            img_element.onmousedown = function () {
                document.getElementById("CardMenu").style.display = "none";
            }

            targetSpace.appendChild(img_element);
            DeckCardSave.innerHTML = DeckCardSpace.innerHTML;
        }
        return true;
    } catch (error) {
        alert(`画像ファイルの読み込みに失敗しました: ${imagePath}`);
        console.error(`画像の読み込みエラー: ${imagePath}`, error);
        return false;
    }
}