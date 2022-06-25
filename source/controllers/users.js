module.exports = {
    register: (req, res) => res.render("register", {
        styles: ["user/register" ,"mobile" ,"tablets", "desktop"]
    }),
    login: (req, res) => res.render("login", {
        styles: ["user/login" ,"mobile" ,"tablets", "desktop"]
    })
}