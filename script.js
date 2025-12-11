// Navigasi Halaman

function goPage(page) {

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.getElementById(page).classList.add('active');

}



window.onload = () => goPage('home');



// Popup General

function openPopup(title, img, desc) {

    document.getElementById("popup-title").innerHTML = title;

    document.getElementById("popup-img").src = img;

    document.getElementById("popup-desc").innerHTML = desc;

    document.getElementById("popup").style.display = "flex";

}



function closePopup() {

    document.getElementById("popup").style.display = "none";

}





// INTRO POPUP

function openIntro() {

    openPopup(

        "Selamat datang di kelas Batik Indonesia!",

        "https://i.postimg.cc/4ybrJg24/batik-cover.png",

        "Di sini kamu akan mempelajari sejarah batik, jenis-jenis batik, proses pembuatannya, serta filosofi setiap motifnya."

    );

}





// PER DETAIL

function showDetail(type) {



    if(type === "tulis"){

        openPopup(

            "Batik Tulis",

            "https://img.sanishtech.com/u/d1003ea6c692bf46c874c1afec341b7e.jpg",

            `

            Batik tulis dibuat secara manual menggunakan canting dan lilin panas.

            Pembuatan batik tulis dapat memakan waktu 1–6 bulan tergantung tingkat kerumitan motifnya.

            Kelebihan batik tulis:

            ✔ Eksklusif  

            ✔ Unik tidak ada yang sama  

            ✔ Warna dan motif kuat  

            `

        )

    }



    if(type === "cap"){

        openPopup(

            "Batik Cap",

            "https://img.sanishtech.com/u/a766a2daa1f97a2f662bb69210676841.jpg",
            `

            Batik cap dibuat menggunakan alat tembaga berbentuk stempel.

            Kelebihannya adalah cepat diproduksi dan motifnya seragam.

            Biasanya digunakan untuk produksi massal.

            `

        )

    }



    if(type === "printing"){

        openPopup(

            "Batik Printing",

            "https://img.sanishtech.com/u/00591bc27de0a5fc5a56fea2e83e28cf.jpg",

            `

            Batik printing dibuat menggunakan mesin dan tinta tekstil.

            Biasanya harganya lebih murah dibanding batik tulis dan cap.

            Batik ini populer untuk pakaian sekolah dan seragam kantor.

            `

        )

    }





    // Filosofi

    if(type === "mega"){

        openPopup(

            "Motif Mega Mendung",

            "https://img.sanishtech.com/u/54ecdfe8f2a4c164b55b02e49eb38e5d.jpg",

            `

            Motif dari Cirebon, melambangkan:

            ✔ Kesabaran  

            ✔ Ketenangan  

            ✔ Hati yang lapang seperti awan  

            Biasanya digunakan dalam acara penyambutan tamu kerajaan.

            `

        )

    }



    if(type === "parang"){

        openPopup(

            "Motif Parang",

            "https://img.sanishtech.com/u/24572e771febd8272c3f9ae3659215fd.jpg",

            `

            Motif berasal dari Keraton Yogyakarta.

            Filosofi parang:

            ✔ Pesan agar manusia terus berjuang  

            ✔ Tidak mudah menyerah  

            ✔ Hidup yang terus bergerak maju  

            `

        )

    }



    if(type === "kawung"){

        openPopup(

            "Motif Kawung",

            "https://img.sanishtech.com/u/6499d2e80fec6d0840eb036de2b38adc.jpg",

            `

            Motif berasal dari Jawa, menyerupai buah aren.

            Maknanya:

            ✔ Pengendalian diri  

            ✔ Kesucian  

            ✔ Kebijaksanaan dan kejujuran  

            `

        )

    }



}