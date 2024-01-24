# Weather Forecast App
The Weather Forecast App by Sasha Brockman mimics a real forecast application. Features include showing a page of "current" weather conditions, a page of hour by hour forecasts, and a page that allows a user to add a new hour forecast to be displayed at the end of the pre-existing forecasts.

## Installation
The latest version of the Weather Forecast App can be found at https://github.com/SashaBrockman/phase-2-project.

## Use
On load, the page will display a bar with links for navigating to other "pages". In reality, this is a single page application, and the links only determine which components are being shown. Along with this nav bar, the "current" weather conditions will be displayed, including time, temperature, cloud cover, and precipitation. This page can be returned to at any time by clicking the "Current Weather" link in the nav bar.

A user can navigate to the hourly forecast page by clicking on the "Hourly Forecast" link at the top of the page. Doing so will show a list of forecasts currently in the database with information similar to that displayed in the "Current Weather" page. Instead of precipitation status, however, the forecast only displays the likelihood of rain. This page automatically updates when new forecasts are added.

To add new forecasts, a user needs to click on the "Admin" link at the top of the page. Doing so will take the user to a form where the necessary information can be entered in. Each input is labeled as to what information is needed to be put in and is controlled via state. Upon clicking "Add forecast" at the bottom of the form, the internal database is updated with the new forecast, and the "Hourly Forecast" page is rerendered.

Lastly, in the event that a user tries to navigate to a bad link, there is a rudimentary Error Page that will be displayed requesting that the user return to a working page. This can be done via the back button in the browser or by using the nav bar available.