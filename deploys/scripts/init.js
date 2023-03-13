rs.status();
db.createUser({
    user: "mongo_prim", pwd: "Jn0w63kiAx4MkyyqTyIT0Y", roles: [{ role: "root", db: "admin" }]
})
