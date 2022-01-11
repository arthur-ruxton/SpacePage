# General Assembly - project 2 
# SpacePage :rocket:
Two day paired project - a multipage React app that retrieves data from external APIs
Live: [Space Page](https://space-page.netlify.app/astronaut)

<details>
  <summary>Images</summary>
  <p>Homepage - NASA astronomy picture of the day :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148937819-a128de02-d83b-48f8-afb5-64c367bd6db0.png />
   <p>News - astro science news articals :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148938070-521cc301-f5d8-4073-a612-6a2bd01b4384.png />
   <p>People in Space :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148938271-040e564e-6ea2-4252-8149-a6b309482c31.png />
</details>

## Overview :bulb:
The site utilises three open-APIs and React-Router-DOM.  Casual science fans can view the latest astro science news articals, get updates on which astronauts are currently in space & see the NASA astronomy picture of the day.

## Tech :gear:
### React.js & SASS :
Using React & React-Router-DOM for the first time, we built a multipage website. Axios requests are how we retrieve datasets from various APIs, storing them in stateful variables and displaying the data with React components.
Using SASS we styled the site with what little time we had.
+ Git & Github for version control - our first time practacing remote collaboration in this way, good experience.

## Approach :desktop_computer: :arrow_right: :desktop_computer:
We had very little time, our approach was simply to jump in at the deep end as soon as we had identified some open APIs that would lend themself to a theme. 
  The first step was to build the simplest component, a container which would display the NASA astronomy picture of the day - once we were able to retrieve the data, save the relevant piece to a stateful variable and display it in the container, the ball was rolling. – It was then just a case of following that same process for the other components we wanted to include.
  With the bulk of the work done we just had to test and style the site which took maybe 25% of the time allocated to the project.

## Key learnings :open_book:
* Axios requests
* Working with open APIs
* React.js – useEffect and useState
* React-Router-DOM
* Netlify deployment

## Challenges :chart_with_upwards_trend:
* Though it sounds simple, the media type of NASAs astronomy image of the day varies, meaning your request is sometimes returning an image and sometimes returning a video - this complicates things a little bit.
* Using Git and Github collaboratively for the first time, learning to use branches properly, merging at the right time and so on.
* Deployment also presents some challenges.
