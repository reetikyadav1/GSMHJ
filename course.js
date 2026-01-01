/* =========================================================
   GSM HJ – COURSE JAVASCRIPT
   Purpose:
   - Handle Join Course form
   - Send data to email using EmailJS
   - Client side only
========================================================= */

"use strict";

/* =========================================================
   EMAILJS CONFIG (REPLACE THESE)
========================================================= */
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

/* =========================================================
   INIT EMAILJS
========================================================= */
(function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

/* =========================================================
   FORM HANDLER
========================================================= */
function initCourseForm() {
    const form = document.getElementById("courseForm");
    const status = document.getElementById("formStatus");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const city = document.getElementById("city").value.trim();

        if (!name || !phone || !email || !city) {
            alert("Please fill all details");
            return;
        }

        const params = {
            name: name,
            phone: phone,
            email: email,
            city: city,
            course: "Professional Mobile Software Training",
            institute: "GSM HJ – Phone Fix Zone"
        };

        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                params
            )
            .then(
                function () {
                    status.style.display = "block";
                    status.style.color = "green";
                    status.innerText =
                        "✅ Details sent successfully. We will contact you soon.";

                    form.reset();
                },
                function () {
                    status.style.display = "block";
                    status.style.color = "red";
                    status.innerText =
                        "❌ Failed to send. Please try again later.";
                }
            );
    });
}

/* =========================================================
   AUTO INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    initCourseForm();
});

/* =========================================================
   SECURITY: BLOCK MULTIPLE SUBMITS
========================================================= */
let isSubmitting = false;

document.addEventListener("submit", (e) => {
    if (isSubmitting) {
        e.preventDefault();
        return false;
    }
    isSubmitting = true;
    setTimeout(() => {
        isSubmitting = false;
    }, 4000);
});

/* =========================================================
   DEBUG
========================================================= */
console.log("GSM HJ course.js loaded successfully");

/* =========================================================
   END OF FILE
========================================================= */