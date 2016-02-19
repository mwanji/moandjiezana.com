<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Moandji Ezana</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Moandji Ezana">
    <#if content?? && content.og_description?? >
      <meta property="og:type" content="article"/>
      <meta property="og:url" content="${config.site_host}${content.uri}"/>
      <meta property="og:site_name" content="Moandji Ezana Blog"/>
      <meta property="article:author" content="http://facebook.com/mwanji">
      <meta property="og:title" content="${content.title}">
      <meta property="og:description" content="${content.og_description}">
      <#if content.og_image??>
        <meta property="og:image" content="${config.site_host}/img/${content.og_image}">
      </#if>
    </#if>

    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/font-mfizz/font-mfizz.css">
    <link href="/css/styles.css" rel="stylesheet">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <!--<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">-->
    <link rel="shortcut icon" href="/favicon.ico">
  </head>
  <body>
    <div class="container">
   
