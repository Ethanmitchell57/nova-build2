const form = document.querySelector("#form")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymIYtmzG17Jd_Ygrr3T5x_suAyBj70CURPILTLPWikrC-wsHmaXV9v6Kj-v9It8cGc/exec'

  form.addEventListener('submit', e => {
    e.preventDefault()

    const responseBody = new FormData(form)
    const TrendBody = responseBody.getAll("TRENDS").join(" ")
    responseBody.set('TRENDS', TrendBody)
    fetch(scriptURL, { method: 'POST', body: responseBody })
      .then(response => { window.location.href = 'https://fb.watch/leDHUGHlqM/?mibextid=NnWzG8' })
      .catch(error => alert('Error!', error.message))
  })
