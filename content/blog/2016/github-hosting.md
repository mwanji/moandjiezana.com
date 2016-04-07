title=A Quick Guide to Hosting a Static Website on Github
date=2016-03-04
type=post
status=draft
og_description=A Quick Guide to Hosting a Static Website on Github
~~~~~~

1. Create repo
1. Create gh-pages branch
1. Push content
1. Verify https://<user_name>.github.io/<repo_name> published correctly
1. Create CNAME file at root of repo. It contains the site's main URL: `mydomain.com` or `www.mydomain.com`
1. If this repo is the main one for the domain name, create two A record: set the naked domain name as the host name and the IP addresses found in [Github's documentation](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider).
1. Create subdomain (www or other): new CNAME record with subdomain as host and your root Github Pages URL (https://<user_name>.github.io) as target