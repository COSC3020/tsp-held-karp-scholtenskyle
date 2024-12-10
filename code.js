function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    let newMin = Infinity;
    let cityList = {};
    if ((n == 0) || (n == 1)) {
        return 0;
    }
    const mem = Array.from({ length: n }, () => ({}));
    for (let i = 0; i < n; i++) {
        let cities = [];

        // Fill array with the all cities
        for (let j = 0; j < n; j++) { 
            cities.push(j); 
        }

        let min = heldKarpEq(i, cities, distance_matrix, cityList);
        if (min < newMin) {
            newMin = min; 
        }
    }
    return newMin;
}

    function heldKarpEq(city, cities, matrix, cityList) {
    let cityNum = cities.length;
    let key = JSON.stringify([city, cities]);
    if (cityList[key] != undefined) {
        return cityList[key]; 
    }
    if (cityNum == 2) {
        for (let i = 0; i < cityNum; i++) {
            if (cities[i] != city) {
                cityList[key] = matrix[city][cities[i]];
                return cityList[key];
            }
        }
    } else { 
        let minDistance = Infinity;
        for (let i = 0; i < cityNum; i++) {
            if (cities[i] == city) { 
                continue; 
            }
            let newCities = [];
            for (let j = 0; j < cityNum; j++) {
                if (cities[j] == city) { 
                    continue; 
                }
                newCities.push(cities[j]);
            }
            let dis = matrix[city][cities[i]] + heldKarpEq(cities[i], newCities, matrix, cityList);
            if (minDistance > dis) { 
                minDistance = dis; 
            }
        }
        cityList[key] = minDistance;
        return minDistance;
    }
}
