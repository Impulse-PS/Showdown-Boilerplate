





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-3b630179b3ba661bed136319970519c14eae34456b7cf575d1126c208cd61d0e.css" integrity="sha256-O2MBebO6ZhvtE2MZlwUZwU6uNEVrfPV10RJsIIzWHQ4=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-9b570fad50fd50c872c1410630c81a11e93ad851620357a8d2d4af6ffd5e42c0.css" integrity="sha256-m1cPrVD9UMhywUEGMMgaEek62FFiA1eo0tSvb/1eQsA=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>Pokemon-Showdown/passthebomb.js at master · jd4564/Pokemon-Showdown</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/2987451?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jd4564/Pokemon-Showdown" property="og:title" /><meta content="https://github.com/jd4564/Pokemon-Showdown" property="og:url" /><meta content="Pokemon-Showdown - Pokémon battle simulator. (Fork for http://wisp.psim.us)" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTgwMzEyMzY5OmZiYjc4NTJiNDU4ZTgyYzFhNTY5ZWI3YTMxMzc4OGQxZDk3MzllN2JmMjIyMmYwZWI0MmRlOWMyNzFhZGJlNzY=--0378dbd1f264223029d301c513909ffcb3ce69f7">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="BA9A:6EFF:2913419:3E9BE6A:593E7B0F" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="BA9A:6EFF:2913419:3E9BE6A:593E7B0F" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="29373427" name="octolytics-actor-id" /><meta content="Impulse-PS" name="octolytics-actor-login" /><meta content="24881181bca2713a4bdf6b0a738ca3eee4493ad9892411fbdf63ec130b8d74b2" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension3" content="desktop">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="Impulse-PS">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZmVjZGQxYmQ1ZDc1NWM2NWFmYTBmODJjZmVjZGI0OTNiNjFlM2I5MzgxNjJkMGMzOWRmMTEyNzdmMGE1NGNlZnx7InJlbW90ZV9hZGRyZXNzIjoiNDkuMTUuMzQuMjciLCJyZXF1ZXN0X2lkIjoiQkE5QTo2RUZGOjI5MTM0MTk6M0U5QkU2QTo1OTNFN0IwRiIsInRpbWVzdGFtcCI6MTQ5NzI2Njk2NCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="b08be84ace711618cc5363c25b35bf4ee3bd4e09">

  <meta http-equiv="x-pjax-version" content="ebb0f37be70b8572254f336eee1d1218">
  

    
  <meta name="description" content="Pokemon-Showdown - Pokémon battle simulator. (Fork for http://wisp.psim.us)">
  <meta name="go-import" content="github.com/jd4564/Pokemon-Showdown git https://github.com/jd4564/Pokemon-Showdown.git">

  <meta content="2987451" name="octolytics-dimension-user_id" /><meta content="jd4564" name="octolytics-dimension-user_login" /><meta content="26904896" name="octolytics-dimension-repository_id" /><meta content="jd4564/Pokemon-Showdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="3038446" name="octolytics-dimension-repository_parent_id" /><meta content="Zarel/Pokemon-Showdown" name="octolytics-dimension-repository_parent_nwo" /><meta content="3038446" name="octolytics-dimension-repository_network_root_id" /><meta content="Zarel/Pokemon-Showdown" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />
  <link href="https://github.com/jd4564/Pokemon-Showdown/commits/master.atom" rel="alternate" title="Recent Commits to Pokemon-Showdown:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/jd4564/Pokemon-Showdown/blob/master/chat-plugins/passthebomb.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    

      <div class="mobile-banner">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="stuAk2osubOFxYxW2mJ89ghqX4DcEkZqH44jiccKuZ56Q6koolqIvIgcgQy8iN6Ua0Z9D7XjkG9VqOGqmIgkWA==" /></div>
          <input type="hidden" name="mobile" value="true">
          <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

          <button type="submit" class="switch-to-mobile" data-ga-click="Mobile, switch to mobile, switch button">
            <svg aria-hidden="true" class="octicon octicon-device-mobile" height="64" version="1.1" viewBox="0 0 10 16" width="40"><path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"/></svg>
            Switch to mobile version
          </button>
