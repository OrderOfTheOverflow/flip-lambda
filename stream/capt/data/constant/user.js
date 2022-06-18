const JOB_LIST = [
    'Karyawan Swasta',
    'Pengusaha',
    'Ibu Rumah Tangga',
    'PNS Eselon 1',
    'PNS Selain Eselon 1',
    'Pejabat Negara',
    'Pengurus atau Anggota Partai Politik',
    'Pengurus Yayasan',
    'Pekerja Lepas',
    'TKI',
    'Lainnya'
];

export const getJob = () => {
    return JOB_LIST[Math.floor(Math.random() * JOB_LIST.length)];
};
