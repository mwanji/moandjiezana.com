title=README-Driven Development
status=published
type=post
date=2013-07-12
og=true
og_description=Starting with a README leads to better software and happier users. Thanks to Github for featuring it prominently.
~~~~~~
Among [Github](http://github.com)'s many contributions to software development, the prominence it affords the README is undervalued. By making it obvious to users where to start looking for info about a project, it also gives developers a good starting point.

There's nothing worse than hearing about a new library, then discovering that it's hosted on java.net. 80% of the time, I will be unable to figure out how the library works, because java.net is so confusing and the projects it hosts rarely do a better job (10% of the time, java.net itself won't load). The most catastrophic example of this is Rome, supposedly Java's leading RSS library. [java.net site](https://java.net/projects/rome/pages/Home) links to a URL that has been taken over by spammers. The [real site](https://rometools.jira.com/wiki/display/ROME/Home) contains broken links (notably the Tutorials and Articles link!) and very little information.

When the project is on Github, however, there's a 90% chance there'll be a good README, or at least a pointer to a dedicated site. That means users feel good about checking out Github projects and that new projects are more likely to make documentation a priority.

I now try to fully embrace the README and treat it as a first-class citizen alongside code and tests. This is similar to [Amazon's "working backwards" approach](http://www.allthingsdistributed.com/2006/11/working_backwards.html). Werner Vogels summarises it as "start by writing the documents we'll need at launch (the press release and the faq) and then work towards documents that are closer to the implementation" (I first read about this as [an answer to a question on Quora](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management), but Quora has devolved into a horrible place). Starting with the README puts the developer in the mindset of the user. Questions such as "what is this for?", "what does the user need to know to get started?", "what do I want the API to look like?" come to the fore right away. Complex installations, burdensome multi-step operations, etc. are revealed and can be simplified before too many users have to struggle through them.

While I'm not yet quite as rigorous as Amazon and tend to iterate on the code and the README in tandem, the benefits are still sizeable. At the very least, I'm guaranteed to have documentation (a project without documentation might as well not exist!). At best, I'll have much better and friendlier software.