</form>      </div>


        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/search" class="js-site-search-form" data-scoped-search-url="/jd4564/Pokemon-Showdown/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/jd4564/Pokemon-Showdown/blob/master/chat-plugins/passthebomb.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
            <li class="header-nav-item">
              <a href="/marketplace" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                Marketplace
</a>            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>




      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Impulse-PS"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Impulse-PS" class="avatar" src="https://avatars3.githubusercontent.com/u/29373427?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Impulse-PS</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Impulse-PS" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/Impulse-PS?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+vTfCZuaTXmr9j+UvNvmTD9DAc+i7itXsPL1CUK3Hp/a+ndX5utwobljZzEvFovgif2aNAoGAYLphTZ33KaI7Q==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5dDtP2UTCnp/1SSVLJJNgZ6h2IT2so4ax1QcIWRUWU3F3kVhGGI3om1AfDC/XyAtKB9Df15apM+eI99f+kXPPw==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      

      



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Avl+MvJQFSDHFMLItw85vN48Ar80dmtfmPTC7hqcN9V6VtBDypGrr0534PA2FDPVvB1lEzJZSXu8GjnQa/5W9Q==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="26904896" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jd4564/Pokemon-Showdown/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/jd4564/Pokemon-Showdown/watchers"
              aria-label="8 users are watching this repository">
              8
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yGsApFP8vopmCbruBl+MKizveI0aEvnqPmK2XhZcIl2UPeP5Iu8AyiP9qndznTP8ZBrGZecrQshLdLmjBFGqIg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jd4564/Pokemon-Showdown"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jd4564/Pokemon-Showdown/stargazers"
           aria-label="5 users starred this repository">
          5
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bNtr7/gNC6phKsiDMvyU12eDBFeL6fE6hTu83UlY5UuNR8VRBtrWWwqtao3laTl+naOwIdTO9SSI5c0jzV3NXg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jd4564/Pokemon-Showdown"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jd4564/Pokemon-Showdown/stargazers"
           aria-label="5 users starred this repository">
          5
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jM+gwcCErLQulE4Qr76HuEnD4Ej4EdQm3jHYPCpvr9DpjKycs4OurcNhr55/ijNWXK79c85GAipfVKhqtUx8LA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of jd4564/Pokemon-Showdown to your account"
                aria-label="Fork your own copy of jd4564/Pokemon-Showdown to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/jd4564/Pokemon-Showdown/network" class="social-count"
       aria-label="1170 users forked this repository">
      1,170
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a href="/jd4564" class="url fn" rel="author">jd4564</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jd4564/Pokemon-Showdown" data-pjax="#js-repo-pjax-container">Pokemon-Showdown</a></strong>

    <span class="fork-flag">
      <span class="text">forked from <a href="/Zarel/Pokemon-Showdown">Zarel/Pokemon-Showdown</a></span>
    </span>
