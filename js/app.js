const silaData = {
  1: {
    title: "Ketuhanan Yang Maha Esa",
    subtitle: "Moralitas & Integritas",
    icon: "Pancasila_Sila_1_Star_512x512.svg",
    description: "Menyadari bahwa ruang digital tidak bebas nilai. Setiap ketikan dan unggahan tetap harus dipertanggungjawabkan kepada Tuhan dan sesama.",
    examples: [
      "Berpikir sebelum mengunggah sesuatu.",
      "Menjaga kejujuran dan integritas saat membuat atau membagikan konten.",
      "Mempertimbangkan dampak unggahan terhadap diri sendiri dan orang lain."
    ]
  },
  2: {
    title: "Kemanusiaan yang Adil dan Beradab",
    subtitle: "Menjaga Etika Digital",
    icon: "Pancasila_Sila_2_Chain_512x512.svg",
    description: "Berkomunikasi dengan kalimat yang santun, membangun, serta menghindari cyberbullying.",
    examples: [
      "Menggunakan bahasa yang santun saat berbeda pendapat.",
      "Mengkritik gagasan tanpa merendahkan orangnya.",
      "Tidak ikut menyebarkan penghinaan atau perundungan digital."
    ]
  },
  3: {
    title: "Persatuan Indonesia",
    subtitle: "Saring Sebelum Sharing",
    icon: "Pancasila_Sila_3_Banyan_Tree_512x512.svg",
    description: "Memeriksa kebenaran informasi sebelum membagikannya agar tidak ikut menyebarkan hoaks yang dapat memecah belah bangsa.",
    examples: [
      "Memeriksa sumber dan tanggal informasi.",
      "Membandingkan informasi dengan sumber tepercaya.",
      "Tidak terburu-buru membagikan konten yang belum terverifikasi."
    ]
  },
  4: {
    title: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
    subtitle: "Menghargai Perbedaan Pendapat",
    icon: "Pancasila_Sila_4_Buffalos_Head_512x512.svg",
    description: "Menerima perbedaan pandangan politik atau opini di kolom komentar dengan kepala dingin tanpa melakukan pembunuhan karakter.",
    examples: [
      "Mendengarkan sudut pandang yang berbeda.",
      "Menanggapi argumen dengan alasan, bukan serangan pribadi.",
      "Menghindari character assassination dalam diskusi."
    ]
  },
  5: {
    title: "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
    subtitle: "Akses Informasi yang Adil",
    icon: "Pancasila_Sila_5_Rice_and_Cotton_512x512.svg",
    description: "Tidak menggunakan ruang digital untuk memonopoli kebenaran atau menindas kelompok rentan.",
    examples: [
      "Menghargai hak orang lain untuk memperoleh informasi.",
      "Tidak memanfaatkan ketimpangan informasi untuk menindas.",
      "Mendorong ruang digital yang inklusif dan adil."
    ]
  }
};

const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalExamples = document.getElementById("modalExamples");
const modalVisual = document.getElementById("modalVisual");
const modalKicker = document.getElementById("modalKicker");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const garudaModalBackdrop = document.getElementById("garudaModalBackdrop");
const closeGarudaModalBtn = document.getElementById("closeGarudaModal");

let currentSila = 1;

function openSila(num) {
  currentSila = Number(num);
  const data = silaData[currentSila];
  modalKicker.textContent = `SILA 0${currentSila}`;
  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle;
  modalDescription.textContent = data.description;
  if (data.icon.endsWith('.svg') || data.icon.endsWith('.png')) {
    modalVisual.innerHTML = `<img src="${data.icon}" alt="Icon Sila ${currentSila}" class="modal-icon-img">`;
  } else {
    modalVisual.textContent = data.icon;
  }
  modalExamples.innerHTML = data.examples.map(x => `<li>${x}</li>`).join("");
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("closeModal").focus(), 100);
}

function closeModal() {
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
}

function closeMobileNav() {
  hamburgerBtn?.classList.remove("active");
  navMenu?.classList.remove("open");
}

function goTo(id) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
  const active = document.querySelector(`.nav-link[data-action="${id}"]`);
  active?.classList.add("active");
  
  closeMobileNav();
}

document.querySelectorAll("[data-sila]").forEach(el => {
  el.addEventListener("click", () => openSila(el.dataset.sila));
  el.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openSila(el.dataset.sila);
    }
  });
});

document.querySelectorAll("[data-action]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    goTo(el.dataset.action);
  });
});

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
  });
}

document.getElementById("closeModal").addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("startExplore").addEventListener("click", () => {
  document.getElementById("explore").scrollIntoView({ behavior: "smooth", block: "center" });
});

function openGarudaModal() {
  garudaModalBackdrop.classList.add("open");
  garudaModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  setTimeout(() => closeGarudaModalBtn.focus(), 100);
}

function closeGarudaModal() {
  garudaModalBackdrop.classList.remove("open");
  garudaModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
}

document.getElementById("garudaArea").addEventListener("click", openGarudaModal);

// Event Listener Tutup Modal Garuda
closeGarudaModalBtn.addEventListener("click", closeGarudaModal);

garudaModalBackdrop.addEventListener("click", e => { 
  if (e.target === garudaModalBackdrop) closeGarudaModal(); 
});

document.addEventListener("keydown", e => { 
  if (e.key === "Escape" && garudaModalBackdrop.classList.contains("open")) {
    closeGarudaModal(); 
  }
});

const chatGameModalBackdrop = document.getElementById("chatGameModalBackdrop");
const closeChatGameModalBtn = document.getElementById("closeChatGameModal");

// Membuka modal mini game saat tombol diklik
document.getElementById("gameBtn").addEventListener("click", () => {
  closeModal();
  
  chatGameModalBackdrop.classList.add("open");
  chatGameModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  
  initGame();
});

// Fungsi untuk menutup modal mini game
function closeChatGameModal() {
  chatGameModalBackdrop.classList.remove("open");
  chatGameModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
}

closeChatGameModalBtn?.addEventListener("click", closeChatGameModal);

chatGameModalBackdrop?.addEventListener("click", e => { 
  if (e.target === chatGameModalBackdrop) closeChatGameModal(); 
});

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ==================================================
  KAMUS ETIKA DIGITAL
   ================================================== */

const dictionaryCards = document.querySelectorAll(".dictionary-card");
const dictionarySearch = document.getElementById("dictionarySearch");
const dictionaryEmpty = document.getElementById("dictionaryEmpty");


/* ACCORDION */

dictionaryCards.forEach(card => {

  const trigger = card.querySelector(".dictionary-trigger");

  trigger.addEventListener("click", () => {

    const isOpen = card.classList.contains("open");

    // Tutup semua kartu lain
    dictionaryCards.forEach(otherCard => {
      otherCard.classList.remove("open");

      const otherTrigger =
        otherCard.querySelector(".dictionary-trigger");

      otherTrigger.setAttribute("aria-expanded", "false");
    });

    // Jika sebelumnya tertutup, buka kartu ini
    if (!isOpen) {
      card.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }

  });

});


/* SEARCH */

dictionarySearch.addEventListener("input", () => {

  const keyword =
    dictionarySearch.value
      .toLowerCase()
      .trim();

  let visibleCards = 0;

  dictionaryCards.forEach(card => {

    const text =
      card.textContent.toLowerCase();

    const match =
      text.includes(keyword);

    card.style.display =
      match ? "" : "none";

    if (match) {
      visibleCards++;
    }

  });


  if (visibleCards === 0 && keyword !== "") {
    dictionaryEmpty.classList.add("show");
  } else {
    dictionaryEmpty.classList.remove("show");
  }

});

