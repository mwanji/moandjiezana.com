title=Announcing humpty
status=draft
type=post
date=2014-01-05
~~~~~~
Announcing humpty

humpty puts your web assets back together. It aims to be  a small and easy-to-use framework.

Web asset management tools in Java leave something to be desired. Despite their qualities, wro4j and Jawr, the leading frameworks, are big, difficult to get started with and easy to get wrong.

I created humpty to take advantage of new (or new to me!) developments: [WebJars](http://webjars.org) and ServiceLoaders. By doing this, configuration is reduced to minimal web.xml configuration, a declarative manifest and, especially, simply adding JARs to the classpath. Want minification? Add humpty-compression to your dependencies. Want to compile CoffeeScript? Add humpty-coffeescript. That's all.
