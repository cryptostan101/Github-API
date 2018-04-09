
$(document).ready(function(){

	console.log('Ready ....');

	$('#searchUser').on('keyup', function(e){

		let username = e.target.value;

		// make request to Github

		$.ajax({

			url: 'https://api.github.com/users/'+ username,
			//url: 'https://github.ibm.com/api/v3/users/'+ username,
			data:{

				client_id:'xxxxxxxxxxxxxxxx',
				client_secret:'xxxxxxxxxxxxxxxxxxxxxxxx'
			}
		}).done(function(user){

			$('#profile').html(`

				<div class="panel panel-default">
				  <div class="panel-heading">
				    <h3 class="panel-title">${user.name}</h3>
				  </div>
				  <div class="panel-body">
				    <div class="row">

						<div class="col-md-3">
                			<img class="thumbnail avatar" src="${user.avatar_url}">
                			<a target="_blank" class="btn btn-primary" href="${user.html_url}">View Profile</a>
             		    </div>

				    	<div class="col-md-9">

				    	              <span class="label label-default">Public Repos: ${user.public_repos}</span>
              				<span class="label label-primary">Public Gists: ${user.public_gists}</span>
              				<span class="label label-success">Followers: ${user.followers}</span>
              				<span class="label label-info">Following: ${user.following}</span>
              				<br><br>
              				<ul class="list-group">
               					<li class="list-group-item">Company: ${user.company}</li>
                				<li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                				<li class="list-group-item">Location: ${user.location}</li>
                			<li class="list-group-item">Member Since: ${user.created_at}</li>
              			</ul>


				    	</div>

				    </div>
				  </div>
				</div>


			`);

		});

	});
});
