function makeAjaxRequest(url, method = 'GET') {
    return method
}

console.log(makeAjaxRequest("https://yourdomain.com/api/service"))
console.log(makeAjaxRequest("https://yourdomain.com/api/service", null))
console.log(makeAjaxRequest("https://yourdomain.com/api/service", undefined))
console.log(makeAjaxRequest("https://yourdomain.com/api/service", 'GET'))
console.log(makeAjaxRequest("https://yourdomain.com/api/service", 'POST'))