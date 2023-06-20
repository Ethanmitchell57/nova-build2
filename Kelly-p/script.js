const form = document.querySelector("#form")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrejeQCHUiSIgkhrBuZyK8Swg3uwahEQwEPnlw7egKucJORxbfO6OjlYbW5GT-DSewQA/exec'

  form.addEventListener('submit', e => {
    e.preventDefault()

    const responseBody = new FormData(form)
    const TrendBody = responseBody.getAll("TRENDS").join(" ")
    responseBody.set('TRENDS', TrendBody)
    fetch(scriptURL, { method: 'POST', body: responseBody })
      .then(response => { window.location.href = 'https://fb.watch/leDHUGHlqM/?mibextid=NnWzG8' })
      .catch(error => alert('Error!', error.message))
  })
