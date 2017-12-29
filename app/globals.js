'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "XMRPool.net",
		api_url : 'https://api.xmrpool.net',
		pools : [
			{
				'name' : 'supportXMR.com',
				'api_url' : 'https://supportxmr.com/api'
			},
			{
				'name' : 'XMRPool.net', 
				'api_url' : 'https://api.xmrpool.net'
			},
			{
				'name' : 'ViaXMR.com',
				'api_url' : 'https://api.viaxmr.com'
			},
			{
				'name' : 'Moria Mining Pool',
				'api_url' : 'https://api.moriaxmr.com'
			},
			{	
				'name' : 'Monero Ocean', 
				'api_url' : 'https://api.moneroocean.stream'
			}
		],
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});