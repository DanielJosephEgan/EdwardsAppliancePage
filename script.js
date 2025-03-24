function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const address = form.address.value;
  const city = form.city.value;
  const zipcode = form.zipcode.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const message = form.message.value;
  const fullAddress = encodeURIComponent(address + ' ' + city + ' ' + zipcode);
  const body = 
      `${name}\n\n` +
      `${address}\n` +
      `${city},  ${zipcode}\n` +
      `email=${email}\n` +
      `phone=${phone}\n` +
      `message=${message}\n\n` +
      `https://www.google.com/search?q=${fullAddress}`;
  const mailtoLink = `mailto:edwardsappliance@protonmail.com?subject=Contact from ${name}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}