import{html,PolymerElement}from"../../node_modules/@polymer/polymer/polymer-element.js";import{setPassiveTouchGestures,setRootPath}from"../../node_modules/@polymer/polymer/lib/utils/settings.js";import"../../node_modules/@polymer/app-layout/app-layout.js";import"../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";import"../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";import"../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";import"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"../../node_modules/@polymer/paper-styles/paper-styles.js";class MongodbPhpQueryBuilderApp extends PolymerElement{static get template(){return html`
			<style>
				:host {
					--app-primary-color: #4285f4;
					--app-secondary-color: black;

    				display: block;
					display: flex;
					flex-direction: column;
        		}
				iron-list {
					flex: 1 1 auto;
				}
				app-header.homepage {
					color: #fff;
					background-color: rgb(250,250,250);
				}
				app-header paper-icon-button {
					--paper-icon-button-ink-color: white;
				}
				app-header app-toolbar div.block-homepage{
					margin-left: 24px !important;
				}
				app-header app-toolbar div.block-homepage div.main-title{
					color: #757575;
					font-family: "Product Sans", Arial, Helvetica, sans-serif;
    				font-size: 22px;
    				font-style: normal;
    				font-weight: 400;
				}
				app-header app-toolbar paper-button{
					color: #757575;
				}
				app-header app-toolbar div.block-homapage-reserved{
					margin-right: 24px !important;
				}
				app-header app-toolbar div.block-homapage-reserved paper-button{
					
				}
				paper-progress {
					width: 100%;
				}
				paper-progress.blue {
					--paper-progress-active-color: var(--paper-light-blue-500);
					--paper-progress-secondary-color: var(--paper-light-blue-100);
				}
	
				paper-progress.red {
					--paper-progress-active-color: var(--paper-red-500);
					--paper-progress-secondary-color: var(--paper-red-100);
				}
	
				paper-progress.green {
					--paper-progress-active-color: var(--paper-light-green-500);
					--paper-progress-secondary-color: var(--paper-light-green-100);
				}
				.spacer{
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					box-sizing: border-box;
				}
				
				paper-tabs {
					color: black;
					font-size: 16px;
					--paper-tabs-selection-bar-color: var(--accent-color);
					--paper-tab-ink: #1e88e5;
					--paper-tabs-selection-bar:{
						z-index:1;
					}
				  }
				
				paper-card {
					width: 100%;
					z-index: -1;
				}
				.horizontal {
					@apply --layout-horizontal;
				}
				.flex {
					@apply --layout-flex;
				}
				.justified {
					@apply --layout-justified;
				}
				
				.card-header { @apply --paper-font-headline; border-bottom: 1px solid var(--app-primary-color);}
				.card-light { color: var(--paper-grey-600); }
				iron-list {
					--iron-list-items-container: {
						margin: auto;
					};
				}
				.iron-list-parent{
					padding: 24px;
				}
				app-drawer{
					z-index: 4;
				}
				#license-footer, .license-footer {
					-webkit-align-self: flex-end;
					align-self: flex-end;
					padding: 16px 32px;
					
					text-align: center;
					font-size: small;
					border-top: 1px solid #ddd;
				}
				.no-style{
					color: black;
					text-decoration: none;
				}
				.example {
				  padding: .625rem 1.825rem .625rem 2.5rem;
				  border: 1px #ccc dashed;
				  position: relative;
				  margin: 0 0 .625rem 0;
				  background-color: #ffffff;
				  text-align: left;
				}
				.example:before,
				.example:after {
				  display: table;
				  content: "";
				}
				.example:after {
				  clear: both;
				}
				.example:before {
				  position: absolute;
				  content: attr(data-text);
				  text-transform: lowercase;
				  left: 1.5rem;
				  top: 11.875rem;
				  color: gray;
				  display: block;
				  font-size: 1rem;
				  line-height: 1rem;
				  height: 1rem;
				  text-align: right;
				  white-space: nowrap;
				  direction: ltr;
				  width: 12.5rem;
				  -webkit-transform: rotate(-90deg);
						  transform: rotate(-90deg);
				  -webkit-transform-origin: 0 100%;
						  transform-origin: 0 100%;
				}
				.prettyprint {
					overflow: hidden;
					overflow-x: scroll;
				}
				.prettyprint {
					background-color: #eeeeee;
					border: 0 !important;
					border-width: 1px !important;
					border-color: #eeeeee !important;
					border-left: 8px #555555 solid !important;
				}
				.prettyprint code{
					text-align: left;
				}
				md-card {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
          flex-direction: column;
  margin: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }
  md-card md-card-header {
    padding: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
            flex-direction: row; }
    md-card md-card-header:first-child md-card-avatar {
      margin-right: 12px; }
      [dir=rtl] md-card md-card-header:first-child md-card-avatar {
        margin-right: auto;
        margin-left: 12px; }
    md-card md-card-header:last-child md-card-avatar {
      margin-left: 12px; }
      [dir=rtl] md-card md-card-header:last-child md-card-avatar {
        margin-left: auto;
        margin-right: 12px; }
    md-card md-card-header md-card-avatar {
      width: 40px;
      height: 40px; }
      md-card md-card-header md-card-avatar .md-user-avatar,
      md-card md-card-header md-card-avatar md-icon {
        border-radius: 50%; }
      md-card md-card-header md-card-avatar md-icon {
        padding: 8px; }
        md-card md-card-header md-card-avatar md-icon > svg {
          height: inherit;
          width: inherit; }
      md-card md-card-header md-card-avatar + md-card-header-text {
        max-height: 40px; }
        md-card md-card-header md-card-avatar + md-card-header-text .md-title {
          font-size: 14px; }
    md-card md-card-header md-card-header-text {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
              flex-direction: column; }
      md-card md-card-header md-card-header-text .md-subhead {
        font-size: 14px; }
  md-card > img,
  md-card > md-card-header img,
  md-card md-card-title-media img {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
            flex: 0 0 auto;
    width: 100%;
    height: auto; }
  md-card md-card-title {
    padding: 24px 16px 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
            flex-direction: row; }
    md-card md-card-title + md-card-content {
      padding-top: 0; }
    md-card md-card-title md-card-title-text {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
              flex-direction: column;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex; }
      md-card md-card-title md-card-title-text .md-subhead {
        padding-top: 0;
        font-size: 14px; }
      md-card md-card-title md-card-title-text:only-child .md-subhead {
        padding-top: 12px; }
    md-card md-card-title md-card-title-media {
      margin-top: -8px; }
      md-card md-card-title md-card-title-media .md-media-sm {
        height: 80px;
        width: 80px; }
      md-card md-card-title md-card-title-media .md-media-md {
        height: 112px;
        width: 112px; }
      md-card md-card-title md-card-title-media .md-media-lg {
        height: 152px;
        width: 152px; }
  md-card md-card-content {
    display: block;
    padding: 16px; }
    md-card md-card-content > p:first-child {
      margin-top: 0; }
    md-card md-card-content > p:last-child {
      margin-bottom: 0; }
    md-card md-card-content .md-media-xl {
      height: 240px;
      width: 240px; }
  md-card .md-actions, md-card md-card-actions {
    margin: 8px; }
    md-card .md-actions.layout-column .md-button:not(.md-icon-button), md-card md-card-actions.layout-column .md-button:not(.md-icon-button) {
      margin: 2px 0; }
      md-card .md-actions.layout-column .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):first-of-type {
        margin-top: 0; }
      md-card .md-actions.layout-column .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):last-of-type {
        margin-bottom: 0; }
    md-card .md-actions.layout-column .md-button.md-icon-button, md-card md-card-actions.layout-column .md-button.md-icon-button {
      margin-top: 6px;
      margin-bottom: 6px; }
    md-card .md-actions md-card-icon-actions, md-card md-card-actions md-card-icon-actions {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
              justify-content: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
              flex-direction: row; }
    md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button), md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button) {
      margin: 0 4px; }
      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {
        margin-left: 0; }
        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {
          margin-left: auto;
          margin-right: 0; }
      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {
        margin-right: 0; }
        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {
          margin-right: auto;
          margin-left: 0; }
    md-card .md-actions:not(.layout-column) .md-button.md-icon-button, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button {
      margin-left: 6px;
      margin-right: 6px; }
      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {
        margin-left: 12px; }
        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {
          margin-left: auto;
          margin-right: 12px; }
      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {
        margin-right: 12px; }
        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {
          margin-right: auto;
          margin-left: 12px; }
    md-card .md-actions:not(.layout-column) .md-button + md-card-icon-actions, md-card md-card-actions:not(.layout-column) .md-button + md-card-icon-actions {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
              justify-content: flex-end;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
              flex-direction: row; }
  md-card md-card-footer {
    margin-top: auto;
    padding: 16px; }

