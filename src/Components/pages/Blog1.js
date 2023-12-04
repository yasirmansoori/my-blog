import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import profile from '../Images/inuse/pic2.jpg'
import styles from '../CSS/Blog1.module.css'
import github from '../Images/inuse/github.png'
import github1 from '../Images/inuse/github-step1.png'
import github2 from '../Images/inuse/github-step2.png'
import github3 from '../Images/inuse/github-step3.png'
import github4 from '../Images/inuse/github-step4.png'
import github5 from '../Images/inuse/github-step5.png'
import github6 from '../Images/inuse/github-step6.png'
import Copy from '../Copy button/Copy';
import Footer from '../Footer/Footer';
function Main() {
	useEffect(() => {
		// Smooth scrolling effect when clicking on navigation links
		document.querySelectorAll('a[href^="##"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					window.scrollTo({
						top: targetElement.offsetTop - 60,
						behavior: 'smooth'
					});
				}
			});
		});
		return () => {
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.removeEventListener('click', function () { });
			});
		};
	}, []);
	return (
		<>
			<Navbar />
			<body className="container-fluid mt-5">
				<main className={`${styles.main} row column-gap-5 `}>
					<section className={`${styles.section} col-lg-8 col-md-12`}>
						<h1>Quick Guide to add your local code to GitHub</h1>
						{/* <--------------------------Display Card -----------------------> */}
						<div className={`d-flex flex-row mb-3 mt-4 ${styles.displayCard}`}>
							<div className="p-2"><img src={profile} alt='profile-pic' /></div>
							<div className={`p-2`}>
								<h5>Yasir mansoori</h5>
								<h6>MERN Developer || Full Stack Developer Enthusiast || Software Developer Enthusiast || CS undergrad at SRM University || Lead @GFG-SRMIST</h6>
							</div>
						</div>
						{/* <--------------------------Display Card end -----------------------> */}
						<hr />
						{/* Main Content here */}
						<h3>About adding existing source code to GitHub :</h3>
						<p className={styles.BlogsP}>If you have source code on your computer that is not recorded by any version control system (VCS) but is tracked by Git, you can add it to GitHub by executing commands in a terminal. You can do this by directly typing Git commands or by using the GitHub CLI.
							<p className={styles.BlogsP}>GitHub CLI is an open source tool that allows you to use GitHub from the command line on your computer. GitHub CLI can make it easier to add an existing project to GitHub via the command line. For additional information on GitHub CLI, see <a href="https://docs.github.com/en/github-cli/github-cli/about-github-cli" target="_blank" rel="noopener noreferrer">"About Github CLI"</a> </p>
							<img src={github} alt='' style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
							<p className={styles.BlogsP}>
								In this article, we will quickly learn how to add your local code to GitHub using the GitHub CLI.
							</p>
							<p className={styles.BlogsP}>
								Let's look at some of the important steps to add your local code to GitHub.
							</p>
						</p>
						{/* <--------------------------table of contents -----------------------> */}
						<h4 style={{ marginTop: '70px' }}>Table of Contents</h4>
						<div className={styles.TOC}>
							<div>
								<ul>
									<li><a href="##Link1">Creating a git repository onto github.</a></li>
									<li><a href="##Link2">Initializing a Git repository locally.</a></li>
									<li><a href="##Link3">Connect Local Repository with GitHub Remote Repository.</a></li>
									<li><a href="##Link4">Conclusion</a></li>
								</ul>
							</div>
						</div>
						{/* <--------------------------table of contents end -----------------------> */}
						<hr />

						{/* <--------------------------Link 1 -----------------------> */}
						<h1 id='#Link1'>Creating a git repository onto github.</h1>
						<div>
							<p className={styles.BlogsP}>To put your project up on GitHub, you will need to create a repository for it to live in. </p>
							<p className={styles.BlogsP}>GitHub repositories can house a wide range of projects, including open source projects. You can share code in open source projects to create better, more dependable software. Repositories can be used to collaborate with others and track your progress. .</p>
							<ol>
								<li>Login to <a href="https://github.com/" target="_blank" rel="noopener noreferrer">"Github"</a> </li>
								<li>In the upper-right corner of any page, select + then click New repository.</li>
								<img src={github1} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>Type a short, memorable name for your repository. For example, "hello-world".</li>
								<img src={github2} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>Optionally, add a description of your repository. For example, "My first repository on GitHub."</li>
								<li>Choose a repository visibility. For more information, see <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility" target="_blank" rel="noopener noreferrer">"About repositories."</a></li>
								<img src={github3} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>Select Initialize this repository with a README.</li>
								<img src={github4} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>Leave other fields as it is.</li>
								<li>Click Create repository.</li>
							</ol>
						</div>
						{/* <--------------------------Link 1 end -----------------------> */}
						{/* <--------------------------Link 2 -----------------------> */}
						<h1>Initializing a Git repository</h1>
						<div id='#Link2'>
							<span className={styles.B1span} >If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository.</span>
							<ol>
								<li>Open Git Bash.</li>
								<li>Navigate to the root directory of your project.</li>
								<li>Initialize the local directory as a Git repository. By default, the initial branch is called main.</li>
								<div className={`my-2 ${styles.code}`}><pre><code >{`git init`} </code></pre><Copy textToCopy={'git init'} /></div>
								<span className={styles.B1span} >If you're using Git 2.28.0 or a later version, you can set the name of the default branch using -b.</span>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git init -b main`}</code></pre><Copy textToCopy={'git init -b main'} /></div>
								<li>Add the files in your new local repository. This stages them for the first commit.</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git add .`}</code></pre><Copy textToCopy={'git add .'} /></div>
								<p className={styles.BlogsP}>OR:</p>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git add -A`}</code></pre><Copy textToCopy={'git add -A'} /></div>
								<li>Commit the files that you've staged in your local repository.</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git commit -m 'First commit'`}</code></pre><Copy textToCopy={`git commit -m 'First commit'`} /></div>
							</ol>
							<p className={styles.BlogsP}>Here in the above code we gave a shortcut "-m" so that we can write the commit message quickly, if you want to add commit message seperately remove -m and it will open vim editor.</p>
						</div>
						{/* <--------------------------Link 2 end -----------------------> */}
						{/* <--------------------------Link 3 -----------------------> */}
						<h1 id='#Link3'>Connect Local Repository with GitHub Remote Repository.</h1>
						<div>
							<p className={styles.BlogsP}>As we all know, the GitHub repository is a cloud-based repository. This means that whatever data is available in the Local Repository can be posted to the GitHub Remote Repository. We previously created a GitHub remote repository called "hello-world", now it's time to send our local data to a GitHub remote site.</p>
							<ol>
								<li>Navigate to your repository on github. </li>
								<img src={github5} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>Follow this steps after first commit.</li>
								<li>Update the default branch name from "master" to "main"</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git branch -M main`}</code></pre><Copy textToCopy={`git branch -M main`} /></div>
								<li>Copy remote repository URL field from your GitHub repository, in the right sidebar, copy the remote repository URL.</li>
								<img src={github6} alt='' style={{ margin: ' 10px 0px', width: ' 100%' }} />
								<li>In Terminal, add the URL for the remote repository where your local repostory will be pushed.</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git remote add origin <remote repository URL>`}</code></pre><Copy textToCopy={`git remote add origin <remote repository URL>`} /></div>
								<li>Sets the new remote:.</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git remote -v`}</code></pre><Copy textToCopy={`git remote -v`} /></div>
								<li>Push the changes in your local repository to GitHub.</li>
								<div className={`my-2 ${styles.code}`}><pre><code>{`git push -u origin main`}</code></pre><Copy textToCopy={`git push -u origin main`} /></div>
							</ol>
							<p className={styles.BlogsP}>Here in the above code we gave a shortcut "-u" so that we can track the relationship between local branch and the remote branch. This means that, in the future, when you run git push or git pull without specifying the branch names, Git knows which remote branch to push to or pull from. It sets the default remote branch for your local branch.</p>
						</div>
						{/* <--------------------------Link 3 end -----------------------> */}
						{/* <--------------------------Conclusion-----------------------> */}
						<h2 id='#Link4'>Conclusion: </h2>
						<p className={styles.BlogsP}>In Conclusion, adding your local repository to GitHub enhances collaboration, provides a secure and accessible backup, facilitates project management, and integrates with a variety of tools to streamline development workflows. Whether you're working on personal projects, collaborating with a small team, or contributing to open source, GitHub serves as a powerful platform for version control and project management.</p>
						{/* <--------------------------Conclusion end-----------------------> */}
						{/* Main Content here ends */}

					</section>
					{/* sidebar */}
					<aside className={`${styles.sidebar} col-lg`} style={{ padding: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
						<div id='inner-content' >
							<h2 className='text-center'>Github References</h2>
							<hr />
							<p className={styles.BlogsP}><a href="https://docs.github.com/en/get-started/quickstart">Getting started Github</a></p>
							<p className={styles.BlogsP}><a href="https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github">Adding Local repo on remote</a></p>
							<p className={styles.BlogsP}><a href="https://docs.github.com/en/get-started/quickstart/create-a-repo">Create a repo</a></p>
							<p className={styles.BlogsP}><a href="https://docs.github.com/en/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer">Importing a repository</a></p>
							<hr />
							{/* Feedback Form */}
							<h2 className='text-center'>Feedback</h2>
							<div className="Contact_card">
								<div className="tools">
									<div className="circle">
										<span className="red box"></span>
									</div>
									<div className="circle">
										<span className="yellow box"></span>
									</div>
									<div className="circle">
										<span className="green box"></span>
									</div>
								</div>

								<div className="card__content">
									<form action="https://formsubmit.co/be5a4c10ce3abbd4180c9482941a6c39" method="POST" >
										<div className="mb-3">
											<label for="name" className="form-label">Full Name</label>
											<input type="name" name='name' className="form-control" id="name" aria-describedby="nameHelp" required />
										</div>
										<div className="mb-3">
											<label for="email" className="form-label">Email address</label>
											<input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required />
										</div>
										<div className="mb-3">
											<label for="Textarea" className="form-label">Feedback</label>
											<textarea name='textarea' className="form-control" id="Textarea" rows="3" required></textarea>
										</div>
										<input type="hidden" name="_next" value="https://yasir-blog.netlify.app/"></input>
										<button type="submit" className="btn btn-primary">Submit</button>
									</form>
								</div>

							</div>
							{/* Feedback Form ends */}

							{/* Social Media Handlers */}

							<hr />
							<h2 className='text-center'>Liked This Blog?</h2>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<div className="social-buttons">
									<a href="https://github.com/yasirmansoori" target="_blank" className="social-button github" rel='noreferrer'>
										<svg
											className="cf-icon-svg"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="-2.5 0 19 19"
										>
											<path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z" />
										</svg>
									</a>
									<a href="https://www.linkedin.com/in/yasir-mansoori/" target="_blank" className="social-button linkedin" rel='noreferrer'>
										<svg
											viewBox="0 -2 44 44"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<g id="Icons" stroke="none" strokeWidth={1}>
												<g transform="translate(-702.000000, -265.000000)">
													<path
														d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
														id="LinkedIn"
													></path>
												</g>
											</g>
										</svg>
									</a>
									<a href="https://www.instagram.com/mansoori_yasir786/" target="_blank" className="social-button instagram" rel='noreferrer'>
										<svg
											width="800px"
											height="800px"
											viewBox="0 0 20 20"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<g id="Page-1" stroke="none" strokeWidth={1}>
												<g
													id="Dribbble-Light-Preview"
													transform="translate(-340.000000, -7439.000000)"
												>
													<g id="icons" transform="translate(56.000000, 160.000000)">
														<path
															d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
															id="instagram-[#167]"
														></path>
													</g>
												</g>
											</g>
										</svg>
									</a>
								</div>
							</div>
							{/* Social Media Handlers end */}

						</div>
					</aside>
					{/* sidebar end */}
				</main>
			</body >
			<Footer />
		</>
	);
}
export default Main;
