'use client'

import MainLayoutPage from "@/components/mainLayout"
import { M_Matpel_create, M_Matpel_delete, M_Matpel_getAll, M_Matpel_update } from "@/models/M_Matpel"
import { faAnglesLeft, faAnglesRight, faArrowRight, faCheck, faCheckCircle, faCheckSquare, faClock, faDownload, faEdit, faFile, faFilter, faPlus, faPowerOff, faSave, faSpinner, faTrash, faUpload, faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import * as XLSX from 'xlsx'
import Papa from 'papaparse'

const formatForm = {
    jurusan_mapel: '',
    nama_mapel: '',
    kategori_mapel: '',
    is_parent: true,
    parent_from_id_mapel: '',
    is_mapel: false,
    aktif: false    

}



const showModal = (id) => {
    return {
        show: (type) => {
            if(type === 'show') {
                document.getElementById(id).showModal()
            }else{
                document.getElementById(id).close()
            }
        }
    }
}

export default function MataPelajaranPage() {
    const router = useRouter()

    const [formTambah, setFormTambah] = useState(formatForm)

    const [dataMapel, setDataMapel] = useState([])
    const [loadingFetch, setLoadingFetch] = useState('')
    const [filteredDataMapel, setFilteredDataMapel] = useState([])
    const [searchDataMapel, setSearchDataMapel] = useState('')
    const [pagination, setPagination] = useState(1)
    const [totalList, setTotalList] = useState(10)
    const [selectedDataMapel, setSelectedDataMapel] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const [filterDataMapel, setFilterDataMapel] = useState({
        jurusan_mapel: [], kategori_mapel: [], parent_from_id_mapel: [], aktif: []
    })

    const [fileData, setFileData] = useState()
    const [infoFileData, setInfoFileData] = useState({
        ekstensi: '', ukuran: '', jumlahData: '', jumlahKolom: ''
    })
    const [uploadedFile, setUploadedFile] = useState(null)
    const [namaSheet, setNamaSheet] = useState('')
    const [loadingReadFormat, setLoadingReadFormat] = useState('')
    const [listSheet, setListSheet] = useState([])
    const [uploadedData, setUploadedData] = useState(null)

    const getDataMapel = async () => {
        setLoadingFetch('loading')
        const response = await M_Matpel_getAll()

        if(response.success) {
            setDataMapel(response.data)
            setFilteredDataMapel(response.data)
        }
        setLoadingFetch('fetched')
    }

    useEffect(() => {
        getDataMapel()
    }, [])

    const submitTambah = async (e, modal) => {
        e.preventDefault()

        showModal(modal).show('hide')

        Swal.fire({
            title: 'Sedang memproses data',
            timer: 60000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: async () => {
                const response = await M_Matpel_create(formTambah)
                if(response.success) {
                    setSelectedDataMapel([])
                    setSelectAll(false)
                    setFormTambah(formatForm)
                    await getDataMapel()
                    Swal.fire({
                        title: 'Sukses',
                        text: response.message,
                        icon: 'success'
                    })
                }else{
                    Swal.fire({
                        title: 'Gagal',
                        text: response.message,
                        icon: 'error'
                    })
                }
            }
        })
    }

    const handleFilterDataMapel = (kolom, value) => {
        setFilterDataMapel(state => {
            let updatedState
            let updatedFilter
            if(state[kolom].includes(value)) {
                updatedFilter = state[kolom].filter(v => v !== value)
                updatedState = {...state, [kolom]: updatedFilter}
            }else{
                updatedState = {...state, [kolom]: [...state[kolom], value]}
            }

            return updatedState
        })
    }

    const submitDeleteMapel = async (id_mapel) => {
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: 'Jika terdapat Nilai yang berhubungan dengan Mata Pelajaran tersebut, Nilai tersebut akan ikut dihapus!',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
        }).then(answer => {
            if(answer.isConfirmed) {
                Swal.fire({
                    title: 'Sedang memproses data',
                    timer: 60000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: async () => {
                        const response = await M_Matpel_delete(id_mapel ? id_mapel : selectedDataMapel)

                        if(response.success) {
                            setSelectedDataMapel([])
                            setSelectAll(false)
                            await getDataMapel()
                            Swal.fire({
                                title: 'Sukses',
                                text: response.message,
                                icon: 'success'
                            })
                        }else{
                            Swal.fire({
                                title: 'Gagal',
                                text: response.message,
                                icon: 'error'
                            })
                        }
                    }
                })
            }
        })
    }

    const handleSelectDataMapel = (id_mapel) => {
        setSelectedDataMapel(state => {
            if(state.includes(id_mapel)) {
                return state.filter(value => value !== id_mapel)
            }else{
                return [...state, id_mapel]
            }
        })
    }

    useEffect(() => {
        if(selectAll) {
            setSelectedDataMapel(filteredDataMapel.map(value => value['id_mapel']))
        }else{
            setSelectedDataMapel([])
        }
    }, [selectAll])

    const submitEditDataMapel = (e, modal, id_mapel) => {
        e.preventDefault()

        const payload = {
            jurusan_mapel: e.target[0].value,
            nama_mapel: e.target[1].value,
            kategori_mapel: e.target[2].value,
            is_parent: e.target[3].checked,
            parent_from_id_mapel: e.target[3].checked === false ? e.target[4].value : '',
            is_mapel: e.target[5].checked,
            aktif: e.target[6].checked
        }

        if(payload['is_parent'] === false && payload['parent_from_id_mapel'] === '') {
            return
        }

        showModal(modal).show('hide')

        Swal.fire({
            title: 'Sedang memproses data',
            timer: 60000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: async () => {
                const response = await M_Matpel_update(id_mapel, payload)

                if(response.success) {
                    setSelectedDataMapel([])
                    setSelectAll(false)
                    await getDataMapel()
                    Swal.fire({
                        title: 'Sukses',
                        text: response.message,
                        icon: 'success'
                    })
                }else{
                    Swal.fire({
                        title: 'Gagal',
                        text: response.message,
                        icon: 'error'
                    }).then(() => {
                        showModal(modal).show('show')
                    })
                }
            }
        })
    }

    useEffect(() => {
        let updatedData = dataMapel

        if(filterDataMapel['jurusan_mapel'].length > 0) {
            updatedData = updatedData.filter(v => filterDataMapel['jurusan_mapel'].includes(v['jurusan_mapel']))
        }

        if(filterDataMapel['kategori_mapel'].length > 0) {
            updatedData = updatedData.filter(v => filterDataMapel['kategori_mapel'].includes(v['kategori_mapel']))
        }

        if(filterDataMapel['parent_from_id_mapel'].length > 0) {
            updatedData = updatedData.filter(v => filterDataMapel['parent_from_id_mapel'].includes(v['parent_from_id_mapel']))
        }

        if(filterDataMapel['aktif'].length > 0) {
            updatedData = updatedData.filter(v => filterDataMapel['aktif'].includes(v['aktif']))
        }

        if(searchDataMapel !== '') {
            updatedData = updatedData.filter(v => 
                v['nama_mapel'].toLowerCase().includes(searchDataMapel.toLowerCase())
            )
        }

        setFilteredDataMapel(updatedData)


    }, [filterDataMapel, searchDataMapel])

    const handleChangeFile = async (file) => {
        if(file) {
            setFileData(file)

            const fileName = file.name
            const fileExtension = fileName.split('.').pop()
            if(fileExtension === 'xlsx'){
                const sheets = await xlsx_getSheets(file)
                setNamaSheet('')
                setListSheet(Object.keys(sheets))
            }else{
                setNamaSheet('')
                setListSheet([])
                setIsUploadedDataValid(false)
            }
        }else{
            setListSheet([])
        }
    }

    const handleImportFile = async (e, modal) => {
        e.preventDefault()

        const fileName = fileData.name
        const fileExtension = fileName.split('.').pop()
        setInfoFileData(state => ({...state,  ekstensi: fileExtension}))
        setLoadingReadFormat('loading')

        if(fileExtension === 'xlsx') {
            try {
                const response = await readXLSXFile(fileData)

                setInfoFileData(state => ({...state, jumlahData: response.data.length, jumlahKolom: Object.keys(response.data[0]).length}))
                let isNotSimilar = false
                Object.keys(response.data[0]).forEach(value => {
                    if(Object.keys(formatForm).includes(value === false)) {
                        if(isNotSimilar === false) {
                            isNotSimilar = true
                        }
                    }
                })

                if(isNotSimilar) {
                    setUploadedData(null)
                    setUploadedFile(null)
                    setLoadingReadFormat('fetched')
                    document.getElementById(modal).close()
                    return Swal.fire({
                        title: 'Gagal',
                        icon: 'error',
                        message: 'Terdapat kolom yang tidak sesuai!'
                    }).then(() => {
                        document.getElementById(modal).showModal()
                    })
                }

                setUploadedData(() => {
                    if(response.data.length < 50) {
                        return {
                            status: 'ready',
                            dataArr: [
                                {
                                    status: 'ready',
                                    statusText: `Data dari 1 sampai ${response.data.length}`,
                                    data: response.data
                                }
                            ]
                        }
                    }

                    const numBatches = Math.ceil(response.data.length / 50)
                    return {
                        status: 'ready',
                        dataArr: () => {
                            const batchList = []
                            for(let i = 0; i < numBatches; i++) {
                                const start = i * 50
                                const end = Math.min(start + 50, response.data.length)
                                const batch = response.data.slice(start, end)
                                batchList.push({
                                    status: 'ready',
                                    statusText: `Data dari ${start} sampai ${batch.length}`,
                                    data: batch
                                })
                            }
                            return batchList
                        }
                    }
                })
                setUploadedFile(fileData)
                setLoadingReadFormat('fetched')
            } catch (error) {
                console.log(error)
                setUploadedFile(null)
                setUploadedData([])

                setLoadingReadFormat('fetched')
            }
        }

        if(fileExtension === 'csv') {
            Papa.parse(fileData, {
                worker: true,
                header: true,
                complete: async result => {
                    const formattedData = result.data.map(row => {
                        const newRow = {};
                        Object.keys(row).forEach(key => {
                            if(key === 'id_rombel') {
                                newRow[key.toLowerCase()] = String(row[key].trim().replace(/\s+/g, ' '))
                            }else if(key === 'tgl_lahir_siswa'){
                                newRow[key.toLowerCase()] = `${row[key].split('/')[2]}-${row[key].split('/')[0]}-${row[key].split('/')[1]}`
                            }else if(key === 'pekerjaan_ayah') {
                                newRow[key.toLowerCase()] = typeof(row[key]) !== 'undefined' || row[key] !== '0' || row[key] !== 0 || row[key] !== '#N/A' ? (row[key] === 'DI RUMAH SAJA' ? 'TIDAK BEKERJA' : String(row[key])) : ''
                            }else if(key === 'pekerjaan_ibu') {
                                newRow[key.toLowerCase()] = typeof(row[key]) !== 'undefined' || row[key] !== '0' || row[key] !== 0 || row[key] !== '#N/A' ? (row[key] === 'DI RUMAH SAJA' ? 'TIDAK BEKERJA' : String(row[key])) : ''
                            }else if(key === 'pekerjaan_wali') {
                                newRow[key.toLowerCase()] = typeof(row[key]) !== 'undefined' || row[key] !== '0' || row[key] !== 0 || row[key] !== '#N/A' ? (row[key] === 'DI RUMAH SAJA' ? 'TIDAK BEKERJA' : String(row[key])) : ''
                            }else{
                                newRow[key.toLowerCase()] = row[key] === 0 || row[key] === '0' || typeof row[key] === 'undefined' || row[key] === '#N/A' ? '' : row[key];
                            }
                        });
                        return newRow;
                    });
            
                    setInfoFileData(state => ({
                        ...state, 
                        jumlahData: formattedData.length, 
                        jumlahKolom: Object.keys(formattedData[0]).length
                    }));
            
                    let isNotSimilar = false;
                    Object.keys(formattedData[0]).forEach(value => {
                        if (!Object.keys(formatForm).includes(value)) {
                            if (!isNotSimilar) {
                                isNotSimilar = true;
                            }
                        }
                    });
            
                    setUploadedFile(fileData);
            
                    if (isNotSimilar) {
                        setUploadedData([]);
                        setLoadingReadFormat('fetched');
                        document.getElementById(modal).close();
                        return Swal.fire({
                            title: 'Gagal',
                            icon: 'error',
                            text: 'Terdapat kolom yang tidak sesuai!'
                        }).then(() => {
                            document.getElementById(modal).showModal();
                        });
                    }
                    
                    setIsUploadedDataValid(true)
                    setUploadedData(formattedData);
                    setLoadingReadFormat('fetched');
                },
                error: async (error, file) => {
                    console.log(error);
                    console.log(file);
                    setUploadedData([]);
                    setLoadingReadFormat('fetched');
                    return Swal.fire({
                        title: 'Gagal',
                        icon: 'error',
                        text: 'Terdapat error disaat sedang memproses data'
                    }).then(() => {
                        document.getElementById(modal).showModal();
                    });
                }
            });
        }
    }

    const readXLSXFile = async file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = e => {
                const datas = new Uint8Array(e.target.result)
                const workbook = XLSX.read(datas, { type: 'array' })
                const worksheet = workbook.Sheets[namaSheet]
                const records = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
                if(typeof(worksheet) === 'undefined') {
                    reject({
                        success: false,
                        message: 'Sheet tidak ada!'
                    })
                }

                if(records.length > 1) {
                    const columns = records[0]
                    const dataObjects = records.slice(1).map((row, index) => {
                        if(row.length > 0) {
                            let obj = {}
                            columns.forEach((column, index) => {
                                const newColumn = column.toLowerCase()

                                if(newColumn === 'nama_mapel') {
                                    obj[newColumn] = row[index]
                                }

                                if(newColumn === 'kategori_mapel') {
                                    obj[newColumn] = row[index]
                                }
                            })
                            return obj
                        }else{
                            return null
                        }
                    }).filter(obj => obj !== null)
                    resolve({
                        success: true,
                        message: 'Sheet ditemukan!',
                        data: dataObjects
                    })
                }else{
                    resolve({
                        success: true,
                        message: 'Sheet ditemukan!',
                        data: []
                    })
                }
            }

            reader.onerror = reject

            reader.readAsArrayBuffer(file)
        })
    }

    return (
        <MainLayoutPage>
            <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md">
                <div className="text-xs">
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => document.getElementById('tambah_mapel').showModal()} className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                            <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-inherit opacity-70" />
                            Tambah
                        </button>
                        <dialog id="tambah_mapel" className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                            <div className="modal-box bg-white dark:bg-zinc-900 md:max-w-[700px] rounded border dark:border-zinc-800">
                                <form method="dialog">
                                    <button onClick={() => setFormTambah(formatForm)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Tambah Mata Pelajaran</h3>
                                <hr className="my-2 opacity-0" />
                                <form onSubmit={e => submitTambah(e, 'tambah_mapel')} className="flex flex-col md:flex-row gap-2">
                                    <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-70">
                                                Jurusan
                                            </p>
                                            <div className="w-full md:w-2/3">
                                                <select required value={formTambah['jurusan_mapel']} onChange={e => setFormTambah(state => ({...state, jurusan_mapel: e.target.value}))} className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                    <option value={''} disabled >-- Pilih Jurusan --</option>
                                                    <option value="Semua">Semua</option>
                                                    <option value="TKJ">TKJ</option>
                                                    <option value="DPIB">DPIB</option>
                                                    <option value="GEO">GEO</option>
                                                    <option value="TITL">TITL</option>
                                                    <option value="TPM">TPM</option>
                                                    <option value="TKR">TKR</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-70">
                                                Nama
                                            </p>
                                            <div className="w-full md:w-2/3">
                                                <input type="text"  required value={formTambah['nama_mapel']} onChange={e => setFormTambah(state => ({...state, nama_mapel: e.target.value}))} placeholder="Nama Mata Pelajaran" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-70">
                                                Kategori
                                            </p>
                                            <div className="w-full md:w-2/3">
                                                <input  required value={formTambah['kategori_mapel']} onChange={e => setFormTambah(state => ({...state, kategori_mapel: e.target.value}))} type="text" placeholder="Kategori" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-70">
                                                Apakah Induk?
                                            </p>
                                            <div className="w-full md:w-2/3 flex items-center gap-3">
                                            Tidak
                                                <input type="checkbox" checked={formTambah['is_parent']} onChange={e => setFormTambah(state => ({...state, is_parent: !state.is_parent}))}  className="toggle toggle-success toggle-sm" />
                                                Ya
                                            </div>
                                        </div>
                                        {!formTambah['is_parent'] && (
                                            <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                <p className="w-full md:w-1/3 opacity-70">
                                                    Induk dari
                                                </p>
                                                <div className="w-full md:w-2/3">
                                                    <select required value={formTambah['parent_from_id_mapel']} onChange={e => setFormTambah(state => ({...state, parent_from_id_mapel: e.target.value}))}  className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                        <option value={''} disabled >-- Pilih Mata Pelajaran --</option>
                                                        {dataMapel.map((value, index) => (
                                                            <option key={index} value={value['id_mapel']}>{value['nama_mapel']}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                            <p className="w-full md:w-1/3 opacity-70">
                                                Memiliki Daftar Nilai?
                                            </p>
                                            <div className="w-full md:w-2/3 flex items-center gap-3">
                                                Tidak
                                                <input type="checkbox" checked={formTambah['is_mapel']} onChange={e => setFormTambah(state => ({...state, is_mapel: !state.is_mapel}))}  className="toggle toggle-success toggle-sm" />
                                                Ya
                                            </div>
                                        </div>
                                        {formTambah['is_mapel'] && (
                                            <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                <p className="w-full md:w-1/3 opacity-70">
                                                    Aktif
                                                </p>
                                                <div className="w-full md:w-2/3 flex items-center gap-3">
                                                    Tidak
                                                    <input type="checkbox"  checked={formTambah['is_mapel'] ? formTambah['aktif'] : true} onChange={e => setFormTambah(state => ({...state, aktif: !state.aktif}))}  className="toggle toggle-success toggle-sm" />
                                                    Ya
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="py-3 px-2">
                                            <button type="submit" className="px-3 py-2 rounded bg-green-600 hover:bg-green-400 focus:bg-green-700 flex items-center justify-center w-fit gap-3 text-white">
                                                <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                                Simpan
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                        {/* <button type="button" onClick={() => document.getElementById('import_mapel').showModal()} className="w-full md:w-fit px-3 py-2 rounded border dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-3 font-medium ease-out duration-300">
                            <FontAwesomeIcon icon={faDownload} className="w-3 h-3 text-inherit opacity-70" />
                            Import
                        </button>
                        <dialog id="import_mapel" className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                            <div className="modal-box bg-white dark:bg-zinc-900 md:max-w-[700px] rounded border dark:border-zinc-800">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Import Mata Pelajaran</h3>
                                <hr className="my-2 opacity-0" />
                                <p className="opacity-60">
                                    File harus <span className="opacity-100">.xlsx</span> atau .csv
                                </p>
                                <hr className="my-1 opacity-0" />
                                <input type="file" className="file-input file-input-ghost file-input-bordered file-input-sm w-full" />
                                <hr className="my-1 opacity-0" />
                                <div className="flex items-center gap-2">
                                    <button type="button" className="px-3 py-2 flex items-center justify-center w-full md:w-fit gap-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                                        <FontAwesomeIcon icon={faDownload} className="w-3 h-3 text-inherit" />
                                        Import
                                    </button>
                                    <button type="button" className="px-3 py-2 flex items-center justify-center w-full md:w-fit gap-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                                        <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                        Batal
                                    </button>
                                </div>
                                <div className="space-y-1 my-5 dark:opacity-10">
                                    <hr />
                                    <hr />
                                </div>
                                <div className="divide-y dark:divide-zinc-800">
                                    <div className="flex flex-col md:flex-row  px-5 py-3 md:items-center gap-1">
                                        <p className="w-full md:w-1/3 opacity-60">
                                            File yang digunakan
                                        </p>
                                        <p className="w-full md:w-2/3">
                                            .XLSX
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row px-5 py-3  md:items-center gap-1">
                                        <p className="w-full md:w-1/3 opacity-60">
                                            Jumlah Data
                                        </p>
                                        <p className="w-full md:w-2/3">
                                            100 baris
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row px-5 py-3  md:items-center gap-1">
                                        <p className="w-full md:w-1/3 opacity-60">
                                            Kolom
                                        </p>
                                        <div className="w-full md:w-2/3">
                                            <button type="button" className="hover:underline underline md:no-underline">
                                                Lihat Kolom disini
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row px-5 py-3  md:items-center gap-1">
                                        <p className="w-full md:w-1/3 opacity-60">
                                            Format untuk Import
                                        </p>
                                        <div className="w-full md:w-2/3">
                                            <button type="button" className="hover:underline underline md:no-underline">
                                                Unduh Format disini
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1 my-5 dark:opacity-10">
                                    <hr />
                                    <hr />
                                </div>
                                <button type="button" className="px-3 py-2 flex items-center justify-center w-full md:w-fit gap-3 rounded-md bg-green-500 hover:bg-green-400 text-white  dark:bg-green-500 dark:hover:bg-green-600">
                                    <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                    Simpan
                                </button>
                                <hr className="my-1 opacity-0" />
                                <div className="space-y-2">
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faSpinner} className="w-3 h-3 text-zinc-500 animate-spin" />
                                           
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 text-zinc-500" /> 
                                        <p>
                                            Data dari 1 sampai 50
                                        </p>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 text-green-500" />
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 text-inherit opacity-50" /> 
                                        <p>
                                            Data dari 1 sampai 50
                                        </p>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faXmarkCircle} className="w-3 h-3 text-red-500" />
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 text-inherit opacity-50" /> 
                                        <p>
                                            Data dari 1 sampai 50
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </dialog> */}
                        
                    </div>
                    {dataMapel.length > 0 && (
                        <>
                            <hr className="my-5 dark:opacity-10" />
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faFilter} className="w-3 h-3 text-inherit" />
                                Filter Data
                            </div>
                            <hr className="my-1 opacity-0" />
                            <div className="flex md:flex-row flex-col gap-3">
                                <FontAwesomeIcon icon={faFilter} className="w-3 h-3 text-inherit opacity-0 hidden md:block" />
                                <div className="space-y-3 w-full">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                        <div className="w-full md:w-1/6 opacity-60">
                                            Jurusan
                                        </div>
                                        <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                            {Array.from(new Set(dataMapel.map(value => value['jurusan_mapel']))).map((value, index) => (
                                                <button key={index} type="button" onClick={() => handleFilterDataMapel('jurusan_mapel', value)} className={`flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md ${filterDataMapel.jurusan_mapel.includes(value) ? 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                        <div className="w-full md:w-1/6 opacity-60">
                                            Kategori
                                        </div>
                                        <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                            {Array.from(new Set(dataMapel.map(value => value['kategori_mapel']))).map((value, index) => (
                                                <button key={index} type="button" onClick={() => handleFilterDataMapel('kategori_mapel', value)} className={`flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md ${filterDataMapel.kategori_mapel.includes(value) ? 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                        <div className="w-full md:w-1/6 opacity-60">
                                            Induk dari
                                        </div>
                                        <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                            {Array.from(new Set(dataMapel.filter(value => !value['is_parent']).map(value => value['parent_from_id_mapel']))).map((value, index) => (
                                                <button key={index} type="button" onClick={() => handleFilterDataMapel('parent_from_id_mapel', value)} className={`flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md ${filterDataMapel.parent_from_id_mapel.includes(value) ? 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                                    {dataMapel.find(v => v['id_mapel'] == value)['nama_mapel']}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
                                        <div className="w-full md:w-1/6 opacity-60">
                                            Status
                                        </div>
                                        <div className="w-full md:w-5/6 flex items-center gap-2 relative overflow-auto">
                                            {Array.from(new Set(dataMapel.map(value => value['aktif']))).map((value, index) => (
                                                <button key={index} type="button" onClick={() => handleFilterDataMapel('aktif', value)} className={`flex flex-shrink-0 items-center w-fit gap-3 px-3 py-2 rounded-md ${filterDataMapel.aktif.includes(value) ? 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                                    {value === 1 ? 'Aktif' : 'Tidak Aktif'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </>
                    )}
                    <hr className="my-5 dark:opacity-10" />
                    <div className="relative overflow-auto w-full max-h-[400px] text-xs">
                        <div className="grid grid-cols-12 p-3 rounded-lg border dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 sticky top-0 mb-2">
                            <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                                <input type="checkbox" checked={selectAll} onChange={() => setSelectAll(state => !state)} className="cursor-pointer" />
                                Nama
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Kategori
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Induk
                            </div>
                            <div className="col-span-1 hidden md:flex items-center gap-3">
                                Memiliki Nilai
                            </div>
                            <div className="col-span-1 hidden md:flex items-center gap-3">
                                Jurusan
                            </div>
                            <div className="col-span-2 hidden md:flex items-center gap-3">
                                Status
                            </div>
                            <div className="col-span-5 md:col-span-2 flex items-center gap-3">
                                <input type="text" value={searchDataMapel} onChange={e => setSearchDataMapel(e.target.value)} className="w-full dark:bg-zinc-900 bg-white px-2 py-1 rounded border dark:border-zinc-700" placeholder="Cari disini" />
                            </div>
                        </div>
                        {loadingFetch !== 'fetched' && (
                            <div className="w-full flex justify-center">
                                <div className="loading loading-sm loading-spinner opacity-50"></div>
                            </div>
                        )}
                        {loadingFetch === 'fetched' && dataMapel.length < 1 && (
                            <div className="w-full flex justify-center opacity-50">
                                Data Mata Pelajaran Kosong!
                            </div>
                        )}
                        {filteredDataMapel.slice(pagination === 1 ? totalList - totalList : (totalList * pagination) - totalList, totalList * pagination).map((value, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 ease-out duration-300">
                                <div className="col-span-7 md:col-span-2 flex items-center gap-3">
                                    <input type="checkbox" checked={selectedDataMapel.includes(value['id_mapel'])} onChange={() => handleSelectDataMapel(value['id_mapel'])} className="cursor-pointer" />
                                    {value['nama_mapel']}
                                    <kbd className="kbd kbd-xs dark:bg-zinc-800 border dark:border-zinc-700">
                                        {value['id_mapel']}
                                    </kbd>
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    {value['kategori_mapel']}
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    {value['is_parent']  ? 'Sendiri' : dataMapel.find(v => v['id_mapel'] == value['parent_from_id_mapel'])['nama_mapel']}
                                </div>
                                <div className="col-span-1 hidden md:flex items-center gap-1">
                                    {value['is_mapel'] ? (
                                        <div className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400 flex items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-inherit" />
                                            Ya
                                        </div>
                                    ):(
                                        <div className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                            Tidak
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-1 hidden md:flex items-center gap-1">
                                    {value['jurusan_mapel']}
                                </div>
                                <div className="col-span-2 hidden md:flex items-center gap-3">
                                    {value['aktif'] === 1 ? (
                                        <div className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400 flex items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faPowerOff} className="w-3 h-3 text-inherit" />
                                            Aktif
                                        </div>
                                    ):(
                                        <div className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faPowerOff} className="w-3 h-3 text-inherit" />
                                            Tidak Aktif
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-5 md:col-span-2 flex items-center justify-center md:gap-3 gap-1">
                                    <button type="button" onClick={() => document.getElementById(`info_mapel_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 md:hidden flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faFile} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <dialog id={`info_mapel_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                        <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Informasi Mata Pelajaran</h3>
                                            <hr className="my-2 opacity-0" />
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Jurusan
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            {value['jurusan_mapel']}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Nama
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                        {value['nama_mapel']}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Kategori
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                        {value['kategori_mapel']}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Induk?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            {value['is_parent'] ? (
                                                                <button type="button" className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-inherit" />
                                                                    Ya
                                                                </button>
                                                            ):(
                                                                <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                    Tidak
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {!value['is_parent'] && (
                                                        <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                            <p className="w-full md:w-1/3 opacity-70">
                                                                Induk dari
                                                            </p>
                                                            <div className="w-full md:w-2/3">
                                                                {value['is_parent'] ? 'Sendiri' : dataMapel.find(v => v['id_mapel'] == value['parent_from_id_mapel'])['nama_mapel']}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Memiliki Daftar Nilai?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            {value['is_mapel'] ? (
                                                                <button type="button" className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-inherit" />
                                                                    Ya
                                                                </button>
                                                            ):(
                                                                <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                    Tidak
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Aktif
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            {value['aktif'] ? (
                                                                <button type="button" className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-inherit" />
                                                                    Ya
                                                                </button>
                                                            ):(
                                                                <button type="button" className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-400 flex items-center justify-center gap-2">
                                                                    <FontAwesomeIcon icon={faXmark} className="w-3 h-3 text-inherit" />
                                                                    Tidak
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                                    <button type="button" onClick={() => document.getElementById(`edit_mapel_${index}`).showModal()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faEdit} className="w-3 h-3 text-inherit" />
                                    </button>
                                    <dialog id={`edit_mapel_${index}`} className="modal bg-gradient-to-t dark:from-zinc-950 from-zinc-50">
                                        <div className="modal-box bg-white dark:bg-zinc-900 rounded  border dark:border-zinc-800">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Ubah Mata Pelajaran</h3>
                                            <hr className="my-2 opacity-0" />
                                            <form onSubmit={e => submitEditDataMapel(e, `edit_mapel_${index}`, value['id_mapel'])} className="flex flex-col md:flex-row gap-2">
                                                <div className="w-full divide-y h-fit dark:divide-zinc-800 ">
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Jurusan
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <select required defaultValue={value['jurusan_mapel']} name="ubah_jurusan_mapel" className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <option value={''} disabled >-- Pilih Jurusan --</option>
                                                                <option value="Semua">Semua</option>
                                                                <option value="TKJ">TKJ</option>
                                                                <option value="DPIB">DPIB</option>
                                                                <option value="GEO">GEO</option>
                                                                <option value="TITL">TITL</option>
                                                                <option value="TPM">TPM</option>
                                                                <option value="TKR">TKR</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Nama
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <input type="text"  required defaultValue={value['nama_mapel']} name="ubah_nama_mapel" placeholder="Nama Mata Pelajaran" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Kategori
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <input  required defaultValue={value['kategori_mapel']} name="ubah_kategori_mapel" type="text" placeholder="Kategori" className="input input-bordered w-full input-sm dark:bg-zinc-800 bg-zinc-100" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Apakah Induk?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                        Tidak
                                                            <input type="checkbox" defaultChecked={value['is_parent']} name="ubah_is_parent"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Induk dari
                                                        </p>
                                                        <div className="w-full md:w-2/3">
                                                            <select defaultValue={value['parent_from_id_mapel']} name="ubah_parent_from_mapel"  className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                                                <option value={''} disabled >-- Pilih Mata Pelajaran --</option>
                                                                {dataMapel.map((v, index) => (
                                                                    <option key={index} value={v['id_mapel']}>{v['nama_mapel']}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Memiliki Daftar Nilai?
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            Tidak
                                                            <input type="checkbox" defaultChecked={value['is_mapel']}  name="ubah_is_mapel"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-col md:flex-row px-2 py-3">
                                                        <p className="w-full md:w-1/3 opacity-70">
                                                            Aktif
                                                        </p>
                                                        <div className="w-full md:w-2/3 flex items-center gap-3">
                                                            Tidak
                                                            <input type="checkbox"  defaultChecked={value['is_mapel'] ? value['aktif'] : true} name="ubah_aktif"  className="toggle toggle-success toggle-sm" />
                                                            Ya
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="py-3 px-2">
                                                        <button type="submit" className="px-3 py-2 rounded bg-green-600 hover:bg-green-400 focus:bg-green-700 flex items-center justify-center w-fit gap-3 text-white">
                                                            <FontAwesomeIcon icon={faSave} className="w-3 h-3 text-inherit" />
                                                            Simpan
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                    <button type="button" onClick={() => submitDeleteMapel(value['id_mapel'])} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500/50 hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-inherit" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="my-2 opacity-0" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-xs">
                        <div className="flex p-3 rounded-md border dark:border-zinc-700 items-center w-full md:w-fit divide-x dark:divide-zinc-700 justify-between md:justify-start">
                            <div className="flex items-center gap-2 pr-3  w-full md:w-fit">
                                <FontAwesomeIcon icon={faCheckSquare} className="w-3 h-3 text-inherit" />
                                {selectedDataMapel.length} Data
                            </div>
                            {selectedDataMapel.length > 0 && (
                                <div className="flex items-center justify-center w-full md:w-fit gap-3 px-3">
                                    <button type="button" onClick={() => submitDeleteMapel()} className="w-6 h-6 rounded border dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:border-red-500 dark:hover:border-red-500/50 hover:bg-red-100 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 ease-out duration-200">
                                        <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-inherit" />
                                    </button>
                                </div>
                            )}
                            <p className="pl-3  w-full md:w-fit">
                                Total {dataMapel.length} Data
                            </p>
                        </div>
                        <div className="flex p-3 rounded-md border dark:border-zinc-700 items-center w-full md:w-fit divide-x dark:divide-zinc-700 justify-between md:justify-start">
                            <div className="flex items-center gap-2 pr-3  w-full md:w-fit">
                                <button type="button" onClick={() => setPagination(state => state > 1 ? state - 1 : state)} className="w-5 h-5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faAnglesLeft} className="w-3 h-3 text-inherit" />
                                </button>
                                {pagination}
                                <button type="button" onClick={() => setPagination(state => state < Math.ceil(dataMapel.length / totalList) ? state + 1 : state)} className="w-5 h-5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faAnglesRight} className="w-3 h-3 text-inherit" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 pl-3  w-full md:w-fit">
                                <select value={totalList} onChange={e => setTotalList(e.target.value)} className="select select-bordered w-full select-sm dark:bg-zinc-800 bg-zinc-100">
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPage>
    )
}