const AdminzHeading = (prop) => {
	return (
		<>

			<header className="w3-container w3-content" style={{padding: "64px 0"}} id="home">        
				<div>
				  	<h1 className=""><b>Hướng dẫn sử dụng plugin Administrator Z</b></h1>
				  	<span className="w3-tag w3-small w3-white w3-border">Wordpress plugin</span>
				  	<p>
				  		<a className="word-break" target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/administrator-z/">https://wordpress.org/plugins/administrator-z/</a>
			  		</p> 
			  		{prop.text &&
						prop.text
					}                 
				</div>
			</header>
		</>
	)
}
export default AdminzHeading