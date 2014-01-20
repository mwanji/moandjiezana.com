title=Using Webjars
status=draft
type=post
date=2014-01-05
~~~~~~
###Overview###
[WebJars](http://webjars.org) were created by James Ward as a convenient way to manage JavaScript and CSS assets in JVM-based web applications.

###How to use###

###Fake your own###

Put the assets in `src/main/resources/META-INF/resources/webjars/<library>/<version>/<files, dirs,...>`. By replicating the Webjar project structure, you can make your own assets available to Webjar-aware tools without having to package them into a separate JAR.

###Maven plugin###

###Ecosystem###
wro4j. Still an issue around using the Maven plugin when overriding a WebJar bundled with wro4j-extensions
[humpty](http://mewf.co/humpty) is my new resource management library that treats WebJars as first-class citizens.
webjars-locator