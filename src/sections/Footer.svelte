<script>
    import Spacer from "../lib/Spacer.svelte"
  </script>
  
  <Spacer />
  <footer class="site-footer">
    <div class="footer-content">
      <p><strong>Made by Kailyn Lau</strong> — 2025</p>
      <p>
        This story is a work of narrative journalism built on publicly available data,
        including from the <a href="https://blackwealthdata.org" target="_blank">Black Wealth Data Center</a>,
        the U.S. Census Bureau, MIT Living Wage Calculator, Education Data Initiative, and more.
      </p>
      <p>
        Ari is a fictional character based on real experiences.
      </p>
      <details>
        <summary>Full data sources</summary>
        <ul>
          <li><a href="https://blackwealthdata.org" target="_blank">Black Wealth Data Center</a></li>
          <li><a href="https://livingwage.mit.edu/states/06" target="_blank">MIT Living Wage Calculator</a></li>
          <li><a href="https://data.census.gov" target="_blank">U.S. Census Bureau (ACS 2022)</a></li>
          <li><a href="https://educationdata.org/average-student-loan-payment" target="_blank">Education Data Initiative</a></li>
          <li><a href="https://www.lendingtree.com/business/small/black-owned-businesses-study/" target="_blank">LendingTree 2023 ABS Analysis</a></li>
          <li><a href="https://www.bostonfed.org/publications/one-time-pubs/color-of-wealth.aspx">The Color of Wealth in Boston</a></li>
          <p>Local school and housing data via Niche.com and Apartments.com</p>
          <ul>
            <li><a href="https://www.niche.com/k12/therrell-high-school-atlanta-ga/">Therrell High School</a></li>
            <li><a href="https://www.niche.com/k12/walton-high-school-marietta-ga/">Walton High School</a></li>
          </ul>
          
        </ul>
      </details>
    </div>
  </footer>
  
  <style>
    .site-footer {
      background: #0e0e0e;
      color: #f0f0f0;
      padding: 3rem 1.5rem;
      text-align: center;
      font-size: 0.875rem;
      line-height: 1.5;
    }
  
    .footer-content {
      max-width: 700px;
      margin: 0 auto;
    }
  
    a {
      color: #ffd700;
      text-decoration: underline;
    }
  
    details summary {
      cursor: pointer;
      margin-top: 1rem;
      font-weight: bold;
    }
  
    ul {
      margin-top: 0.5rem;
      padding-left: 1rem;
      text-align: left;
    }
  
    .footer-license {
      margin-top: 1rem;
      opacity: 0.7;
      font-size: 0.75rem;
    }
  </style>
  