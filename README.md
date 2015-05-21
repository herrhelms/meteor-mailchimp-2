# meteor-mailchimp-2
Use MailChimp API 2.0 via meteor

### this package is a placeholder for now

Once ready, you will be able to find it on [atmospherejs.com](https://atmospherejs.com/herrhelms)

### Foreword

This package is based on [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp/tree/v0.4.2) but I needed some extras, so therefore I repacked everything and concentrated on the custom sign-up form.
It is styled in a bootstrap manner even though just the tiny important bits of the bootstrap.css necessary for the form are added.

Hope this will help if you're in need for a fast direct list signup that works out of the box. No validation emails are sent to subscribers. Their email address is added to the given listId right away.
Please feel free to add issues, fork, comment or extend...

### what's inside

A custom sign-up form that skips the default double_validation. Insert it anywhere in your template with `{{> MailChimpListSubscribe}}`

### usage

add to your project with `meteor add herrhelms:meteor-mailchimp-3`

make sure you have a settings.json file in your projects server directory.

```json
{
    "private": {
        "MailChimp": {
            "apiKey": "YOURAPIKEY",
            "listId": "YOURLISTID"
        }
    }
}
```

start you meteor app with `meteor --settings server/settings.json`

If you have any questions regarding API Keys or ListIds from MailChimp please take a look at the [MailChimp Knowledge Base](http://kb.mailchimp.com) and the [API 2.0 Documentation](http://kb.mailchimp.com/api/).

PS: Keep in mind that the 2.0 API will be deprecated before 2016
