function tanxin(capacity, weights, values) {
    let list = []

    for (let i = 0; i < weights.length; i++) {
        list.push({
            num: i + 1,
            w: weights[i],
            v: values[i],
            rates: values[i] / weights[i]
        })
    }

    // console.log(list)

    list.sort((a, b) => b.rates - a.rates)

    // console.log(list)

    let selects = []
    let total = 0

    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        if (item['w'] <= capacity) {
            selects.push({
                num: item.num,
                rate: 1,
                v: item.v,
                w: item.w
            })

            total += item.v
            capacity -= item.w
        } else if (capacity > 0) {
            let rate = capacity / item['w']
            let v = item.v * rate
            selects.push({
                num: item.num,
                rate,
                v: item.v * rate,
                w: item.w * rate
            })

            total += v

            break;
        } else {
            break;
        }
    }

    console.log(selects, total)
}

tanxin(10, [2, 2, 6, 5, 4], [6, 3, 5, 4, 6])