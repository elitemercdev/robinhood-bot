const dotenv = require('dotenv').config();

const config = {
    token: process.env.TOKEN,
    refresh_token: process.env.REFRESH_TOKEN,
    scope: 'internal',
    url: 'https://api.robinhood.com/',
    endpoints: {
        login:  'oauth2/token/',
        logout: 'oauth2/revoke_token/',
        investment_profile: 'user/investment_profile/',
        accounts: 'accounts/',
        ach_iav_auth: 'ach/iav/auth/',
        ach_relationships:  'ach/relationships/',
        ach_transfers:'ach/transfers/',
        ach_deposit_schedules: "ach/deposit_schedules/",
        applications: 'applications/',
        dividends:  'dividends/',
        edocuments: 'documents/',
        earnings: 'marketdata/earnings/',
        instruments:  'instruments/',
        margin_upgrade:  'margin/upgrades/',
        markets:  'markets/',
        notifications:  'notifications/',
        notifications_devices: "notifications/devices/",
        orders: 'orders/',
        cancel_order: 'orders/',      //API expects https://api.robinhood.com/orders/{{orderId}}/cancel/
        password_reset: 'password_reset/request/',
        quotes: 'quotes/',
        document_requests:  'upload/document_requests/',
        user: 'user/',

        user_additional_info: "user/additional_info/",
        user_basic_info: "user/basic_info/",
        user_employment: "user/employment/",
        user_investment_profile: "user/investment_profile/",

        options_positions: "options/aggregate_positions/",
        watchlists: 'watchlists/',
        positions: 'positions/',
        fundamentals: 'fundamentals/',
        sp500_up: 'midlands/movers/sp500/?direction=up',
        sp500_down: 'midlands/movers/sp500/?direction=down',
        news: 'midlands/news/',
        tag: 'midlands/tags/tag/'
    },
    clientId: 'c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS'
};
module.exports = config;