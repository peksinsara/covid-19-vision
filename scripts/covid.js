!(function () {
  const e = document.documentElement;
  if (
    (e.classList.remove("no-js"),
    e.classList.add("js"),
    document.body.classList.contains("has-animations"))
  ) {
    const e = (window.sr = ScrollReveal());
    e.reveal(".hero-title, .hero-paragraph, .hero-cta", {
      duration: 1e3,
      distance: "40px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 150,
    }),
      e.reveal(".feature, .pricing-table", {
        duration: 600,
        distance: "40px",
        easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
        interval: 100,
        origin: "bottom",
        viewFactor: 0.5,
      }),
      e.reveal(".feature-extended-image", {
        duration: 600,
        scale: 0.9,
        easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
        viewFactor: 0.5,
      });
  }
})();

window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/28')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;
		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('percent').innerHTML = ((Number(deaths) / Number(confirmedCases)) * 100).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
        
        console.log(data);
        console.log(resp);


	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000)
}

function getVacStats() {
	fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
	.then(function(resp) { return resp.json() })
    .then(function (data) {
    
		let vaccinated = data.country.total_vaccinations;

		document.getElementById('vaccinated').innerHTML = vaccinated.toLocaleString('en');
      
        console.log(data);
        console.log(resp);

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getVacStats, 43200000)
}


