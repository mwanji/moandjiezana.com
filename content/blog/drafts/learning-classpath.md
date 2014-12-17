title=Learning the Classpath
status=draft
type=post
date=2014-02-08
~~~~~~

While [exploring](https://github.com/mwanji/jbake/tree/plugin_dir) how the bootstrap phase of a plugin system for [JBake](http://jbake.org) could work, I had to learn more about manually creating a classpath.

I'll admit that I've never had to manually manage the [classpath](http://docs.oracle.com/javase/6/docs/technotes/tools/solaris/classpath.html), so I didn't know, for example, that the `-jar` and `-cp` options were mutually exclusive: when `-jar` is used, classpath information is taken only from the JAR's manifest.

What did come in handy was the wildcard support added in Java 6. As explicit items, wildcard items and JAR manifest items can be combined in a single classpath, my JBake classpath argument ended up looking like this:

````
-cp "${JBAKE_HOME}/jbake-core.jar:plugin/*"
````
