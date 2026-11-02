// enquiry.js - Vogue Studio Enquiry Form
document.addEventListener("DOMContentLoaded", function() {
  const enquiryForm = document.getElementById("enquiryForm");
  const contactForm = document.getElementById("contactForm");
  const serviceSearch = document.getElementById("serviceSearch");
  const serviceSort = document.getElementById("serviceSort");
  const serviceGrid = document.getElementById("serviceGrid");
  const serviceCount = document.getElementById("serviceCount");

  const services = [
    { name: "Custom Dressmaking", category: "Tailoring", description: "Personalised dresses around your measurements." },
    { name: "Traditional Wear", category: "African Fashion", description: "Traditional-inspired outfits celebrating identity." },
    { name: "Special Occasion Outfits", category: "Occasions", description: "Outfits for celebrations and special events." },
    { name: "Clothing Alterations", category: "Tailoring", description: "Discuss adjustments to improve the fit." },
    { name: "Bridal and Formal Wear", category: "Occasions", description: "Elegant formal designs for memorable occasions." },
    { name: "Style Consultation", category: "Consultation", description: "Discuss outfit ideas, fabrics and colours." }
  ];

  function renderServices() {
    if (!serviceGrid) return;
    const term = serviceSearch ? serviceSearch.value.toLowerCase() : "";
    const sort = serviceSort ? serviceSort.value : "default";
    let list = services.filter(s => 
      s.name.toLowerCase().includes(term) || 
      s.category.toLowerCase().includes(term)
    );
    if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") list.sort((a, b) => b.name.localeCompare(a.name));
    serviceGrid.innerHTML = "";
    list.forEach(s => {
      serviceGrid.innerHTML += `
        <div class="service-card">
          <span class="service-category">${s.category}</span>
          <h3>${s.name}</h3>
          <p>${s.description}</p>
        </div>`;
    });
    if (serviceCount) serviceCount.textContent = list.length + " service(s) found.";
  }

  if (serviceSearch) serviceSearch.addEventListener("input", renderServices);
  if (serviceSort) serviceSort.addEventListener("change", renderServices);
  renderServices();

  // Contact Form -> WhatsApp + thank-you redirect
  if (contactForm && document.getElementById("cName")) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("cName").value;
      const email = document.getElementById("cEmail").value;
      const phone = document.getElementById("cPhone").value;
      const msg = document.getElementById("cMsg").value;
      const text = `Hello Vogue Studio!%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${msg}`;
      window.open(`https://wa.me/27660895111?text=${text}`, '_blank');
      localStorage.setItem('vs_last_name', name);
      setTimeout(()=>{ window.location.href = `thank-you.html?name=${encodeURIComponent(name)}`; }, 1200);
    });
  }

  // Enquiry Form -> WhatsApp + thank-you redirect
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("eName").value;
      const phone = document.getElementById("ePhone").value;
      const service = document.getElementById("eService").value;
      const date = document.getElementById("eDate").value;
      const details = document.getElementById("eMsg").value;
      const text = `*NEW ENQUIRY - Vogue Studio*%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AFitting Date: ${date}%0ADetails: ${details}`;
      window.open(`https://wa.me/27660895111?text=${text}`, '_blank');
      localStorage.setItem('vs_last_name', name);
      const note = document.getElementById("eNote");
      if (note) note.textContent = "Opening WhatsApp... Redirecting to thank you page 💜";
      setTimeout(()=>{ window.location.href = `thank-you.html?name=${encodeURIComponent(name)}`; }, 1200);
    });
  }
});