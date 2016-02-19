<#include "header.ftl">
	
	<#if content?? && content.series?? && content.series == "getonline" >
    <h1><a href="/get-online">Get Online!</a></h1>
	<#else>
    <h1><a href="/">Moandji Ezana</a> <small>Blog</small></h1>
	</#if>

  <div class="row">
    <div class="col-lg-12">
      <h4>${content.date?string("MMMM dd, yyyy")}</h4>
       <h2><a href="${content.uri}">${content.title}</a></h2>
    </div>
  </div>
  
  <div class="row post-body">
    <div class="col-lg-10">
    	${content.body}
	  </div>
  </div>

<#include "footer.ftl">
