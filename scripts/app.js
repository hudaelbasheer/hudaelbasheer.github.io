<script>
  // Toggle Navigation Menu on Mobile
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Back to Top Button
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.innerText = '↑';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact Form Validation
  const form = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    successMsg.innerText = '';

    if (nameField.value.trim() === '') {
      nameError.innerText = 'Name is required.';
      nameError.style.display = 'block';
      isValid = false;
    }

    if (emailField.value.trim() === '') {
      emailError.innerText = 'Email is required.';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
      emailError.innerText = 'Enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    }

    if (messageField.value.trim() === '') {
      messageError.innerText = 'Message is required.';
      messageError.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      successMsg.innerText = 'Your message has been sent successfully!';
      form.reset();
    }
  });
</script>
