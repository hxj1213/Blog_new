function trim(e) {
    return e.replace(/^(\s|\u00A0)+/, "").replace(/(\s|\u00A0)+$/, "")
}

function validateForm(e) {
    var r = 0, t = e.elements["captcha-solution"], l = e.elements.form_email, n = e.elements.form_password,
        a = document.getElementById("item-error");
    if (a && (a.style.display = "none"), t) {
        var o = trim(t.value);
        "" === o ? (displayError(t, "请输入验证码"), r = 1) : o.length < 4 ? (displayError(t, "请输入正确的验证码"), r = 1) : clearError(t)
    }
    if (l) {
        var i = trim(l.value);
        "" === i || "邮箱/手机号/用户名" === i ? (displayError(l, "请输入正确的邮箱/手机号/用户名"), r = 1) : clearError(l)
    }
    return n && ("" === n.value ? (displayError(n, "请输入密码"), r = 1) : n && clearError(n)), !r
}

function displayError(e, r) {
    var t = document.getElementById(e.name + "_err");
    t || (t = document.createElement("span"), t.id = e.name + "_err", t.className = "error-tip", e.parentNode.appendChild(t)), t.style.display = "inline", t.innerHTML = r
}

function clearError(e) {
    var r = document.getElementById(e.name + "_err");
    r && (r.style.display = "none")
}

!function (e) {
    var r = function (r) {
        return e.getElementById(r)
    }, t = "邮箱/手机号/用户名", l = r("email"), n = r("password"), a = r("captcha_field");
    l.onfocus = function () {
        this.value == t && (this.value = "", this.style.color = "#000")
    }, l.onblur = function () {
        this.value || (this.value = t, this.style.color = "#ccc")
    }, l.value == t ? l.style.color = "#ccc" : "" === n.value ? n.focus() : a && a.focus()
}(document);