// ================= DATA SKENARIO SILA 1 (Chat Simulator) =================
const sila1Scenarios = [
  {
    title: "Skenario 1 dari 3 — Tugas Akhir",
    sender: "Teman Kelompok",
    message: "Guys, data kuesioner kita kurang 40 responden lagi nih. Kita palsuin pake AI aja kali ya biar langsung di-ACC dosen besok?",
    options: [
      {
        label: "🚩 Tegur Langsung",
        text: "Jangan dong, itu pemalsuan data. Mending kita izin minta perpanjangan waktu ke dosen.",
        score: 100,
        feedback: "Integritas akademik lahir dari kejujuran moral, bukan sekadar takut ketahuan dosen."
      },
      {
        label: "💡 Tawarkan Solusi",
        text: "Mending kita sebar ulang ke grup angkatan sebelah malam ini, nanti aku bantu blast link-nya.",
        score: 80,
        feedback: "Solusi kreatif tanpa melanggar etika dan kejujuran."
      },
      {
        label: "🙈 Pasrah / Pasif",
        text: "Terserah kalian deh, yang penting nama aku tetep ada dan nilai aman.",
        score: 40,
        feedback: "Membiarkan kebohongan terjadi mengurangi nilai integritas pribadi kamu."
      }
    ]
  },
  {
    title: "Skenario 2 dari 3 — Grup Angkatan",
    sender: "Teman Angkatan",
    message: "HAHAHA liat nih meme stiker ritual agama tetangga, kocak banget kan! 😂 (mengirim media)",
    options: [
      {
        label: "🛑 Pasang Batasan",
        text: "Gak lucu itu, simbol dan ritual agama jangan dijadiin bahan olokan ya.",
        score: 100,
        feedback: "Menghargai kesucian nilai keagamaan adalah wujud nyata pengamalan Sila 1."
      },
      {
        label: "📩 Peringatkan via PM",
        text: "[Kirim Chat Pribadi] mending unsend stiker itu deh, kurang etis dibahas di grup umum.",
        score: 90,
        feedback: "Menjaga etika dan menghormati perasaan orang lain dengan cara yang bijak."
      },
      {
        label: "😂 Ikut Nimbrung",
        text: "Wkwkwk parah banget itu, dapet dari mana tuh stiker?",
        score: 20,
        feedback: "Ikut mengolok simbol keagamaan merusak toleransi beragama di ruang digital."
      }
    ]
  },
  {
    title: "Skenario 3 dari 3 — Rapat Panitia",
    sender: "Ketua Panitia",
    message: "Rapat evaluasi fix jam 12.00 WIB ya! Yang mau ibadah tahan dulu 1 jam, agenda kita nanggung banget.",
    options: [
      {
        label: "🤝 Usul Break",
        text: "Bisa usul break 30 menit dulu? Biar yang ibadah tenang dan pas rapat kita bisa fokus lagi.",
        score: 100,
        feedback: "Menjamin hak ibadah sesama anggota adalah bentuk saling menghargai keyakinan."
      },
      {
        label: "👍 Nurut Aja",
        text: "Siap ketum, meluncur sekarang!",
        score: 50,
        feedback: "Mengabaikan kewajiban ibadah demi kepentingan mendesak organisasi kurang seimbang."
      },
      {
        label: "⚡ Protes Emosi",
        text: "Ketua gak menghargai hak ibadah anggota banget sih!",
        score: 70,
        feedback: "Niatnya mempertahankan hak ibadah, tapi cara penyampaian kurang santun."
      }
    ]
  }
];

// ================= DATA SKENARIO SILA 2 (P3K Kemanusiaan - Kombinasi Alat) =================
const sila2Scenarios = [
  {
    id: 1,
    title: "Skenario 1 dari 3 — Kantin Kampus",
    caseDescription: "Seorang teman sekelas terlihat duduk sendirian di pojok kantin sambil menunduk lesu dan menahan tangis karena fotonya saat salah ucap dijadikan bahan tertawaan massal di grup.",
    toolbox: [
      { id: "t1", text: "🤝 Dukungan Emosional (DM/Pribadi ke korban)", type: "correct" },
      { id: "t2", text: "🛑 Teguran Tegas & Sopan ke pelaku", type: "correct" },
      { id: "t3", text: "☕ Ajak Pindah Tempat yang tenang", type: "correct" },
      { id: "t4", text: "📱 Ikut Merekam / Menertawakan", type: "fatal" },
      { id: "t5", text: "🤫 Diam & Berlalu (Pura-pura tidak tahu)", type: "wrong" }
    ],
    winningCombination: ["t1", "t2", "t3"],
    feedbackSuccess: "Luar biasa! Kombinasi tindakan Anda berhasil meredakan pelaku, melindungi korban, dan memulihkan mentalnya secara tuntas."
  },
  {
    id: 2,
    title: "Skenario 2 dari 3 — Transportasi Umum",
    caseDescription: "Seorang ibu hamil berdiri kelelahan di dalam kereta yang penuh sesak. Di depannya, beberapa pemuda duduk di kursi prioritas sambil asyik bermain ponsel tanpa peduli.",
    toolbox: [
      { id: "t1", text: "💺 Berikan Kursi Sendiri kepada ibu hamil", type: "correct" },
      { id: "t2", text: "🗣️ Ingatkan Kursi Prioritas kepada pemuda", type: "correct" },
      { id: "t3", text: "🎒 Bawakan Barang Bawaan agar lebih nyaman", type: "correct" },
      { id: "t4", text: "😴 Pura-pura Tidur / Mengabaikan", type: "wrong" },
      { id: "t5", text: "📣 Membentak Kasar dengan emosi", type: "wrong" }
    ],
    winningCombination: ["t1", "t2", "t3"],
    feedbackSuccess: "Tepat sekali! Keadilan sosial di ruang publik ditegakkan dengan cara yang beradab dan penuh kepedulian nyata."
  },
  {
    id: 3,
    title: "Skenario 3 dari 3 — Ruang Digital",
    caseDescription: "Sebanyak satu angkatan kampus menyerang akun media sosial seorang teman secara massal gara-gara berita bohong (hoaks) yang belum tentu kebenarannya.",
    toolbox: [
      { id: "t1", text: "🛡️ Klarifikasi Fakta/Bukti yang valid", type: "correct" },
      { id: "t2", text: "📩 Kirim Pesan Penguatan (DM) ke korban", type: "correct" },
      { id: "t3", text: "⚠️ Laporkan Akun Provokator ke pihak berwenang", type: "correct" },
      { id: "t4", text: "🔥 Ikut Menghujat agar tidak dikucilkan", type: "fatal" },
      { id: "t5", text: "🚪 Keluar Grup / Unfollow tanpa tindakan", type: "wrong" }
    ],
    winningCombination: ["t1", "t2", "t3"],
    feedbackSuccess: "Hebat! Persekusi digital berhasil diredam secara sistematis, kebenaran ditegakkan, dan korban terlindungi dari dampak psikologis."
  }
];

// ================= DATA SKENARIO SILA 3 =================
const sila3Scenarios = [
  {
    id: 1,
    title: "Skenario 1 dari 3 — Feed Media Sosial",
    author: "Portal Berita Viral",
    username: "@berita_viral",
    time: "10 menit yang lalu",
    headline:
      "🚨 Viral! Video Kerusakan Fasilitas Kampus Ramai Dibicarakan",
    imageText:
      "Sebuah unggahan memperlihatkan kondisi fasilitas kampus yang rusak dan mengaitkannya dengan sekelompok mahasiswa. Unggahan tersebut menyebar luas, tetapi waktu kejadian, lokasi pengambilan video, dan identitas pihak yang terlibat belum dapat dipastikan dari unggahan itu saja.",
    factDetails: {
      domain:
        "Konteks: teks unggahan menuduh sekelompok mahasiswa merusak fasilitas kampus, tetapi tidak menyertakan tanggal kejadian, lokasi terperinci, atau bukti pendukung yang dapat diperiksa.",
      context:
        "Konteks: teks unggahan menuduh sekelompok mahasiswa merusak fasilitas kampus, tetapi tidak menyertakan tanggal kejadian, lokasi terperinci, atau bukti pendukung yang dapat diperiksa.",
      impact:
        "Risiko: menyebarkan tuduhan tanpa verifikasi dapat merusak reputasi pihak yang dituduh dan memicu konflik antarkelompok mahasiswa."
    },
    correctAction: "report",
    feedbackReport:
      "Tepat! Kamu tidak ikut menyebarkan informasi provokatif yang belum terverifikasi.",
    feedbackShare:
      "Hati-hati! Kamu membagikan tuduhan yang belum terverifikasi dan berisiko memecah persatuan."
  },
  {
    id: 2,
    title: "Skenario 2 dari 3 — Pesan Berantai",
    author: "Info Kampus Hari Ini",
    username: "@info_kampus",
    time: "5 menit yang lalu",
    headline:
      "⚠️ Pesan Berantai Sebut Kegiatan Kampus Dibatalkan Besok",
    imageText:
      "Sebuah pesan di grup percakapan menyebutkan bahwa seluruh kegiatan kampus akan dibatalkan mulai besok dan meminta penerima meneruskannya ke grup lain. Pesan tersebut tidak menyertakan tautan pengumuman resmi, tanggal dokumen, atau keterangan yang dapat digunakan untuk memastikan kebenarannya.",
    factDetails: {
      domain:
        "Sumber: pesan berantai tidak menyertakan tautan ke situs resmi kampus atau pengumuman dari pihak berwenang.",
      context:
        "Konteks: pesan mengklaim seluruh kegiatan kampus dibatalkan besok, tetapi tidak mencantumkan tanggal pengumuman, alasan pembatalan, atau pihak yang mengeluarkan informasi.",
      impact:
        "Risiko: mahasiswa dapat membatalkan kegiatan atau mengubah rencana secara keliru apabila pesan diteruskan tanpa pemeriksaan."
    },
    correctAction: "report",
    feedbackReport:
      "Bagus! Kamu memilih tidak meneruskan klaim yang belum memiliki sumber tepercaya.",
    feedbackShare:
      "Jangan terburu-buru! Periksa pengumuman resmi kampus sebelum meneruskan pesan."
  },
  {
    id: 3,
    title: "Skenario 3 dari 3 — Informasi Terverifikasi",
    author: "Pusat Informasi Kampus",
    username: "@info_resmi_kampus",
    time: "Baru saja",
    headline:
      "📢 Pengumuman Jadwal Kegiatan Kampus Telah Diterbitkan",
    imageText:
      "Pengumuman jadwal kegiatan tersedia melalui kanal resmi kampus. Informasi mengenai tanggal, waktu, dan lokasi kegiatan dapat diperiksa pada pengumuman tersebut. Sebelum membagikannya, pastikan isi informasi sesuai dengan sumber resmi dan tidak ada perubahan jadwal terbaru.",
    factDetails: {
    domain:
      "Sumber: pengumuman tersedia melalui kanal resmi kampus yang menjadi rujukan dalam skenario ini.",
    context:
      "Konteks: tanggal, waktu, dan lokasi kegiatan tercantum dalam pengumuman serta sesuai dengan informasi pada kanal resmi yang dirujuk.",
    impact:
      "Manfaat: membagikan informasi yang telah diperiksa dapat membantu mahasiswa memperoleh jadwal kegiatan yang benar dan mengurangi kesalahpahaman."
  },
    correctAction: "share",
    feedbackReport:
      "Kamu berhati-hati, tetapi dalam skenario ini informasi telah dinyatakan valid. Informasi yang bermanfaat dapat dibagikan.",
    feedbackShare:
      "Tepat! Kamu membagikan informasi yang telah dinyatakan valid dalam simulasi."
  }
];

