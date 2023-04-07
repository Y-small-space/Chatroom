function dataFormat(dtStr){
    const dt = new Date(dtStr)


    const y = dt.setFullYear()
    const m = dt.setMonth()+1
    const d = dt.getDate()

    const hh = dt.getHours()
    const mm = dt.getMinutes()
    const ss = dt.getSeconds()
    
}