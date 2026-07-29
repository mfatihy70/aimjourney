export function renderAbout(container) {
  container.innerHTML = `
    <div class="container">
      <h2 class="animate-on-scroll">About AIM Journey</h2>
      
      <div class="about-component animate-on-scroll">
        <div class="about-comp-img"><img src="content/1.jpeg" alt="Goal"></div>
        <div class="about-comp-text">
          <h3>Our Main Goal</h3>
          <p>[Insert text here: Describe the primary objective...]</p>
        </div>
      </div>

      <div class="about-component animate-on-scroll">
        <div class="about-comp-img"><img src="content/2.jpeg" alt="Partners"></div>
        <div class="about-comp-text">
          <h3>Our Partners</h3>
          <p>[Insert text here: List participating organizations...]</p>
        </div>
      </div>

      <div class="about-component animate-on-scroll">
        <div class="about-comp-img"><img src="content/3.jpeg" alt="Methodology"></div>
        <div class="about-comp-text">
          <h3>Methodology</h3>
          <p>[Insert text here: Explain non-formal education methods...]</p>
        </div>
      </div>
      
      <div class="about-component animate-on-scroll">
        <div class="about-comp-img"><img src="content/4.jpeg" alt="Results"></div>
        <div class="about-comp-text">
          <h3>Expected Results</h3>
          <p>[Insert text here: Long term impact...]</p>
        </div>
      </div>
    </div>
  `;
}
