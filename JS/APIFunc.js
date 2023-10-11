function F_Waifu(Value) {

    if (Value == 'Waifu' || Value == 'Hug' || Value == 'Smile' || Value == 'Nude' || Value == 'Blowjob' || Value == 'Neko') {
        switch (Value) {
            case 'Waifu':
                let Wife = fetch('https://api.waifu.pics/many/sfw/waifu', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // url:
                    })
                })
                Wife.then((req) => req.json())
                    .then((Wife_Data) => {
                        let Wife_Pix = Wife_Data.files
                        Wife_Pix.forEach(el1 => {
                            $("#IMG-Container").prepend('<img class="imageClass"  src="' + el1 + '"/>')
                        });
                    })
                break;

            case 'Hug':
                let Hugg = fetch("https://api.waifu.pics/many/sfw/hug", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    })
                })
                Hugg.then((req_2) => req_2.json())
                    .then((Hug_Data) => {
                        let Hug_Pix = Hug_Data.files
                        Hug_Pix.forEach(el2 => {
                            $("#IMG-Container").prepend('<img class="imageHug" src="' + el2 + '"/>')
                        });
                    })
                break

            case 'Smile':
                let Smilee = fetch("https://api.waifu.pics/many/sfw/smile", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                    })
                })
                Smilee.then((req_3) => req_3.json())
                    .then((Smile_Data) => {
                        let Smile_Pix = Smile_Data.files
                        Smile_Pix.forEach(el3 => {
                            $("#IMG-Container").prepend('<img class="imageSmile" src="' + el3 + '"/>')
                        });
                    })
                break

            case 'Nude':
                let Nude = fetch("https://api.waifu.pics/many/nsfw/waifu", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                    })
                })

                Nude.then((req_4) => req_4.json())
                    .then((Nude_Data) => {
                        let Nude_Pic = Nude_Data.files
                        Nude_Pic.forEach(el4 => {
                            $("#IMG-Container").prepend('<img class="imageClass" src="' + el4 + '"/>')
                        });
                    })
                break;

            case "Blowjob":
                let Blowjob = fetch("https://api.waifu.pics/many/nsfw/blowjob", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                    })
                })
                Blowjob.then((req_5) => req_5.json())
                    .then((Blowjob_Data) => {
                        let Job_Pix = Blowjob_Data.files
                        Job_Pix.forEach(el5 => {
                            $("#IMG-Container").prepend('<img class="imageSmile" src="' + el5 + '"/>')

                        });
                    })
                    break;

                case 'Neko':
                    let Neko = fetch("https://api.waifu.pics/many/nsfw/neko",{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({

                        })
                    })
                    Neko.then((req_6) => req_6.json())
                        .then((Neko_Data) =>{
                            let Neko_Pix = Neko_Data.files
                            Neko_Pix.forEach(el6 =>{
                                $("#IMG-Container").prepend('<img class="imageClass" src='+ el6 + '>')
                            })
                            
                        })
                    

            default:
                break;
        }
    }


}
