function openAboutContent(parentElement) {
  const about = document.createElement("div");
  about.classList.add("about-container");

  // Restaurant name heading
  const heading = document.createElement("h1");
  heading.textContent = "About Anton's";
  heading.classList.add("about-heading");
  about.appendChild(heading);

  // Main content container
  const content = document.createElement("div");
  content.classList.add("about-content");

  // Restaurant image
  const image = document.createElement("div");
  image.classList.add("about-image");
  content.appendChild(image);

  // Text content
  const text = document.createElement("div");
  text.classList.add("about-text");

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Founded in 2010, Anton's brings authentic Italian cuisine with a modern twist to the heart of the city. Our chef, Antonio Rossi, combines traditional recipes with innovative techniques to create unforgettable dining experiences.";
  text.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "We source only the freshest local ingredients and import specialty items directly from Italy to ensure authentic flavors in every dish.";
  text.appendChild(paragraph2);

  // Contact Info Section
  const contactHeading = document.createElement("h2");
  contactHeading.textContent = "Visit Us";
  contactHeading.classList.add("contact-heading");
  text.appendChild(contactHeading);

  const address = document.createElement("p");
  address.innerHTML = `<strong>Address:</strong><br>123 Pasta Lane<br>Little Italy District<br>New York, NY 10013`;
  address.classList.add("contact-info");
  text.appendChild(address);

  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Phone:</strong> (212) 555-1234`;
  phone.classList.add("contact-info");
  text.appendChild(phone);

  const email = document.createElement("p");
  email.innerHTML = `<strong>Email:</strong> reservations@antonsnyc.com`;
  email.classList.add("contact-info");
  text.appendChild(email);

  const hours = document.createElement("p");
  hours.innerHTML = `<strong>Hours:</strong><br>
    Monday-Thursday: 11am - 10pm<br>
    Friday-Saturday: 11am - 11pm<br>
    Sunday: 10am - 9pm`;
  hours.classList.add("contact-info");
  text.appendChild(hours);

  content.appendChild(text);
  about.appendChild(content);

  parentElement.appendChild(about);
  return about;
}

export { openAboutContent };
