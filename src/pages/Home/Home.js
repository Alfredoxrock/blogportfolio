import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

	return(

			<div className="container-fluid">

			<h1 className="text-center" style={{paddingTop: "5%"}}>
				Home
			</h1>

			<header class="mt-5 pt-5">
				<div class="container">
					<div class="row align-items-center">
						
							<div class="col-md-6">
								<h1 class="mb-4 font-weight-bold">
									Recent graduated student from 
									<span class="text-info text-danger"> Sul Ross State University </span>
									with a major in computer science.
								</h1>
								<p class="mb-4 pb-2">
									Hello, welcome to my simplistic portfolio built from scratch. This website<br></br> 
									is responsive and user friendly and intuitive. I'm eager to start my <br/> journey on the world of 
									software development. These days have been amazing, and I will continue
									to grind my skills to further my knowledge <br></br> at coding.
								</p>

								<div class="d-grid gap-2 d-md-flex">
								<a href="https://drive.google.com/file/d/1-8UKcrTY9kWmrUrrwTCNyeJAEJSdzhkG/view?usp=sharing" 
								class="text-center btn btn-outline-dark btn-lg btn-block">Resume</a>
								<a href="https://github.com/Alfredoxrock" 
								class="text-center btn btn-outline-dark btn-lg btn-block">My Github <FontAwesomeIcon icon={faGithub}/></a>
								<a href="https://www.linkedin.com/in/alfredo-hernandez-baeza-2b21761b1/" 
								class="text-center btn btn-outline-dark btn-lg btn-block">My LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a>
								
								</div>
								
							</div>

							<div class="col-md-6 d-none d-sm-none d-md-block">
								<img src="Alfredo01.jpg" alt="NoShowing" class="img-fluid"/>
							</div>
					</div>
				</div>
			</header>

			<header class="mt-5 pt-5 text-black">
				<div class="container">
					<div class="row align-items-center">
						
							<div class="col-md-6">
								<h1 class="mb-4 font-weight-bold">
									Check my
									<span class="text-info text-danger"> Projects </span>
									
								</h1>
								
							</div>

							
					</div>
				</div>
			</header>

			<header class="card-group cup-space">
				<a class="card border border-danger border-3" href="https://github.com/Alfredoxrock/NewsToday">
					<img class="card-img-top" src="NewstodaySample.jpg" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">News Today</h5>
					<p class="card-text">A college project built with c# and XAML. It is a news portal that can 
					upload news articles and show them in card format. The news are sorted by category and be written
					in different styles.</p>
					<p class="card-text"><small class="text-muted">Code available on github</small></p>
					</div>
				</a>
				<div class="cup-space">  </div>
				<div class="card border-4 border-dark">
					<a href="https://github.com/Alfredoxrock/wordypkg">
					<img class="card-img-top" href="https://github.com/Alfredoxrock/wordypkg" src="CLIwordy.jpg" alt="Card image cap"/>
					</a>
					<div class="card-body">
					<h5 class="card-title">wordypkg</h5>
					<p class="card-text">Implemented Merriam Webster API using c# to define vocabulary words, 
					find synonyms, antonyms, and examples. It can be used on command on any terminal.</p>
					<a class="card-text" href="https://www.nuget.org/packages/wordypkg"><small class="text-muted">Available on nuget.org</small></a>
					</div>
				</div>		
			</header>

			<header class="card-group cup-space">
				<a class="card border border-dark border-3" href="https://github.com/Alfredoxrock/Process_scheduler">
					<img class="card-img-top" src="ProessScheduler.png" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">Process Scheduler</h5>
					<p class="card-text">It creates tasks and stores them into a process pool, then
					they are moved to the ready queue, the processes depending on priority move to the running 
					queue and the program decides what processes to terminate.
					Finally, it Shows the computer total time when all the tasks are terminated. </p>
					<p class="card-text"><small class="text-muted">Code available on github</small></p>
					</div>
				</a>
				<div class="cup-space">  </div>
				<a class="card border-4 border-danger" href="https://github.com/Alfredoxrock/blogportfolio">
					
					<img class="card-img-top" href="https://github.com/Alfredoxrock/blogportfolio" src="cup.jpg" alt="Card image cap"/>
					
					<div class="card-body">
					<h5 class="card-title">This Website</h5>
					<p class="card-text">Implemented Bootstrap, CSS and HTML DOM to create this website </p>
					<a class="card-text" href="https://github.com/Alfredoxrock/blogportfolio"><small class="text-muted">Code available on github</small></a>
					</div>
				</a>		
			</header>

			<footer class="mt-5 pt-5 text-black bg-dark">
				<div class="container d-flex justify-content-center">
					<div class="align-items-center">
						
							<div class="row">
								<p class="text-white">© Alfredo 2022 </p>
								
							</div>

					</div>
				</div>
			</footer>

			

			</div>

		)

}

export default Home;