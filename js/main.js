Vue.createApp({
    data() {
      return {
        navbar: {
            judul: "Menu hari ini",
            h:"Home",
            t:"Tabel",
            a:"Artikel",
            te:"Tentang"
        },
        header: {
            nama: "Cicilia Putri Ramdani",
            ket: "Mahasiswa UAD jurusan Sistem Informasi",
        },
        tabel: {
            judul: "Tabel",
            t_judul:["No", "Keterampillan"],
            t_jud:  "Skill",
            tabel: [
                {
                    "ket": "Microsooft Word",
                    "skill": "Expert"
                },
                {
                    "ket": "Python",
                    "skill": "Intermediatte"
                },
                {
                    "ket": "Javascript",
                    "skill": "Intermediatte"
                },
                {
                    "ket": "HTML",
                    "skill":"Expert"
                },
                {
                    "ket": "CSS",
                    "skill":"Intermediatte"
                },
                {
                    "ket": "Microsoft Excell",
                    "skill": "Intermediatte"
                },
            ]
        },
        artikell: {
            judul:"Artikel"
        },
        tentang: {
            judul: "Tentang",
            deskripsi: "Aku adalah Mahasiswa Di Universitas Ahmad Dahlan yang sekarang sedang berkuliah di jurusan Sistem Informasi. Aku kelahiran asli Banjarnegara, 07 desember 2001, memiliki hobi Rebahan, dan tentunya suka warna Pink, sesuai dengan tema dari website ini"
        },

        artikel: [],
        article: null,

      };
    },
    methods: {
      getArticle()
      {
        axios
          .get(
            src="../artikel/artikel.json"
            )
          .then((res) => {
            console.log(res.data); //melihat respon data pada console browser
            this.artikel = res.data; //memperbarui variabel article pada bagian data()
          })
          .catch((error) => {
            console.log(error); //melihat error jika pengambilan data adalah gagal
          });
      },
      getDataMarkdown()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get('article');        
        var converter = new showdown.Converter();
        console.log(article);
        axios
          .get(
            src="../artikel/"+article
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() { 
      this.getArticle(),
      this.getDataMarkdown()
    },
  }).mount("#app");

  