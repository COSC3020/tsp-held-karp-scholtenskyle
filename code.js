function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    if ((n == 0) || (n == 1)) {
        return 0;
    }
    const mem = Array.from({ length: n }, () => ({}));

    function heldKarpEq(set, pos) {
        if (set.size == 0){
            return 0;
        }
        if (mem[pos][set] != undefined){
            return mem[pos][set];
        }
        let minCost = Infinity;
            const cost = distance_matrix[pos][nxt] + heldKarpEq(set, nxt);
            minCost = Math.min(minCost, cost);
        }
        mem[pos][set] = minCost;
        return minCost;
    }
    let result = Infinity; 
    for (let start = 0; start < n; start++) {
        result = Math.min(result, heldKarpEq(set, start));
    }
    return result;
}
