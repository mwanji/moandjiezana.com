title=Unit-testing Convenience Methods
status=published
type=post
date=2009-11-08
og_description=Keep it simple.
~~~~~~
An easy way to unit test convenience methods: bootstrap them with the already-tested methods they&apos;re simplifying the interface of.

The advantage is that you&apos;re doing state-based rather than interaction-based testing and the assertions are fairly readable (and would be even more so with FEST-Assert).

<script src="http://gist.github.com/226640.js"></script>
