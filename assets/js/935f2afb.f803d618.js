"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"category","label":"Installation","collapsed":false,"items":[{"type":"link","label":"Base requirements","href":"/docs/installation/base_requirements","docId":"installation/base_requirements"},{"type":"category","label":"Official methods","items":[{"type":"link","label":"Docker","href":"/docs/installation/docker","docId":"installation/docker"},{"type":"category","label":"From Source","items":[{"type":"link","label":"Installation","href":"/docs/installation/source","docId":"installation/source"},{"type":"link","label":"Starting Mylar3","href":"/docs/installation/running","docId":"installation/running"}],"collapsed":true,"collapsible":true,"href":"/docs/category/from-source"}],"collapsed":true,"collapsible":true,"href":"/docs/category/official-methods"}],"collapsible":true,"href":"/docs/category/installation"},{"type":"category","label":"Guides","collapsed":true,"items":[{"type":"link","label":"Carepackage","href":"/docs/guides/carepackage","docId":"guides/carepackage"},{"type":"link","label":"Debug Logging","href":"/docs/guides/debug_logging","docId":"guides/debug_logging"},{"type":"link","label":"Automatic Backups","href":"/docs/guides/auto_backups","docId":"guides/auto_backups"},{"type":"link","label":"Download Options","href":"/docs/guides/download_options","docId":"guides/download_options"},{"type":"link","label":"CDH / ComicRN","href":"/docs/guides/cdh_comicrn","docId":"guides/cdh_comicrn"},{"type":"link","label":"Folder/File Formats","href":"/docs/guides/formats","docId":"guides/formats"},{"type":"link","label":"Moving to a new file-system?","href":"/docs/guides/locmove","docId":"guides/locmove"},{"type":"link","label":"Setting up Mylar as a service on Windows","href":"/docs/guides/windows_service","docId":"guides/windows_service"}],"collapsible":true,"href":"/docs/category/guides"},{"type":"link","label":"How to Contribute","href":"/docs/contributing","docId":"contributing"},{"type":"link","label":"community","href":"/docs/community","docId":"community"},{"type":"link","label":"Frequently Asked Questions (FAQ)","href":"/docs/faq","docId":"faq"}],"api":[{"type":"category","label":"API","items":[{"type":"link","label":"depreciated","href":"/docs/api/depreciated","docId":"api/depreciated"}],"collapsed":true,"collapsible":true,"href":"/docs/api/endpoints"}]},"docs":{"api/depreciated":{"id":"api/depreciated","title":"depreciated","description":"","sidebar":"api"},"api/endpoints":{"id":"api/endpoints","title":"endpoints","description":"","sidebar":"api"},"api/intro":{"id":"api/intro","title":"intro","description":""},"community":{"id":"community","title":"community","description":"Support & Discussion","sidebar":"docsSidebar"},"contributing":{"id":"contributing","title":"How to Contribute","description":"We\'re always looking for people to help make Mylar3 even better, and there are a number of ways to do this:","sidebar":"docsSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions (FAQ)","description":"- Using DDL, Mylar can\'t find a comic even though it\'s there","sidebar":"docsSidebar"},"getting_started":{"id":"getting_started","title":"Getting Started","description":"let\'s get the party started!"},"guides/auto_backups":{"id":"guides/auto_backups","title":"Automatic Backups","description":"The ability to backup both the mylar.db_** and config.ini_ is present within Mylar.","sidebar":"docsSidebar"},"guides/carepackage":{"id":"guides/carepackage","title":"Carepackage","description":"What is the carepackage?","sidebar":"docsSidebar"},"guides/cdh_comicrn":{"id":"guides/cdh_comicrn","title":"CDH / ComicRN","description":"To post-process files that have downloaded via newsgroups - the two available choices are Completed Download Handling (CDH)) or ComicRN. The preferential choice is CDH, but there are use-cases for ComicRN. Here are some of the advantages / disadvantages of each method:","sidebar":"docsSidebar"},"guides/debug_logging":{"id":"guides/debug_logging","title":"Debug Logging","description":"Debug (sometimes we call it Verbose) logging logs more detailed information to the log files from the point of activation.","sidebar":"docsSidebar"},"guides/download_options":{"id":"guides/download_options","title":"Download Options","description":"Post-processing","sidebar":"docsSidebar"},"guides/formats":{"id":"guides/formats","title":"Folder/File Formats","description":"Folder Format","sidebar":"docsSidebar"},"guides/locmove":{"id":"guides/locmove","title":"Moving to a new file-system?","description":"- Make sure that the Comic Location path in the Mylar GUI is pointing to the original location where the comics were previously stored","sidebar":"docsSidebar"},"guides/windows_service":{"id":"guides/windows_service","title":"Setting up Mylar as a service on Windows","description":"1.  Download Non-Sucking Service Manager (NSSM) (either 32 or 64-bit pre-release version), and drop the exe into your C:/Windows/System32 folder so it can be called from anywhere. Alternatively, you can download it to a specific location and add it to your path or just run it from that location each time.","sidebar":"docsSidebar"},"hints":{"id":"hints","title":"Helpful hints","description":"- Ensure Comic Location is specified in the configuration (Configuration --\x3e Web Interface --\x3e Comic Location)"},"installation/base_requirements":{"id":"installation/base_requirements","title":"Basic Requirements","description":"What is required to run mylar3?","sidebar":"docsSidebar"},"installation/docker":{"id":"installation/docker","title":"Docker","description":"How to install via Docker image","sidebar":"docsSidebar"},"installation/github":{"id":"installation/github","title":"github","description":""},"installation/running":{"id":"installation/running","title":"Starting Mylar3","description":"How to run Mylar3","sidebar":"docsSidebar"},"installation/source":{"id":"installation/source","title":"Installation","description":"Install mylar3 using the source","sidebar":"docsSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Introduction","sidebar":"docsSidebar"},"mismatched":{"id":"mismatched","title":"Mismatched Status","description":"mismatched - what?"},"series.json/series_json":{"id":"series.json/series_json","title":"series_json","description":"Metadata rules everything - but when it comes to series info it\'s harder for that information to get passed to individual issues transparently via the typical comicinfo.xml."},"series.json/series_json_examples":{"id":"series.json/series_json_examples","title":"series_json_examples","description":"Example: Print series with Continuing Status"},"series.json/series_json_schema":{"id":"series.json/series_json_schema","title":"series_json_schema","description":"* [[series.json schema (version 1.0.1)]]"},"usage":{"id":"usage","title":"Basic Usage","description":"From a command line/shell and in the location where Mylar is installed - typing  Mylar.py --help will give a list of available options, and/or removing the `--help` switch will start Mylar."},"where_metadata":{"id":"where_metadata","title":"Where does the metadata come from?","description":"Mylar uses ComicVine (CV) for it\'s metadata (series, issues, etc) and for subsequent updates to said metadata."}}}')}}]);