// ================= DATA SKENARIO SILA 4 =================
const sila4Scenarios = [
  {
    id: 1,
    title: "Skenario 1 dari 3 — Pemilihan Ketua Organisasi Mahasiswa",
    topic: "Pemilihan ketua organisasi mahasiswa yang hanya didasarkan pada popularitas calon di media sosial",

    comments: [
      {
        id: "c1",
        author: "Raka",
        avatar: "🧑",
        text: "Pendukung calon ketua itu memang tidak punya otak kalau masih memilih orang seperti dia!",
        type: "ad-hominem",
        explanation:
          "Komentar ini merendahkan kemampuan berpikir mahasiswa yang berbeda pilihan, bukan membahas kualitas calon atau program kerjanya.",
        bestAction: "hide"
      },
      {
        id: "c2",
        author: "Maya",
        avatar: "👩",
        text: "Jadi, kalian yang memilih calon lain berarti tidak ingin organisasi mahasiswa ini berkembang?",
        type: "strawman",
        explanation:
          "Komentar ini memelintir pilihan politik orang lain. Memilih calon yang berbeda tidak berarti seseorang tidak peduli terhadap kemajuan organisasi.",
        bestAction: "mediate"
      },
      {
        id: "c3",
        author: "Dimas",
        avatar: "👨",
        text: "Menurutku, popularitas memang bisa membuat calon lebih dikenal, tetapi kita juga perlu melihat kemampuan memimpin, rekam jejak, dan tanggung jawabnya sebelum memilih.",
        type: "logical",
        explanation:
          "Komentar ini menyampaikan alasan yang relevan, mengajak mahasiswa menilai calon secara objektif, dan menekankan transparansi pemungutan suara.",
        bestAction: "pin"
      }
    ],

    solutions: [
{
        id: "s1",
        title: "Memaksa semua mahasiswa mendukung calon yang unggul dalam popularitas di media sosial.",
        correct: false,
        explanation:
          "Popularitas di media sosial tidak otomatis menunjukkan kemampuan memimpin. Memaksakan pilihan juga mengabaikan kebebasan mahasiswa dalam menentukan calon."
      },
      {
        id: "s2",
        title: "Membandingkan program kerja dan rekam jejak setiap calon, memberi kesempatan yang setara untuk menyampaikan gagasan, lalu melakukan pemungutan suara secara transparan.",
        correct: true,
        explanation:
          "Tepat! Keputusan dibuat berdasarkan pertimbangan yang objektif, kesempatan yang adil, dan proses pemungutan suara yang transparan serta menghormati perbedaan pilihan."
      },
      {
          id: "s3",
          title: "Menghapus semua komentar dari mahasiswa yang mendukung calon berbeda agar diskusi hanya berisi satu pendapat.",
          correct: false,
          explanation:
            "Menghapus pendapat hanya karena berbeda pilihan membatasi kebebasan berpendapat. Moderasi seharusnya berfokus pada komentar yang menyerang, menghina, atau melanggar aturan diskusi."
      }
    ]
  },

  {
    id: 2,
    title: "Skenario 2 dari 3 — Fasilitas Organisasi Mahasiswa",
    topic: "Pembagian jadwal penggunaan ruang kegiatan mahasiswa",

    comments: [
      {
        id: "c1",
        author: "Nadia",
        avatar: "👩",
        text: "Organisasi yang meminta jadwal akhir pekan itu egois dan hanya memikirkan kelompoknya sendiri!",
        type: "ad-hominem",
        explanation:
          "Komentar ini menyerang karakter organisasi, bukan membahas kebutuhan dan jadwal penggunaan ruang.",
        bestAction: "hide"
      },
      {
        id: "c2",
        author: "Fajar",
        avatar: "🧑",
        text: "Kalau jadwal harus dibagi, berarti organisasi kami sama sekali tidak boleh menggunakan ruangan?",
        type: "strawman",
        explanation:
          "Pembagian jadwal tidak sama dengan melarang sebuah organisasi menggunakan ruangan.",
        bestAction: "mediate"
      },
      {
        id: "c3",
        author: "Sinta",
        avatar: "👩",
        text: "Kita dapat memakai kalender pemesanan bersama dan merotasi jadwal akhir pekan secara adil.",
        type: "logical",
        explanation:
          "Komentar ini menawarkan mekanisme yang jelas untuk membagi fasilitas secara adil.",
        bestAction: "pin"
      }
    ],

    solutions: [
      {
        id: "s1",
        title: "Memberikan semua jadwal akhir pekan kepada organisasi dengan anggota terbanyak.",
        correct: false,
        explanation:
          "Jumlah anggota saja belum tentu menjadi dasar pembagian yang adil."
      },
      {
        id: "s2",
        title: "Menghapus seluruh kegiatan akhir pekan agar tidak ada perselisihan.",
        correct: false,
        explanation:
          "Pilihan ini menghindari masalah tanpa memenuhi kebutuhan organisasi."
      },
      {
        id: "s3",
        title: "Menggunakan kalender pemesanan bersama, kriteria yang transparan, dan rotasi jadwal yang disepakati.",
        correct: true,
        explanation:
          "Tepat! Setiap organisasi memperoleh kesempatan berdasarkan aturan yang transparan dan disepakati."
      }
    ]
  },

  {
    id: 3,
    title: "Skenario 3 dari 3 — Aturan Forum Digital",
    topic: "Penyusunan aturan diskusi forum mahasiswa",

    comments: [
      {
        id: "c1",
        author: "Arman",
        avatar: "🧑",
        text: "Pendukung aturan moderasi ini semuanya antikritik dan tidak mampu menerima pendapat lain!",
        type: "ad-hominem",
        explanation:
          "Komentar ini melabeli orang yang mendukung aturan, bukan menguji isi aturan tersebut.",
        bestAction: "hide"
      },
      {
        id: "c2",
        author: "Lina",
        avatar: "👩",
        text: "Kalau komentar yang menghina dibatasi, berarti semua kritik terhadap kampus pasti dilarang?",
        type: "strawman",
        explanation:
          "Membatasi hinaan tidak sama dengan melarang kritik yang disampaikan secara beradab.",
        bestAction: "mediate"
      },
      {
        id: "c3",
        author: "Bima",
        avatar: "👨",
        text: "Aturan sebaiknya membedakan kritik yang beralasan dari serangan pribadi dan menyediakan mekanisme banding.",
        type: "logical",
        explanation:
          "Komentar ini membedakan kritik dan serangan pribadi serta mengusulkan prosedur yang adil.",
        bestAction: "pin"
      }
    ],

    solutions: [
      {
        id: "s1",
        title: "Melarang semua kritik yang menyangkut kebijakan kampus.",
        correct: false,
        explanation:
          "Musyawarah membutuhkan ruang untuk kritik dan perbedaan pendapat yang beralasan."
      },
      {
        id: "s2",
        title: "Membiarkan seluruh komentar tanpa aturan apa pun.",
        correct: false,
        explanation:
          "Tanpa aturan, serangan pribadi dapat menghambat diskusi yang sehat."
      },
      {
        id: "s3",
        title: "Menyepakati aturan yang membedakan kritik dari serangan pribadi, disertai alasan moderasi dan mekanisme banding.",
        correct: true,
        explanation:
          "Tepat! Aturan ini menjaga kebebasan berpendapat sekaligus melindungi martabat peserta."
      }
    ]
  },
];

  //================== DATA SKENARIO SILA 5 =================

