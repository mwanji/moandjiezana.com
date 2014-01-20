title=JAX-RS 2
status=draft
type=post
date=2014-01-05
~~~~~~
JAX-RS 2.0, Hibernate 4.2, Guice 3.0 on Tomcat 7

Thought of using Wildfly, but would have had to deal with too much instability. Now, instability is limited to RESTEasy. Also, gave me a chance to improve the resteasy-guice module.

File upload with Resteasy:
Add org.jboss.resteasy:resteasy-multipart-provider:3.0-beta-6
http://www.mkyong.com/webservices/jax-rs/file-upload-example-in-resteasy/
Terse: http://docs.jboss.org/resteasy/docs/3.0-beta-6/userguide/html_single/index.html#MultipartFormData

Use @Provider, @Produces(MediaType.APPLICATION_JSON) and ContextResolver<ObjectMapper> to configure Jackson ObjectMapper.

Hibernate-c3p0 4.2.2.Final uses c3p0 0.9.1, which has a bug with @Lob, exclude it and use c3p0 0.9.2.1.
https://hibernate.atlassian.net/browse/HHH-7778

Make sure to add all resources and providers to Guice modules.

Using mustache.java + flying saucer (http://flyingsaucerproject.github.io/flyingsaucer/r8/guide/users-guide-R8.html) to dynamically generate PDFs from templated HTML is pretty sweet.

Flying Saucer declares that it's CSS 2.1 compatible, but it also supports an interesting sub-set of CSS 3, including things I'd never heard of, such as <a href="http://www.w3.org/TR/css3-page/#margin-boxes">margin boxes</a> and <a href="http://www.w3.org/TR/2007/WD-css3-gcpm-20070504/#running1">running elements</a>.

Took me a moment to understand that calling running(footer) defines the "variable" that can be used later on in the content() function.

Guice-Persist

Entity Managers are never closed if they are injected outside of a transaction/UnitOfWork!
http://stackoverflow.com/questions/14585505/jpa-guice-persist-permanently-opened-connection-issue

Hibernate/JPA

When customising the NamingStrategy, make sure to extend EJB3NamingStrategy. DefaultNamingStrategy leads to NPE.
