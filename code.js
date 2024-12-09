function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    if ((n == 0) || (n == 1)) {
        return 0;
    }
    const mem = Array.from({ length: n }, () => ({}));

    function heldKarpEq(mask, pos) {
        if (mask == (1 << n) -1){
            return 0;
        }
        if (mem[pos][mask] != undefined){
            return mem[pos][mask];
        }
        let minCost = Infinity; 
        for (let nxt = 0; nxt < n; nxt++){
            if (mask & (1 << nxt)){
                continue;
            } 
            const newMask = mask | (1 << nxt);
            const cost = distance_matrix[pos][nxt] + heldKarpEq(newMask, nxt);
            minCost = Math.min(minCost, cost);
        }
        mem[pos][mask] = minCost;
        return minCost;
    }
    let result = 0; 
    for (let start = 0; start < n; start++) {
        result = Math.min(result, heldKarp(1 << start, start));
    }
    return result;
}