const sila5Scenarios = [
  {
    title: "Kasus 1 dari 3 — Ilustrasi Tanpa Izin",
    category: "HAK KEKAYAAN INTELEKTUAL",
    icon: "🎨",
    description:
      "Sebuah ilustrasi digital milik mahasiswa dijual ulang di platform tanpa izin. Padahal, banyak mahasiswa lain ingin memakai ilustrasi tersebut untuk tugas.",
    choices: [
      {
        title: "Membiarkan penjualan tetap berjalan",
        description:
          "Abaikan laporan agar pengguna tetap mudah mendapatkan ilustrasi.",
        impact: { creator: -15, access: 5, fairness: -15 },
        feedback:
          "Akses memang terlihat mudah, tetapi hak pencipta diabaikan dan penjualan tanpa izin tetap berlangsung."
      },
      {
        title: "Hentikan penjualan ilegal dan sediakan jalur izin",
        description:
          "Tindak lanjuti laporan, hubungi pengunggah, dan bantu pengguna memperoleh izin atau alternatif legal.",
        impact: { creator: 15, access: 10, fairness: 15 },
        feedback:
          "Tepat! Hak pencipta dilindungi, sementara pengguna tetap mendapat jalur akses yang sah."
      },
      {
        title: "Hapus semua ilustrasi dari platform",
        description:
          "Tutup akses seluruh ilustrasi agar tidak ada lagi karya yang disalahgunakan.",
        impact: { creator: 10, access: -15, fairness: -5 },
        feedback:
          "Langkah ini mengurangi risiko penyalahgunaan, tetapi juga membatasi karya yang sebenarnya dapat dibagikan secara legal."
      }
    ]
  },
  {
    title: "Kasus 2 dari 3 — Aplikasi Pendidikan Mahal",
    category: "PEMERATAAN AKSES DIGITAL",
    icon: "📚",
    description:
      "Sebuah aplikasi belajar berkualitas memiliki biaya langganan tinggi. Mahasiswa dengan keterbatasan ekonomi kesulitan mengakses materi, sementara pengembang membutuhkan pendapatan untuk merawat aplikasi.",
    choices: [
      {
        title: "Wajibkan aplikasi menjadi gratis seluruhnya",
        description:
          "Hilangkan semua biaya tanpa membahas keberlanjutan pengembang.",
        impact: { creator: -10, access: 15, fairness: -5 },
        feedback:
          "Akses meningkat, tetapi kebutuhan pengembang untuk membiayai layanan belum diperhitungkan."
      },
      {
        title: "Sediakan paket mahasiswa dan subsidi akses",
        description:
          "Negosiasikan harga khusus, subsidi, atau materi gratis yang disepakati dengan pengembang.",
        impact: { creator: 10, access: 15, fairness: 15 },
        feedback:
          "Tepat! Kebijakan ini memperluas akses tanpa mengabaikan keberlanjutan pengembang."
      },
      {
        title: "Pertahankan harga yang sama untuk semua",
        description:
          "Anggap setiap pengguna memiliki kemampuan membayar yang sama.",
        impact: { creator: 10, access: -15, fairness: -10 },
        feedback:
          "Pendapatan pengembang terjaga, tetapi hambatan ekonomi bagi sebagian mahasiswa tidak teratasi."
      }
    ]
  },
  {
    title: "Kasus 3 dari 3 — Musik untuk Konten Komersial",
    category: "LISENSI DAN DISTRIBUSI",
    icon: "🎵",
    description:
      "Sebuah usaha memakai musik ciptaan musisi lokal untuk iklan digital tanpa meminta izin. Video itu membantu promosi usaha, tetapi musisi tidak memperoleh izin penggunaan atau kompensasi.",
    choices: [
      {
        title: "Biarkan karena video membantu promosi",
        description:
          "Anggap pencantuman nama musisi sudah cukup meskipun izin belum diperoleh.",
        impact: { creator: -15, access: 5, fairness: -10 },
        feedback:
          "Promosi tidak otomatis memberikan hak untuk memakai musik. Izin dan ketentuan lisensi tetap perlu diperhatikan."
      },
      {
        title: "Negosiasikan lisensi atau ganti musik berlisensi",
        description:
          "Minta izin penggunaan komersial dan sepakati ketentuannya, atau gunakan musik dengan lisensi yang sesuai.",
        impact: { creator: 15, access: 5, fairness: 15 },
        feedback:
          "Tepat! Penggunaan karya dilakukan dengan menghormati hak musisi dan kebutuhan pembuat konten."
      },
      {
        title: "Larangan semua musik dalam konten digital",
        description:
          "Blokir semua penggunaan musik agar tidak ada risiko pelanggaran.",
        impact: { creator: 5, access: -15, fairness: -5 },
        feedback:
          "Larangan menyeluruh terlalu membatasi. Musik yang memiliki izin atau lisensi sesuai tetap dapat digunakan."
      }
    ]
  }
];

// Variabel Global Game
let currentStep = 0;
let totalScore = 100;

// ================= ROUTER MINI GAME =================
const chatGameContainer = document.querySelector(".chat-game-container");

function initGame() {
  currentStep = 0;
  totalScore = 100;

  chatGameContainer.classList.remove(
    "challenge-sila-1",
    "challenge-sila-2",
    "challenge-sila-3",
    "challenge-sila-4",
    "challenge-sila-5"
  );

  if (currentSila === 1) {
    chatGameContainer.classList.add("challenge-sila-1");

    document.getElementById("gameHeaderTitle").innerText =
      "Grup Chat Kampus";
    document.getElementById("gameAvatar").innerText = "🎓";
    document.getElementById("scoreLabel").innerText = "Integritas";

    loadSila1Scenario();

  } else if (currentSila === 2) {
    chatGameContainer.classList.add("challenge-sila-2");

    document.getElementById("gameHeaderTitle").innerText =
      "P3K Kemanusiaan";
    document.getElementById("gameAvatar").innerText = "🤝";
    document.getElementById("scoreLabel").innerText = "Empati";

    loadSila2Scenario();

  } else if (currentSila === 3) {
    chatGameContainer.classList.add("challenge-sila-3");

    document.getElementById("gameHeaderTitle").innerText =
      "Fact-Check Radar";
    document.getElementById("gameAvatar").innerText = "🔍";
    document.getElementById("scoreLabel").innerText =
      "Persatuan";

    loadSila3Scenario();

  } else if (currentSila === 4) {
    chatGameContainer.classList.add("challenge-sila-4");

    document.getElementById("gameHeaderTitle").innerText =
      "Digital Town Hall";
    document.getElementById("gameAvatar").innerText = "🗳️";
    document.getElementById("scoreLabel").innerText = "Mufakat";

    loadSila4Scenario();

  
  } else if (currentSila === 5) {
    chatGameContainer.classList.add("challenge-sila-5");

    document.getElementById("gameHeaderTitle").innerText =
      "Digital Equity Lab";
    document.getElementById("gameAvatar").innerText = "⚖️";
    document.getElementById("scoreLabel").innerText = "Keadilan";

    resetSila5State();
    loadSila5Scenario();

  } else {
    showToast(
      `Mini game Sila ${currentSila} sedang dalam tahap pengembangan.`
    );
  }
}

// ================= LOGIKA SILA 1 (Chat Simulator) =================
function loadSila1Scenario() {
  const scenario = sila1Scenarios[currentStep];
  document.getElementById('chatScenarioTitle').innerText = scenario.title;
  document.getElementById('chatScore').innerText = totalScore;
  
  const chatBody = document.getElementById('chatBody');
  const gameFooter = document.getElementById('gameFooter');
  
  chatBody.innerHTML = `
    <div class="chat-bubble incoming">
      <strong>${scenario.sender}</strong><br>${scenario.message}
    </div>
  `;
  chatBody.scrollTop = chatBody.scrollHeight;

  gameFooter.innerHTML = `
    <small class="chip-label">Pilih respon kamu:</small>
    <div class="chip-container" id="chipContainer"></div>
  `;

  const chipContainer = document.getElementById('chipContainer');
  scenario.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'chip-btn';
    btn.innerText = opt.label;
    btn.onclick = () => handleSila1OptionSelect(index);
    chipContainer.appendChild(btn);
  });
}

