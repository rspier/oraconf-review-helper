/*
Copyright 2015 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var fixed_header = $("<div/>", {"id": "fixed_header"});
$('.branding_bar').before(fixed_header);
var header_spacer = $("<div />", {"id": "header_spacer"});
fixed_header.after(header_spacer);

var proposal_box = $("div#en_review_proposal_box");
proposal_box.detach();
proposal_box.appendTo(fixed_header);

var h1 = $('h1');
h1.detach();
h1.appendTo(fixed_header);

header_spacer.css('height', fixed_header.css('height'));