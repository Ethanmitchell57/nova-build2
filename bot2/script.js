const form = document.querySelector("#form")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJM14XczgJ3HYERfqpIIsaBAUyxdJ6naF6zS7a6PXUJ8H6KHUk-9N5gNc1A0FZvmh1/exec'

  form.addEventListener('submit', e => {
    e.preventDefault()

    const responseBody = new FormData(form)
    const TrendBody = responseBody.getAll("TRENDS").join(" ")
    responseBody.set('TRENDS', TrendBody)
    fetch(scriptURL, { method: 'POST', body: responseBody })
      .then(response => { window.location.href = 'https://fb.watch/leDHUGHlqM/?mibextid=NnWzG8' })
      .catch(error => alert('Error!', error.message))
  })