function handleSila1OptionSelect(optionIndex) {
  const scenario = sila1Scenarios[currentStep];
  const selected = scenario.options[optionIndex];
  
  totalScore += (selected.score - 100);
  document.getElementById('chatScore').innerText = Math.max(0, Math.round(totalScore / (currentStep + 1)));

  const chatBody = document.getElementById('chatBody');
  
  const outgoingBubble = document.createElement('div');
  outgoingBubble.className = 'chat-bubble outgoing';
  outgoingBubble.innerText = selected.text;
  chatBody.appendChild(outgoingBubble);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'chat-feedback';
  feedbackEl.innerText = `💡 Note: ${selected.feedback}`;
  chatBody.appendChild(feedbackEl);

  chatBody.scrollTop = chatBody.scrollHeight;

  const gameFooter = document.getElementById('gameFooter');
  gameFooter.innerHTML = `
    <button class="next-btn" id="nextSila1Btn" style="width: 100%; padding: 10px; border-radius: 8px;">
      ${currentStep < sila1Scenarios.length - 1 ? 'Lanjut Skenario Berikutnya ➔' : 'Lihat Hasil Akhir 🎉'}
    </button>
  `;
  
  document.getElementById('nextSila1Btn').onclick = () => {
    currentStep++;
    if (currentStep < sila1Scenarios.length) {
      loadSila1Scenario();
    } else {
      showSila1FinalResult();
    }
  };
}

function showSila1FinalResult() {
  const finalScore = Math.max(0, Math.round(totalScore / sila1Scenarios.length));
  const chatBody = document.getElementById('chatBody');
  const gameFooter = document.getElementById('gameFooter');

  chatBody.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h3>Hasil Uji Integritas Digital</h3>
      <h1 style="font-size: 2.5rem; color: #2563eb; margin: 10px 0;">${finalScore}%</h1>
      <p style="color: #475569; font-size: 0.9rem;">
        ${finalScore >= 85 
          ? 'Luar biasa! Kamu menunjukkan integritas moral dan rasa saling menghargai yang tinggi di ruang digital.' 
          : 'Bagus! Tetap jaga kejujuran dan rasa saling menghargai dalam setiap obrolan kampus ya.'}
      </p>
    </div>
  `;

  gameFooter.innerHTML = `
    <button class="next-btn" onclick="initGame()" style="width: 100%; padding: 10px; border-radius: 8px;">Coba Lagi 🔄</button>
  `;
}

// ================= LOGIKA SILA 2 (P3K KEMANUSIAAN) =================
function loadSila2Scenario() {
  const scenario = sila2Scenarios[currentStep];
  document.getElementById('chatScenarioTitle').innerText = scenario.title;
  document.getElementById('chatScore').innerText = totalScore;

  const chatBody = document.getElementById('chatBody');
  const gameFooter = document.getElementById('gameFooter');

  // Render Kasus & Checkbox Card Toolbox
  chatBody.innerHTML = `
    <div class="scenario-card p-3 mb-2 rounded-3 border bg-light shadow-xs">
      <h6 class="fw-bold text-dark mb-1" style="font-size: 13px;">📌 Situasi Krisis:</h6>
      <p class="mb-0 text-secondary" style="font-size: 13px; line-height: 1.5;">
        ${scenario.caseDescription}
      </p>
    </div>
    <div class="instruction-box mb-2">
      <small class="fw-bold text-dark">🛠️ KOTAK P3K (Pilih beberapa alat yang tepat untuk dikombinasikan):</small>
    </div>
    <div class="toolbox-grid d-flex flex-column gap-2" id="toolboxContainer">
      ${scenario.toolbox.map(tool => `
        <label class="toolbox-item p-2 px-3 border rounded-3 d-flex align-items-center gap-3 bg-white cursor-pointer transition-all">
          <input type="checkbox" class="form-check-input tool-checkbox m-0" value="${tool.id}">
          <span class="tool-label text-dark" style="font-size: 12px;">${tool.text}</span>
        </label>
      `).join('')}
    </div>
  `;

  // Render Tombol Konfirmasi di Footer
  gameFooter.innerHTML = `
    <button type="button" class="primary-btn full py-2 fw-semibold" id="submitCombinationBtn" style="border-radius: 10px; width: 100%;">
      Kirim Kombinasi P3K 🚀
    </button>
  `;

  document.getElementById('submitCombinationBtn').onclick = () => {
    const checkedBoxes = document.querySelectorAll('.tool-checkbox:checked');
    const selectedIds = Array.from(checkedBoxes).map(cb => cb.value);

    if (selectedIds.length === 0) {
      showToast("Pilih minimal satu alat P3K terlebih dahulu!");
      return;
    }

    evaluateSila2Answer(scenario, selectedIds);
  };
}

function evaluateSila2Answer(scenario, selectedIds) {
  // 1. KUNCI SEMUA PILIHAN: Matikan checkbox agar tidak bisa diubah lagi setelah dikirim
  const allCheckboxes = document.querySelectorAll('.tool-checkbox');
  allCheckboxes.forEach(cb => cb.disabled = true);

  const allToolItems = document.querySelectorAll('.toolbox-item');
  allToolItems.forEach(item => {
    item.style.cursor = 'default';
    item.style.opacity = '0.8';
  });

  // Ambil objek alat yang dipilih oleh user
  const selectedTools = selectedIds.map(id => scenario.toolbox.find(t => t.id === id));
  
  // Pisahkan mana pilihan yang benar dan mana yang salah/fatal
  const wrongSelected = selectedTools.filter(t => !scenario.winningCombination.includes(t.id));

  const hasFatalOrWrong = wrongSelected.length > 0;
  const isMatch = scenario.winningCombination.every(id => selectedIds.includes(id)) && 
                  selectedIds.length === scenario.winningCombination.length;

  const chatBody = document.getElementById('chatBody');
  const gameFooter = document.getElementById('gameFooter');

  // Penyesuaian pengurangan skor
  if (hasFatalOrWrong) {
    totalScore -= (wrongSelected.length * 15);
    showToast("⚠️ Ada pilihan tindakan yang kurang tepat!");
  } else if (!isMatch) {
    totalScore -= 10;
    showToast("⚠️ Kombinasi alat P3K belum lengkap.");
  } else {
    showToast("✨ Kombinasi Sempurna!");
  }

  document.getElementById('chatScore').innerText = Math.max(0, totalScore);

  // Menyusun Refleksi Personal Berdasarkan Pilihan User
  let reflectionHTML = `<strong>💡 Refleksi & Umpan Balik Sila 2:</strong><br>`;

  if (wrongSelected.length > 0) {
    const wrongTexts = wrongSelected.map(t => `<em>"${t.text}"</em>`).join(', ');
    reflectionHTML += `<p class="mb-2 mt-1" style="font-size: 13px;">
      ⚠️ <strong>Catatan atas pilihan Anda:</strong> Anda memilih ${wrongTexts}. Tindakan ini kurang sesuai dengan prinsip kemanusiaan karena dapat memperburuk kondisi korban atau mengabaikan empati.
    </p>`;
  }

  const missingIds = scenario.winningCombination.filter(id => !selectedIds.includes(id));
  if (missingIds.length > 0 && !isMatch) {
    reflectionHTML += `<p class="mb-2 mt-1" style="font-size: 13px;">
      🔍 <strong>Pilihan belum lengkap:</strong> Masih ada langkah penting penanganan kemanusiaan yang terlewat dalam kombinasi Anda.
    </p>`;
  }

  const correctToolsText = scenario.winningCombination
    .map(id => `<strong>${scenario.toolbox.find(t => t.id === id).text}</strong>`)
    .join(', ');

  if (isMatch) {
    reflectionHTML += `<p class="mb-0 mt-1 text-success" style="font-size: 13px;">
      ✨ <strong>Luar Biasa!</strong> ${scenario.feedbackSuccess}
    </p>`;
  } else {
    reflectionHTML += `<p class="mb-0 mt-1 text-dark" style="font-size: 13px; background: rgba(213,161,59,0.1); padding: 8px; border-radius: 6px;">
      ✅ <strong>Saran Kombinasi yang Benar:</strong> Untuk menyelesaikan krisis ini secara adil dan beradab sesuai Sila 2, sebaiknya Anda memilih paket kombinasi: ${correctToolsText}.
    </p>`;
  }

  // Tampilkan kotak umpan balik di chat body
  chatBody.innerHTML += `
    <div class="chat-feedback mt-3 p-3 rounded-3 border bg-light shadow-xs">
      ${reflectionHTML}
    </div>
  `;
  chatBody.scrollTop = chatBody.scrollHeight;

  // Ganti tombol footer menjadi tombol Lanjut Skenario
  gameFooter.innerHTML = `
    <button type="button" class="primary-btn full py-2 fw-semibold" id="nextScenarioBtn" style="border-radius: 10px; width: 100%;">
      ${currentStep < sila2Scenarios.length - 1 ? 'Lanjut Skenario Berikutnya ➔' : 'Lihat Hasil Akhir 🎉'}
    </button>
  `;

  document.getElementById('nextScenarioBtn').onclick = () => {
    currentStep++;
    if (currentStep < sila2Scenarios.length) {
      loadSila2Scenario();
    } else {
      showSila2FinalResult();
    }
  };
}

function showSila2FinalResult() {
  const finalScore = Math.max(0, totalScore);
  const chatBody = document.getElementById('chatBody');
  const gameFooter = document.getElementById('gameFooter');

  chatBody.innerHTML = `
    <div style="text-align: center; padding: 30px 20px;">
      <h3>Hasil Simulasi P3K Kemanusiaan</h3>
      <h1 style="font-size: 2.5rem; color: #2563eb; margin: 10px 0;">${finalScore}%</h1>
      <p style="color: #475569; font-size: 0.9rem;">
        ${finalScore >= 75 
          ? 'Luar biasa! Anda memiliki kepekaan sosial, empati mendalam, dan menjunjung tinggi martabat manusia.' 
          : 'Bagus! Tingkatkan terus kepedulian dan keberanian dalam membela nilai-nilai kemanusiaan.'}
      </p>
    </div>
  `;

  gameFooter.innerHTML = `
    <button type="button" class="primary-btn full py-2 fw-semibold" onclick="initGame()" style="border-radius: 10px; width: 100%;">
      Coba Lagi 🔄
    </button>
  `;
}

// ================= LOGIKA SILA 3 (FACT-CHECK RADAR) =================
let sila3FactChecked = false;

function loadSila3Scenario() {
  const scenario = sila3Scenarios[currentStep];

  if (!scenario) return;

  sila3FactChecked = false;

  document.getElementById("chatScenarioTitle").innerText =
    scenario.title;

  document.getElementById("chatScore").innerText =
    Math.max(0, totalScore);

  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    
    <article class="news-feed-card">
      <div class="simulated-post">
        <div class="simulated-post-top">
          <div class="simulated-post-icon">📰</div>

          <div class="simulated-post-source">
            <strong>${scenario.author}</strong>
            <small>${scenario.username} · ${scenario.time}</small>
          </div>

          <span class="simulated-post-menu">•••</span>
        </div>

        <div class="simulated-post-content">
          <h3 class="news-feed-headline">
            ${scenario.headline}
          </h3>

          <p>${scenario.imageText}</p>
        </div>

        <div class="simulated-post-stats">
          <span>👍 Suka</span>
          <span>💬 Komentar</span>
          <span>↗ Bagikan</span>
        </div>

        <div class="trust-meter">
          <div class="trust-meter-label">
            <span>Tingkat Kepercayaan Publik</span>
            <strong id="trustValue">Belum diperiksa</strong>
          </div>

          <div class="trust-meter-track">
            <div id="trustFill" class="trust-meter-fill"></div>
          </div>
        </div>
      </div>
    </article>


    <section id="factCheckPanel"
      class="fact-check-panel"
      hidden>
      <strong>🔍 Hasil Investigasi Radar</strong>
      <ul>
        <li>${scenario.factDetails.domain}</li>
        <li>${scenario.factDetails.context}</li>
        <li>${scenario.factDetails.impact}</li>
      </ul>
      <p>
        Petunjuk ini merupakan bagian dari skenario latihan.
        Periksa sumber dan bukti sebelum mengambil keputusan.
      </p>
    </section>

    <div id="sila3Feedback" aria-live="polite"></div>
  `;

  gameFooter.innerHTML = `
    <div class="fact-action-buttons">
      <button type="button"
        class="fact-action-btn check"
        id="btnCheckFact">
        🔍 Cek Fakta
      </button>

      <button type="button"
        class="fact-action-btn report"
        id="btnReport">
        🚩 Laporkan
      </button>

      <button type="button"
        class="fact-action-btn share"
        id="btnShare">
        🚀 Bagikan
      </button>
    </div>
  `;

  document.getElementById("btnCheckFact").onclick = () => {
    sila3FactChecked = true;

    document.getElementById("factCheckPanel").hidden = false;

    document.getElementById("trustValue").innerText =
      "Petunjuk tersedia";

    document.getElementById("trustFill").style.width = "60%";

    document.getElementById("btnCheckFact").disabled = true;

    showToast("🔍 Petunjuk investigasi berhasil dibuka.");

    chatBody.scrollTop = chatBody.scrollHeight;
  };

  document.getElementById("btnReport").onclick = () => {
    evaluateSila3Answer(scenario, "report");
  };

  document.getElementById("btnShare").onclick = () => {
    evaluateSila3Answer(scenario, "share");
  };
}

