import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Plot from 'react-plotly.js';
function App() {
  return (
    <body>
     <section class="hero is-fullheight is-warning">

<div class="hero-head ">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item ">

        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA " class="navbar-menu">
        <div class="navbar-end">

          <a class="navbar-item is-active has-text-white-ter">

            Home
          </a>




          <span class="navbar-item">
            <a class="button is-primary is-inverted has-text-primary ">

              <span>View Personal Website</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</div>
<div class="hero-body">
      <div class="container has-text-centered">
      <span class="icon">
  <i class="fas fa-home"></i>
</span>
        <h1 class="title is-family-monospace">
          What Makes an Inventor?
        </h1>
        
      
      
        <img class="is-rounded" src="https://i.ibb.co/f97mMHd/circle-cropped.png"/>
     
        
        <h2 class="subtitle is-family-monospace">
         Mimicing Raj Chetty's work regarding what makes an inventor, I have strived to 
         replicate his work while also creating my own understanding and interpretation. 
         Scroll down to see more of my work. 
        </h2>
      </div>
    </div> 
    </section>
    <section>
    <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">What is an inventor?</p>
      <br />
      <p class="subtitle">While the generic definition for an inventor is a person who invented a particular process or device, we define it a little more precisely for the sake of data collection and research. 
      Here we define inventor as an individual who filed for a patent. Specifically we are looking at inventors who were born in the United States. </p>
      <br />
    <p class = "title">Where did this data come from?</p>
    <p class = "subtitle"> Where did this data come from: 
The data came from Raj Chetty, Xavier Jarvel, Nevada Petkova and John Van Reenan. They looked at the lives of more than one million inventors in the US using a de-identified database linking patent records to tax and school district records. Along with this data I merged some of Chetty’s other data regarding outcomes by country, race, gender and parental income percentile. Though merging data sets from the Opportunity Atlas, Race and Economic Opportunity in the United States, and Who becomes an Inventor in America, analyzing and visualizing data became much easier and insightful. </p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
    <br />
      <img src = "https://i.ibb.co/BB3BvqZ/Screen-Shot-2020-07-02-at-3-24-15-PM.png" />
      
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Purpose</p>
      <p class="subtitle">Why is this important?</p>
      <div class="content">
        <p class = "subtitle">Innovation is an essential driver of economic progress that benefits a country as a whole. Innovation is necessary for higher productivity and a better economy. New ideas and technologies are developed and applied generating greater output with the same input. This means more goods and services stimulating wages and profits. The hope is that with more innovation the overall wellbeing of people is improved. However, in a country like the United States where inequality is evident it is important to see how inequality and other factors impact innovation and how addressing those inequalities can improve overall wellbeing and economic wellbeing. </p>
      <br />
      <p class = "title">Technologies I used</p>
      <br />
      <p class = "subtitle"> In order to create this project I utilized were <strong>React </strong>and <strong>Python.</strong> The Python libraries I utilized were <strong>Plotly, Dash </strong>and <strong>Pandas.</strong> </p>
      </div>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <p class = "title"># of male inventors</p>
          <img src = "https://i.ibb.co/17dNq4x/Screen-Shot-2020-07-02-at-4-07-05-PM.png"/>
          
        </article>
        {/* <article class="tile is-child box">
          <p class="title">Vertical tiles</p>
          <p class="subtitle">Bottom box</p>
        </article> */}
      </div>


      
      <div class="tile is-parent">
        <article class="tile is-child box">
        <p class = "title"># of female inventors</p>
          <img src = "https://i.ibb.co/HgVR9rk/Screen-Shot-2020-07-01-at-11-20-28-PM.png" />

        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Wide column</p>
        <p class="subtitle">Aligned with the right column</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <div class="content">
        <p class="title">Inventor rates based off of gender</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Side column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p class="title">How do we do better?</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>
</section>
<section>
    <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
    <img src="https://i.ibb.co/tcCjWTf/Unknown-3.png"/>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <img src = "https://i.ibb.co/c62mmx9/Unknown-4.png" />

    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
    <img src = "https://i.ibb.co/vwwpXRY/Unknown-6.png"/>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <p class="title">Vertical tiles</p>
          
          <p class="subtitle">Top box</p>
        </article>
      
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Wide column</p>
        <p class="subtitle">Aligned with the right column</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <div class="content">
        <p class="title">Lessons I've learned</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </article>
  </div>
</div>

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Side column</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box">
      <p class="title">How do we do better?</p>
      <p class="subtitle">With some content</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
</div>
</section>
<section>
<footer class="footer ">
  <div class="content has-text-centered is-warning">
    <p>
      <strong>Want to learn more?</strong> <a href="https://jgthms.com">Click here to view Raj Chetty's original work.</a>
      <br />
      This website was created by Harshita Bhatt <br />
      <a href="http://opensource.org/licenses/mit-license.php">View Harshita Bhatt's LinkedIn here</a>. 
    </p>
  </div>
</footer>
</section>




</body>
    )}

export default App;
