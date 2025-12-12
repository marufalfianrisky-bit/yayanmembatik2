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

        "https://img.sanishtech.com/u/0b489e659546a9a91297ee35398ab1ab.jpg",

        "Di sini kamu akan mempelajari sejarah batik, jenis-jenis batik, proses pembuatannya, serta filosofi setiap motifnya."

    );

}





// PER DETAIL

function showDetail(type) {



    if(type === "tulis"){

        openPopup(

            "Batik Tulis",

            "https://img.sanishtech.com/u/0c26fc119c2973f6ee1344eeef3e7d83.jpg",

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

            "https://image2url.com/images/1765512574326-28c99019-354c-41c1-84bf-6616491cb2d9.jpg",
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

            "https://img.sanishtech.com/u/2888fb2294ff450949b141203bd98746.jpg",

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

            "https://image2url.com/images/1765512623780-080779fc-2fbe-49b9-beb1-ac21528caae0.jpg",

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

            "https://image2url.com/images/1765512761898-32dd989c-5f07-410d-be07-fd29db3f774c.webp",

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

            "https://image2url.com/images/1765512730476-53c880c2-92ae-4a4f-9319-79f83c79aeba.webp",

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


