Package.describe({
    name: 'herrhelms:meteor-mailchimp-2',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'extended package based on miro:mailchimp',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/herrhelms/meteor-mailchimp-2.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({ 'mailchimp': '1.1.0' });

Package.onUse( function ( api, where ) {
    api.versionsFrom('1.1.0.2');
    api.use(['templating'], 'client');
    api.addFiles( 'lib/server/mailchimp.js', 'server' );
    api.addFiles(['lib/client/views/subscribe/subscribe.html', 'lib/client/views/subscribe/subscribe.js', 'lib/client/mailchimp.js'], 'client' );
    api.export( 'MailChimp', ['server', 'client'] );
});
