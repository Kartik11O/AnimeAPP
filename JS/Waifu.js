function WaifuF(value) {
    if (value == "SFW" || value == "Waifu" || value == "hug" || value == "smile") {
        console.log("SFW Cliked")
        switch (value) {
            case 'Waifu':
                let waifu = fetch("https://api.waifu.pics/many/sfw/waifu", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // url:
                    })
                })
                waifu.then((wife) => wife.json())
                    .then((WifeData) => {
                        console.log(WifeData)
                        let list = WifeData.files
                        list.forEach(elemO => {
                            $("#IMG-Container").prepend('<img class="imageClass" src="' + elemO + '"/>')
                        });
                    })
                break;

            case 'hug':
                let hugg = fetch("https://api.waifu.pics/many/sfw/hug", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    })
                })
                hugg.then((hug) => hug.json())
                    .then((hugData) => {
                        console.log(hugData)
                        let hugs = hugData.files
                        hugs.forEach(elemT => {
                            $("#IMG-Container").append('<img class="imageClass-hug" src="' + elemT + '"/>')
                        });
                    })
                break;

            case "smile":
                let smileF = fetch("https://api.waifu.pics/many/sfw/smile", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    })
                })
                smileF.then((smileRes) => smileRes.json())
                    .then((smileF) => {
                        console.log(smileF)
                        let smileData = smileF.files
                        smileData.forEach(elemFour => {
                            $("#IMG-Container").append('<img class="imageClass-hug" src="' + elemFour + '"/>')
                        });
                    })
            default:
                break;
        }


        // list.forEach(function(elme){
        //     $(".moives").append('<li><img class="imageClass" src="'+elme+'"/></li>')
        //   });

    }


    else if (value == "NSFW" || value == "waifuNude") {
        console.log("NSFW Cliked")
        switch (value) {
            case "waifuNude":
                let nsfw = fetch("https://api.waifu.pics/many/nsfw/waifu", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({

                    })
                })
                nsfw.then((nude) => nude.json())
                    .then((nudeData) => {
                        console.log(nudeData)
                        let NudeWife = nudeData.files
                        NudeWife.forEach(elemThree => {
                            $("#IMG-Container").append('<img class="imageClass-hug" src="' + elemThree + '"/>')
                        });
                    })
                break;

            default:
                break;
        }
    }


    else {
        console.log("Check Code")
    }
}


