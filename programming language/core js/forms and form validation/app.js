// ------------ Forms and Form Validation

// --------- Multiple Option to Validate your Form : Inline , Pattern Attribute , Custom regex code
// ------------ Forms and Form Validation
let form = document.querySelector("#signupForm");

let fields = {
  username: {
    el: document.querySelector("#username"),
    msgEl: document.querySelector("#usernameError"),
    regex: /^[a-zA-Z0-9]{3,16}$/,
    error: "Username must be 3–16 chars (letters & numbers only)."
  },
  email: {
    el: document.querySelector("#email"),
    msgEl: document.querySelector("#emailError"),
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    error: "Enter a valid email address."
  },
  password: {
    el: document.querySelector("#password"),
    msgEl: document.querySelector("#passwordError"),
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    error: "Password must be 8+ chars, include uppercase, lowercase, number & special char."
  },
  confirmPass: {
    el: document.querySelector("#confirmPass"),
    msgEl: document.querySelector("#confirmPassError"),
    match: "password", // special case: confirm password check
    error: "Passwords do not match."
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let allValid = true;

  for (let key in fields) {
    let field = fields[key];
    let value = field.el.value.trim();

    // empty check
    if (!value) {
      field.msgEl.textContent = "This field is required.";
      field.msgEl.style.color = "red";
      allValid = false;
      continue;
    }

    // regex validation (if defined)
    if (field.regex && !field.regex.test(value)) {
      field.msgEl.textContent = field.error;
      field.msgEl.style.color = "red";
      allValid = false;
      continue;
    }

    // confirm password check
    if (field.match && value !== fields[field.match].el.value) {
      field.msgEl.textContent = field.error;
      field.msgEl.style.color = "red";
      allValid = false;
      continue;
    }

    // success
    field.msgEl.textContent = "✓ Valid";
    field.msgEl.style.color = "green";
  }

  if (allValid) {
    alert("Form submitted successfully 🎉");
    form.reset();
    Object.values(fields).forEach(f => f.msgEl.textContent = ""); // clear msgs
  }
});
