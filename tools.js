/* =========================================================
   GSM HJ – TOOLS JAVASCRIPT
   Purpose:
   - Handle tool booking
   - Redirect to WhatsApp with tool name
   - Client side only (no backend)
========================================================= */

"use strict";

/* =========================================================
   CONFIG
========================================================= */
const WHATSAPP_NUMBER = "918221820078";

/* =========================================================
   TOOLS DATA (STATIC – FINAL)
========================================================= */
const toolsList = [
    { name: "TSM TOOL PRO", price: "₹100 / Day" },
    { name: "PANDORA DIGITAL LOGIN", price: "₹1000 / Day" },
    { name: "UTA PRO TOOL", price: "₹100 / Day" },
    { name: "AMT TOOL", price: "₹50 / Day" },
    { name: "KG KILLER TOOL", price: "₹100 / Day" },
    { name: "CHEETAH TOOL PRO", price: "₹200 / Day" },
    { name: "GRIFFIN UNLOCKER", price: "₹200 / Day" },
    { name: "UNLOCKED TOOL", price: "₹200 / Day" }
];

/* =========================================================
   WHATSAPP MESSAGE BUILDER
========================================================= */
function buildWhatsAppMessage(toolName) {
    return `Hello GSM HJ 👋%0A
I want to rent the tool:%0A
🔧 Tool Name: ${toolName}%0A
Please share availability and process.%0A
Thank you.`;
}

/* =========================================================
   OPEN WHATSAPP
========================================================= */
function openWhatsApp(toolName) {
    const message = buildWhatsAppMessage(toolName);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
}

/* =========================================================
   ATTACH CLICK EVENTS
========================================================= */
function initToolButtons() {
    const buttons = document.querySelectorAll(".whatsapp-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const toolName = btn.getAttribute("data-tool");
            if (toolName) {
                openWhatsApp(toolName);
            }
        });
    });
}

/* =========================================================
   PAGE LOAD INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    initToolButtons();
});

/* =========================================================
   DEBUG (SAFE)
========================================================= */
console.log("GSM HJ tools.js loaded successfully");

/* =========================================================
   FUTURE SAFE EXPORT
========================================================= */
window.GSMHJ_TOOLS = {
    openWhatsApp
};

/* =========================================================
   END OF FILE
========================================================= */