function evaluateSila3Answer(scenario, action) {
  if (!sila3FactChecked) {
    showToast("Periksa fakta terlebih dahulu!");
    return;
  }

  const isCorrect = action === scenario.correctAction;

  if (isCorrect) {
    totalScore = Math.min(100, totalScore + 0);
  } else {
    totalScore = Math.max(0, totalScore - 20);
  }

  document.getElementById("chatScore").innerText =
    Math.max(0, totalScore);

  const feedback = document.getElementById("sila3Feedback");

  feedback.className = isCorrect
    ? "fact-feedback success"
    : "fact-feedback warning";

  feedback.innerHTML = `
    <strong>
      ${isCorrect ? "✅ Keputusan Tepat!" : "⚠️ Perlu Lebih Cermat"}
    </strong>
    <p>
      ${action === "report"
        ? scenario.feedbackReport
        : scenario.feedbackShare}
    </p>
  `;

  document.getElementById("btnReport").disabled = true;
  document.getElementById("btnShare").disabled = true;

  const gameFooter = document.getElementById("gameFooter");

  gameFooter.innerHTML = `
    <button type="button"
      class="primary-btn full py-2 fw-semibold"
      id="nextSila3Btn">
      ${currentStep < sila3Scenarios.length - 1
        ? "Lanjut Skenario Berikutnya ➔"
        : "Lihat Hasil Akhir 🎉"}
    </button>
  `;

  document.getElementById("nextSila3Btn").onclick = () => {
    currentStep++;

    if (currentStep < sila3Scenarios.length) {
      loadSila3Scenario();
    } else {
      showSila3FinalResult();
    }
  };

  document.getElementById("chatBody").scrollTop =
    document.getElementById("chatBody").scrollHeight;
}

