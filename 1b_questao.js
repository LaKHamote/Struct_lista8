const generateUser = (n, id, e) => {
    return {
        name: n,
        identity: id,
        email: e
    }
}

console.log(generateUser("lucas", 12, "lcuas@gaekf"))