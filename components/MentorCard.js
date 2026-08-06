class MentorCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Mentor";
    const role = this.getAttribute("role") || "Role";
    const imgSrc = this.getAttribute("img") || "";
    const fallbackBg = this.getAttribute("bg") || "aim-blue";
    const fallbackText = this.getAttribute("fallback") || "M";

    this.innerHTML = `
      <div class="bg-white p-4 md:p-6 rounded-2xl text-center card-shadow border-t-4 border-aim-purple">
        ${
          imgSrc
            ? `<img src="${imgSrc}" alt="${name}" class="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full object-cover mx-auto mb-3 border-4 border-aim-blue shadow-md" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackText)}&background=${fallbackBg.replace("aim-", "")}&color=fff'" />`
            : `<div class="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center text-3xl text-gray-400">${fallbackText}</div>`
        }
        <h4 class="font-bold text-aim-dark">${name}</h4>
        <p class="text-sm text-gray-600">${role}</p>
      </div>
    `;
  }
}
customElements.define("mentor-card", MentorCard);