function showSila3FinalResult() {
  const finalScore = Math.max(0, totalScore);
  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    <div class="fact-final-result">
      <div class="fact-final-icon">🔍</div>
      <h3>Radar Fakta Selesai!</h3>
      <div class="fact-final-score">${finalScore}%</div>
      <p>
        ${finalScore >= 80
          ? "Hebat! Kamu telah berlatih memeriksa informasi sebelum membagikannya."
          : "Terus latih kebiasaan memeriksa sumber, tanggal, dan konteks informasi sebelum membagikannya."}
      </p>
      <p>
        Menjaga persatuan dimulai dari kebiasaan menyaring informasi
        dan tidak ikut menyebarkan provokasi.
      </p>
    </div>
  `;

  gameFooter.innerHTML = `
    <button type="button"
      class="primary-btn full py-2 fw-semibold"
      id="retrySila3Btn">
      Coba Lagi 🔄
    </button>
  `;

  document.getElementById("retrySila3Btn").onclick = () => {
    initGame();
  };
}
// ================= LOGIKA SILA 4 (Digital Town Hall) =================
let sila4State = {};

function loadSila4Scenario() {
  sila4State = {
    phase: "classify",
    commentIndex: 0,
    classifications: {},
    actions: {},
    consensus: 50,
    feedback: "",
    selectedSolution: null
  };

  renderSila4();
}

function getSila4Scenario() {
  return sila4Scenarios[currentStep];
}

function getSila4ConsensusLabel(value) {
  if (value >= 75) return "Menuju Mufakat";
  if (value >= 45) return "Perlu Dialog";
  return "Polarisasi Meningkat";
}

function updateSila4Consensus(points) {
  sila4State.consensus = Math.max(
    0,
    Math.min(100, sila4State.consensus + points)
  );
}

function renderSila4() {
  const scenario = getSila4Scenario();

  if (!scenario) return;

  document.getElementById("chatScenarioTitle").innerText =
    scenario.title;

  document.getElementById("chatScore").innerText =
    Math.max(0, totalScore);

  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  const consensus = sila4State.consensus;

  const meterHTML = `
    <section class="consensus-card">
      <div class="consensus-heading">
        <div>
          <strong>🕊️ Consensus Meter</strong>
          <small>Indikator kondisi musyawarah</small>
        </div>
        <strong class="consensus-number">${consensus}%</strong>
      </div>

      <div class="consensus-track">
        <div class="consensus-fill"
          style="width: ${consensus}%"></div>
      </div>

      <div class="consensus-status">
        ${getSila4ConsensusLabel(consensus)}
      </div>
    </section>
  `;

  const comment = scenario.comments[sila4State.commentIndex];

  if (sila4State.phase === "classify") {
    chatBody.innerHTML = `
      ${meterHTML}

      <section class="townhall-topic">
        <span class="townhall-kicker">RUANG MUSYAWARAH DIGITAL</span>
        <h3>${scenario.topic}</h3>
        <p>
          Tahap 1 — Deteksi Etika Diskusi
        </p>
        <small>
          Kenali pola komentar sebelum mengambil tindakan moderasi.
        </small>
      </section>

      ${renderSila4Comment(comment)}

      <div class="townhall-instruction">
        Menurutmu, jenis komentar ini termasuk apa?
      </div>

      <div id="sila4Feedback" aria-live="polite"></div>
    `;

    gameFooter.innerHTML = `
      <div class="townhall-choice-grid">
        <button class="townhall-btn classify"
          data-type="ad-hominem">
          🎯 Ad Hominem
          <small>Menyerang pribadi</small>
        </button>

        <button class="townhall-btn classify"
          data-type="strawman">
          🪞 Strawman
          <small>Memelintir argumen</small>
        </button>

        <button class="townhall-btn classify"
          data-type="logical">
          💡 Argumen Logis
          <small>Alasan yang relevan</small>
        </button>
      </div>
    `;

    gameFooter.querySelectorAll("[data-type]").forEach(button => {
      button.onclick = () => {
        classifySila4Comment(button.dataset.type);
      };
    });

  } else if (sila4State.phase === "moderate") {
    chatBody.innerHTML = `
      ${meterHTML}

      <section class="townhall-topic">
        <span class="townhall-kicker">TAHAP 2 — MODERASI</span>
        <h3>${scenario.topic}</h3>
        <p>
          Pilih tindakan yang sesuai dengan isi komentar.
        </p>
      </section>

      ${renderSila4Comment(comment)}

      <div class="townhall-instruction">
        Apa tindakan moderasi yang paling tepat?
      </div>

      <div id="sila4Feedback" aria-live="polite"></div>
    `;

    gameFooter.innerHTML = `
      <div class="townhall-choice-grid">
        <button class="townhall-btn pin" data-action="pin">
          📌 Pin / Highlight
          <small>Utamakan argumen konstruktif</small>
        </button>

        <button class="townhall-btn mediate" data-action="mediate">
          💬 Catatan Mediasi
          <small>Arahkan kembali diskusi</small>
        </button>

        <button class="townhall-btn hide" data-action="hide">
          🚫 Sembunyikan
          <small>Untuk pelanggaran aturan</small>
        </button>
      </div>
    `;

    gameFooter.querySelectorAll("[data-action]").forEach(button => {
      button.onclick = () => {
        moderateSila4Comment(button.dataset.action);
      };
    });

  } else if (sila4State.phase === "solution") {
    renderSila4Solution(scenario, meterHTML);

  } else if (sila4State.phase === "result") {
    renderSila4ScenarioResult(scenario);
  }
}

function renderSila4Comment(comment) {
  return `
    <article class="townhall-comment">
      <div class="townhall-comment-author">
        <span class="townhall-comment-avatar">${comment.avatar}</span>
        <div>
          <strong>${comment.author}</strong>
          <small>Peserta diskusi kampus</small>
        </div>
      </div>

      <p>${comment.text}</p>
    </article>
  `;
}

function classifySila4Comment(answer) {
  const scenario = getSila4Scenario();
  const comment = scenario.comments[sila4State.commentIndex];
  const correct = answer === comment.type;

  sila4State.classifications[comment.id] = answer;

  if (correct) {
    totalScore = Math.min(100, totalScore + 5);
    updateSila4Consensus(3);
  } else {
    totalScore = Math.max(0, totalScore - 5);
    updateSila4Consensus(-3);
  }

  sila4State.feedback = correct
    ? `Benar! ${comment.explanation}`
    : `Belum tepat. ${comment.explanation}`;

  sila4State.commentIndex++;

  if (sila4State.commentIndex >= scenario.comments.length) {
    sila4State.phase = "moderate";
    sila4State.commentIndex = 0;
  }

  renderSila4();
  showToast(correct
    ? "Identifikasi komentar tepat!"
    : "Pelajari kembali karakteristik komentar.");
}

function moderateSila4Comment(action) {
  const scenario = getSila4Scenario();
  const comment = scenario.comments[sila4State.commentIndex];
  const correct = action === comment.bestAction;

  sila4State.actions[comment.id] = action;

  if (correct) {
    totalScore = Math.min(100, totalScore + 5);
    updateSila4Consensus(10);
  } else {
    totalScore = Math.max(0, totalScore - 5);
    updateSila4Consensus(-8);
  }

  sila4State.feedback = correct
    ? "Tindakan moderasi tepat dan mendukung diskusi yang sehat."
    : "Tindakan ini kurang sesuai. Pertimbangkan isi komentar dan aturan diskusi.";

  sila4State.commentIndex++;

  if (sila4State.commentIndex >= scenario.comments.length) {
    sila4State.phase = "solution";
  }

  renderSila4();
  showToast(correct
    ? "Moderasi tepat!"
    : "Coba evaluasi kembali tindakan moderasimu.");
}

function renderSila4Solution(scenario, meterHTML) {
  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    ${meterHTML}

    <section class="townhall-topic">
      <span class="townhall-kicker">TAHAP 3 — MENCAPAI MUFAKAT</span>
      <h3>Temukan Jalan Tengah</h3>
      <p>
        Berdasarkan diskusi yang telah dimoderasi, pilih solusi
        yang mempertimbangkan kebutuhan dan keberatan berbagai pihak.
      </p>
    </section>

    <div class="townhall-summary">
      <strong>📝 Rangkuman musyawarah</strong>
      <ul>
        <li>Kebutuhan mahasiswa perlu didengarkan.</li>
        <li>Keamanan dan biaya harus dipertimbangkan.</li>
        <li>Keputusan sebaiknya diuji dan dievaluasi bersama.</li>
      </ul>
    </div>

    <div id="sila4Feedback" aria-live="polite"></div>
  `;

  gameFooter.innerHTML = `
    <div class="townhall-solution-list">
      ${scenario.solutions.map((solution, index) => `
        <button class="townhall-solution-btn"
          data-solution="${solution.id}">
          <span class="townhall-solution-number">${index + 1}</span>
          <span>${solution.title}</span>
        </button>
      `).join("")}
    </div>
  `;

  gameFooter.querySelectorAll("[data-solution]").forEach(button => {
    button.onclick = () => {
      chooseSila4Solution(button.dataset.solution);
    };
  });
}

function chooseSila4Solution(solutionId) {
  const scenario = getSila4Scenario();

  const solution = scenario.solutions.find(
    item => item.id === solutionId
  );

  if (!solution) return;

  sila4State.selectedSolution = solutionId;

  if (solution.correct) {
    totalScore = Math.min(100, totalScore + 10);
    updateSila4Consensus(15);
  } else {
    totalScore = Math.max(0, totalScore - 10);
    updateSila4Consensus(-10);
  }

  sila4State.feedback = solution.explanation;
  sila4State.phase = "result";

  renderSila4();
}

function renderSila4ScenarioResult(scenario) {
  const solution = scenario.solutions.find(
    item => item.id === sila4State.selectedSolution
  );

  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    <section class="townhall-result">
      <div class="townhall-result-icon">
        ${solution.correct ? "🤝" : "🗣️"}
      </div>

      <h3>
        ${solution.correct ? "Mufakat Tercapai!" : "Musyawarah Perlu Diperbaiki"}
      </h3>

      <p>${solution.explanation}</p>

      <div class="townhall-result-stats">
        <div>
          <small>Skor Etika</small>
          <strong>${Math.max(0, totalScore)}%</strong>
        </div>
        <div>
          <small>Consensus Meter</small>
          <strong>${sila4State.consensus}%</strong>
        </div>
      </div>

      <p class="townhall-reflection">
        Moderator yang baik tidak harus membuat semua orang memiliki
        pendapat sama. Tugasnya adalah menjaga dialog yang adil,
        menghormati perbedaan, dan membantu kelompok menemukan
        keputusan yang dapat dipertanggungjawabkan.
      </p>
    </section>
  `;

  const hasNext = currentStep < sila4Scenarios.length - 1;

  gameFooter.innerHTML = `
    <button class="primary-btn full py-2 fw-semibold"
      id="nextSila4Scenario">
      ${hasNext ? "Skenario Berikutnya ➔" : "Lihat Hasil Akhir 🏆"}
    </button>
  `;

  document.getElementById("nextSila4Scenario").onclick = () => {
    if (hasNext) {
      currentStep++;
      loadSila4Scenario();
    } else {
      showSila4FinalResult();
    }
  };
}

function showSila4FinalResult() {
  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    <section class="townhall-result">
      <div class="townhall-result-icon">🏛️</div>
      <h3>Digital Town Hall Selesai!</h3>
      <div class="townhall-final-score">
        ${Math.max(0, totalScore)}%
      </div>
      <p>
        Kamu telah menyelesaikan tiga latihan moderasi diskusi digital.
        Terus praktikkan musyawarah, sikap adil, dan penghormatan
        terhadap perbedaan pendapat.
      </p>
    </section>
  `;

  gameFooter.innerHTML = `
    <button class="primary-btn full py-2 fw-semibold"
      id="retrySila4">
      Ulangi Mini Game 🔄
    </button>
  `;

  document.getElementById("retrySila4").onclick = () => {
    initGame();
  };
}

