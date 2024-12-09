function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    if ((n == 0) || (n == 1)) {
        return 0;
    }
    const mem = Array.from({ length: n }, () => ({}));

    function heldKarp(city, cities, matrix, citylist) {
    let cityNum = cities.length;
    let key = JSON.stringify([city, cities]);
    if (citylist[key] != undefined) {
        return cityList[key]; 
    }
    if (cityNum == 2) {
        for (let i = 0; i < size; i++) {
            if (cities[i] != city) {
                cityList[key] = matrix[city][cities[i]];
                return cityList[key];
            }
        }
    } else { 
        let minDistance = Infinity;
        for (let i = 0; i < size; i++) {
            if (cities[i] == city) { 
                continue; 
            }
            let newCities = [];
            for (let j = 0; j < size; j++) {
                if (cities[j] == city) { 
                    continue; 
                }
                newCities.push(cities[j]);
            }
            let dis = matrix[city][cities[i]] + heldKarp(cities[i], newCities, matrix, cityList);
            if (minDistance > distance) { 
                minDistance = distance; 
            }
        }
        cityList[key] = minDistance;
        return minDistance;
    }
}
}
