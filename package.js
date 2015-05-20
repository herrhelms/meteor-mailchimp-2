Package.describe({
    name: 'herrhelms:meteor-mailchimp-2',
    version: '0.0.1',
    summary: 'MailChimp API 2.0 ported to meteor (with custom signup form)',
    git: 'https://github.com/herrhelms/meteor-mailchimp-2.git',
    documentation: 'README.md'
});

Npm.depends({'mailchimp': '1.1.0'});

Package.onUse(function(api, where) {
    api.versionsFrom('1.1.0.2');
    api.use(['templating'], 'client');
    api.addFiles( 'lib/server/mailchimp.js', 'server');
    api.addFiles(['client/subscribe.css', 'client/subscribe.html', 'client/subscribe.js', 'client/mailchimp.js'], 'client');
    api.export('MailChimp', ['server', 'client']);
});
