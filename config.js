const config = {
	server_ip: '127.0.0.1',
	// Hostname of the server,
	hostname: 'localhost',
	https_only: false,
	nginx_reverse_proxy: false,
	express_js_alternative_port: 30101,

	mysql_connection_string: {
		connectionLimit: 100,
		host     : process.env.MYSQL_ADDON_HOST,
		database : process.env.MYSQL_ADDON_DB,  
		user     : process.env.MYSQL_ADDON_USER,     	
		password : process.env.MYSQL_ADDON_PASSWORD,	
		database: 'bvxljx7ocmb3a1o67hi7'
	},
};

if (config.hostname.length === 0) config.hostname = config.server_ip;

module.exports = config;
