import React from "react";

export default function RepeatFooter() {
	return (
		<footer className="pb-32">

			<div className="py-12">
	      <div className="container max-w-screen-lg m-auto">
	        <h3 className="font-bold text-md uppercase border-b-4 border-repeat-black text-repeat-black">Sign up for regular updates on REPEAT analysis</h3>
					{/*<!-- Begin Mailchimp Signup Form -->*/}
					<div id="mc_embed_signup" className="pt-6">
						<form action="https://princeton.us5.list-manage.com/subscribe/post?u=a7d8e16f396e2562aa11c43a5&amp;id=11745a1e60" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate flex gap-4" target="_blank" noValidate>
							<div className="w-9/12">
								<div className="mc-field-group">
									<label htmlFor="mce-EMAIL" className="sr-only">Enter your email address</label>
									<input type="email" placeholder="Enter your email address" name="EMAIL" aria-hidden="true" className="required email w-full border border-black py-2 px-3 rounded" id="mce-EMAIL" />
								</div>
								<div id="mce-responses" className="clear">
									<div className="response" id="mce-error-response" style={{display:"none"}}></div>
									<div className="response" id="mce-success-response" style={{display:"none"}}></div>
								</div>
								{/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
								<div className="sr-only" aria-hidden="true">
									<input type="text" name="b_a7d8e16f396e2562aa11c43a5_11745a1e60" tabIndex="-1" />
								</div>
							</div>
							<div className="w-3/12">
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="w-full bg-repeat-dark-blue text-white font-bold py-2 px-3 border border-repeat-dark-blue rounded cursor-pointer" />
							</div>
						</form>
					</div>
					<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
					<script type='text/javascript'>
						{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[7]='MMERGE7';ftypes[7]='phone';fnames[3]='MMERGE3';ftypes[3]='phone';fnames[5]='MMERGE5';ftypes[5]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}
					</script>
					{/*<!--End mc_embed_signup-->*/}
				</div>
			</div>

			<div className="flex mt-10 pt-4 border-t-2 border-repeat container max-w-screen-lg h-full m-auto">

				<div className="flex-1">
					<img className="max-h-10" src="/images/princeton-logo.svg" alt="" />
				</div>
				<div className="flex-1 text-right">
        <a href="/" className="inline-block pl-4 text-sm text-repeat-black font-semibold">
						Home
					</a>
					<a href="/about" className="inline-block pl-4 text-sm text-repeat-black font-semibold">
						About
					</a>
					<a href="/policies" className="inline-block pl-4 text-sm text-repeat-black font-semibold">
						Policies
					</a>
					<a href="/media" className="inline-block pl-4 text-sm text-repeat-black font-semibold">
						Media
					</a>
				</div>
			</div>
		</footer>
	);
}