@media screen and (-ms-high-contrast: active) {
  md-card {
    border: 1px solid #fff; } }

.md-image-no-fill > img {
  width: auto;
  height: auto; }
			</style>
			<app-header class="homepage" slot="header" condenses="" fixed reveals="" effects="waterfall">
				<app-toolbar sticky>
					<paper-icon-button id="trig_drawer" src="{{ icon_link_1 }}" on-click="trig_drawer"></paper-icon-button>
					<div class="block-homepage">
						<div main-title class="main-title">{{ title }}</div>
					</div>
					
				</app-toolbar>
			</app-header>
			<app-drawer swipe-open opened="{{drawer_status}}"></app-drawer>
			<main>
				<div class="iron-list-parent">
					<md-card>
						<md-card-title>
							<md-card-title-text class="card-header">
								Installation
							</md-card-title-text>
						</md-card-title>
						<md-card-content>
							<p>This library required mongodb pecl, <a href="https://pecl.php.net/package/mongodb" class="no-style" target="_blank">you can download here</a> and then activated the extension via php.ini</p>
							<p>Then download mongodb php driver from composer</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$ composer require mongodb/mongodb
								</code></pre>
							</div>
							<p>Then download this query builder from my github, extrack folder to your ci project, and edit config file 'mongodb.php' in application/config</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>							
// This setup where is activated database
$config['mongodb']['active'] = 'default';

// This is a link to your database
$config['mongodb']['default']['dns']	=		'mongodb://127.0.0.1:27017/';

// This your database name
$config['mongodb']['default']['database']	=		'my_database';

// This for development ( if Query fails, the error will show the details )
$config['mongodb']['default']['db_debug']	=		TRUE;

// You can set all result query as 'object' (default) or 'array'
$config['mongodb']['default']['return_as']	=		'object';

// See full info: https://docs.mongodb.com/manual/reference/write-concern/
$config['mongodb']['default']['write_concerns']	=		(int)1;
$config['mongodb']['default']['journal']	=		TRUE;

// See full info: https://docs.mongodb.com/manual/reference/read-preference/
$config['mongodb']['default']['read_preference']	=		NULL;
$config['mongodb']['default']['read_preference_tags']=		NULL;
								</code></pre>
							</div>
							<p>Last, load the library</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this->load->library('mongodb');
								</code></pre>
							</div>
						</md-card-content>
					</md-card>
					
					<md-card>
						<md-card-title>
							<md-card-title-text class="card-header">
								Query Function (USE CTRL + F TO FIND FUNCTION)
							</md-card-title-text>
						</md-card-title>
						<md-card-content>
							<p>$this->mongodb->insert($collection = "", $insert = array())</p>
							<p class="card-light">Insert a new document into the passed collection.</p>
							<p class="card-light">@return : objectid : if have insert _id return _id, if not set _id will return id.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;insert('my_table', array('title'=>'Judul ke-4', 'content'=>'Lores apum lorem'))
								</code></pre>
							</div>
							<p>$this->mongodb->batch_insert($collection = "", $insert = array())</p>
							<p class="card-light">Insert a multiple document into the collection.</p>
							<p class="card-light">@return : objectid : if have insert _id return _id, if not set _id will return id.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;batch_insert('my_table', array(array('title'=>'Judul ke-4', 'content'=>'Lores apum lorem'), array('title'=>'Judul ke-5', 'content'=>'Lores apum lorem')))
								</code></pre>
							</div>
							<p>$this->mongodb->select($includes = array(), $excludes = array())</p>
							<p class="card-light">Determine which fields to include OR which to exclude during the query process. If you want to only choose fields to exclude, leave $includes an empty array().</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;select(array('title', 'content', 'date'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->get($collection = "")</p>
							<p class="card-light">Runs the selection query and returns the result. Can be used by itself to retrieve all records from a table</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;get('my_table')
								</code></pre>
							</div>
							<p>$this->mongodb->where($wheres, $value = null)</p>
							<p class="card-light">This function enables you to set WHERE clauses using one of four methods</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where(array('title' => 'Judul ke-1'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->or_where($wheres = array())</p>
							<p class="card-light">This function is identical to the one above, except that multiple instances are joined by OR:</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;or_where(array('title' => 'Judul ke-1', 'title' => 'Judul ke-2'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_in($field = "", $in = array())</p>
							<p class="card-light">Get the documents where the value of a $field is in a given $in array()</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_in('title', array('Judul ke-1', 'Judul ke-2', 'Judul ke-3'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_in_all($field = "", $in = array())</p>
							<p class="card-light">Get the documents where the value of a $field is in all of a given $in array()</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_in_all('title', array('Judul ke-1', 'Judul ke-2'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_not_in($field = "", $in = array())</p>
							<p class="card-light">Get the documents where the value of a $field is not in a given $in array()</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_not_in('title', array('Judul ke-1', 'Judul ke-2'));
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_gt($field = "", $x)</p>
							<p class="card-light">Get the documents where the value of a $field is greater than $x</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_gt('score', 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_gte($field = "", $x)</p>
							<p class="card-light">Get the documents where the value of a $field is greater than or equal to $x</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_gte('score', 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_lt($field = "", $x)</p>
							<p class="card-light">Get the documents where the value of a $field is less than $x</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_lt('score', 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_lte($field = "", $x)</p>
							<p class="card-light">Get the documents where the value of a $field is less than or equal to $x</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_lte('score', 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_between($field = "", $x, $y)</p>
							<p class="card-light">Get the documents where the value of a $field is between $x and $y</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_between('score', 10, 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_between_ne($field = "", $x, $y)</p>
							<p class="card-light">Get the documents where the value of a $field is between but not equal to $x and $y</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_between_ne('score', 10, 20);
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->where_ne($field = '', $x)</p>
							<p class="card-light">Get the documents where the value of a $field is not equal to $x</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;where_ne('title', 'Judul ke-2');
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->like($field = "", $value = "", $flags = "i", $enable_start_wildcard = TRUE, $enable_end_wildcard = TRUE)</p>
							<p class="card-light">Get the documents where the (string) value of a $field is like a value. The defaults allow for a case-insensitive search.</p>
							<p class="card-light"></p>
							<p class="card-light">@param $flags<br />
	Allows for the typical regular expression flags:<br />
	i = case insensitive<br />
	m = multiline<br />
	x = can contain comments<br />
	l = locale<br />
	s = dotall, "." matches everything, including newlines<br />
	u = match unicode</p>
							<p class="card-light">@param $enable_start_wildcard<br />
	If set to anything other than TRUE, a starting line character "^" will be prepended to the search value, representing only searching for a value at the start of a new line.</p>
							<p class="card-light">@param $enable_end_wildcard<br />
	If set to anything other than TRUE, an ending line character "$" will be appended to the search value, representing only searching for a value at the end ofa line.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$this-&gt;mongodb-&gt;like('title', 'Judul', 'i');
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->get($collection = "")</p>
							<p class="card-light">Get the documents based upon the passed parameters</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->get_where($collection = "", $where = array())</p>
							<p class="card-light">Get the documents based upon the passed parameters</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;get_where('my_table', array('title' => 'something'));
								</code></pre>
							</div>
							<p>$this->mongodb->find_one($collection = "")</p>
							<p class="card-light">Get the single document based upon the passed parameters</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query1 = $this-&gt;mongodb-&gt;find_one('my_table');
$query2 = $this-&gt;mongodb-&gt;where(array('id'=>4))-&gt;find_one('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->count($collection = "")</p>
							<p class="card-light">Count the documents based upon the passed parameters</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query1 = $this-&gt;mongodb-&gt;count('my_table');
$query2 = $this-&gt;mongodb-&gt;where(array('date'=>'03/07/2018'))-&gt;count('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->set($fields, $value = NULL)</p>
							<p class="card-light">Sets a field to a value</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;set('title', 'Judul ke-1 fix')-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->unset_field($fields)</p>
							<p class="card-light">Unsets a field (or fields)</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;unset_field('title')-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->addtoset($field, $values)</p>
							<p class="card-light">Adds value to the array only if its not in the array already</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;addtoset('title', array('php', 'codeigniter', 'mongodb'))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->push($fields, $value = array())</p>
							<p class="card-light">Pushes values into a field (field must be an array)</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query1 = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;push('comments', array('text'=>'Hello world'))-&gt;update('my_table');
$query1 = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;push(array('comments' => array('text'=>'Hello world')), 'viewed_by' => array('Alex'))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->pop($field)</p>
							<p class="card-light">Pops the last value from a field (field must be an array)</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('title'=>'Judul ke-1'))-&gt;pop('comments')-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->pull($field = "", $value = array())</p>
							<p class="card-light">Removes by an array by the value of a field</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;pull('comments', array('comment_id'=>123))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->rename_field($old, $new)</p>
							<p class="card-light">Removes by an array by the value of a field</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('blog_id'=>123))-&gt;rename_field('posted_by', 'author')-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->inc($fields = array(), $value = 0)</p>
							<p class="card-light">Increments the value of a field</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('blog_id'=>123))-&gt;inc(array('num_comments' => 1))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->mul($fields = array(), $value = 0)</p>
							<p class="card-light">Multiple the value of a field</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('blog_id'=>123))-&gt;mul(array('num_comments' => 3))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->max($fields = array(), $value = 0)</p>
							<p class="card-light">The $max operator updates the value of the field to a specified value if the specified value is greater than the current value of the field.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('blog_id'=>123))-&gt;max(array('num_comments' => 3))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->min($fields = array(), $value = 0)</p>
							<p class="card-light">The $min updates the value of the field to a specified value if the specified value is less than the current value of the field.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;where(array('blog_id'=>123))-&gt;min(array('num_comments' => 3))-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->distinct($collection = "", $field="")</p>
							<p class="card-light">Finds the distinct values for a specified field across a single collection.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;distinct('my_table', 'title');
								</code></pre>
							</div>
							<p>$this->mongodb->update($collection = "", $options = array())</p>
							<p class="card-light">Updates a single document in Mongo.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;update('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->update_all($collection = "", $data = array(), $options = array())</p>
							<p class="card-light">Updates a collection of documents.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;update_all('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->delete($collection = "")</p>
							<p class="card-light">delete document from the passed collection based upon certain criteria.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;delete('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->delete_all($collection = "")</p>
							<p class="card-light">Delete all documents from the passed collection based upon certain criteria.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;delete_all('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->aggregate($collection, $operation)</p>
							<p class="card-light">Perform aggregation on mongodb collection. <a class="no-style card-light" href="https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/" target="_blank">Click here to see full docs about aggregate.</a></p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;aggregate('my_table', array());
								</code></pre>
							</div>
							<p>$this->mongodb->order_by($fields = array())</p>
							<p class="card-light">Sort the documents based on the parameters passed. To set values to descending order, you must pass values of either -1, FALSE, 'desc', or 'DESC', else they will be set to 1 (ASC).</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;order_by(array('foo' => 'ASC'))-&gt;get('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->date($stamp = FALSE)</p>
							<p class="card-light">Create new MongoDate object from current time or pass timestamp to create * mongodate.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;date();
								</code></pre>
							</div>
							<p>$this->mongodb->limit($x = 99999)</p>
							<p class="card-light">Limit the result set to $x number of documents.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;limit(4);
								</code></pre>
							</div>
							<p>$this->mongodb->offset($x = 0)</p>
							<p class="card-light">Offset the result set to skip $x number of documents.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;offset(4);
								</code></pre>
							</div>
							<p>$this->mongodb->command($collection, $command = array())</p>
							<p class="card-light">Runs a MongoDB command. <a class="no-style card-light" href="https://docs.mongodb.com/manual/reference/command/" target="_blank">Click here to see full docs about command.</a></p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;command('my_table', array('geoNear'=>'buildings', 'near'=>array(53.228482, -0.547847), 'num' => 10, 'nearSphere'=>true));
								</code></pre>
							</div>
							<p>$this->mongodb->add_index($collection = "", $keys = array(), $options = array())</p>
							<p class="card-light">Ensure an index of the keys in a collection with optional parameters. To set values to descending order.</p>
							<p class="card-light">you must pass values of either -1, FALSE, 'desc', or 'DESC', else they will be set to 1 (ASC)..</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;add_index('my_table', array('first_name' => 'ASC', 'last_name' => -1), array('unique' => TRUE));
								</code></pre>
							</div>
							<p>$this->mongodb->remove_index($collection = "", $keys = array())</p>
							<p class="card-light">Remove an index of the keys in a collection. To set values to descending order, you must pass values of either -1, FALSE, 'desc', or 'DESC', else they will be set to 1 (ASC)</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;remove_index('my_table', array('first_name' => 'ASC', 'last_name' => -1));
								</code></pre>
							</div>
							<p>$this->mongodb->list_indexes($collection = "")</p>
							<p class="card-light">Lists all indexes in a collection.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;list_indexes('my_table');
								</code></pre>
							</div>
							<p>$this->mongodb->switch_db($database = '')</p>
							<p class="card-light">Switch from default database to a different db.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;switch_db('second_database');
								</code></pre>
							</div>
							<p>$this->mongodb->drop_db($database = '')</p>
							<p class="card-light">Drop a Mongo database.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;drop_db('my_database');
								</code></pre>
							</div>
							<p>$this->mongodb->drop_collection($col = '')</p>
							<p class="card-light">Drop a Mongo collection.</p>
							<div class="example" data-text="code">
								<pre class="prettyprint linenums"><code>
$query = $this-&gt;mongodb-&gt;drop_collection('my_table');
								</code></pre>
							</div>
						</md-card-content>
					</md-card>
					
				</div>
			
				<div id="license-footer" flex>
					Made with love with Polymer 3.0&nbsp;•&nbsp;Created by <a class="no-style" href="https://facebook.com/akagenomea">Alfian Rikzandi</a> .
				</div>
			</main>
			
			

    `}static get properties(){return{selected:{type:Number,value:0},title:{type:String,value:"MongoDB Query Builder PHP"},icon_link_1:{type:String,value:"http://127.0.0.1:8081/aset/icons/ic_menu_black_24px.svg"},drawer_status:{type:Boolean,value:!1},thisYear:{type:String,value:"2018"}}}trig_drawer(){if(!this.drawer_status){this.drawer_status=!0}else{this.drawer_status=!1}}}window.customElements.define("mongodb-php-query-builder-app",MongodbPhpQueryBuilderApp);