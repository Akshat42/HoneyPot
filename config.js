const config = {
	server_ip: '127.0.0.1',
	// Hostname of the server,
	hostname: 'localhost',
	https_only: false,
	nginx_reverse_proxy: false,
	express_js_alternative_port: 30101,

	mysql_connection_string: {
		connectionLimit: 100,
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '123456',
		database: 'tail-f'
	},
};

if (config.hostname.length === 0) config.hostname = config.server_ip;

module.exports = config;