</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jd4564/Pokemon-Showdown" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jd4564/Pokemon-Showdown" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jd4564/Pokemon-Showdown/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jd4564/Pokemon-Showdown/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/jd4564/Pokemon-Showdown/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jd4564/Pokemon-Showdown/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/jd4564/Pokemon-Showdown/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jd4564/Pokemon-Showdown/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/jd4564/Pokemon-Showdown/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/jd4564/Pokemon-Showdown/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
        
        



    
  <a href="/jd4564/Pokemon-Showdown/blob/a64b279a5f01e4d2aa5590aae9205f754e2406cd/chat-plugins/passthebomb.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:89a566de72c41e787c1e387218e0d312 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/Gold/chat-plugins/passthebomb.js"
               data-name="Gold"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                Gold
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/Wando94-patch-1/chat-plugins/passthebomb.js"
               data-name="Wando94-patch-1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                Wando94-patch-1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/gen6/chat-plugins/passthebomb.js"
               data-name="gen6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gen6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/log-upgrade/chat-plugins/passthebomb.js"
               data-name="log-upgrade"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                log-upgrade
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jd4564/Pokemon-Showdown/blob/master/chat-plugins/passthebomb.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/old-seasonals/chat-plugins/passthebomb.js"
               data-name="old-seasonals"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                old-seasonals
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/past-gens/chat-plugins/passthebomb.js"
               data-name="past-gens"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                past-gens
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/patch-1/chat-plugins/passthebomb.js"
               data-name="patch-1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                patch-1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/patch-2/chat-plugins/passthebomb.js"
               data-name="patch-2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                patch-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/poll-display-refactor/chat-plugins/passthebomb.js"
               data-name="poll-display-refactor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                poll-display-refactor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/prototype-party/chat-plugins/passthebomb.js"
               data-name="prototype-party"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                prototype-party
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/psgo-refactor/chat-plugins/passthebomb.js"
               data-name="psgo-refactor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                psgo-refactor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jd4564/Pokemon-Showdown/blob/wssb/chat-plugins/passthebomb.js"
               data-name="wssb"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                wssb
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/jd4564/Pokemon-Showdown/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jd4564/Pokemon-Showdown"><span>Pokemon-Showdown</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/jd4564/Pokemon-Showdown/tree/master/chat-plugins"><span>chat-plugins</span></a></span><span class="separator">/</span><strong class="final-path">passthebomb.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/jd4564/Pokemon-Showdown/contributors/master/chat-plugins/passthebomb.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>
  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/jd4564/Pokemon-Showdown/raw/master/chat-plugins/passthebomb.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/jd4564/Pokemon-Showdown/blame/master/chat-plugins/passthebomb.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/jd4564/Pokemon-Showdown/commits/master/chat-plugins/passthebomb.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/edit/master/chat-plugins/passthebomb.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="drqKGXBmlrr4+qhj/GaJpTqhjMOPbNymdTqrDF+O032vZW3gJQoAgLglFZ9pEKaJVRxHhl0juu8J2zpgb7kkzQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jd4564/Pokemon-Showdown/delete/master/chat-plugins/passthebomb.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ztgZkQSzo/Pz/XEwJ/7JnLxZmQTQwNgPO67kdIUUJ+/Qmks0Nzu5h8kbQOsgx5Rk0d+txKN8hLP77itJqwIMbg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      276 lines (249 sloc)
      <span class="file-info-divider"></span>
    12.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">class</span> <span class="pl-en">PassTheBomb</span> {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">constructor</span>(<span class="pl-smi">room</span>, <span class="pl-smi">seconds</span>) {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">players</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Map</span>();</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span> <span class="pl-k">=</span> room;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">timeLeft</span> <span class="pl-k">=</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>() <span class="pl-k">+</span> seconds <span class="pl-k">*</span> <span class="pl-c1">1000</span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtml|bomb<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;A game of &lt;b&gt;Pass the Bomb&lt;/b&gt; has been started!&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>The game will begin in &lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> seconds <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt; seconds!&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;button name = &quot;send&quot; value = &quot;/passthebomb join&quot;&gt;Join!&lt;/button&gt;&lt;/center&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">		);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">size</span> <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtmlchange|bomb<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;This game of Pass the Bomb has been ended due to the lack of players.&lt;/center&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">end</span>();</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">nextRound</span>();</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">		}, seconds <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">updateJoins</span>() {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bomb<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;A game of &lt;b&gt;Pass the Bomb&lt;/b&gt; has been started!&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>The game will begin in &lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>((<span class="pl-c1">this</span>.<span class="pl-smi">timeLeft</span> <span class="pl-k">-</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>()) <span class="pl-k">/</span> <span class="pl-c1">1000</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt; seconds&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;button name = &quot;send&quot; value = &quot;/passthebomb join&quot;&gt;Join!&lt;/button&gt;&lt;/center&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">size</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">			msg <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;center&gt;&lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">size</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">size</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>user has<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>users have<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> joined: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Array</span>.<span class="pl-en">from</span>(<span class="pl-c1">this</span>.<span class="pl-smi">players</span>).<span class="pl-en">map</span>(<span class="pl-smi">player</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(player[<span class="pl-c1">1</span>].<span class="pl-c1">name</span>)).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/center&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtmlchange|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> msg <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">join</span>(<span class="pl-smi">user</span>, <span class="pl-smi">self</span>) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You cannot join a game of pass the bomb after it has been started.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-smi">named</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must choose a name before joining a game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">has</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>)) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You have already joined this game of pass the bomb.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> players <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-en">from</span>(<span class="pl-c1">this</span>.<span class="pl-smi">players</span>).<span class="pl-en">map</span>(<span class="pl-smi">playerinfo</span> <span class="pl-k">=&gt;</span> playerinfo[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> joined <span class="pl-k">=</span> <span class="pl-smi">players</span>.<span class="pl-en">filter</span>(<span class="pl-smi">player</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">player</span>.<span class="pl-smi">ip</span> <span class="pl-k">===</span> <span class="pl-smi">user</span>.<span class="pl-smi">latestIp</span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">joined</span>.<span class="pl-c1">length</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have already joined this game of pass the bomb under the name &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> joined[<span class="pl-c1">0</span>].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;. Use that name/alt instead.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">set</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>, {<span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-smi">user</span>.<span class="pl-c1">name</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>ip<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-smi">user</span>.<span class="pl-smi">latestIp</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>status<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>alive<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>warnings<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">0</span>});</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">updateJoins</span>();</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">leave</span>(<span class="pl-smi">userid</span>, <span class="pl-smi">self</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">has</span>(userid)) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You haven<span class="pl-cce">\&#39;</span>t joined this game of pass the bomb yet.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">round</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">delete</span>(userid);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">updateJoins</span>();</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have left this game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">removeUser</span>(userid, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">getSurvivors</span>() {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">Array</span>.<span class="pl-en">from</span>(<span class="pl-c1">this</span>.<span class="pl-smi">players</span>).<span class="pl-en">filter</span>(<span class="pl-smi">player</span> <span class="pl-k">=&gt;</span> player[<span class="pl-c1">1</span>].<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>alive<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">setBomb</span>(<span class="pl-smi">userid</span>) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>userid) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> players <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getSurvivors</span>();</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">holder</span> <span class="pl-k">=</span> players[<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-smi">players</span>.<span class="pl-c1">length</span>)][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">holder</span> <span class="pl-k">=</span> userid;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">getMsg</span>() {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bomb<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;&lt;b&gt;Round <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Players: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getSurvivors</span>().<span class="pl-en">map</span>(<span class="pl-smi">player</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(player[<span class="pl-c1">1</span>].<span class="pl-c1">name</span>)).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;&lt;small&gt;Use /pb or /passbomb [player] to pass the bomb to another player!&lt;/small&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> msg;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">nextRound</span>() {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">clearTimeout</span>(<span class="pl-c1">this</span>.<span class="pl-smi">timer</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">canPass</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">checkWinner</span>()) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">getWinner</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">forEach</span>((<span class="pl-smi">details</span>, <span class="pl-smi">user</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(user).<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>alive<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(user).<span class="pl-smi">warnings</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">round</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">madeMove</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtml|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getMsg</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;&lt;i&gt;Wait for it...&lt;/i&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">release</span> <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">setBomb</span>();</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> player <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>).<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtmlchange|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getMsg</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;&lt;b style = &quot;font-size: 10pt;&quot;&gt;The bomb has been passed to &lt;span style = &quot;color:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Wisp</span>.<span class="pl-en">hashColor</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(player) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;!&lt;/b&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">canPass</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">resetTimer</span>();</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">		}, (<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">12</span>) <span class="pl-k">+</span> <span class="pl-c1">3</span>) <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">pass</span>(<span class="pl-smi">user</span>, <span class="pl-smi">target</span>, <span class="pl-smi">self</span>) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> getUser <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>getUser) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You aren&#39;t a player in this game of Pass the Bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">round</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>The game hasn&#39;t started yet!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">getUser</span>.<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>dead<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You&#39;ve already been killed!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">target</span>.<span class="pl-en">trim</span>()) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You need to choose a player to pass the bomb to.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetId <span class="pl-k">=</span> <span class="pl-en">toId</span>(target);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetUser <span class="pl-k">=</span> <span class="pl-smi">Users</span>.<span class="pl-en">getExact</span>(targetId) <span class="pl-k">?</span> <span class="pl-en">Users</span>(targetId).<span class="pl-c1">name</span> <span class="pl-k">:</span> target;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">has</span>(targetId)) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(targetUser <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> is not a player!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(targetId).<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>dead<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(targetId).<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> has already been killed!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (targetId <span class="pl-k">===</span> <span class="pl-smi">user</span>.<span class="pl-smi">userid</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You<span class="pl-cce">\&#39;</span>re already in possession of the bomb! You can<span class="pl-cce">\&#39;</span>t pass it to yourself!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">canPass</span> <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-smi">holder</span> <span class="pl-k">!==</span> <span class="pl-smi">user</span>.<span class="pl-smi">userid</span>) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">getUser</span>.<span class="pl-smi">warnings</span> <span class="pl-k">&lt;</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>).<span class="pl-smi">warnings</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You&#39;re not in posession of the bomb yet!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">removeUser</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have been disqualified for spamming /passbomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">self</span>.<span class="pl-en">privateModCommand</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> was disqualified for spamming /passbomb.)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">madeMove</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">setBomb</span>(targetId);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|html|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> passed the bomb to &lt;b style = &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Wisp</span>.<span class="pl-en">hashColor</span>(targetId) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(targetId).<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt;!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">checkWinner</span>()) <span class="pl-c1">this</span>.<span class="pl-en">getWinner</span>();</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">resetTimer</span>() {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">timer</span> <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> player <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>).<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|html|&lt;b&gt;The bomb exploded and killed &lt;span style = &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Wisp</span>.<span class="pl-en">hashColor</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> player <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>).<span class="pl-c1">status</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>dead<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">canPass</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">setTimeout</span>(() <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">nextRound</span>();</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-c1">1200</span>);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		}, (<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">26</span>) <span class="pl-k">+</span> <span class="pl-c1">5</span>) <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">dq</span>(<span class="pl-smi">user</span>, <span class="pl-smi">target</span>, <span class="pl-smi">self</span>) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">round</span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You can only disqualify a player after the first round has begun.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetId <span class="pl-k">=</span> <span class="pl-en">toId</span>(target);</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> getUser <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(targetId);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>getUser) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> is not a player!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">getUser</span>.<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>dead<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">sendReply</span>(<span class="pl-smi">getUser</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> has already been killed!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">self</span>.<span class="pl-en">privateModCommand</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">getUser</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> was disqualified by <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">removeUser</span>(targetId);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">removeUser</span>(<span class="pl-smi">userid</span>, <span class="pl-smi">left</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">has</span>(userid)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|html|&lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(userid).<span class="pl-c1">name</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> has <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (left <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>been disqualified from<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> the game.&lt;/b&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">delete</span>(userid);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">madeMove</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">checkWinner</span>()) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">getWinner</span>();</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">canPass</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtmlchange|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getMsg</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;&lt;i&gt;Wait for it...&lt;/i&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">holder</span> <span class="pl-k">===</span> userid) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">setBomb</span>();</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> player <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">players</span>.<span class="pl-c1">get</span>(<span class="pl-c1">this</span>.<span class="pl-smi">holder</span>).<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|html|The bomb has been passed to &lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(player) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>!&lt;/b&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">checkWinner</span>() {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">getSurvivors</span>().<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">getWinner</span>() {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> winner <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getSurvivors</span>()[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>].<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|html|&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;The winner of this game of Pass the Bomb is &lt;b style = &quot;color:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Wisp</span>.<span class="pl-en">hashColor</span>(winner) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(winner) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>!&lt;/b&gt; Congratulations!&lt;/center&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>marketplace<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			msg <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;center&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(winner) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> has also won &lt;b&gt;5&lt;/b&gt; credits for winning!&lt;/center&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Wisp</span>.<span class="pl-en">writeCredits</span>(winner, <span class="pl-c1">5</span>, () <span class="pl-k">=&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(msg).<span class="pl-en">update</span>());</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(msg).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">end</span>();</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">end</span>(<span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (user) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class = &quot;infobox&quot;&gt;&lt;center&gt;This game of Pass the Bomb has been forcibly ended by &lt;b&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(<span class="pl-smi">user</span>.<span class="pl-c1">name</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/b&gt;.&lt;/center&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">madeMove</span>) {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|uhtmlchange|bomb<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">bombCount</span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">round</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> msg).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|html|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> msg).<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">release</span>) <span class="pl-c1">clearTimeout</span>(<span class="pl-c1">this</span>.<span class="pl-smi">release</span>);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">clearTimeout</span>(<span class="pl-c1">this</span>.<span class="pl-smi">timer</span>);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> commands <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>help<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">help</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help passthebomb<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&#39;</span>new<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>start<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">	begin<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>start<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">start</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is already a game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-en">isMuted</span>(user) <span class="pl-k">||</span> <span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot use this while unable to speak.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>broadcast<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>, room)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must be ranked + or higher in this room to start a game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">target</span>.<span class="pl-en">trim</span>()) target <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>60<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(target)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span> is not a valid number.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-en">includes</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> target <span class="pl-k">&gt;</span> <span class="pl-c1">180</span> <span class="pl-k">||</span> target <span class="pl-k">&lt;</span> <span class="pl-c1">10</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>The number of seconds needs to be a non-decimal number between 10 and 180.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">PassTheBomb</span>(room, <span class="pl-c1">Number</span>(target));</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">join</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-en">isMuted</span>(user) <span class="pl-k">||</span> <span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot use this while unable to speak.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-c1">join</span>(user, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">leave</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-en">leave</span>(<span class="pl-smi">user</span>.<span class="pl-smi">userid</span>, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">proceed</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-en">isMuted</span>(user) <span class="pl-k">||</span> <span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot use this while unable to speak.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>broadcast<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>, room)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must be ranked + or higher in this room to forcibly begin the first round of a game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-smi">round</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>This game of pass the bomb has already begun!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-smi">players</span>.<span class="pl-c1">size</span> <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>There aren<span class="pl-cce">\&#39;</span>t enough players yet. Wait for more to join!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> forcibly started round 1)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-en">nextRound</span>();</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">	disqualify<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>dq<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">dq</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-en">isMuted</span>(user) <span class="pl-k">||</span> <span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot use this while unable to speak.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mute<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>, room)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must be ranked % or higher in this room to disqualify a user from a game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-en">dq</span>(user, target, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">	passbomb<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pass<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">pass</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-en">isMuted</span>(user) <span class="pl-k">||</span> <span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">errorReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot use this while unable to speak.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-en">pass</span>(user, target, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">	cancel<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">end</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There is no game of pass the bomb going on in this room.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mute<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>, room)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must be ranked % or higher in this room to end a game of pass the bomb.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">passthebomb</span>.<span class="pl-en">end</span>(user);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">exports</span>.<span class="pl-smi">commands</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">	ptb<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>passthebomb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">	passthebomb<span class="pl-k">:</span> commands,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">	pb<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>passbomb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">	passbomb<span class="pl-k">:</span> <span class="pl-smi">commands</span>.<span class="pl-smi">pass</span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">	passthebombhelp<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb start [seconds] - Starts a game of pass the bomb in the room. The first round will begin after the mentioned number of seconds (1 minute by default). Requires + or higher to use.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb join/leave - Joins/Leaves a game of pass the bomb.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb proceed - Forcibly starts the first round of a game. Requires + or higher to use.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb dq [user] - Disqualifies a player from a game of pass the bomb. Requires % or higher to use.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb pass [user] - Passes the bomb to another player. (NOTE: Spamming this can get you disqualified)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>/passthebomb end - Forcibly ends a game of pass the bomb. Requires % or higher to use.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>(/ptb is a valid alias for /passthebomb)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">	],</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>






  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>



    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.25272s from github-fe155-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-c3IPAnuzF/zrEYwlknXaS+Xvo0TCRqEjQaaMMWjO6qc=" src="https://assets-cdn.github.com/assets/frameworks-73720f027bb317fceb118c259275da4be5efa344c246a12341a68c3168ceeaa7.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-H5QLYYkn6D0c00dgltzjiS6S1mWzZ9c/vAaxm/FF6P4=" src="https://assets-cdn.github.com/assets/github-1f940b618927e83d1cd3476096dce3892e92d665b367d73fbc06b19bf145e8fe.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

