const acharQuadradosPerfeitos = (num) => {
    sqrtNum = (Math.sqrt(num))
    if (sqrtNum == parseInt(sqrtNum)) {
        return {
            "anterior": (sqrtNum-1)**2,
            "atual": sqrtNum**2,
            "posterior": (sqrtNum+1)**2
        }
    }
    else {
        return -1
    } 

}

console.log(acharQuadradosPerfeitos(143))