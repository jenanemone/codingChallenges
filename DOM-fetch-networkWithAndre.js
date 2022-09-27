/* 2. The DOM, fetch, and the network!

If user changes the checkbox values,
You have to get the latest data from the DOM
and trigger a fetch request to update the user data
on the backend. You communicate to the backend
through the API endpoint.

PUT https://fancy-cars.com/api/v1/privacy-center
Headers: Content-Type: application/json
Body: {
  newsletter: true,
  coupons: false,
  userId: 3243242342,
}

<html>
  <body>
    <input type="hidden" id="userId" name="userId" value="3243242342" />
    <label for="newsletter-checkbox">Send newsletter:</label>
    <input id="newsletter-checkbox" type="checkbox" />
    label for="coupons-checkbox">Send sales events:</label>
    <input id="coupons-checkbox" type="checkbox" />
  </body>
  <script>
    // on checkbox click/touch/change, send a fetch request to the endpoint to update the user data
  </script>
</html>


3. Boolean gymnastics

Everyone gets a coding section below:
*/


// Andre
function onCheckboxChange() {
   const userId = document.getElementById("userId")?.value;
   if(!userId) return; 
   const wantsNewsletter = document.getElementById("newsletter-checkbox")?.checked;
   const wantsSalesNews = document.getElementById("coupons-checkbox")?.checked;
   if(wantsNewsletter === undefined || wantsSalesNews === undefined ) return;
   fetch("https://fancy-cars.com/api/v1/privacy-center", {
     method: "put",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
        newsletter: wantsNewsletter,
        coupons: wantsSalesNews,
        userId,
     })
  })
}
document.getElementById("newsletter-checkbox")?.addEventlistener("change", onCheckboxChange)
document.getElementById("coupons-checkbox")?.addEventlistener("change", onCheckboxChange)