//================================ LOGIKA SILA 5 (Digital Equity Dashboard) =================

let sila5Indicators = {
  creator: 50,
  access: 50,
  fairness: 50
};

let sila5History = [];

function resetSila5State() {
  sila5Indicators = {
    creator: 50,
    access: 50,
    fairness: 50
  };

  sila5History = [];
}

function clampSila5(value) {
  return Math.max(0, Math.min(100, value));
}

function getSila5IndicatorHTML() {
  const indicators = [
    {
      key: "creator",
      label: "Hak Pencipta",
      icon: "🎨"
    },
    {
      key: "access",
      label: "Akses Publik",
      icon: "🌐"
    },
    {
      key: "fairness",
      label: "Keadilan Distribusi",
      icon: "⚖️"
    }
  ];

  return `
    <section class="equity-dashboard">
      <div class="equity-dashboard-heading">
        <span>📊 INDEKS KEADILAN DIGITAL</span>
        <small>Nilai awal: 50</small>
      </div>

      ${indicators.map(item => `
        <div class="equity-meter">
          <div class="equity-meter-label">
            <span>${item.icon} ${item.label}</span>
            <strong>${sila5Indicators[item.key]}%</strong>
          </div>

          <div class="equity-meter-track">
            <div
              class="equity-meter-fill equity-${item.key}"
              style="width: ${sila5Indicators[item.key]}%">
            </div>
          </div>
        </div>
      `).join("")}
    </section>
  `;
}

function loadSila5Scenario() {
  const scenario = sila5Scenarios[currentStep];

  if (!scenario) return;

  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  document.getElementById("chatScenarioTitle").innerText =
    scenario.title;

  document.getElementById("chatScore").innerText =
    Math.round(
      (
        sila5Indicators.creator +
        sila5Indicators.access +
        sila5Indicators.fairness
      ) / 3
    );

  chatBody.innerHTML = `
    ${getSila5IndicatorHTML()}

    <section class="equity-case">
      <div class="equity-case-top">
        <span class="equity-case-icon">${scenario.icon}</span>

        <div>
          <span class="equity-case-category">
            ${scenario.category}
          </span>
          <h3>${scenario.title}</h3>
        </div>
      </div>

      <p>${scenario.description}</p>

      <div class="equity-question">
        💭 Kebijakan apa yang paling adil bagi semua pihak?
      </div>
    </section>

    <div class="equity-stage-label">
      TENTUKAN KEBIJAKAN
    </div>
  `;

  gameFooter.innerHTML = `
    <div class="equity-choice-list">
      ${scenario.choices.map((choice, index) => `
        <button
          type="button"
          class="equity-choice"
          data-equity-choice="${index}">

          <span class="equity-choice-number">${index + 1}</span>

          <span class="equity-choice-content">
            <strong>${choice.title}</strong>
            <small>${choice.description}</small>
          </span>

          <span class="equity-choice-arrow">→</span>
        </button>
      `).join("")}
    </div>
  `;

  gameFooter.querySelectorAll("[data-equity-choice]").forEach(button => {
    button.addEventListener("click", () => {
      const choiceIndex = Number(button.dataset.equityChoice);
      handleSila5Choice(choiceIndex);
    });
  });
}

function handleSila5Choice(choiceIndex) {
  const scenario = sila5Scenarios[currentStep];
  const choice = scenario.choices[choiceIndex];

  if (!choice) return;

  // Perbarui ketiga indikator berdasarkan kebijakan yang dipilih.
  Object.keys(choice.impact).forEach(key => {
    sila5Indicators[key] = clampSila5(
      sila5Indicators[key] + choice.impact[key]
    );
  });

  sila5History.push({
    scenario: scenario.title,
    choice: choice.title,
    feedback: choice.feedback
  });

  const average = Math.round(
    (
      sila5Indicators.creator +
      sila5Indicators.access +
      sila5Indicators.fairness
    ) / 3
  );

  document.getElementById("chatScore").innerText = average;

  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  chatBody.innerHTML = `
    ${getSila5IndicatorHTML()}

    <section class="equity-feedback">
      <div class="equity-feedback-icon">📋</div>

      <span class="equity-case-category">
        HASIL KEBIJAKAN
      </span>

      <h3>${choice.title}</h3>

      <p>${choice.feedback}</p>

      <div class="equity-impact-list">
        ${Object.entries(choice.impact).map(([key, value]) => {
          const labels = {
            creator: "Hak Pencipta",
            access: "Akses Publik",
            fairness: "Keadilan Distribusi"
          };

          return `
            <div class="equity-impact-item">
              <span>${labels[key]}</span>
              <strong class="${value >= 0 ? "impact-positive" : "impact-negative"}">
                ${value > 0 ? "+" : ""}${value}
              </strong>
            </div>
          `;
        }).join("")}
      </div>

      <p class="equity-reflection">
        Nilai indikator menunjukkan dampak kebijakan dalam simulasi,
        bukan penilaian mutlak terhadap suatu pihak.
      </p>
    </section>
  `;

  const hasNext = currentStep < sila5Scenarios.length - 1;

  gameFooter.innerHTML = `
    <button
      type="button"
      class="primary-btn full py-2 fw-semibold"
      id="nextSila5Scenario">

      ${hasNext
        ? "Evaluasi Kasus Berikutnya ➔"
        : "Lihat Hasil Akhir 🏆"}
    </button>
  `;

  document.getElementById("nextSila5Scenario").onclick = () => {
    if (hasNext) {
      currentStep++;
      loadSila5Scenario();
    } else {
      showSila5FinalResult();
    }
  };
}

function showSila5FinalResult() {
  const chatBody = document.getElementById("chatBody");
  const gameFooter = document.getElementById("gameFooter");

  const creator = sila5Indicators.creator;
  const access = sila5Indicators.access;
  const fairness = sila5Indicators.fairness;

  const average = Math.round(
    (creator + access + fairness) / 3
  );

  const lowest = Math.min(creator, access, fairness);

  let resultTitle;
  let resultIcon;
  let resultMessage;

  if (lowest >= 65) {
    resultTitle = "Ekosistem Digital Berkeadilan!";
    resultIcon = "🏆";
    resultMessage =
      "Kamu berhasil menjaga hak pencipta, memperluas akses publik, dan mendorong distribusi yang adil.";
  } else if (average >= 60) {
    resultTitle = "Kemajuan yang Baik";
    resultIcon = "⚖️";
    resultMessage =
      "Kebijakanmu sudah menunjukkan kemajuan, tetapi masih ada indikator keadilan yang perlu diperhatikan.";
  } else {
    resultTitle = "Perlu Evaluasi Kebijakan";
    resultIcon = "🔎";
    resultMessage =
      "Beberapa keputusanmu menimbulkan ketimpangan. Evaluasi kembali dampaknya terhadap pencipta dan masyarakat.";
  }

  chatBody.innerHTML = `
    <section class="equity-final">
      <div class="equity-final-icon">${resultIcon}</div>

      <span class="equity-case-category">
        MISI DIGITAL EQUITY LAB SELESAI
      </span>

      <h2>${resultTitle}</h2>

      <div class="equity-final-score">${average}%</div>
      <p class="equity-final-score-label">
        Indeks Keseimbangan Keadilan Digital
      </p>

      ${getSila5IndicatorHTML()}

      <p>${resultMessage}</p>

      <div class="equity-lessons">
        <strong>💡 Refleksi Sila ke-5</strong>
        <ul>
          <li>Hak pencipta harus dihormati.</li>
          <li>Akses digital perlu mempertimbangkan kelompok yang memiliki keterbatasan.</li>
          <li>Distribusi manfaat dan beban sebaiknya dilakukan secara adil.</li>
        </ul>
      </div>
    </section>
  `;

  gameFooter.innerHTML = `
    <button
      type="button"
      class="primary-btn full py-2 fw-semibold"
      id="retrySila5">
      Ulangi Misi 🔄
    </button>
  `;

  document.getElementById("retrySila5").onclick = () => {
    currentStep = 0;
    resetSila5State();
    loadSila5Scenario();
  };
}


// Jalankan game saat pertama kali dimuat
document.addEventListener('DOMContentLoaded', initGame);