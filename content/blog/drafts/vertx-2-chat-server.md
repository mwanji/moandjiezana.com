title=Vert.x chat
status=draft
type=post
date=2014-01-05
~~~~~~
Generate project with archetype

Delete unnecessary files and clean up mod.json

Use mvn vertx:runModEclipse to make sure files (eg. mod.json) are up-to-date.

If using static assets, add them to assembly <filesets>:

<fileSet>
    <outputDirectory>src/main/webapp</outputDirectory>
    <directory>src/main/webapp</directory>
    <includes>
        <include>**</include>
    </includes>
</fileSet>

